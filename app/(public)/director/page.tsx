// app/director/page.tsx
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Director {
  nombre: string
  titulo: string
  subtitulo: string
  foto: string
  fecha_nacimiento: string
  lugar_nacimiento: string
  resumen_ejecutivo: string
  trayectoria: string[]
  formacion: {
    doctorado: {
      titulo: string
      institucion: string
      estado: string
    }
    maestrias: Array<{
      titulo: string
      institucion: string
    }>
    licenciaturas: Array<{
      titulo: string
      institucion: string
    }>
    capacitaciones: Array<{
      titulo: string
      institucion: string
    }>
  }
  fortalezas: string[]
  vision: string
  mision: string
  valores: string[]
}

export default function DirectorPage() {
  const [director, setDirector] = useState<Director | null>(null)
  const [activeTab, setActiveTab] = useState<'perfil' | 'formacion' | 'vision'>('perfil')

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => setDirector(data.director))
      .catch((err) => console.error('Error loading director data:', err))
  }, [])

  useEffect(() => {
    document.title = 'Director Regional – Regional 15'
  }, [])

  if (!director) {
    return <div className="section text-center">Cargando información...</div>
  }

  const fotoSrc = director.foto.startsWith('/') ? director.foto : '/' + director.foto

  return (
    <main style={{ marginTop: '80px' }}>
        {/* ===================== DIRECTOR (SEMBLANZA) ===================== */}
        <section className="section director-section" aria-label="Semblanza del Director Regional Eddy Chávez">
          <div className="container">
            <div className="director-grid">
              <div className="director-photo-wrap">
                <div className="director-photo" style={{ position: 'relative', height: '420px', width: '100%' }}>
                  <Image
                    src={fotoSrc}
                    alt={director.nombre}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 340px"
                    style={{ objectPosition: 'top', objectFit: 'cover' }}
                  />
                </div>
                <div className="director-badge">Director Regional de Educación 15</div>
              </div>
              <div className="director-content">
                <div className="section-header">
                  <span className="section-eyebrow" style={{ color: 'var(--gold)' }}>Semblanza</span>
                  <h2>{director.nombre}</h2>
                  <div className="section-divider" style={{ background: 'linear-gradient(to right, var(--red), var(--gold))', marginLeft: 0 }}></div>
                </div>
                <blockquote>
                  &quot;{director.subtitulo}&quot;
                </blockquote>
                {director.resumen_ejecutivo.split('\n\n').map((p, idx) => (
                  <p key={idx} style={{ color: 'rgba(255,255,255,0.92)' }}>{p}</p>
                ))}
                <p className="director-name">{director.nombre}</p>
                <p className="director-title">{director.titulo}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Content */}
        <section className="section" style={{ background: 'var(--bg-alt2)' }}>
          <div className="container-lg">
            {/* Tabs */}
            <div className="tabs-header">
              <button
                className={`tab-btn ${activeTab === 'perfil' ? 'active' : ''}`}
                onClick={() => setActiveTab('perfil')}
              >
                Perfil & Trayectoria
              </button>
              <button
                className={`tab-btn ${activeTab === 'formacion' ? 'active' : ''}`}
                onClick={() => setActiveTab('formacion')}
              >
                Formación Académica
              </button>
              <button
                className={`tab-btn ${activeTab === 'vision' ? 'active' : ''}`}
                onClick={() => setActiveTab('vision')}
              >
                Visión & Valores
              </button>
            </div>

            {/* Content */}
            {activeTab === 'perfil' && (
              <div className="tab-content">
                <h3>Trayectoria Profesional Completa</h3>
                <div className="trayectoria-expanded">
                  {director.trayectoria.map((puesto, idx) => (
                    <div key={idx} className="trayectoria-item">
                      <div className="trayectoria-icon">
                        <svg className="timeline-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </div>
                      <p>{puesto}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'formacion' && (
              <div className="tab-content">
                <div className="formacion-grid">
                  {/* Doctorado */}
                  <div className="formacion-section">
                    <h4 className="formacion-title">
                      <svg className="tab-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
                      </svg>
                      Doctorado
                    </h4>
                    <div className="formacion-item">
                      <strong>{director.formacion.doctorado.titulo}</strong>
                      <span>{director.formacion.doctorado.institucion}</span>
                      <span className="estado">({director.formacion.doctorado.estado})</span>
                    </div>
                  </div>

                  {/* Maestrías */}
                  <div className="formacion-section">
                    <h4 className="formacion-title">
                      <svg className="tab-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5v-15z"/>
                      </svg>
                      Maestrías
                    </h4>
                    <div className="formacion-list">
                      {director.formacion.maestrias.map((maestria, idx) => (
                        <div key={idx} className="formacion-item">
                          <strong>{maestria.titulo}</strong>
                          <span>{maestria.institucion}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Licenciaturas */}
                  <div className="formacion-section">
                    <h4 className="formacion-title">
                      <svg className="tab-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                      </svg>
                      Licenciaturas
                    </h4>
                    <div className="formacion-list">
                      {director.formacion.licenciaturas.map((licenciatura, idx) => (
                        <div key={idx} className="formacion-item">
                          <strong>{licenciatura.titulo}</strong>
                          <span>{licenciatura.institucion}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Capacitaciones */}
                  <div className="formacion-section">
                    <h4 className="formacion-title">
                      <svg className="tab-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                      </svg>
                      Formación Continua
                    </h4>
                    <div className="formacion-list">
                      {director.formacion.capacitaciones.map((cap, idx) => (
                        <div key={idx} className="formacion-item">
                          <strong>{cap.titulo}</strong>
                          <span>{cap.institucion}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="tab-content">
                <div className="vision-grid">
                  <div className="vision-card">
                    <h4>
                      <svg className="tab-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                      Visión
                    </h4>
                    <p>{director.vision}</p>
                  </div>

                  <div className="vision-card">
                    <h4>
                      <svg className="tab-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
                        <circle cx="12" cy="12" r="10"/>
                        <circle cx="12" cy="12" r="3"/>
                        <line x1="22" y1="12" x2="18" y2="12"/>
                        <line x1="6" y1="12" x2="2" y2="12"/>
                        <line x1="12" y1="6" x2="12" y2="2"/>
                        <line x1="12" y1="22" x2="12" y2="18"/>
                      </svg>
                      Misión
                    </h4>
                    <p>{director.mision}</p>
                  </div>

                  <div className="vision-card full-width">
                    <h4>
                      <svg className="tab-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
                        <path d="M6 3h12l4 6-10 13L2 9z"/>
                        <path d="M11 3 8 9l4 13 4-13-3-6"/>
                      </svg>
                      Valores Fundamentales
                    </h4>
                    <div className="valores-list">
                      {director.valores.map((valor, idx) => (
                        <div key={idx} className="valor-item">
                          <span className="valor-icon" style={{ display: 'flex', alignItems: 'center' }}>
                            <svg className="bullet-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                          </span>
                          <span>{valor}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Stats */}
        <section className="section stats-section">
          <div className="container-lg">
            <h2 className="text-center" style={{ marginBottom: '40px' }}>
              Logros & Reconocimientos
            </h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">6</div>
                <p>Distritos Educativos</p>
              </div>
              <div className="stat-card">
                <div className="stat-number">3</div>
                <p>Galas Regionales</p>
              </div>
              <div className="stat-card">
                <div className="stat-number">25+</div>
                <p>Años de Experiencia</p>
              </div>
              <div className="stat-card">
                <div className="stat-number" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '48px' }}>
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="var(--gold)" strokeWidth="2.5"><path d="M12 22a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/></svg>
                </div>
                <p>Medalla PRECE 2025</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }