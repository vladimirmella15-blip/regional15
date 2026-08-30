'use client'

import { useState, useCallback } from 'react'
import { getTabIcon } from './Icons'

interface TickerItem {
  id: string
  mensaje: string
  activo: number
  orden: number
}

interface TickerAdminProps {
  items: TickerItem[]
  onSave: (data: { id?: string; mensaje: string; activo?: number; orden?: number }) => void
  onDelete: (id: string) => void
}

export default function TickerAdmin({ items, onSave, onDelete }: TickerAdminProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [mensaje, setMensaje] = useState('')

  const openNew = () => {
    setEditingId(null)
    setMensaje('')
    setModalOpen(true)
  }

  const openEdit = (id: string) => {
    const item = items.find(i => i.id === id)
    if (item) {
      setEditingId(id)
      setMensaje(item.mensaje)
      setModalOpen(true)
    }
  }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    if (!mensaje.trim()) return
    onSave({ id: editingId || undefined, mensaje: mensaje.trim(), orden: editingId ? items.find(i => i.id === editingId)?.orden : items.length })
    setModalOpen(false)
    setMensaje('')
    setEditingId(null)
  }

  return (
    <>
      <div className="card">
        <div className="card-header">
          <span>{items.length} mensaje(s)</span>
          <button className="btn btn-primary btn-sm" onClick={openNew}>+ Nuevo</button>
        </div>
        <ul className="item-list">
          {items.length === 0 ? (
            <li className="empty-state">
              <div style={{ marginBottom: '0.75rem', opacity: 0.5 }}>{getTabIcon('ticker', 36)}</div>
              <p>No hay mensajes en el ticker</p>
            </li>
          ) : items.map(item => (
            <li key={item.id}>
              <div className="item-info">
                <div className="item-title">
                  {item.mensaje.substring(0, 90)}{item.mensaje.length > 90 ? '…' : ''}
                </div>
                <div className="item-sub">
                  Orden: {item.orden} · {item.activo ? 'Activo' : 'Inactivo'}
                </div>
              </div>
              <div className="item-actions">
                <button className="btn btn-ghost btn-sm" onClick={() => openEdit(item.id)} title="Editar">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => onDelete(item.id)} title="Eliminar">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {modalOpen && (
        <div className="modal-overlay open" onClick={() => setModalOpen(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h3>{editingId ? 'Editar' : 'Nuevo'} mensaje del Ticker</h3>
            <form onSubmit={handleSave}>
              <div className="form-group">
                <label>Mensaje</label>
                <textarea rows={3} required value={mensaje} onChange={e => setMensaje(e.target.value)} />
              </div>
              <div className="modal-actions">
                <button type="button" className="btn btn-ghost" onClick={() => setModalOpen(false)}>Cancelar</button>
                <button type="submit" className="btn btn-primary">{editingId ? 'Guardar' : 'Añadir'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
