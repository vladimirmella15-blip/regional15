// components/landing/GallerySection.tsx
'use client'

import React from 'react'
import Image from 'next/image'

interface GalleryItem {
  id: string
  imagen: string
  titulo: string
}

interface GallerySectionProps {
  gallery?: GalleryItem[]
  handleGalleryClick: (src: string, caption: string) => void
}

const formatImgSrc = (src: string) => {
  if (!src) return ''
  if (src.startsWith('/') || src.startsWith('http')) return src
  return '/' + src
}

export default function GallerySection({ gallery, handleGalleryClick }: GallerySectionProps) {
  if (!gallery || gallery.length === 0) return null

  return (
    <section id="galeria" className="section gallery-section" aria-label="Galería fotográfica Regional 15">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
            Galería
          </span>
          <h2>Momentos de la Comunidad Educativa</h2>
          <p>Síguenos en Instagram <a href="https://www.instagram.com/regional_15minerd/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--red)', fontWeight: 700 }}>@regional_15minerd</a> — 9,429 seguidores · 2,527 publicaciones</p>
          <div className="section-divider"></div>
        </div>
        <div className="gallery-grid animate-on-scroll" id="dynamic-galeria">
          {gallery.map((item) => (
            <div
              className="gallery-item"
              key={item.id}
              onClick={() => handleGalleryClick(item.imagen, item.titulo)}
              style={{
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(0,0,0,0.85)'
              }}
            >
              {/* Blurred background image to prevent empty borders */}
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${formatImgSrc(item.imagen)})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(12px) brightness(0.6)',
                  transform: 'scale(1.1)',
                  opacity: 0.8
                }} 
              />
              
              {/* Main contained image */}
              <Image
                src={formatImgSrc(item.imagen)}
                alt={item.titulo}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                style={{ objectFit: 'contain', position: 'relative', zIndex: 1 }}
                loading="lazy"
              />
              <div className="gallery-overlay" style={{ zIndex: 2 }}>
                <span>{item.titulo}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="https://www.instagram.com/regional_15minerd/" target="_blank" rel="noopener noreferrer" className="btn-main">
            Ver todas las publicaciones en Instagram
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" /></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
