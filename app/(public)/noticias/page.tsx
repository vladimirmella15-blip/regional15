'use client'

import { useEffect, useState } from 'react'
import { NoticiasSection } from '@/components/NoticiasSection'

export default function NoticiasPage() {
  const [data, setData] = useState<any>(null)

  useEffect(() => { document.title = 'Noticias Regional 15' }, [])

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(() => {})
  }, [])

  return (
    <main className="page-main">
      <section className="noticias-hero">
        <span className="noticias-hero-circle noticias-hero-circle-gold" aria-hidden="true" />
        <span className="noticias-hero-circle noticias-hero-circle-red" aria-hidden="true" />
        <span className="noticias-hero-circle noticias-hero-circle-blue" aria-hidden="true" />
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M12 8v4l3 3"/><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"/></svg>
              Mantente Informado
            </span>
            <h1>Noticias y Comunicados</h1>
            <p className="section-description">
              Entérate de las últimas actividades, logros, eventos y comunicados oficiales de la Regional 15 y sus 6 distritos educativos.
            </p>
            <div className="section-divider"></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-body)' }}>
        <div className="container-lg">
          {data ? (
            <NoticiasSection noticias={data.noticias} />
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
