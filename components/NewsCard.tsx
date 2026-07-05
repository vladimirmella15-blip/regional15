// components/NewsCard.tsx
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
    <div className="noticia-card" onClick={onClick}>
      <div className="noticia-image">
        <Image
          src={imgSrc}
          alt={noticia.titulo}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
        <span className="noticia-badge">{noticia.categoria}</span>
      </div>
      <div className="noticia-content">
        <div className="noticia-fecha">{noticia.fecha}</div>
        <h3>{noticia.titulo}</h3>
        <p>{noticia.descripcion}</p>
        <div className="noticia-footer">
          <span className="noticia-btn">Leer más →</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto' }}>
            {noticia.galeria && noticia.galeria.length > 0 && (
              <span className="gallery-indicator">📸 {noticia.galeria.length} fotos</span>
            )}
            <ShareButton title={noticia.titulo} text={noticia.descripcion} />
          </div>
        </div>
      </div>
    </div>
  )
}
