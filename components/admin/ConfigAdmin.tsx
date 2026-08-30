'use client'

import { useState, useEffect } from 'react'
import { getTabIcon } from './Icons'

interface ConfigData {
  ultima_actualizacion: string
  google_analytics_id: string
  instagram_token: string
  stats_distritos: number
  stats_publicaciones: number
  stats_seguidores: number
  stats_galas: number
  stats_anio_escolar: number
}

interface ConfigAdminProps {
  config: ConfigData | null
  onSave: (data: Partial<ConfigData>) => void
}

export default function ConfigAdmin({ config, onSave }: ConfigAdminProps) {
  const [aiConfigured, setAiConfigured] = useState<boolean | null>(null)

  useEffect(() => {
    fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ question: 'test' }) })
      .then(r => r.json().then(d => setAiConfigured(!d.answer?.includes('no está configurado'))))
      .catch(() => setAiConfigured(false))
  }, [])

  const handleSave = () => {
    const el = (id: string) => document.getElementById(id) as HTMLInputElement
    onSave({
      ultima_actualizacion: el('cfg-update')?.value ?? '',
      google_analytics_id: el('cfg-ga')?.value.trim() ?? '',
      instagram_token: el('cfg-instagram-token')?.value.trim() ?? '',
      stats_distritos: parseInt(el('cfg-distritos')?.value) || 6,
      stats_publicaciones: parseInt(el('cfg-pub')?.value) || 2527,
      stats_seguidores: parseInt(el('cfg-seg')?.value) || 9429,
      stats_galas: parseInt(el('cfg-galas')?.value) || 3,
      stats_anio_escolar: parseInt(el('cfg-anio')?.value) || 2025,
    })
  }

  return (
    <div className="card">
      <div className="card-header" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {getTabIcon('config', 18)}
        <span>Configuración General</span>
      </div>
      <div className="card-body" style={{ padding: '1.25rem' }}>
        {aiConfigured === false && (
          <div style={{
            background: '#fef3c7', border: '1px solid #f59e0b', borderRadius: 8,
            padding: '12px 16px', marginBottom: 16, fontSize: 13, color: '#92400e',
          }}>
            <strong>⚠ Chatbot sin IA</strong> — El asistente virtual solo responde preguntas predefinidas.
            Para activar respuestas con inteligencia artificial, agrega{' '}
            <code style={{ background: '#fde68a', padding: '2px 6px', borderRadius: 4 }}>AI_API_KEY</code>
            {' '}en el archivo <code style={{ background: '#fde68a', padding: '2px 6px', borderRadius: 4 }}>.env.local</code> del servidor.
            Obtén una clave gratuita en <a href="https://console.groq.com" target="_blank" rel="noopener" style={{ color: '#1d4ed8', textDecoration: 'underline' }}>console.groq.com</a>.
          </div>
        )}
        {aiConfigured === true && (
          <div style={{
            background: '#d1fae5', border: '1px solid #059669', borderRadius: 8,
            padding: '12px 16px', marginBottom: 16, fontSize: 13, color: '#065f46',
          }}>
            ✅ Chatbot con IA activo — El asistente virtual responde con inteligencia artificial.
          </div>
        )}
        <div className="form-group">
          <label>Última actualización</label>
          <input type="date" id="cfg-update" defaultValue={config?.ultima_actualizacion ?? ''} />
        </div>
        <div className="form-group">
          <label>Google Analytics ID (opcional)</label>
          <input type="text" id="cfg-ga" defaultValue={config?.google_analytics_id ?? ''} placeholder="G-XXXXXXXXXX" />
        </div>
        <div className="form-group">
          <label>Instagram Access Token (opcional)</label>
          <input type="text" id="cfg-instagram-token" defaultValue={config?.instagram_token ?? ''} placeholder="IGQVJ... (token de Instagram Graph API)" />
          <small style={{ display: 'block', fontSize: '.72rem', color: '#64748b', marginTop: '.25rem' }}>Si no hay token, se muestran los posts de Instagram configurados manualmente.</small>
        </div>

        <h4 style={{ margin: '1rem 0 .5rem', fontSize: '.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
          Estadísticas (Hero stats)
        </h4>
        <div className="form-row">
          <div className="form-group">
            <label>Distritos</label>
            <input type="number" id="cfg-distritos" defaultValue={config?.stats_distritos ?? 6} />
          </div>
          <div className="form-group">
            <label>Publicaciones Instagram</label>
            <input type="number" id="cfg-pub" defaultValue={config?.stats_publicaciones ?? 2527} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Seguidores Instagram</label>
            <input type="number" id="cfg-seg" defaultValue={config?.stats_seguidores ?? 9429} />
          </div>
          <div className="form-group">
            <label>Gala Regional ediciones</label>
            <input type="number" id="cfg-galas" defaultValue={config?.stats_galas ?? 3} />
          </div>
        </div>
        <div className="form-group">
          <label>Año Escolar</label>
          <input type="number" id="cfg-anio" defaultValue={config?.stats_anio_escolar ?? 2025} />
        </div>
        <button className="btn btn-primary" onClick={handleSave}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ marginRight: '6px' }}><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
          Guardar Configuración
        </button>
      </div>
    </div>
  )
}
