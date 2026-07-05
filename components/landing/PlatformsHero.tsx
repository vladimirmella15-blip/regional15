'use client'

import React from 'react'
import { useTilt } from '@/hooks/useTilt'

const platforms = [
  {
    id: 'sigacom',
    name: 'SIGACOM',
    title: 'Sistema de Gestión Académica',
    description: 'Plataforma integral para procesos técnicos y pedagógicos. Gestión académica, administrativa y financiera centralizada.',
    link: 'https://sigacom.net/',
    features: ['Procesos Técnicos', 'Pedagogía', 'Administración'],
    svg: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  },
  {
    id: 'edyntra',
    name: 'Edyntra',
    title: 'Gestión Educativa Integral',
    logoImg: '/assets/img/Logo-Edyntra.png',
    description: 'Plataforma completa de gestión escolar que abarca todos los procesos administrativos y académicos en un solo lugar.',
    link: 'https://www.edyntra.app/',
    features: ['Gestión Escolar', 'Procesos Educativos', 'Administración'],
    svg: 'M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z',
  },
  {
    id: 'educacion-digitales',
    name: 'Educación DIGITALES',
    title: 'Transformación Digital',
    description: 'Iniciativa de modernización tecnológica que integra herramientas educativas de última generación en el aula.',
    link: '#',
    features: ['Innovación', 'Tecnología', 'Educación'],
    svg: 'M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z',
  },
]

function PlatformCard({ platform, index }: { platform: typeof platforms[0]; index: number }) {
  const tiltRef = useTilt<HTMLAnchorElement>(6)
  const colors = ['#003876', '#e65100', '#7c3aed']
  const color = colors[index % colors.length]

  return (
    <a
      ref={tiltRef}
      href={platform.link}
      target={platform.link.startsWith('http') ? '_blank' : '_self'}
      rel="noopener noreferrer"
      className="platform-hero-card animate-on-scroll"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="platform-hero-card-content">
        <div className="platform-hero-card-icon" style={{ background: `${color}15`, color, overflow: 'hidden', padding: platform.logoImg ? 0 : undefined }}>
          {platform.logoImg ? (
            <img src={platform.logoImg} alt={platform.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28" strokeLinecap="round" strokeLinejoin="round">
              <path d={platform.svg} />
            </svg>
          )}
        </div>
        <div className="platform-hero-card-header">
          <h3>{platform.name}</h3>
          <p className="platform-hero-card-subtitle">{platform.title}</p>
        </div>
        <p className="platform-hero-card-description">{platform.description}</p>
        <div className="platform-hero-card-features">
          {platform.features.map((f, i) => (
            <div key={i} className="platform-hero-card-feature">
              <span className="platform-hero-card-feature-dot" style={{ background: color }} />
              {f}
            </div>
          ))}
        </div>
        <div className="platform-hero-card-footer">
          <span className="platform-hero-card-cta">
            Acceder {platform.link.startsWith('http') ? '↗' : '→'}
          </span>
          <svg className="platform-hero-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7m10 0v10" />
          </svg>
        </div>
      </div>
    </a>
  )
}

export default function PlatformsHero() {
  return (
    <section className="platforms-hero animate-on-scroll">
      <div className="platforms-hero-bg">
        <div className="platforms-hero-blob" style={{ top: '-10%', right: '-5%', background: 'radial-gradient(circle, rgba(0,56,118,0.1), transparent)' }} />
        <div className="platforms-hero-blob" style={{ bottom: '-10%', left: '-5%', background: 'radial-gradient(circle, rgba(237,35,42,0.08), transparent)' }} />
      </div>
      <div className="container-lg platforms-hero-inner">
        <div className="platforms-hero-header">
          <div className="platforms-hero-badge"><span>🚀 INNOVACIÓN DIGITAL</span></div>
          <h2>Plataformas Institucionales</h2>
          <p>Accede a nuestras soluciones tecnológicas especializadas para mejorar la gestión educativa</p>
        </div>
        <div className="platforms-grid">
          {platforms.map((p, i) => (
            <PlatformCard key={p.id} platform={p} index={i} />
          ))}
        </div>
        <div className="platforms-hero-footer">
          <p>Todas nuestras plataformas están diseñadas para facilitar la gestión educativa y mejorar la experiencia de docentes, administrativos y estudiantes.</p>
          <a href="#digitales" className="platforms-hero-link">Conocer más sobre nuestras iniciativas digitales →</a>
        </div>
      </div>
    </section>
  )
}
