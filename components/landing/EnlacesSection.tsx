// components/landing/EnlacesSection.tsx
'use client'

import React from 'react'
import { getEnlaceIcon } from '@/components/shared/Icons'

interface Enlace {
  id: string
  nombre: string
  descripcion: string
  url: string
  icono?: string
}

interface EnlacesSectionProps {
  enlaces?: Enlace[]
}

export default function EnlacesSection({ enlaces }: EnlacesSectionProps) {
  if (!enlaces || enlaces.length === 0) return null

  return (
    <section id="enlaces" className="section enlaces-section" aria-label="Enlaces de interés institucionales">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            Enlaces de Interés
          </span>
          <h2>Instituciones y Recursos</h2>
          <p>Accede a los portales y plataformas de las principales instituciones educativas y gubernamentales del país.</p>
          <div className="section-divider"></div>
        </div>
        <div className="enlaces-grid" id="dynamic-enlaces">
          {enlaces.map((item) => (
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="enlace-card animate-on-scroll" key={item.id}>
              <div className="enlace-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {getEnlaceIcon(item.id, 24)}
              </div>
              <div className="enlace-info">
                <h4>{item.nombre}</h4>
                <p>{item.descripcion}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
