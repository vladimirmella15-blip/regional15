'use client'
import { useState, useEffect } from 'react'

export default function UsersAdmin() {
  const [users, setUsers] = useState<any[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState<any>(null)
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rol, setRol] = useState('secretaria')
  const [msg, setMsg] = useState('')

  async function loadUsers() {
    try {
      const res = await fetch('/api/users')
      if (res.ok) setUsers(await res.json())
    } catch {}
  }

  useEffect(() => { loadUsers() }, [])

  function resetForm() {
    setNombre(''); setEmail(''); setPassword(''); setRol('secretaria'); setEditing(null); setShowForm(false); setMsg('')
  }

  function openEdit(u: any) {
    setEditing(u); setNombre(u.nombre); setEmail(u.email); setPassword(''); setRol(u.rol); setShowForm(true); setMsg('')
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setMsg('')
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'save', data: { id: editing?.id, nombre, email, password, rol } }),
    })
    const data = await res.json()
    if (!res.ok) { setMsg(data.error || 'Error'); return }
    resetForm(); loadUsers()
  }

  async function handleDelete(id: string) {
    if (!confirm('¿Eliminar este usuario?')) return
    await fetch('/api/users', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'delete', id }) })
    loadUsers()
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <h3 style={{ margin: 0 }}>Usuarios</h3>
        <button onClick={() => { resetForm(); setShowForm(true) }} style={{ background: 'var(--blue-dark)', color: '#fff', border: 'none', padding: '8px 18px', borderRadius: 8, cursor: 'pointer', fontWeight: 600 }}>
          + Nuevo Usuario
        </button>
      </div>
      {msg && <p style={{ color: '#dc2626', fontSize: '0.85rem', marginBottom: 8 }}>{msg}</p>}
      {showForm && (
        <form onSubmit={handleSave} style={{ background: '#f9fafb', padding: 16, borderRadius: 10, marginBottom: 16, display: 'grid', gap: 10, maxWidth: 400 }}>
          <input placeholder="Nombre completo" value={nombre} onChange={e => setNombre(e.target.value)} required style={inputStyle} />
          <input placeholder="Correo electrónico" type="email" value={email} onChange={e => setEmail(e.target.value)} required style={inputStyle} />
          <input placeholder={editing ? 'Nueva contraseña (dejar vacío para mantener)' : 'Contraseña'} type="password" value={password} onChange={e => setPassword(e.target.value)} required={!editing} style={inputStyle} />
          <select value={rol} onChange={e => setRol(e.target.value)} style={inputStyle}>
            <option value="secretaria">Secretaría</option>
            <option value="admin">Admin</option>
          </select>
          <div style={{ display: 'flex', gap: 8 }}>
            <button type="submit" style={{ background: '#22c55e', color: '#fff', border: 'none', padding: '8px 18px', borderRadius: 8, cursor: 'pointer', fontWeight: 600 }}>{editing ? 'Actualizar' : 'Crear'}</button>
            <button type="button" onClick={resetForm} style={{ background: '#6b7280', color: '#fff', border: 'none', padding: '8px 18px', borderRadius: 8, cursor: 'pointer' }}>Cancelar</button>
          </div>
        </form>
      )}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f3f4f6', textAlign: 'left' }}>
            <th style={thStyle}>Nombre</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Rol</th>
            <th style={thStyle}>Estado</th>
            <th style={thStyle}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={tdStyle}>{u.nombre}</td>
              <td style={tdStyle}>{u.email}</td>
              <td style={tdStyle}><span style={{ background: u.rol === 'admin' ? '#dbeafe' : '#fef3c7', color: u.rol === 'admin' ? '#1d4ed8' : '#b45309', padding: '2px 10px', borderRadius: 12, fontSize: '0.75rem', fontWeight: 600 }}>{u.rol}</span></td>
              <td style={tdStyle}><span style={{ color: u.activo ? '#16a34a' : '#dc2626', fontWeight: 600 }}>{u.activo ? 'Activo' : 'Inactivo'}</span></td>
              <td style={tdStyle}>
                <button onClick={() => openEdit(u)} style={{ background: '#3b82f6', color: '#fff', border: 'none', padding: '4px 12px', borderRadius: 6, cursor: 'pointer', marginRight: 6, fontSize: '0.8rem' }}>Editar</button>
                <button onClick={() => handleDelete(u.id)} style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '4px 12px', borderRadius: 6, cursor: 'pointer', fontSize: '0.8rem' }}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const inputStyle: React.CSSProperties = { padding: '8px 12px', borderRadius: 6, border: '1px solid #d1d5db', fontSize: '0.9rem', width: '100%', boxSizing: 'border-box' }
const thStyle: React.CSSProperties = { padding: '10px 12px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: '#6b7280' }
const tdStyle: React.CSSProperties = { padding: '10px 12px', fontSize: '0.9rem' }
