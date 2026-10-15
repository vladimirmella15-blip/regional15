// Seleccion de centros para comparar.
//
// Vive en localStorage porque se arma en el mapa (/mapa) y se consume en otra
// ruta (/comparar): sin almacenamiento, cada cambio de pagina la borraria.
// La URL es lo que hace que la comparacion se pueda compartir por enlace, asi
// que los codigos viajan en el query y el localStorage solo sirve para armar el
// viaje.
//
// Este archivo NO lleva 'use client' a proposito: normalizar() lo necesita
// /comparar, que se dibuja en el servidor. Lo que toca localStorage ya esta
// protegido con typeof window para que corra en los dos lados.

export const MAX_COMPARAR = 3
const CLAVE = 'regional15:comparar'

const esCodigo = (v: string) => /^\d{5}$/.test(v)

export function normalizar(codigos: unknown): string[] {
  if (!Array.isArray(codigos)) return []
  const limpios: string[] = []
  for (const c of codigos) {
    const v = String(c).trim()
    if (esCodigo(v) && !limpios.includes(v) && limpios.length < MAX_COMPARAR) limpios.push(v)
  }
  return limpios
}

export function leerComparacion(): string[] {
  if (typeof window === 'undefined') return []
  try {
    return normalizar(JSON.parse(window.localStorage.getItem(CLAVE) || '[]'))
  } catch {
    return []
  }
}

export function escribirComparacion(codigos: string[]): string[] {
  const limpio = normalizar(codigos)
  if (typeof window === 'undefined') return limpio
  try {
    window.localStorage.setItem(CLAVE, JSON.stringify(limpio))
  } catch {
    // Modo privado o almacenamiento lleno: la comparacion igual funciona si la
    // persona entra por un enlace, solo se pierde al cambiar de pagina.
  }
  return limpio
}

/** Agrega o quita un codigo. Devuelve la seleccion nueva. */
export function alternarComparacion(codigo: string): string[] {
  const actual = leerComparacion()
  if (!esCodigo(codigo)) return actual
  if (actual.includes(codigo)) return escribirComparacion(actual.filter(c => c !== codigo))
  if (actual.length >= MAX_COMPARAR) return actual
  return escribirComparacion([...actual, codigo])
}

export function limpiarComparacion(): string[] {
  return escribirComparacion([])
}