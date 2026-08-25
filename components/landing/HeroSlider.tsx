'use client'

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import Image from 'next/image'
import MagneticButton from '@/components/shared/MagneticButton'

const slidesData = [
  {
    src: '/assets/img/cupos.png',
    title: '¡Garantizando el derecho a la educación!',
    text: 'La Regional 15 asegura cupos escolares en sus seis distritos educativos para que cada estudiante inicie el año escolar en condiciones oportunas.',
  },
  {
    src: '/assets/img/cupo2.png',
    title: 'Cupos Escolares 2026: Hay cupo para todos',
    text: 'EN LA REGIONAL 15 TENEMOS CUPOS PARA TODOS NUESTROS ESTUDIANTES Y NINGÚN ESTUDIANTE SE QUEDARÁ FUERA, HAY CUPO PARA TODOS. TODOS SOMOS REGIONAL 15.',
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
    text: 'El presidente de la República acompañó al director regional en la entrega de centros educativos.',
  },
  {
    src: '/assets/img/ministro_con_director.jpg',
    title: 'Ministro Luis Miguel De Camps y Director Eddy Chávez',
    text: 'Trabajando articuladamente por la calidad educativa en los distritos de la Regional 15.',
  },
  {
    src: '/assets/img/director_exponiendo.jpg',
    title: 'Eddy Chávez, Director Regional 15',
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
    text: 'La Regional 15 promueve la educación inclusiva para jóvenes y adultos en los 6 distritos educativos de su jurisdicción.',
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
    title: 'Alianza Estratégica Regional 15 con UNNATEC',
    text: 'La Regional 15 formaliza alianza con UNNATEC para impulsar formación docente, tecnología educativa e inclusión.',
  },
  {
    src: '/assets/img/se.png',
    title: 'Goal Summer English Camp',
    text: 'La Regional 15 aperturó el Goal Summer English Camp para fortalecer las habilidades de inglés de los estudiantes con actividades dinámicas y aprendizaje colaborativo.',
  },
  {
    src: '/assets/img/se2.png',
    title: 'Goal Summer English Camp: Participantes',
    text: 'Estudiantes de la Regional 15 desarrollan sus competencias comunicativas en inglés durante el campamento de verano.',
  },
  {
    src: '/assets/img/eh.jpeg',
    title: 'Ecoheroes',
    text: 'Estudiantes de la Regional 15 lideran iniciativas ambientales como Ecoheroes, promoviendo conciencia ecológica y liderazgo juvenil.',
  },
]

const SLIDE_LIMIT = 8
const INTERVAL_MS = 6500

interface HeroSliderProps {
  stats?: Record<string, number>
  noticias?: any[]
}

type SlideData = { src: string; title: string; text: string }

function fmt(n: number): string {
  if (n >= 100000) return Math.floor(n / 1000) + 'K'
  return n.toLocaleString('es-DO')
}

