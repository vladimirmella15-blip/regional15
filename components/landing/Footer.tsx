// components/landing/Footer.tsx
'use client'

import React, { useState, useEffect } from 'react'
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
      {/* ===================== FOOTER ===================== */}
      <footer role="contentinfo">
        <div className="footer-main">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-brand">
                <div className="logo-text">
                  <span className="institution">Ministerio de Educación – República Dominicana</span>
                  <span className="name">Educación Santo Domingo <span style={{ color: 'var(--red)' }}>Regional 15</span></span>
                </div>
                <p>La Regional 15 trabaja para garantizar una educación de calidad, equitativa e inclusiva para todos los niños, niñas y jóvenes de los 6 distritos educativos del Gran Santo Domingo. Síguenos en nuestras redes oficiales.</p>
                <div className="social-links">
                  <SocialIcons platform="instagram" size={20} href="https://www.instagram.com/regional_15minerd/" />
                  <SocialIcons platform="facebook" size={20} href="https://www.facebook.com/regional15minerd/" />
                  <SocialIcons platform="youtube" size={20} />
                  <SocialIcons platform="twitter" size={20} />
                  <SocialIcons platform="tiktok" size={20} />
                </div>
              </div>
              <div className="footer-col">
                <h5>Programas</h5>
                <ul>
                  <li><a href="/#eventos">Gala Regional de Artes</a></li>
                  <li><a href="/#eventos">ExpoFeria Pedagógica</a></li>
                  <li><a href="/#eventos">PRECE 2025</a></li>
                  <li><a href="/#programas">DIGITALES</a></li>
                  <li><a href="https://sigacom.net/" target="_blank" rel="noopener">SIGACOM</a></li>
                  <li><a href="https://www.edyntra.app/" target="_blank" rel="noopener">Edyntra</a></li>
                  <li><a href="/#programas">Alimentación Escolar</a></li>
                  <li><a href="/#programas">Educación Inclusiva</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h5>Distritos Educativos</h5>
                <ul>
                  <li><a href="/#distritos">15-01 Los Alcarrizos</a></li>
                  <li><a href="/#distritos">15-02 Sto. Dgo. Centro</a></li>
                  <li><a href="/#distritos">15-03 Sur-Central</a></li>
                  <li><a href="/#distritos">15-04 Noroeste (Cristo Rey)</a></li>
                  <li><a href="/#distritos">15-05 Herrera</a></li>
                  <li><a href="/#distritos">15-06 Pedro Brand</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h5>Enlaces de Interés</h5>
                <ul>
                  <li><a href="https://www.ministeriodeeducacion.gob.do" target="_blank" rel="noopener noreferrer">Portal MINERD</a></li>
                  <li><a href="https://ministeriodeeducacion.gob.do/transparencia/" target="_blank" rel="noopener noreferrer">Portal de Transparencia</a></li>
                  <li><a href="https://saip.gob.do/" target="_blank" rel="noopener noreferrer">SAIP – Solicitud de Información</a></li>
                  <li><a href="https://www.presidencia.gob.do" target="_blank" rel="noopener noreferrer">Presidencia RD</a></li>
                  <li><a href="https://www.instagram.com/regional_15minerd/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <SocialIcons platform="instagram" size={14} />
                    Instagram Oficial
                  </a></li>
                  <li><a href="https://www.facebook.com/regional15minerd/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <SocialIcons platform="facebook" size={14} />
                    Facebook Oficial
                  </a></li>
                  <li><a href="#programas" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', opacity: 0.7 }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
                    SER15 — Próximamente
                  </a></li>
                  <li><a href="https://isfodosu.edu.do" target="_blank" rel="noopener noreferrer">ISFODOSU</a></li>
                  <li><a href="https://inafocam.edu.do" target="_blank" rel="noopener noreferrer">INAFOCAM</a></li>
                  <li><a href="/admin">Acceso Administrativo</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>© 2026 Regional de Educación 15 – Educación Santo Domingo. Ministerio de Educación de la República Dominicana (MINERD). Todos los derechos reservados.</p>
            <p>
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              809-686-3598
              <span style={{ margin: '0 8px', opacity: 0.3 }}>|</span>
              <SocialIcons platform="instagram" size={12} href="https://www.instagram.com/regional_15minerd/" />
              <a href="https://www.instagram.com/regional_15minerd/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', fontSize: '0.8rem' }}>@regional_15minerd</a>
              <span style={{ margin: '0 8px', opacity: 0.3 }}>|</span>
              <SocialIcons platform="facebook" size={12} href="https://www.facebook.com/regional15minerd/" />
              <a href="https://www.facebook.com/regional15minerd/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', fontSize: '0.8rem' }}>Facebook Oficial</a>
              <span style={{ margin: '0 8px', opacity: 0.3 }}>|</span>
              C. Arzobispo Portes, Santo Domingo 10208
            </p>
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
