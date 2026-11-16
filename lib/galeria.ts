// Orden y fechas de la galería.
//
// La regla del sitio es simple: lo último que se sube es lo primero que se ve.
// Los elementos con fecha van primero, de más reciente a más antiguo. Los que
// no tienen fecha conservan el orden en que llegaron, pero siempre después de
// los fechados. Así se puede mezclar contenido viejo (sin fecha) con contenido
// nuevo (con fecha) sin reordenar todo a mano.

export interface GaleriaItem {
  id?: string
  imagen: string
  titulo: string
  fecha?: string
  created_at?: string
  /** 'contain' para flyers o afiches que no se deben recortar. */
  ajuste?: 'cover' | 'contain'
}

interface ConFecha {
  fecha?: string
  created_at?: string
}

function fechaCruda(item: ConFecha): string | undefined {
  return item.fecha || item.created_at
}

export function fechaDeItem(item: ConFecha): Date | null {
  const raw = fechaCruda(item)
  if (!raw) return null
  // Las fechas locales vienen como YYYY-MM-DD. Se fijan a mediodía para que
  // el cambio de zona horaria no las mueva al día anterior.
  const fecha = /^\d{4}-\d{2}-\d{2}$/.test(raw)
    ? new Date(`${raw}T12:00:00`)
    : new Date(raw)
  return Number.isNaN(fecha.getTime()) ? null : fecha
}

export function ordenarPorFecha<T extends ConFecha>(items: T[]): T[] {
  return items
    .map((item, index) => ({
      item,
      index,
      tiempo: fechaDeItem(item)?.getTime() ?? null,
    }))
    .sort((a, b) => {
      if (a.tiempo !== null && b.tiempo !== null) {
        return b.tiempo - a.tiempo || a.index - b.index
      }
      if (a.tiempo !== null) return -1
      if (b.tiempo !== null) return 1
      return a.index - b.index
    })
    .map(({ item }) => item)
}

export function esReciente(item: ConFecha, dias = 30): boolean {
  const fecha = fechaDeItem(item)
  if (!fecha) return false
  const diferencia = Math.abs(Date.now() - fecha.getTime())
  return diferencia <= dias * 24 * 60 * 60 * 1000
}

export function formatearFechaItem(item: ConFecha): string {
  const fecha = fechaDeItem(item)
  if (!fecha) return ''
  return fecha.toLocaleDateString('es-DO', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
