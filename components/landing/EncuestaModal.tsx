'use client'

import { useEffect, useState } from 'react'
import StarRating from '@/components/shared/StarRating'
import { PERFILES, DEPARTAMENTOS, PREGUNTAS } from '@/lib/satisfaccion'

const STORAGE_KEY = 'r15_encuesta_satisfaccion'

export default function EncuestaModal() {
  const [open, setOpen] = useState(false)
  const [perfil, setPerfil] = useState('')
  const [departamento, setDepartamento] = useState('')
  const [ratings, setRatings] = useState<Record<string, number>>({})
  const [comentario, setComentario] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [msg, setMsg] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return
    } catch {}
    const t = setTimeout(() => setOpen(true), 6000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') cerrar() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  function cerrar() {
    try { sessionStorage.setItem(STORAGE_KEY, 'vista') } catch {}
    setOpen(false)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (PREGUNTAS.some(p => !ratings[p.key])) {
      setMsg('Por favor valora todas las preguntas')
      return
    }
    setLoading(true)
    setMsg('')
    try {
      const res = await fetch('/api/satisfaccion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          perfil: perfil || 'Ciudadano/a',
          departamento: departamento || 'General / Otro',
          comentario,
          origen: 'popup',
          ...ratings,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Error al enviar')
      try { sessionStorage.setItem(STORAGE_KEY, 'respondida') } catch {}
      setDone(true)
      setTimeout(() => setOpen(false), 2600)
    } catch (err: any) {
      setMsg(err.message || 'Error al enviar la encuesta')
    }
    setLoading(false)
  }

  if (!open) return null

  return (
    <div
      className="encuesta-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="encuesta-modal-title"
      onClick={e => { if (e.target === e.currentTarget) cerrar() }}
    >
      <div className="encuesta-modal">
        <button className="encuesta-close" onClick={cerrar} aria-label="Cerrar encuesta">×</button>

        {done ? (
          <div className="encuesta-done">
            <div className="encuesta-done-icon">
              <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
            </div>
            <h3>¡Gracias por tu opinión!</h3>
            <p>Tu aporte nos ayuda a seguir mejorando la calidad de nuestros servicios.</p>
          </div>
        ) : (
          <>
            <div className="encuesta-modal-head">
              <span className="encuesta-modal-eyebrow">Participación Ciudadana</span>
              <h3 id="encuesta-modal-title">¿Qué tal te ha parecido la plataforma?</h3>
              <p>Con tu respuesta ayudas a la Regional 15 a mejorar. Solo toma un minuto.</p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="em-perfil">¿Cuál es tu perfil?</label>
                  <select id="em-perfil" value={perfil} onChange={e => setPerfil(e.target.value)}>
                    <option value="">Selecciona una opción</option>
                    {PERFILES.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="em-dep">Departamento evaluado</label>
                  <select id="em-dep" value={departamento} onChange={e => setDepartamento(e.target.value)}>
                    <option value="">Selecciona un departamento</option>
                    {DEPARTAMENTOS.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
              </div>

              <div className="rating-list">
                {PREGUNTAS.map(p => (
                  <div className="rating-row" key={p.key}>
                    <span className="rating-label">{p.label}</span>
                    <StarRating size={22} value={ratings[p.key] || 0} onChange={v => setRatings(prev => ({ ...prev, [p.key]: v }))} />
                  </div>
                ))}
              </div>

              <div className="form-group">
                <label htmlFor="em-comentario">Comentario (opcional)</label>
                <textarea id="em-comentario" rows={2} maxLength={1000} value={comentario} onChange={e => setComentario(e.target.value)} placeholder="¿Qué podemos mejorar?" />
              </div>

              {msg && <p className="participacion-msg error">{msg}</p>}

              <div className="encuesta-actions">
                <button type="button" className="encuesta-later" onClick={cerrar}>Ahora no</button>
                <button type="submit" className="btn-submit" disabled={loading}>
                  {loading ? 'Enviando...' : 'Enviar Encuesta'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
