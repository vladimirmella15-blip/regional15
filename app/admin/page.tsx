'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import AdminLayout from '@/components/admin/AdminLayout'
import Dashboard from '@/components/admin/Dashboard'
import CrudList from '@/components/admin/CrudList'
import CrudForm from '@/components/admin/CrudForm'
import TickerAdmin from '@/components/admin/TickerAdmin'
import ConfigAdmin from '@/components/admin/ConfigAdmin'
import DocumentosAdmin from '@/components/admin/DocumentosAdmin'
import POAAdmin from '@/components/admin/POAAdmin'
import UsersAdmin from '@/components/admin/UsersAdmin'
import SalonRequestsAdmin from '@/components/admin/SalonRequestsAdmin'
import { getTabIcon } from '@/components/admin/Icons'

const tabs = [
  { key: 'dashboard', label: 'Dashboard' },
  { key: 'noticias', label: 'Noticias' },
  { key: 'servicios', label: 'Servicios' },
  { key: 'enlaces', label: 'Enlaces' },
  { key: 'eventos', label: 'Eventos' },
  { key: 'programas', label: 'Programas' },
  { key: 'testimonios', label: 'Testimonios' },
  { key: 'galeria', label: 'Galería' },
  { key: 'instagram', label: 'Instagram' },
  { key: 'calendario', label: 'Calendario' },
  { key: 'ticker', label: 'Ticker' },
  { key: 'poa', label: 'POA' },
  { key: 'solicitudes', label: 'Salón Técnico' },
  { key: 'usuarios', label: 'Usuarios' },
  { key: 'config', label: 'Configuración' },
  { key: 'documentos', label: 'Documentos' },
]

const sectionNames: Record<string, string> = {
  noticias: 'Noticia', servicios: 'Servicio', enlaces: 'Enlace',
  eventos: 'Evento', programas: 'Programa', testimonios: 'Testimonio',
  galeria: 'Imagen', instagram: 'Post de Instagram', calendario: 'Actividad',
}

