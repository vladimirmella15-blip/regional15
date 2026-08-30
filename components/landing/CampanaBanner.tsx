'use client'

interface Campaña {
  id: string
  titulo: string
  subtitulo: string
  descripcion: string
  boton_texto: string
  boton_url: string
  imagen: string
  activo: boolean
  fecha_inicio: string
  fecha_fin: string
}

interface CampanaBannerProps {
  campanas?: Campaña[]
}

export default function CampanaBanner({ campanas }: CampanaBannerProps) {
  if (!campanas || campanas.length === 0) return null

  const hoy = new Date().toISOString().slice(0, 10)
  const activas = campanas.filter(c => {
    if (!c.activo) return false
    if (c.fecha_inicio && c.fecha_inicio > hoy) return false
    if (c.fecha_fin && c.fecha_fin < hoy) return false
    return true
  })

  if (activas.length === 0) return null

  return (
    <section className="campana-banner-section" aria-label="Campaña destacada">
      <div className="container">
        {activas.map((c) => (
          <div key={c.id} className="campana-banner">
            <div className="campana-banner-badge">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M12 22a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/></svg>
              Campaña Escolar 2026
            </div>
            <h2 className="campana-banner-title">{c.titulo}</h2>
            <p className="campana-banner-subtitle">{c.subtitulo}</p>
            {c.descripcion && <p className="campana-banner-desc">{c.descripcion}</p>}
            {c.boton_url && (
              <a href={c.boton_url} className="campana-banner-btn">
                {c.boton_texto || 'Más información'}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
