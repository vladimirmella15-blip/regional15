// Datos publicos de un centro educativo y la URL que lo identifica.
//
// La ruta es /centros/<nombre-en-minusculas>-<codigo SIGERD>, por ejemplo
// /centros/liceo-patria-mirabal-16394. Llevar el nombre en la URL ayuda a que
// quien busca "liceo patria mirabal" en un buscador llegue a la ficha, y el
// codigo al final deja siempre claro de que centro se trata.

import { centrosPorDistrito, type Centro } from '@/data/centros'
import { centrosPrivadosPorDistrito } from '@/data/centros-privados'
import { centrosPrivadosAdicionalesPorDistrito } from '@/data/centros-adicionales-privados'
import { ubicacionesPorCodigo, type Ubicacion } from '@/data/ubicaciones'
import padronRegional15 from '@/data/padron-regional15.json'
import { slugify, construirSlug } from '@/lib/slug'

export { slugify, construirSlug, urlCentro } from '@/lib/slug'

export interface CentroPublico extends Centro {
  tipoResuelto: 'Público' | 'Privado' | 'Semioficial'
  distrito: string
  distritoNombre: string
  ubicacion: Ubicacion
  matriculaOficial: number | null
  slug: string
  url: string
  coords: { lat: number; lng: number } | null
}

const padron = (padronRegional15 as { centros: Record<string, { d: string; n: string; m: number | null }> }).centros

let _cache: CentroPublico[] | null = null

function dentroDeLaRegion(lat?: number, lng?: number) {
  return (
    typeof lat === 'number' &&
    typeof lng === 'number' &&
    Number.isFinite(lat) &&
    Number.isFinite(lng) &&
    lat >= 18.4 &&
    lat <= 18.7 &&
    lng >= -70.2 &&
    lng <= -69.85
  )
}

/** Todos los centros con su URL y su ubicacion, en un solo arreglo. */
export function todosLosCentrosPublicos(): CentroPublico[] {
  if (_cache) return _cache

  const vistos = new Set<string>()
  const salida: CentroPublico[] = []

  const agregar = (c: Centro, d: { codigo: string; nombre: string }, tipoResuelto: CentroPublico['tipoResuelto']) => {
    if (!c.codigo || vistos.has(c.codigo)) return
    vistos.add(c.codigo)
    const u = ubicacionesPorCodigo[c.codigo] || {}
    const slug = construirSlug(c.nombre, c.codigo)
    salida.push({
      ...c,
      tipoResuelto,
      distrito: d.codigo,
      distritoNombre: d.nombre,
      ubicacion: u,
      matriculaOficial: padron[c.codigo]?.m ?? null,
      slug,
      url: `/centros/${slug}`,
      coords: dentroDeLaRegion(u.lat, u.lng) ? { lat: u.lat!, lng: u.lng! } : null,
    })
  }

  for (const d of centrosPorDistrito) for (const c of d.centros) agregar(c, d, c.tipo || 'Público')
  for (const d of centrosPrivadosPorDistrito) for (const c of d.centros) agregar(c, d, 'Privado')
  for (const d of centrosPrivadosAdicionalesPorDistrito) for (const c of d.centros) agregar(c, d, 'Privado')

  _cache = salida.sort((a, b) => (a.codigo! < b.codigo! ? -1 : 1))
  return _cache
}

/** Busca por codigo SIGERD. */
export function centroPorCodigo(codigo: string): CentroPublico | null {
  return todosLosCentrosPublicos().find(c => c.codigo === codigo) || null
}

/**
 * Busca por el segmento de la URL. Acepta "nombre-codigo" y tambien solo el
 * codigo, para que unadireccion vieja o mal escrita no de 404.
 */
export function centroPorSlug(slug: string): CentroPublico | null {
  const decodificado = decodeURIComponent(slug).toLowerCase()
  const porCodigo = /(\d{5})$/.exec(decodificado)
  if (porCodigo) return centroPorCodigo(porCodigo[1])
  return todosLosCentrosPublicos().find(c => c.slug === decodificado) || null
}

/** Codigo -> slug, para que el mapa y el buscador enlacen sin recalcular. */
export function slugPorCodigo(codigo: string): string {
  return centroPorCodigo(codigo)?.slug || `${slugify(codigo)}-${codigo}`
}
