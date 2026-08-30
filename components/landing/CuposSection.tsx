'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface CuposVideoContent {
  badge: string
  titulo: string
  subtitulo: string
  parrafos: { pre: string; strong: string; pos: string }[]
  destacadoTitulo: string
  destacadoTexto: string
  garantias: string[]
  cierre: string
  lema: string
}

interface CuposVideo {
  id: string
  src: string
  content: CuposVideoContent
}

const cuposVideos: CuposVideo[] = [
  {
    id: 'cupos-vid-1',
    src: '/assets/videos/video-ano-escolar-2026.mp4',
    content: {
      badge: 'CUPOS ESCOLARES 2026',
      titulo: '¡En la Regional 15 hay cupos para todos!',
      subtitulo: 'Ningún estudiante se queda fuera.',
      parrafos: [
        {
          pre: 'Por mandato de nuestro ',
          strong: 'Sr. Presidente de la República, Luis Abinader Corona',
          pos: ', y bajo las orientaciones de nuestro ',
        },
        {
          pre: '',
          strong: 'Sr. Ministro de Educación, Luis Miguel De Camps',
          pos: ', en la ',
        },
        {
          pre: '',
          strong: 'Regional 15 reafirmamos nuestro compromiso de garantizar el derecho a la educación de todos nuestros estudiantes.',
          pos: '',
        },
      ],
      destacadoTitulo: '¡Hay cupos para todos!',
      destacadoTexto:
        'Cada estudiante tiene un lugar en nuestras aulas. Estamos preparados para recibir, acompañar y garantizar el acceso a una educación de calidad.',
      garantias: [
        'La educación es un derecho',
        'El acceso está garantizado',
        '¡Hay cupos para todos!',
      ],
      cierre: 'REGIONAL 15 | MINISTERIO DE EDUCACIÓN',
      lema: '¡Todos somos Regional 15!',
    },
  },
  {
    id: 'cupos-vid-2',
    src: '/assets/videos/primera-semana-de-clase.mp4',
    content: {
      badge: 'PRIMERA SEMANA DE CLASE',
      titulo: '¡Una semana llena de éxitos en el inicio del año escolar 2026-2027!',
      subtitulo: 'Estudiantes, docentes y comunidad unidos con gran motivación y esperanza.',
      parrafos: [
        {
          pre: 'En la ',
          strong: 'Regional 15 de Educación',
          pos: ' cerramos una semana llena de alegría, entusiasmo y grandes expectativas, acompañando a nuestra comunidad educativa en el arranque del nuevo año escolar.',
        },
        {
          pre: '',
          strong: 'Estudiantes, docentes, familias y autoridades',
          pos: ' se integraron masivamente en cada centro educativo, reafirmando el compromiso de trabajar juntos por una educación de calidad.',
        },
        {
          pre: '',
          strong: 'Seguimos avanzando, porque estamos más listos que nunca.',
          pos: '',
        },
      ],
      destacadoTitulo: 'Una gestión de éxito',
      destacadoTexto:
        'Tuvimos un año exitoso donde masivamente los estudiantes, docentes y la comunidad se integraron con gran motivación y esperanza, consolidando el crecimiento y la calidad educativa.',
      garantias: [
        'Gran integración de la comunidad',
        'Motivación y esperanza en las aulas',
        'Más listos que nunca',
      ],
      cierre: 'REGIONAL 15 | MINISTERIO DE EDUCACIÓN',
      lema: '¡Juntos por una educación de calidad!',
    },
  },
]

