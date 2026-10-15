// Genera data/centros.geojson a partir de los listados de centros y de
// data/ubicaciones.ts. Es el insumo del mapa interactivo (/mapa).
//
// Cada centro queda como un punto con sus propiedades, listo para cargarse como
// fuente GeoJSON de MapLibre. Se genera en build para no recalcularlo en el
// cliente y para poder versionarlo junto al resto de datos.
//
// Uso: node scripts/generar-geojson.js
'use strict'

const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..')
const SALIDA = path.join(ROOT, 'data', 'centros.geojson')
const SALIDA_PUBLICA = path.join(ROOT, 'public', 'data', 'centros.geojson')
const WORKER_FUENTE = path.join(ROOT, 'node_modules', 'maplibre-gl', 'dist', 'maplibre-gl-worker.mjs')
const WORKER_PUBLICO = path.join(ROOT, 'public', 'maplibre-gl-worker.mjs')

// Region 15 = Santo Domingo Este, Santo Domingo Oeste y Los Alcarrizos. Con un
// margen amplio para no recortar ningun centro valido.
const BBOX = { latMin: 18.40, latMax: 18.70, lngMin: -70.20, lngMax: -69.85 }

const ARCHIVOS = [
  { ruta: 'data/centros.ts', tipo: 'Público' },
  { ruta: 'data/centros-privados.ts', tipo: 'Privado' },
  { ruta: 'data/centros-adicionales-privados.ts', tipo: 'Privado' },
]

// Los archivos del proyecto se guardan con finales de linea CRLF en Windows. Con
// el ancla al final sin tolerancia, el \r antes del cierre hacia que la expresion
// no encontrara NINGUNA ubicacion y el mapa se generaba vacio sin avisar.
const RE_UBICACION = /^ {2}'(\d{5})': \{\s*$/

// Arma el enlace de Google Maps.
//
// En data/ubicaciones.ts hay 58 enlaces guardados a mano donde se perdio el
// signo menos de la longitud: "query=18.4862,9.9674" en vez de
// "18.4862,-69.9674". Eso manda a la persona a un punto en Africa en lugar del
// centro, asi que los enlaces por coordenadas se rehacen siempre desde lat/lng
// reales. Los que traen place_id se respetan, porque apuntan al lugar exacto.
function enlaceSeguro(u) {
  if (!u || typeof u.lat !== 'number' || typeof u.lng !== 'number') return u?.enlace || null
  if (u.enlace && u.enlace.includes('place_id:')) return u.enlace
  return `https://www.google.com/maps/search/?api=1&query=${u.lat},${u.lng}`
}

function leerUbicaciones() {
  const texto = fs.readFileSync(path.join(ROOT, 'data', 'ubicaciones.ts'), 'utf8')
  const lineas = texto.split('\n')
  const mapa = new Map()

  for (let i = 0; i < lineas.length; i++) {
    const m = RE_UBICACION.exec(lineas[i])
    if (!m) continue
    const ficha = { codigo: m[1] }
    for (let j = i + 1; j < lineas.length && !/^ {2}\},?\s*$/.test(lineas[j]); j++) {
      const campo = lineas[j].match(/^ {2}(lat|lng|direccion|sector|enlace): (.*?),?\s*$/)
      if (!campo) continue
      const valor = campo[2].trim().replace(/^"|"$/g, '')
      if (campo[1] === 'lat' || campo[1] === 'lng') ficha[campo[1]] = parseFloat(valor)
      else ficha[campo[1]] = valor
    }
    mapa.set(m[1], ficha)
  }
  return mapa
}

