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
                src="/assets/videos/Incripcion.mp4"
                className="cupos-video"
                playsInline
                loop
                controls
                preload="auto"
                aria-label="Video de inscripciones escolares Regional 15"
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
            <span className="cupos-badge">🎓 CUPOS ESCOLARES 2026</span>
            <h2 className="cupos-title">¡Garantizando el derecho a la educación!</h2>
            <p className="cupos-parrafo">
              <strong>En la Regional 15 tenemos cupos para todos nuestros estudiantes.</strong>
            </p>
            <p className="cupos-parrafo">
              Ningún estudiante se quedará fuera. <strong>Hay espacio para todos y estamos preparados para recibirlos.</strong>
            </p>
            <p className="cupos-parrafo">
              Nuestro compromiso es garantizar el acceso a la educación y brindar oportunidades para cada estudiante de nuestra comunidad educativa.
            </p>
            <div className="cupos-cierre">
              📍 <strong>Regional 15:</strong> trabajando unidos por una educación de calidad para todos.
            </div>
            <div className="cupos-lema">
              ¡En la Regional 15 tenemos cupo garantizado para todos!
              ¡Todos somos Regional 15!
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
