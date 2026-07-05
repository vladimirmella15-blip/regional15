'use client'

import React from 'react'
import Image from 'next/image'
import { useTilt } from '@/hooks/useTilt'

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

function GalleryCard({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  const tiltRef = useTilt<HTMLDivElement>(5)
  const src = formatImgSrc(item.imagen)

  return (
    <div
      ref={tiltRef}
      className="gallery-masonry-item"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <div className="gallery-masonry-blur" style={{ backgroundImage: `url(${src})` }} />
      <Image
        src={src}
        alt={item.titulo}
        fill
        sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
        style={{ objectFit: 'cover', position: 'relative', zIndex: 1 }}
        loading="lazy"
      />
      <div className="gallery-masonry-overlay">
        <span>{item.titulo}</span>
      </div>
    </div>
  )
}

export default function GallerySection({ gallery, handleGalleryClick }: GallerySectionProps) {
  if (!gallery || gallery.length === 0) return null

  return (
    <section id="galeria" className="section gallery-section" aria-label="Galería fotográfica Regional 15">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-eyebrow">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ verticalAlign: 'middle', marginRight: 4 }}><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
            Galería &amp; Instagram
          </span>
          <h2>Momentos de la Comunidad Educativa</h2>
          <p>Síguenos en Instagram <a href="https://www.instagram.com/regional_15minerd/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--red)', fontWeight: 700 }}>@regional_15minerd</a></p>
          <div className="section-divider" />
        </div>

        <div className="gallery-masonry animate-on-scroll">
          {gallery.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={() => handleGalleryClick(item.imagen, item.titulo)}
            />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="https://www.instagram.com/regional_15minerd/" target="_blank" rel="noopener noreferrer" className="btn-main">
            Seguir en Instagram
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" /></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
