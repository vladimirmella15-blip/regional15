'use client'

import { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import * as maplibregl from 'maplibre-gl'
import type { Map as MapLibreMap, GeoJSONSource, MapMouseEvent } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { urlCentro as urlDeCentro } from '@/lib/slug'

interface PropsCentro {
  codigo: string
  nombre: string
  nivel: string | null
  tanda?: string | null
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
  tanda?: string | null
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

// Público azul, Privado rojo, Semioficial verde. Se aplican también a las
// insignias de las tarjetas (app/globals.css) para que el mapa y el listado
// hablen el mismo idioma.
const COLOR_TIPO: Record<string, string> = {
  Público: '#1d4ed8',
  Privado: '#dc2626',
  Semioficial: '#16a34a',
}
const COLOR_TIPO_CLARO: Record<string, string> = {
  Público: '#93c5fd',
  Privado: '#fca5a5',
  Semioficial: '#86efac',
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

  // Filtra los centros. Se separa del armado de features para que "cercanos a mi"
  // pueda trabajar sobre la misma lista y no sobre otra distinta.
  const filtrarCentros = useCallback(
    (f: Filtros, lista: CentroFuente[] = todos): CentroFuente[] => {
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
    },
    [todos]
  )

  const centrosVisibles = useMemo(() => filtrarCentros(filtros), [filtrarCentros, filtros])

  const aplicarFiltros = useCallback(
    (f: Filtros, lista: CentroFuente[] = todos): Feature[] =>
      filtrarCentros(f, lista).map(c => ({
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
          tanda: c.tanda,
        },
      })),
    [filtrarCentros]
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

      // Nombre del centro encima del punto. MapLibre oculta las etiquetas que se
      // enciman entre si (text-optional), asi que al alejar se ven menos nombres
      // pero nunca se torna ilegible. El circulo nunca se oculta por culpa de su
      // etiqueta: van en capas separadas.
      instancia.addLayer({
        id: 'etiquetas',
        type: 'symbol',
        source: 'centros',
        filter: ['!', ['has', 'point_count']],
        minzoom: 12.5,
        layout: {
          'text-field': ['format', ['get', 'nombre'], {}, '\n', {}, ['coalesce', ['get', 'nivel'], '']],
          'text-size': ['interpolate', ['linear'], ['zoom'], 12.5, 9, 16, 12],
          'text-anchor': 'top',
          'text-offset': [0, 0.7],
          'text-allow-overlap': false,
          'text-optional': true,
        },
        paint: {
          'text-color': '#0a2540',
          'text-halo-color': '#ffffff',
          'text-halo-width': 1.6,
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

  // Si cambian los filtros, la lista de "cercanos" deja de corresponder a lo que
  // se esta viendo: se limpia para no dejar resultados viejos en pantalla.
  const [filtrosActuales, setFiltrosActuales] = useState<Filtros>(SIN_FILTROS)
  useEffect(() => {
    if (
      filtrosActuales.distrito !== filtros.distrito ||
      filtrosActuales.nivel !== filtros.nivel ||
      filtrosActuales.tipo !== filtros.tipo ||
      filtrosActuales.busqueda !== filtros.busqueda
    ) {
      setCercanos([])
      setFiltrosActuales(filtros)
    }
  }, [filtros, filtrosActuales])

  // Distancia en linea recta entre dos puntos, en km.
  const haversine = (aLat: number, aLng: number, bLat: number, bLng: number) => {
    const R = 6371
    const dLat = ((bLat - aLat) * Math.PI) / 180
    const dLng = ((bLng - aLng) * Math.PI) / 180
    const s =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((aLat * Math.PI) / 180) * Math.cos((bLat * Math.PI) / 180) * Math.sin(dLng / 2) ** 2
    return 2 * R * Math.asin(Math.sqrt(s))
  }

  // "Centros cercanos a mi": pide permiso al navegador y lista los mas
  // cercanos ordenados por distancia. Requiere HTTPS.
  const [geo, setGeo] = useState<{ lat: number; lng: number } | null>(null)
  const [cercanos, setCercanos] = useState<Array<{ centro: CentroFuente; km: number }>>([])
  const [errorGeo, setErrorGeo] = useState<string | null>(null)

  // Respetar los filtros importa: si la persona puso "Público" y pide los
  // cercanos, no tiene sentido que le salga un colegio privado. Antes se
  // recorrian los 1.428 centros completos y se le mezclaba todo.
  const hayFiltro = Boolean(filtros.distrito || filtros.nivel || filtros.tipo || filtros.busqueda)
  const baseCercanos = hayFiltro ? centrosVisibles : todos

  const buscarCercanos = useCallback(() => {
    if (typeof navigator === 'undefined' || !navigator.geolocation) {
      setErrorGeo('Este navegador no permite usar la ubicación.')
      return
    }
    if (baseCercanos.length === 0) {
      setCercanos([])
      setErrorGeo('Ningún centro coincide con los filtros que pusiste. Quítalos para ver los más cercanos.')
      return
    }
    setErrorGeo(null)
    navigator.geolocation.getCurrentPosition(
      pos => {
        const { latitude: lat, longitude: lng } = pos.coords
        setGeo({ lat, lng })
        const lista = baseCercanos
          .map(c => ({ centro: c, km: haversine(lat, lng, c.lat, c.lng) }))
          .sort((a, b) => a.km - b.km)
          .slice(0, 5)
        setCercanos(lista)
        if (mapa.current && lista.length) {
          mapa.current.easeTo({ center: [lng, lat], zoom: 13.5, duration: 900 })
        }
      },
      () => setErrorGeo('No se pudo obtener tu ubicación. Revisa el permiso del navegador.'),
      { enableHighAccuracy: true, timeout: 12000 }
    )
  }, [baseCercanos])

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

        <button type="button" className="mapa-cerca-btn" onClick={buscarCercanos}>
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
          </svg>
          Centros cercanos a mí
        </button>
        {hayFiltro && (
          <p className="mapa-cerca-nota">
            Buscando solo dentro de los filtros activos ({visibles.length.toLocaleString('es-DO')}{' '}
            {visibles.length === 1 ? 'centro' : 'centros'}).
          </p>
        )}
        {errorGeo && <p className="mapa-cerca-error">{errorGeo}</p>}

        {cercanos.length > 0 && (
          <ol className="mapa-cercanos" aria-label="Centros más cercanos a tu ubicación">
            {cercanos.map(({ centro, km }) => (
              <li key={centro.codigo}>
                <a
                  href={urlDeCentro(centro.nombre, centro.codigo)}
                  onClick={() => {
                    setSeleccion({
                      codigo: centro.codigo,
                      nombre: centro.nombre,
                      nivel: centro.nivel,
                      tipo: centro.tipo,
                      distrito: centro.distrito,
                      distritoNombre: centro.distritoNombre,
                      sector: centro.sector,
                      direccion: centro.direccion,
                      enlace: centro.enlace,
                      secciones: centro.secciones,
                      matricula: centro.matricula,
                    })
                  }}
                >
                  <span className="mapa-cercanos-nombre">{centro.nombre}</span>
                  <span className="mapa-cercanos-meta">
                    {km < 1 ? `${Math.round(km * 1000)} m` : `${km.toFixed(1)} km`}
                    {centro.nivel ? ` · ${centro.nivel}` : ''}
                    {centro.sector ? ` · ${centro.sector}` : ''}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        )}
        {geo && <p className="mapa-cerca-nota">Calculado desde tu ubicación. No se envía a ningún servidor.</p>}
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
              {seleccion.tanda && <span className="buscar-centro-nivel">Turno {seleccion.tanda}</span>}
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
            <div className="mapa-ficha-acciones">
              <a className="buscar-centro-maps" href={urlDeCentro(seleccion.nombre, seleccion.codigo)}>
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
                Ficha del centro
              </a>
              <a className="buscar-centro-maps" href={enlaceDeGoogle(seleccion)} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Ver en Google Maps
              </a>
            </div>
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
