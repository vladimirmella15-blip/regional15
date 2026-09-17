'use client'

import { useEffect, useState } from 'react'

interface Pilar {
  titulo: string
  desc: string
  icono: string
}

interface FotoGaleria {
  src: string
  caption: string
}

const pilares: Pilar[] = [
  {
    titulo: 'Huertos Escolares',
    desc: 'Cada huerto es un aula al aire libre: los estudiantes aprenden sembrando, cuidando y cosechando sus propios alimentos.',
    icono: '<path d="M12 22V12"/><path d="M12 12c0-4 3-7 8-7 0 5-3 7-8 7z"/><path d="M12 14c0-3-2.5-5-6-5 0 4 2.5 5 6 5z"/>',
  },
  {
    titulo: 'Ecoheroes',
    desc: 'Programa de liderazgo juvenil que forma agentes de cambio comprometidos con la protección del planeta.',
    icono: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  },
  {
    titulo: 'Reciclaje y Reutilización',
    desc: 'Manejo responsable de residuos y reutilización de materiales para reducir el impacto en nuestras comunidades.',
    icono: '<path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/>',
  },
  {
    titulo: 'Reforestación y Siembra',
    desc: 'Jornadas de siembra de árboles y recuperación de espacios verdes junto a estudiantes, docentes y familias.',
    icono: '<path d="M12 2l5 8h-3l3 5H7l3-5H7z"/><path d="M12 15v7"/>',
  },
  {
    titulo: 'Cuidado del Agua y la Energía',
    desc: 'Prácticas para el uso responsable de los recursos naturales dentro y fuera de los centros educativos.',
    icono: '<path d="M12 2.7l5.3 6.4a7 7 0 1 1-10.6 0z"/>',
  },
  {
    titulo: 'Formación Docente Ambiental',
    desc: 'Acompañamiento y capacitación a docentes para integrar la educación ambiental en el aula.',
    icono: '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>',
  },
]

const galeria: FotoGaleria[] = [
  { src: '/assets/img/eh.jpeg', caption: 'Ecoheroes: estudiantes en iniciativas ambientales' },
  { src: '/assets/img/eh2.jpeg', caption: 'Jóvenes líderes ambientales de la Regional 15' },
  { src: '/assets/img/eh3.jpeg', caption: 'Compromiso de la comunidad educativa con el planeta' },
  { src: '/assets/img/c2.png', caption: 'Reconocimiento a docentes por los huertos escolares' },
]

const logros = [
  {
    titulo: 'Reconocimiento a docentes por la educación ambiental',
    desc: 'La Regional 15 reconoció a directores, coordinadores pedagógicos y docentes por impulsar los huertos escolares y la conciencia ambiental en los centros educativos.',
    href: '/noticias',
  },
  {
    titulo: 'Ecoheroes: liderazgo juvenil por el planeta',
    desc: 'Estudiantes de la Regional 15 participan en Ecoheroes con actividades de reforestación, reciclaje y educación ecológica.',
    href: '/noticias',
  },
  {
    titulo: 'Huertos escolares que enseñan haciendo',
    desc: 'Cada huerto escolar representa una oportunidad para aprender haciendo y construir una cultura de cuidado del medioambiente.',
    href: '/contacto',
  },
]

