'use client'

import { useState, useEffect, useRef } from 'react'
import RichTextEditor from '@/components/RichTextEditor'

interface FieldOption {
  value: string
  label: string
}
interface Field {
  key: string
  label: string
  type?: string
  default?: string
  req?: boolean
  options?: FieldOption[]
  visibleIf?: { key: string; value: string }
}

interface CrudFormProps {
  section: string
  data: any | null
  onSave: (data: any) => void
  onCancel: () => void
}

const formFields: Record<string, Field[]> = {
  noticias: [
    { key: 'titulo', label: 'Título' },
    { key: 'fecha', label: 'Fecha' },
    { key: 'categoria', label: 'Categoría' },
    { key: 'descripcion', label: 'Descripción', type: 'textarea' },
    { key: 'contenido_completo', label: 'Contenido completo', type: 'richtext' },
    { key: 'imagen', label: 'Imagen', type: 'image' },
    { key: 'enlace', label: 'Enlace' },
    { key: 'texto_enlace', label: 'Texto del enlace' },
  ],
  servicios: [
    { key: 'titulo', label: 'Nombre del servicio' },
    { key: 'descripcion', label: 'Descripción', type: 'textarea' },
    { key: 'icono_path', label: 'SVG path d', type: 'textarea' },
  ],
  enlaces: [
    { key: 'nombre', label: 'Nombre de la institución' },
    { key: 'descripcion', label: 'Descripción breve' },
    { key: 'url', label: 'URL del sitio' },
    { key: 'icono', label: 'Identificador / Icono', req: false },
  ],
  eventos: [
    { key: 'titulo', label: 'Título' },
    { key: 'tipo', label: 'Tipo' },
    { key: 'emoji', label: 'Identificador / Icono' },
    { key: 'abreviatura', label: 'Abreviatura (ej: ARTE)' },
    { key: 'descripcion', label: 'Descripción', type: 'textarea' },
    { key: 'ubicacion', label: 'Ubicación' },
    { key: 'fecha', label: 'Fecha' },
  ],
  programas: [
    { key: 'titulo', label: 'Nombre del programa' },
    { key: 'descripcion', label: 'Descripción', type: 'textarea' },
    { key: 'icono_viewbox', label: 'SVG viewBox', default: '0 0 24 24' },
    { key: 'icono_path', label: 'SVG path d', type: 'textarea' },
    { key: 'enlace', label: 'Enlace' },
    { key: 'texto_enlace', label: 'Texto del enlace' },
  ],
  testimonios: [
    { key: 'nombre', label: 'Nombre' },
    { key: 'rol', label: 'Rol / Cargo' },
    { key: 'texto', label: 'Testimonio', type: 'textarea' },
    { key: 'estrellas', label: 'Estrellas (1-5)', type: 'number', default: '5', req: false },
  ],
  galeria: [
    { key: 'imagen', label: 'Imagen', type: 'image' },
    { key: 'titulo', label: 'Título / Descripción' },
  ],
  instagram: [
    { key: 'src', label: 'URL de imagen', type: 'image' },
    { key: 'caption', label: 'Descripción', type: 'textarea' },
    { key: 'url', label: 'Enlace a Instagram' },
  ],
  calendario: [
    { key: 'titulo', label: 'Título de la actividad' },
    { key: 'descripcion', label: 'Descripción', type: 'textarea', req: false },
    { key: 'fecha_inicio', label: 'Fecha de inicio (YYYY-MM-DD)' },
    { key: 'fecha_fin', label: 'Fecha fin (YYYY-MM-DD, opcional)', req: false },
    { key: 'hora', label: 'Hora (ej: 10:00 AM, opcional)', req: false },
    { key: 'ubicacion', label: 'Ubicación (opcional)', req: false },
    { key: 'color', label: 'Color en hex (ej: #003876)', default: '#003876' },
    { key: 'todo_el_dia', label: 'Todo el día (1 = sí, 0 = no)', type: 'number', default: '0' },
    { key: 'repeticion', label: 'Repetición', type: 'select', default: '', options: [
      { value: '', label: 'No repetir' },
      { value: 'semanal', label: 'Semanal (días específicos)' },
      { value: 'mensual', label: 'Mensual (día del mes)' },
    ]},
    { key: 'repeticion_dias', label: 'Días (semanal: 1=Lun,2=Mar,... separados por coma; mensual: número del día)', visibleIf: { key: 'repeticion', value: 'semanal' } },
    { key: 'repeticion_dias', label: 'Día del mes (1-31)', visibleIf: { key: 'repeticion', value: 'mensual' } },
  ],
}

const sectionNames: Record<string, string> = {
  noticias: 'Noticia', servicios: 'Servicio', enlaces: 'Enlace',
  eventos: 'Evento', programas: 'Programa', testimonios: 'Testimonio',
  galeria: 'Imagen', instagram: 'Post de Instagram', calendario: 'Actividad',
}

