// Matrícula oficial por año escolar.
//
// Cada año vive en su propio JSON para no mezclar fuentes:
//   - 2024-2025 se agrega desde el padrón del MINERD (por centro y nivel).
//   - 2026-2027 es la relación entregada por la Regional 15, con sexo.
//
// Este archivo no lleva 'use client': lo puede consumir tanto el servidor como
// el componente de distritos, que es cliente.

import matricula20242025 from '@/data/matricula-2024-2025.json'
import matricula20262027 from '@/data/matricula-2026-2027.json'

export type NivelKey = 'inicial' | 'primario' | 'secundario' | 'adultos'

export const NIVELES: { key: NivelKey; nombre: string; corto: string }[] = [
  { key: 'inicial', nombre: 'Inicial', corto: 'Inicial' },
  { key: 'primario', nombre: 'Primario', corto: 'Primario' },
  { key: 'secundario', nombre: 'Secundario', corto: 'Secundario' },
  { key: 'adultos', nombre: 'Adultos', corto: 'Adultos' },
]

export interface MatriculaCelda {
  total: number
  femenino?: number
  masculino?: number
}

export interface MatriculaPorSexo {
  femenino: number
  masculino: number
}

export interface PeriodoMatricula {
  periodo: string
  fuente: string
  nota?: string
  total: number
  porSexo: MatriculaPorSexo | null
  porDistrito: Record<string, MatriculaCelda>
  porNivel: Record<string, MatriculaCelda>
  porDistritoNivel: Record<string, Record<string, MatriculaCelda>>
}

export const PERIODOS: PeriodoMatricula[] = [
  matricula20242025,
  matricula20262027,
] as unknown as PeriodoMatricula[]

/** Año más reciente con datos oficiales. */
export const PERIODO_ACTUAL = PERIODOS[PERIODOS.length - 1]

/** Primer año con datos, que sirve de base para la comparativa. */
export const PERIODO_BASE = PERIODOS[0]

export function getPeriodo(periodo: string): PeriodoMatricula {
  return PERIODOS.find(p => p.periodo === periodo) ?? PERIODO_ACTUAL
}

export function matriculaDeDistrito(
  periodo: PeriodoMatricula,
  codigo: string,
): MatriculaCelda {
  return periodo.porDistrito[codigo] ?? { total: 0 }
}

export function matriculaDeDistritoNivel(
  periodo: PeriodoMatricula,
  codigo: string,
  nivel: NivelKey,
): MatriculaCelda {
  return periodo.porDistritoNivel[codigo]?.[nivel] ?? { total: 0 }
}

export interface ComparacionMatricula {
  anterior: number
  actual: number
  diferencia: number
  /** Variación porcentual. null cuando el año base no tenía matrícula. */
  variacion: number | null
}

export function compararCeldas(
  anterior: MatriculaCelda | undefined,
  actual: MatriculaCelda | undefined,
): ComparacionMatricula {
  const a = anterior?.total ?? 0
  const b = actual?.total ?? 0
  return {
    anterior: a,
    actual: b,
    diferencia: b - a,
    variacion: a > 0 ? ((b - a) / a) * 100 : null,
  }
}

export function formatearMatricula(valor: number): string {
  return valor.toLocaleString('es-DO')
}

export function formatearVariacion(valor: number | null): string {
  if (valor === null || !Number.isFinite(valor)) return '—'
  const signo = valor > 0 ? '+' : ''
  return `${signo}${valor.toFixed(1)}%`
}
