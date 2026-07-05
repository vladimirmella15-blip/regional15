'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

const slidesData = [
  {
    src: '/assets/img/hero_banner.png',
    title: 'Transformando la Educación en Santo Domingo',
    text: 'La Regional 15 del MINERD lidera la educación en 6 distritos del Gran Santo Domingo, con miles de estudiantes y docentes comprometidos con la calidad educativa.',
  },
  {
    src: '/assets/img/feria_pedagogica_2026_full.jpeg',
    title: '«Travesía del Arte, de Quisqueya a Francia»',
    text: 'La 3ra Gala Regional de Artes en el Palacio de Bellas Artes exhibió el talento estudiantil en música, danza, teatro y artes visuales.',
  },
  {
    src: '/assets/img/feria_pedagogica_2026.jpeg',
    title: 'Innovación Pedagógica en los 6 Distritos',
    text: 'La ExpoFeria 2026 promueve la innovación y el intercambio de buenas prácticas pedagógicas en toda la Regional 15.',
  },
  {
    src: '/assets/img/presidente_con_director.jpg',
    title: 'Presidente Luis Abinader junto al Director Eddy Chávez',
    text: 'El presidente de la República acompañó al director regional en la entrega de centros educativos en la provincia Santo Domingo.',
  },
  {
    src: '/assets/img/ministro_con_director.jpg',
    title: 'Ministro Luis Miguel De Camps y Director Eddy Chávez',
    text: 'Trabajando articuladamente por la calidad educativa en el Gran Santo Domingo.',
  },
  {
    src: '/assets/img/director_exponiendo.jpg',
    title: 'Eddy Chávez — Director Regional 15',
    text: 'Exponiendo los logros y avances de la gestión educativa en los 6 distritos del Gran Santo Domingo.',
  },
  {
    src: '/assets/img/Convenio.jpg',
    title: 'Alianzas Estratégicas para la Educación',
    text: 'La Regional 15 formaliza convenios para impulsar formación docente, tecnología educativa e inclusión.',
  },
  {
    src: '/assets/img/gala_regional.png',
    title: 'Gala Regional de Artes',
    text: 'Celebrando el talento artístico de los estudiantes en el Palacio de Bellas Artes.',
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null)
  const totalSlides = slidesData.length

  const goToSlide = useCallback((n: number) => {
    setCurrentSlide((n + totalSlides) % totalSlides)
  }, [totalSlides])

  const stopAuto = useCallback(() => {
    if (slideTimerRef.current) {
      clearInterval(slideTimerRef.current)
      slideTimerRef.current = null
    }
  }, [])

  const startAuto = useCallback(() => {
    stopAuto()
    slideTimerRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides)
    }, 6500)
  }, [totalSlides, stopAuto])

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
  }, [currentSlide])

  return (
    <section id="inicio" className="hero-dual" aria-label="Presentación principal">
      <div className="hero-dual-inner">
        {/* ── LEFT COLUMN: CONTENT ── */}
        <div className="hero-dual-left">
          <div className="hero-dual-content">
            <span className="hero-dual-badge">MINERD · República Dominicana</span>
            <h1 className="hero-dual-title">
              Regional 15 <span>Educación Santo Domingo</span>
            </h1>
            <p className="hero-dual-desc">
              La Regional 15 del Ministerio de Educación trabaja para garantizar una educación inclusiva, equitativa y de calidad en los 6 distritos del Gran Santo Domingo.
            </p>
            <div className="hero-dual-btns">
              <a href="#programas" className="hero-btn-primary">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                Ver Programas
              </a>
              <a href="/nosotros" className="hero-btn-secondary">
                Conócenos
              </a>
            </div>
            <div className="hero-dual-stats">
              <div className="hero-stat">
                <span className="hero-stat-num">6</span>
                <span className="hero-stat-label">Distritos</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-num">800+</span>
                <span className="hero-stat-label">Centros</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-num">300K+</span>
                <span className="hero-stat-label">Estudiantes</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-num">10K+</span>
                <span className="hero-stat-label">Docentes</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN: CAROUSEL ── */}
        <div className="hero-dual-right">
          <div className="hero-carousel-container">
            {slidesData.map((slide, idx) => (
              <div key={idx} className={`hero-carousel-slide${idx === currentSlide ? ' active' : ''}`}>
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 768px) 100vw, 55vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className="hero-carousel-overlay" />
                <div className="hero-carousel-text">
                  <h3>{slide.title}</h3>
                  <p>{slide.text}</p>
                </div>
              </div>
            ))}

            <button className="hero-carousel-arrow hero-carousel-prev" onClick={handlePrev} aria-label="Anterior">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /></svg>
            </button>
            <button className="hero-carousel-arrow hero-carousel-next" onClick={handleNext} aria-label="Siguiente">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
            </button>

            <div className="hero-carousel-dots">
              {slidesData.map((_, idx) => (
                <span
                  key={idx}
                  className={`hero-carousel-dot${idx === currentSlide ? ' active' : ''}`}
                  role="tab"
                  aria-label={`Slide ${idx + 1}`}
                  tabIndex={0}
                  onClick={() => { stopAuto(); goToSlide(idx); startAuto() }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
