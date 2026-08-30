// components/landing/ProgramasSection.tsx
'use client'

import React from 'react'
import Image from 'next/image'

interface Programa {
  id: string
  titulo: string
  descripcion: string
  icono_viewbox?: string
  icono_path?: string
  logo?: string
  enlace: string
  texto_enlace: string
}

interface ProgramasSectionProps {
  programas?: Programa[]
}

export default function ProgramasSection({ programas }: ProgramasSectionProps) {
  if (!programas || programas.length === 0) return null

  return (
    <section id="programas" className="section programs-section" aria-label="Programas educativos Regional 15">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5v-15z"/></svg>
            Programas
          </span>
          <h2>Programas Educativos de la Regional 15</h2>
          <p>Iniciativas reales que la Regional 15 documenta en sus más de <strong>2,527 publicaciones</strong> en Instagram y en las actividades de sus 6 distritos educativos.</p>
          <div className="section-divider"></div>
        </div>
        <div className="programs-grid compact" id="dynamic-programas">
          {programas.map((item) => (
            <div className="program-card animate-on-scroll" key={item.id}>
              <div className="program-icon">
                {item.logo ? (
                  <Image src={item.logo.startsWith('/') ? item.logo : '/' + item.logo} alt={item.titulo} width={48} height={48} style={{ objectFit: 'contain' }} />
                ) : (
                  <svg viewBox={item.icono_viewbox || '0 0 24 24'}><path d={item.icono_path} /></svg>
                )}
              </div>
              <h3>{item.titulo}</h3>
              <p dangerouslySetInnerHTML={{ __html: item.descripcion }}></p>
              <a href={item.enlace} target="_blank" rel="noopener noreferrer" className="program-link">
                {item.texto_enlace}{' '}
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
