// components/landing/VideoGallery.tsx
'use client'

import React, { useState, useRef, useEffect } from 'react'

interface VideoItem {
  id: string
  src: string
  titulo: string
  descripcion: string
}

const videosList: VideoItem[] = [
  {
    id: 'vid-1',
    src: '/assets/videos/BAILE MERENGUE .mp4',
    titulo: 'Gala de Artes: Presentación de Baile de Merengue',
    descripcion: 'Estudiantes de los distritos escolares rinden homenaje a nuestra música autóctona con una vibrante presentación de merengue en el Palacio de Bellas Artes.'
  },
  {
    id: 'vid-2',
    src: '/assets/videos/C0014.mp4',
    titulo: 'Gala de Artes: Presentación Artística Principal',
    descripcion: 'Espectacular muestra de talento, sincronización y coreografía contemporánea en el escenario de Bellas Artes, celebrando la tercera edición de la gala.'
  },
  {
    id: 'vid-3',
    src: '/assets/videos/C8471.mp4',
    titulo: 'Exhibición de Bandas Musicales Escolares',
    descripcion: 'Las bandas de música de los distritos educativos de la Regional 15 muestran su destreza rítmica y coordinación en vivo.'
  },
  {
    id: 'vid-4',
    src: '/assets/videos/CAD.mp4',
    titulo: 'Discurso de Apertura y Palabras de Bienvenida',
    descripcion: 'El Director Regional, Lic. Eddy Chávez Placencio, se dirige a la comunidad educativa, destacando los logros y el esfuerzo de cada distrito.'
  },
  {
    id: 'vid-5',
    src: '/assets/videos/DANZA MB.mp4',
    titulo: 'Danza Folclórica Dominicana en Escena',
    descripcion: 'Una puesta en escena llena de color, ritmo y tradición dominicana, interpretada con orgullo por el cuerpo de danza estudiantil.'
  },
  {
    id: 'vid-6',
    src: '/assets/videos/DESFILE VID.mp4',
    titulo: 'Desfile Oficial de las Delegaciones',
    descripcion: 'Las delegaciones escolares de los 6 distritos educativos marchan orgullosamente durante la inauguración formal del encuentro regional.'
  },
  {
    id: 'vid-7',
    src: '/assets/videos/banda de canto 1.mp4',
    titulo: 'Presentación Coral Estudiantil',
    descripcion: 'El coro integrado por talentos de diversos centros educativos de la Regional 15 deleita a la audiencia con hermosas armonías vocales.'
  },
  {
    id: 'vid-8',
    src: '/assets/videos/catolica vid.mp4',
    titulo: 'Muestra Artística de Centros Parroquiales',
    descripcion: 'Presentación especial que resalta el arte, los valores y la formación integral de los estudiantes de los centros educativos parroquiales y católicos.'
  }
]

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<VideoItem>(videosList[0])
  const videoPlayerRef = useRef<HTMLVideoElement>(null)

  const handleSelectVideo = (video: VideoItem) => {
    setActiveVideo(video)
    if (videoPlayerRef.current) {
      videoPlayerRef.current.load()
      videoPlayerRef.current.play().catch(err => {
        console.log("Auto-play blocked by browser policy:", err.message)
      })
    }
  }

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
          <h2>Momentos en Video — Regional 15</h2>
          <p>Disfruta de las memorias, desfiles, danzas y el talento artístico y coral de nuestra comunidad educativa.</p>
          <div className="section-divider"></div>
        </div>

        <div className="video-player-container animate-on-scroll">
          {/* Reproductor Principal */}
          <div className="main-video-player">
            <div className="video-wrapper">
              <video
                ref={videoPlayerRef}
                controls
                preload="metadata"
                poster="/assets/img/hero_banner.png"
              >
                <source src={activeVideo.src} type="video/mp4" />
                Tu navegador no soporta reproducción de videos HTML5.
              </video>
            </div>
            <div className="video-info-box">
              <h3>{activeVideo.titulo}</h3>
              <p>{activeVideo.descripcion}</p>
            </div>
          </div>

          {/* Playlist Lateral */}
          <div className="video-playlist-panel">
            <div className="playlist-header">
              <span>Lista de Videos</span>
              <span className="playlist-count">{videosList.length} Videos</span>
            </div>
            {videosList.map((video) => (
              <div
                key={video.id}
                className={`playlist-item-card ${activeVideo.id === video.id ? 'active' : ''}`}
                onClick={() => handleSelectVideo(video)}
              >
                <div className="playlist-thumb-wrapper">
                  <svg className="thumb-play-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="playlist-item-info">
                  <span className="playlist-item-title">{video.titulo}</span>
                  <span className="playlist-item-desc">{video.descripcion}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
