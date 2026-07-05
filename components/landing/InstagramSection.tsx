// components/landing/InstagramSection.tsx
'use client'

import React from 'react'
import Image from 'next/image'

interface InstagramSectionProps {
  instaError: boolean
  instagramPosts: any[]
  noticias?: any[]
}

const formatImgSrc = (src: string) => {
  if (!src) return ''
  if (src.startsWith('/') || src.startsWith('http')) return src
  return '/' + src
}

export default function InstagramSection({
  instaError,
  instagramPosts,
  noticias = [],
}: InstagramSectionProps) {
  return (
    <section id="instagram" className="section news-section" role="region" aria-label="Publicaciones de Instagram">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M16 8h2m-2 4h2M6 8h6v8H6z"/></svg>
            Lo Más Reciente
          </span>
          <h2>Instagram — @regional_15minerd</h2>
          <p>Últimas publicaciones de nuestra cuenta oficial de Instagram. Síguenos en <a href="https://www.instagram.com/regional_15minerd/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--red)', fontWeight: 700 }}>@regional_15minerd</a> para mantenerte al día.</p>
          <div className="section-divider"></div>
        </div>

        {instaError ? (
          <div className="news-grid">
            {noticias.slice(0, 3).map((item: any, i: number) => (
              <article className={`news-card ${i === 0 ? 'news-featured' : ''} animate-on-scroll`} key={item.id}>
                <div className="card-img" style={{ position: 'relative', height: '220px' }}>
                  <Image
                    src={formatImgSrc(item.imagen)}
                    alt={item.titulo}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                  />
                  <span className="card-category">{item.categoria}</span>
                </div>
                <div className="card-body">
                  <div className="card-date">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" /></svg>
                    {item.fecha}
                  </div>
                  <h3>{item.titulo}</h3>
                  <p>{item.descripcion}</p>
                  <a href={item.enlace} target="_blank" rel="noopener noreferrer" className="card-link">{item.texto_enlace} <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" /></svg></a>
                </div>
              </article>
            ))}
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: 24, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <p>Instagram no está disponible en este momento.{' '}
                <a href="https://www.instagram.com/regional_15minerd/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--red)', fontWeight: 700 }}>Visítanos en Instagram ›</a>
              </p>
            </div>
          </div>
        ) : (
          <div className="news-grid">
            {instagramPosts.map((post: any, i: number) => (
              <a href={post.url} target="_blank" rel="noopener noreferrer" className={`news-card ${i === 0 ? 'news-featured' : ''} animate-on-scroll`} key={post.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card-img" style={{ position: 'relative', height: '220px' }}>
                  {post.src ? (
                    <Image
                      src={formatImgSrc(post.src)}
                      alt={post.caption || 'Publicación de Instagram'}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      loading="lazy"
                    />
                  ) : (
                    <div style={{ background: 'var(--blue-dark)', width: '100%', height: '100%' }}></div>
                  )}
                  <span className="card-category" style={{ background: 'linear-gradient(135deg,#e1306c,#f77737)', display: 'inline-flex', alignItems: 'center', gap: '6px', zIndex: 2 }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style={{ display: 'inline-block' }}><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="currentColor" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" /></svg>
                    Instagram
                  </span>
                </div>
                <div className="card-body">
                  <div className="card-date" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="white" /></svg>
                    <span style={{ color: '#e1306c', fontWeight: 600, fontSize: '0.75rem' }}>@{'regional_15minerd'}</span>
                    <span style={{ marginLeft: 'auto', fontSize: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      {post.likes != null ? post.likes : ''}
                      {post.likes != null ? (
                        <svg viewBox="0 0 24 24" fill="#e1306c" width="12" height="12" style={{ display: 'inline-block' }}><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                      ) : ''}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {post.caption || 'Sin descripción'}
                  </p>
                  <span className="card-link" style={{ fontSize: '0.8rem' }}>
                    Ver en Instagram <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" /></svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: 28 }}>
          <a href="https://www.instagram.com/regional_15minerd/" target="_blank" rel="noopener noreferrer" className="btn-main" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="var(--bg)" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="var(--bg)" strokeWidth="2" /></svg>
            Ver todas las publicaciones en Instagram
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" /></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
