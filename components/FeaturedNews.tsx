'use client'

import React from 'react'
import Image from 'next/image'
import { useTilt } from '@/hooks/useTilt'

interface NewsItem {
  id: string
  titulo: string
  fecha: string
  categoria: string
  descripcion: string
  contenido_completo: string
  imagen: string
  enlace: string
  texto_enlace: string
}

interface FeaturedNewsProps {
  noticias?: NewsItem[]
}

const formatImgSrc = (src: string) => {
  if (!src) return ''
  if (src.startsWith('/') || src.startsWith('http')) return src
  return '/' + src
}

function NewsCard({ item, index }: { item: NewsItem; index: number }) {
  const tiltRef = useTilt<HTMLAnchorElement>(5)
  const imgSrc = formatImgSrc(item.imagen)

  return (
    <a
      ref={tiltRef}
      key={item.id}
      href="/noticias"
      className="featured-news-card animate-on-scroll"
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      {imgSrc && (
        <div className="featured-news-card-img">
          <Image
            src={imgSrc}
            alt={item.titulo}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: 'cover' }}
            className="featured-news-card-img-el"
          />
          <div className="featured-news-card-img-overlay" />
        </div>
      )}
      <div className="featured-news-card-body">
        {item.categoria && <span className="featured-news-card-tag">{item.categoria}</span>}
        <h3>{item.titulo}</h3>
        <p>{item.descripcion}</p>
      </div>
    </a>
  )
}

export default function FeaturedNews({ noticias }: FeaturedNewsProps) {
  if (!noticias || noticias.length === 0) return null
  const featured = noticias.slice(0, 3)

  return (
    <section className="section featured-news-section animate-on-scroll" id="noticias">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">📰 NOTICIAS DESTACADAS</span>
          <h2>Últimas Noticias</h2>
          <p>Mantente al día con los acontecimientos más importantes de la Regional 15.</p>
          <div className="section-divider" />
        </div>
        <div className="featured-news-grid">
          {featured.map((item, i) => (
            <NewsCard key={item.id} item={item} index={i} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <a href="/noticias" className="hero-btn-primary" style={{ display: 'inline-flex' }}>
            Ver todas las noticias
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" /></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
