'use client'

import React, { useState, useEffect, useRef } from 'react'
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
  const sectionRef = useScrollReveal<HTMLElement>()
  const trackRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState(0)
  const len = testimonios?.length ?? 0

  useEffect(() => {
    if (!len) return
    const timer = setInterval(() => {
      setPos(p => (p + 1) % len)
    }, 4000)
    return () => clearInterval(timer)
  }, [len])

  if (!testimonios || len === 0) return null

  const cardW = 380
  const gap = 24
  const offset = pos * (cardW + gap)

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

        <div className="testimonials-scroll">
          <div
            ref={trackRef}
            className="testimonials-scroll-track"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {testimonios.map((t, i) => (
              <div key={i} className="testimonial-scroll-card">
                <div className="testimonial-scroll-stars">
                  {'★'.repeat(t.estrellas || 5)}
                </div>
                <p className="testimonial-scroll-text">&quot;{t.texto}&quot;</p>
                <div className="testimonial-scroll-author">
                  <div className="testimonial-scroll-avatar">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                  </div>
                  <div>
                    <strong>{t.nombre}</strong>
                    <span>{t.rol}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials-scroll-dots">
          {testimonios.map((_, i) => (
            <span
              key={i}
              className={`testimonials-scroll-dot${i === pos ? ' active' : ''}`}
              onClick={() => setPos(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
