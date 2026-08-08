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
        <div className="transp-category-block" style={{ border: '1px solid rgba(0, 56, 118, 0.12)', background: 'linear-gradient(135deg, var(--blue-dark) 0%, #002a5c 70%)', borderRadius: '16px', padding: '40px 28px', textAlign: 'center', boxShadow: '0 12px 34px rgba(0,56,118,0.22)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-40%', right: '-6%', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(240,165,0,0.16), transparent)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-45%', left: '-6%', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(237,35,42,0.14), transparent)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(240, 165, 0, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', border: '1px solid rgba(240,165,0,0.35)' }}>
              <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--white)', margin: 0, fontFamily: "'Outfit', sans-serif" }}>Planificación Anual, POA e Informes</h3>
            <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.8)', maxWidth: '620px', lineHeight: 1.6, margin: 0 }}>
              Para consultar el Plan Operativo Anual (POA), los informes trimestrales de monitoreo, el registro de ejecución presupuestaria y otros documentos institucionales de la Regional 15, acceda a la sección de transparencia completa.
            </p>
            <a href="/transparencia" className="btn-main" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', fontSize: '0.9rem', fontWeight: 700, marginTop: '8px', textDecoration: 'none', background: 'var(--red)', color: 'var(--white)', borderRadius: '30px' }}>
              Ver Portal de Transparencia
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        {/* Dynamic uploaded documents */}
        <DocumentsSection />
      </div>
    </section>
  )
}
