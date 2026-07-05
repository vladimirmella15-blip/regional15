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

function formatDate(fecha: string) {
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
  try {
    const d = new Date(fecha)
    return { day: d.getDate(), month: months[d.getMonth()], year: d.getFullYear() }
  } catch {
    const parts = fecha.split(/[-/]/)
    if (parts.length >= 3) {
      return { day: parseInt(parts[2]) || 0, month: months[(parseInt(parts[1]) - 1) % 12] || '', year: parseInt(parts[0]) || 0 }
    }
    return { day: 0, month: '', year: 0 }
  }
}

export default function NewsCard({ noticia, onClick }: NewsCardProps) {
  const imgSrc = formatImgSrc(noticia.imagen)
  const { day, month, year } = formatDate(noticia.fecha)

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
          <div className="news-card-v3-date-overlay">
            <span className="news-card-v3-day">{String(day).padStart(2, '0')}</span>
            <span className="news-card-v3-month">{month}</span>
          </div>
        </div>
      )}
      <div className="news-card-v3-body">
        {noticia.categoria && <span className="news-card-v3-tag">{noticia.categoria}</span>}
        <h3 className="news-card-v3-title">{noticia.titulo}</h3>
        <p className="news-card-v3-desc" dangerouslySetInnerHTML={{ __html: noticia.descripcion }} />
        <div className="news-card-v3-footer">
          <div className="news-card-v3-meta">
            <span className="news-card-v3-year">{year}</span>
            {noticia.galeria && noticia.galeria.length > 0 && (
              <span className="news-card-v3-gallery">📸 {noticia.galeria.length}</span>
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
