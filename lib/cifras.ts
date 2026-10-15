// Cifras oficiales de la Regional 15.
//
// Antes vivian escritas a mano en public/data/content.json y se quedaron viejas:
// el sitio decia 1.443 centros cuando tenia 1.483, y 580+816+18 no sumaba ni
// esos 1.443. Aqui se calculan desde las fuentes, de modo quecada vez que se
// agregue un centro se actualizan solas.
//
// Ojo con la matricula: sumar el campo `matricula` de cada codigo SIGERD cuenta
// dos veces a los mismos alumnos, porque un plantel con nivel inicial, primaria
// y secundaria tiene un codigo por cada programa. Por eso la cifra grande del
// sitio es la oficial de la Regional 15 (data/padron-regional15.json) y la suma
// por codigo se publica aparte, etiquetada como lo que es.

import padronRegional15 from '@/data/padron-regional15.json'
import { centrosPorDistrito } from '@/data/centros'
import { centrosPrivadosPorDistrito } from '@/data/centros-privados'
import { centrosPrivadosAdicionalesPorDistrito } from '@/data/centros-adicionales-privados'

const padron = padronRegional15 as {
  periodo: string
  totales: { regional: number; porDistrito: Record<string, number> }
  centros: Record<string, { d: string; n: string; m: number | null }>
}

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
        acc.mat += c.matricula || 0
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
    estudiantes_publicos_oficial: padron.totales.regional,
    estudiantes_por_distrito: padron.totales.porDistrito,
    matricula_por_codigo: {
      publicos: porTipo['Público']?.mat || 0,
      privados: porTipo['Privado']?.mat || 0,
      total: (porTipo['Público']?.mat || 0) + (porTipo['Privado']?.mat || 0),
    },
    periodo_matricula: padron.periodo,
  }
  return _cache
}
