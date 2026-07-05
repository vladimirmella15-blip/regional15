// app/page.tsx
'use client'

import { useState, useEffect, lazy, Suspense } from 'react'
import HeroSlider from '@/components/landing/HeroSlider'
import StatsBar from '@/components/landing/StatsBar'
import QuickLinks from '@/components/landing/QuickLinks'
import SearchBar from '@/components/SearchBar'
import CalendarSection from '@/components/landing/CalendarSection'

// Lazy loaded components for better initial load
const AboutSection = lazy(() => import('@/components/landing/AboutSection'))
const DistritosSection = lazy(() => import('@/components/landing/DistritosSection'))
const VideoGallery = lazy(() => import('@/components/landing/VideoGallery'))
const EventosSection = lazy(() => import('@/components/landing/EventosSection'))
const ServiciosSection = lazy(() => import('@/components/landing/ServiciosSection'))
const EnlacesSection = lazy(() => import('@/components/landing/EnlacesSection'))
const TransparenciaSection = lazy(() => import('@/components/landing/TransparenciaSection'))
const ProgramasSection = lazy(() => import('@/components/landing/ProgramasSection'))
const NoticiasSection = lazy(() => import('@/components/NoticiasSection'))

const TestimoniosSection = lazy(() => import('@/components/landing/TestimoniosSection'))
const GallerySection = lazy(() => import('@/components/landing/GallerySection'))
const ContactForm = lazy(() => import('@/components/landing/ContactForm'))
const SalonRequestForm = lazy(() => import('@/components/landing/SalonRequestForm'))
const OrganigramaSection = lazy(() => import('@/components/landing/OrganigramaSection'))