export default function AdminPage() {
  const { data: session, status } = useSession()
  const authorized = status === 'authenticated'
  const [loginError, setLoginError] = useState('')

  const [data, setData] = useState<Record<string, any[]>>({})
  const [configData, setConfigData] = useState<any>(null)
  const [tickerItems, setTickerItems] = useState<any[]>([])
  const [documents, setDocuments] = useState<any[]>([])

  const [activeTab, setActiveTab] = useState('dashboard')

  const userRole = (session?.user as any)?.role || 'admin'

  // Secretaria solo ve Salón Técnico; admin ve todo
  const filteredTabs = userRole === 'secretaria'
    ? tabs.filter(t => t.key === 'solicitudes')
    : tabs

  useEffect(() => {
    if (authorized && userRole === 'secretaria' && activeTab !== 'solicitudes') {
      setActiveTab('solicitudes')
    }
  }, [authorized, userRole, activeTab])
  const [modalOpen, setModalOpen] = useState(false)
  const [editingSection, setEditingSection] = useState('')
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editingItem, setEditingItem] = useState<any>(null)
  const [toastMsg, setToastMsg] = useState('')
  const [toastError, setToastError] = useState(false)
  const [toastVisible, setToastVisible] = useState(false)
  const toastTimer = useRef<NodeJS.Timeout>(undefined)

  const showToast = useCallback((msg: string, isError = false) => {
    setToastMsg(msg)
    setToastError(isError)
    setToastVisible(true)
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToastVisible(false), 2800)
  }, [])

  const loadData = useCallback(async () => {
    try {
      const res = await fetch('/api/content')
      if (!res.ok) return
      const json = await res.json()
      setData({
        noticias: json.noticias || [],
        servicios: json.servicios || [],
        enlaces: json.enlaces || [],
        eventos: json.eventos || [],
        programas: json.programas || [],
        testimonios: json.testimonios || [],
        galeria: json.galeria || [],
        instagram: json.instagram || [],
        calendario: json.calendario || [],
      })
      setTickerItems(json.config?.ticker?.map((m: string, i: number) => ({ id: `ticker-${i}`, mensaje: m, activo: 1, orden: i })) || [])
      setConfigData({
        ultima_actualizacion: json.config?.ultima_actualizacion || '',
        google_analytics_id: json.config?.google_analytics_id || '',
        instagram_token: json.config?.instagram_token || '',
        stats_distritos: json.config?.stats?.distritos || 6,
        stats_publicaciones: json.config?.stats?.publicaciones || 2527,
        stats_seguidores: json.config?.stats?.seguidores || 9429,
        stats_galas: json.config?.stats?.galas || 3,
        stats_anio_escolar: json.config?.stats?.anio_escolar || 2025,
      })
    } catch {}
  }, [])

  useEffect(() => {
    if (authorized) loadData()
  }, [authorized, loadData])

  useEffect(() => {
    if (!authorized) return
    fetch('/api/upload').then(r => r.ok ? r.json() : []).then(setDocuments).catch(() => {})
  }, [authorized])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    try {
      const result = await signIn('credentials', { email, password, redirect: false })
      if (result?.ok) {
        showToast('Sesión iniciada correctamente')
      } else {
        setLoginError('Credenciales incorrectas')
      }
    } catch {
      setLoginError('Error de conexión')
    }
  }

  const handleLogout = async () => {
    await signOut({ redirect: false })
    showToast('Sesión cerrada')
  }

  const openForm = (section: string, index: number | null) => {
    setEditingSection(section)
    setEditingIndex(index)
    setEditingItem(index !== null ? data[section]?.[index] : null)
    setModalOpen(true)
  }

  const handleSaveForm = async (formData: any) => {
    const section = editingSection
    const itemId = editingIndex !== null ? data[section]?.[editingIndex]?.id : undefined

    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          entity: section,
          action: 'save',
          data: { ...formData, id: itemId },
        }),
      })
      if (!res.ok) throw new Error('Error al guardar')
      showToast(editingIndex !== null ? 'Actualizado' : 'Creado')
      setModalOpen(false)
      setEditingItem(null)
      await loadData()
    } catch (err: any) {
      showToast('Error: ' + (err.message || 'desconocido'), true)
    }
  }

  const handleDelete = async (section: string, index: number) => {
    if (!confirm('¿Eliminar este elemento?')) return
    const itemId = data[section]?.[index]?.id
    if (!itemId) return

    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          entity: section,
          action: 'delete',
          id: itemId,
        }),
      })
      if (!res.ok) throw new Error('Error al eliminar')
      showToast('Elemento eliminado')
      await loadData()
    } catch (err: any) {
      showToast('Error: ' + (err.message || 'desconocido'), true)
    }
  }

  const handleTickerSave = async (item: { id?: string; mensaje: string; orden?: number }) => {
    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          entity: 'ticker',
          action: 'save',
          data: { id: item.id || `ticker-${Date.now()}`, mensaje: item.mensaje, activo: 1, orden: item.orden ?? 0 },
        }),
      })
      if (!res.ok) throw new Error('Error al guardar')
      showToast('Ticker actualizado')
      await loadData()
    } catch (err: any) {
      showToast('Error: ' + (err.message || 'desconocido'), true)
    }
  }

  const handleTickerDelete = async (id: string) => {
    if (!confirm('¿Eliminar este mensaje del ticker?')) return
    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ entity: 'ticker', action: 'delete', id }),
      })
      if (!res.ok) throw new Error('Error al eliminar')
      showToast('Mensaje eliminado')
      await loadData()
    } catch (err: any) {
      showToast('Error: ' + (err.message || 'desconocido'), true)
    }
  }

  const handleConfigSave = async (formData: any) => {
    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ entity: 'config', action: 'save', data: formData }),
      })
      if (!res.ok) throw new Error('Error al guardar')
      showToast('Configuración guardada')
      await loadData()
    } catch (err: any) {
      showToast('Error: ' + (err.message || 'desconocido'), true)
    }
  }

  const handleDocUpload = async (file: File, title: string, description: string, category: string) => {
    const fd = new FormData()
    fd.append('file', file)
    fd.append('title', title)
    fd.append('description', description)
    fd.append('category', category)
    const res = await fetch('/api/upload', { method: 'POST', body: fd })
    if (!res.ok) throw new Error(await res.text())
    const newDoc = await res.json()
    setDocuments(prev => [newDoc, ...prev])
    showToast('Documento subido correctamente')
  }

  const handleDocDelete = async (id: string) => {
    if (!confirm('¿Eliminar este documento?')) return
    await fetch('/api/upload', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
    setDocuments(prev => prev.filter(d => d.id !== id))
    showToast('Documento eliminado')
  }

  const handleExport = () => {
    const exportData = {
      ...data,
      config: {
        ultima_actualizacion: configData?.ultima_actualizacion || '',
        google_analytics_id: configData?.google_analytics_id || '',
        instagram_token: configData?.instagram_token || '',
        ticker: tickerItems.map((t: any) => t.mensaje),
        stats: {
          distritos: configData?.stats_distritos || 6,
          publicaciones: configData?.stats_publicaciones || 2527,
          seguidores: configData?.stats_seguidores || 9429,
          galas: configData?.stats_galas || 3,
          anio_escolar: configData?.stats_anio_escolar || 2025,
        }
      }
    }
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'content.json'
    a.click()
    URL.revokeObjectURL(url)
    showToast('JSON exportado')
  }

  const handleImport = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json'
    input.onchange = async (e: any) => {
      try {
        const text = await e.target.files[0].text()
        const imported = JSON.parse(text)
        if (!imported.noticias || !imported.config) throw new Error('Estructura inválida')

        const sections = ['noticias', 'servicios', 'enlaces', 'eventos', 'programas', 'testimonios', 'galeria', 'instagram', 'calendario']
        for (const section of sections) {
          const items = imported[section] || []
          for (const item of items) {
            await fetch('/api/content', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ entity: section, action: 'save', data: item }),
            })
          }
        }

        if (imported.config?.ticker) {
          for (const m of imported.config.ticker) {
            await fetch('/api/content', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ entity: 'ticker', action: 'save', data: { mensaje: m, activo: 1, orden: 0 } }),
            })
          }
        }

        if (imported.config) {
          const { ultima_actualizacion, google_analytics_id, instagram_token, stats } = imported.config
          await fetch('/api/content', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              entity: 'config', action: 'save', data: {
                ultima_actualizacion: ultima_actualizacion || '',
                google_analytics_id: google_analytics_id || '',
                instagram_token: instagram_token || '',
                stats_distritos: stats?.distritos || 6,
                stats_publicaciones: stats?.publicaciones || 2527,
                stats_seguidores: stats?.seguidores || 9429,
                stats_galas: stats?.galas || 3,
                stats_anio_escolar: stats?.anio_escolar || 2025,
              }
            }),
          })
        }

        await loadData()
        showToast('JSON importado correctamente')
      } catch (err: any) {
        showToast('Error al importar: ' + err.message, true)
      }
    }
    input.click()
  }

  if (!authorized) {
    return (
      <div className="login-container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh',
        background: 'radial-gradient(circle at top, #0f172a 0%, #020617 100%)',
        fontFamily: "'Segoe UI', system-ui, sans-serif", color: '#f8fafc', padding: '1.5rem'
      }}>
        <div className="login-card" style={{
          background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px',
          width: '100%', maxWidth: '420px', padding: '2.5rem 2rem',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', textAlign: 'center'
        }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>Regional 15</h2>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '2rem' }}>Acceso al Panel de Administración</p>
          </div>
          <form onSubmit={handleLogin}>
            {loginError && (
              <div style={{ background: 'rgba(220,38,38,0.15)', border: '1px solid rgba(220,38,38,0.3)', color: '#fca5a5', fontSize: '0.8rem', padding: '0.6rem 0.8rem', borderRadius: '6px', marginBottom: '1.25rem' }}>
                {loginError}
              </div>
            )}
            <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', color: '#cbd5e1', marginBottom: '0.5rem' }}>Correo Electrónico</label>
              <input type="email" name="email" required autoFocus
                style={{ width: '100%', background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '0.75rem 1rem', borderRadius: '8px', fontSize: '0.95rem' }} />
            </div>
            <div style={{ marginBottom: '1.25rem', textAlign: 'left' }}>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', color: '#cbd5e1', marginBottom: '0.5rem' }}>Contraseña</label>
              <input type="password" name="password" required
                style={{ width: '100%', background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '0.75rem 1rem', borderRadius: '8px', fontSize: '0.95rem' }} />
            </div>
            <button type="submit" style={{ width: '100%', background: '#1d4ed8', color: '#fff', border: 'none', padding: '0.75rem', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer', marginTop: '1rem' }}>
              Iniciar Sesión
            </button>
          </form>
          <a href="/" style={{ display: 'inline-block', marginTop: '1.5rem', fontSize: '0.8rem', color: '#64748b', textDecoration: 'none' }}>← Volver al sitio principal</a>
        </div>
      </div>
    )
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />

      case 'noticias':
      case 'servicios':
      case 'enlaces':
      case 'eventos':
      case 'programas':
      case 'testimonios':
      case 'galeria':
      case 'instagram':
      case 'calendario':
        return (
          <CrudList
            section={activeTab}
            items={data[activeTab] || []}
            onNew={() => openForm(activeTab, null)}
            onEdit={(i) => openForm(activeTab, i)}
            onDelete={(i) => handleDelete(activeTab, i)}
            renderItem={(item: any, i: number) => {
              switch (activeTab) {
                case 'noticias':
                  return <><div className="item-title">{item.titulo}</div><div className="item-sub">{item.categoria ?? ''} · {item.fecha ?? ''}</div></>
                case 'servicios':
                  return <><div className="item-title">{item.titulo}</div><div className="item-sub">{(item.descripcion ?? '').substring(0, 80)}…</div></>
                case 'enlaces':
                  return <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ background: '#f1f5f9', borderRadius: '4px', padding: '4px', color: '#1e293b', display: 'inline-flex' }}>{getTabIcon('enlaces', 20)}</div>
                    <div><div className="item-title">{item.nombre ?? ''}</div><div className="item-sub">{item.url ?? ''}</div></div>
                  </div>
                case 'eventos':
                  return <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ background: '#f1f5f9', borderRadius: '4px', padding: '4px', color: '#1e293b', display: 'inline-flex' }}>{getTabIcon('eventos', 20)}</div>
                    <div><div className="item-title">{item.titulo ?? ''}</div><div className="item-sub">{item.tipo ?? ''} · {item.fecha ?? ''}</div></div>
                  </div>
                case 'programas':
                  return <><div className="item-title">{item.titulo}</div><div className="item-sub">{(item.descripcion ?? '').substring(0, 80)}…</div></>
                case 'testimonios':
                  return <><div className="item-title">{item.nombre ?? ''}{item.rol ? <span className="badge">{item.rol}</span> : null}</div><div className="item-sub">"{(item.texto ?? '').substring(0, 80)}…"</div></>
                case 'galeria':
                  return <><div className="item-title">{item.titulo ?? ''}</div><div className="item-sub">{item.imagen ?? ''}</div></>
                case 'instagram':
                  return <><div className="item-title">{(item.caption ?? '').substring(0, 60)}…</div><div className="item-sub">{item.src ?? ''}</div></>
                case 'calendario':
                  const repTxt = item.repeticion === 'semanal' ? ' 🔁 Semanal' : item.repeticion === 'mensual' ? ' 🔁 Mensual' : ''
                  return <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: item.color || '#003876', flexShrink: 0 }} />
                    <div><div className="item-title">{item.titulo ?? ''}</div><div className="item-sub">{item.fecha_inicio ?? ''}{item.hora ? ` · ${item.hora}` : ''}{repTxt}</div></div>
                  </div>
                default:
                  return null
              }
            }}
          />
        )

      case 'ticker':
        return <TickerAdmin items={tickerItems} onSave={handleTickerSave} onDelete={handleTickerDelete} />

      case 'config':
        return <ConfigAdmin config={configData} onSave={handleConfigSave} />

      case 'documentos':
        return <DocumentosAdmin documents={documents} onUpload={handleDocUpload} onDelete={handleDocDelete} />

      case 'poa':
        return <POAAdmin />

      case 'solicitudes':
        return <SalonRequestsAdmin />

      case 'usuarios':
        return <UsersAdmin />

      default:
        return null
    }
  }

  return (
    <>
      <AdminLayout
        tabs={filteredTabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onLogout={handleLogout}
        onExport={handleExport}
        onImport={handleImport}
      >
        {renderContent()}
      </AdminLayout>

      {modalOpen && (
        <div className="modal-overlay open" onClick={() => { setModalOpen(false); setEditingItem(null) }}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <CrudForm section={editingSection} data={editingItem} onSave={handleSaveForm} onCancel={() => { setModalOpen(false); setEditingItem(null) }} />
          </div>
        </div>
      )}

      <div className={`toast ${toastVisible ? 'show' : ''} ${toastError ? 'error' : 'success'}`}>{toastMsg}</div>
    </>
  )
}