export default function CrudForm({ section, data, onSave, onCancel }: CrudFormProps) {
  const fields = formFields[section] || []
  const [values, setValues] = useState<Record<string, string>>({})
  const [repeticionTipo, setRepeticionTipo] = useState('')
  const [repeticionDiasSemana, setRepeticionDiasSemana] = useState<string[]>([])
  const [uploading, setUploading] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const activeFieldRef = useRef<string>('')

  useEffect(() => {
    if (data) {
      const v: Record<string, string> = {}
      fields.forEach(f => { v[f.key] = String(data[f.key] ?? f.default ?? '') })
      setValues(v)
      setRepeticionTipo(String(data.repeticion ?? ''))
      setTimeout(() => {
        const raw = data.repeticion_dias || ''
        setRepeticionDiasSemana(raw ? raw.split(',').filter(Boolean) : [])
      }, 0)
    } else {
      const v: Record<string, string> = {}
      fields.forEach(f => { v[f.key] = f.default ?? '' })
      setValues(v)
      setRepeticionTipo('')
      setRepeticionDiasSemana([])
    }
  }, [data, section])

  const handleChange = (key: string, value: string) => {
    setValues(prev => ({ ...prev, [key]: value }))
  }

  const handleImageUpload = async (fieldKey: string, file: File) => {
    activeFieldRef.current = fieldKey
    setUploading(fieldKey)
    try {
      const fd = new FormData()
      fd.append('file', file)
      const res = await fetch('/api/upload-image', { method: 'POST', body: fd })
      if (!res.ok) throw new Error('Error al subir')
      const json = await res.json()
      handleChange(fieldKey, json.url)
    } catch (err: any) {
      alert('Error al subir imagen: ' + (err.message || 'desconocido'))
    } finally {
      setUploading(null)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const obj: any = {}
    fields.forEach(f => {
      let val: any = values[f.key] ?? ''
      if (f.type === 'number') val = Number(val)
      obj[f.key] = val
    })
    onSave(obj)
  }

  const isNew = !data?.id

  return (
    <>
      <h3>{isNew ? 'Nuevo' : 'Editar'} {sectionNames[section] || section}</h3>
      <form onSubmit={handleSubmit}>
        {fields.filter(f => !f.visibleIf || values[f.visibleIf.key] === f.visibleIf.value).map(f => (
          <div className="form-group" key={f.key}>
            <label>{f.label}</label>

            {f.type === 'textarea' ? (
              <textarea required={f.req !== false} value={values[f.key] ?? ''} onChange={e => handleChange(f.key, e.target.value)} />
            ) : f.type === 'richtext' ? (
              <RichTextEditor value={values[f.key] ?? ''} onChange={val => handleChange(f.key, val)} />
            ) : f.type === 'select' && f.options ? (
              <select value={values[f.key] ?? ''} onChange={e => { handleChange(f.key, e.target.value); if (f.key === 'repeticion') setRepeticionTipo(e.target.value) }}>
                {f.options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            ) : f.key === 'repeticion_dias' && repeticionTipo === 'semanal' ? (
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', padding: '4px 0' }}>
                {[{v:'1',l:'Lun'},{v:'2',l:'Mar'},{v:'3',l:'Mié'},{v:'4',l:'Jue'},{v:'5',l:'Vie'},{v:'6',l:'Sáb'},{v:'0',l:'Dom'}].map(d => (
                  <label key={d.v} style={{ display:'flex',alignItems:'center',gap:4,cursor:'pointer',background: repeticionDiasSemana.includes(d.v) ? 'var(--blue-mid)' : '#f1f5f9', padding:'4px 10px', borderRadius:6, fontSize:13, fontWeight: repeticionDiasSemana.includes(d.v) ? 700 : 400, color: repeticionDiasSemana.includes(d.v) ? '#fff' : '#1e293b', transition:'all .15s' }}>
                    <input type="checkbox" checked={repeticionDiasSemana.includes(d.v)} onChange={e => {
                      const next = e.target.checked ? [...repeticionDiasSemana, d.v] : repeticionDiasSemana.filter(x => x !== d.v)
                      setRepeticionDiasSemana(next)
                      handleChange('repeticion_dias', next.join(','))
                    }} style={{ display: 'none' }} />
                    {d.l}
                  </label>
                ))}
              </div>
            ) : f.type === 'image' ? (
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                <input
                  type="text"
                  value={values[f.key] ?? ''}
                  required={f.req !== false}
                  onChange={e => handleChange(f.key, e.target.value)}
                  placeholder="URL de imagen o sube una..."
                  style={{ flex: 1, minWidth: 180 }}
                />
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={e => {
                    const file = e.target.files?.[0]
                    if (file) handleImageUpload(f.key, file)
                    e.target.value = ''
                  }}
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading === f.key}
                  style={{
                    padding: '6px 14px',
                    background: uploading === f.key ? '#94a3b8' : '#003876',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 6,
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: uploading === f.key ? 'not-allowed' : 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {uploading === f.key ? 'Subiendo...' : 'Subir imagen'}
                </button>
                {values[f.key] && (
                  <div style={{ position: 'relative', width: 60, height: 40, borderRadius: 4, overflow: 'hidden', border: '1px solid #e2e8f0', flexShrink: 0 }}>
                    <img src={values[f.key]} alt="preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { (e.target as HTMLElement).style.display = 'none' }} />
                  </div>
                )}
              </div>
            ) : (
              <input type={f.type || 'text'} value={values[f.key] ?? ''} required={f.req !== false} onChange={e => handleChange(f.key, e.target.value)} />
            )}
          </div>
        ))}
        <div className="modal-actions">
          <button type="button" className="btn btn-ghost" onClick={onCancel}>Cancelar</button>
          <button type="submit" className="btn btn-primary">{isNew ? 'Crear' : 'Guardar'}</button>
        </div>
      </form>
    </>
  )
}
