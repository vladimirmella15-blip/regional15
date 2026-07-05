'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const programasData = [
  { title: 'Gala Regional de Artes', desc: 'Evento anual que celebra el talento artístico de los estudiantes de los 6 distritos en música, danza, teatro, artes visuales, cine y fotografía. Se realiza en el Palacio de Bellas Artes.', img: '/assets/img/gala_regional.png', logros: '3 ediciones realizadas, más de 500 estudiantes participantes' },
  { title: 'PRECE 2025', desc: 'Programa de Reconocimiento a la Excelencia Educativa que galardona a centros educativos con mejores resultados académicos, gestión y prácticas pedagógicas innovadoras.', img: '/assets/img/bronce_prece.png', logros: 'Medalla de Bronce 2025, 25+ centros reconocidos' },
  { title: 'ExpoFeria Pedagógica', desc: 'Plataforma de exhibición de proyectos pedagógicos innovadores desarrollados por docentes y estudiantes. Espacio de intercambio de buenas prácticas y metodologías activas.', img: '/assets/img/expoferia_2025_1.jpg', logros: 'Edición anual, 100+ proyectos exhibidos por distrito' },
  { title: 'Educación DIGITALES', desc: 'Programa de transformación digital que integra herramientas tecnológicas, plataformas de aprendizaje y recursos digitales en los procesos de enseñanza-aprendizaje.', img: '/assets/img/education_event.png', logros: 'Implementado en todos los distritos, 200+ centros equipados' },
  { title: 'SIGACOM', desc: 'Sistema de Gestión de Agua y Comedor Escolar. Plataforma que permite la gestión eficiente de los servicios de alimentación y agua en los centros educativos públicos.', img: '/assets/img/logo_sigacom.png', logros: 'Cobertura en todos los centros públicos de la Regional' },
  { title: 'Edyntra', desc: 'Plataforma educativa innovadora que promueve el emprendimiento y la educación financiera en estudiantes de nivel secundario, desarrollando habilidades para el siglo XXI.', img: '/assets/img/logo_edyntra.png', logros: 'Implementado en centros pilotos de la Regional 15' },
]

const formatImgSrc = (src: string) => {
  if (!src) return ''
  if (src.startsWith('/') || src.startsWith('http')) return src
  return '/' + src
}

export default function ProgramasPage() {
  const [data, setData] = useState<any>(null)
  useEffect(() => { document.title = 'Programas Educativos – Regional 15' }, [])

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(() => {})
  }, [])

  const programas = data?.programas || programasData

  return (
    <main style={{ marginTop: '80px' }}>
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--blue-dark) 0%, #002a5c 100%)', padding: '70px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, var(--gold), transparent)' }} />
        <div style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, var(--red), transparent)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-eyebrow" style={{ color: 'var(--gold)', marginBottom: '12px', display: 'block' }}>PROGRAMAS EDUCATIVOS</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'white', margin: '0 0 14px', fontWeight: 800, fontFamily: "'Outfit', sans-serif", lineHeight: 1.1 }}>Nuestros Programas</h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.82)', maxWidth: '620px', lineHeight: 1.7, margin: 0 }}>
            Conoce los programas e iniciativas que la Regional 15 implementa para transformar la educación y formar ciudadanos íntegros en el Gran Santo Domingo.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--card-bg)' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2>Programas Destacados</h2>
            <div className="section-divider" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px', marginTop: '20px' }}>
            {programas.map((p: any, i: number) => (
              <div key={i} style={{ background: 'var(--card-bg)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,56,118,0.08)', border: '1px solid rgba(0,56,118,0.08)', transition: 'all 0.25s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,56,118,0.14)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
              >
                <div style={{ position: 'relative', height: '200px', background: 'var(--gray-light)' }}>
                  <Image src={formatImgSrc(p.img || p.logo)} alt={p.title || p.titulo} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 300px" />
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--blue-dark)', marginBottom: '8px', fontFamily: "'Outfit', sans-serif" }}>{p.title || p.titulo}</h3>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '10px' }}>{p.desc || p.descripcion}</p>
                  {p.logros && (
                    <span style={{ display: 'inline-block', background: 'var(--blue-lighter)', color: 'var(--blue-dark)', fontSize: '0.72rem', fontWeight: 600, padding: '3px 10px', borderRadius: '20px' }}>
                      {p.logros}
                    </span>
                  )}
                  {p.enlace && (
                    <a href={p.enlace} target="_blank" rel="noopener noreferrer" className="badge-card-link" style={{ marginTop: '12px', display: 'inline-flex' }}>
                      {p.texto_enlace || 'Más información'} →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-alt2)' }}>
        <div className="container text-center">
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.3rem', color: 'var(--blue-dark)', marginBottom: '12px' }}>¿Eres docente o estudiante?</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto 24px' }}>Conoce cómo participar en nuestros programas y formar parte de las iniciativas educativas de la Regional 15.</p>
          <a href="/contacto" className="hero-btn-primary" style={{ display: 'inline-flex' }}>Solicitar Información</a>
        </div>
      </section>
    </main>
  )
}
