// Indice de centros educativos para el asistente (/api/chat).
//
// Se construye una sola vez por proceso del servidor a partir de los listados
// estaticos y se expone como herramientas (tool calling) para que el modelo
// responda con datos reales: nombres, codigos SIGERD, niveles, sectores y
// matriculas. Los 1.400+ registros NUNCA se mandan al modelo: solo lo que
// devuelven estas funciones.
//
// Vive en el servidor a proposito: `data/ubicaciones.ts` pesa 300 KB y las
// herramientas no deben poder consultarse desde el navegador.

import { centrosPorDistrito } from '@/data/centros'
import { centrosPrivadosPorDistrito } from '@/data/centros-privados'
import { centrosPrivadosAdicionalesPorDistrito } from '@/data/centros-adicionales-privados'
import { ubicacionesPorCodigo } from '@/data/ubicaciones'
import { normalizar } from '@/lib/texto'

export interface CentroIndice {
  codigo: string
  nombre: string
  nivel: string | null
  tipo: string
  distrito: string
  distritoNombre: string
  sector: string | null
  direccion: string | null
  lat: number | null
  lng: number | null
  secciones: number | null
  matricula: number | null
}

export interface ResultadoBusqueda {
  centro: CentroIndice
  distanciaKm: number | null
}

function conectar() {
  const registros: CentroIndice[] = []
  const vistos = new Set<string>()

  const agregar = (
    c: { codigo?: string; nombre: string; nivel?: string; secciones?: number; matricula?: number; tipo?: string },
    d: { codigo: string; nombre: string },
    tipo: string
  ) => {
    if (!c.codigo || vistos.has(c.codigo)) return
    vistos.add(c.codigo)
    const u = ubicacionesPorCodigo[c.codigo]
    const lat = typeof u?.lat === 'number' ? u.lat : null
    const lng = typeof u?.lng === 'number' ? u.lng : null
    // Una longitud positiva es un dato corrupto del padron: se descarta.
    const coordenada =
      lat != null && lng != null && lng >= -180 && lng <= 180 ? { lat, lng } : { lat: null, lng: null }

    registros.push({
      codigo: c.codigo,
      nombre: c.nombre,
      nivel: c.nivel || null,
      tipo: c.tipo || tipo,
      distrito: d.codigo,
      distritoNombre: d.nombre,
      sector: u?.sector || null,
      direccion: u?.direccion || null,
      lat: coordenada.lat,
      lng: coordenada.lng,
      secciones: typeof c.secciones === 'number' ? c.secciones : null,
      matricula: typeof c.matricula === 'number' ? c.matricula : null,
    })
  }

  for (const d of centrosPorDistrito) for (const c of d.centros) agregar(c, d, 'Público')
  for (const d of centrosPrivadosPorDistrito) for (const c of d.centros) agregar(c, d, 'Privado')
  for (const d of centrosPrivadosAdicionalesPorDistrito) for (const c of d.centros) agregar(c, d, 'Privado')

  return registros
}

let _registros: CentroIndice[] | null = null
function registros(): CentroIndice[] {
  if (!_registros) _registros = conectar()
  return _registros
}

/** Indice invertido por palabra, para que "patria" encuentre "PATRIA MIRABAL". */
let _porPalabra: Map<string, Set<string>> | null = null
function indicePorPalabra(): Map<string, Set<string>> {
  if (_porPalabra) return _porPalabra
  const mapa = new Map<string, Set<string>>()
  for (const c of registros()) {
    for (const palabra of new Set(c.nombre.toLowerCase().split(/[^a-z0-9áéíóúñü]+/i).filter(p => p.length > 2))) {
      if (!mapa.has(palabra)) mapa.set(palabra, new Set())
      mapa.get(palabra)!.add(c.codigo)
    }
  }
  _porPalabra = mapa
  return mapa
}

export function buscarCentro(codigo: string): CentroIndice | null {
  const limpio = String(codigo || '').replace(/\D/g, '').slice(0, 5)
  if (!limpio) return null
  return registros().find(c => c.codigo === limpio) || null
}

export interface OpcionesBusqueda {
  texto?: string
  distrito?: string
  nivel?: string
  tipo?: string
  sector?: string
  limite?: number
}

export function buscarCentros(opts: OpcionesBusqueda = {}): CentroIndice[] {
  const limite = Math.min(Math.max(Number(opts.limite) || 10, 1), 25)
  const q = normalizar(String(opts.texto || '').trim())
  const porPalabra = new Set<string>()

  if (q) {
    // Cada palabra de la consulta se busca en el indice invertido y se suman los
    // centros que coincidan con alguna, para que "liceo patria" funcione.
    for (const palabra of new Set(q.toLowerCase().split(/\s+/).filter(p => p.length > 2))) {
      for (const [clave, codigos] of indicePorPalabra()) {
        if (clave.startsWith(palabra) || palabra.startsWith(clave.slice(0, Math.max(3, palabra.length)))) {
          for (const codigo of codigos) porPalabra.add(codigo)
        }
      }
    }
  }

  const resultados = registros().filter(c => {
    if (q) {
      const nq = normalizar(c.nombre)
      const nCodigo = normalizar(c.codigo)
      const nSector = normalizar(c.sector || '')
      const nDistrito = normalizar(c.distritoNombre)
      if (!nq.includes(q) && !nCodigo.includes(q) && !nSector.includes(q) && !nDistrito.includes(q) && !porPalabra.has(c.codigo)) return false
    }
    if (opts.distrito) {
      const d = String(opts.distrito).trim()
      if (c.distrito !== d && normalizar(c.distritoNombre) !== normalizar(d) && !normalizar(c.distritoNombre).includes(normalizar(d))) return false
    }
    if (opts.nivel) {
      const n = normalizar(String(opts.nivel))
      if (normalizar(c.nivel || '') !== n && !normalizar(c.nivel || '').includes(n)) return false
    }
    if (opts.tipo) {
      if (normalizar(c.tipo) !== normalizar(String(opts.tipo))) return false
    }
    if (opts.sector) {
      if (!c.sector || !normalizar(c.sector).includes(normalizar(String(opts.sector)))) return false
    }
    return true
  })

  return resultados.slice(0, limite)
}

