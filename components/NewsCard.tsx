'use client'

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

interface NewsCardProps {
  noticia: NewsItem
  onClick: () => void
}

const formatImgSrc = (src: string) => {
  if (!src) return ''
  if (src.startsWith('/') || src.startsWith('http')) return src
  return '/' + src
}

export default function NewsCard({ noticia, onClick }: NewsCardProps) {
  const imgSrc = formatImgSrc(noticia.imagen)

  return (
    <div className="news-card-v3" onClick={onClick}>
      {imgSrc && (
        <div className="news-card-v3-image">
          <Image
            src={imgSrc}
            alt={noticia.titulo}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
      <div className="news-card-v3-body">
        {noticia.categoria && <span className="news-card-v3-tag">{noticia.categoria}</span>}
        <h3 className="news-card-v3-title">{noticia.titulo}</h3>
        <p className="news-card-v3-desc" dangerouslySetInnerHTML={{ __html: noticia.descripcion }} />
        <div className="news-card-v3-footer">
          <div className="news-card-v3-meta">
            {noticia.galeria && noticia.galeria.length > 0 && (
              <span className="news-card-v3-gallery">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" style={{ verticalAlign: 'middle' }}><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                {noticia.galeria.length}
              </span>
            )}
          </div>
          <div className="news-card-v3-actions">
            <span className="news-card-v3-link">Leer más</span>
            <ShareButton title={noticia.titulo} text={noticia.descripcion} />
          </div>
        </div>
      </div>
    </div>
  )
}
