'use client'

import { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import * as maplibregl from 'maplibre-gl'
import type { Map as MapLibreMap, GeoJSONSource, MapMouseEvent } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { urlCentro as urlDeCentro } from '@/lib/slug'
import { MAX_COMPARAR, alternarComparacion, limpiarComparacion, leerComparacion } from '@/lib/comparar'

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

// Busqueda por voz. La API no viene en los tipos de TypeScript porque sigue
// siendo un estandar en desarrollo, asi que se declara solo lo que se usa.
// Safari y Edge viejos la exponen con el prefijo webkit.
interface ResultadoVoz {
  isFinal: boolean
  0: { transcript: string }
}
interface EventoVoz {
  resultIndex: number
  results: ArrayLike<ResultadoVoz>
}
interface ReconocimientoVoz {
  lang: string
  continuous: boolean
  interimResults: boolean
  start(): void
  stop(): void
  abort(): void
  onresult: ((e: EventoVoz) => void) | null
  onerror: ((e: { error: string }) => void) | null
  onend: (() => void) | null
}
type ConstructorVoz = new () => ReconocimientoVoz

const constructorVoz = (): ConstructorVoz | null => {
  if (typeof window === 'undefined') return null
  const w = window as unknown as {
    SpeechRecognition?: ConstructorVoz
    webkitSpeechRecognition?: ConstructorVoz
  }
  return w.SpeechRecognition || w.webkitSpeechRecognition || null
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
  barrio: string
  tamano: string
  turno: string
}

const SIN_FILTROS: Filtros = {
  distrito: '',
  nivel: '',
  tipo: '',
  busqueda: '',
  barrio: '',
  tamano: '',
  turno: '',
}

// Rangos por matrícula. El dato está en los 1.429 centros, así que este filtro
// no deja fuera a nadie por falta de información.
const RANGOS_TAMANO: Array<{ valor: string; etiqueta: string; min: number; max: number }> = [
  { valor: 'p', etiqueta: 'Hasta 200 alumnos', min: 0, max: 200 },
  { valor: 'm', etiqueta: 'De 201 a 500', min: 201, max: 500 },
  { valor: 'g', etiqueta: 'De 501 a 1.000', min: 501, max: 1000 },
  { valor: 'x', etiqueta: 'Más de 1.000', min: 1001, max: Infinity },
]

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
  const [grupo, setGrupo] = useState<PropsCentro[] | null>(null)
  const [listo, setListo] = useState(false)

  // --- Comparador ---
  // Los centros elegidos viven en localStorage porque el comparador esta en otra
  // ruta; el enlace final los lleva en el query para poder compartirse.
  const [elegidos, setElegidos] = useState<string[]>([])

  useEffect(() => {
    setElegidos(leerComparacion())
    const alCambiar = () => setElegidos(leerComparacion())
    window.addEventListener('storage', alCambiar)
    return () => window.removeEventListener('storage', alCambiar)
  }, [])

  const alternar = (codigo: string) => setElegidos(alternarComparacion(codigo))

  // --- Busqueda por voz ---
  // Si el navegador no la soporta, el boton ni se muestra: es preferible no
  // ofrecerlo a ofrecer algo que no funciona.
  const [soportaVoz, setSoportaVoz] = useState(false)
  const [escuchando, setEscuchando] = useState(false)
  const [textoVoz, setTextoVoz] = useState('')
  const [errorVoz, setErrorVoz] = useState<string | null>(null)
  const reconocimiento = useRef<ReconocimientoVoz | null>(null)

  useEffect(() => {
    setSoportaVoz(Boolean(constructorVoz()))
  }, [])

  // Si se quita el componente mientras escucha, hay que soltar el microfono.
  useEffect(() => () => reconocimiento.current?.abort(), [])

  const alternarVoz = () => {
    if (escuchando) {
      reconocimiento.current?.stop()
      return
    }
    const Ctor = constructorVoz()
    if (!Ctor) return

    setErrorVoz(null)
    setTextoVoz('')

    let rec: ReconocimientoVoz
    try {
      rec = new Ctor()
    } catch {
      setErrorVoz('No se pudo activar el micrófono en este dispositivo.')
      return
    }

    rec.lang = 'es-DO'
    rec.continuous = false
    rec.interimResults = true

    rec.onresult = e => {
      let parcial = ''
      let definitivo = ''
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const r = e.results[i]
        if (r.isFinal) definitivo += r[0].transcript
        else parcial += r[0].transcript
      }
      // Se muestra lo que va entendiendo mientras habla, para que vea que el
      // microfono esta trabajando y no piense que fallo.
      setTextoVoz(definitivo || parcial)
    }

    rec.onerror = e => {
      setEscuchando(false)
      setTextoVoz('')
      setErrorVoz(
        e.error === 'not-allowed' || e.error === 'service-not-allowed'
          ? 'Permiso de micrófono denegado. Actívalo en el candado de la barra del navegador.'
          : e.error === 'no-speech'
            ? 'No escuché nada. Habla más cerca del micrófono.'
            : e.error === 'audio-capture'
              ? 'No se encontró ningún micrófono en este dispositivo.'
              : 'La búsqueda por voz falló. Puedes escribir el nombre del centro.'
      )
    }

    rec.onend = () => {
      setEscuchando(false)
      setTextoVoz(t => {
        // Al terminar, lo reconocido entra al filtro de búsqueda normal, con lo
        // que ya respeta el filtro activo.
        if (t.trim()) buscarYIr(t.trim())
        return ''
      })
    }

    reconocimiento.current = rec
    try {
      rec.start()
      setEscuchando(true)
    } catch {
      setErrorVoz('El micrófono está ocupado por otra aplicación.')
    }
  }

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
      const rango = RANGOS_TAMANO.find(r => r.valor === f.tamano)
      return lista
        .filter(c => (f.distrito ? c.distrito === f.distrito : true))
        .filter(c => (f.nivel ? c.nivel === f.nivel : true))
        .filter(c => (f.tipo ? c.tipo === f.tipo : true))
        .filter(c => (f.barrio ? c.sector === f.barrio : true))
        .filter(c => (rango ? (c.matricula ?? 0) >= rango.min && (c.matricula ?? 0) <= rango.max : true))
        .filter(c =>
          // El turno solo lo tiene el 41% de los centros. Cuando se filtra, solo
          // se quedan los que lo tienen anotado: los demas no se esconden, pero
          // el mapa avisa cuantos son para que nadie los cuente como "sin turno".
          f.turno ? normalizar(c.tanda || '').includes(normalizar(f.turno)) : true
        )
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
      // 261 barrios. No sirve un <select> con eso, hace falta un buscador con
      // escritura, asi que se devuelven todos y el filtro decide que mostrar.
      barrios: unicos('sector'),
      // El turno se separa por partes porque un centro puede tener varios, como
      // "Matutina - Vespertina". Se guarda la cadena completa como valor.
      turnos: [...new Set(todos.flatMap(c => (c.tanda ? c.tanda.split(/\s*-\s*/).filter(Boolean) : [])))].sort(),
    }
  }, [todos])

  // Cuantos centros tienen el turno anotado y cuantos no. Con 41% de cobertura,
  // filtrar por turno esconde a la mayoria, asi que hay que decirlo.
  const coberturaTurno = useMemo(() => {
    const conTurno = todos.filter(c => c.tanda).length
    return { conTurno, sinTurno: todos.length - conTurno }
  }, [todos])

  // El filtro de barrio tiene 261 opciones; con escritura se reduce a las que
  // estan escribiendo, pero el valor elegido siempre se mantiene visible.
  const [busquedaBarrio, setBusquedaBarrio] = useState('')
  const barriosVisibles = useMemo(() => {
    const q = normalizar(busquedaBarrio)
    const base = q ? opciones.barrios.filter(b => normalizar(b).includes(q)) : opciones.barrios
    const elegido = filtros.barrio
    if (elegido && !base.includes(elegido)) return [elegido, ...base.slice(0, 120)]
    return base.slice(0, 200)
  }, [busquedaBarrio, filtros.barrio, opciones.barrios])

  const hayFiltros =
    Boolean(filtros.distrito || filtros.nivel || filtros.tipo || filtros.barrio || filtros.tamano || filtros.turno) ||
    Boolean(filtros.busqueda.trim())

  // --- Vista de lista ---
  // El mapa no le sirve a todo el mundo: hay gente con celular viejo o que
  // simplemente prefiere leer. La lista muestra los mismos centros filtrados.
  const [verLista, setVerLista] = useState(false)

  const compartirEnlace = () => {
    const enlace = window.location.href
    if (navigator.share) {
      void navigator.share({ title: 'Mapa de centros — Regional 15', url: enlace }).catch(() => undefined)
      return
    }
    void navigator.clipboard
      ?.writeText(enlace)
      .then(() => setAvisoCompartido(true))
      .catch(() => setAvisoCompartido(false))
  }
  const [avisoCompartido, setAvisoCompartido] = useState(false)

  // --- Enlace compartible ---
  // Los filtros se escriben en la barra de direcciones con history.replaceState
  // para no provocar una navegacion: la pagina no se recarga, pero el enlace ya
  // lleva la vista puesta. Al abrirlo se leen con searchParams.
  const CLAVES: Record<string, keyof Filtros> = {
    d: 'distrito',
    n: 'nivel',
    t: 'tipo',
    b: 'barrio',
    m: 'tamano',
    u: 'turno',
    q: 'busqueda',
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    const p = new URLSearchParams(window.location.search)
    const leidos = { ...SIN_FILTROS }
    for (const [corta, larga] of Object.entries(CLAVES)) {
      const v = p.get(corta)
      if (v) leidos[larga] = v
    }
    setFiltros(leidos)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const p = new URLSearchParams()
    for (const [corta, larga] of Object.entries(CLAVES)) {
      const v = filtros[larga]
      if (typeof v === 'string' && v.trim()) p.set(corta, v)
    }
    const cadena = p.toString()
    window.history.replaceState(null, '', cadena ? `?${cadena}` : window.location.pathname)
  }, [filtros])

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

      // Un círculo puede reunir dos cosas muy distintas: centros que están cerca
      // unos de otros, o varios centros que comparten EXACTAMENTE la misma
      // coordenada porque son el mismo edificio con distinto turno o nivel. En el
      // segundo caso acercar el mapa no los separa nunca, así que en vez de
      // hacer zoom se abre la lista de los que hay ahí.
      void source
        .getClusterLeaves(clusterId, Infinity, 0)
        .then(hojas => {
          const porPunto = new Map<string, PropsCentro[]>()
          for (const h of hojas) {
            const [lng, lat] = (h.geometry as { coordinates: number[] }).coordinates
            const clave = `${lng},${lat}`
            const lista = porPunto.get(clave)
            if (lista) lista.push(h.properties as unknown as PropsCentro)
            else porPunto.set(clave, [h.properties as unknown as PropsCentro])
          }
          const mayor = [...porPunto.values()].sort((a, b) => b.length - a.length)[0]
          if (porPunto.size === 1 && mayor.length > 1) {
            setSeleccion(null)
            setGrupo(mayor)
            return
          }
          return source.getClusterExpansionZoom(clusterId).then(zoom => {
            const [lng, lat] = (features[0].geometry as { coordinates: number[] }).coordinates
            instancia.easeTo({ center: [lng, lat], zoom })
          })
        })
        .catch(() => undefined)
    })

    // Clic en un centro suelto. Antes se tomaba solo el primero de los pixeles,
    // así que cuando coincidían varios en la misma coordenada los demás quedaban
    // ocultos detrás.
    instancia.on('click', 'puntos', (e: MapMouseEvent) => {
      const encima = instancia.queryRenderedFeatures(e.point, { layers: ['puntos'] })
      if (!encima.length || !encima[0].properties) return
      if (encima.length > 1) {
        setSeleccion(null)
        setGrupo(encima.map(f => f.properties as unknown as PropsCentro))
        return
      }
      setGrupo(null)
      setSeleccion(encima[0].properties as unknown as PropsCentro)
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
  // recorrian los 1.429 centros completos y se le mezclaba todo.
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
          {soportaVoz && (
            <button
              type="button"
              className={`mapa-mic${escuchando ? ' mapa-mic-activo' : ''}`}
              onClick={alternarVoz}
              aria-label={escuchando ? 'Detener la búsqueda por voz' : 'Buscar con la voz'}
              aria-pressed={escuchando}
              title={escuchando ? 'Detener' : 'Buscar con la voz'}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <rect x="9" y="2" width="6" height="12" rx="3" />
                <path d="M5 11a7 7 0 0 0 14 0M12 18v4" />
              </svg>
            </button>
          )}
          {filtros.busqueda && (
            <button type="button" onClick={() => buscarYIr('')} aria-label="Limpiar búsqueda">&times;</button>
          )}
        </div>
        {escuchando && textoVoz && (
          <p className="mapa-voz-texto" aria-live="polite">
            <span className="mapa-voz-escuchando">Escuchando…</span> {textoVoz}
          </p>
        )}
        {errorVoz && <p className="mapa-voz-error">{errorVoz}</p>}

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
          <select value={filtros.tamano} onChange={e => setFiltros(f => ({ ...f, tamano: e.target.value }))} aria-label="Filtrar por cantidad de alumnos">
            <option value="">Cualquier cantidad</option>
            {RANGOS_TAMANO.map(r => <option key={r.valor} value={r.valor}>{r.etiqueta}</option>)}
          </select>
          <select value={filtros.turno} onChange={e => setFiltros(f => ({ ...f, turno: e.target.value }))} aria-label="Filtrar por turno">
            <option value="">Todos los turnos</option>
            {opciones.turnos.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <select
            value={filtros.barrio}
            onChange={e => setFiltros(f => ({ ...f, barrio: e.target.value }))}
            aria-label="Filtrar por barrio o sector"
          >
            <option value="">Todos los barrios</option>
            {barriosVisibles.map(b => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        <div className="mapa-filtros-extra">
          <input
            type="search"
            className="mapa-buscar-barrio"
            value={busquedaBarrio}
            onChange={e => setBusquedaBarrio(e.target.value)}
            placeholder={`Buscar entre ${opciones.barrios.length} barrios…`}
            aria-label="Buscar un barrio en el filtro"
          />
          {hayFiltros && (
            <button type="button" className="mapa-limpiar" onClick={() => setFiltros(SIN_FILTROS)}>
              Limpiar filtros
            </button>
          )}
        </div>

        {filtros.turno && (
          <p className="mapa-aviso-datos">
            Solo {coberturaTurno.conTurno.toLocaleString('es-DO')} de los{' '}
            {todos.length.toLocaleString('es-DO')} centros tienen el turno anotado. Los otros{' '}
            {coberturaTurno.sinTurno.toLocaleString('es-DO')} pueden tenerlo: no es que no lo tengan, es que no está
            registrado.{' '}
            <button type="button" onClick={() => setFiltros(f => ({ ...f, turno: '' }))}>Verlos también</button>
          </p>
        )}
        {filtros.barrio && (
          <p className="mapa-aviso-datos">
            {todos.filter(c => !c.sector).length.toLocaleString('es-DO')} centros no tienen barrio registrado, así que
            no aparecen al filtrar por barrio.{' '}
            <button type="button" onClick={() => setFiltros(f => ({ ...f, barrio: '' }))}>Verlos también</button>
          </p>
        )}

        <p className="mapa-conteo" role="status">
          {cargando
            ? 'Cargando el mapa…'
            : `${visibles.length.toLocaleString('es-DO')} de ${todos.length.toLocaleString('es-DO')} centros en el mapa`}
        </p>

        <div className="mapa-filtros-extra">
          <button type="button" className="mapa-ver-lista" onClick={() => setVerLista(v => !v)} aria-expanded={verLista}>
            {verLista ? 'Ocultar la lista' : 'Ver como lista'}
          </button>
          {hayFiltros && (
            <button type="button" className="mapa-ver-lista" onClick={compartirEnlace}>
              Compartir esta vista
            </button>
          )}
          {avisoCompartido && (
            <span className="mapa-ok" role="status">
              Enlace copiado. Ya puedes pegarlo por WhatsApp o correo.
            </span>
          )}
        </div>

        {verLista && (
          <div className="mapa-lista">
            {centrosVisibles.length === 0 ? (
              <p className="mapa-lista-vacia">Ningún centro coincide con los filtros.</p>
            ) : (
              <ul>
                {centrosVisibles.slice(0, 300).map(c => (
                  <li key={c.codigo}>
                    <button
                      type="button"
                      onClick={() => {
                        setGrupo(null)
                        setSeleccion(c)
                      }}
                    >
                      <span className="mapa-lista-nombre">{c.nombre}</span>
                      <span className="mapa-lista-meta">
                        {c.codigo}
                        {c.sector ? ` · ${c.sector}` : ''}
                        {c.matricula != null ? ` · ${c.matricula.toLocaleString('es-DO')} alumnos` : ''}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
            {centrosVisibles.length > 300 && (
              <p className="mapa-lista-vacia">
                Se muestran los primeros 300 de {centrosVisibles.length.toLocaleString('es-DO')}. Afina los filtros para
                ver el resto.
              </p>
            )}
          </div>
        )}

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

      {elegidos.length > 0 && (
        <div className="comparar-barra" role="region" aria-label="Centros elegidos para comparar">
          <div className="comparar-barra-lista">
            {elegidos.map(codigo => (
              <span key={codigo} className="comparar-chip">
                {codigo}
                <button type="button" onClick={() => alternar(codigo)} aria-label={`Quitar el centro ${codigo} de la comparación`}>
                  &times;
                </button>
              </span>
            ))}
            <span className="comparar-barra-cuenta">
              {elegidos.length} de {MAX_COMPARAR}
            </span>
          </div>
          <div className="comparar-barra-acciones">
            <button type="button" className="comparar-barra-limpiar" onClick={() => setElegidos(limpiarComparacion())}>
              Limpiar
            </button>
            <a
              className={`comparar-barra-ir${elegidos.length < 2 ? ' comparar-barra-ir-solo' : ''}`}
              href={elegidos.length ? `/comparar?c=${elegidos.join(',')}` : '/comparar'}
            >
              {elegidos.length < 2 ? 'Ver selección' : `Comparar ${elegidos.length} centros`}
            </a>
          </div>
        </div>
      )}

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

        {/* ── Centro con varios planteles en la misma coordenada ── */}
        {grupo && (
          <div className="mapa-ficha mapa-grupo" role="dialog" aria-label="Centros en este plantel">
            <button type="button" className="mapa-ficha-cerrar" onClick={() => setGrupo(null)} aria-label="Cerrar">
              &times;
            </button>
            <p className="mapa-ficha-codigo">
              {grupo.length} centros en este mismo punto
            </p>
            <h3 className="mapa-ficha-nombre">¿Cuál buscas?</h3>
            <p className="mapa-grupo-nota">
              Es el mismo edificio con distintos turnos y niveles. Toca el que te interesa.
            </p>
            <ul className="mapa-grupo-lista">
              {grupo.map(c => (
                <li key={c.codigo}>
                  <button
                    type="button"
                    onClick={() => {
                      setGrupo(null)
                      setSeleccion(c)
                    }}
                  >
                    <span className="mapa-grupo-codigo">{c.codigo}</span>
                    <span className="mapa-grupo-nombre">{c.nombre}</span>
                    <span className="mapa-grupo-datos">
                      {c.nivel || 'Sin nivel registrado'}
                      {c.tanda ? ` · ${c.tanda}` : ''}
                      {c.matricula != null ? ` · ${c.matricula.toLocaleString('es-DO')} alumnos` : ''}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="mapa-grupo-acciones">
              <button
                type="button"
                className="buscar-centro-maps"
                onClick={() => {
                  setGrupo(null)
                  grupo.forEach(c => alternar(c.codigo))
                }}
              >
                Comparar los {grupo.length}
              </button>
              <button type="button" className="buscar-centro-maps" onClick={() => setGrupo(null)}>
                Ver todos los centros
              </button>
            </div>
          </div>
        )}

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
                <button
                  type="button"
                  className={`buscar-centro-maps${elegidos.includes(seleccion.codigo) ? ' btn-elegido' : ''}`}
                  onClick={() => alternar(seleccion.codigo)}
                  disabled={!elegidos.includes(seleccion.codigo) && elegidos.length >= MAX_COMPARAR}
                  title={
                    !elegidos.includes(seleccion.codigo) && elegidos.length >= MAX_COMPARAR
                      ? `Ya elegiste ${MAX_COMPARAR} centros. Quita uno para agregar otro.`
                      : undefined
                  }
                >
                  {elegidos.includes(seleccion.codigo) ? '✓ Agregado para comparar' : '+ Agregar para comparar'}
                </button>
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
    </div>
  )
}