function haversineKm(aLat: number, aLng: number, bLat: number, bLng: number) {
  const R = 6371
  const dLat = ((bLat - aLat) * Math.PI) / 180
  const dLng = ((bLng - aLng) * Math.PI) / 180
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((aLat * Math.PI) / 180) * Math.cos((bLat * Math.PI) / 180) * Math.sin(dLng / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(s))
}

export function centrosCercanos(lat: number, lng: number, radioKm = 3, limite = 10): ResultadoBusqueda[] {
  const radio = Math.min(Math.max(Number(radioKm) || 3, 0.2), 50)
  const lim = Math.min(Math.max(Number(limite) || 10, 1), 25)
  const aLat = Number(lat)
  const aLng = Number(lng)
  if (!Number.isFinite(aLat) || !Number.isFinite(aLng)) return []

  return registros()
    .filter(c => c.lat != null && c.lng != null)
    .map(c => ({ centro: c, distanciaKm: haversineKm(aLat, aLng, c.lat!, c.lng!) }))
    .filter(r => r.distanciaKm <= radio)
    .sort((x, y) => x.distanciaKm - y.distanciaKm)
    .slice(0, lim)
}

export function estadisticas(filtros: { distrito?: string; nivel?: string; tipo?: string } = {}) {
  // Se agrega sobre el conjunto completo: buscarCentros recorta por `limite`.
  const todos = registros().filter(c => {
    if (filtros.distrito) {
      const d = normalizar(filtros.distrito)
      if (c.distrito !== filtros.distrito && normalizar(c.distritoNombre) !== d && !normalizar(c.distritoNombre).includes(d)) return false
    }
    if (filtros.nivel && normalizar(c.nivel || '') !== normalizar(filtros.nivel)) return false
    if (filtros.tipo && normalizar(c.tipo) !== normalizar(filtros.tipo)) return false
    return true
  })

  const conMatricula = todos.filter(c => c.matricula != null && c.matricula > 0)
  const totalMatricula = conMatricula.reduce((s, c) => s + c.matricula!, 0)
  const totalSecciones = todos.reduce((s, c) => s + (c.secciones || 0), 0)

  const porDistrito: Record<string, { centros: number; matricula: number }> = {}
  const porNivel: Record<string, number> = {}
  const porTipo: Record<string, number> = {}
  for (const c of todos) {
    const d = (porDistrito[c.distritoNombre] ||= { centros: 0, matricula: 0 })
    d.centros++
    d.matricula += c.matricula || 0
    if (c.nivel) porNivel[c.nivel] = (porNivel[c.nivel] || 0) + 1
    porTipo[c.tipo] = (porTipo[c.tipo] || 0) + 1
  }

  const top = [...conMatricula].sort((a, b) => b.matricula! - a.matricula!).slice(0, 5)

  return {
    centros: todos.length,
    total_matricula: totalMatricula,
    total_secciones: totalSecciones,
    proporcion_estudiantes_por_seccion: totalSecciones ? Number((totalMatricula / totalSecciones).toFixed(1)) : null,
    por_distrito: porDistrito,
    por_nivel: porNivel,
    por_tipo: porTipo,
    centros_con_mayor_matricula: top.map(c => ({ codigo: c.codigo, nombre: c.nombre, matricula: c.matricula })),
  }
}

/** Resumen corto para el prompt del sistema. Nunca incluye la lista completa. */
export function resumenParaPrompt() {
  const todos = registros()
  const porDistrito = new Map<string, { centros: number; matricula: number }>()
  for (const c of todos) {
    const d = porDistrito.get(c.distritoNombre) || { centros: 0, matricula: 0 }
    d.centros++
    d.matricula += c.matricula || 0
    porDistrito.set(c.distritoNombre, d)
  }
  const totalMatricula = todos.reduce((s, c) => s + (c.matricula || 0), 0)
  const lineas = [...porDistrito.entries()].map(([nombre, d]) => `- ${nombre}: ${d.centros} centros, ${d.matricula.toLocaleString('es-DO')} estudiantes`)
  return `- Total regional: ${todos.length} centros con ${totalMatricula.toLocaleString('es-DO')} estudiantes\n${lineas.join('\n')}`
}

export function totalCentros() {
  return registros().length
}
