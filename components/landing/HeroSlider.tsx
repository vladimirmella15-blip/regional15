'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import ParticleBackground from '@/components/shared/ParticleBackground'
import MagneticButton from '@/components/shared/MagneticButton'
import ScrollIndicator from '@/components/shared/ScrollIndicator'

const slidesData = [
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
    text: 'El presidente de la República acompañó al director regional en la entrega de centros educativos.',
  },
  {
    src: '/assets/img/ministro_con_director.jpg',
    title: 'Ministro Luis Miguel De Camps y Director Eddy Chávez',
    text: 'Trabajando articuladamente por la calidad educativa en el Gran Santo Domingo.',
  },
  {
    src: '/assets/img/director_exponiendo.jpg',
    title: 'Eddy Chávez — Director Regional 15',
    text: 'Exponiendo los logros y avances de la gestión educativa en los 6 distritos.',
  },
  {
    src: '/assets/img/Convenio.jpg',
    title: 'Alianzas Estratégicas para la Educación',
    text: 'La Regional 15 formaliza convenios para impulsar formación docente, tecnología educativa e inclusión.',
  },
  {
    src: '/assets/img/rozamaec.png',
    title: 'Gala Regional de Artes',
    text: 'Celebrando el talento artístico de los estudiantes en el Palacio de Bellas Artes.',
  },
  {
    src: '/assets/img/region_ozama.png',
    title: 'Foro Regional Ozama',
    text: 'La Regional 15 participó en el Foro Regional Ozama por la Consulta Nacional para la Transformación Educativa en UNICARIBE.',
  },
  {
    src: '/assets/img/clubescolar.png',
    title: 'XVII Modelo Regional de las Naciones Unidas',
    text: 'Estudiantes de la Regional 15 fortalecen liderazgo, oratoria y diplomacia en el Modelo UN. 6 de 9 delegados internacionales pertenecen a la Regional 15.',
  },
  {
    src: '/assets/img/reconocimiento_tecnicos_jubilados_2026.jpg',
    title: 'Reconocimiento a Técnicos Docentes Jubilados',
    text: 'La Regional 15 reconoció la trayectoria y dedicación de los técnicos docentes que culminaron su carrera educativa.',
  },
  {
    src: '/assets/img/expo_feria_jovenes_adultos_2026_2.jpg',
    title: 'Expo Feria del Subsistema de Jóvenes y Adultos',
    text: 'La Regional 15 promueve la educación inclusiva para jóvenes y adultos en los 6 distritos del Gran Santo Domingo.',
  },
  {
    src: '/assets/img/modernizacion_actas.png',
    title: 'Modernización y Digitalización de Actas',
    text: 'La Regional 15 impulsa la digitalización de actas escolares para optimizar los procesos administrativos.',
  },
  {
    src: '/assets/img/rendicion_primaria.png',
    title: 'Rendición de Resultados del Nivel Primario',
    text: 'La Regional 15 presenta los resultados educativos del nivel primario, destacando avances en calidad y cobertura.',
  },
  {
    src: '/assets/img/alianza_unnatec.png',
    title: 'Alianza Estratégica Regional 15 — UNNATEC',
    text: 'La Regional 15 formaliza alianza con UNNATEC para impulsar formación docente, tecnología educativa e inclusión.',
  },
  {
    src: '/assets/img/se.png',
    title: 'Goal Summer English Camp',
    text: 'La Regional 15 aperturó el Goal Summer English Camp para fortalecer las habilidades de inglés de los estudiantes con actividades dinámicas y aprendizaje colaborativo.',
  },
  {
    src: '/assets/img/se2.png',
    title: 'Goal Summer English Camp — Participantes',
    text: 'Estudiantes de la Regional 15 desarrollan sus competencias comunicativas en inglés durante el campamento de verano.',
  },
  {
    src: '/assets/img/eh.jpeg',
    title: 'Ecoheroes',
    text: 'Estudiantes de la Regional 15 lideran iniciativas ambientales como Ecoheroes, promoviendo conciencia ecológica y liderazgo juvenil.',
  },
]

