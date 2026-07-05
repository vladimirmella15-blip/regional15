'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import SocialIcons from '@/components/shared/SocialIcons'

export default function Footer() {
  const [bttVisible, setBttVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setBttVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer role="contentinfo" style={{ background: '#0f1a2e', color: 'rgba(255,255,255,0.8)' }}>
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="container" style={{ padding: '56px 24px 40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '36px' }}>
              {/* Brand */}
              <div style={{ gridColumn: 'span 2' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <Image src="/assets/img/Regional155.jpg" alt="Regional 15" width={44} height={44} style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.6rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)' }}>Ministerio de Educación · RD</div>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--white)', fontFamily: "'Outfit', sans-serif" }}>Regional 15</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', marginBottom: '20px', maxWidth: '360px' }}>
                  La Regional 15 trabaja para garantizar una educación de calidad, equitativa e inclusiva para todos los niños, niñas y jóvenes de los 6 distritos educativos del Gran Santo Domingo.
                </p>
                <div className="social-links" style={{ display: 'flex', gap: '10px' }}>
                  <SocialIcons platform="instagram" size={18} href="https://www.instagram.com/regional_15minerd/" />
                  <SocialIcons platform="facebook" size={18} href="https://www.facebook.com/regional15minerd/" />
                  <SocialIcons platform="youtube" size={18} />
                  <SocialIcons platform="twitter" size={18} />
                  <SocialIcons platform="tiktok" size={18} />
                </div>
              </div>

              {/* Navegación */}
              <div>
                <h5 style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold)', marginBottom: '16px' }}>Navegación</h5>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { label: 'Inicio', href: '/' },
                    { label: 'Nosotros', href: '/nosotros' },
                    { label: 'Servicios', href: '/#servicios' },
                    { label: 'Noticias', href: '/#noticias' },
                    { label: 'Galería', href: '/#galeria' },
                    { label: 'Contacto', href: '/#contacto' },
                  ].map(link => (
                    <li key={link.label}>
                      <a href={link.href} style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                      >{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Programas */}
              <div>
                <h5 style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold)', marginBottom: '16px' }}>Programas</h5>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { label: 'Gala Regional de Artes', href: '/#eventos' },
                    { label: 'ExpoFeria Pedagógica', href: '/#programas' },
                    { label: 'PRECE 2025', href: '/#programas' },
                    { label: 'Educación DIGITALES', href: '/#programas' },
                    { label: 'SIGACOM', href: 'https://sigacom.net/' },
                    { label: 'Edyntra', href: 'https://www.edyntra.app/' },
                  ].map(link => (
                    <li key={link.label}>
                      <a href={link.href} target={link.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer"
                        style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                      >{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Distritos */}
              <div>
                <h5 style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold)', marginBottom: '16px' }}>Distritos</h5>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { label: '15-01 Los Alcarrizos', href: '/#distritos' },
                    { label: '15-02 Sto. Dgo. Centro', href: '/#distritos' },
                    { label: '15-03 Sur-Central', href: '/#distritos' },
                    { label: '15-04 Noroeste (Cristo Rey)', href: '/#distritos' },
                    { label: '15-05 Herrera', href: '/#distritos' },
                    { label: '15-06 Pedro Brand', href: '/#distritos' },
                  ].map(link => (
                    <li key={link.label}>
                      <a href={link.href} style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                      >{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="container" style={{ padding: '20px 24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px', fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)' }}>
            <p style={{ margin: 0 }}>
              © 2026 Regional de Educación 15 – Educación Santo Domingo. MINERD. Todos los derechos reservados.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                809-686-3598
              </span>
              <span>|</span>
              <span>C. Arzobispo Portes, Santo Domingo 10208</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/18096863598?text=Hola%21%20Quiero%20informaci%C3%B3n%20sobre%20la%20Regional%2015" target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Contactar por WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
      </a>

      {/* Back to top */}
      <button className={`back-to-top${bttVisible ? ' visible' : ''}`} id="back-to-top" aria-label="Volver arriba" onClick={handleScrollToTop}>
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" /></svg>
      </button>
    </>
  )
}
