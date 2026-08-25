'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function CuposSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const playedRef = useRef(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const tryPlay = () => {
      if (playedRef.current) return
      video.muted = true
      video.play()
        .then(() => {
          playedRef.current = true
          video.muted = false
        })
        .catch(() => {
          video.muted = true
          video.play().catch(() => {})
        })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) tryPlay()
        })
      },
      { threshold: 0.4 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    const handleFirstInteraction = () => tryPlay()
    window.addEventListener('pointerdown', handleFirstInteraction, { once: true })
    window.addEventListener('keydown', handleFirstInteraction, { once: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('pointerdown', handleFirstInteraction)
      window.removeEventListener('keydown', handleFirstInteraction)
    }
  }, [])

  return (
    <section id="cupos" ref={sectionRef} className="cupos-section" aria-label="Cupos escolares Regional 15">
      <div className="container">
        <div className="cupos-inner">
          <div className="cupos-media">
            <div className="cupos-video-wrap animate-on-scroll">
              <video
                ref={videoRef}
                src="/assets/videos/video-ano-escolar-2026.mp4"
                className="cupos-video"
                playsInline
                loop
                controls
                preload="auto"
                aria-label="Video del año escolar 2026-2027 de la Regional 15"
              />
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
