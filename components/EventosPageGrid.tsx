'use client'

import React from 'react'
import { useTilt } from '@/hooks/useTilt'
import { useScrollReveal } from '@/hooks/useScrollReveal'

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

interface EventosPageGridProps {
  eventos?: Evento[]
}

const tipoGradients: Record<string, string> = {
  'Alianza Estratégica': 'linear-gradient(135deg, #003876, #005baa)',
  'Certificación': 'linear-gradient(135deg, #1a7cc9, #00a3e0)',
  'Feria Educativa': 'linear-gradient(135deg, #7c3aed, #a78bfa)',
  'Cultura y Arte': 'linear-gradient(135deg, #ed232a, #f59e0b)',
  'Premio Calidad Educativa': 'linear-gradient(135deg, #f0a500, #d97706)',
  'Innovación Docente': 'linear-gradient(135deg, #059669, #34d399)',
  'Capacitación Docente': 'linear-gradient(135deg, #0891b2, #22d3ee)',
  'Infraestructura Escolar': 'linear-gradient(135deg, #1a1f2e, #4b5563)',
  'Reconocimiento': 'linear-gradient(135deg, #dc2626, #f87171)',
  'Reunión Ministerial': 'linear-gradient(135deg, #1e3a5f, #3b82f6)',
  'Visita Presidencial': 'linear-gradient(135deg, #003876, #1d4ed8)',
}

const getTipoGradient = (tipo: string) => {
  return tipoGradients[tipo] || 'linear-gradient(135deg, var(--blue-dark), var(--blue-mid))'
}

function EventCard({ item, index }: { item: Evento; index: number }) {
  const tiltRef = useTilt<HTMLDivElement>(5)

  return (
    <div ref={tiltRef} className="event-card-v2 animate-on-scroll" style={{ animationDelay: `${index * 0.08}s` }}>
      <div className="event-card-v2-head" style={{ background: getTipoGradient(item.tipo) }}>
        <div className="event-card-v2-badge">{item.tipo}</div>
        <div className="event-card-v2-icon">
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        </div>
      </div>
      <div className="event-card-v2-body">
        <h3>{item.titulo}</h3>
        <p dangerouslySetInnerHTML={{ __html: item.descripcion }} />
        <div className="event-card-v2-meta">
          <span>
            <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
            </svg>
            {item.ubicacion}
          </span>
          <span>
            <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
            </svg>
            {item.fecha}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function EventosPageGrid({ eventos }: EventosPageGridProps) {
  const sectionRef = useScrollReveal<HTMLDivElement>()

  if (!eventos || eventos.length === 0) {
    return (
      <div ref={sectionRef} className="eventos-empty-state">
        <p>No hay eventos disponibles en este momento.</p>
      </div>
    )
  }

  return (
    <div ref={sectionRef} className="eventos-page-grid">
      {eventos.map((item, i) => (
        <EventCard key={item.id} item={item} index={i} />
      ))}
    </div>
  )
}
