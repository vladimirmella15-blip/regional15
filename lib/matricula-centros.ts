// Matrícula y secciones oficiales por centro, año escolar 2026-2027.
//
// La fuente es la relación entregada por la Regional 15. El mapa, el buscador,
// las fichas de centro y el asistente leen de aquí para no seguir mostrando la
// matrícula de 2024-2025.
//
// El JSON usa un formato compacto para no cargar cientos de KB en el navegador:
//   { "00232": [1260, 34, "A"] }  =>  matrícula, secciones, estado

import datos from '@/data/matricula-centros-2026-2027.json'

export interface MatriculaCentroOficial {
  m: number
  s: number
  estado: string
}

interface ArchivoMatriculaCentros {
  periodo: string
  total: number
  totalSecciones: number
  centros: Record<string, [number, number, string]>
}

const archivo = datos as unknown as ArchivoMatriculaCentros

export const PERIODO_MATRICULA_CENTROS = archivo.periodo
export const TOTAL_MATRICULA_CENTROS = archivo.total
export const TOTAL_SECCIONES_CENTROS = archivo.totalSecciones

const ESTADOS: Record<string, string> = {
  A: 'Autorizado',
  T: 'Centro Autorizado temporalmente',
  N: 'No autorizado',
  C: 'Cerrado',
}

export function matriculaCentro(codigo?: string | null): MatriculaCentroOficial | null {
  if (!codigo) return null
  const fila = archivo.centros[codigo]
  if (!fila) return null
  return {
    m: fila[0],
    s: fila[1],
    estado: ESTADOS[fila[2]] || 'No autorizado',
  }
}

/**
 * Devuelve una copia del centro con la matrícula y las secciones de 2026-2027.
 * Si el centro no está en la relación oficial, se deja tal como estaba.
 */
export function conMatriculaActualizada<
  T extends { codigo?: string; matricula?: number; secciones?: number; periodo?: string },
>(centro: T): T {
  const oficial = matriculaCentro(centro.codigo)
  if (!oficial) return centro
  return {
    ...centro,
    matricula: oficial.m,
    secciones: oficial.s,
    periodo: PERIODO_MATRICULA_CENTROS,
  }
}

export function etiquetaEstado(estado?: string | null): string {
  if (!estado) return ''
  if (estado === 'Centro Autorizado temporalmente') return 'Autorización temporal'
  return estado
}
