'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { esReciente, formatearFechaItem, ordenarPorFecha } from '@/lib/galeria'

export default function GaleriaPage() {
  const [data, setData] = useState<any>(null)
  const [lightbox, setLightbox] = useState<null | { src: string; caption: string; index: number }>(null)

  useEffect(() => { document.title = 'Galería Regional 15' }, [])

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(() => {})
  }, [])

  const galeria = ordenarPorFecha<any>(data?.galeria || [])

  const formatImgSrc = (src: string) => {
    if (!src) return ''
    if (src.startsWith('/') || src.startsWith('http')) return src
    return '/' + src
  }

  const openLightbox = (src: string, caption: string, index: number) => {
    setLightbox({ src, caption, index })
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightbox(null)
    document.body.style.overflow = ''
  }

  const navigateLightbox = (dir: number) => {
    if (!lightbox || !galeria.length) return
    const next = (lightbox.index + dir + galeria.length) % galeria.length
    const item = galeria[next]
    setLightbox({ src: item.imagen || item.src, caption: item.titulo || item.caption, index: next })
  }

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightbox) return
      if (e.key === 'ArrowLeft') navigateLightbox(-1)
      if (e.key === 'ArrowRight') navigateLightbox(1)
      if (e.key === 'Escape') closeLightbox()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [lightbox])

  return (
    <main style={{ marginTop: '80px' }}>
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--blue-dark) 0%, #002a5c 100%)', padding: '70px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, var(--gold), transparent)' }} />
        <div style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, var(--red), transparent)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-eyebrow" style={{ color: 'var(--gold)', marginBottom: '12px', display: 'block' }}>GALERÍA MULTIMEDIA</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'white', margin: '0 0 14px', fontWeight: 800, fontFamily: "'Outfit', sans-serif", lineHeight: 1.1 }}>Galería de Imágenes</h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.82)', maxWidth: '620px', lineHeight: 1.7, margin: 0 }}>
            Explora momentos destacados de las actividades, eventos y programas educativos de la Regional 15.
            Las fotos más recientes aparecen primero.
          </p>
          {galeria.length > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginTop: '18px' }}>
              <span style={{ background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.22)', borderRadius: '999px', padding: '6px 14px', color: '#fff', fontSize: '.8rem', fontWeight: 700 }}>
                {galeria.length} imágenes
              </span>
              {formatearFechaItem(galeria[0]) && (
                <span style={{ color: 'rgba(255,255,255,0.78)', fontSize: '.8rem' }}>
                  Última actualización: {formatearFechaItem(galeria[0])}
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-body)' }}>
        <div className="container-lg">
          {galeria.length > 0 ? (
            <div className="galeria-page-grid">
              {galeria.map((item: any, i: number) => {
                const src = formatImgSrc(item.imagen || item.src)
                const caption = item.titulo || item.caption || ''
                const nueva = esReciente(item)
                const fecha = formatearFechaItem(item)
                return (
                  <div
                    key={i}
                    className="galeria-page-card"
                    onClick={() => openLightbox(src, caption, i)}
                  >
                    <Image
                      src={src}
                      alt={caption || `Galería ${i + 1}`}
                      width={400}
                      height={300}
                      style={{ width: '100%', height: '100%', objectFit: item.ajuste === 'contain' ? 'contain' : 'cover', display: 'block' }}
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    {nueva && <span className="galeria-page-badge">Nuevo</span>}
                    {fecha && <span className="galeria-page-fecha">{fecha}</span>}
                    {caption && item.ajuste !== 'contain' && <div className="galeria-page-caption">{caption}</div>}
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="text-center" style={{ padding: '60px 0', color: 'var(--text-muted)' }}>
              <p>Cargando galería...</p>
            </div>
          )}
        </div>
      </section>

      {lightbox && (
        <div className="lightbox open" onClick={(e) => { if (e.target === e.currentTarget) closeLightbox() }}>
          <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
          <button className="lightbox-arrow lightbox-prev" onClick={() => navigateLightbox(-1)}>
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /></svg>
          </button>
          <Image className="lightbox-img" src={formatImgSrc(lightbox.src)} alt={lightbox.caption} width={1200} height={800} style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain' }} />
          <button className="lightbox-arrow lightbox-next" onClick={() => navigateLightbox(1)}>
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
          </button>
          <div className="lightbox-caption">{lightbox.caption}</div>
        </div>
      )}
    </main>
  )
}
