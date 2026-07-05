// components/NewsModal.tsx
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import ShareButton from '@/components/ShareButton'

interface GalleryImage {
  src: string
  caption: string
}

interface NewsItem {
  id: string
  titulo: string
  fecha: string
  categoria: string
  descripcion: string
  contenido_completo: string
  imagen: string
  galeria?: GalleryImage[]
  enlace: string
  texto_enlace: string
  autor?: string
}

interface NewsModalProps {
  noticia: NewsItem | null
  isOpen: boolean
  onClose: () => void
}

const formatImgSrc = (src: string) => {
  if (!src) return ''
  if (src.startsWith('/') || src.startsWith('http')) return src
  return '/' + src
}

export default function NewsModal({ noticia, isOpen, onClose }: NewsModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    setCurrentImageIndex(0)
  }, [noticia])

  if (!noticia) return null

  const images = noticia.galeria && noticia.galeria.length > 0
    ? noticia.galeria
    : (noticia.imagen ? [{ src: noticia.imagen, caption: noticia.titulo }] : [])
  const currentImage = images[currentImageIndex]

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{noticia.titulo}</h2>
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-body">
          {images.length > 0 && (
            <div className="modal-gallery">
              <div className="gallery-main">
                {currentImage && (
                  <Image
                    src={formatImgSrc(currentImage.src)}
                    alt={currentImage.caption}
                    fill
                    sizes="(max-width: 768px) 100vw, 80vw"
                    style={{ objectFit: 'cover' }}
                  />
                )}

                {images.length > 1 && (
                  <>
                    <button
                      className="gallery-nav prev"
                      onClick={handlePrevImage}
                      aria-label="Anterior"
                      style={{ zIndex: 10 }}
                    >
                      ‹
                    </button>
                    <button
                      className="gallery-nav next"
                      onClick={handleNextImage}
                      aria-label="Siguiente"
                      style={{ zIndex: 10 }}
                    >
                      ›
                    </button>
                    <div className="gallery-counter" style={{ zIndex: 10 }}>
                      {currentImageIndex + 1} / {images.length}
                    </div>
                  </>
                )}
              </div>

              {currentImage && (
                <p className="gallery-caption">{currentImage.caption}</p>
              )}

              {images.length > 1 && (
                <div className="gallery-thumbnails">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      className={`gallery-thumb ${idx === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(idx)}
                      title={img.caption}
                      style={{ position: 'relative' }}
                    >
                      <Image
                        src={formatImgSrc(img.src)}
                        alt={img.caption}
                        fill
                        sizes="80px"
                        style={{ objectFit: 'cover' }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="modal-text">
            {noticia.contenido_completo ? (
              noticia.contenido_completo.includes('<') ? (
                <div dangerouslySetInnerHTML={{ __html: noticia.contenido_completo }} />
              ) : (
                noticia.contenido_completo.split('\n\n').map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))
              )
            ) : (
              <p>{noticia.descripcion}</p>
            )}
          </div>

          <div className="modal-footer">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ShareButton title={noticia.titulo} text={noticia.descripcion} />
              {noticia.enlace && (
                <a href={noticia.enlace} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginLeft: 'auto' }}>
                  {noticia.texto_enlace} →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
