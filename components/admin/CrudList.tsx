'use client'

import type { ReactNode } from 'react'
import { getTabIcon } from './Icons'

interface CrudListProps {
  section: string
  items: any[]
  onNew: () => void
  onEdit: (index: number) => void
  onDelete: (index: number) => void
  renderItem: (item: any, index: number) => ReactNode
  emptyText?: string
}

export default function CrudList({ section, items, onNew, onEdit, onDelete, renderItem, emptyText }: CrudListProps) {
  const names: Record<string, string> = {
    noticias: 'Noticia', servicios: 'Servicio', enlaces: 'Enlace',
    eventos: 'Evento', programas: 'Programa', testimonios: 'Testimonio',
    galeria: 'Imagen', instagram: 'Post de Instagram',
  }
  const label = names[section] || section

  return (
    <div className="card">
      <div className="card-header">
        <span>{items.length} {label}(s)</span>
        <button className="btn btn-primary btn-sm" onClick={onNew}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Nueva
        </button>
      </div>
      <ul className="item-list">
        {items.length === 0 ? (
          <li className="empty-state">
            <div style={{ marginBottom: '0.75rem', opacity: 0.5 }}>{getTabIcon(section, 36)}</div>
            <p>{emptyText || `No hay ${label.toLowerCase()}s todavía`}</p>
          </li>
        ) : items.map((item: any, i: number) => (
          <li key={item.id ?? i}>
            <div className="item-info">{renderItem(item, i)}</div>
            <div className="item-actions">
              <button className="btn btn-ghost btn-sm" onClick={() => onEdit(i)} title="Editar">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              </button>
              <button className="btn btn-danger btn-sm" onClick={() => onDelete(i)} title="Eliminar">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
