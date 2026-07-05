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
  const { day, month } = formatDate(noticia.fecha)

  return (
    <div className="news-card-v2" onClick={onClick}>
      <div className="news-card-v2-date">
        <span className="news-card-v2-day">{day}</span>
        <span className="news-card-v2-month">{month}</span>
      </div>
      <div className="news-card-v2-body">
        {noticia.categoria && <span className="news-card-v2-tag">{noticia.categoria}</span>}
        <h3>{noticia.titulo}</h3>
        <p>{noticia.descripcion}</p>
        <div className="news-card-v2-footer">
          <span className="news-card-v2-link">Leer más →</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto' }}>
            {noticia.galeria && noticia.galeria.length > 0 && (
              <span className="gallery-indicator">📸 {noticia.galeria.length}</span>
            )}
            <ShareButton title={noticia.titulo} text={noticia.descripcion} />
          </div>
        </div>
      </div>
    </div>
  )
}
