// components/landing/GallerySection.tsx
'use client'

import React from 'react'
import Image from 'next/image'
import { useTilt } from '@/hooks/useTilt'
import {
  esReciente,
  formatearFechaItem,
  ordenarPorFecha,
  type GaleriaItem,
} from '@/lib/galeria'

interface GallerySectionProps {
  gallery?: GaleriaItem[]
  handleGalleryClick: (src: string, caption: string) => void
}

const LIMITE_INICIO = 12

const formatImgSrc = (src: string) => {
  if (!src) return ''
  if (src.startsWith('/') || src.startsWith('http')) return src
  return '/' + src
}

function GalleryCard({
  item,
  onClick,
  featured = false,
}: {
  item: GaleriaItem
  onClick: () => void
  featured?: boolean
}) {
  const tiltRef = useTilt<HTMLDivElement>(featured ? 3 : 5)
  const src = formatImgSrc(item.imagen)
  const nueva = esReciente(item)
  const fecha = formatearFechaItem(item)

  return (
    <div
      ref={tiltRef}
      className={`gallery-masonry-item${featured ? ' gallery-masonry-item--featured' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={item.titulo}
    >
      <div className="gallery-masonry-blur" style={{ backgroundImage: `url(${src})` }} />
      <Image
        src={src}
        alt={item.titulo}
        fill
        sizes={featured ? '(max-width: 768px) 100vw, 55vw' : '(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw'}
        style={{ objectFit: item.ajuste === 'contain' ? 'contain' : 'cover', position: 'relative', zIndex: 1 }}
        loading="lazy"
      />
      {nueva && <span className="gallery-badge-nuevo">Nuevo</span>}
      {fecha && <span className="gallery-fecha">{fecha}</span>}
      <div className="gallery-masonry-overlay">
        <span>{item.titulo}</span>
      </div>
    </div>
  )
}

export default function GallerySection({ gallery, handleGalleryClick }: GallerySectionProps) {
  if (!gallery || gallery.length === 0) return null

  const ordenada = ordenarPorFecha(gallery)
  const destacadas = ordenada.slice(0, 3)
  const resto = ordenada.slice(3, LIMITE_INICIO)
  const hayMas = ordenada.length > LIMITE_INICIO
  const ultimaFecha = formatearFechaItem(ordenada[0])

  return (
    <section id="galeria" className="section gallery-section" aria-label="Galería fotográfica Regional 15">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-eyebrow">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ verticalAlign: 'middle', marginRight: 4 }}><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
            Galería
          </span>
          <h2>Momentos de la Comunidad Educativa</h2>
          <p>Las fotos más recientes aparecen primero. {ordenada.length} imágenes disponibles{ultimaFecha ? ` · última actualización: ${ultimaFecha}` : ''}.</p>
          <div className="section-divider" />
        </div>

        <div className="gallery-latest animate-on-scroll">
          {destacadas.map((item, index) => (
            <GalleryCard
              key={item.id || `destacada-${index}`}
              item={item}
              featured={index === 0}
              onClick={() => handleGalleryClick(item.imagen, item.titulo)}
            />
          ))}
        </div>

        {resto.length > 0 && (
          <div className="gallery-masonry animate-on-scroll">
            {resto.map((item, index) => (
              <GalleryCard
                key={item.id || `galeria-${index}`}
                item={item}
                onClick={() => handleGalleryClick(item.imagen, item.titulo)}
              />
            ))}
          </div>
        )}

        <div className="gallery-actions">
          <a href="/galeria" className="btn-main">
            Ver galería completa
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" /></svg>
          </a>
          <a href="https://www.instagram.com/regional_15minerd/" target="_blank" rel="noopener noreferrer" className="gallery-instagram-link">
            Seguir en Instagram
          </a>
        </div>

        {hayMas && (
          <p className="gallery-more-note">
            En esta portada mostramos las {LIMITE_INICIO} fotos más recientes. La galería completa conserva todos los momentos anteriores.
          </p>
        )}
      </div>
    </section>
  )
}
