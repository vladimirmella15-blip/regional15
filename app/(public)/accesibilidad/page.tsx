'use client'

import { useEffect } from 'react'

const WIDGET_FEATURES = [
  'Alto contraste',
  'Aumentar o reducir el tamaño del texto',
  'Escala de grises',
  'Contraste invertido (modo oscuro)',
  'Fondo claro',
  'Texto legible con mayor espaciado',
  'Fuente disléxica (OpenDyslexic)',
  'Subrayar encabezados',
  'Resaltar enlaces',
  'Detener animaciones',
  'Máscara de lectura',
  'Cursor grande',
  'Ocultar imágenes',
  'Lectura del contenido en voz alta (síntesis de voz en español)',
]

export default function AccesibilidadPage() {
  useEffect(() => {
    document.title = 'Enunciado de Accesibilidad | Regional 15'
  }, [])

  return (
    <main style={{ marginTop: '80px' }}>
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, var(--blue-dark) 0%, #002a5c 100%)',
          padding: '70px 0 60px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-30%',
            right: '-10%',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, var(--gold), transparent)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-20%',
            left: '-5%',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, var(--red), transparent)',
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-eyebrow" style={{ color: 'var(--gold)', marginBottom: '12px', display: 'block' }}>
            ACCESIBILIDAD
          </span>
          <h1
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: 'white',
              margin: '0 0 14px',
              fontWeight: 800,
              fontFamily: "'Outfit', sans-serif",
              lineHeight: 1.1,
            }}
          >
            Compromiso con una web inclusiva
          </h1>
          <p
            style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.82)', maxWidth: '680px', lineHeight: 1.7, margin: 0 }}
          >
            La Regional 15 del Ministerio de Educación se compromete a ofrecer un portal accesible para todas las
            personas, incluyendo aquellas con discapacidad visual, motora, auditiva o cognitiva, en línea con la Ley
            5-13 de la República Dominicana y las pautas WCAG 2.1 (nivel AA).
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="section-head">
            <span className="section-eyebrow">NUESTRO COMPROMISO</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
              Una plataforma para todos
            </h2>
          </div>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              maxWidth: 780,
              margin: '16px auto 0',
            }}
          >
            Trabajamos continuamente para mejorar la experiencia de todas las personas usuarias. Este sitio incluye un
            asistente de accesibilidad con más de 14 funciones que cada visitante puede activar según sus necesidades.
            Si encuentra alguna barrera, escríbanos: su observación nos ayuda a mejorar.
          </p>

          <div className="section" style={{ padding: '40px 0 12px' }}>
            <h3 className="section-title" style={{ fontSize: '1.35rem', textAlign: 'left' }}>
              Funciones del widget de accesibilidad
            </h3>
            <ul
              style={{
                marginTop: 20,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 12,
                listStyle: 'none',
              }}
            >
              {WIDGET_FEATURES.map(f => (
                <li
                  key={f}
                  style={{
                    background: 'var(--card-bg)',
                    border: '1px solid var(--gray-light)',
                    borderRadius: 'var(--radius-md)',
                    padding: '12px 16px',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--text-main)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    boxShadow: 'var(--shadow-xs)',
                  }}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--blue-mid)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: 28, display: 'grid', gap: 20 }}>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--gray-light)', borderRadius: 'var(--radius-lg)', padding: '24px', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 10 }}>Estándares y normativa</h3>
              <ul style={{ listStyle: 'none', display: 'grid', gap: 10, color: 'var(--text-muted)', fontSize: '0.97rem', lineHeight: 1.7 }}>
                <li>• Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1, nivel AA, del W3C.</li>
                <li>• Ley 5-13 (República Dominicana) sobre Discapacidad e igualdad de oportunidades.</li>
                <li>• Recomendaciones de la WAI-ARIA para el contenido dinámico.</li>
              </ul>
            </div>

            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--gray-light)', borderRadius: 'var(--radius-lg)', padding: '24px', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 10 }}>Tecnologías de apoyo soportadas</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.97rem', lineHeight: 1.7, margin: 0 }}>
                El portal es compatible con lectores de pantalla (JAWS, NVDA, VoiceOver), lupas de pantalla y navegación
                exclusiva por teclado. Toda la navegación y el widget pueden operarse sin ratón.
              </p>
            </div>

            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--gray-light)', borderRadius: 'var(--radius-lg)', padding: '24px', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 10 }}>Limitaciones conocidas</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.97rem', lineHeight: 1.7, margin: 0 }}>
                Algunos documentos publicados en formato PDF y ciertos videos históricos pueden carecer de versiones
                accesibles (transcripciones o subtítulos). Estamos en proceso de corregirlos. La síntesis de voz para
                leer el contenido depende del navegador y del dispositivo utilizado.
              </p>
            </div>

            <div style={{ background: 'var(--blue-lighter)', border: '1px solid var(--blue-light)', borderRadius: 'var(--radius-lg)', padding: '24px' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 10, color: 'var(--blue-dark)' }}>
                ¿Encontró una barrera?
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.97rem', lineHeight: 1.7, margin: '0 0 12px' }}>
                Escríbanos y trabajaremos para resolverlo a la brevedad.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <a
                  href="mailto:contacto@regional15.edu.do"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: 'var(--blue-dark)',
                    color: '#fff',
                    padding: '10px 18px',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                  }}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 6L2 7" /></svg>
                  contacto@regional15.edu.do
                </a>
                <a
                  href="tel:8096863598"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: '#fff',
                    color: 'var(--blue-dark)',
                    border: '2px solid var(--blue-dark)',
                    padding: '9px 18px',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                  }}
                >
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                  809-686-3598
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}