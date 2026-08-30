'use client'

import { useEffect, useState } from 'react'
import CalendarSection from '@/components/landing/CalendarSection'

export default function CalendarioPage() {
  const [data, setData] = useState<any>(null)

  useEffect(() => { document.title = 'Calendario Regional 15' }, [])

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(() => {})
  }, [])

  return (
    <main style={{ marginTop: '80px' }}>
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--blue-dark) 0%, #002a5c 100%)', padding: '70px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, var(--gold), transparent)' }} />
        <div style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, var(--red), transparent)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-eyebrow" style={{ color: 'var(--gold)', marginBottom: '12px', display: 'block' }}>CALENDARIO ESCOLAR</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'white', margin: '0 0 14px', fontWeight: 800, fontFamily: "'Outfit', sans-serif", lineHeight: 1.1 }}>Calendario de Actividades</h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.82)', maxWidth: '620px', lineHeight: 1.7, margin: 0 }}>
            Consulta las fechas importantes, actividades, eventos y feriados del calendario escolar de la Regional 15.
          </p>
        </div>
      </section>

      <CalendarSection calendario={data?.calendario} eventos={data?.eventos} />

      {data?.eventos?.length > 0 && (
        <section className="section" style={{ background: 'var(--bg-alt2)' }}>
          <div className="container">
            <div className="section-header text-center">
              <span className="section-eyebrow">PRÓXIMOS EVENTOS</span>
              <h2>Eventos Destacados</h2>
              <div className="section-divider" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {data.eventos.slice(0, 4).map((ev: any, i: number) => (
                <div key={i} style={{ background: 'var(--card-bg)', borderRadius: '14px', padding: '24px', border: '1px solid rgba(0,56,118,0.08)', boxShadow: 'var(--shadow-xs)' }}>
                  <span style={{ display: 'inline-block', background: 'var(--red-light)', color: 'var(--red)', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', padding: '2px 8px', borderRadius: '20px', marginBottom: '10px', letterSpacing: '0.06em' }}>{ev.fecha || 'Próximamente'}</span>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--blue-dark)', marginBottom: '6px', fontFamily: "'Outfit', sans-serif" }}>{ev.titulo}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{ev.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