interface HeroSliderProps {
  stats?: Record<string, number>
}

function fmt(n: number): string {
  if (n >= 100000) return Math.floor(n / 1000) + 'K'
  return n.toLocaleString('es-DO')
}

export default function HeroSlider({ stats }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slideProgress, setSlideProgress] = useState(0)
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null)
  const progressRef = useRef<number>(0)
  const totalSlides = slidesData.length
  const intervalMs = 6500

  const goToSlide = useCallback((n: number) => {
    setCurrentSlide((n + totalSlides) % totalSlides)
    setSlideProgress(0)
    progressRef.current = 0
  }, [totalSlides])

  const stopAuto = useCallback(() => {
    if (slideTimerRef.current) {
      clearInterval(slideTimerRef.current)
      slideTimerRef.current = null
    }
  }, [])

  const startAuto = useCallback(() => {
    stopAuto()
    progressRef.current = 0
    setSlideProgress(0)
    const step = 50
    const increment = (step / intervalMs) * 100
    slideTimerRef.current = setInterval(() => {
      progressRef.current += increment
      setSlideProgress(Math.min(progressRef.current, 100))
      if (progressRef.current >= 100) {
        goToSlide(currentSlide + 1)
      }
    }, step)
  }, [totalSlides, stopAuto, goToSlide, currentSlide])

  useEffect(() => {
    startAuto()
    return () => stopAuto()
  }, [currentSlide, startAuto, stopAuto])

  const handlePrev = () => {
    goToSlide(currentSlide - 1)
  }
  const handleNext = () => {
    goToSlide(currentSlide + 1)
  }

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [currentSlide])

  return (
    <section id="inicio" className="hero-dual hero-dual-premium" aria-label="Presentación principal">
      <div className="hero-dual-inner">
        {/* LEFT COLUMN */}
        <div className="hero-dual-left">
          <ParticleBackground count={35} color="255,255,255" maxAlpha={0.15} connect={true} />
          <div className="hero-dual-content">
            <span className="hero-dual-badge">✨ TRANSFORMACIÓN EDUCATIVA 2026</span>
            <h1 className="hero-dual-title">
              Regional 15 <span>Liderando la Educación del Futuro</span>
            </h1>
            <p className="hero-dual-desc">
              Transformamos la educación en los 6 distritos del Gran Santo Domingo con innovación, tecnología y compromiso con la excelencia académica.
            </p>
            <div className="hero-dual-btns">
              <MagneticButton href="#digitales" className="hero-btn-primary">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                Explorar Plataformas
              </MagneticButton>
              <MagneticButton href="/nosotros" className="hero-btn-secondary">
                Conocer Nuestra Misión
              </MagneticButton>
            </div>
            <div className="hero-dual-stats">
              <div className="hero-stat">
                <span className="hero-stat-num">{stats?.distritos ?? 6}</span>
                <span className="hero-stat-label">Distritos</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-num">{stats?.centros_total ? fmt(stats.centros_total) : '1,443'}</span>
                <span className="hero-stat-label">Centros</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-num">{stats?.estudiantes_total ? fmt(stats.estudiantes_total) : '422K'}</span>
                <span className="hero-stat-label">Estudiantes</span>
              </div>
            </div>
          </div>
          <ScrollIndicator />
        </div>

        {/* RIGHT COLUMN — CAROUSEL */}
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
                  className="hero-carousel-img"
                />
                <div className="hero-carousel-overlay" />
                <div className="hero-carousel-text">
                  <h3>{slide.title}</h3>
                  <p>{slide.text}</p>
                </div>
              </div>
            ))}
            {/* Slide progress bar */}
            <div className="hero-slide-progress">
              <div className="hero-slide-progress-fill" style={{ width: `${slideProgress}%` }} />
            </div>

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
