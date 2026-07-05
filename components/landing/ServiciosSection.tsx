// components/landing/ServiciosSection.tsx
'use client'

import React from 'react'

interface Servicio {
  id: string
  titulo: string
  descripcion: string
  icono_path: string
}

interface ServiciosSectionProps {
  servicios?: Servicio[]
}

export default function ServiciosSection({ servicios }: ServiciosSectionProps) {
  if (!servicios || servicios.length === 0) return null

  return (
    <section id="servicios" className="section services-section" aria-label="Servicios educativos">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            Servicios Educativos
          </span>
          <h2>¿Qué Ofrecemos?</h2>
          <p>Conoce los servicios que la Regional 15 pone a disposición de la comunidad educativa del Gran Santo Domingo.</p>
          <div className="section-divider"></div>
        </div>
        <div className="services-grid" id="dynamic-servicios">
          {servicios.map((item) => (
            <div className="service-card animate-on-scroll" key={item.id}>
              <div className="service-icon">
                <svg viewBox="0 0 24 24"><path d={item.icono_path} /></svg>
              </div>
              <h3>{item.titulo}</h3>
              <p>{item.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
