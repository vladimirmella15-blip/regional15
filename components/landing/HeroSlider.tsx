// components/landing/HeroSlider.tsx
'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

const slidesData = [
  {
    src: '/assets/img/hero_banner.png',
    badge: 'Educación Santo Domingo · Regional 15',
    title: 'Transformando la Educación en Santo Domingo',
    text: 'La Regional 15 del MINERD lidera la educación en 6 distritos del Gran Santo Domingo, con 2,527 publicaciones documentando logros y actividades de nuestra comunidad educativa.',
    primaryBtn: { text: 'Ver Programas', href: '#programas' },
    secondaryBtn: { text: 'Conoce al Director', href: '/director' },
    priority: true
  },
  {
    src: '/assets/img/feria_pedagogica_2026_full.jpeg',
    badge: 'Gala Regional · Mayo 2026',
    title: '«Travesía del Arte, de Quisqueya a Francia»',
    text: 'La 3ra Gala Regional de Artes en el Palacio de Bellas Artes exhibió el talento de estudiantes de los 6 distritos en música, danza, teatro, artes visuales, cine y fotografía.',
    primaryBtn: { text: 'Ver Más', href: '#eventos' },
    secondaryBtn: { text: 'Ver en Instagram', href: 'https://www.instagram.com/regional_15minerd/', isInstagram: true }
  },
  {
    src: '/assets/img/feria_pedagogica_2026.jpeg',
    badge: 'ExpoFeria Pedagógica · 2026',
    title: 'Innovación Pedagógica en los 6 Distritos',
    text: 'La ExpoFeria 2026 es el espacio de encuentro académico que promueve la innovación, el intercambio de buenas prácticas y proyectos de investigación de aula en toda la Regional 15.',
    primaryBtn: { text: 'Nuestros Programas', href: '#programas' },
    secondaryBtn: { text: 'Últimas Noticias', href: '#noticias' }
  },
  {
    src: '/assets/img/feria_pedagogica_2026_full.jpeg',
    badge: 'Centros Educativos · 2025-2026',
    title: '1,443 Centros Educativos en 6 Distritos',
    text: 'La Regional 15 coordina la educación pública y privada en 6 distritos del Gran Santo Domingo: Los Alcarrizos, Santo Domingo Centro, Sur-Central, Noroeste, Herrera y Pedro Brand, con 1,443 centros educativos y más de 422,000 estudiantes bajo su jurisdicción.',
    primaryBtn: { text: 'Conoce la Regional', href: '#nosotros' },
    secondaryBtn: { text: 'Síguenos', href: 'https://www.instagram.com/regional_15minerd/', isInstagram: true }
  },
  {
    src: '/assets/img/presidente_con_director.jpg',
    badge: 'Presidente Abinader · 2025',
    title: 'Presidente Luis Abinader junto al director Eddy Chávez',
    text: 'El presidente de la República Dominicana, Luis Abinader, acompañado del director de la Regional 15, Eddy Chávez, en un acto de entrega de centros educativos en la provincia Santo Domingo.',
    primaryBtn: { text: 'Ver Galería', href: '#galeria' },
    secondaryBtn: { text: 'Presidencia RD', href: 'https://presidencia.gob.do' }
  },
  {
    src: '/assets/img/ministro_con_director.jpg',
    badge: 'Ministro de Educación · 2025',
    title: 'Ministro Luis Miguel De Camps y director Eddy Chávez',
    text: 'El ministro de Educación, Luis Miguel De Camps, junto al director de la Regional 15, Eddy Chávez, trabajando articuladamente por la calidad educativa en el Gran Santo Domingo.',
    primaryBtn: { text: 'Ver Galería', href: '#galeria' },
    secondaryBtn: { text: 'Portal MINERD', href: 'https://www.ministeriodeeducacion.gob.do' }
  },
  {
    src: '/assets/img/director_exponiendo.jpg',
    badge: 'Director Regional 15 · 2025',
    title: 'Eddy Chávez — Director de la Regional 15',
    text: 'El Lic. Eddy Chávez Placencio, M.A., director de la Regional de Educación 15, exponiendo los logros y avances de la gestión educativa en los 6 distritos del Gran Santo Domingo.',
    primaryBtn: { text: 'Sobre el Director', href: '/director' },
    secondaryBtn: { text: '@regional_15minerd', href: 'https://www.instagram.com/regional_15minerd/', isInstagram: true }
  },
  {
    src: '/assets/img/Convenio.jpg',
    badge: 'Convenio · 2025',
    title: 'Firma de convenios para fortalecer la educación',
    text: 'La Regional 15 formaliza alianzas estratégicas con instituciones educativas y gubernamentales para impulsar programas de formación docente, tecnología educativa e inclusión en los 6 distritos.',
    primaryBtn: { text: 'Nuestros Programas', href: '#programas' },
    secondaryBtn: { text: 'Galería de Fotos', href: '#galeria' }
  }
]

