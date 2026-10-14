'use client'

import { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import * as maplibregl from 'maplibre-gl'
import type { Map as MapLibreMap, GeoJSONSource, MapMouseEvent } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

interface PropsCentro {
  codigo: string
  nombre: string
  nivel: string | null
  tipo: string | null
  distrito: string | null
  distritoNombre: string | null
  sector: string | null
  direccion: string | null
  enlace: string | null
  secciones: number | null
  matricula: number | null
}

interface Feature {
  type: 'Feature'
  geometry: { type: 'Point'; coordinates: [number, number] }
  properties: PropsCentro
}

interface CentroFuente extends PropsCentro {
  lng: number
  lat: number
}

type Filtros = {
  distrito: string
  nivel: string
  tipo: string
  busqueda: string
}

const SIN_FILTROS: Filtros = { distrito: '', nivel: '', tipo: '', busqueda: '' }

// OpenStreetMap raster tiles require no API key. Keep a configurable override
// for deployments that use a different tile provider.
const TESELAS = process.env.NEXT_PUBLIC_MAP_TILES || 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
const ATRIBUCION =
  '<a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">&copy; OpenStreetMap</a>'

// Mismos colores que las insignias de tipo de la web (globals.css).
const COLOR_TIPO: Record<string, string> = {
  Público: '#15803d',
  Privado: '#b45309',
  Semioficial: '#1d4ed8',
}
const COLOR_TIPO_CLARO: Record<string, string> = {
  Público: '#86efac',
  Privado: '#fcd34d',
  Semioficial: '#93c5fd',
}
const COLOR_POR_DEFECTO = '#0C2D6B'

const normalizar = (s: string) =>
  s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().trim()

const enlaceDeGoogle = (c: PropsCentro) =>
  c.enlace ||
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    [c.nombre, c.codigo, 'República Dominicana'].filter(Boolean).join(' ')
  )}`

export default function MapaCentros() {
  const contenedor = useRef<HTMLDivElement>(null)
  const mapa = useRef<MapLibreMap | null>(null)
  const [todos, setTodos] = useState<CentroFuente[]>([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filtros, setFiltros] = useState<Filtros>(SIN_FILTROS)
  const [seleccion, setSeleccion] = useState<PropsCentro | null>(null)
  const [listo, setListo] = useState(false)

  // --- Cargar el GeoJSON generado por scripts/generar-geojson.js ---
  useEffect(() => {
    let vivo = true
    fetch('/data/centros.geojson')
      .then(r => {
        if (!r.ok) throw new Error(`No se pudo cargar el mapa (${r.status})`)
        return r.json()
      })
      .then((fc: { features: Feature[] }) => {
        if (!vivo) return
        setTodos(
          fc.features.map(f => ({
            ...f.properties,
            lng: f.geometry.coordinates[0],
            lat: f.geometry.coordinates[1],
          }))
        )
      })
      .catch(e => vivo && setError(e.message))
      .finally(() => vivo && setCargando(false))
    return () => {
      vivo = false
    }
  }, [])

  const aplicarFiltros = useCallback(
    (f: Filtros, lista: CentroFuente[] = todos): Feature[] => {
      const q = normalizar(f.busqueda)
      return lista
        .filter(c => (f.distrito ? c.distrito === f.distrito : true))
        .filter(c => (f.nivel ? c.nivel === f.nivel : true))
        .filter(c => (f.tipo ? c.tipo === f.tipo : true))
        .filter(c =>
          q
            ? normalizar(c.nombre).includes(q) ||
              c.codigo.includes(q) ||
              normalizar(c.sector || '').includes(q) ||
              normalizar(c.distritoNombre || '').includes(q)
            : true
        )
        .map(c => ({
          type: 'Feature' as const,
          geometry: { type: 'Point' as const, coordinates: [c.lng, c.lat] as [number, number] },
          properties: {
            codigo: c.codigo,
            nombre: c.nombre,
            nivel: c.nivel,
            tipo: c.tipo,
            distrito: c.distrito,
            distritoNombre: c.distritoNombre,
            sector: c.sector,
            direccion: c.direccion,
            enlace: c.enlace,
            secciones: c.secciones,
            matricula: c.matricula,
          },
        }))
    },
    [todos]
  )

  const visibles = useMemo(() => aplicarFiltros(filtros), [aplicarFiltros, filtros])

  const opciones = useMemo(() => {
    const unicos = (campo: keyof PropsCentro) =>
      [...new Set(todos.map(c => c[campo]).filter(Boolean))].sort() as string[]
    return {
      distritos: unicos('distritoNombre').map(n => ({ valor: todos.find(c => c.distritoNombre === n)!.distrito || '', etiqueta: n })),
      niveles: unicos('nivel'),
      tipos: unicos('tipo'),
    }
  }, [todos])

  // --- Crear el mapa una sola vez ---
  useEffect(() => {
    if (!contenedor.current || mapa.current || todos.length === 0) return

    const inicial = aplicarFiltros(SIN_FILTROS, todos)
    const lngs = inicial.map(f => f.geometry.coordinates[0])
    const lats = inicial.map(f => f.geometry.coordinates[1])

    maplibregl.setWorkerUrl('/maplibre-gl-worker.mjs')
    const workerUrl = maplibregl.getWorkerUrl()
    if (workerUrl !== '/maplibre-gl-worker.mjs') {
      setError('No se pudo configurar el worker del mapa.')
      return
    }

    const instancia = new maplibregl.Map({
      container: contenedor.current,
      style: {
        version: 8,
        sources: {
          carto: {
            type: 'raster',
            tiles: [TESELAS],
            tileSize: 256,
            attribution: ATRIBUCION,
          },
        },
        layers: [{ id: 'carto-base', type: 'raster', source: 'carto' }],
      },
      bounds: [
        [Math.min(...lngs), Math.min(...lats)],
        [Math.max(...lngs), Math.max(...lats)],
      ],
      fitBoundsOptions: { padding: 48 },
      minZoom: 10,
      maxZoom: 18,
      attributionControl: false,
    })

    mapa.current = instancia

    instancia.addControl(new maplibregl.NavigationControl(), 'top-right')
    instancia.addControl(new maplibregl.AttributionControl({ compact: true, customAttribution: 'Regional 15 MINERD' }))

    instancia.on('load', () => {
      instancia.addSource('centros', {
        type: 'geojson',
        data: { type: 'FeatureCollection', features: inicial },
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 48,
      })

      // Círculos de agrupamiento: el tamaño crece con la cantidad.
      instancia.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'centros',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': ['step', ['get', 'point_count'], COLOR_POR_DEFECTO, 25, '#1A4A8A', 100, '#12377a'],
          'circle-radius': ['step', ['get', 'point_count'], 16, 25, 22, 100, 30],
          'circle-stroke-width': 2,
          'circle-stroke-color': '#ffffff',
        },
      })

      instancia.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'centros',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': ['get', 'point_count_abbreviated'],
          'text-size': 12,
        },
        paint: { 'text-color': '#ffffff' },
      })

      instancia.addLayer({
        id: 'puntos',
        type: 'circle',
        source: 'centros',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color': [
            'match',
            ['get', 'tipo'],
            'Público', COLOR_TIPO['Público'],
            'Privado', COLOR_TIPO['Privado'],
            'Semioficial', COLOR_TIPO['Semioficial'],
            COLOR_POR_DEFECTO,
          ],
          'circle-radius': ['interpolate', ['linear'], ['zoom'], 12, 5, 16, 9],
          'circle-stroke-width': 1.5,
          'circle-stroke-color': '#ffffff',
        },
      })

      // Clic en un grupo: zoom hasta que se separe.
      instancia.on('click', 'clusters', (e: MapMouseEvent) => {
        const features = instancia.queryRenderedFeatures(e.point, { layers: ['clusters'] })
        const clusterId = features[0]?.properties?.cluster_id
        if (typeof clusterId !== 'number') return
        const source = instancia.getSource('centros') as GeoJSONSource
        void source.getClusterExpansionZoom(clusterId).then(zoom => {
          const [lng, lat] = (features[0].geometry as { coordinates: number[] }).coordinates
          instancia.easeTo({ center: [lng, lat], zoom })
        })
      })

      // Clic en un centro: ficha en el panel lateral.
      instancia.on('click', 'puntos', (e: MapMouseEvent) => {
        const f = instancia.queryRenderedFeatures(e.point, { layers: ['puntos'] })[0]
        if (f?.properties) setSeleccion(f.properties as unknown as PropsCentro)
      })

      for (const capa of ['clusters', 'puntos']) {
        instancia.on('mouseenter', capa, () => {
          instancia.getCanvas().style.cursor = 'pointer'
        })
        instancia.on('mouseleave', capa, () => {
          instancia.getCanvas().style.cursor = ''
        })
      }

      setListo(true)
    })

    instancia.on('error', e => {
      // Las teselas fallan de forma intermitente; no se rompe la app por eso.
      console.warn('Mapa:', e.error?.message)
    })

    return () => {
      instancia.remove()
      mapa.current = null
    }
    // Solo al montar: los filtros se aplican con setData, no reconstruyendo el mapa.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos])

  // --- Reflejar los filtros en el mapa ---
  useEffect(() => {
    if (!listo || !mapa.current) return
    const source = mapa.current.getSource('centros') as GeoJSONSource | undefined
    if (!source) return
    source.setData({ type: 'FeatureCollection', features: visibles })

    // Encuadra el mapa si el filtro deja una zona distinta.
    if (visibles.length > 0) {
      const lngs = visibles.map(f => f.geometry.coordinates[0])
      const lats = visibles.map(f => f.geometry.coordinates[1])
      mapa.current.fitBounds(
        [
          [Math.min(...lngs), Math.min(...lats)],
          [Math.max(...lngs), Math.max(...lats)],
        ],
        { padding: 64, maxZoom: 14, duration: 700 }
      )
    }
  }, [visibles, listo])

  const buscarYIr = (texto: string) => {
    setFiltros(f => ({ ...f, busqueda: texto }))
  }

  const conteoPorTipo = useMemo(() => {
    const c: Record<string, number> = {}
    for (const v of visibles) c[v.properties.tipo || '—'] = (c[v.properties.tipo || '—'] || 0) + 1
    return c
  }, [visibles])

  return (
    <div className="mapa-centros">
      {/* ── Controles ── */}
      <div className="mapa-controles">
        <div className="mapa-buscar">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="search"
            value={filtros.busqueda}
            onChange={e => buscarYIr(e.target.value)}
            placeholder="Nombre del centro, código SIGERD o sector…"
            aria-label="Buscar centro en el mapa"
          />
          {filtros.busqueda && (
            <button type="button" onClick={() => buscarYIr('')} aria-label="Limpiar búsqueda">&times;</button>
          )}
        </div>

        <div className="mapa-selects">
          <select value={filtros.distrito} onChange={e => setFiltros(f => ({ ...f, distrito: e.target.value }))} aria-label="Filtrar por distrito">
            <option value="">Todos los distritos</option>
            {opciones.distritos.map(d => (
              <option key={d.valor} value={d.valor}>{d.etiqueta}</option>
            ))}
          </select>
          <select value={filtros.nivel} onChange={e => setFiltros(f => ({ ...f, nivel: e.target.value }))} aria-label="Filtrar por nivel">
            <option value="">Todos los niveles</option>
            {opciones.niveles.map(n => <option key={n} value={n}>{n}</option>)}
          </select>
          <select value={filtros.tipo} onChange={e => setFiltros(f => ({ ...f, tipo: e.target.value }))} aria-label="Filtrar por tipo">
            <option value="">Público y privado</option>
            {opciones.tipos.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <p className="mapa-conteo" role="status">
          {cargando
            ? 'Cargando el mapa…'
            : `${visibles.length.toLocaleString('es-DO')} de ${todos.length.toLocaleString('es-DO')} centros en el mapa`}
        </p>
      </div>

      {error && <p className="mapa-error">{error}</p>}

      <div className="mapa-lienzo">
        <div ref={contenedor} className="mapa-caja" aria-label="Mapa de centros educativos de la Regional 15" />

        {/* ── Leyenda ── */}
        <div className="mapa-leyenda">
          <strong>Leyenda</strong>
          {(['Público', 'Privado', 'Semioficial'] as const).map(t => (
            <span key={t} className="mapa-leyenda-fila">
              <i style={{ background: COLOR_TIPO_CLARO[t], borderColor: COLOR_TIPO[t] }} />
              {t}
              {conteoPorTipo[t] != null && <b>{conteoPorTipo[t]}</b>}
            </span>
          ))}
          <span className="mapa-leyenda-fila">
            <i style={{ background: COLOR_POR_DEFECTO, borderColor: COLOR_POR_DEFECTO }} />
            Agrupados por cercanía
          </span>
        </div>

        {/* ── Ficha del centro seleccionado ── */}
        {seleccion && (
          <div className="mapa-ficha" role="dialog" aria-label={seleccion.nombre}>
            <button type="button" className="mapa-ficha-cerrar" onClick={() => setSeleccion(null)} aria-label="Cerrar">
              &times;
            </button>
            <span className="mapa-ficha-codigo">{seleccion.codigo}</span>
            <h3>{seleccion.nombre}</h3>
            <div className="mapa-ficha-tags">
              {seleccion.tipo && (
                <span className={`org-school-tipo org-school-tipo-${seleccion.tipo === 'Público' ? 'pub' : seleccion.tipo === 'Privado' ? 'priv' : 'semi'}`}>
                  {seleccion.tipo}
                </span>
              )}
              {seleccion.nivel && <span className="buscar-centro-nivel">{seleccion.nivel}</span>}
            </div>
            {seleccion.sector && <p className="mapa-ficha-sector">Sector {seleccion.sector}</p>}
            {seleccion.direccion && <p className="mapa-ficha-dir">{seleccion.direccion}</p>}
            {seleccion.distritoNombre && <p className="mapa-ficha-dir">Distrito {seleccion.distrito} · {seleccion.distritoNombre}</p>}
            {(seleccion.secciones != null || seleccion.matricula != null) && (
              <p className="mapa-ficha-dir">
                {seleccion.secciones != null ? `${seleccion.secciones} secciones` : ''}
                {seleccion.secciones != null && seleccion.matricula != null ? ' · ' : ''}
                {seleccion.matricula != null ? `${seleccion.matricula.toLocaleString('es-DO')} estudiantes` : ''}
              </p>
            )}
            <a className="buscar-centro-maps" href={enlaceDeGoogle(seleccion)} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Ver en Google Maps
            </a>
          </div>
        )}
      </div>

      <p className="mapa-nota">
        {visibles.length === 0 && todos.length > 0
          ? 'Ningún centro coincide con los filtros seleccionados.'
          : 'Al alejar, los centros cercanos se agrupan en un círculo con la cantidad. Toca el círculo para separarlos.'}
        {' '}Datos de coordenadas del padrón oficial de centros educativos del MINERD.
      </p>

      <span className="sr-only" aria-hidden>{ATRIBUCION}</span>
    </div>
  )
}
