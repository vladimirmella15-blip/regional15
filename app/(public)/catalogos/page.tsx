'use client'

import { useEffect, useState } from 'react'
import { catalogos } from '@/data/catalogos'

export default function CatalogosPage() {
  const [viewerPdf, setViewerPdf] = useState<{ file: string; nombre: string } | null>(null)

  useEffect(() => {
    document.title = 'Catálogos de Servicios Regional 15'
  }, [])

  useEffect(() => {
    if (!viewerPdf) return
    document.body.style.overflow = 'hidden'
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setViewerPdf(null)
    }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('keydown', handleKey)
    }
  }, [viewerPdf])

  const pdfUrl = (file: string) => '/Catalogos/' + encodeURIComponent(file)

  return (
    <main style={{ marginTop: '80px' }}>
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--blue-dark) 0%, #002a5c 100%)', padding: '70px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, var(--gold), transparent)' }} />
        <div style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, var(--red), transparent)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-eyebrow" style={{ color: 'var(--gold)', marginBottom: '12px', display: 'block' }}>CATÁLOGOS Y DOCUMENTOS</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'white', margin: '0 0 14px', fontWeight: 800, fontFamily: "'Outfit', sans-serif", lineHeight: 1.1 }}>Catálogos de Servicios</h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.82)', maxWidth: '620px', lineHeight: 1.7, margin: 0 }}>
            Consulta los catálogos de servicios de cada departamento, junto a manuales y documentos institucionales de la Regional 15. Toca cualquier tarjeta para leerlo sin salir de la página.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-body)' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2>Documentos disponibles</h2>
            <div className="section-divider" />
          </div>
          <div className="badge-grid">
            {catalogos.map((item) => (
              <div className="badge-card catalogo-card" key={item.file} onClick={() => setViewerPdf(item)}>
                <div className="badge-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: item.icono }} />
                  <span className="catalogo-pdf-tag">PDF</span>
                </div>
                <h3>{item.nombre}</h3>
                <span className="badge-card-link">
                  Ver catálogo
                  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" /></svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {viewerPdf && (
        <div className="catalogos-viewer-overlay" onClick={() => setViewerPdf(null)}>
          <div className="catalogos-viewer" onClick={(e) => e.stopPropagation()}>
            <div className="catalogos-viewer-header">
              <h3 className="catalogos-viewer-title">{viewerPdf.nombre}</h3>
              <a
                href={pdfUrl(viewerPdf.file)}
                target="_blank"
                rel="noopener noreferrer"
                className="catalogos-viewer-open"
                onClick={(e) => e.stopPropagation()}
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Abrir en pestaña nueva
              </a>
              <button className="catalogos-viewer-close" onClick={() => setViewerPdf(null)} aria-label="Cerrar">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
            </div>
            <iframe
              src={pdfUrl(viewerPdf.file)}
              className="catalogos-viewer-frame"
              title={viewerPdf.nombre}
            />
          </div>
        </div>
      )}
    </main>
  )
}
