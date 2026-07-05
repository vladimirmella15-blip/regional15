'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function NosotrosPage() {
  useEffect(() => {
    document.title = 'Nosotros – Regional 15'
  }, [])

  return (
    <main style={{ marginTop: '80px' }}>
      {/* ── HERO ── */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--blue-dark) 0%, #002a5c 100%)', padding: '80px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06 }}>
          <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, var(--gold), transparent)' }} />
          <div style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, var(--red), transparent)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-eyebrow" style={{ color: 'var(--gold)', marginBottom: '12px', display: 'block' }}>CONÓCENOS</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: 'white', margin: '0 0 16px', fontWeight: 800, fontFamily: "'Outfit', sans-serif", lineHeight: 1.1 }}>Regional 15 de Educación</h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', maxWidth: '680px', lineHeight: 1.7, margin: 0 }}>
            La Regional 15 del Ministerio de Educación de la República Dominicana (MINERD) tiene la misión de garantizar una educación inclusiva, equitativa y de calidad para todos los estudiantes de la provincia Santo Domingo.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="section" style={{ background: 'var(--card-bg)' }}>
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', fontFamily: "'Outfit', sans-serif", marginBottom: '20px' }}>¿Quiénes Somos?</h2>
            <div className="section-divider" style={{ marginLeft: 0 }} />
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-main)', marginBottom: '16px' }}>
              La Regional 15 es una de las 18 regionales educativas del Ministerio de Educación de la República Dominicana. Con sede en la provincia Santo Domingo, nuestra regional agrupa <strong>6 distritos educativos</strong> que abarcan los municipios Santo Domingo Este, Santo Domingo Oeste, Santo Domingo Norte, Los Alcarrizos, Pedro Brand y zonas aledañas.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-main)', marginBottom: '16px' }}>
              Atendemos una población estudiantil de más de <strong>300,000 estudiantes</strong> en centros educativos públicos y privados, guiados por el compromiso de formar ciudadanos íntegros, críticos y capaces de transformar su realidad.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-main)' }}>
              Bajo la dirección del <strong>Lic. Eddy Chávez</strong>, nuestra gestión se enfoca en la mejora continua de los procesos pedagógicos, la capacitación docente, la modernización de infraestructuras escolares y el fortalecimiento de la participación comunitaria.
            </p>
          </div>
        </div>
      </section>

      {/* ── MISIÓN / VISIÓN ── */}
      <section className="section" style={{ background: 'var(--bg-alt2)' }}>
        <div className="container-lg">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <div className="stat-card" style={{ padding: '36px', textAlign: 'left' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0,56,118,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--blue-dark)" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--blue-dark)', fontFamily: "'Outfit', sans-serif", marginBottom: '12px' }}>Nuestra Visión</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                Ser una regional educativa modelo a nivel nacional, reconocida por la excelencia académica, la innovación pedagógica y el compromiso con la formación integral de cada estudiante, contribuyendo al desarrollo sostenible de la República Dominicana.
              </p>
            </div>
            <div className="stat-card" style={{ padding: '36px', textAlign: 'left' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(237,35,42,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--red)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg>
              </div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--blue-dark)', fontFamily: "'Outfit', sans-serif", marginBottom: '12px' }}>Nuestra Misión</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                Garantizar una educación inclusiva, equitativa y de calidad, promoviendo oportunidades de aprendizaje para todos los estudiantes de la Regional 15, mediante una gestión eficiente, participativa y transparente que potencie el desarrollo profesional docente y la transformación curricular.
              </p>
            </div>
            <div className="stat-card" style={{ padding: '36px', textAlign: 'left' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(240,165,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--gold)" strokeWidth="2"><path d="M6 3h12l4 6-10 13L2 9z"/><path d="M11 3 8 9l4 13 4-13-3-6"/></svg>
              </div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--blue-dark)', fontFamily: "'Outfit', sans-serif", marginBottom: '12px' }}>Nuestros Valores</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Transparencia', 'Equidad', 'Innovación', 'Compromiso', 'Respeto', 'Solidaridad'].map(v => (
                  <span key={v} style={{ background: 'rgba(240,165,0,0.12)', color: 'var(--gold-dark, #c48900)', padding: '4px 14px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>{v}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUÉ HACEMOS ── */}
      <section className="section" style={{ background: 'var(--card-bg)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">NUESTRA LABOR</span>
            <h2>¿Qué Hacemos por la Educación?</h2>
            <div className="section-divider" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginTop: '40px' }}>
            {[
              { icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', title: 'Gestión Pedagógica', desc: 'Supervisamos y acompañamos los procesos de enseñanza-aprendizaje en más de 800 centros educativos, asegurando el cumplimiento del currículo nacional.' },
              { icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z', title: 'Formación Docente', desc: 'Implementamos programas continuos de capacitación y actualización para los miles de docentes de la regional, promoviendo metodologías innovadoras.' },
              { icon: 'M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z', title: 'Infraestructura Escolar', desc: 'Gestionamos la construcción, mantenimiento y equipamiento de planteles escolares para garantizar espacios dignos y seguros para el aprendizaje.' },
              { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Innovación Educativa', desc: 'Impulsamos programas como Educación DIGITALES, SIGACOM y Edyntra para integrar la tecnología y la innovación en el aula.' },
              { icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z', title: 'Participación Comunitaria', desc: 'Fomentamos la integración de familias, comunidades y aliados estratégicos en el proceso educativo a través de juntas y comités participativos.' },
              { icon: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605', title: 'Transparencia', desc: 'Mantenemos una gestión abierta y accesible, publicando informes de gestión, ejecución presupuestaria y resultados educativos para la ciudadanía.' },
            ].map((item, idx) => (
              <div key={idx} style={{ background: 'var(--gray-light)', borderRadius: '12px', padding: '28px', border: '1px solid rgba(0,56,118,0.06)', transition: 'all 0.25s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,56,118,0.1)'; e.currentTarget.style.borderColor = 'rgba(0,56,118,0.15)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = '' }}
              >
                <div style={{ width: '40px', height: '40px', marginBottom: '14px', color: 'var(--blue-dark)' }}>
                  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={item.icon} />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--blue-dark)', marginBottom: '8px', fontFamily: "'Outfit', sans-serif" }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DATOS CLAVE ── */}
      <section className="section" style={{ background: 'var(--blue-dark)', padding: '60px 0' }}>
        <div className="container-lg">
          <div className="section-header text-center">
            <span className="section-eyebrow" style={{ color: 'var(--gold)' }}>IMPACTO REGIONAL</span>
            <h2 style={{ color: 'white' }}>Nuestra Regional en Cifras</h2>
            <div className="section-divider" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '24px', marginTop: '40px' }}>
            {[
              { num: '6', label: 'Distritos Educativos', color: 'var(--gold)' },
              { num: '800+', label: 'Centros Educativos', color: 'white' },
              { num: '300K+', label: 'Estudiantes', color: 'var(--gold)' },
              { num: '10K+', label: 'Docentes', color: 'white' },
              { num: '25+', label: 'Programas Activos', color: 'var(--gold)' },
            ].map((d, idx) => (
              <div key={idx} style={{ textAlign: 'center', padding: '24px' }}>
                <div style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: d.color, fontFamily: "'Outfit', sans-serif", lineHeight: 1, marginBottom: '8px' }}>{d.num}</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>{d.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROYECTOS DESTACADOS ── */}
      <section className="section" style={{ background: 'var(--bg-alt2)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">PROGRAMAS DESTACADOS</span>
            <h2>Iniciativas que Transforman la Educación</h2>
            <div className="section-divider" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', marginTop: '40px' }}>
            {[
              { title: 'Gala Regional de Artes', desc: 'Evento anual que celebra el talento artístico de los estudiantes en música, danza, teatro y artes visuales, fomentando la creatividad y la expresión cultural.', img: '/assets/img/gala_regional.png' },
              { title: 'PRECE 2025', desc: 'Programa de Reconocimiento a la Excelencia Educativa que galardona a los centros educativos con mejores resultados académicos y de gestión.', img: '/assets/img/bronce_prece.png' },
              { title: 'ExpoFeria Pedagógica', desc: 'Plataforma de exhibición de proyectos pedagógicos innovadores desarrollados por docentes y estudiantes de toda la regional.', img: '/assets/img/expoferia_2025_1.jpg' },
              { title: 'Educación DIGITALES', desc: 'Programa de transformación digital que integra herramientas tecnológicas en los procesos de enseñanza-aprendizaje en las aulas.', img: '/assets/img/education_event.png' },
            ].map((prog, idx) => (
              <div key={idx} style={{ background: 'var(--card-bg)', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,56,118,0.08)', border: '1px solid rgba(0,56,118,0.08)', transition: 'all 0.25s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,56,118,0.14)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
              >
                <div style={{ position: 'relative', height: '180px', background: 'var(--gray-light)' }}>
                  <Image src={prog.img} alt={prog.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 300px" />
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--blue-dark)', marginBottom: '8px', fontFamily: "'Outfit', sans-serif" }}>{prog.title}</h3>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 }}>{prog.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--red) 0%, #cc1f2a 100%)', padding: '60px 0' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', color: 'white', fontFamily: "'Outfit', sans-serif", marginBottom: '12px' }}>Formando el Futuro de la República Dominicana</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto 28px', fontSize: '1rem' }}>
          Seguimos trabajando cada día por una educación de calidad para nuestros estudiantes. Conoce más sobre nuestros programas y servicios.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/#servicios" style={{ background: 'white', color: 'var(--red)', padding: '12px 28px', borderRadius: '8px', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.2s' }}>Ver Servicios</a>
            <a href="/#contacto" style={{ background: 'transparent', color: 'white', padding: '12px 28px', borderRadius: '8px', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.5)', transition: 'all 0.2s' }}>Contáctenos</a>
          </div>
        </div>
      </section>
    </main>
  )
}
