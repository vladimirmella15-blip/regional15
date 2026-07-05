'use client'

import { useEffect } from 'react'

const serviciosList = [
  { icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z', title: 'Gestión de Centros Educativos', desc: 'Supervisamos y acompañamos más de 800 centros educativos públicos y privados en los 6 distritos, asegurando el cumplimiento del calendario escolar y el currículo nacional.' },
  { icon: 'M4.26 10.147a60.438 60.438 0 0 0-.491 6.477A48.62 48.62 0 0 1 12 21.738a48.62 48.62 0 0 1 8.232-5.114 60.24 60.24 0 0 0-.49-6.477M6.53 3.948a48.21 48.21 0 0 0 5.47 2.182 48.21 48.21 0 0 0 5.47-2.182', title: 'Formación Docente Continua', desc: 'Programas de capacitación y actualización para los miles de docentes de la Regional, con talleres, diplomados y cursos en alianza con INAFOCAM, ISFODOSU y universidades.' },
  { icon: 'M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z', title: 'Infraestructura y Mantenimiento Escolar', desc: 'Gestión de construcción, ampliación, reparación y equipamiento de planteles escolares para garantizar espacios dignos, seguros y accesibles para la comunidad educativa.' },
  { icon: 'M15.75 10.5l4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z', title: 'Plataformas Digitales Educativas', desc: 'Administración e integración de herramientas tecnológicas como SIGACOM, Edyntra y Educación DIGITALES para modernizar los procesos pedagógicos y administrativos.' },
  { icon: 'M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z', title: 'Participación y Vinculación Comunitaria', desc: 'Fomento de la integración de familias, comités de cursos, juntas distritales y aliados estratégicos en el proceso educativo para fortalecer la gestión participativa.' },
  { icon: 'M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605', title: 'Transparencia y Rendición de Cuentas', desc: 'Publicación periódica de informes de gestión, ejecución presupuestaria, nóminas, resultados académicos y procesos de compras para garantizar la transparencia institucional.' },
  { icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z', title: 'Acompañamiento Psicopedagógico', desc: 'Orientación y apoyo a estudiantes con necesidades educativas especiales, así como programas de convivencia escolar, prevención de violencia y promoción de la salud mental.' },
  { icon: 'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z', title: 'Programa de Alimentación Escolar', desc: 'Coordinación del servicio de alimentación en centros educativos públicos para garantizar la nutrición adecuada de los estudiantes durante la jornada escolar.' },
]

export default function ServiciosPage() {
  useEffect(() => { document.title = 'Servicios – Regional 15' }, [])

  return (
    <main style={{ marginTop: '80px' }}>
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--blue-dark) 0%, #002a5c 100%)', padding: '70px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, var(--gold), transparent)' }} />
        <div style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, var(--red), transparent)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-eyebrow" style={{ color: 'var(--gold)', marginBottom: '12px', display: 'block' }}>SERVICIOS INSTITUCIONALES</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'white', margin: '0 0 14px', fontWeight: 800, fontFamily: "'Outfit', sans-serif", lineHeight: 1.1 }}>Servicios Educativos</h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.82)', maxWidth: '620px', lineHeight: 1.7, margin: 0 }}>
            La Regional 15 ofrece una amplia gama de servicios para garantizar una educación de calidad a los más de 300,000 estudiantes de los 6 distritos del Gran Santo Domingo.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--card-bg)' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2>Nuestros Servicios</h2>
            <div className="section-divider" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px', marginTop: '20px' }}>
            {serviciosList.map((s, i) => (
              <div key={i} style={{ background: 'var(--gray-light)', borderRadius: '16px', padding: '32px 28px', border: '1px solid rgba(0,56,118,0.06)', transition: 'all 0.25s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,56,118,0.1)'; e.currentTarget.style.borderColor = 'rgba(0,56,118,0.15)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = '' }}
              >
                <div style={{ width: '44px', height: '44px', marginBottom: '16px', color: 'var(--blue-dark)' }}>
                  <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={s.icon} /></svg>
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--blue-dark)', marginBottom: '10px', fontFamily: "'Outfit', sans-serif" }}>{s.title}</h3>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--text-muted)', margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--blue-dark)', padding: '50px 0' }}>
        <div className="container text-center">
          <h2 style={{ color: 'white', fontFamily: "'Outfit', sans-serif", fontSize: '1.5rem', marginBottom: '12px' }}>¿Necesitas un servicio específico?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 24px', fontSize: '0.95rem' }}>Contáctanos y te orientaremos sobre los servicios disponibles para tu centro educativo o comunidad.</p>
          <a href="/contacto" className="hero-btn-primary" style={{ display: 'inline-flex' }}>Contáctenos</a>
        </div>
      </section>
    </main>
  )
}
