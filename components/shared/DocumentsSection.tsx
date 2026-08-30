'use client'

import { useState, useEffect } from 'react'

const FILE_COLORS: Record<string, { bg: string; color: string; label: string }> = {
  xlsx: { bg: '#e8f5e9', color: '#2e7d32', label: 'Excel' },
  xls:  { bg: '#e8f5e9', color: '#2e7d32', label: 'Excel' },
  csv:  { bg: '#e8f5e9', color: '#2e7d32', label: 'CSV'   },
  pdf:  { bg: '#fdecea', color: '#c0392b', label: 'PDF'   },
  doc:  { bg: '#e3f2fd', color: '#1565c0', label: 'Word'  },
  docx: { bg: '#e3f2fd', color: '#1565c0', label: 'Word'  },
  pptx: { bg: '#fff3e0', color: '#e65100', label: 'PPT'   },
  ppt:  { bg: '#fff3e0', color: '#e65100', label: 'PPT'   },
  txt:  { bg: '#f5f5f5', color: '#555',    label: 'TXT'   },
}

function getExt(name: string) {
  return (name || '').split('.').pop()?.toLowerCase() ?? ''
}

function fmtSize(bytes: number) {
  if (!bytes) return ''
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / 1024 / 1024).toFixed(2) + ' MB'
}

export default function DocumentsSection() {
  const [docs, setDocs] = useState<any[]>([])
  useEffect(() => {
    fetch('/api/upload')
      .then(r => r.ok ? r.json() : [])
      .then(setDocs)
      .catch(() => {})
  }, [])

  if (!docs.length) return null

  const groups: Record<string, any[]> = {}
  docs.forEach(d => {
    const cat = d.category || 'General'
    if (cat === 'Planificación') return
    if (!groups[cat]) groups[cat] = []
    groups[cat].push(d)
  })

  return (
    <>
      {Object.entries(groups).map(([cat, items]) => (
        <div className="transp-category-block" key={cat} style={{ marginTop: '28px' }}>
          <div className="transp-cat-label">
            <span className="transp-cat-icon" style={{ background: '#e0edff' }}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#005baa" strokeWidth="2.2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/>
              </svg>
            </span>
            <span>{cat}</span>
          </div>
          <div className="transp-docs-grid">
            {items.map((doc: any) => {
              const ext = getExt(doc.originalName)
              const fc = FILE_COLORS[ext] || { bg: '#f1f5f9', color: '#475569', label: ext.toUpperCase() || 'DOC' }
              return (
                <a key={doc.id} href={doc.url} target="_blank" rel="noopener" className="transp-doc-card animate-on-scroll">
                  <div className="transp-doc-icon" style={{ background: fc.bg, color: fc.color }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                    </svg>
                  </div>
                  <div className="transp-doc-info">
                    <div className="transp-doc-title">{doc.title}</div>
                    <div className="transp-doc-meta">
                      {doc.description ? doc.description + ' · ' : ''}
                      <span style={{ background: fc.bg, color: fc.color, borderRadius: '4px', padding: '1px 6px', fontSize: '.68rem', fontWeight: 700 }}>{fc.label}</span>
                      {doc.size ? <span style={{ marginLeft: '6px' }}>{fmtSize(doc.size)}</span> : null}
                    </div>
                  </div>
                  <div className="transp-doc-dl">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      ))}
    </>
  )
}
