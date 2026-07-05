'use client'
import { useState, useEffect } from 'react'

export default function SalonRequestsAdmin() {
  const [requests, setRequests] = useState<any[]>([])
  const [filter, setFilter] = useState('todas')
  const [reason, setReason] = useState('')
  const [showReason, setShowReason] = useState<string | null>(null)

  async function load() {
    try {
      const res = await fetch('/api/salon-requests')
      if (res.ok) setRequests(await res.json())
    } catch {}
  }

  useEffect(() => { load() }, [])

  async function handleApprove(r: any) {
    if (!confirm(`¿Aprobar "${r.titulo_actividad}"? Se agregará al calendario.`)) return
    await fetch('/api/salon-requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'approve', id: r.id, titulo_actividad: r.titulo_actividad, descripcion: r.descripcion, fecha_solicitada: r.fecha_solicitada, fecha_fin: r.fecha_solicitada, hora_inicio: r.hora_inicio }),
    })
    load()
  }

  async function handleReject(id: string) {
    const motivo = reason.trim() || 'No especificado'
    if (!confirm(`¿Rechazar esta solicitud? Motivo: ${motivo}`)) return
    await fetch('/api/salon-requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'reject', id, motivo_rechazo: motivo }),
    })
    setReason('')
    load()
  }

  const filtered = filter === 'todas' ? requests : requests.filter(r => r.estado === filter)

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <h3 style={{ margin: 0 }}>Solicitudes de Salón Técnico</h3>
        <div style={{ display: 'flex', gap: 6 }}>
          {['todas', 'pendiente', 'aprobado', 'rechazado'].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              background: filter === f ? 'var(--blue-dark)' : '#f3f4f6',
              color: filter === f ? '#fff' : '#374151',
              border: 'none', padding: '6px 14px', borderRadius: 20, cursor: 'pointer', fontWeight: 600, fontSize: '0.8rem'
            }}>{f.charAt(0).toUpperCase() + f.slice(1)}</button>
          ))}
        </div>
      </div>
      {filtered.length === 0 ? (
        <p style={{ color: '#9ca3af', textAlign: 'center', padding: 40 }}>No hay solicitudes {filter !== 'todas' ? filter : ''}</p>
      ) : (
        <div style={{ display: 'grid', gap: 12 }}>
          {filtered.map(r => (
            <div key={r.id} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 10, padding: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 8 }}>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--blue-dark)' }}>{r.titulo_actividad}</h4>
                  <p style={{ margin: '4px 0 0', fontSize: '0.8rem', color: '#6b7280' }}>
                    {r.solicitante_nombre} · {r.solicitante_email}{r.solicitante_telefono ? ` · ${r.solicitante_telefono}` : ''}
                  </p>
                </div>
                <span style={{
                  background: r.estado === 'pendiente' ? '#fef3c7' : r.estado === 'aprobado' ? '#d1fae5' : '#fee2e2',
                  color: r.estado === 'pendiente' ? '#b45309' : r.estado === 'aprobado' ? '#16a34a' : '#dc2626',
                  padding: '4px 12px', borderRadius: 12, fontSize: '0.75rem', fontWeight: 700, whiteSpace: 'nowrap'
                }}>{r.estado.toUpperCase()}</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#4b5563', marginBottom: 8 }}>
                <strong>Fecha:</strong> {r.fecha_solicitada}{r.hora_inicio ? ` ${r.hora_inicio}${r.hora_fin ? ` - ${r.hora_fin}` : ''}` : ''}
              </div>
              {r.descripcion && <p style={{ fontSize: '0.85rem', color: '#4b5563', margin: '0 0 8px' }}>{r.descripcion}</p>}
              {r.estado === 'pendiente' && (
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 8 }}>
                  <button onClick={() => handleApprove(r)} style={{ background: '#22c55e', color: '#fff', border: 'none', padding: '7px 18px', borderRadius: 8, cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem' }}>✓ Aprobar</button>
                  <input placeholder="Motivo de rechazo (opcional)" value={showReason === r.id ? reason : ''} onChange={e => { setShowReason(r.id); setReason(e.target.value) }} style={{ padding: '7px 12px', borderRadius: 6, border: '1px solid #d1d5db', fontSize: '0.85rem', flex: 1 }} />
                  <button onClick={() => handleReject(r.id)} style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '7px 18px', borderRadius: 8, cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem' }}>✗ Rechazar</button>
                </div>
              )}
              {r.estado === 'rechazado' && r.motivo_rechazo && (
                <p style={{ fontSize: '0.8rem', color: '#dc2626', margin: '8px 0 0' }}>Motivo: {r.motivo_rechazo}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
