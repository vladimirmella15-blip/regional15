'use client'

import React, { useState } from 'react'

export default function PlatformsHero() {
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null)

  const platforms = [
    {
      id: 'sigacom',
      name: 'SIGACOM',
      title: 'Sistema de Gestión Académica',
      description: 'Plataforma integral para procesos técnicos y pedagógicos. Gestión académica, administrativa y financiera centralizada.',
      color: 'from-blue-600 to-blue-800',
      icon: '📊',
      link: 'https://sigacom.net/',
      stats: ['Procesos Técnicos', 'Pedagogía', 'Administración'],
    },
    {
      id: 'edyntra',
      name: 'Edyntra',
      title: 'Gestión Educativa Integral',
      description: 'Plataforma completa de gestión escolar que abarca todos los procesos administrativos y académicos en un solo lugar.',
      color: 'from-orange-500 to-orange-700',
      icon: '🎓',
      link: 'https://www.edyntra.app/',
      stats: ['Gestión Escolar', 'Procesos Educativos', 'Administración'],
    },
    {
      id: 'educacion-digitales',
      name: 'Educación DIGITALES',
      title: 'Transformación Digital',
      description: 'Iniciativa de modernización tecnológica que integra herramientas educativas de última generación en el aula.',
      color: 'from-purple-600 to-pink-600',
      icon: '💻',
      link: '#',
      stats: ['Innovación', 'Tecnología', 'Educación'],
    },
  ]

  return (
    <section className="platforms-hero">
      <div className="platforms-hero-bg">
        <div className="platforms-hero-blob" style={{ top: '-10%', right: '-5%', background: 'radial-gradient(circle, rgba(0,56,118,0.1), transparent)' }}></div>
        <div className="platforms-hero-blob" style={{ bottom: '-10%', left: '-5%', background: 'radial-gradient(circle, rgba(237,35,42,0.08), transparent)' }}></div>
      </div>

      <div className="container-lg platforms-hero-inner">
        <div className="platforms-hero-header">
          <div className="platforms-hero-badge">
            <span>🚀 INNOVACIÓN DIGITAL</span>
          </div>
          <h2>Plataformas Institucionales</h2>
          <p>Accede a nuestras soluciones tecnológicas especializadas para mejorar la gestión educativa</p>
        </div>

        <div className="platforms-grid">
          {platforms.map((platform) => (
            <a
              key={platform.id}
              href={platform.link}
              target={platform.link.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className={`platform-hero-card ${hoveredPlatform === platform.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredPlatform(platform.id)}
              onMouseLeave={() => setHoveredPlatform(null)}
            >
              <div className={`platform-hero-card-bg gradient-animated`} style={{ backgroundImage: `linear-gradient(135deg, var(--${platform.color.split('-')[1]}), var(--${platform.color.split('-')[2]}))` }}></div>

              <div className="platform-hero-card-content">
                <div className="platform-hero-card-icon">{platform.icon}</div>

                <div className="platform-hero-card-header">
                  <h3>{platform.name}</h3>
                  <p className="platform-hero-card-subtitle">{platform.title}</p>
                </div>

                <p className="platform-hero-card-description">{platform.description}</p>

                <div className="platform-hero-card-features">
                  {platform.stats.map((stat, idx) => (
                    <div key={idx} className="platform-hero-card-feature">
                      <span className="platform-hero-card-feature-dot"></span>
                      {stat}
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
          ))}
        </div>

        <div className="platforms-hero-footer">
          <p>Todas nuestras plataformas están diseñadas para facilitar la gestión educativa y mejorar la experiencia de docentes, administrativos y estudiantes.</p>
          <a href="#digitales" className="platforms-hero-link">
            Conocer más sobre nuestras iniciativas digitales →
          </a>
        </div>
      </div>
    </section>
  )
}
