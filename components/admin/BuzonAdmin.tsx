'use client'
import { useState, useEffect } from 'react'

const ESTADOS = [
  { value: 'recibida', label: 'Recibida', bg: '#fef3c7', color: '#b45309' },
  { value: 'en_proceso', label: 'En proceso', bg: '#dbeafe', color: '#1d4ed8' },
  { value: 'resuelta', label: 'Resuelta', bg: '#d1fae5', color: '#16a34a' },
]

const CATEGORIAS: Record<string, { label: string; bg: string; color: string }> = {
  queja: { label: 'Queja', bg: '#fee2e2', color: '#dc2626' },
  sugerencia: { label: 'Sugerencia', bg: '#e0e7ff', color: '#4338ca' },
  denuncia: { label: 'Denuncia', bg: '#fce7f3', color: '#be185d' },
  reconocimiento: { label: 'Reconocimiento', bg: '#dcfce7', color: '#15803d' },
}

export default function BuzonAdmin() {
  const [items, setItems] = useState<any[]>([])
  const [filter, setFilter] = useState('todas')
  const [loading, setLoading] = useState(true)
  const [respuesta, setRespuesta] = useState('')
  const [replyFor, setReplyFor] = useState<string | null>(null)

  async function load() {
    setLoading(true)
    try {
      const res = await fetch('/api/buzon')
      if (res.ok) setItems(await res.json())
    } catch {}
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  async function cambiarEstado(id: string, estado: string, respuestaTexto: string) {
    await fetch('/api/buzon', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'estado', id, estado, respuesta: respuestaTexto }),
    })
    setRespuesta('')
    setReplyFor(null)
    load()
  }

  async function handleDelete(id: string) {
    if (!confirm('¿Eliminar esta entrada del buzón?')) return
    await fetch('/api/buzon', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'delete', id }),
    })
    setItems(prev => prev.filter(i => i.id !== id))
  }

  const filtered = filter === 'todas' ? items : items.filter(r => r.estado === filter)

  if (loading) return <p style={{ color: '#9ca3af', textAlign: 'center', padding: 40 }}>Cargando buzón…</p>

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, flexWrap: 'wrap', gap: 10 }}>
        <h3 style={{ margin: 0 }}>Buzón de Quejas y Sugerencias</h3>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {['todas', 'recibida', 'en_proceso', 'resuelta'].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              background: filter === f ? 'var(--blue-dark)' : '#f3f4f6',
              color: filter === f ? '#fff' : '#374151',
              border: 'none', padding: '6px 14px', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.8rem'
            }}>{f === 'en_proceso' ? 'En proceso' : f.charAt(0).toUpperCase() + f.slice(1)}</button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p style={{ color: '#9ca3af', textAlign: 'center', padding: 40 }}>No hay entradas {filter !== 'todas' ? 'con ese estado' : 'en el buzón'}</p>
      ) : (
        <div style={{ display: 'grid', gap: 12 }}>
          {filtered.map(r => {
            const cat = CATEGORIAS[r.categoria] || { label: r.categoria, bg: '#e2e8f0', color: '#475569' }
            const est = ESTADOS.find(e => e.value === r.estado) || ESTADOS[0]
            return (
              <div key={r.id} className="card" style={{ padding: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 8, gap: 10 }}>
                  <div>
                    <span style={{ background: cat.bg, color: cat.color, padding: '3px 10px', borderRadius: 12, fontSize: '.72rem', fontWeight: 700, marginRight: 8 }}>{cat.label.toUpperCase()}</span>
                    <strong style={{ fontSize: '.9rem', color: '#003876' }}>{r.nombre || 'Anónimo'}</strong>
                    <div style={{ fontSize: '.78rem', color: '#64748b', marginTop: 4 }}>
                      {r.email ? `${r.email} · ` : ''}{r.distrito ? `${r.distrito} · ` : ''}{r.departamento || 'General'} · {r.created_at ? new Date(r.created_at).toLocaleString('es-DO') : ''}
                    </div>
                  </div>
                  <span style={{ background: est.bg, color: est.color, padding: '4px 12px', borderRadius: 12, fontSize: '0.72rem', fontWeight: 700, whiteSpace: 'nowrap' }}>{est.label.toUpperCase()}</span>
                </div>

                <p style={{ fontSize: '.88rem', color: '#374151', margin: '0 0 10px', whiteSpace: 'pre-wrap' }}>{r.mensaje}</p>
                {r.respuesta && (
                  <p style={{ fontSize: '.82rem', color: '#16a34a', background: '#f0fdf4', borderLeft: '3px solid #22c55e', padding: '8px 12px', margin: '0 0 10px', borderRadius: 4 }}>
                    <strong>Respuesta:</strong> {r.respuesta}
                  </p>
                )}

                <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                  <button className="btn btn-warning btn-sm" onClick={() => cambiarEstado(r.id, 'en_proceso', r.respuesta || '')}>En proceso</button>
                  <button className="btn btn-success btn-sm" onClick={() => cambiarEstado(r.id, 'resuelta', r.respuesta || '')}>Marcar resuelta</button>
                  <button className="btn btn-ghost btn-sm" onClick={() => { setReplyFor(replyFor === r.id ? null : r.id); setRespuesta(r.respuesta || '') }}>Responder</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(r.id)}>Eliminar</button>
                </div>

                {replyFor === r.id && (
                  <div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
                    <input
                      value={respuesta}
                      onChange={e => setRespuesta(e.target.value)}
                      placeholder="Escribe la respuesta al ciudadano…"
                      style={{ flex: 1, padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6, fontSize: '.85rem' }}
                    />
                    <button className="btn btn-primary btn-sm" onClick={() => cambiarEstado(r.id, r.estado, respuesta)}>Guardar</button>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
