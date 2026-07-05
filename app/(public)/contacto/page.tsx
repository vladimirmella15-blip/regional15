'use client'

import { useEffect, useState } from 'react'

export default function ContactoPage() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  useEffect(() => { document.title = 'Contacto – Regional 15' }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    const fd = new FormData(e.target as HTMLFormElement)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(fd)),
      })
      if (res.ok) setSent(true)
    } catch {}
    setSending(false)
  }

  return (
    <main style={{ marginTop: '80px' }}>
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--blue-dark) 0%, #002a5c 100%)', padding: '70px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, var(--gold), transparent)' }} />
        <div style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, var(--red), transparent)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-eyebrow" style={{ color: 'var(--gold)', marginBottom: '12px', display: 'block' }}>CONTACTO</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'white', margin: '0 0 14px', fontWeight: 800, fontFamily: "'Outfit', sans-serif", lineHeight: 1.1 }}>Contáctenos</h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.82)', maxWidth: '620px', lineHeight: 1.7, margin: 0 }}>
            Estamos para servirle. Comuníquese con la Regional 15 para cualquier consulta, sugerencia o solicitud de información.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--card-bg)' }}>
        <div className="container">
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
            {/* Form */}
            <div>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--blue-dark)', fontFamily: "'Outfit', sans-serif", marginBottom: '8px' }}>Envíenos un Mensaje</h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '24px' }}>Complete el formulario y le responderemos a la brevedad.</p>
              {sent ? (
                <div style={{ background: 'var(--blue-lighter)', borderRadius: '14px', padding: '32px', textAlign: 'center' }}>
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="var(--blue-dark)" strokeWidth="1.5" style={{ marginBottom: '12px' }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--blue-dark)', marginBottom: '6px' }}>Mensaje Enviado</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Gracias por contactarnos. Le responderemos pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <input type="text" name="nombre" required placeholder="Nombre completo" style={{ width: '100%', padding: '12px 14px', border: '2px solid #e5e7eb', borderRadius: '10px', fontSize: '14px', fontFamily: 'inherit', outline: 'none', transition: 'border-color 0.2s' }}
                      onFocus={e => e.currentTarget.style.borderColor = 'var(--blue-dark)'}
                      onBlur={e => e.currentTarget.style.borderColor = '#e5e7eb'} />
                    <input type="email" name="email" required placeholder="Correo electrónico" style={{ width: '100%', padding: '12px 14px', border: '2px solid #e5e7eb', borderRadius: '10px', fontSize: '14px', fontFamily: 'inherit', outline: 'none', transition: 'border-color 0.2s' }}
                      onFocus={e => e.currentTarget.style.borderColor = 'var(--blue-dark)'}
                      onBlur={e => e.currentTarget.style.borderColor = '#e5e7eb'} />
                  </div>
                  <input type="text" name="asunto" required placeholder="Asunto" style={{ width: '100%', padding: '12px 14px', border: '2px solid #e5e7eb', borderRadius: '10px', fontSize: '14px', fontFamily: 'inherit', outline: 'none', transition: 'border-color 0.2s' }}
                    onFocus={e => e.currentTarget.style.borderColor = 'var(--blue-dark)'}
                    onBlur={e => e.currentTarget.style.borderColor = '#e5e7eb'} />
                  <textarea name="mensaje" required placeholder="Escriba su mensaje aquí..." rows={5} style={{ width: '100%', padding: '12px 14px', border: '2px solid #e5e7eb', borderRadius: '10px', fontSize: '14px', fontFamily: 'inherit', outline: 'none', resize: 'vertical', transition: 'border-color 0.2s' }}
                    onFocus={e => e.currentTarget.style.borderColor = 'var(--blue-dark)'}
                    onBlur={e => e.currentTarget.style.borderColor = '#e5e7eb'} />
                  <button type="submit" disabled={sending} className="hero-btn-primary" style={{ alignSelf: 'flex-start', padding: '12px 28px', border: 'none', cursor: 'pointer', fontSize: '0.9rem', opacity: sending ? 0.7 : 1 }}>
                    {sending ? 'Enviando...' : 'Enviar Mensaje'}
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--blue-dark)', fontFamily: "'Outfit', sans-serif", marginBottom: '8px' }}>Información de Contacto</h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '24px' }}>Estamos ubicados en Santo Domingo, República Dominicana.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { icon: 'M6 10L12 15L18 10', title: 'Dirección', desc: 'C. Arzobispo Portes, Santo Domingo 10208', svg2: 'M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v.01M12 14v.01M16 14v.01', stroke: '1.5' },
                  { icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z', title: 'Teléfono', desc: '809-686-3598', stroke: '2' },
                  { icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z', title: 'Correo Electrónico', desc: 'info@regional15.edu.do', stroke: '1.5', svg2: 'M22 6l-10 7L2 6' },
                  { icon: 'M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z', title: 'Horario', desc: 'Lunes a Viernes · 8:00 AM – 4:30 PM', stroke: '1.5' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '16px', background: 'var(--gray-light)', borderRadius: '12px', border: '1px solid rgba(0,56,118,0.06)' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--blue-lighter)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--blue-dark)' }}>
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={item.stroke} strokeLinecap="round" strokeLinejoin="round">
                        <path d={item.icon} />
                        {item.svg2 && <path d={item.svg2} />}
                      </svg>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--blue-dark)', marginBottom: '2px' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '24px', padding: '20px', background: 'var(--blue-dark)', borderRadius: '14px', textAlign: 'center' }}>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem', marginBottom: '12px' }}>Síguenos en nuestras redes sociales</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                  {[
                    { href: 'https://www.instagram.com/regional_15minerd/', label: 'Instagram' },
                    { href: 'https://www.facebook.com/regional15minerd/', label: 'Facebook' },
                  ].map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(255,255,255,0.12)', color: 'white', padding: '8px 18px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none', transition: 'all 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
                    >{s.label}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
