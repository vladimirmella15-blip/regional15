// components/landing/Header.tsx
'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface HeaderProps {
  mobileOpen: boolean
  handleHamburger: () => void
  handleMobileNavClick: (e: React.MouseEvent) => void
  handleMobileLinkClick: () => void
}

export default function Header({
  mobileOpen,
  handleHamburger,
  handleMobileNavClick,
  handleMobileLinkClick,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = ['inicio', 'nosotros', 'distritos', 'servicios', 'programas', 'enlaces', 'transparencia', 'noticias', 'eventos', 'testimonios', 'videos', 'galeria', 'instagram', 'calendario', 'contacto']
    const observers: IntersectionObserver[] = []
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.35 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const navItems = [
    { id: 'inicio', label: 'Inicio', href: '/#inicio' },
    {
      id: 'nosotros', label: 'Nosotros', href: '/#nosotros',
      children: [
        { label: 'Quiénes Somos', href: '/#nosotros' },
        { label: 'Director Regional', href: '/director' },
        { label: 'Nuestros Distritos', href: '/#distritos' },
        { label: 'Programas Educativos', href: '/#programas' },
      ]
    },
    { id: 'servicios', label: 'Servicios', href: '/#servicios' },
    { id: 'noticias', label: 'Noticias', href: '/#noticias' },
    {
      id: 'programas', label: 'Programas', href: '/#programas',
      children: [
        { label: 'Gala Regional de Artes', href: '/#eventos' },
        { label: 'PRECE 2025', href: '/#programas' },
        { label: 'ExpoFeria Pedagógica', href: '/#programas' },
        { label: 'Educación DIGITALES', href: '/#programas' },
        { label: 'SIGACOM', href: 'https://sigacom.net/' },
        { label: 'Edyntra', href: 'https://www.edyntra.app/' },
      ]
    },
    { id: 'galeria', label: 'Galería', href: '/#galeria' },
    { id: 'calendario', label: 'Calendario', href: '/#calendario' },
    { id: 'contacto', label: 'Contacto', href: '/#contacto' },
  ]

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hashIdx = href.indexOf('#')
    if (hashIdx === -1) return
    const id = href.slice(hashIdx + 1)
    const el = document.getElementById(id)
    if (el) {
      e.preventDefault()
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.pushState(null, '', href)
    }
  }

  return (
    <>
      <header
        id="main-header"
        role="banner"
        className={scrolled ? 'scrolled' : ''}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 999,
          background: scrolled
            ? 'rgba(255,255,255,0.98)'
            : 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: scrolled
            ? `2px solid var(--red)`
            : '1px solid rgba(0,56,118,0.09)',
          boxShadow: scrolled ? '0 4px 24px rgba(0,56,118,0.13)' : 'none',
          height: scrolled ? '62px' : '72px',
          transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div className="header-inner-v2">
          {/* ── LOGO ── */}
          <a href="/" className="logo-area-v2" aria-label="Regional 15 – Inicio">
            <Image
              src="/assets/img/Regional155.jpg"
              alt="Regional 15"
              width={52}
              height={52}
              style={{
                width: scrolled ? '44px' : '52px',
                height: scrolled ? '44px' : '52px',
                objectFit: 'contain',
                borderRadius: '50%',
                transition: 'all 0.3s ease',
                flexShrink: 0,
              }}
            />
            <div className="logo-divider-v2" />
            <div className="logo-text-v2">
              <span className="logo-tag-v2">MINERD · República Dominicana</span>
              <span className="logo-name-v2">Regional 15</span>
            </div>
          </a>

          {/* ── NAVIGATION ── */}
          <nav className="main-nav-v2" role="navigation" aria-label="Navegación principal">
            {navItems.map(item => (
              <div
                key={item.id}
                className="nav-item-v2"
                onMouseEnter={() => item.children && setOpenDropdown(item.id)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`nav-link-v2${activeSection === item.id ? ' active' : ''}`}
                  onClick={(e) => handleHashClick(e, item.href)}
                >
                  {item.label}
                  {item.children && (
                    <svg viewBox="0 0 12 12" width="10" height="10" style={{ marginLeft: '4px', transition: 'transform 0.2s', transform: openDropdown === item.id ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    </svg>
                  )}
                </a>
                {item.children && (
                  <div className={`nav-dropdown-v2${openDropdown === item.id ? ' open' : ''}`}>
                    {item.children.map((child, ci) => (
                      <a key={ci} href={child.href} className="nav-dropdown-item-v2" onClick={(e) => handleHashClick(e, child.href)}>
                        <svg viewBox="0 0 8 8" width="6" height="6" style={{ flexShrink: 0 }}><circle cx="4" cy="4" r="3" fill="var(--red)" /></svg>
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* ── RIGHT ACTIONS ── */}
          <div className="header-actions-v2">
            <a href="/transparencia" className="hdr-pill-v2 hdr-pill-outline">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              Transparencia
            </a>
            <a href="https://www.instagram.com/regional_15minerd/" target="_blank" rel="noopener" className="hdr-pill-v2 hdr-pill-instagram">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
              Instagram
            </a>
            <a href="https://www.facebook.com/regional15minerd/" target="_blank" rel="noopener" className="hdr-pill-v2 hdr-pill-facebook">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.72-1 1-1h2V2h-3c-2.76 0-5 2.24-5 5v1z" /></svg>
              Facebook
            </a>
            <a href="/admin" className="hdr-pill-v2 hdr-pill-admin">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              Admin
            </a>

            <button
              className="hamburger-v2"
              id="hamburger"
              onClick={handleHamburger}
              aria-label="Abrir menú"
              aria-expanded={mobileOpen ? 'true' : 'false'}
            >
              <span className={mobileOpen ? 'open' : ''} />
              <span className={mobileOpen ? 'open' : ''} />
              <span className={mobileOpen ? 'open' : ''} />
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE NAV ── */}
      <div
        className={`mobile-nav${mobileOpen ? ' open' : ''}`}
        id="mobile-nav"
        role="navigation"
        aria-label="Menú móvil"
        onClick={handleMobileNavClick}
      >
        <div className="mobile-nav-links">
          {navItems.map(item => (
            <React.Fragment key={item.id}>
              <a href={item.href} onClick={handleMobileLinkClick}>{item.label}</a>
              {item.children?.map((child, ci) => (
                <a key={ci} href={child.href} onClick={handleMobileLinkClick} style={{ paddingLeft: '2rem', fontSize: '0.85rem', opacity: 0.8 }}>↳ {child.label}</a>
              ))}
            </React.Fragment>
          ))}
          <div className="mobile-nav-divider" />
          <a href="/transparencia" onClick={handleMobileLinkClick}>🛡️ Portal de Transparencia</a>
          <a href="https://www.instagram.com/regional_15minerd/" target="_blank" rel="noopener" onClick={handleMobileLinkClick}>📷 Instagram Oficial</a>
          <a href="https://www.ministeriodeeducacion.gob.do" target="_blank" rel="noopener" onClick={handleMobileLinkClick}>🏛️ Portal MINERD</a>
          <a href="/admin" onClick={handleMobileLinkClick} style={{ fontWeight: 700, color: 'var(--gold)' }}>🔐 Acceso Administrativo</a>
          <a href="#contacto" className="mobile-cta" onClick={handleMobileLinkClick}>Contáctenos</a>
        </div>
      </div>
    </>
  )
}
