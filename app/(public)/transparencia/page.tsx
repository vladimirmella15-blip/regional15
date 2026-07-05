'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

function DocumentsSection() {
  const [docs, setDocs] = useState<any[]>([])
  useEffect(() => {
    fetch('/api/upload')
      .then(r => r.ok ? r.json() : [])
      .then(setDocs)
      .catch(() => {})
  }, [])
  if (!docs.length) return null

  const FILE_COLORS: Record<string, { bg: string; color: string; label: string }> = {
    xlsx: { bg: '#e8f5e9', color: '#2e7d32', label: 'Excel' },
    xls:  { bg: '#e8f5e9', color: '#2e7d32', label: 'Excel' },
    csv:  { bg: '#e8f5e9', color: '#2e7d32', label: 'CSV'   },
    pdf:  { bg: '#fdecea', color: '#c0392b', label: 'PDF'   },
    doc:  { bg: '#e3f2fd', color: '#1565c0', label: 'Word'  },
    docx: { bg: '#e3f2fd', color: '#1565c0', label: 'Word'  },
    pptx: { bg: '#fff3e0', color: '#e65100', label: 'PPT'   },
    ppt:  { bg: '#fff3e0', color: '#e65100', label: 'PPT'   },
    txt:  { bg: '#f5f5f5', color: '#555',    label: 'TXT'   },
  }
  const getExt = (name: string) => (name || '').split('.').pop()?.toLowerCase() ?? ''
  const fmtSize = (bytes: number) => {
    if (!bytes) return ''
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / 1024 / 1024).toFixed(2) + ' MB'
  }

  // Group by category
  const groups: Record<string, any[]> = {}
  docs.forEach(d => {
    const cat = d.category || 'General'
    if (!groups[cat]) groups[cat] = []
    groups[cat].push(d)
  })

  return (
    <>
      {Object.entries(groups).map(([cat, items]) => (
        <div className="transp-category-block" key={cat} style={{ marginTop: '28px' }}>
          <div className="transp-cat-label">
            <span className="transp-cat-icon" style={{ background: '#e0edff' }}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#005baa" strokeWidth="2.2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/>
              </svg>
            </span>
            <span>{cat}</span>
          </div>
          <div className="transp-docs-grid">
            {items.map((doc: any) => {
              const ext = getExt(doc.originalName)
              const fc = FILE_COLORS[ext] || { bg: '#f1f5f9', color: '#475569', label: ext.toUpperCase() || 'DOC' }
              return (
                <a key={doc.id} href={doc.url} target="_blank" rel="noopener" className="transp-doc-card animate-on-scroll">
                  <div className="transp-doc-icon" style={{ background: fc.bg, color: fc.color }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                    </svg>
                  </div>
                  <div className="transp-doc-info">
                    <div className="transp-doc-title">{doc.title}</div>
                    <div className="transp-doc-meta">
                      {doc.description ? doc.description + ' · ' : ''}
                      <span style={{ background: fc.bg, color: fc.color, borderRadius: '4px', padding: '1px 6px', fontSize: '.68rem', fontWeight: 700 }}>{fc.label}</span>
                      {doc.size ? <span style={{ marginLeft: '6px' }}>{fmtSize(doc.size)}</span> : null}
                    </div>
                  </div>
                  <div className="transp-doc-dl">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      ))}
    </>
  )
}

export default function TransparenciaPage() {
  const [isJuntaModalOpen, setIsJuntaModalOpen] = useState(false)

  useEffect(() => {
    if (isJuntaModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isJuntaModalOpen])

  useEffect(() => {
    document.title = 'Transparencia – Regional 15'
  }, [])

  return (
    <>
      {/* TOP BAR */}
      <header className="top-bar">
        <div className="container-fluid" style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 6 }}>
          <div className="top-bar-left">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              809-686-3598
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style={{ display: 'inline-block' }}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
              <a href="https://www.instagram.com/regional_15minerd/" target="_blank" rel="noopener">@regional_15minerd</a>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style={{ display: 'inline-block' }}><path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.72-1 1-1h2V2h-3c-2.76 0-5 2.24-5 5v1z" fill="currentColor" /></svg>
              <a href="https://www.facebook.com/regional15minerd/" target="_blank" rel="noopener">Facebook Oficial</a>
            </span>
          </div>
          <div className="top-bar-right">
            <span><a href="/">← Volver al inicio</a></span>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #003876 50%, #001d4a 100%)',
        color: '#fff',
        padding: '80px 24px 60px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.06,
          backgroundImage: 'radial-gradient(circle at 25% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 75% 50%, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px, 40px 40px'
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
            <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          </div>
          <h1 style={{ fontFamily: "'Merriweather', serif", fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: 16, letterSpacing: '-0.02em' }}>Transparencia Institucional</h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', maxWidth: 650, margin: '0 auto', lineHeight: 1.7 }}>
            Documentos oficiales de la Regional 15 en cumplimiento con la <strong style={{ color: '#fff' }}>Ley General de Libre Acceso a la Información Pública (Ley 200-04)</strong>.
          </p>
          <div style={{ width: 60, height: 3, background: '#ed232a', margin: '24px auto', borderRadius: 2 }} />
        </div>
      </section>

      {/* LEY CITATION */}
      <section style={{ padding: '48px 24px', background: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <blockquote style={{
            borderLeft: '4px solid var(--red)',
            padding: '24px 28px',
            background: '#fff',
            borderRadius: '0 12px 12px 0',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
          }}>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--text-muted)', fontStyle: 'italic' }}>
              «La Regional de Educación 15, en cumplimiento con la <strong>Ley No. 200-04 de Libre Acceso a la Información Pública</strong> 
              y su reglamento de aplicación, pone a disposición de la ciudadanía los documentos institucionales que garantizan la 
              transparencia, la rendición de cuentas y el derecho fundamental de toda persona a solicitar y recibir información 
              veraz, oportuna y completa sobre la gestión pública del Estado dominicano.»
            </p>
            <footer style={{ marginTop: 12, fontSize: '0.82rem', color: 'var(--blue-dark)', fontWeight: 600 }}>
              — Dirección Regional de Educación 15, Santo Domingo
            </footer>
          </blockquote>
        </div>
      </section>

      {/* DOCUMENTOS */}
      <section style={{ padding: '60px 24px 72px', background: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ display: 'inline-block', background: '#fef2f2', color: 'var(--red)', fontSize: '0.75rem', fontWeight: 700, padding: '4px 14px', borderRadius: 30, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Documentos disponibles
            </span>
            <h2 style={{ fontFamily: "'Merriweather', serif", fontSize: 'clamp(1.4rem,2.5vw,1.8rem)', color: 'var(--blue-dark)', marginBottom: 10 }}>
              Accede a la Información Pública
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: 550, margin: '0 auto', lineHeight: 1.7 }}>
              En cumplimiento con la Ley 200-04, presentamos los documentos y portales donde puedes ejercer tu derecho a la información.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {/* POA – próximamente */}
            <div style={{
              background: '#fff', borderRadius: 16, padding: 32, display: 'flex', flexDirection: 'column', gap: 16,
              boxShadow: '0 4px 24px rgba(0,56,118,0.12)', transition: 'all 0.35s cubic-bezier(.4,0,.2,1)',
              border: '2px dashed #cbd5e1', textDecoration: 'none', color: 'inherit', position: 'relative', overflow: 'hidden',
              gridColumn: 'span 2', opacity: 0.7, cursor: 'default'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 14, background: '#f1f5f9',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#94a3b8', flexShrink: 0
                }}>
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#94a3b8', marginBottom: 4 }}>2.2.1 POA Regional 15 – 2025</h3>
                  <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6 }}>
                    Plan Operativo Anual de la Regional de Educación 15. Documento oficial de planificación, presupuesto y gestión institucional para el año fiscal 2025.
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 4 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#e2e8f0', color: '#94a3b8', fontSize: '0.8rem', fontWeight: 700, padding: '8px 20px', borderRadius: 30 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Próximamente disponible
                </span>
              </div>
            </div>

            {/* MINERD Portal */}
            <a href="https://ministeriodeeducacion.gob.do/transparencia/" target="_blank" rel="noopener" style={{
              background: '#fff', borderRadius: 16, padding: 28, display: 'flex', gap: 16,
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)', transition: 'all 0.3s',
              border: '1px solid #e8ecf2', textDecoration: 'none', color: 'inherit'
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,56,118,0.12)'; e.currentTarget.style.borderColor = '#1a7cc9' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'; e.currentTarget.style.borderColor = '#e8ecf2' }}>
              <div style={{ flexShrink: 0, width: 52, display: 'flex', justifyContent: 'center', color: '#1a7cc9' }}>
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </div>
              <div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--blue-dark)', marginBottom: 6 }}>Portal de Transparencia MINERD</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 8 }}>Portal oficial de Transparencia del Ministerio de Educación con acceso a todas las informaciones institucionales.</p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: '#1a7cc9', fontSize: '0.8rem', fontWeight: 600 }}>
                  Ir al portal <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" /></svg>
                </span>
              </div>
            </a>

            {/* SAIP */}
            <a href="https://saip.gob.do/" target="_blank" rel="noopener" style={{
              background: '#fff', borderRadius: 16, padding: 28, display: 'flex', gap: 16,
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)', transition: 'all 0.3s',
              border: '1px solid #e8ecf2', textDecoration: 'none', color: 'inherit'
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,56,118,0.12)'; e.currentTarget.style.borderColor = '#f0a500' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'; e.currentTarget.style.borderColor = '#e8ecf2' }}>
              <div style={{ flexShrink: 0, width: 52, display: 'flex', justifyContent: 'center', color: '#f0a500' }}>
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
              </div>
              <div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--blue-dark)', marginBottom: 6 }}>SAIP – Solicitud de Acceso</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 8 }}>Sistema de Solicitud de Acceso a la Información Pública de la República Dominicana.</p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: '#f0a500', fontSize: '0.8rem', fontWeight: 600 }}>
                  Ir a SAIP <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" /></svg>
                </span>
              </div>
            </a>
          </div>

          {/* NUEVOS DOCUMENTOS DE GESTIÓN */}
          <div style={{ marginTop: 48 }}>
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <span style={{ display: 'inline-block', background: '#eef2ff', color: '#1a7cc9', fontSize: '0.75rem', fontWeight: 700, padding: '4px 14px', borderRadius: 30, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Gestión y Planificación
              </span>
              <h2 style={{ fontFamily: "'Merriweather', serif", fontSize: 'clamp(1.2rem,2vw,1.5rem)', color: 'var(--blue-dark)' }}>
                Documentos de Gestión Institucional
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
              {[
                { type: 'doc', title: 'Informe Trimestre 1', desc: 'Informe de gestión correspondiente al primer trimestre del año fiscal 2025 de la Regional 15.', file: '/informe_trimestre_1.pdf' },
                { type: 'doc', title: 'Informe Trimestre 2', desc: 'Informe de gestión correspondiente al segundo trimestre del año fiscal 2025 de la Regional 15.', file: '/informe_trimestre_2.pdf' },
                { type: 'chart', title: '4. Registro de Ejecución', desc: 'Registro detallado de la ejecución presupuestaria y operativa de la Regional de Educación 15.', file: '/4_registro_de_ejecucion.pdf' },
                { type: 'ruler', title: 'Matriz de Alineación Estratégica', desc: 'Matriz que vincula los objetivos estratégicos de la Regional 15 con las metas del Plan Nacional de Educación.', file: '/matriz_de_alineacion_estrategica.pdf' }
              ].map((doc, i) => (
                <a key={i} href={doc.file} target="_blank" rel="noopener" style={{
                  background: '#fff', borderRadius: 14, padding: 22, display: 'flex', alignItems: 'center', gap: 14,
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)', transition: 'all 0.3s',
                  border: '1px solid #e8ecf2', textDecoration: 'none', color: 'inherit'
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,56,118,0.1)'; e.currentTarget.style.borderColor = '#1a7cc9' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)'; e.currentTarget.style.borderColor = '#e8ecf2' }}>
                  <div style={{ flexShrink: 0, width: 44, display: 'flex', justifyContent: 'center', color: '#1a7cc9' }}>
                    {doc.type === 'doc' && <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>}
                    {doc.type === 'chart' && <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>}
                    {doc.type === 'ruler' && <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5z"/><path d="M19 9h-4V5M9 19H5v-4M19 14h-4M14 19v-4"/></svg>}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--blue-dark)', marginBottom: 3 }}>{doc.title}</h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: 6 }}>{doc.desc}</p>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: 5,
                      background: 'linear-gradient(135deg, #003876, #1a7cc9)',
                      color: '#fff', fontSize: '0.72rem', fontWeight: 600,
                      padding: '5px 14px', borderRadius: 20,
                      transition: 'all 0.3s'
                    }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /></svg>
                      Descargar PDF
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* PLANES TRIMESTRALES (EXCEL) */}
          <div style={{ marginTop: 48 }}>
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <span style={{ display: 'inline-block', background: '#eafaf1', color: '#27ae60', fontSize: '0.75rem', fontWeight: 700, padding: '4px 14px', borderRadius: 30, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Planes y Metas
              </span>
              <h2 style={{ fontFamily: "'Merriweather', serif", fontSize: 'clamp(1.2rem,2vw,1.5rem)', color: 'var(--blue-dark)' }}>
                Planes Trimestrales de Trabajo (Excel)
              </h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                background: '#fff', borderRadius: 14, padding: '40px 32px', textAlign: 'center',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)', border: '1px solid #e8ecf2',
                maxWidth: 480, width: '100%'
              }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>📋</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--blue-dark)', marginBottom: 8 }}>Próximamente</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Los Planes Trimestrales de Trabajo estarán disponibles pronto en esta sección.
                </p>
              </div>
            </div>
          </div>

          {/* Dynamic uploaded documents */}
          <div style={{ marginTop: '28px' }}>
            <DocumentsSection />
          </div>

        </div>
      </section>

      {/* JUNTA REGIONAL */}
      <section style={{ padding: '60px 24px 72px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ display: 'inline-block', background: '#e0f2fe', color: '#0369a1', fontSize: '0.75rem', fontWeight: 700, padding: '4px 14px', borderRadius: 30, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Gobernanza y Participación
            </span>
            <h2 style={{ fontFamily: "'Merriweather', serif", fontSize: 'clamp(1.4rem,2.5vw,1.8rem)', color: 'var(--blue-dark)', marginBottom: 10 }}>
              Junta Regional 15
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: 650, margin: '0 auto', lineHeight: 1.7 }}>
              Espacio formal de diálogo, análisis y toma de decisiones estratégicas para fortalecer la gestión educativa, administrativa y comunitaria de la Regional.
            </p>
            <div style={{ width: 50, height: 2, background: 'var(--red)', margin: '16px auto 0', borderRadius: 2 }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 32 }}>
            
            {/* Sintesis y descarga */}
            <div style={{
              background: '#fff', borderRadius: 16, padding: 32,
              boxShadow: '0 4px 20px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0',
              display: 'flex', flexDirection: 'column', gap: 20
            }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--blue-dark)', marginBottom: 8 }}>
                  Propósito General de las Sesiones
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
                  Las juntas regionales constituyen el mecanismo principal de participación, supervisión y gobernanza educativa. En ellas se integran los distintos sectores de la comunidad para analizar la gestión institucional, dar seguimiento a la ejecución de planes y recursos, coordinar acciones estratégicas y asegurar la mejora continua en beneficio de los estudiantes de la Regional 15.
                </p>
              </div>

              <div 
                style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: 20, 
                  alignItems: 'center', 
                  background: '#f1f5f9', 
                  padding: 20, 
                  borderRadius: 12,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease-in-out',
                  border: '1px solid transparent'
                }}
                onClick={() => setIsJuntaModalOpen(true)}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.06)';
                  e.currentTarget.style.borderColor = 'rgba(0, 56, 118, 0.15)';
                  e.currentTarget.style.background = '#eef2ff';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.background = '#f1f5f9';
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 10, background: '#fdecea',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#c0392b', flexShrink: 0
                }}>
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                </div>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--blue-dark)', marginBottom: 2 }}>Actas y Relatorías - Reuniones Junta Regional</h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Historial consolidado de reuniones oficiales, relatorías y acuerdos institucionales.</p>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsJuntaModalOpen(true);
                  }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8, background: '#c0392b', color: '#fff',
                    fontSize: '0.82rem', fontWeight: 700, padding: '10px 20px', borderRadius: 30, border: 'none',
                    boxShadow: '0 4px 12px rgba(192,57,43,0.25)', transition: 'all 0.2s', cursor: 'pointer'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  Ver Acta y Relatoría
                </button>
              </div>
            </div>

            {/* Objetivos especificos */}
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--blue-dark)', marginBottom: 20, textAlign: 'center' }}>
                Propósitos Específicos de las Reuniones
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                {[
                  {
                    title: 'Fortalecer la Gestión Institucional',
                    desc: 'Analizar de manera continua el desempeño general de la Regional 15 y dar seguimiento oportuno a los planes estratégicos, proyectos operativos y metas trazadas.',
                    color: '#0284c7',
                    icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V9M12 17v-4M15 17v-6"/></svg>
                  },
                  {
                    title: 'Gobernanza y Transparencia',
                    desc: 'Revisar informes financieros y de ejecución presupuestaria, asegurando la fiscalización adecuada del uso de los recursos y el cumplimiento legal de las ordenanzas.',
                    color: '#16a34a',
                    icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  },
                  {
                    title: 'Coordinación Educativa y Administrativa',
                    desc: 'Planificar el inicio y cierre de los años escolares, evaluar la capacidad de matrícula y cupos, y articular programas, jornadas pedagógicas y actividades institucionales.',
                    color: '#ea580c',
                    icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  },
                  {
                    title: 'Participación y Vinculación Comunitaria',
                    desc: 'Integrar a representantes de las APMAE (padres), iglesias, sector comercial, autoridades locales y estudiantes para canalizar propuestas y dar respuesta a sus necesidades.',
                    color: '#8b5cf6',
                    icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  },
                  {
                    title: 'Impulsar la Calidad Educativa',
                    desc: 'Evaluar los indicadores de excelencia utilizando metodologías como el CAF y el PRECE, impulsando la autoevaluación, la cultura de calidad y el intercambio de buenas prácticas.',
                    color: '#eab308',
                    icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  },
                  {
                    title: 'Aprobación de Proyectos Regionales',
                    desc: 'Validar inversiones estratégicas, adecuaciones de infraestructura física y tecnológica, recursos escolares y proyectos de inclusión para responder a las prioridades locales.',
                    color: '#db2777',
                    icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><path d="M12 11v6M9 14h6"/></svg>
                  }
                ].map((obj, i) => (
                  <div key={i} style={{
                    background: '#fff', borderRadius: 12, padding: 24,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.03)', border: '1px solid #e2e8f0',
                    display: 'flex', flexDirection: 'column', gap: 12
                  }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 8, background: `${obj.color}15`,
                      color: obj.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {obj.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--blue-dark)', marginBottom: 6 }}>{obj.title}</h4>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{obj.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LEY INFO */}
      <section style={{ padding: '56px 24px', background: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <h2 style={{ fontFamily: "'Merriweather', serif", fontSize: 'clamp(1.2rem,2vw,1.5rem)', color: 'var(--blue-dark)', marginBottom: 8, display: 'inline-flex', alignItems: 'center', gap: '8px', justifyContent: 'center', width: '100%' }}>
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" style={{ verticalAlign: 'middle' }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Marco Legal
            </h2>
            <div style={{ width: 50, height: 2, background: 'var(--red)', margin: '0 auto', borderRadius: 2 }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { num: 'Ley 200-04', title: 'Libre Acceso a la Información Pública', desc: 'Garantiza el derecho de toda persona a solicitar y recibir información de los órganos del Estado dominicano.' },
              { num: 'Reglamento 130-05', title: 'Reglamento de Aplicación', desc: 'Establece los procedimientos, plazos y mecanismos para el ejercicio efectivo del derecho de acceso a la información.' },
              { num: 'Ley 10-04', title: 'Cámara de Cuentas', desc: 'Norma la fiscalización y el control de los fondos públicos para asegurar la transparencia en la gestión gubernamental.' }
            ].map((ley, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: 12, padding: 24,
                boxShadow: '0 1px 6px rgba(0,0,0,0.04)', border: '1px solid #e8ecf2'
              }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#ed232a', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{ley.num}</div>
                <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--blue-dark)', marginBottom: 6 }}>{ley.title}</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{ley.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0a1628', color: 'rgba(255,255,255,0.5)', padding: '28px 24px', textAlign: 'center', fontSize: '0.8rem' }}>
        <p style={{ marginBottom: 4 }}>© 2026 Regional de Educación 15 – Ministerio de Educación RD</p>
        <p>Transparencia y acceso a la información pública · Ley 200-04</p>
      </footer>

      {/* MODAL JUNTA REGIONAL */}
      {isJuntaModalOpen && (
        <div className="modal-overlay open" onClick={() => setIsJuntaModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Actas y Relatorías – Junta Regional 15</h2>
              <button className="modal-close" onClick={() => setIsJuntaModalOpen(false)}>✕</button>
            </div>
            <div className="modal-body">
              {/* Main Image */}
              <div className="gallery-main" style={{ marginBottom: '24px' }}>
                <Image
                  src="/assets/img/reunion_junta_regional.png"
                  alt="Sesión de la Junta Regional 15"
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Modal Text & Info */}
              <div className="modal-text" style={{ fontSize: '0.98rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                <p style={{ marginBottom: '16px' }}>
                  Las reuniones de la <strong>Junta Regional 15</strong> constituyen el espacio formal de diálogo, planificación, supervisión y toma de decisiones estratégicas que involucran a todos los sectores de la comunidad educativa (directivos, docentes, APMAE, iglesias y organizaciones civiles).
                </p>
                <p style={{ marginBottom: '20px' }}>
                  A través de estas actas y relatorías oficiales, se garantiza la transparencia, la rendición de cuentas y el correcto uso de los recursos transferidos del Ministerio de Educación (MINERD) para el fortalecimiento de los centros escolares en los diferentes distritos bajo nuestra jurisdicción.
                </p>

                <h3 style={{ fontSize: '1.2rem', color: 'var(--blue-dark)', marginBottom: '12px', fontWeight: 700 }}>
                  Temas y Propósitos Clave de las Sesiones:
                </h3>
                <ul style={{ paddingLeft: '20px', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px', listStyleType: 'disc' }}>
                  <li>
                    <strong>Fortalecimiento Institucional:</strong> Seguimiento del Plan Operativo Anual (POA), monitoreo de metas y evaluación constante del desempeño y la capacidad administrativa de la Regional.
                  </li>
                  <li>
                    <strong>Gobernanza y Presupuesto:</strong> Revisión de los informes financieros y de ejecución de recursos públicos transferidos a los distritos y planteles educativos.
                  </li>
                  <li>
                    <strong>Articulación Pedagógica:</strong> Coordinación de jornadas docentes, programas de capacitación y estrategias para el inicio, desarrollo y cierre del año escolar.
                  </li>
                  <li>
                    <strong>Participación Social:</strong> Integración y escucha activa a las problemáticas presentadas por las APMAE, sindicatos y representantes comunitarios.
                  </li>
                  <li>
                    <strong>Cultura de Calidad:</strong> Impulso de metodologías de autoevaluación como el CAF y la postulación en la Gala Regional de la Excelencia y el premio PRECE.
                  </li>
                </ul>
              </div>

              {/* Modal Meta */}
              <div className="modal-meta" style={{ marginTop: '20px', borderTop: '1px solid var(--gray-light)', paddingTop: '20px' }}>
                <div className="meta-item">
                  <span className="meta-label">📅 Documento:</span>
                  <strong>Compendio de Actas y Relatorías</strong>
                </div>
                <div className="meta-item">
                  <span className="meta-label">📂 Categoría:</span>
                  <strong>Gobernanza y Transparencia</strong>
                </div>
                <div className="meta-item">
                  <span className="meta-label">💾 Tamaño:</span>
                  <strong>10.7 MB</strong>
                </div>
              </div>

              {/* Download Footer */}
              <div className="modal-footer" style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
                <button 
                  className="btn btn-secondary" 
                  onClick={() => setIsJuntaModalOpen(false)}
                  style={{ borderRadius: '30px', padding: '10px 24px', fontWeight: 600, border: '1px solid var(--gray-light)', cursor: 'pointer' }}
                >
                  Cerrar
                </button>
                <a 
                  href="/reuniones_junta_regional.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary" 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--red)', borderColor: 'var(--red)', color: '#fff', borderRadius: '30px', padding: '10px 24px', fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 12px rgba(237,35,42,0.25)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                  </svg>
                  Descargar Acta Completa (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