export default function HeroSlider({ stats, noticias }: HeroSliderProps) {
  // Carrusel: máximo 8 fotos, siempre las más recientes según el orden de las noticias.
  // Solo usa las fotos fijas si no hay noticias.
  const slides = useMemo<SlideData[]>(() => {
    const fromNews: SlideData[] = []
    if (noticias) {
      for (const n of noticias) {
        if (fromNews.length >= SLIDE_LIMIT) break
        const imgs = n.galeria && n.galeria.length > 0
          ? n.galeria
          : (n.imagen ? [{ src: n.imagen }] : [])
        for (const ig of imgs) {
          if (fromNews.length >= SLIDE_LIMIT) break
          const src = ig.src.startsWith('/') || ig.src.startsWith('http') ? ig.src : '/' + ig.src
          fromNews.push({ src, title: n.titulo, text: n.descripcion || '' })
        }
      }
    }
    return fromNews.length > 0 ? fromNews : slidesData
  }, [noticias])

  const [currentSlide, setCurrentSlide] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const [interacted, setInteracted] = useState(false)
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null)
  const totalSlides = slides.length

  // Solo se montan el slide activo y sus vecinos (previo y siguiente):
  // menos imágenes, transiciones fluidas y sin cargar 200+ fotos a la vez.
  const visibleIndices = useMemo(() => {
    const set = new Set<number>()
    set.add(currentSlide)
    set.add((currentSlide - 1 + totalSlides) % totalSlides)
    set.add((currentSlide + 1) % totalSlides)
    return set
  }, [currentSlide, totalSlides])

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
      goToSlide(currentSlide + 1)
    }, INTERVAL_MS)
  }, [currentSlide, stopAuto, goToSlide])

  useEffect(() => {
    startAuto()
    return () => stopAuto()
  }, [startAuto, stopAuto])

  const handlePrev = () => {
    setInteracted(true)
    goToSlide(currentSlide - 1)
  }
  const handleNext = () => {
    setInteracted(true)
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

  const toggleMore = () => {
    setExpanded((prev) => !prev)
    setInteracted(true)
  }

  const handleDotClick = (idx: number) => {
    setInteracted(true)
    goToSlide(idx)
  }

  return (
    <section id="inicio" className="hero-art" aria-label="Presentación principal">
      <div className="hero-art-inner">
        {/* LEFT COLUMN — ARTISTIC CONTENT */}
        <div className="hero-art-main">
          <div className={`hero-art-headings${interacted ? ' interacted' : ''}${expanded ? ' expanded' : ''}`}>
            <p className="hero-art-byline">Portal Oficial · Regional 15 de Educación MINERD</p>

            <div className="hero-art-heading">
              <h2 className="hero-art-h-s">Bienvenidos</h2>
              <h2 className="hero-art-h-s hero-art-h-s2">a la</h2>
              <h1 className="hero-art-h-l">Regional <span>15</span></h1>
            </div>

            <div className="hero-art-bio">
              <p>
                Transformando la educación, creando oportunidades. Somos la Regional de Educación 15 del MINERD,
                con 6 distritos educativos, más de 1,400 centros y más de 422,000 estudiantes.
              </p>
            </div>

            <a href="#saber-mas" className="hero-art-link" onClick={(e) => { e.preventDefault(); toggleMore() }}>
              {expanded ? 'Cerrar' : 'Saber más'}
            </a>
          </div>

          <div className={`hero-art-more${expanded ? ' open' : ''}`} id="saber-mas">
            <h4>Compromiso con la educación dominicana</h4>
            <p>
              Por mandato de nuestro Sr. Presidente de la República, Luis Abinader Corona, y bajo las orientaciones
              de nuestro Sr. Ministro de Educación, Luis Miguel De Camps, en la Regional 15 reafirmamos nuestro
              compromiso de garantizar el derecho a la educación de todos nuestros estudiantes.
            </p>
            <p>
              Cada estudiante tiene un lugar en nuestras aulas. Estamos preparados para recibir, acompañar
              y garantizar el acceso a una educación de calidad.
            </p>
          </div>

          <div className="hero-art-btns">
            <MagneticButton href="/#servicios" className="hero-btn-primary">
              Consultar Servicios
            </MagneticButton>
            <MagneticButton href="/#buscar-centro" className="hero-btn-secondary">
              Buscar Centro Educativo
            </MagneticButton>
          </div>

          <div className="hero-art-stats">
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

        {/* RIGHT COLUMN — CAROUSEL INSIDE ART FRAME */}
        <div className={`hero-art-imgwrap${interacted ? ' interacted' : ''}`}>
          <div className="hero-art-imgframe">
            {slides.map((slide, idx) => {
              if (!visibleIndices.has(idx)) return null
              return (
                <div key={idx} className={`hero-art-slide${idx === currentSlide ? ' active' : ''}`}>
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                    className="hero-art-slide-img"
                  />
                  <div className="hero-art-slide-overlay" />
                  <div className="hero-art-slide-text">
                    <h3>{slide.title}</h3>
                    <p>{slide.text}</p>
                  </div>
                </div>
              )
            })}

            <div className="hero-art-progress">
              <div key={currentSlide} className="hero-art-progress-fill" />
            </div>

            <button className="hero-art-arrow hero-art-prev" onClick={handlePrev} aria-label="Anterior">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /></svg>
            </button>
            <button className="hero-art-arrow hero-art-next" onClick={handleNext} aria-label="Siguiente">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
            </button>

            {totalSlides <= 12 ? (
              <div className="hero-art-dots">
                {slides.map((_, idx) => (
                  <span
                    key={idx}
                    className={`hero-art-dot${idx === currentSlide ? ' active' : ''}`}
                    role="tab"
                    aria-label={`Slide ${idx + 1}`}
                    tabIndex={0}
                    onClick={() => handleDotClick(idx)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleDotClick(idx) } }}
                  />
                ))}
              </div>
            ) : (
              <div className="hero-art-counter" aria-live="polite">
                {currentSlide + 1} / {totalSlides}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
