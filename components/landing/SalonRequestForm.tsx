'use client'
import React from 'react'

export default function SalonRequestForm() {
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const btn = form.querySelector('.btn-submit-salon') as HTMLButtonElement
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

  return (
    <section id="solicitud-salon" className="section" style={{ background: '#f9fafb' }}>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>
            Salón Técnico
          </span>
          <h2>Solicitud de Uso del Salón Técnico</h2>
          <p>Complete este formulario para solicitar el uso del Salón Técnico de la Regional 15 para sus actividades educativas.</p>
          <div className="section-divider"></div>
        </div>
        <div className="animate-on-scroll" style={{ maxWidth: 600, margin: '0 auto' }}>
          <form onSubmit={handleSubmit} style={{ background: '#fff', padding: 32, borderRadius: 14, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <div className="form-group">
              <label htmlFor="sr-nombre" style={labelStyle}>Nombre completo *</label>
              <input type="text" id="sr-nombre" placeholder="Tu nombre" required style={inputStyleS} />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="sr-email" style={labelStyle}>Correo electrónico *</label>
                <input type="email" id="sr-email" placeholder="tu@correo.com" required style={inputStyleS} />
              </div>
              <div className="form-group">
                <label htmlFor="sr-telefono" style={labelStyle}>Teléfono</label>
                <input type="tel" id="sr-telefono" placeholder="(809) 000-0000" style={inputStyleS} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="sr-titulo" style={labelStyle}>Título de la actividad *</label>
              <input type="text" id="sr-titulo" placeholder="Ej: Taller de robótica educativa" required style={inputStyleS} />
            </div>
            <div className="form-group">
              <label htmlFor="sr-descripcion" style={labelStyle}>Descripción</label>
              <textarea id="sr-descripcion" rows={3} placeholder="Describe brevemente la actividad..." style={inputStyleS}></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="sr-fecha" style={labelStyle}>Fecha deseada *</label>
              <input type="date" id="sr-fecha" required style={inputStyleS} />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="sr-hora-inicio" style={labelStyle}>Hora de inicio</label>
                <input type="time" id="sr-hora-inicio" style={inputStyleS} />
              </div>
              <div className="form-group">
                <label htmlFor="sr-hora-fin" style={labelStyle}>Hora de fin</label>
                <input type="time" id="sr-hora-fin" style={inputStyleS} />
              </div>
            </div>
            <button type="submit" className="btn-submit-salon" style={{
              width: '100%', marginTop: 8,
              background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#fff',
              border: 'none', padding: '12px 24px', borderRadius: 10,
              cursor: 'pointer', fontWeight: 700, fontSize: '1rem',
              transition: 'all 0.3s'
            }}>Enviar Solicitud</button>
          </form>
        </div>
      </div>
    </section>
  )
}

const labelStyle: React.CSSProperties = { display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: 4 }
const inputStyleS: React.CSSProperties = { width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #d1d5db', fontSize: '0.9rem', boxSizing: 'border-box' }
