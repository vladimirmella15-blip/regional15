// components/landing/TestimoniosSection.tsx
'use client'

import React from 'react'

interface Testimonio {
  nombre: string
  rol: string
  texto: string
  estrellas: number
}

interface TestimoniosSectionProps {
  testimonios?: Testimonio[]
}

export default function TestimoniosSection({ testimonios }: TestimoniosSectionProps) {
  if (!testimonios || testimonios.length === 0) return null

  return (
    <section id="testimonios" className="section testimonials-section" aria-label="Testimonios de la comunidad educativa">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            Voces de la Comunidad
          </span>
          <h2>Lo Que Dicen de la Regional 15</h2>
          <p>El verdadero impacto de nuestro trabajo se refleja en las palabras de quienes forman parte de la comunidad educativa.</p>
          <div className="section-divider"></div>
        </div>
        <div className="testimonials-grid" id="dynamic-testimonios">
          {testimonios.map((item, i) => (
            <div className="testimonial-card animate-on-scroll" key={i}>
              <div className="testimonial-stars">{'★'.repeat(item.estrellas || 5)}</div>
              <p className="testimonial-text">&quot;{item.texto}&quot;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                </div>
                <div>
                  <strong>{item.nombre}</strong>
                  <span>{item.rol}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
