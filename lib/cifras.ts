// Cifras oficiales de la Regional 15.
//
// Antes vivian escritas a mano en public/data/content.json y se quedaron viejas:
// el sitio decia 1.443 centros cuando tenia 1.483, y 580+816+18 no sumaba ni
// esos 1.443. Aqui se calculan desde las fuentes, de modo quecada vez que se
// agregue un centro se actualizan solas.
//
// La matrícula grande sale de la relación oficial 2026-2027 por centro
// (data/matricula-centros-2026-2027.json). La suma por código se publica
// aparte, porque un mismo plantel puede tener un código por nivel.

import { centrosPorDistrito } from '@/data/centros'
import { centrosPrivadosPorDistrito } from '@/data/centros-privados'
import { centrosPrivadosAdicionalesPorDistrito } from '@/data/centros-adicionales-privados'
import { matriculaCentro, PERIODO_MATRICULA_CENTROS, TOTAL_MATRICULA_CENTROS } from './matricula-centros'
import { PERIODO_ACTUAL } from './matricula'

let _cache: CifrasOficiales | null = null

export interface CifrasOficiales {
  centros_total: number
  centros_publicos: number
  centros_privados: number
  centros_semioficiales: number
  centros_con_punto: number
  estudiantes_publicos_oficial: number
  estudiantes_por_distrito: Record<string, number>
  /** Suma del campo matricula de cada codigo SIGERD. Cuenta de mas. */
  matricula_por_codigo: { publicos: number; privados: number; total: number }
  periodo_matricula: string
}

export function cifrasOficiales(): CifrasOficiales {
  if (_cache) return _cache

  const vistos = new Set<string>()
  const porTipo: Record<string, { n: number; mat: number }> = {}
  const pub = centrosPorDistrito
  const priv = [...centrosPrivadosPorDistrito, ...centrosPrivadosAdicionalesPorDistrito]

  for (const [lista, tipo] of [
    [pub, 'Público'],
    [priv, 'Privado'],
  ] as const) {
    for (const d of lista) {
      for (const c of d.centros) {
        if (c.codigo && vistos.has(c.codigo)) continue
        if (c.codigo) vistos.add(c.codigo)
        const t = c.tipo || tipo
        const acc = (porTipo[t] ||= { n: 0, mat: 0 })
        acc.n++
        acc.mat += matriculaCentro(c.codigo)?.m ?? 0
      }
    }
  }

  const total = porTipo['Público']?.n || 0
  const privada = porTipo['Privado']?.n || 0
  const semi = porTipo['Semioficial']?.n || 0

  _cache = {
    centros_total: vistos.size,
    centros_publicos: total,
    centros_privados: privada,
    centros_semioficiales: semi,
    centros_con_punto: 0, // lo rellena la web; se deja en 0 para no mentir
    estudiantes_publicos_oficial: TOTAL_MATRICULA_CENTROS,
    estudiantes_por_distrito: Object.fromEntries(
      Object.entries(PERIODO_ACTUAL.porDistrito).map(([codigo, valor]) => [codigo, valor.total])
    ),
    matricula_por_codigo: {
      publicos: porTipo['Público']?.mat || 0,
      privados: porTipo['Privado']?.mat || 0,
      total: (porTipo['Público']?.mat || 0) + (porTipo['Privado']?.mat || 0),
    },
    periodo_matricula: PERIODO_MATRICULA_CENTROS,
  }
  return _cache
}
