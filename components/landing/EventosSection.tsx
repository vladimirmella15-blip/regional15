// components/landing/EventosSection.tsx
'use client'

import React from 'react'
import { getEventIcon } from '@/components/shared/Icons'

interface Evento {
  id: string
  emoji: string
  abreviatura: string
  tipo: string
  titulo: string
  descripcion: string
  ubicacion: string
  fecha: string
}

interface EventosSectionProps {
  eventos?: Evento[]
}

export default function EventosSection({ eventos }: EventosSectionProps) {
  if (!eventos || eventos.length === 0) return null

  return (
    <section id="eventos" className="section events-section" aria-label="Programas y eventos de la Regional 15">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Programas Destacados
          </span>
          <h2>Iniciativas y Eventos de la Regional 15</h2>
          <p>Actividades reales documentadas en <a href="https://www.instagram.com/regional_15minerd/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--red)' }}>@regional_15minerd</a> con 2,527 publicaciones.</p>
          <div className="section-divider"></div>
        </div>
        <div className="events-grid" id="dynamic-eventos">
          {eventos.map((item) => (
            <div className="event-card animate-on-scroll" key={item.id}>
              <div className="event-header">
                <div className="event-date-box">
                  <div className="day" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {getEventIcon(item.id)}
                  </div>
                  <div className="month">{item.abreviatura}</div>
                </div>
                <div className="event-date-sep"></div>
                <div className="event-header-text">
                  <div className="event-type">{item.tipo}</div>
                  <h4>{item.titulo}</h4>
                </div>
              </div>
              <div className="event-body">
                <p dangerouslySetInnerHTML={{ __html: item.descripcion }} />
                <div className="event-meta">
                  <span><svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" /></svg>{item.ubicacion}</span>
                  <span><svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" /></svg>{item.fecha}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
