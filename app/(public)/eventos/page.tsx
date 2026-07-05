'use client'

import { useEffect, useState } from 'react'
import EventosPageGrid from '@/components/EventosPageGrid'

export default function EventosPage() {
  const [data, setData] = useState<any>(null)

  useEffect(() => { document.title = 'Eventos – Regional 15' }, [])

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(() => {})
  }, [])

  return (
    <main style={{ marginTop: '80px' }}>
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--blue-dark) 0%, #002a5c 100%)', padding: '70px 0 50px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-25%', right: '-8%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, var(--gold), transparent)' }} />
        <div style={{ position: 'absolute', bottom: '-15%', left: '-8%', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, var(--red), transparent)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-eyebrow" style={{ color: 'var(--gold)', marginBottom: '12px', display: 'block' }}>INICIATIVAS Y ACTIVIDADES</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'white', margin: '0 0 14px', fontWeight: 800, fontFamily: "'Outfit', sans-serif", lineHeight: 1.1 }}>Eventos y Actividades</h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.82)', maxWidth: '600px', lineHeight: 1.7, margin: 0 }}>
            Conoce las iniciativas más recientes, logros institucionales y eventos principales de la Regional 15.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-body)' }}>
        <div className="container-lg">
          {data ? (
            <EventosPageGrid eventos={data.eventos} />
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
              {[1,2,3].map(i => (
                <div key={i} style={{ height: '180px', borderRadius: '16px', background: 'var(--gray-light)', animation: 'pulse 1.5s ease infinite' }} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
