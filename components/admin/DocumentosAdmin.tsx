'use client'

import { useState, useRef, useCallback } from 'react'
import { getTabIcon } from './Icons'

interface Documento {
  id: string
  title: string
  description: string
  category: string
  originalName: string
  url: string
  size: number
}

interface DocumentosAdminProps {
  documents: Documento[]
  onUpload: (file: File, title: string, description: string, category: string) => void
  onDelete: (id: string) => void
}

const DOC_CATEGORIES = ['Planificación Anual', 'Contabilidad', 'RRHH', 'Informes', 'Transparencia', 'General']

const fileIcons: Record<string, string> = {
  xlsx: '🟢', xls: '🟢', csv: '🟢',
  pdf: '🔴', doc: '🔵', docx: '🔵',
  pptx: '🟠', ppt: '🟠', txt: '⚪',
}

function getExt(name: string) { return (name || '').split('.').pop()?.toLowerCase() ?? '' }
function fmtSize(bytes: number) {
  if (!bytes) return ''
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / 1024 / 1024).toFixed(2) + ' MB'
}

export default function DocumentosAdmin({ documents, onUpload, onDelete }: DocumentosAdminProps) {
  const [uploading, setUploading] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Planificación Anual')
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleUpload = useCallback(async (file: File) => {
    if (!file) return
    setUploading(true)
    try {
      await onUpload(file, title || file.name, description, category)
      setTitle('')
      setDescription('')
    } finally {
      setUploading(false)
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }, [title, description, category, onUpload])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      <div className="card">
        <div className="card-header" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {getTabIcon('documentos', 18)}
          <span>Subir Documento de Transparencia</span>
        </div>
        <div className="card-body" style={{ padding: '1.25rem' }}>
          <div
            style={{
              border: `2px dashed ${dragOver ? '#005baa' : '#cbd5e1'}`,
              borderRadius: '12px', padding: '32px 20px', textAlign: 'center',
              background: dragOver ? 'rgba(0,91,170,0.06)' : '#f8fafc',
              transition: 'all 0.2s', cursor: 'pointer', marginBottom: '16px',
            }}
            onDragOver={e => { e.preventDefault(); setDragOver(true) }}
            onDragLeave={() => setDragOver(false)}
            onDrop={e => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) handleUpload(f) }}
            onClick={() => fileInputRef.current?.click()}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#005baa" strokeWidth="1.5" style={{ margin: '0 auto 10px', display: 'block' }}>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
            <p style={{ margin: 0, fontWeight: 600, color: '#005baa' }}>{uploading ? '⏳ Subiendo...' : 'Arrastra tu archivo aquí'}</p>
            <p style={{ margin: '4px 0 0', fontSize: '0.78rem', color: '#64748b' }}>Excel (.xlsx, .xls), PDF, Word, CSV, PowerPoint — haz clic para seleccionar</p>
            <input ref={fileInputRef} type="file" accept=".xlsx,.xls,.csv,.pdf,.doc,.docx,.ppt,.pptx,.txt" style={{ display: 'none' }}
              onChange={e => { const f = e.target.files?.[0]; if (f) handleUpload(f) }} />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Título del documento</label>
              <input type="text" placeholder="Plan Trimestral 1er Trimestre 2025" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Categoría</label>
              <select value={category} onChange={e => setCategory(e.target.value)} style={{ width: '100%', padding: '8px 10px', borderRadius: '8px', border: '1.5px solid #cbd5e1', background: '#fff' }}>
                {DOC_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Descripción breve (opcional)</label>
            <input type="text" placeholder="Plan operativo trimestral del primer trimestre 2025" value={description} onChange={e => setDescription(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <span>{documents.length} documento(s) subido(s)</span>
        </div>
        <ul className="item-list">
          {documents.length === 0 ? (
            <li className="empty-state">
              <div style={{ marginBottom: '0.75rem', opacity: 0.5 }}>{getTabIcon('documentos', 36)}</div>
              <p>No hay documentos subidos aún. ¡Sube el primero!</p>
            </li>
          ) : documents.map(doc => (
            <li key={doc.id}>
              <div className="item-info" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1.6rem', lineHeight: 1 }}>{fileIcons[getExt(doc.originalName)] ?? '📄'}</span>
                <div>
                  <div className="item-title">{doc.title}</div>
                  <div className="item-sub" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '2px' }}>
                    <span style={{ background: '#e0edff', color: '#003876', borderRadius: '6px', padding: '1px 7px', fontSize: '.7rem', fontWeight: 600 }}>{doc.category}</span>
                    <span>{doc.originalName}</span>
                    {doc.size ? <span>· {fmtSize(doc.size)}</span> : null}
                  </div>
                  {doc.description && <div style={{ fontSize: '.75rem', color: '#64748b', marginTop: '2px' }}>{doc.description}</div>}
                </div>
              </div>
              <div className="item-actions">
                <a href={doc.url} target="_blank" rel="noopener" className="btn btn-ghost btn-sm" title="Descargar / Ver">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                </a>
                <button className="btn btn-danger btn-sm" onClick={() => onDelete(doc.id)} title="Eliminar">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
