'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface CuposVideo {
  id: string
  src: string
  titulo: string
  descripcion: string
}

const cuposVideos: CuposVideo[] = [
  {
    id: 'cupos-vid-1',
    src: '/assets/videos/video-ano-escolar-2026.mp4',
    titulo: 'Mensaje del Director: ¡Ningún estudiante se queda fuera!',
    descripcion: 'El director regional de la Regional 15 de Educación, Eddy Chávez Placencio, reafirma que hay cupos para todos y garantiza la matrícula escolar de cada estudiante en el Año Escolar 2026-2027.'
  },
  {
    id: 'cupos-vid-2',
    src: '/assets/videos/primera-semana-de-clase.mp4',
    titulo: 'Primera semana de clase',
    descripcion: '¡Una semana llena de éxitos en el inicio del año escolar 2026-2027!\n\nEn la Regional 15 de Educación cerramos una semana llena de alegría, entusiasmo y grandes expectativas, acompañando a nuestra comunidad educativa en el arranque del nuevo año escolar.\n\nEstudiantes, docentes, familias y autoridades se unieron en cada centro educativo para dar la bienvenida a un período lleno de nuevos aprendizajes, oportunidades y retos, reafirmando que el estudiante es el centro de todas nuestras acciones.\n\nDurante toda la semana, la Regional 15 estuvo presente en los centros educativos de nuestros seis distritos, fortaleciendo el trabajo articulado en favor de una educación de calidad, inclusiva y con visión de futuro.\n\n🚀 Seguimos avanzando, porque estamos más listos que nunca. ¡Todos somos Regional 15!'
  }
]

export default function CuposSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const readyRef = useRef(false)
  const activeVideo = cuposVideos[activeIndex]

  const playActive = () => {
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
                      aria-label={video.titulo}
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
                      aria-label={`Ver video: ${video.titulo}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="cupos-video-caption">
              <div className="cupos-video-caption-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
              </div>
              <div>
                <span className="cupos-caption-title">{activeVideo.titulo}</span>
                <p className="cupos-caption-desc">{activeVideo.descripcion}</p>
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
              CUPOS ESCOLARES 2026
            </span>
            <h2 className="cupos-title">¡En la Regional 15 hay cupos para todos!</h2>
            <p className="cupos-subtitle">Ningún estudiante se queda fuera.</p>
            <p className="cupos-parrafo">
              Por mandato de nuestro <strong>Sr. Presidente de la República, Luis Abinader Corona</strong>, y bajo las orientaciones de nuestro <strong>Sr. Ministro de Educación, Luis Miguel De Camps</strong>, en la <strong>Regional 15 reafirmamos nuestro compromiso de garantizar el derecho a la educación de todos nuestros estudiantes.</strong>
            </p>

            <div className="cupos-destacado">
              <div className="cupos-destacado-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              </div>
              <div>
                <strong className="cupos-destacado-title">¡Hay cupos para todos!</strong>
                <p className="cupos-destacado-text">
                  Cada estudiante tiene un lugar en nuestras aulas. Estamos preparados para recibir, acompañar y garantizar el acceso a una educación de calidad.
                </p>
              </div>
            </div>

            <p className="cupos-parrafo">
              Nuestro compromiso es trabajar para que <strong>ningún niño, niña, adolescente o joven quede fuera del sistema educativo</strong>.
            </p>

            <div className="cupos-garantias">
              <div className="cupos-garantia">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                La educación es un derecho
              </div>
              <div className="cupos-garantia">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                El acceso está garantizado
              </div>
              <div className="cupos-garantia">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                ¡Hay cupos para todos!
              </div>
            </div>

            <div className="cupos-cierre">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <strong>REGIONAL 15 | MINISTERIO DE EDUCACIÓN</strong>
            </div>
            <div className="cupos-lema">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              ¡Todos somos Regional 15!
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
