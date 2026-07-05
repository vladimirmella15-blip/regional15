// components/landing/ContactForm.tsx
'use client'

import React from 'react'
import SocialIcons from '@/components/shared/SocialIcons'

export default function ContactForm() {
  async function handleSalonSubmit(e: React.FormEvent) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const btn = form.querySelector('.btn-submit') as HTMLButtonElement
    const originalText = btn.textContent

    const solicitante_nombre = (document.getElementById('sr-nombre') as HTMLInputElement)?.value.trim()
    const solicitante_email = (document.getElementById('sr-email') as HTMLInputElement)?.value.trim()
    const solicitante_telefono = (document.getElementById('sr-telefono') as HTMLInputElement)?.value.trim()
    const titulo_actividad = (document.getElementById('sr-titulo') as HTMLInputElement)?.value.trim()
    const descripcion = (document.getElementById('sr-descripcion') as HTMLTextAreaElement)?.value.trim()
    const fecha_solicitada = (document.getElementById('sr-fecha') as HTMLInputElement)?.value
    const hora_inicio = (document.getElementById('sr-hora-inicio') as HTMLInputElement)?.value
    const hora_fin = (document.getElementById('sr-hora-fin') as HTMLInputElement)?.value

    if (!solicitante_nombre || !solicitante_email || !titulo_actividad || !fecha_solicitada) {
      btn.textContent = '⚠ Complete los campos obligatorios'
      btn.style.background = '#dc2626'
      setTimeout(() => { btn.textContent = originalText; btn.style.background = '' }, 3000)
      return
    }

    btn.textContent = 'Enviando...'
    btn.disabled = true

    try {
      const res = await fetch('/api/salon-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'submit',
          solicitante_nombre, solicitante_email, solicitante_telefono,
          titulo_actividad, descripcion, fecha_solicitada, hora_inicio, hora_fin
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Error al enviar')

      btn.textContent = '✓ Solicitud Enviada'
      btn.style.background = '#22c55e'
      form.reset()
    } catch (err: any) {
      btn.textContent = '✗ Error al enviar'
      btn.style.background = '#dc2626'
    }

    setTimeout(() => {
      btn.textContent = originalText
      btn.style.background = ''
      btn.disabled = false
    }, 4000)
  }

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const btn = form.querySelector('.btn-submit') as HTMLButtonElement
    const originalText = btn.textContent

    const nombre = (document.getElementById('nombre') as HTMLInputElement)?.value.trim()
    const email = (document.getElementById('email') as HTMLInputElement)?.value.trim()
    const mensaje = (document.getElementById('mensaje') as HTMLTextAreaElement)?.value.trim()
    const departamento = (document.getElementById('departamento') as HTMLSelectElement)?.value.trim()
    const asunto = (document.getElementById('asunto') as HTMLInputElement)?.value.trim()
    const telefono = (document.getElementById('telefono') as HTMLInputElement)?.value || ''

    if (!nombre || !email || !mensaje || !departamento || !asunto) {
      btn.textContent = '⚠ Complete los campos obligatorios'
      btn.style.background = '#dc2626'
      setTimeout(() => {
        btn.textContent = originalText
        btn.style.background = ''
      }, 3000)
      return
    }

    btn.textContent = 'Enviando...'
    btn.disabled = true

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, telefono, departamento, asunto, mensaje }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Error al enviar')

      btn.textContent = '✓ Mensaje Enviado'
      btn.style.background = '#22c55e'
      form.reset()
    } catch (err: any) {
      btn.textContent = '✗ Error al enviar'
      btn.style.background = '#dc2626'
    }

    setTimeout(() => {
      btn.textContent = originalText
      btn.style.background = ''
      btn.disabled = false
    }, 4000)
  }

  return (
    <section id="contacto" className="section contact-section" aria-label="Información de contacto Regional 15">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Contacto
          </span>
          <h2>Estamos Aquí para Servirte</h2>
          <p>Comunícate con la Regional 15 del MINERD para información, solicitudes o sugerencias sobre los servicios educativos en el Gran Santo Domingo.</p>
          <p style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--blue-dark)', marginTop: '8px' }}>Todos Somos Regional 15. Dios con nosotros.</p>
          <div className="section-divider"></div>
        </div>

        <div className="contact-grid">
          <div className="contact-info animate-on-scroll">
            <h3>Regional de Educación 15</h3>
            <p className="subtitle">Educación Santo Domingo | Ministerio de Educación – MINERD</p>
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" /></svg>
                </div>
                <div>
                  <strong>Dirección</strong>
                  <span><a href="https://www.google.com/maps/search/C.+Arzobispo+Portes,+Santo+Domingo+10208" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>C. Arzobispo Portes, Santo Domingo 10208, R.D.</a></span>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                </div>
                <div>
                  <strong>Teléfonos</strong>
                  <span><a href="tel:8096863598" style={{ color: 'inherit' }}>809-686-3598</a> · <a href="tel:8096869004" style={{ color: 'inherit' }}>809-686-9004</a></span>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                </div>
                <div>
                  <strong>Correo Electrónico</strong>
                  <a href="mailto:contacto@regional15.edu.do">contacto@regional15.edu.do</a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" /></svg>
                </div>
                <div>
                  <strong>Horario de Atención</strong>
                  <span>Lunes a Viernes: 8:00 a.m. – 4:00 p.m.</span>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon" style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}>
                  <svg viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
                </div>
                <div>
                  <strong>Instagram Oficial</strong>
                  <a href="https://www.instagram.com/regional_15minerd/" target="_blank" rel="noopener noreferrer">@regional_15minerd · 9,429 seguidores</a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon" style={{ background: '#1877F2' }}>
                  <svg viewBox="0 0 24 24" fill="white"><path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.72-1 1-1h2V2h-3c-2.76 0-5 2.24-5 5v1z" /></svg>
                </div>
                <div>
                  <strong>Facebook Oficial</strong>
                  <a href="https://www.facebook.com/regional15minerd/" target="_blank" rel="noopener noreferrer">Regional 15 MINERD</a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h7v2zm4-8H9V5h10v2z" /></svg>
                </div>
                <div>
                  <strong>6 Distritos Educativos</strong>
                  <span>15-01 Los Alcarrizos · 15-02 Sto. Dgo. Centro · 15-03 Sur-Central · 15-04 Noroeste · 15-05 Herrera · 15-06 Pedro Brand</span>
                </div>
              </div>
            </div>
            <div className="social-links" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <SocialIcons platform="instagram" size={20} href="https://www.instagram.com/regional_15minerd/" />
              <SocialIcons platform="facebook" size={20} href="https://www.facebook.com/regional15minerd/" />
              <a href="https://www.ministeriodeeducacion.gob.do" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Portal MINERD">
                <svg viewBox="0 0 24 24" width="18" height="18"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
              </a>
              <a href="https://ministeriodeeducacion.gob.do/transparencia/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Portal de Transparencia" style={{ background: 'var(--red)' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" /></svg>
              </a>
              <a href="https://saip.gob.do/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Solicitud de Acceso a la Información Pública (SAIP)" style={{ background: 'var(--gold)' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
              </a>
            </div>
          </div>

          <div className="animate-on-scroll">
            <form className="contact-form" id="contact-form" onSubmit={handleFormSubmit} noValidate>
              <h4>Envíanos un Mensaje</h4>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre Completo *</label>
                  <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />
                </div>
                <div className="form-group">
                  <label htmlFor="telefono">Teléfono</label>
                  <input type="tel" id="telefono" name="telefono" placeholder="(809) 000-0000" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico *</label>
                <input type="email" id="email" name="email" placeholder="tu@correo.com" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="departamento">Departamento de Destino *</label>
                  <select id="departamento" name="departamento" required>
                    <option value="">Selecciona un departamento</option>
                    <option value="Dirección Regional">Dirección Regional</option>
                    <option value="Subdirección Regional">Subdirección Regional</option>
                    <option value="Planificación y Desarrollo">Planificación y Desarrollo</option>
                    <option value="Supervisión Educativa y Control de la Calidad">Supervisión Educativa y Control de la Calidad</option>
                    <option value="Recursos Humanos">Recursos Humanos (RRHH)</option>
                    <option value="Currículo y Pedagogía">Currículo y Pedagogía</option>
                    <option value="Administración y Finanzas">Administración y Finanzas</option>
                    <option value="Tecnología de la Información (TIC)">Tecnología de la Información (TIC)</option>
                    <option value="Orientación y Psicología">Orientación y Psicología</option>
                    <option value="Participación Comunitaria">Participación Comunitaria</option>
                    <option value="Acceso a la Información (SAIP)">Acceso a la Información (SAIP)</option>
                    <option value="Comunicaciones y Relaciones Públicas">Comunicaciones y RR.PP.</option>
                    <option value="Soporte a Distritos Educativos">Soporte a Distritos Educativos</option>
                    <option value="General / Otro">Otro / General</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="asunto">Asunto *</label>
                  <input type="text" id="asunto" name="asunto" placeholder="Escribe el asunto de tu mensaje" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje *</label>
                <textarea id="mensaje" name="mensaje" rows={4} placeholder="Escribe tu mensaje aquí..." required></textarea>
              </div>
              <button type="submit" className="btn-submit">Enviar Mensaje</button>
            </form>
          </div>
        </div>

        {/* Solicitud de Salón Técnico integrada */}
        <div style={{ marginTop: '64px' }}>
          <div className="section-header animate-on-scroll">
            <span className="section-eyebrow">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ verticalAlign: 'middle', marginRight: 4 }}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>
              Salón Técnico
            </span>
            <h2>Solicitud de Uso del Salón Técnico</h2>
            <p>Complete este formulario para solicitar el uso del Salón Técnico de la Regional 15 para sus actividades educativas.</p>
            <div className="section-divider"></div>
          </div>
          <div className="animate-on-scroll" style={{ maxWidth: 600, margin: '0 auto' }}>
            <form onSubmit={handleSalonSubmit} style={{ background: '#fff', padding: 32, borderRadius: 14, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <div className="form-group">
                <label htmlFor="sr-nombre">Nombre completo *</label>
                <input type="text" id="sr-nombre" placeholder="Tu nombre" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="sr-email">Correo electrónico *</label>
                  <input type="email" id="sr-email" placeholder="tu@correo.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="sr-telefono">Teléfono</label>
                  <input type="tel" id="sr-telefono" placeholder="(809) 000-0000" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="sr-titulo">Título de la actividad *</label>
                <input type="text" id="sr-titulo" placeholder="Ej: Taller de robótica educativa" required />
              </div>
              <div className="form-group">
                <label htmlFor="sr-descripcion">Descripción</label>
                <textarea id="sr-descripcion" rows={3} placeholder="Describe brevemente la actividad..."></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="sr-fecha">Fecha deseada *</label>
                <input type="date" id="sr-fecha" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="sr-hora-inicio">Hora de inicio</label>
                  <input type="time" id="sr-hora-inicio" />
                </div>
                <div className="form-group">
                  <label htmlFor="sr-hora-fin">Hora de fin</label>
                  <input type="time" id="sr-hora-fin" />
                </div>
              </div>
              <button type="submit" className="btn-submit" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>Enviar Solicitud</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
