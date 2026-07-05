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
        background: 'linear-gradient(135deg, var(--blue-dark) 0%, #002a5c 100%)',
        fontFamily: "'Inter', system-ui, sans-serif", color: '#f8fafc', padding: '1.5rem',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(240,165,0,0.06), transparent)' }} />
        <div style={{ position: 'absolute', bottom: '-15%', left: '-5%', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(237,35,42,0.05), transparent)' }} />
        <div style={{
          background: 'var(--card-bg)', borderRadius: '20px',
          width: '100%', maxWidth: '440px', padding: '40px 36px 32px',
          boxShadow: '0 25px 60px rgba(0,0,0,0.3)', textAlign: 'center',
          position: 'relative', zIndex: 1
        }}>
          <div style={{ marginBottom: '24px' }}>
            <div style={{
              width: '72px', height: '72px', borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--blue-lighter), var(--blue-lighter))',
              border: '2px solid rgba(0,56,118,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="var(--blue-dark)" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
            </div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--blue-dark)', marginBottom: '4px', fontFamily: "'Outfit', sans-serif" }}>Regional 15</h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Acceso al Panel de Administración</p>
          </div>
          <form onSubmit={handleLogin}>
            {loginError && (
              <div style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', fontSize: '0.8rem', padding: '10px 14px', borderRadius: '10px', marginBottom: '20px', display: 'flex', alignItems: 'flex-start', gap: '8px', textAlign: 'left' }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '1px' }}><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>
                {loginError}
              </div>
            )}
            <div style={{ position: 'relative', marginBottom: '14px' }}>
              <svg style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', pointerEvents: 'none' }} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              <input type="email" name="email" required autoFocus autoComplete="email" placeholder="tucorreo@minerd.gob.do"
                style={{ width: '100%', padding: '13px 14px 13px 46px', border: '2px solid #e5e7eb', borderRadius: '12px', fontSize: '15px', outline: 'none', fontFamily: 'inherit', background: '#fff', boxSizing: 'border-box', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                onFocus={e => { e.currentTarget.style.borderColor = 'var(--blue-dark)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,56,118,0.1)' }}
                onBlur={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.boxShadow = 'none' }} />
            </div>
            <div style={{ position: 'relative', marginBottom: '20px' }}>
              <svg style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', pointerEvents: 'none' }} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              <input type="password" name="password" required autoComplete="current-password" placeholder="Contraseña"
                style={{ width: '100%', padding: '13px 14px 13px 46px', border: '2px solid #e5e7eb', borderRadius: '12px', fontSize: '15px', outline: 'none', fontFamily: 'inherit', background: '#fff', boxSizing: 'border-box', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                onFocus={e => { e.currentTarget.style.borderColor = 'var(--blue-dark)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,56,118,0.1)' }}
                onBlur={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.boxShadow = 'none' }} />
            </div>
            <button type="submit" style={{ width: '100%', background: 'var(--red)', color: '#fff', border: 'none', padding: '13px 24px', borderRadius: '12px', fontSize: '16px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--red-dark)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--red)'; e.currentTarget.style.transform = 'translateY(0)' }}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" /></svg>
              Iniciar Sesión
            </button>
          </form>
          <p style={{ textAlign: 'center', fontSize: '12px', color: '#9ca3af', margin: '16px 0', lineHeight: 1.5 }}>
            Solo personal autorizado del MINERD
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '12px', color: '#9ca3af', paddingTop: '16px', borderTop: '1px solid #f3f4f6' }}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#22c55e' }}><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
            Conexión segura · Acceso restringido
          </div>
          <a href="/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '0.8rem', color: 'var(--text-light)', textDecoration: 'none' }}>← Volver al sitio principal</a>
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
