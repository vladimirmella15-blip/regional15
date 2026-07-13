'use client'

import { useState, useEffect, lazy, Suspense } from 'react'
import HeroSlider from '@/components/landing/HeroSlider'
import StatsBar from '@/components/landing/StatsBar'
import CalendarSection from '@/components/landing/CalendarSection'
import PlatformsHero from '@/components/landing/PlatformsHero'
import QuickLinks from '@/components/landing/QuickLinks'
import AvisoServicios from '@/components/landing/AvisoServicios'
import FeaturedNews from '@/components/FeaturedNews'
import InstagramSection from '@/components/landing/InstagramSection'
const ServiciosSection = lazy(() => import('@/components/landing/ServiciosSection'))
const AboutSection = lazy(() => import('@/components/landing/AboutSection'))
const DistritosSection = lazy(() => import('@/components/landing/DistritosSection'))
const OrganigramaSection = lazy(() => import('@/components/landing/OrganigramaSection'))
const GallerySection = lazy(() => import('@/components/landing/GallerySection'))
const TestimoniosSection = lazy(() => import('@/components/landing/TestimoniosSection'))
const ContactForm = lazy(() => import('@/components/landing/ContactForm'))

function SectionFallback() {
  return <div className="section-fallback" />
}

export default function HomePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxSrc, setLightboxSrc] = useState('')
  const [lightboxCaption, setLightboxCaption] = useState('')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [galleryImages, setGalleryImages] = useState<{ src: string; caption: string }[]>([])
  const [data, setData] = useState<any>(null)
  const [instagramPosts, setInstagramPosts] = useState<any[]>([])
  const [instaError, setInstaError] = useState(false)

  useEffect(() => {
    fetch('/api/instagram')
      .then(res => { if (!res.ok) throw new Error('HTTP ' + res.status); return res.json() })
      .then(json => { if (json && json.length > 0) setInstagramPosts(json) })
      .catch(() => setInstaError(true))
  }, [])

  useEffect(() => {
    fetch('/api/content')
      .then(res => { if (!res.ok) throw new Error('HTTP ' + res.status); return res.json() })
      .then(json => setData(json))
      .catch(err => console.warn('Dynamic content unavailable:', err.message))
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const h = document.getElementById('main-header')
      if (h) h.classList.toggle('scrolled', window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observedElements = new WeakSet<Element>()

    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated')
          scrollObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.05, rootMargin: '0px 0px 200px 0px' })

    const observeNewElements = () => {
      document.querySelectorAll('.animate-on-scroll:not(.animated)').forEach((el) => {
        if (!observedElements.has(el)) {
          observedElements.add(el)
          scrollObserver.observe(el)
        }
      })
    }

    observeNewElements()

    const mutationObserver = new MutationObserver(observeNewElements)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      scrollObserver.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    const container = document.getElementById('dynamic-ticker')
    if (!container || !data?.config?.ticker) return
    const html = data.config.ticker.map((item: string) => `<span class="ticker-item">${item}</span>`).join('')
    container.innerHTML = html + html
  }, [data])

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
      {/* Ticker */}
      <div className="ticker-bar" role="marquee" aria-label="Anuncios">
        <span className="ticker-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          Avisos
        </span>
        <div className="ticker-content" id="dynamic-ticker"></div>
      </div>

      <HeroSlider stats={data?.config?.stats} />
      <StatsBar stats={data?.config?.stats} />
      <AvisoServicios />

      {/* ── PLATAFORMAS DIGITALES (DESTACADO) ── */}
      <PlatformsHero />

      {/* ── ACCESOS RÁPIDOS ── */}
      <QuickLinks />

      {/* Noticias — destacadas */}
      <FeaturedNews noticias={data?.noticias} />

      {/* Calendario + Eventos */}
      <CalendarSection calendario={data?.calendario} eventos={data?.eventos} />

      {/* Servicios + Programas + Enlaces fusionados */}
      <Suspense fallback={<SectionFallback />}><ServiciosSection servicios={data?.servicios} programas={data?.programas} enlaces={data?.enlaces} /></Suspense>

      <Suspense fallback={<SectionFallback />}><AboutSection /></Suspense>
      <Suspense fallback={<SectionFallback />}><DistritosSection distritos={data?.distritos} /></Suspense>
      <Suspense fallback={<SectionFallback />}><OrganigramaSection /></Suspense>

      {/* Galería + Instagram */}
      <Suspense fallback={<SectionFallback />}><GallerySection gallery={data?.galeria} handleGalleryClick={handleGalleryClick} /></Suspense>

      <Suspense fallback={<SectionFallback />}><TestimoniosSection testimonios={data?.testimonios} /></Suspense>

      {/* Contacto + Solicitud de Salón fusionados */}
      <Suspense fallback={<SectionFallback />}><ContactForm /></Suspense>

      {/* Instagram */}
      <InstagramSection instaError={instaError} instagramPosts={instagramPosts} noticias={data?.noticias} />

      {/* Lightbox */}
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
