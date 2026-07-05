// components/landing/QuickLinks.tsx
'use client'

import React, { useState, useEffect } from 'react'

export default function QuickLinks() {
  const [digitalesOpen, setDigitalesOpen] = useState(false)

  // Close modal on ESC key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDigitalesOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <>
      {/* ===================== QUICK LINKS ===================== */}
      <section className="section-sm quick-links" role="navigation" aria-label="Accesos rápidos">
        <div className="container">
          <div className="quick-grid">
            <a href="https://www.instagram.com/regional_15minerd/" target="_blank" rel="noopener noreferrer" className="quick-card" style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}>
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
              </div>
              <span>Instagram Oficial</span>
            </a>
            <a href="https://www.facebook.com/regional15minerd/" target="_blank" rel="noopener noreferrer" className="quick-card" style={{ background: '#1877F2' }}>
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="white"><path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.72-1 1-1h2V2h-3c-2.76 0-5 2.24-5 5v1z" /></svg>
              </div>
              <span>Facebook Oficial</span>
            </a>
            <a href="#programas" className="quick-card">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" /></svg>
              </div>
              <span>Matrícula Escolar</span>
            </a>

            {/* ---- DIGITALES: Opens modal with platforms ---- */}
            <button
              className="quick-card"
              style={{ border: 'none', cursor: 'pointer', textAlign: 'center', width: '100%' }}
              onClick={() => setDigitalesOpen(true)}
              aria-haspopup="dialog"
              aria-label="Ver plataformas digitales"
            >
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" /></svg>
              </div>
              <span>DIGITALES</span>
            </button>


            <a href="#distritos" className="quick-card">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
              </div>
              <span>Buscar Distrito</span>
            </a>
            <a href="#contacto" className="quick-card">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" /></svg>
              </div>
              <span>Contacto</span>
            </a>
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
                  <p>Sistema de Gestión Académica — plataforma para los procesos técnicos y pedagógicos de la Regional 15.</p>
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
                  <span className="platform-sigla">EDYNTRA</span>
                </div>
                <div className="platform-info">
                  <h4>Edyntra</h4>
                  <p>Plataforma de gestión escolar integral que abarca todos los procesos administrativos y académicos.</p>
                  <div className="platform-autor">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    Autor: Vladimir Mella Antuna
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
              <div className="platform-card platform-ser15" style={{ cursor: 'default', opacity: 0.85 }}>
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
                  <p>Plataforma institucional de la Regional 15 — próximamente disponible. Sistema integral para la comunidad educativa.</p>
                  <div className="platform-autor">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    Regional 15 · MINERD
                  </div>
                  <div className="platform-cta" style={{ color: '#888' }}>
                    Próximamente
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ opacity: 0.5 }}>
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <p style={{ margin: '16px 0 0', fontSize: '0.75rem', color: '#999', textAlign: 'center' }}>
              Plataformas institucionales de la Regional 15 del MINERD · Santo Domingo, República Dominicana
            </p>
          </div>
        </div>
      )}

      {/* ===================== AVISO SERVICIOS GRATUITOS ===================== */}
      <div className="aviso-servicios" role="region" aria-label="Aviso de servicios gratuitos" style={{ opacity: 1 }}>
        <div className="container">
          <div className="aviso-inner">
            <div className="aviso-icon-wrap">
              <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
            </div>
            <div className="aviso-content">
              <div className="aviso-titulo">
                <span className="aviso-badge">AVISO IMPORTANTE</span>
                <h3>Todos los Servicios de la Regional 15 son Completamente Gratuitos</h3>
              </div>
              <p className="aviso-descripcion">
                En la <strong>Regional 15 del MINERD</strong> ponemos a disposición de toda la comunidad educativa y el público en general una amplia gama de servicios sin costo alguno, entre ellos: <strong>Recursos Humanos (RRHH)</strong>, <strong>Certificaciones académicas</strong>, supervisión educativa, orientación psicológica, trámites docentes, tecnología educativa, y mucho más.
              </p>
              <div className="aviso-horario">
                <div className="horario-item horario-regular">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                  </svg>
                  <span><strong>Horario regular:</strong> Lunes a Viernes, 8:00 AM – 4:00 PM</span>
                </div>
                <div className="horario-item horario-extendido">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                  </svg>
                  <span><strong>Horario extendido:</strong> Hasta las <strong>6:00 PM</strong> — ampliado para dar mejor soporte a nuestra comunidad</span>
                  <span className="badge-extendido">AMPLIADO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
