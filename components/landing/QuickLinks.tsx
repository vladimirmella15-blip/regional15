// components/landing/QuickLinks.tsx
'use client'

import React, { useState, useEffect } from 'react'

interface QuickCardDef {
  id: string
  titulo: string
  descripcion: string
  href: string
  icon: string
  accent: string
  external?: boolean
}

const CARDS: QuickCardDef[] = [
  {
    id: 'cupo',
    titulo: 'Buscar cupo escolar',
    descripcion: 'Verifica disponibilidad e inscripción para el año escolar.',
    href: '/#cupos',
    icon: 'M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c0 2 2 3 6 3s6-1 6-3v-5',
    accent: '#ed232a',
  },
  {
    id: 'centro',
    titulo: 'Buscar centro educativo',
    descripcion: 'Encuentra centros por distrito, nivel y sector con ubicación.',
    href: '/#buscar-centro',
    icon: 'M12 22a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM8.21 13.89L7 23l5-3 5 3-1.21-9.12M12 2v2M4.93 4.93l1.41 1.41M20.07 4.93l-1.41 1.41',
    accent: '#003876',
  },
  {
    id: 'certificacion',
    titulo: 'Solicitar certificación',
    descripcion: 'Certificaciones, constancias y documentos escolares.',
    href: '/#servicios',
    icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8',
    accent: '#0ea5a4',
  },
  {
    id: 'docentes',
    titulo: 'Servicios para docentes',
    descripcion: 'Recursos humanos, traslados, formación y trámites.',
    href: '/#servicios',
    icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
    accent: '#f0a500',
  },
  {
    id: 'familias',
    titulo: 'Servicios para familias',
    descripcion: 'Orientación, matrícula y acompañamiento a los padres.',
    href: '/#servicios',
    icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
    accent: '#7c3aed',
  },
  {
    id: 'digitales',
    titulo: 'Plataformas digitales',
    descripcion: 'SIGACOM, Edyntra, SER15 y el ecosistema DIGITALES.',
    href: '',
    icon: 'M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4z',
    accent: '#06b6d4',
  },
]

export default function QuickLinks() {
  const [digitalesOpen, setDigitalesOpen] = useState(false)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDigitalesOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const handleCardClick = (card: QuickCardDef) => {
    if (card.id === 'digitales') {
      setDigitalesOpen(true)
      return
    }
  }

  return (
    <>
      {/* ===================== ¿QUÉ NECESITAS? ===================== */}
      <section className="section-sm quick-links" role="navigation" aria-label="¿Qué necesitas? Accesos rápidos">
        <div className="container">
          <div className="quick-header">
            <h2>¿Qué necesitas?</h2>
            <p>Servicios y trámites disponibles para toda la comunidad educativa.</p>
          </div>
          <div className="quick-grid">
            {CARDS.map(card => {
              const inner = (
                <>
                  <div className="icon-wrap" style={{ borderColor: card.accent }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d={card.icon} /></svg>
                  </div>
                  <span className="quick-card-title">{card.titulo}</span>
                  <span className="quick-card-desc">{card.descripcion}</span>
                  <span className="quick-card-cta">
                    {card.id === 'digitales' ? 'Acceder' : 'Ir ahora'}
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </>
              )
              if (card.id === 'digitales') {
                return (
                  <button
                    key={card.id}
                    className="quick-card"
                    style={{ border: 'none', cursor: 'pointer', textAlign: 'center', width: '100%' }}
                    onClick={() => handleCardClick(card)}
                    aria-haspopup="dialog"
                    aria-label={card.titulo}
                  >
                    {inner}
                  </button>
                )
              }
              return (
                <a key={card.id} href={card.href} className="quick-card" onClick={() => handleCardClick(card)}>
                  {inner}
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===================== MODAL DIGITALES ===================== */}
      {digitalesOpen && (
        <div
          className="digitales-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Plataformas Digitales"
          onClick={(e) => { if (e.target === e.currentTarget) setDigitalesOpen(false) }}
        >
          <div className="digitales-modal">
            {/* Header */}
            <div className="digitales-modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '10px',
                  background: 'linear-gradient(135deg, #003876, #005baa)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                    <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
                  </svg>
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700, color: 'var(--blue-dark)' }}>
                    Plataformas Digitales
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: '#666' }}>Regional 15 — MINERD</p>
                </div>
              </div>
              <button
                onClick={() => setDigitalesOpen(false)}
                className="digitales-close"
                aria-label="Cerrar"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
            </div>

            <p style={{ margin: '0 0 20px', color: '#555', fontSize: '0.9rem', lineHeight: 1.5 }}>
              Accede a nuestras plataformas institucionales para la gestión pedagógica y administrativa.
            </p>

            {/* Platform cards */}
            <div className="digitales-platforms">
              {/* SIGACOM */}
              <a
                href="https://sigacom.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="platform-card platform-sigacom"
              >
                <div className="platform-logo-wrap">
                  <span className="platform-sigla">SIGACOM</span>
                </div>
                <div className="platform-info">
                  <h4>SIGACOM</h4>
                  <p>Sistema de Proceso de Técnicos.</p>
                  <div className="platform-autor">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    Autor: Alexander Uceta
                  </div>
                  <div className="platform-cta">
                    Ingresar a SIGACOM
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                    </svg>
                  </div>
                </div>
              </a>

              {/* EDYNTRA */}
              <a
                href="https://www.edyntra.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="platform-card platform-edyntra"
              >
                <div className="platform-logo-wrap">
                  <img src="/assets/img/Logo-Edyntra.png" alt="Edyntra" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div className="platform-info">
                  <h4>Edyntra</h4>
                  <p>Sistema de Proceso de Técnicos.</p>
                  <div className="platform-autor">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    Autor: <strong>Vladimir Mella Antuna</strong>
                  </div>
                  <div className="platform-cta">
                    Ingresar a Edyntra
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                    </svg>
                  </div>
                </div>
              </a>

              {/* SER15 */}
              <a
                href="https://ser15.store/"
                target="_blank"
                rel="noopener noreferrer"
                className="platform-card platform-ser15"
              >
                <div className="platform-logo-wrap">
                  <div style={{
                    width: 60, height: 60, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #003876, #ed232a)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontWeight: 900, fontSize: '1.1rem',
                    fontFamily: "'Outfit', sans-serif", letterSpacing: 1,
                  }}>
                    SER15
                  </div>
                </div>
                <div className="platform-info">
                  <h4>SER15</h4>
                  <p>Plataforma de encuesta, satisfacción institucional y recolector de datos de necesidades para dar seguimiento oportuno.</p>
                  <div className="platform-autor">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    Regional 15 · MINERD
                  </div>
                  <div className="platform-cta">
                    Ingresar a SER15
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                    </svg>
                  </div>
                </div>
              </a>
            </div>

            <p style={{ margin: '16px 0 0', fontSize: '0.75rem', color: '#999', textAlign: 'center' }}>
              Plataformas institucionales de la Regional 15 del MINERD · Santo Domingo, República Dominicana
            </p>
          </div>
        </div>
      )}

    </>
  )
}
