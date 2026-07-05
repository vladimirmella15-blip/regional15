// components/landing/AboutSection.tsx
'use client'

import React from 'react'

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
              <div className="txt">Distritos</div>
            </div>
          </div>
          <div className="about-content">
            <div className="section-header animate-on-scroll">
              <span className="section-eyebrow">Sobre Nosotros</span>
              <h2>Regional 15 | MINERD – Educación Santo Domingo</h2>
              <div className="section-divider"></div>
            </div>
            <p className="animate-on-scroll">La <strong>Regional de Educación 15</strong> es la cuenta oficial del Ministerio de Educación (MINERD) para la zona de <strong>Santo Domingo</strong>. Con sede en la <strong>C. Arzobispo Portes, Santo Domingo</strong>, coordina y supervisa la gestión educativa de 6 distritos que abarcan Los Alcarrizos, Santo Domingo Centro, Sur-Central, Noroeste, Herrera (Oeste) y Pedro Brand.</p>
            <p className="animate-on-scroll">Con <strong>2,527 publicaciones</strong> y <strong>9,429 seguidores</strong> en Instagram (<a href="https://www.instagram.com/regional_15minerd/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--red)' }}>@regional_15minerd</a>), la Regional 15 documenta activamente sus actividades: Efemérides, DIGITALES, Gala Regional, PRECE2025, Noticias, Inicio de Año Escolar y ExpoFeria Pedagógica.</p>
            <p className="animate-on-scroll">La <strong>Regional 15</strong> es una institución comprometida con dar respuestas a las necesidades de los estudiantes de manera <strong>pertinente y oportuna</strong>, garantizando que cada acción y programa educativo responda a los desafíos reales de la comunidad escolar. Trabajamos día a día para ser un puente entre las políticas educativas nacionales y las necesidades específicas de nuestros 6 distritos escolares, asegurando una educación que transforma vidas.</p>
            <div className="about-features animate-on-scroll">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                </div>
                <div className="feature-text">
                  <strong>Misión</strong>
                  <span>Garantizar una educación inclusiva, equitativa y de calidad que promueva el desarrollo integral de los estudiantes del Gran Santo Domingo.</span>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" /></svg>
                </div>
                <div className="feature-text">
                  <strong>Visión</strong>
                  <span>Ser reconocida como la Regional modelo en innovación pedagógica, gestión eficiente y excelencia académica, tal como lo avala la Medalla de Bronce del PRECE 2025 otorgada por el MAP.</span>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 22c3.314 0 6-2.686 6-6v-1h-2v1c0 2.21-1.79 4-4 4s-4-1.79-4-4v-1H6v1c0 3.314 2.686 6 6 6zm0-8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm8-6h-2.09c.57.94.89 2 .89 3.09V14h2V8zM4 8h2.09c-.57.94-.89 2-.89 3.09V14H4V8z"/></svg>
                </div>
                <div className="feature-text">
                  <strong>Valores</strong>
                  <span>Amor, transparencia, integridad, compromiso e equidad.</span>
                </div>
              </div>
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
