'use client'
import { useState, useEffect } from 'react'

const PREGUNTAS = [
  { key: 'facilidad', label: 'Facilidad para encontrar información' },
  { key: 'atencion', label: 'Atención en solicitudes y trámites' },
  { key: 'utilidad', label: 'Utilidad de los servicios y programas' },
  { key: 'transparencia', label: 'Transparencia de la información' },
  { key: 'trato', label: 'Trato del personal' },
]

function Stars({ value }: { value: number }) {
  return (
    <span style={{ color: '#f59e0b', letterSpacing: 1 }} aria-label={`${value} de 5`}>
      {'★'.repeat(Math.round(value))}{'☆'.repeat(5 - Math.round(value))}
    </span>
  )
}

export default function EncuestasAdmin() {
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  async function load() {
    setLoading(true)
    try {
      const res = await fetch('/api/satisfaccion')
      if (res.ok) setItems(await res.json())
    } catch {}
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  async function handleDelete(id: string) {
    if (!confirm('¿Eliminar esta respuesta de encuesta?')) return
    await fetch('/api/satisfaccion', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    setItems(prev => prev.filter(i => i.id !== id))
  }

  const total = items.length
  const promedios = PREGUNTAS.map(p => ({
    ...p,
    avg: total ? items.reduce((s, i) => s + (Number(i[p.key]) || 0), 0) / total : 0,
  }))
  const promedioGeneral = total ? promedios.reduce((s, p) => s + p.avg, 0) / PREGUNTAS.length : 0
  const distribucion = [1, 2, 3, 4, 5].map(n => ({
    n,
    count: items.reduce((s, i) => s + PREGUNTAS.filter(p => Number(i[p.key]) === n).length, 0),
  }))
  const maxDist = Math.max(1, ...distribucion.map(d => d.count))

  if (loading) return <p style={{ color: '#9ca3af', textAlign: 'center', padding: 40 }}>Cargando encuestas…</p>

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <h3 style={{ margin: 0 }}>Encuesta de Satisfacción</h3>
        <button className="btn btn-ghost btn-sm" onClick={load}>Actualizar</button>
      </div>

      {total === 0 ? (
        <p style={{ color: '#9ca3af', textAlign: 'center', padding: 40 }}>Aún no hay respuestas registradas</p>
      ) : (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 12, marginBottom: 20 }}>
            <div className="card" style={{ padding: 16 }}>
              <div style={{ fontSize: '.75rem', color: '#64748b', fontWeight: 600 }}>RESPUESTAS</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#003876' }}>{total}</div>
            </div>
            <div className="card" style={{ padding: 16 }}>
              <div style={{ fontSize: '.75rem', color: '#64748b', fontWeight: 600 }}>PROMEDIO GENERAL</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#003876' }}>{promedioGeneral.toFixed(2)} <span style={{ fontSize: '1rem' }}>/ 5</span></div>
            </div>
          </div>

          <div className="card" style={{ padding: 20, marginBottom: 20 }}>
            <h4 style={{ margin: '0 0 14px', fontSize: '.95rem' }}>Promedio por pregunta</h4>
            {promedios.map(p => (
              <div key={p.key} style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.82rem', marginBottom: 4 }}>
                  <span>{p.label}</span>
                  <strong>{p.avg.toFixed(2)}</strong>
                </div>
                <div style={{ background: '#f1f5f9', borderRadius: 20, height: 10, overflow: 'hidden' }}>
                  <div style={{ width: `${(p.avg / 5) * 100}%`, height: '100%', background: 'linear-gradient(90deg, #003876, #005baa)', borderRadius: 20 }} />
                </div>
              </div>
            ))}
          </div>

          <div className="card" style={{ padding: 20, marginBottom: 20 }}>
            <h4 style={{ margin: '0 0 14px', fontSize: '.95rem' }}>Distribución de valoraciones (todas las preguntas)</h4>
            {distribucion.map(d => (
              <div key={d.n} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <span style={{ width: 46, fontSize: '.8rem', color: '#64748b' }}>{d.n} ★</span>
                <div style={{ flex: 1, background: '#f1f5f9', borderRadius: 20, height: 12, overflow: 'hidden' }}>
                  <div style={{ width: `${(d.count / maxDist) * 100}%`, height: '100%', background: '#f59e0b', borderRadius: 20 }} />
                </div>
                <span style={{ width: 34, textAlign: 'right', fontSize: '.8rem', fontWeight: 600 }}>{d.count}</span>
              </div>
            ))}
          </div>

          <h4 style={{ margin: '0 0 12px', fontSize: '.95rem' }}>Respuestas recientes</h4>
          <div style={{ display: 'grid', gap: 12 }}>
            {items.map(r => (
              <div key={r.id} className="card" style={{ padding: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 8 }}>
                  <div>
                    <strong style={{ fontSize: '.9rem', color: '#003876' }}>{r.perfil || 'Anónimo'}</strong>
                    <div style={{ fontSize: '.78rem', color: '#64748b' }}>
                      {r.departamento || 'General'} · {r.origen === 'seccion' ? 'Formulario' : 'Popup'} · {r.created_at ? new Date(r.created_at).toLocaleString('es-DO') : ''}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Stars value={PREGUNTAS.reduce((s, p) => s + (Number(r[p.key]) || 0), 0) / PREGUNTAS.length} />
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(r.id)}>Eliminar</button>
                  </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', fontSize: '.78rem', color: '#475569' }}>
                  {PREGUNTAS.map(p => <span key={p.key}>{p.label.split(' ')[0]}: <strong>{r[p.key]}</strong></span>)}
                </div>
                {r.comentario && <p style={{ fontSize: '.85rem', color: '#4b5563', margin: '8px 0 0', borderLeft: '3px solid #e2e8f0', paddingLeft: 10 }}>{r.comentario}</p>}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
