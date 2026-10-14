// Rellena el campo `sector` (barrio) de data/ubicaciones.ts usando geocodificacion
// inversa desde las coordenadas que ya tiene cada centro.
//
// El padron del MINERD no trae barrio: su columna "Sector" es Publico/Privado y su
// "Municipio" solo llega a Los Alcarrizos / Santo Domingo de Guzman / Santo Domingo
// Oeste. El barrio sale de OpenStreetMap (Nominatim), que ademas confirma a mano el
// caso que pidio la Regional 15: 00414 PATRIA MIRABAL cae en "La Cuaba".
//
// Uso:
//   node scripts/fetch-sectores.js            # consulta lo que falte
//   node scripts/fetch-sectores.js --dry-run  # no escribe data/ubicaciones.ts
//
// Respeta el limite de 1 peticion/segundo de Nominatim y cachea en
// data/sectores-cache.json, asi que se puede reanudar sin repetir llamadas.
'use strict'

const fs = require('fs')
const path = require('path')
const https = require('https')

const ROOT = path.join(__dirname, '..')
const UBICACIONES = path.join(ROOT, 'data', 'ubicaciones.ts')
const CACHE = path.join(ROOT, 'data', 'sectores-cache.json')

const USER_AGENT = 'regional15-edu/1.0 (MINERD Regional 15; contacto regional15@mine.gob.do)'
const INTERVALO_MS = 1100
const ORDEN_CAMPO = ['suburb', 'neighbourhood', 'quarter', 'city_district', 'town', 'village']

// Valores que no aportan: son el municipio o el distrito, no el barrio.
const SIN_INTERES = new Set(
  [
    'SANTO DOMINGO',
    'SANTO DOMINGO DE GUZMAN',
    'SANTO DOMINGO DE GUZMÁN',
    'SANTO DOMINGO OESTE',
    'SANTO DOMINGO ESTE',
    'LOS ALCARRIZOS',
    'PEDRO BRAND',
    'REPUBLICA DOMINICANA',
    'ZONA METROPOLITANA',
  ].map((s) => s.toUpperCase())
)

const RE_ENTRADA = /^ {2}'(\d{5})': \{$/
const RE_CAMPO = /^ {2}(lat|lng): (.*),$/

function leerCache() {
  if (!fs.existsSync(CACHE)) return {}
  try {
    return JSON.parse(fs.readFileSync(CACHE, 'utf8'))
  } catch {
    return {}
  }
}

function pedirCoordenadas(lineas) {
  const coords = []
  for (let i = 0; i < lineas.length; i++) {
    const m = RE_ENTRADA.exec(lineas[i])
    if (!m) continue
    const codigo = m[1]
    let lat = null
    let lng = null
    // El cuerpo de la entrada son las 5 lineas siguientes.
    for (let j = i + 1; j < Math.min(i + 6, lineas.length); j++) {
      if (/^ {2}\},?$/.test(lineas[j])) break
      const c = RE_CAMPO.exec(lineas[j])
      if (!c) continue
      if (c[1] === 'lat') lat = parseFloat(c[2])
      if (c[1] === 'lng') lng = parseFloat(c[2])
    }
    if (Number.isFinite(lat) && Number.isFinite(lng)) coords.push({ codigo, lat, lng })
  }
  return coords
}

function esperar(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

function reverse(url, intentos = 3) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'User-Agent': USER_AGENT, Accept: 'application/json' } }, (res) => {
        if (res.statusCode !== 200) {
          res.resume()
          return reject(new Error(`HTTP ${res.statusCode}`))
        }
        const trozos = []
        res.on('data', (t) => trozos.push(t))
        res.on('end', () => {
          try {
            resolve(JSON.parse(Buffer.concat(trozos).toString('utf8')))
          } catch (err) {
            reject(err)
          }
        })
      })
      .on('error', (err) => {
        if (intentos <= 1) return reject(err)
        setTimeout(() => reverse(url, intentos - 1).then(resolve, reject), 2000)
      })
  })
}

