'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useTilt } from '@/hooks/useTilt'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { catalogos } from '@/data/catalogos'

interface Servicio {
  id: string
  titulo: string
  descripcion: string
  icono_path: string
}

interface Programa {
  id: string
  titulo: string
  descripcion: string
  logo?: string
  icono_path?: string
  icono_viewbox?: string
  enlace: string
  texto_enlace: string
}

interface Enlace {
  id: string
  nombre: string
  descripcion: string
  url: string
}

interface ServiciosSectionProps {
  servicios?: Servicio[]
  programas?: Programa[]
  enlaces?: Enlace[]
}

function BadgeCard({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  const ref = useTilt<HTMLDivElement>(6)
  return <div ref={ref} className="badge-card" onClick={onClick}>{children}</div>
}

export default function ServiciosSection({ servicios, programas, enlaces }: ServiciosSectionProps) {
  const [activeTab, setActiveTab] = useState<'servicios' | 'programas' | 'enlaces' | 'catalogos'>('servicios')
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [viewerPdf, setViewerPdf] = useState<{ file: string; nombre: string } | null>(null)
  const sectionRef = useScrollReveal<HTMLElement>()

  const hasServicios = servicios && servicios.length > 0
  const hasProgramas = programas && programas.length > 0
  const hasEnlaces = enlaces && enlaces.length > 0

  const pdfUrl = (file: string) => '/Catalogos/' + encodeURIComponent(file)

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

  if (!hasServicios && !hasProgramas && !hasEnlaces && catalogos.length === 0) return null

  const openDetail = (item: any) => setSelectedItem(item)
  const closeDetail = () => setSelectedItem(null)

  return (
    <section id="servicios" ref={sectionRef} className="section services-section" aria-label="Servicios, programas, enlaces y catálogos">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-eyebrow">Servicios · Programas · Enlaces · Catálogos</span>
          <h2>Oferta Educativa Integral</h2>
          <p>Conoce los servicios, programas educativos y enlaces institucionales que la Regional 15 pone a tu disposición.</p>
          <div className="section-divider"></div>
        </div>

        <div className="tabs-header animate-on-scroll">
          {hasServicios && (
            <button className={`tab-btn ${activeTab === 'servicios' ? 'active' : ''}`} onClick={() => setActiveTab('servicios')}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: 6, verticalAlign: 'middle' }}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              Servicios
            </button>
          )}
          {hasProgramas && (
            <button className={`tab-btn ${activeTab === 'programas' ? 'active' : ''}`} onClick={() => setActiveTab('programas')}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: 6, verticalAlign: 'middle' }}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5v-15z"/></svg>
              Programas
            </button>
          )}
          {hasEnlaces && (
            <button className={`tab-btn ${activeTab === 'enlaces' ? 'active' : ''}`} onClick={() => setActiveTab('enlaces')}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: 6, verticalAlign: 'middle' }}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              Enlaces
            </button>
          )}
          <button className={`tab-btn ${activeTab === 'catalogos' ? 'active' : ''}`} onClick={() => setActiveTab('catalogos')}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: 6, verticalAlign: 'middle' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            Catálogos
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'servicios' && hasServicios && (
            <div className="badge-grid" id="dynamic-servicios">
              {servicios!.map((item) => (
                <BadgeCard key={item.id} onClick={() => openDetail(item)}>
                  <div className="badge-card-icon">
                    <svg viewBox="0 0 24 24"><path d={item.icono_path} /></svg>
                  </div>
                  <h3>{item.titulo}</h3>
                  <p dangerouslySetInnerHTML={{ __html: item.descripcion }} />
                </BadgeCard>
              ))}
            </div>
          )}

          {activeTab === 'programas' && hasProgramas && (
            <div className="badge-grid" id="dynamic-programas">
              {programas!.map((item) => (
                <BadgeCard key={item.id} onClick={() => openDetail(item)}>
                  <div className="badge-card-icon">
                    {item.logo ? (
                      <Image src={item.logo.startsWith('/') ? item.logo : '/' + item.logo} alt={item.titulo} width={36} height={36} style={{ objectFit: 'contain' }} />
                    ) : (
                      <svg viewBox={item.icono_viewbox || '0 0 24 24'}><path d={item.icono_path} /></svg>
                    )}
                  </div>
                  <h3>{item.titulo}</h3>
                  <p dangerouslySetInnerHTML={{ __html: item.descripcion }} />
                  <a href={item.enlace} target="_blank" rel="noopener noreferrer" className="badge-card-link" onClick={(e) => e.stopPropagation()}>
                    {item.texto_enlace}
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" /></svg>
                  </a>
                </BadgeCard>
              ))}
            </div>
          )}

          {activeTab === 'enlaces' && hasEnlaces && (
            <div className="badge-grid badge-grid-links" id="dynamic-enlaces">
              {enlaces!.map((item) => (
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="badge-card badge-card-link" key={item.id}>
                  <div className="badge-card-icon badge-card-icon-sm">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3>{item.nombre}</h3>
                    <p dangerouslySetInnerHTML={{ __html: item.descripcion }} />
                  </div>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{ flexShrink: 0, color: 'var(--gray-dark)' }}><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" /></svg>
                </a>
              ))}
            </div>
          )}

          {activeTab === 'catalogos' && (
            <div className="badge-grid" id="dynamic-catalogos">
              {catalogos.map((item) => (
                <div className="badge-card catalogo-card" key={item.file} onClick={() => setViewerPdf(item)}>
                  <div className="badge-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                  </div>
                  <h3>{item.nombre}</h3>
                  <span className="badge-card-link">
                    Ver catálogo
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" /></svg>
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedItem && (
        <div className="badge-modal-overlay" onClick={closeDetail}>
          <div className="badge-modal" onClick={(e) => e.stopPropagation()}>
            <button className="badge-modal-close" onClick={closeDetail} aria-label="Cerrar">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
            <div className="badge-modal-icon">
              {selectedItem.logo ? (
                <Image src={selectedItem.logo.startsWith('/') ? selectedItem.logo : '/' + selectedItem.logo} alt={selectedItem.titulo || selectedItem.nombre} width={56} height={56} style={{ objectFit: 'contain' }} />
              ) : (
                <svg viewBox={(selectedItem.icono_viewbox || '0 0 24 24')}><path d={selectedItem.icono_path} /></svg>
              )}
            </div>
            <h2 className="badge-modal-title">{selectedItem.titulo || selectedItem.nombre}</h2>
            <p className="badge-modal-desc" dangerouslySetInnerHTML={{ __html: selectedItem.descripcion }} />
            {selectedItem.enlace && (
              <a href={selectedItem.enlace} target="_blank" rel="noopener noreferrer" className="badge-modal-link">
                {selectedItem.texto_enlace || 'Visitar sitio'}
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" /></svg>
              </a>
            )}
          </div>
        </div>
      )}

      {/* Catálogos PDF Viewer */}
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
    </section>
  )
}
