'use client'

import { useState, useEffect } from 'react'
import { getTabIcon } from './Icons'

interface POAItem {
  id: string
  nombre: string
  descripcion: string
  anio: number
  trimestre: number
  meta: string
  indicador: string
  avance_porcentaje: number
  responsable: string
  estado: string
  fecha_inicio: string
  fecha_fin: string
}

interface SeguimientoItem {
  id: string
  poa_id: string
  fecha: string
  avance_porcentaje: number
  observacion: string
  usuario: string
}

const estadoColors: Record<string, string> = {
  pendiente: '#d97706',
  en_progreso: '#1d4ed8',
  completado: '#16a34a',
  retrasado: '#dc2626',
}

const estadoLabels: Record<string, string> = {
  pendiente: 'Pendiente', en_progreso: 'En Progreso', completado: 'Completado', retrasado: 'Retrasado',
}

export default function POAAdmin() {
  const [items, setItems] = useState<POAItem[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [segModalOpen, setSegModalOpen] = useState(false)
  const [selectedPOA, setSelectedPOA] = useState<POAItem | null>(null)
  const [seguimiento, setSeguimiento] = useState<SeguimientoItem[]>([])
  const [formData, setFormData] = useState({
    nombre: '', descripcion: '', anio: 2025, trimestre: 1,
    meta: '', indicador: '', responsable: '', estado: 'pendiente',
    fecha_inicio: '', fecha_fin: '',
  })
  const [editId, setEditId] = useState<string | null>(null)

  // Seguimiento form
  const [segAvance, setSegAvance] = useState(0)
  const [segObservacion, setSegObservacion] = useState('')

  useEffect(() => {
    fetch('/api/poa').then(r => r.ok ? r.json() : []).then(setItems).catch(() => {})
  }, [])

  const loadSeguimiento = async (poaId: string) => {
    const data = await fetch(`/api/poa?action=seguimiento&poaId=${poaId}`).then(r => r.json()).catch(() => [])
    setSeguimiento(data)
  }

  const openNew = () => {
    setEditId(null)
    setFormData({ nombre: '', descripcion: '', anio: 2025, trimestre: 1, meta: '', indicador: '', responsable: '', estado: 'pendiente', fecha_inicio: '', fecha_fin: '' })
    setModalOpen(true)
  }

  const openEdit = async (item: POAItem) => {
    setEditId(item.id)
    setFormData({
      nombre: item.nombre, descripcion: item.descripcion, anio: item.anio, trimestre: item.trimestre,
      meta: item.meta, indicador: item.indicador, responsable: item.responsable, estado: item.estado,
      fecha_inicio: item.fecha_inicio, fecha_fin: item.fecha_fin,
    })
    setModalOpen(true)
  }

  const openSeguimiento = async (item: POAItem) => {
    setSelectedPOA(item)
    setSegAvance(item.avance_porcentaje)
    setSegObservacion('')
    await loadSeguimiento(item.id)
    setSegModalOpen(true)
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/poa', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'save', data: { ...formData, id: editId } })
    })
    if (res.ok) {
      const updated = await res.json()
      setItems(prev => {
        if (editId) return prev.map(p => p.id === editId ? updated : p)
        return [updated, ...prev]
      })
      setModalOpen(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('¿Eliminar este POA?')) return
    await fetch('/api/poa', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'delete', id }) })
    setItems(prev => prev.filter(p => p.id !== id))
  }

  const handleSaveSeguimiento = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedPOA) return
    await fetch('/api/poa', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'seguimiento',
        data: { poa_id: selectedPOA.id, avance_porcentaje: segAvance, observacion: segObservacion, usuario: 'admin' }
      })
    })
    await loadSeguimiento(selectedPOA.id)
    setItems(prev => prev.map(p => p.id === selectedPOA.id ? { ...p, avance_porcentaje: segAvance } : p))
    setSegObservacion('')
  }

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <span>{items.length} POA(s)</span>
          <button className="btn btn-primary btn-sm" onClick={openNew}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Nuevo POA
          </button>
        </div>
        <ul className="item-list">
          {items.length === 0 ? (
            <li className="empty-state">
              <div style={{ marginBottom: '0.75rem', opacity: 0.5 }}>{getTabIcon('poa', 36)}</div>
              <p>No hay planes operativos todavía</p>
            </li>
          ) : items.map(item => (
            <li key={item.id}>
              <div className="item-info">
                <div className="item-title">{item.nombre}</div>
                <div className="item-sub" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '2px' }}>
                  <span style={{ background: '#e0edff', color: '#003876', borderRadius: '6px', padding: '1px 7px', fontSize: '.7rem', fontWeight: 600 }}>
                    {item.anio} · Trimestre {item.trimestre}
                  </span>
                  <span style={{ background: `${estadoColors[item.estado] || '#64748b'}15`, color: estadoColors[item.estado] || '#64748b', borderRadius: '6px', padding: '1px 7px', fontSize: '.7rem', fontWeight: 600 }}>
                    {estadoLabels[item.estado] || item.estado}
                  </span>
                  <span>{item.responsable && `· ${item.responsable}`}</span>
                </div>
                <div style={{ marginTop: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ flex: 1, height: '6px', background: '#e2e8f0', borderRadius: '3px', maxWidth: '200px' }}>
                    <div style={{ width: `${item.avance_porcentaje}%`, height: '100%', background: item.avance_porcentaje >= 100 ? '#16a34a' : '#1d4ed8', borderRadius: '3px', transition: 'width .3s' }} />
                  </div>
                  <span style={{ fontSize: '.75rem', fontWeight: 600, color: '#64748b' }}>{item.avance_porcentaje}%</span>
                </div>
              </div>
              <div className="item-actions">
                <button className="btn btn-ghost btn-sm" onClick={() => openSeguimiento(item)} title="Seguimiento">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 20v-6M12 10V4M4 12h16"/></svg>
                </button>
                <button className="btn btn-ghost btn-sm" onClick={() => openEdit(item)} title="Editar">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)} title="Eliminar">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* POA Form Modal */}
      {modalOpen && (
        <div className="modal-overlay open" onClick={() => setModalOpen(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h3>{editId ? 'Editar' : 'Nuevo'} Plan Operativo Anual</h3>
            <form onSubmit={handleSave}>
              <div className="form-group">
                <label>Nombre del POA</label>
                <input required value={formData.nombre} onChange={e => setFormData({ ...formData, nombre: e.target.value })} placeholder="Ej: Monitoreo de centros educativos" />
              </div>
              <div className="form-group">
                <label>Descripción</label>
                <textarea value={formData.descripcion} onChange={e => setFormData({ ...formData, descripcion: e.target.value })} />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Año</label>
                  <input type="number" required value={formData.anio} onChange={e => setFormData({ ...formData, anio: parseInt(e.target.value) || 2025 })} />
                </div>
                <div className="form-group">
                  <label>Trimestre</label>
                  <select value={formData.trimestre} onChange={e => setFormData({ ...formData, trimestre: parseInt(e.target.value) })} style={{ width: '100%', padding: '8px 10px', borderRadius: '8px', border: '1.5px solid #cbd5e1', background: '#fff' }}>
                    <option value={1}>1er Trimestre</option>
                    <option value={2}>2do Trimestre</option>
                    <option value={3}>3er Trimestre</option>
                    <option value={4}>4to Trimestre</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Meta</label>
                <textarea value={formData.meta} onChange={e => setFormData({ ...formData, meta: e.target.value })} placeholder="Meta o resultado esperado" />
              </div>
              <div className="form-group">
                <label>Indicador de medición</label>
                <input value={formData.indicador} onChange={e => setFormData({ ...formData, indicador: e.target.value })} placeholder="Ej: % de centros supervisados" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Responsable</label>
                  <input value={formData.responsable} onChange={e => setFormData({ ...formData, responsable: e.target.value })} />
                </div>
                <div className="form-group">
                  <label>Estado</label>
                  <select value={formData.estado} onChange={e => setFormData({ ...formData, estado: e.target.value })} style={{ width: '100%', padding: '8px 10px', borderRadius: '8px', border: '1.5px solid #cbd5e1', background: '#fff' }}>
                    <option value="pendiente">Pendiente</option>
                    <option value="en_progreso">En Progreso</option>
                    <option value="completado">Completado</option>
                    <option value="retrasado">Retrasado</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Fecha de inicio</label>
                  <input type="date" value={formData.fecha_inicio} onChange={e => setFormData({ ...formData, fecha_inicio: e.target.value })} />
                </div>
                <div className="form-group">
                  <label>Fecha de fin</label>
                  <input type="date" value={formData.fecha_fin} onChange={e => setFormData({ ...formData, fecha_fin: e.target.value })} />
                </div>
              </div>
              <div className="modal-actions">
                <button type="button" className="btn btn-ghost" onClick={() => setModalOpen(false)}>Cancelar</button>
                <button type="submit" className="btn btn-primary">{editId ? 'Guardar' : 'Crear'}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Seguimiento Modal */}
      {segModalOpen && selectedPOA && (
        <div className="modal-overlay open" onClick={() => setSegModalOpen(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h3>Seguimiento: {selectedPOA.nombre}</h3>

            <form onSubmit={handleSaveSeguimiento} style={{ marginBottom: '1.5rem' }}>
              <div className="form-group">
                <label>Avance (%)</label>
                <input type="range" min="0" max="100" value={segAvance} onChange={e => setSegAvance(parseInt(e.target.value))} style={{ width: '100%' }} />
                <div style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.2rem' }}>{segAvance}%</div>
              </div>
              <div className="form-group">
                <label>Observación</label>
                <textarea value={segObservacion} onChange={e => setSegObservacion(e.target.value)} placeholder="Avances, dificultades, próximos pasos..." />
              </div>
              <div className="modal-actions">
                <button type="submit" className="btn btn-primary">Registrar Seguimiento</button>
              </div>
            </form>

            <h4 style={{ fontSize: '.9rem', marginBottom: '.75rem' }}>Historial de Seguimiento</h4>
            {seguimiento.length === 0 ? (
              <p style={{ color: '#64748b', fontSize: '.85rem' }}>Sin seguimientos registrados</p>
            ) : (
              <ul className="item-list" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                {seguimiento.map(s => (
                  <li key={s.id}>
                    <div className="item-info">
                      <div className="item-title">{s.avance_porcentaje}% - {new Date(s.fecha).toLocaleDateString('es-DO')}</div>
                      <div className="item-sub">{s.observacion}</div>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <div className="modal-actions" style={{ marginTop: '1rem' }}>
              <button type="button" className="btn btn-ghost" onClick={() => setSegModalOpen(false)}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