async function main() {
  const dryRun = process.argv.includes('--dry-run')
  const lineas = fs.readFileSync(UBICACIONES, 'utf8').split('\n')
  const coords = pedirCoordenadas(lineas)
  const cache = leerCache()

  // Los sectores ya escritos a mano se respetan.
  const yaResueltos = new Map()
  for (let i = 0; i < lineas.length; i++) {
    const m = RE_ENTRADA.exec(lineas[i])
    if (!m) continue
    for (let j = i + 1; j < Math.min(i + 7, lineas.length); j++) {
      const s = lineas[j].match(/^ {2}sector: "(.*)",?$/)
      if (s) {
        yaResueltos.set(m[1], s[1])
        break
      }
    }
  }

  const pendientes = coords.filter((c) => !yaResueltos.has(c.codigo) && !(c.codigo in cache))
  console.log(
    `coordenadas: ${coords.length} | sector ya escrito a mano: ${yaResueltos.size} | ` +
      `en cache: ${coords.filter((c) => c.codigo in cache).length} | por consultar: ${pendientes.length}`
  )

  let consultadas = 0
  for (const c of pendientes) {
    const url =
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&zoom=18&addressdetails=1` +
      `&lat=${c.lat}&lon=${c.lng}`
    try {
      const r = await reverse(url)
      const addr = r.address || {}
      let sector = null
      for (const campo of ORDEN_CAMPO) {
        const v = addr[campo]
        if (v && !SIN_INTERES.has(v.toUpperCase())) {
          sector = v
          break
        }
      }
      cache[c.codigo] = { sector, lat: c.lat, lng: c.lng }
    } catch (err) {
      console.warn(`  ${c.codigo}: ${err.message}`)
      cache[c.codigo] = { sector: null, lat: c.lat, lng: c.lng, error: err.message }
    }
    consultadas++
    if (consultadas % 50 === 0) {
      fs.writeFileSync(CACHE, JSON.stringify(cache, null, 2) + '\n', 'utf8')
      console.log(`  ${consultadas}/${pendientes.length} consultadas`)
    }
    await esperar(INTERVALO_MS)
  }
  fs.writeFileSync(CACHE, JSON.stringify(cache, null, 2) + '\n', 'utf8')

  // --- Escribir el sector en cada entrada ---
  const sectores = { ...Object.fromEntries(yaResueltos) }
  for (const [codigo, v] of Object.entries(cache)) if (v.sector) sectores[codigo] = v.sector

  const salida = []
  let escritas = 0
  for (let i = 0; i < lineas.length; i++) {
    const m = RE_ENTRADA.exec(lineas[i])
    if (!m) {
      salida.push(lineas[i])
      continue
    }
    const sector = sectores[m[1]]
    if (!sector) {
      salida.push(lineas[i])
      continue
    }
    // Se copia la entrada entera y se coloca el sector tras la direccion, que es
    // donde lo espera el bloque generado por scripts/generate-centros-privados.js.
    let fin = i + 1
    while (fin < lineas.length && !/^ {2}\},?$/.test(lineas[fin])) fin++
    const cuerpo = lineas.slice(i + 1, fin)
    if (!cuerpo.some((l) => /^ {2}sector:/.test(l))) {
      const pos = cuerpo.findIndex((l) => /^ {2}enlace:/.test(l))
      cuerpo.splice(pos === -1 ? cuerpo.length : pos, 0, `  sector: "${sector}",`)
      escritas++
    }
    salida.push(lineas[i], ...cuerpo, lineas[fin])
    i = fin
  }

  if (dryRun) {
    console.log(`--dry-run: se habrian escrito ${escritas} sectores`)
  } else {
    fs.writeFileSync(UBICACIONES, salida.join('\n'), 'utf8')
    console.log(`data/ubicaciones.ts: ${escritas} sectores escritos`)
  }

  const sinSector = coords.filter((c) => !sectores[c.codigo]).map((c) => c.codigo)
  console.log(`centros con coordenadas y sin sector utilizable: ${sinSector.length}`)
  if (sinSector.length) console.log(`  ${sinSector.join(', ')}`)
}

main().catch((err) => {
  console.error('ERROR:', err)
  process.exit(1)
})