export default function CuposSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const readyRef = useRef(false)
  const activeVideo = cuposVideos[activeIndex]
  const activeContent = activeVideo.content

  const playActive = () => {
    // Pausa y silencia TODOS los videos (incluidos los anteriores) para que
    // solo se escuche y reproduzca el slide activo.
    videoRefs.current.forEach((v, i) => {
      if (!v) return
      v.pause()
      if (i !== activeIndex) {
        v.muted = true
        v.currentTime = 0
      }
    })

    const video = videoRefs.current[activeIndex]
    if (!video) return
    if (readyRef.current) {
      video.muted = false
      video.play().catch(() => {})
    } else {
      video.muted = true
      video.play()
        .then(() => {
          readyRef.current = true
          video.muted = false
        })
        .catch(() => {
          video.muted = true
          video.play().catch(() => {})
        })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) playActive()
        })
      },
      { threshold: 0.4 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    const handleFirstInteraction = () => {
      readyRef.current = true
      playActive()
    }
    window.addEventListener('pointerdown', handleFirstInteraction, { once: true })
    window.addEventListener('keydown', handleFirstInteraction, { once: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('pointerdown', handleFirstInteraction)
      window.removeEventListener('keydown', handleFirstInteraction)
    }
  }, [activeIndex])

  const goTo = (index: number) => {
    const next = (index + cuposVideos.length) % cuposVideos.length
    setActiveIndex(next)
  }

  const setRef = (index: number) => (el: HTMLVideoElement | null) => {
    videoRefs.current[index] = el
  }

  return (
    <section id="cupos" ref={sectionRef} className="cupos-section" aria-label="Cupos escolares Regional 15">
      <div className="container">
        <div className="cupos-inner">
          <div className="cupos-media">
            <div className="cupos-video-wrap animate-on-scroll">
              <div className="cupos-video-slider">
                {cuposVideos.map((video, i) => (
                  <div
                    key={video.id}
                    className={`cupos-slide ${i === activeIndex ? 'active' : ''}`}
                    aria-hidden={i !== activeIndex}
                  >
                    <video
                      ref={setRef(i)}
                      src={video.src}
                      className="cupos-video"
                      playsInline
                      loop
                      controls
                      preload="auto"
                      aria-label={video.content.titulo}
                    />
                  </div>
                ))}

                <button
                  type="button"
                  className="cupos-slider-arrow cupos-prev"
                  onClick={() => goTo(activeIndex - 1)}
                  aria-label="Video anterior"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="cupos-slider-arrow cupos-next"
                  onClick={() => goTo(activeIndex + 1)}
                  aria-label="Video siguiente"
                >
                  ›
                </button>

                <div className="cupos-slider-dots" role="tablist" aria-label="Videos">
                  {cuposVideos.map((video, i) => (
                    <button
                      key={video.id}
                      type="button"
                      className={`cupos-dot ${i === activeIndex ? 'active' : ''}`}
                      onClick={() => goTo(i)}
                      aria-label={`Ver video: ${video.content.titulo}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="cupos-collage">
              <div className="cupos-photo-main animate-on-scroll">
                <Image
                  src="/assets/img/cupos.png"
                  alt="Cupos escolares disponibles en la Regional 15"
                  width={700}
                  height={460}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  style={{ objectFit: 'cover' }}
                  className="cupos-img"
                />
              </div>
              <div className="cupos-photo-sec animate-on-scroll">
                <Image
                  src="/assets/img/cupo2.png"
                  alt="Estudiantes de la Regional 15 asegurados con su cupo escolar"
                  width={480}
                  height={340}
                  sizes="(max-width: 768px) 100vw, 28vw"
                  style={{ objectFit: 'cover' }}
                  className="cupos-img"
                />
              </div>
            </div>
          </div>

          <div className="cupos-content">
            <span className="cupos-badge">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
              {activeContent.badge}
            </span>
            <h2 className="cupos-title">{activeContent.titulo}</h2>
            <p className="cupos-subtitle">{activeContent.subtitulo}</p>

            {activeContent.parrafos.map((parrafo, idx) => (
              <p key={idx} className="cupos-parrafo">
                {parrafo.pre}
                <strong>{parrafo.strong}</strong>
                {parrafo.pos}
              </p>
            ))}

            <div className="cupos-destacado">
              <div className="cupos-destacado-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              </div>
              <div>
                <strong className="cupos-destacado-title">{activeContent.destacadoTitulo}</strong>
                <p className="cupos-destacado-text">
                  {activeContent.destacadoTexto}
                </p>
              </div>
            </div>

            <div className="cupos-garantias">
              {activeContent.garantias.map((garantia, idx) => (
                <div key={idx} className="cupos-garantia">
                  <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  {garantia}
                </div>
              ))}
            </div>

            <div className="cupos-cierre">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <strong>{activeContent.cierre}</strong>
            </div>
            <div className="cupos-lema">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              {activeContent.lema}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
