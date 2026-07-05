// components/landing/TransparenciaSection.tsx
'use client'

import React from 'react'
import DocumentsSection from '@/components/shared/DocumentsSection'

export default function TransparenciaSection() {
  return (
    <section id="transparencia" className="section" style={{ background: 'var(--bg-alt)' }} aria-label="Documentos de transparencia">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            Transparencia
          </span>
          <h2>Documentos Institucionales</h2>
          <p>Accede a los documentos oficiales de la Regional 15 en cumplimiento con las normativas de transparencia y acceso a la información pública.</p>
          <div className="section-divider"></div>
        </div>

        {/* Portal de Transparencia CTA Banner */}
        <div className="transp-category-block" style={{ border: '1px solid rgba(0, 56, 118, 0.1)', background: 'linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(248,250,252,0.85) 100%)', backdropFilter: 'blur(8px)', borderRadius: '16px', padding: '36px 24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(237, 35, 42, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--red)' }}>
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--blue-dark)', margin: 0, fontFamily: "'Poppins', sans-serif" }}>Planificación Anual, POA e Informes</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', maxWidth: '620px', lineHeight: 1.6, margin: 0 }}>
              Para consultar el Plan Operativo Anual (POA), los informes trimestrales de monitoreo, el registro de ejecución presupuestaria y otros documentos institucionales de la Regional 15, acceda a la sección de transparencia completa.
            </p>
            <a href="/transparencia" className="btn-main" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 24px', fontSize: '0.9rem', fontWeight: 600, marginTop: '8px', textDecoration: 'none' }}>
              Ver Portal de Transparencia
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </div>

        {/* Dynamic uploaded documents */}
        <DocumentsSection />
      </div>
    </section>
  )
}