function SectionFallback() {
  return <div style={{ height: '200px', background: 'var(--bg-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '.85rem' }}>Cargando...</div>
}

export default function HomePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxSrc, setLightboxSrc] = useState('')
  const [lightboxCaption, setLightboxCaption] = useState('')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [galleryImages, setGalleryImages] = useState<{ src: string; caption: string }[]>([])
  const [data, setData] = useState<any>(null)

  // 1. Cargar contenido JSON
  useEffect(() => {
    fetch('/api/content')
      .then(res => { if (!res.ok) throw new Error('HTTP ' + res.status); return res.json() })
      .then(json => setData(json))
      .catch(err => console.warn('Dynamic content unavailable:', err.message))
  }, [])

  // 2. Control de scroll en Header y botón "Volver arriba"
  useEffect(() => {
    const handleScroll = () => {
      const h = document.getElementById('main-header')
      if (h) h.classList.toggle('scrolled', window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 3. Animaciones al hacer scroll (Intersection Observer)
  useEffect(() => {
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated')
          scrollObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.05, rootMargin: '0px 0px 200px 0px' })

    const observeAnimations = () => {
      document.querySelectorAll('.animate-on-scroll:not(.observed)').forEach((el) => {
        el.classList.add('observed')
        scrollObserver.observe(el)
      })
    }

    observeAnimations()
    const timer = setTimeout(observeAnimations, 600)

    return () => {
      scrollObserver.disconnect()
      clearTimeout(timer)
    }
  }, [data])

  // 4. Inyección del Ticker Dinámico
  useEffect(() => {
    const container = document.getElementById('dynamic-ticker')
    if (!container || !data?.config?.ticker) return
    const html = data.config.ticker.map((item: string) => `<span class="ticker-item">${item}</span>`).join('')
    container.innerHTML = html + html
  }, [data])

  // 5. Configuración de Google Analytics
  useEffect(() => {
    if (!data?.config?.google_analytics_id) return
    const gaId = data.config.google_analytics_id
    const s1 = document.createElement('script')
    s1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    s1.async = true
    document.head.appendChild(s1)
    ;(window as any).dataLayer = (window as any).dataLayer || []
    function gtag(...args: unknown[]) { (window as any).dataLayer.push(args) }
    gtag('js', new Date())
    gtag('config', gaId)
  }, [data])

  // 6. Configuración de Galería para Lightbox
  useEffect(() => {
    if (data?.galeria) {
      setGalleryImages(data.galeria.map((item: any) => ({ src: item.imagen, caption: item.titulo })))
    }
  }, [data])
  const openLightbox = (src: string, caption: string, index: number) => {
    setLightboxSrc(src)
    setLightboxCaption(caption)
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }

  const navigateLightbox = (dir: number) => {
    if (!galleryImages.length) return
    const next = (currentImageIndex + dir + galleryImages.length) % galleryImages.length
    setCurrentImageIndex(next)
    setLightboxSrc(galleryImages[next].src)
    setLightboxCaption(galleryImages[next].caption)
  }

  const handleGalleryClick = (src: string, caption: string) => {
    const idx = galleryImages.findIndex(item => item.src === src)
    openLightbox(src, caption, idx >= 0 ? idx : 0)
  }

  // Teclado para Lightbox
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      if (e.key === 'ArrowLeft') navigateLightbox(-1)
      if (e.key === 'ArrowRight') navigateLightbox(1)
      if (e.key === 'Escape') closeLightbox()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [lightboxOpen, currentImageIndex, galleryImages])

  return (
    <>
      {/* ===================== SEARCH BAR ===================== */}
      <div style={{ padding: '8px 24px', background: 'var(--bg-alt)', borderBottom: '1px solid var(--gray-light)', display: 'flex', justifyContent: 'center' }}>
        <SearchBar />
      </div>

      {/* ===================== TICKER ===================== */}
      <div className="ticker-bar" role="marquee" aria-label="Anuncios">
        <span className="ticker-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          Avisos
        </span>
        <div className="ticker-content" id="dynamic-ticker"></div>
      </div>

      <HeroSlider />
      <StatsBar stats={data?.config?.stats} />
      <QuickLinks />
      <CalendarSection calendario={data?.calendario} />
      <Suspense fallback={<SectionFallback />}><AboutSection /></Suspense>
      <Suspense fallback={<SectionFallback />}><DistritosSection distritos={data?.distritos} /></Suspense>
      <Suspense fallback={<SectionFallback />}><OrganigramaSection /></Suspense>
      <Suspense fallback={<SectionFallback />}><ServiciosSection servicios={data?.servicios} /></Suspense>
      <Suspense fallback={<SectionFallback />}><EnlacesSection enlaces={data?.enlaces} /></Suspense>
      <Suspense fallback={<SectionFallback />}><TransparenciaSection /></Suspense>
      <Suspense fallback={<SectionFallback />}><EventosSection eventos={data?.eventos} /></Suspense>
      <Suspense fallback={<SectionFallback />}><ProgramasSection programas={data?.programas} /></Suspense>
      <Suspense fallback={<SectionFallback />}><NoticiasSection /></Suspense>

      <Suspense fallback={<SectionFallback />}><TestimoniosSection testimonios={data?.testimonios} /></Suspense>
      <Suspense fallback={<SectionFallback />}><VideoGallery /></Suspense>
      <Suspense fallback={<SectionFallback />}><GallerySection gallery={data?.galeria} handleGalleryClick={handleGalleryClick} /></Suspense>
      <Suspense fallback={<SectionFallback />}><ContactForm /></Suspense>
      <Suspense fallback={<SectionFallback />}><SalonRequestForm /></Suspense>

      {/* Lightbox de la Galería */}
      {lightboxOpen && (
        <div className="lightbox open" id="lightbox" role="dialog" aria-modal="true" aria-label="Visor de imágenes" onClick={(e) => { if (e.target === e.currentTarget) closeLightbox() }}>
          <span className="lightbox-close" onClick={closeLightbox} aria-label="Cerrar">&times;</span>
          <button className="lightbox-arrow lightbox-prev" onClick={() => navigateLightbox(-1)} aria-label="Anterior">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /></svg>
          </button>
          <img className="lightbox-img" src={lightboxSrc} alt={lightboxCaption} />
          <button className="lightbox-arrow lightbox-next" onClick={() => navigateLightbox(1)} aria-label="Siguiente">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
          </button>
          <div className="lightbox-caption">{lightboxCaption}</div>
        </div>
      )}
    </>
  )
}
