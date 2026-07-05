'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function GaleriaPage() {
  const [data, setData] = useState<any>(null)
  const [lightbox, setLightbox] = useState<null | { src: string; caption: string; index: number }>(null)

  useEffect(() => { document.title = 'Galería – Regional 15' }, [])

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(() => {})
  }, [])

  const galeria = data?.galeria || []

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
            Explora momentos destacados de las actividades, eventos y programas educativos de la Regional 15 a través de nuestra galería de imágenes.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-body)' }}>
        <div className="container-lg">
          {galeria.length > 0 ? (
            <div style={{ columns: '3 280px', gap: '20px' }}>
              {galeria.map((item: any, i: number) => {
                const src = formatImgSrc(item.imagen || item.src)
                const caption = item.titulo || item.caption || ''
                return (
                  <div key={i} style={{ breakInside: 'avoid', marginBottom: '20px', cursor: 'pointer', borderRadius: '14px', overflow: 'hidden', position: 'relative', transition: 'all 0.25s ease' }}
                    onClick={() => openLightbox(src, caption, i)}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,56,118,0.15)' }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
                  >
                    <Image src={src} alt={caption || `Galería ${i + 1}`} width={400} height={300} style={{ width: '100%', height: 'auto', display: 'block' }} sizes="(max-width: 768px) 100vw, 33vw" />
                    {caption && (
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px 16px 12px', background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)', color: 'white', fontSize: '0.82rem', fontWeight: 600 }}>
                        {caption}
                      </div>
                    )}
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
