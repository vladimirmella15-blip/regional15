// app/page-noticias.tsx (sección noticias mejorada para integrar en page.tsx)
'use client'

import { useState, useEffect } from 'react'
import NewsCard from '@/components/NewsCard'
import NewsModal from '@/components/NewsModal'

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
  video?: string
  enlace: string
  texto_enlace: string
  autor?: string
}

interface NoticiasProps {
  noticias?: NewsItem[]
}

export function NoticiasSection({ noticias: initialNoticias }: NoticiasProps) {
  const [noticias, setNoticias] = useState<NewsItem[]>(initialNoticias || [])
  const [selectedNoticia, setSelectedNoticia] = useState<NewsItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (initialNoticias?.length) return

    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => {
        if (data.noticias) {
          setNoticias(data.noticias)
        }
      })
      .catch((err) => console.error('Error loading news:', err))
  }, [initialNoticias])

  const handleOpenNoticia = (noticia: NewsItem) => {
    setSelectedNoticia(noticia)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedNoticia(null), 300)
  }

  return (
    <section className="noticias-section section" id="noticias">
      <div className="container-lg">
        <div className="section-header">
          <div className="section-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8M15 18h-5M10 6h8v4h-8z"/></svg>
            Últimas Noticias y Eventos
          </div>
          <h2>Eventos y Comunicados Destacados</h2>
          <p className="section-description">
            Conoce las iniciativas más recientes, logros institucionales y eventos principales de la Regional 15. 
            Nos comprometemos en mantener a nuestra comunidad educativa informada sobre las actividades que transforman 
            la educación en nuestros seis distritos.
          </p>
          <div className="section-divider"></div>
        </div>

        {noticias.length > 0 ? (
          <div className="noticias-grid">
            {noticias.map((noticia) => (
              <NewsCard
                key={noticia.id}
                noticia={noticia}
                onClick={() => handleOpenNoticia(noticia)}
              />
            ))}
          </div>
        ) : (
          <div className="noticias-empty-state">
            <p>No hay noticias disponibles en este momento.</p>
          </div>
        )}

        <NewsModal
          noticia={selectedNoticia}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  )
}

export default NoticiasSection