export default function MedioAmbientePage() {
  const [zoom, setZoom] = useState<string | null>(null)

  useEffect(() => {
    document.title = 'Educación Ambiental - Regional 15'
  }, [])

  useEffect(() => {
    if (!zoom) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setZoom(null) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [zoom])

  return (
    <main style={{ marginTop: '80px' }}>
      <section className="section" style={{ background: 'linear-gradient(135deg, #0b3d20 0%, #14532d 60%, #052e16 100%)', padding: '70px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(74,222,128,0.45), transparent)' }} />
        <div style={{ position: 'absolute', bottom: '-25%', left: '-5%', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.4), transparent)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-eyebrow" style={{ color: '#86efac', marginBottom: '12px', display: 'block' }}>EDUCACIÓN AMBIENTAL</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'white', margin: '0 0 14px', fontWeight: 800, fontFamily: "'Outfit', sans-serif", lineHeight: 1.1 }}>Concientización y Cuidado del Medio Ambiente</h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', maxWidth: '640px', lineHeight: 1.7, margin: 0 }}>
            En la Regional 15 sembramos conciencia, responsabilidad y valores. A través de los huertos escolares, Ecoheroes y las jornadas ecológicas formamos estudiantes que cuidan su entorno y construyen un futuro sostenible.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--card-bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <span className="section-eyebrow">NUESTRO COMPROMISO</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--blue-dark)', fontFamily: "'Outfit', sans-serif", margin: '10px 0 16px', lineHeight: 1.2 }}>Aprender cuidando el planeta</h2>
              <p style={{ fontSize: '0.98rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '16px' }}>
                La educación ambiental es parte de una formación integral. Cuando llevamos la educación ambiental a las escuelas no solo sembramos plantas: sembramos conciencia, responsabilidad y valores en nuestros estudiantes.
              </p>
              <p style={{ fontSize: '0.98rem', lineHeight: 1.8, color: 'var(--text-muted)', margin: 0 }}>
                Los huertos escolares vinculan lo aprendido en el aula con la realidad de las comunidades, fomentando el aprendizaje práctico, el trabajo en equipo y el respeto por los recursos naturales.
              </p>
            </div>
            <div style={{ borderRadius: '18px', overflow: 'hidden', boxShadow: '0 18px 44px rgba(0,56,118,0.15)' }}>
              <img src="/assets/img/eh.jpeg" alt="Estudiantes de la Regional 15 en iniciativas ambientales" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-body)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">VIDEO DESTACADO</span>
            <h2>Huertos Escolares en la Regional 15</h2>
            <p>Mira cómo nuestros estudiantes cultivan, aprenden y cuidan el medio ambiente desde las aulas.</p>
            <div className="section-divider" />
          </div>
          <div style={{ maxWidth: '900px', margin: '0 auto', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 18px 50px rgba(0,56,118,0.2)', background: '#000' }}>
            <video controls preload="metadata" poster="/assets/img/eh.jpeg" style={{ width: '100%', display: 'block' }}>
              <source src="/assets/videos/huertos-escolares.mp4" type="video/mp4" />
              Tu navegador no soporta reproducción de videos HTML5.
            </video>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--card-bg)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">LÍNEAS DE TRABAJO</span>
            <h2>Nuestros Pilares Ambientales</h2>
            <p>Acciones concretas con las que la Regional 15 forma ciudadanos comprometidos con el planeta.</p>
            <div className="section-divider" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '26px' }}>
            {pilares.map((p, i) => (
              <div
                key={i}
                style={{ background: 'var(--gray-light)', borderRadius: '16px', padding: '30px 26px', border: '1px solid rgba(0,56,118,0.06)', transition: 'all 0.25s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,56,118,0.1)'; e.currentTarget.style.borderColor = 'rgba(16,185,129,0.3)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = 'rgba(0,56,118,0.06)' }}
              >
                <div style={{ width: '48px', height: '48px', marginBottom: '16px', color: '#15803d' }}>
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: p.icono }} />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--blue-dark)', marginBottom: '10px', fontFamily: "'Outfit', sans-serif" }}>{p.titulo}</h3>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--text-muted)', margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-body)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">GALERÍA</span>
            <h2>Momentos Verdes</h2>
            <p>Imágenes de nuestras jornadas ambientales y huertos escolares.</p>
            <div className="section-divider" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
            {galeria.map((f, i) => (
              <figure key={i} style={{ margin: 0, borderRadius: '14px', overflow: 'hidden', cursor: 'zoom-in', background: 'var(--gray-light)', boxShadow: '0 8px 24px rgba(0,56,118,0.1)' }} onClick={() => setZoom(f.src)}>
                <img src={f.src} alt={f.caption} style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block', transition: 'transform 0.3s ease' }} />
                <figcaption style={{ fontSize: '0.8rem', color: 'var(--text-muted)', padding: '12px 14px', lineHeight: 1.5 }}>{f.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--card-bg)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">LOGROS</span>
            <h2>Avances y Reconocimientos</h2>
            <div className="section-divider" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '26px' }}>
            {logros.map((l, i) => (
              <a key={i} href={l.href} style={{ display: 'block', textDecoration: 'none', background: 'var(--gray-light)', borderRadius: '16px', padding: '30px 26px', border: '1px solid rgba(0,56,118,0.06)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg,#15803d,#22c55e)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--blue-dark)', marginBottom: '10px', fontFamily: "'Outfit', sans-serif" }}>{l.titulo}</h3>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--text-muted)', margin: 0 }}>{l.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'linear-gradient(135deg, #0b3d20 0%, #14532d 100%)', padding: '60px 0' }}>
        <div className="container text-center">
          <h2 style={{ color: 'white', fontFamily: "'Outfit', sans-serif", fontSize: '1.6rem', marginBottom: '12px' }}>¿Tienes fotos o videos de tu huerto escolar?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '560px', margin: '0 auto 24px', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Comparte el trabajo ambiental de tu centro educativo y ayúdanos a que más estudiantes se sumen al cuidado del medio ambiente.
          </p>
          <a href="/contacto" className="hero-btn-primary" style={{ display: 'inline-flex' }}>Contáctanos</a>
        </div>
      </section>

      {zoom && (
        <div
          onClick={() => setZoom(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.88)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', cursor: 'zoom-out' }}
        >
          <img src={zoom} alt="" style={{ maxWidth: '100%', maxHeight: '90vh', borderRadius: '10px', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }} />
          <button onClick={() => setZoom(null)} aria-label="Cerrar" style={{ position: 'absolute', top: '20px', right: '24px', width: '44px', height: '44px', borderRadius: '50%', border: 'none', background: 'rgba(255,255,255,0.15)', color: 'white', fontSize: '26px', cursor: 'pointer', lineHeight: 1 }}>×</button>
        </div>
      )}
    </main>
  )
}
