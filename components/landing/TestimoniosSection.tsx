'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

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
  const [current, setCurrent] = useState(0)
  const sectionRef = useScrollReveal<HTMLElement>()

  if (!testimonios || testimonios.length === 0) return null

  const next = useCallback(() => setCurrent(p => (p + 1) % testimonios.length), [testimonios.length])
  const prev = useCallback(() => setCurrent(p => (p - 1 + testimonios.length) % testimonios.length), [testimonios.length])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const t = testimonios[current]

  return (
    <section id="testimonios" ref={sectionRef} className="section testimonials-section" aria-label="Testimonios de la comunidad educativa">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
            Voces de la Comunidad
          </span>
          <h2>Lo Que Dicen de la Regional 15</h2>
          <p>El verdadero impacto de nuestro trabajo se refleja en las palabras de quienes forman parte de la comunidad educativa.</p>
          <div className="section-divider" />
        </div>

        <div className="testimonial-carousel">
          <button className="testimonial-arrow testimonial-arrow-prev" onClick={prev} aria-label="Anterior">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /></svg>
          </button>

          <div className="testimonial-carousel-track" key={current}>
            <div className="testimonial-card-featured animate-fade-in-up">
              <div className="testimonial-stars">
                {'★'.repeat(t.estrellas || 5)}
                {'☆'.repeat(5 - (t.estrellas || 5))}
              </div>
              <p className="testimonial-text">&quot;{t.texto}&quot;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                </div>
                <div>
                  <strong>{t.nombre}</strong>
                  <span>{t.rol}</span>
                </div>
              </div>
            </div>
          </div>

          <button className="testimonial-arrow testimonial-arrow-next" onClick={next} aria-label="Siguiente">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
          </button>

          <div className="testimonial-dots">
            {testimonios.map((_, i) => (
              <span
                key={i}
                className={`testimonial-dot${i === current ? ' active' : ''}`}
                role="tab"
                aria-label={`Testimonio ${i + 1}`}
                tabIndex={0}
                onClick={() => setCurrent(i)}
                onKeyDown={(e) => e.key === 'Enter' && setCurrent(i)}
              />
            ))}
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonios.slice(0, 4).map((item, i) => (
            <div
              key={i}
              className={`testimonial-card animate-on-scroll ${i === current ? 'active-card' : ''}`}
              style={{ animationDelay: `${i * 0.08}s` }}
              onClick={() => setCurrent(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setCurrent(i)}
            >
              <div className="testimonial-stars">{'★'.repeat(item.estrellas || 5)}</div>
              <p className="testimonial-text">&quot;{item.texto.slice(0, 120)}{item.texto.length > 120 ? '…' : ''}&quot;</p>
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
