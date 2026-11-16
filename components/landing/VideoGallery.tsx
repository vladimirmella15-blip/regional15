// components/landing/VideoGallery.tsx
'use client'

import React, { useEffect, useRef, useState } from 'react'
import { videos, type VideoItem } from '@/data/videos'
import { esReciente, formatearFechaItem, ordenarPorFecha } from '@/lib/galeria'

// La lista se ordena una sola vez: lo más reciente primero.
const videosList = ordenarPorFecha(videos)

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<VideoItem>(videosList[0])
  const videoPlayerRef = useRef<HTMLVideoElement>(null)
  const primeraCarga = useRef(true)

  const handleSelectVideo = (video: VideoItem) => {
    setActiveVideo(video)
  }

  useEffect(() => {
    if (primeraCarga.current) {
      primeraCarga.current = false
      return
    }
    const player = videoPlayerRef.current
    if (!player) return
    player.load()
    player.play().catch(() => {
      // El navegador puede bloquear la reproducción automática. El póster y
      // los controles siguen disponibles para que la persona pulse play.
    })
  }, [activeVideo.src])

  const fechaActiva = formatearFechaItem(activeVideo)
  const fechaUltima = formatearFechaItem(videosList[0])
  const esVertical = activeVideo.orientacion === 'vertical'

  return (
    <section id="videos" className="section video-gallery-section" aria-label="Videos de la Comunidad Educativa">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M23 7a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7z"/>
              <polygon points="10 11 10 15 14 13 10 11"/>
            </svg>
            Multimedia
          </span>
          <h2>Momentos en Video de la Regional 15</h2>
          <p>
            Los videos más recientes aparecen primero. {videosList.length} videos disponibles
            {fechaUltima ? ` · última actualización: ${fechaUltima}` : ''}.
          </p>
          <div className="section-divider"></div>
        </div>

        <div className="video-player-container animate-on-scroll">
          {/* Reproductor Principal */}
          <div className="main-video-player">
            <div className={`video-wrapper${esVertical ? ' video-wrapper--vertical' : ''}`}>
              <video
                key={activeVideo.src}
                ref={videoPlayerRef}
                controls
                playsInline
                preload="metadata"
                poster={activeVideo.poster || '/assets/img/hero_banner.png'}
              >
                <source src={activeVideo.src} type="video/mp4" />
                Tu navegador no soporta reproducción de videos HTML5.
              </video>
              <div className="video-live-label">
                <span className="video-live-dot" />
                Lo más reciente
              </div>
            </div>
            <div className="video-info-box">
              <div className="video-info-topline">
                <h3>{activeVideo.titulo}</h3>
                {fechaActiva && <span className="video-date-pill">{fechaActiva}</span>}
              </div>
              <p>{activeVideo.descripcion}</p>
            </div>
          </div>

          {/* Playlist Lateral */}
          <div className="video-playlist-panel">
            <div className="playlist-header">
              <span>Lista de Videos</span>
              <span className="playlist-count">{videosList.length} Videos</span>
            </div>
            {videosList.map((video, index) => {
              const nueva = esReciente(video)
              const fecha = formatearFechaItem(video)
              return (
                <div
                  key={video.id}
                  className={`playlist-item-card ${activeVideo.id === video.id ? 'active' : ''}`}
                  onClick={() => handleSelectVideo(video)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleSelectVideo(video)}
                >
                  <div
                    className="playlist-thumb-wrapper"
                    style={video.poster ? {
                      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.28)), url(${video.poster})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    } : undefined}
                  >
                    <svg className="thumb-play-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    {index === 0 && <span className="playlist-thumb-badge">Nuevo</span>}
                  </div>
                  <div className="playlist-item-info">
                    <span className="playlist-item-title">{video.titulo}</span>
                    <span className="playlist-item-desc">{video.descripcion}</span>
                    <span className="playlist-item-meta">
                      {fecha && <span>{fecha}</span>}
                      {nueva && <span className="playlist-new">Nuevo</span>}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