const formatImgSrc = (src: string) => {
  if (!src) return ''
  if (src.startsWith('/') || src.startsWith('http')) return src
  return '/' + src
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null)
  
  const totalSlides = slidesData.length // Cálculo totalmente dinámico

  const goToSlide = useCallback((n: number) => {
    const slides = document.querySelectorAll('.slide')
    const dots = document.querySelectorAll('.dot')
    if (!slides.length) return
    slides.forEach(s => s.classList.remove('active'))
    dots.forEach(d => d.classList.remove('active'))
    const next = (n + totalSlides) % totalSlides
    setCurrentSlide(next)
    slides[next]?.classList.add('active')
    dots[next]?.classList.add('active')
    
    slides[next]?.querySelectorAll('.slide-badge, .slide-content h1, .slide-content p, .slide-btns').forEach(el => {
      const e = el as HTMLElement
      e.style.animation = 'none'
      void e.offsetHeight
      e.style.animation = ''
    })
  }, [totalSlides])

  const stopAuto = useCallback(() => {
    if (slideTimerRef.current) {
      clearInterval(slideTimerRef.current)
      slideTimerRef.current = null
    }
  }, [])

  const startAuto = useCallback(() => {
    stopAuto()
    if (totalSlides > 1) {
      slideTimerRef.current = setInterval(() => goToSlide(currentSlide + 1), 6500)
    }
  }, [goToSlide, currentSlide, totalSlides, stopAuto])

  const handlePrev = () => {
    stopAuto()
    goToSlide(currentSlide - 1)
    startAuto()
  }

  const handleNext = () => {
    stopAuto()
    goToSlide(currentSlide + 1)
    startAuto()
  }

  const handleDotClick = (i: number) => {
    stopAuto()
    goToSlide(i)
    startAuto()
  }

  useEffect(() => {
    startAuto()
    return () => stopAuto()
  }, [startAuto, stopAuto])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [currentSlide, startAuto, stopAuto, goToSlide])

  return (
    <section id="inicio" className="hero-slider" aria-label="Presentación principal">
      {slidesData.map((slide, idx) => (
        <div key={idx} className={`slide${idx === currentSlide ? ' active' : ''}`}>
          <Image
            src={formatImgSrc(slide.src)}
            alt={slide.title}
            fill
            priority={slide.priority || false}
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="slide-overlay"></div>
          <div className="slide-content">
            <div className="slide-content-bg"></div>
            <div className="slide-content-inner">
            <span className="slide-badge">{slide.badge}</span>
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
            <div className="slide-btns">
              <a href={slide.primaryBtn.href} className="btn-primary-hero">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {slide.primaryBtn.text}
              </a>
              <a
                href={slide.secondaryBtn.href}
                target={slide.secondaryBtn.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="btn-outline-hero"
                style={slide.secondaryBtn.isInstagram ? { display: 'inline-flex', alignItems: 'center', gap: '6px' } : undefined}
              >
                {slide.secondaryBtn.isInstagram && (
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" style={{ display: 'inline-block' }}>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="currentColor" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" />
                  </svg>
                )}
                {slide.secondaryBtn.text}
              </a>
            </div>
          </div>
          </div>
          </div>
      ))}

      <button className="slider-arrow prev" onClick={handlePrev} aria-label="Diapositiva anterior">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /></svg>
      </button>
      <button className="slider-arrow next" onClick={handleNext} aria-label="Siguiente diapositiva">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
      </button>
      <div className="slider-controls" role="tablist" aria-label="Controles del slider">
        {slidesData.map((_, idx) => (
          <span
            key={idx}
            className={`dot${idx === currentSlide ? ' active' : ''}`}
            role="tab"
            aria-label={`Diapositiva ${idx + 1}`}
            tabIndex={0}
            onClick={() => handleDotClick(idx)}
          ></span>
        ))}
      </div>
    </section>
  )
}
