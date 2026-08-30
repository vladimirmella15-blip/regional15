'use client'

import { useState, useRef, useEffect } from 'react'

interface SearchResult {
  id: string
  tipo: string
  titulo: string
  descripcion: string
  url: string
  fecha: string
}

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const handleSearch = (value: string) => {
    setQuery(value)
    clearTimeout(debounceRef.current)
    if (value.trim().length < 2) {
      setResults([])
      setOpen(false)
      return
    }
    debounceRef.current = setTimeout(async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(value)}`)
        const data = await res.json()
        setResults(data)
        setOpen(true)
      } catch {
        setResults([])
      } finally {
        setLoading(false)
      }
    }, 300)
  }

  const tipoStyles: Record<string, { bg: string; color: string }> = {
    Noticia: { bg: '#e0edff', color: '#003876' },
    Evento: { bg: '#fef2f2', color: '#dc2626' },
    Programa: { bg: '#f0fdf4', color: '#16a34a' },
  }

  return (
    <div ref={ref} style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
      <div style={{ display: 'flex', alignItems: 'center', background: 'var(--card-bg)', borderRadius: '30px', border: '1.5px solid var(--gray-mid)', padding: '0 16px', transition: 'all 0.2s' }}>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--text-muted)" strokeWidth="2.5" style={{ flexShrink: 0 }}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input
          type="text" placeholder="Buscar noticias, eventos..." value={query}
          onChange={e => handleSearch(e.target.value)}
          onFocus={() => { if (results.length > 0) setOpen(true) }}
          style={{ border: 'none', background: 'transparent', padding: '10px 12px', fontSize: '.85rem', width: '100%', outline: 'none', color: 'var(--text-main)' }}
        />
        {loading && <div style={{ width: 16, height: 16, border: '2px solid #e2e8f0', borderTopColor: '#1d4ed8', borderRadius: '50%', animation: 'spin 0.6s linear infinite' }} />}
      </div>

      {open && results.length > 0 && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0, marginTop: '4px',
          background: 'var(--card-bg)', borderRadius: '12px', boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
          border: '1px solid var(--gray-mid)', zIndex: 1000, maxHeight: '400px', overflowY: 'auto'
        }}>
          {results.map(r => (
            <a key={`${r.tipo}-${r.id}`} href={r.url} style={{
              display: 'flex', flexDirection: 'column', gap: '4px', padding: '12px 16px',
              textDecoration: 'none', color: 'var(--text-main)', borderBottom: '1px solid var(--gray-light)',
              transition: 'background 0.15s'
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-alt)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{
                  background: (tipoStyles[r.tipo]?.bg || '#f1f5f9'),
                  color: (tipoStyles[r.tipo]?.color || '#64748b'),
                  fontSize: '.65rem', fontWeight: 700, padding: '1px 8px', borderRadius: '20px'
                }}>{r.tipo}</span>
                {r.fecha && <span style={{ fontSize: '.7rem', color: 'var(--text-muted)' }}>{r.fecha}</span>}
              </div>
              <span style={{ fontWeight: 600, fontSize: '.85rem' }}>{r.titulo}</span>
              <span style={{ fontSize: '.75rem', color: 'var(--text-muted)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{r.descripcion}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