function leerCentros(ruta, tipoPorDefecto) {
  const texto = fs.readFileSync(path.join(ROOT, ruta), 'utf8')

  // Cada distrito abre un bloque asi:
  //   { codigo: '15-01', sigerd: '1501', nombre: 'Los Alcarrizos', centros: [ ... ] }
  // Se localiza la linea "centros: [" de cada bloque y se toma todo lo que va
  // hasta la siguiente, en vez de depender del orden de lineas.
  const marcadores = []
  const re = /codigo:\s*'(\d\d-\d\d)'[\s\S]*?nombre:\s*'([^']*)'[\s\S]*?centros:\s*\[/g
  let m
  while ((m = re.exec(texto)) !== null) {
      marcadores.push({ codigo: m[1], nombre: m[2], desde: m.index + m[0].length, inicio: m.index })
  }

  const centros = []
  marcadores.forEach((marcador, i) => {
    const hasta = i + 1 < marcadores.length ? marcadores[i + 1].desde : texto.length
    // El cuerpo del bloque empieza tras "centros: [" del distrito actual, pero
    // el siguiente marcador incluye el codigo del proximo: se recorta al inicio
    // de su declaracion para no mezclar bloques.
    const cuerpo = texto.slice(marcador.desde, i + 1 < marcadores.length ? marcadores[i + 1].inicio : hasta)
    const reCentro = /\{\s*codigo:\s*'(\d{5})',\s*nombre:\s*'((?:[^'\\]|\\.)*)'([^}]*)\}/g
    let c
    while ((c = reCentro.exec(cuerpo)) !== null) {
      const campos = c[3]
      const texto = (nombre) => {
        const campo = campos.match(new RegExp(`${nombre}:\\s*'((?:[^'\\\\]|\\\\.)*)'`))
        return campo ? campo[1].replace(/\\'/g, "'") : null
      }
      const numero = (nombre) => {
        const campo = campos.match(new RegExp(`${nombre}:\\s*(\\d+)`))
        return campo ? Number(campo[1]) : null
      }
      centros.push({
        distrito: marcador.codigo,
        distritoNombre: marcador.nombre,
        codigo: c[1],
        nombre: c[2].replace(/\\'/g, "'"),
        nivel: texto('nivel'),
        tipo: texto('tipo') || tipoPorDefecto,
        tanda: texto('tanda'),
        secciones: numero('secciones'),
        matricula: numero('matricula'),
        periodo: texto('periodo'),
      })
    }
  })

  return centros
}

function main() {
  const ubicaciones = leerUbicaciones()
  const porCodigo = new Map()
  let descartados = []
  let total = 0

  for (const { ruta, tipo } of ARCHIVOS) {
    for (const c of leerCentros(ruta, tipo)) {
      total++
      if (porCodigo.has(c.codigo)) continue

      const u = ubicaciones.get(c.codigo)
      const lat = u?.lat
      const lng = u?.lng

      const dentro =
        Number.isFinite(lat) &&
        Number.isFinite(lng) &&
        lat >= BBOX.latMin &&
        lat <= BBOX.latMax &&
        lng >= BBOX.lngMin &&
        lng <= BBOX.lngMax

      if (!dentro) {
        if (u) {
          const motivo = Number.isFinite(lat) && Number.isFinite(lng) ? 'FUERA DEL AREA' : 'COORDENADAS INVALIDAS'
          descartados.push(`${c.codigo} (${c.nombre}) lat=${lat} lng=${lng} ${motivo}`)
        }
        continue
      }

      porCodigo.set(c.codigo, {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [lng, lat] },
        properties: {
          codigo: c.codigo,
          nombre: c.nombre,
          nivel: c.nivel,
          tipo: c.tipo,
          tanda: c.tanda,
          distrito: c.distrito,
          distritoNombre: c.distritoNombre,
          secciones: c.secciones,
          matricula: c.matricula,
          periodo: c.periodo,
          sector: u?.sector || null,
          direccion: u?.direccion || null,
          enlace: enlaceSeguro(u),
        },
      })
    }
  }

  const features = [...porCodigo.values()].sort((a, b) => a.properties.codigo.localeCompare(b.properties.codigo))

  const fc = {
    type: 'FeatureCollection',
    metadata: {
      generadoPor: 'scripts/generar-geojson.js',
      nota: 'No editar a mano. Fuente: data/centros*.ts + data/ubicaciones.ts.',
      bbox: [BBOX.lngMin, BBOX.latMin, BBOX.lngMax, BBOX.latMax],
      totalCentros: total,
      enMapa: features.length,
      descartados: descartados.length,
    },
    features,
  }

  const contenido = JSON.stringify(fc)
  fs.writeFileSync(SALIDA, contenido, 'utf8')
  fs.mkdirSync(path.dirname(SALIDA_PUBLICA), { recursive: true })
  fs.writeFileSync(SALIDA_PUBLICA, contenido, 'utf8')
  fs.copyFileSync(WORKER_FUENTE, WORKER_PUBLICO)

  const kb = Math.round(fs.statSync(SALIDA).size / 1024)
  console.log(`data/centros.geojson: ${features.length} de ${total} centros (${kb} KB)`)
  console.log('public/data/centros.geojson: copia lista para servir en la web')
  console.log('public/maplibre-gl-worker.mjs: worker MapLibre listo para servir')
  if (descartados.length) {
    console.log(`descartados ${descartados.length}:`)
    for (const d of descartados) console.log(`  ${d}`)
  }
}

main()
