// components/landing/BuscarCentroSection.tsx
'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { centrosPorDistrito } from '@/data/centros'
import { centrosPrivadosPorDistrito } from '@/data/centros-privados'
import { ubicacionesPorCodigo } from '@/data/ubicaciones'

const PAGE_SIZE = 12

interface CentroItem {
  codigo?: string
  nombre: string
  nivel?: string
  sector?: string
  tipo: 'Público' | 'Privado' | 'Semioficial'
  secciones?: number
  matricula?: number
  distrito?: string
  distritoCodigo?: string
}

function todosLosCentros(): CentroItem[] {
  const items: CentroItem[] = []
  centrosPorDistrito.forEach(d => {
    d.centros.forEach(c => {
      items.push({
        codigo: c.codigo,
        nombre: c.nombre,
        nivel: c.nivel,
        secciones: c.secciones,
        matricula: c.matricula,
        tipo: c.tipo || 'Público',
        distrito: d.nombre,
        distritoCodigo: d.codigo,
      })
    })
  })
  centrosPrivadosPorDistrito.forEach(d => {
    d.centros.forEach(c => {
      items.push({
        codigo: c.codigo,
        nombre: c.nombre,
        nivel: c.nivel,
        matricula: c.matricula,
        tipo: 'Privado',
        distrito: d.nombre,
        distritoCodigo: d.codigo,
      })
    })
  })
  return items
}

export default function BuscarCentroSection() {
  const [query, setQuery] = useState('')
  const [distrito, setDistrito] = useState('todos')
  const [tipo, setTipo] = useState<'Todos' | 'Público' | 'Privado' | 'Semioficial'>('Todos')
  const [visible, setVisible] = useState(PAGE_SIZE)
  const [centros, setCentros] = useState<CentroItem[]>([])

  useEffect(() => {
    setCentros(todosLosCentros())
  }, [])

  const distritos = useMemo(() => {
    const map = new Map<string, string>()
    centros.forEach(c => {
      if (c.distrito && c.distritoCodigo) map.set(c.distritoCodigo, c.distrito)
    })
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]))
  }, [centros])

  const q = query.trim().toLocaleLowerCase()
  const filtrados = useMemo(() => {
    return centros.filter(c => {
      if (distrito !== 'todos' && c.distritoCodigo !== distrito) return false
      if (tipo !== 'Todos' && c.tipo !== tipo) return false
      if (!q) return true
      return (
        (c.nombre || '').toLocaleLowerCase().includes(q) ||
        (c.codigo || '').toLocaleLowerCase().includes(q) ||
        (c.sector || '').toLocaleLowerCase().includes(q) ||
        (c.nivel || '').toLocaleLowerCase().includes(q)
      )
    })
  }, [centros, distrito, tipo, q])

  useEffect(() => {
    setVisible(PAGE_SIZE)
  }, [q, distrito, tipo])

  const shown = filtrados.slice(0, visible)

  return (
    <section id="buscar-centro" className="section buscar-centro-section" aria-label="Buscar centro educativo">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            Búsqueda de Centros
          </span>
          <h2>Buscar Centro Educativo</h2>
          <p>Encuentra centros públicos y privados de la Regional 15 por nombre, código SIGERD o sector, en Los Alcarrizos, Santo Domingo, Santo Domingo Oeste y Pedro Brand.</p>
          <div className="section-divider"></div>
        </div>

        {/* ── FILTROS ── */}
        <div className="buscar-centro-filtros" role="search">
          <div className="buscar-centro-search">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input
              type="search"
              placeholder="Nombre del centro, código SIGERD o sector…"
              value={query}
              onChange={e => setQuery(e.target.value)}
              aria-label="Buscar centro educativo por nombre, código o sector"
            />
            {query && (
              <button type="button" className="buscar-centro-clear" onClick={() => setQuery('')} aria-label="Limpiar búsqueda">&times;</button>
            )}
          </div>
          <select
            value={distrito}
            onChange={e => setDistrito(e.target.value)}
            aria-label="Filtrar por distrito"
          >
            <option value="todos">Todos los distritos</option>
            {distritos.map(([cod, nom]) => (
              <option key={cod} value={cod}>{cod} · {nom}</option>
            ))}
          </select>
          <select
            value={tipo}
            onChange={e => setTipo(e.target.value as typeof tipo)}
            aria-label="Filtrar por tipo de centro"
          >
            {(['Todos', 'Público', 'Privado', 'Semioficial'] as const).map(t => (
              <option key={t} value={t}>{t === 'Todos' ? 'Público y privado' : t}</option>
            ))}
          </select>
        </div>

        <p className="buscar-centro-count" role="status">
          {filtrados.length.toLocaleString('es-DO')} centros {q && `para «${query}»`}
          {distrito !== 'todos' && ` · ${distritos.find(([c]) => c === distrito)?.[1]}`}
        </p>

        {/* ── RESULTADOS ── */}
        {filtrados.length === 0 ? (
          <div className="buscar-centro-empty">
            <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="var(--gray-mid)" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <p>No se encontraron centros que coincidan con tu búsqueda.</p>
            <p className="buscar-centro-empty-sub">Prueba con otro nombre, código SIGERD o sector.</p>
          </div>
        ) : (
          <>
            <div className="buscar-centro-grid">
              {shown.map((c, i) => {
                const ubicacion = c.codigo ? ubicacionesPorCodigo[c.codigo] : undefined
                return (
                  <article className="buscar-centro-card" key={`${c.codigo || ''}-${c.nombre}-${i}`}>
                    <div className="buscar-centro-card-top">
                      <span className="buscar-centro-code">{c.codigo || '—'}</span>
                      <span className={`buscar-centro-tipo tipo-${c.tipo === 'Público' ? 'pub' : c.tipo === 'Privado' ? 'priv' : 'semi'}`}>{c.tipo}</span>
                    </div>
                    <h3>{c.nombre}</h3>
                    <p className="buscar-centro-meta">
                      {c.nivel ? `${c.nivel} · ` : ''}
                      {c.secciones != null ? `${c.secciones} secciones · ` : ''}
                      {c.matricula != null ? `${c.matricula.toLocaleString('es-DO')} estudiantes` : 'SIGERD'}
                    </p>
                    {c.distrito && (
                      <span className="buscar-centro-distrito">
                        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/></svg>
                        Distrito {c.distritoCodigo} · {c.distrito}
                      </span>
                    )}
                    {ubicacion?.direccion && (
                      <span className="buscar-centro-address">{ubicacion.direccion}</span>
                    )}
                    {ubicacion?.enlace && (
                      <a className="buscar-centro-maps" href={ubicacion.enlace} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${c.nombre} en Google Maps`}>
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        Ver en Google Maps
                      </a>
                    )}
                  </article>
                )
              })}
            </div>
            {shown.length < filtrados.length && (
              <div className="buscar-centro-more-wrap">
                <button type="button" className="buscar-centro-more" onClick={() => setVisible(v => v + PAGE_SIZE)}>
                  Mostrar más centros ({filtrados.length - shown.length} restantes)
                </button>
              </div>
            )}
          </>
        )}

        <p className="buscar-centro-note">
          Listado oficial de centros educativos según MINERD (SIGERD). La Regional 15 administra más de 1,400 centros en 6 distritos.
        </p>
      </div>
    </section>
  )
}
