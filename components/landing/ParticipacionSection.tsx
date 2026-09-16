'use client'

import React, { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const PERFILES = [
  'Estudiante',
  'Padre o Madre',
  'Docente',
  'Director/a de Centro',
  'Personal Administrativo',
  'Ciudadano/a',
]

const DEPARTAMENTOS = [
  'Dirección Regional',
  'Subdirección Regional',
  'Planificación y Desarrollo',
  'Supervisión Educativa y Control de la Calidad',
  'Recursos Humanos',
  'Currículo y Pedagogía',
  'Administración y Finanzas',
  'Tecnología de la Información (TIC)',
  'Orientación y Psicología',
  'Participación Comunitaria',
  'Acceso a la Información (SAIP)',
  'Comunicaciones y RR.PP.',
  'General / Otro',
]

const DISTRITOS = [
  '15-01 Los Alcarrizos',
  '15-02 Santo Domingo Centro',
  '15-03 Sur-Central',
  '15-04 Noroeste',
  '15-05 Herrera',
  '15-06 Pedro Brand',
]

const PREGUNTAS: { key: string; label: string }[] = [
  { key: 'facilidad', label: 'Facilidad para encontrar información' },
  { key: 'atencion', label: 'Atención en solicitudes y trámites' },
  { key: 'utilidad', label: 'Utilidad de los servicios y programas' },
  { key: 'transparencia', label: 'Transparencia de la información publicada' },
  { key: 'trato', label: 'Trato del personal de la Regional 15' },
]

const CATEGORIAS = [
  { value: 'queja', label: 'Queja' },
  { value: 'sugerencia', label: 'Sugerencia' },
  { value: 'denuncia', label: 'Denuncia' },
  { value: 'reconocimiento', label: 'Reconocimiento' },
]

function StarRating({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="stars" role="radiogroup" aria-label="Valoración del 1 al 5">
      {[1, 2, 3, 4, 5].map(n => (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={value === n}
          aria-label={`${n} de 5`}
          className={`star ${value >= n ? 'star-on' : ''}`}
          onClick={() => onChange(n)}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
        </button>
      ))}
    </div>
  )
}

export default function ParticipacionSection() {
  const sectionRef = useScrollReveal<HTMLElement>()
  const [activeTab, setActiveTab] = useState<'encuesta' | 'buzon'>('encuesta')

  // Encuesta
  const [perfil, setPerfil] = useState('')
  const [encDepartamento, setEncDepartamento] = useState('')
  const [ratings, setRatings] = useState<Record<string, number>>({})
  const [comentario, setComentario] = useState('')
  const [encMsg, setEncMsg] = useState('')
  const [encError, setEncError] = useState(false)
  const [encLoading, setEncLoading] = useState(false)

  // Buzón
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [categoria, setCategoria] = useState('sugerencia')
  const [distrito, setDistrito] = useState('')
  const [buzDepartamento, setBuzDepartamento] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [buzMsg, setBuzMsg] = useState('')
  const [buzError, setBuzError] = useState(false)
  const [buzLoading, setBuzLoading] = useState(false)

  async function handleEncuesta(e: React.FormEvent) {
    e.preventDefault()
    if (PREGUNTAS.some(p => !ratings[p.key])) {
      setEncError(true)
      setEncMsg('Por favor valora todas las preguntas')
      return
    }
    setEncLoading(true)
    setEncMsg('')
    try {
      const res = await fetch('/api/satisfaccion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          perfil: perfil || 'Ciudadano/a',
          departamento: encDepartamento || 'General / Otro',
          comentario,
          ...ratings,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Error al enviar')
      setEncError(false)
      setEncMsg('¡Gracias! Tu opinión fue registrada correctamente.')
      setRatings({})
      setComentario('')
      setPerfil('')
      setEncDepartamento('')
    } catch (err: any) {
      setEncError(true)
      setEncMsg(err.message || 'Error al enviar la encuesta')
    }
    setEncLoading(false)
  }

  async function handleBuzon(e: React.FormEvent) {
    e.preventDefault()
    if (!mensaje.trim()) {
      setBuzError(true)
      setBuzMsg('Escribe tu mensaje antes de enviar')
      return
    }
    setBuzLoading(true)
    setBuzMsg('')
    try {
      const res = await fetch('/api/buzon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'submit',
          nombre, email, categoria, distrito,
          departamento: buzDepartamento || 'General / Otro',
          mensaje,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Error al enviar')
      setBuzError(false)
      setBuzMsg('Tu mensaje fue enviado. Gracias por tu aporte.')
      setNombre(''); setEmail(''); setDistrito(''); setBuzDepartamento(''); setMensaje(''); setCategoria('sugerencia')
    } catch (err: any) {
      setBuzError(true)
      setBuzMsg(err.message || 'Error al enviar el mensaje')
    }
    setBuzLoading(false)
  }

  return (
    <section id="participacion" ref={sectionRef} className="section participacion-section" aria-label="Participación ciudadana Regional 15">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
            Participación Ciudadana
          </span>
          <h2>Tu Opinión Nos Ayuda a Mejorar</h2>
          <p>En la Regional 15 escuchamos a nuestra comunidad educativa. Comparte tu nivel de satisfacción y envía tus quejas, sugerencias, denuncias o reconocimientos. Tu aporte fortalece la calidad de nuestros servicios.</p>
          <div className="section-divider"></div>
        </div>

        <div className="participacion-tabs animate-on-scroll" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'encuesta'}
            className={`participacion-tab ${activeTab === 'encuesta' ? 'active' : ''}`}
            onClick={() => setActiveTab('encuesta')}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
            Encuesta de Satisfacción
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'buzon'}
            className={`participacion-tab ${activeTab === 'buzon' ? 'active' : ''}`}
            onClick={() => setActiveTab('buzon')}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-6l-2 3h-4l-2-3H2" /><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /></svg>
            Buzón de Quejas y Sugerencias
          </button>
        </div>

        <div className="participacion-panel animate-on-scroll">
          {activeTab === 'encuesta' ? (
            <form className="participacion-form" onSubmit={handleEncuesta} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="p-perfil">¿Cuál es tu perfil?</label>
                  <select id="p-perfil" value={perfil} onChange={e => setPerfil(e.target.value)}>
                    <option value="">Selecciona una opción</option>
                    {PERFILES.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="p-dep">Servicio o departamento evaluado</label>
                  <select id="p-dep" value={encDepartamento} onChange={e => setEncDepartamento(e.target.value)}>
                    <option value="">Selecciona un departamento</option>
                    {DEPARTAMENTOS.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
              </div>

              <div className="rating-list">
                {PREGUNTAS.map(p => (
                  <div className="rating-row" key={p.key}>
                    <span className="rating-label">{p.label}</span>
                    <StarRating value={ratings[p.key] || 0} onChange={v => setRatings(prev => ({ ...prev, [p.key]: v }))} />
                  </div>
                ))}
              </div>

              <div className="form-group">
                <label htmlFor="p-comentario">Comentario (opcional)</label>
                <textarea id="p-comentario" rows={3} maxLength={1000} value={comentario} onChange={e => setComentario(e.target.value)} placeholder="¿Qué podemos mejorar?" />
              </div>

              <button type="submit" className="btn-submit" disabled={encLoading}>
                {encLoading ? 'Enviando...' : 'Enviar Encuesta'}
              </button>
              {encMsg && <p className={`participacion-msg ${encError ? 'error' : 'ok'}`}>{encMsg}</p>}
            </form>
          ) : (
            <form className="participacion-form" onSubmit={handleBuzon} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="b-nombre">Nombre (opcional)</label>
                  <input id="b-nombre" type="text" value={nombre} onChange={e => setNombre(e.target.value)} placeholder='Tu nombre o "Anónimo"' />
                </div>
                <div className="form-group">
                  <label htmlFor="b-email">Correo (opcional, para respuesta)</label>
                  <input id="b-email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="tu@correo.com" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="b-categoria">Tipo de mensaje *</label>
                  <select id="b-categoria" value={categoria} onChange={e => setCategoria(e.target.value)}>
                    {CATEGORIAS.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="b-distrito">Distrito o centro (opcional)</label>
                  <select id="b-distrito" value={distrito} onChange={e => setDistrito(e.target.value)}>
                    <option value="">Selecciona un distrito</option>
                    {DISTRITOS.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="b-dep">Departamento de destino (opcional)</label>
                <select id="b-dep" value={buzDepartamento} onChange={e => setBuzDepartamento(e.target.value)}>
                  <option value="">Selecciona un departamento</option>
                  {DEPARTAMENTOS.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="b-mensaje">Mensaje *</label>
                <textarea id="b-mensaje" rows={4} maxLength={2000} value={mensaje} onChange={e => setMensaje(e.target.value)} placeholder="Describe tu queja, sugerencia, denuncia o reconocimiento..." required />
              </div>

              <button type="submit" className="btn-submit" disabled={buzLoading}>
                {buzLoading ? 'Enviando...' : 'Enviar al Buzón'}
              </button>
              {buzMsg && <p className={`participacion-msg ${buzError ? 'error' : 'ok'}`}>{buzMsg}</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
