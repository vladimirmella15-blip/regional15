// components/landing/AboutSection.tsx
'use client'

import React from 'react'

const MUNICIPIOS = ['Los Alcarrizos', 'Santo Domingo', 'Santo Domingo Oeste', 'Pedro Brand']

const FEATURES = [
  {
    titulo: 'Misión',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    color: 'var(--blue-dark)',
    texto: 'Garantizar una educación inclusiva, equitativa y de calidad que promueva el desarrollo integral de los estudiantes de la Regional 15 (Los Alcarrizos, Santo Domingo, Santo Domingo Oeste y Pedro Brand).',
  },
  {
    titulo: 'Visión',
    icon: 'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
    color: 'var(--red)',
    texto: 'Ser reconocida como la Regional modelo en innovación pedagógica, gestión eficiente y excelencia académica, tal como lo avala la Medalla de Bronce del PRECE 2025 otorgada por el MAP.',
  },
  {
    titulo: 'Valores',
    icon: 'M12 22c3.314 0 6-2.686 6-6v-1h-2v1c0 2.21-1.79 4-4 4s-4-1.79-4-4v-1H6v1c0 3.314 2.686 6 6 6zm0-8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm8-6h-2.09c.57.94.89 2 .89 3.09V14h2V8zM4 8h2.09c-.57.94-.89 2-.89 3.09V14H4V8z',
    color: 'var(--gold)',
    texto: 'Amor, transparencia, integridad, compromiso y equidad como principios rectores de la gestión institucional.',
  },
]

export default function AboutSection() {
  return (
    <section id="nosotros" className="section about-section" aria-label="Acerca de la Regional 15">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-wrap animate-on-scroll">
            <div className="about-img-main">
              <img src="/assets/img/feria_pedagogica_2026_full.jpeg" alt="Centros educativos de la Regional 15 Santo Domingo" loading="lazy" />
            </div>
            <div className="about-img-badge">
              <div className="num">6</div>
              <div className="txt">Distritos<br />Educativos</div>
            </div>
            <div className="about-municipios">
              {MUNICIPIOS.map(m => (
                <span key={m}>
                  <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="about-content">
            <div className="section-header animate-on-scroll">
              <span className="section-eyebrow">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ verticalAlign: 'middle', marginRight: 4 }}><path d="M12 2l2.4 4.9L20 8.5l-4 3.9.9 5.6L12 15.5 7.1 18l.9-5.6-4-3.9 5.6-1.6z"/></svg>
                Sobre Nosotros
              </span>
              <h2>Regional 15 | MINERD — Educación Santo Domingo</h2>
              <div className="section-divider"></div>
            </div>

            <p className="animate-on-scroll">La <strong>Regional de Educación 15</strong> es la sede del <strong>Ministerio de Educación (MINERD)</strong> para la zona de <strong>Santo Domingo</strong>. Coordina y supervisa la gestión educativa de <strong>6 distritos</strong> que abarcan Los Alcarrizos, Santo Domingo, Santo Domingo Oeste y Pedro Brand, con más de <strong>1,400 centros educativos</strong> y <strong>422,000 estudiantes</strong>.</p>
            <p className="animate-on-scroll">Somos una institución comprometida con dar respuestas a las necesidades de los estudiantes de manera <strong>pertinente y oportuna</strong>, garantizando que cada acción y programa educativo responda a los desafíos reales de la comunidad escolar. Documentamos nuestra labor en Instagram (<a href="https://www.instagram.com/regional_15minerd/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--red)', fontWeight: 700 }}>@regional_15minerd</a>): efemérides, DIGITALES, Gala Regional, PRECE 2025 y ExpoFeria Pedagógica.</p>

            <div className="about-features animate-on-scroll">
              {FEATURES.map(f => (
                <div className="feature-item" key={f.titulo}>
                  <div className="feature-icon" style={{ borderColor: f.color, background: `${f.color}12` }}>
                    <svg viewBox="0 0 24 24" style={{ fill: f.color }}><path d={f.icon} /></svg>
                  </div>
                  <div className="feature-text">
                    <strong>{f.titulo}</strong>
                    <span>{f.texto}</span>
                  </div>
                </div>
              ))}
            </div>

            <a href="/director" className="btn-main animate-on-scroll">
              Conoce al Director Regional
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
