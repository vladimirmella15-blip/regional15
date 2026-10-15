// Repara las coordenadas de data/ubicaciones.ts.
//
// El padron del MINERD viene con la longitud partida en dos columnas por el
// separador ";" del CSV: el valor real -69.9085 aparece como
//   lat -> "18.4862,-6"      lng -> "9.9085"
// porque el "-69" se quedo pegado a la latitud. parseFloat se come el prefijo y
// guardaba 9.9085, una longitud de Pennsylvania. scripts/generate-centros-privados.js
// arrastro el mismo error a 64 centros privados que hoy dibujarian en el otro
// hemisferio.
//
// La regla es exacta: si el campo de latitud trae coma, la longitud real es
// "-" + (lo que va despues de la coma) + (el campo de longitud). Si no trae
// coma, la columna de longitud ya viene bien.
//
// Solo se tocan los codigos presentes en el padron y cuyo valor actual NO cae
// dentro de la Region 15: las fichas escritas a mano (los place_id de Google del
// distrito 15-03, p.ej.) quedan intactas.
//
// Uso:
//   node scripts/reparar-coordenadas.js --dry-run
//   node scripts/reparar-coordenadas.js
'use strict'

const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..')
const CSV = path.join(ROOT, 'data', 'padron-2023-2024.csv')
const UBICACIONES = path.join(ROOT, 'data', 'ubicaciones.ts')

const BBOX = { latMin: 18.40, latMax: 18.70, lngMin: -70.20, lngMax: -69.85 }
const PERIODO = '20232024'

const dentro = (lat, lng) =>
  lat >= BBOX.latMin && lat <= BBOX.latMax && lng >= BBOX.lngMin && lng <= BBOX.lngMax

function leerPadron() {
  const texto = fs.readFileSync(CSV, 'latin1')
  const porCodigo = new Map()
  for (const linea of texto.split(/\r?\n/)) {
    const p = linea.split(';')
    if (p.length < 12) continue
    if (!/^15\d\d - /.test(p[1].trim())) continue
    if ((p[p.length - 1] || '').trim() !== PERIODO) continue
    const m = /^\s*(\d{5})\s*-/.exec(p[2])
    if (!m) continue

    const latCrudo = (p[5] || '').trim()
    const lngCrudo = (p[6] || '').trim()
    const coma = latCrudo.indexOf(',')
    const lat = parseFloat(coma === -1 ? latCrudo : latCrudo.slice(0, coma))
    // La longitud real es la continuacion del campo de latitud: "-6" + "9.9085" =
// -69.9085. El fragmento ya trae su signo, no se le agrega otro.
const lng = parseFloat(coma === -1 ? lngCrudo : latCrudo.slice(coma + 1) + lngCrudo)

    if (Number.isFinite(lat) && Number.isFinite(lng)) porCodigo.set(m[1], { lat, lng })
  }
  return porCodigo
}

function main() {
  const dryRun = process.argv.includes('--dry-run')
  const padron = leerPadron()
  const lineas = fs.readFileSync(UBICACIONES, 'utf8').split('\n')

  let reparadas = 0
  let yaCorrectas = 0
  let sinRespaldo = 0
  const cambios = []

  for (let i = 0; i < lineas.length; i++) {
    const m = /^ {2}'(\d{5})': \{$/.exec(lineas[i])
    if (!m) continue
    const codigo = m[1]

    let lat = null
    let lng = null
    for (let j = i + 1; j < lineas.length && !/^ {2}\},?$/.test(lineas[j]); j++) {
      const c = /^(?: {2}lat: (-?[\d.]+),| {2}lng: (-?[\d.]+),)$/.exec(lineas[j])
      if (!c) continue
      if (c[1] != null) lat = parseFloat(c[1])
      if (c[2] != null) lng = parseFloat(c[2])
    }
    if (lat == null || lng == null) continue

    if (dentro(lat, lng)) {
      yaCorrectas++
      continue
    }

    const bueno = padron.get(codigo)
    if (!bueno || !dentro(bueno.lat, bueno.lng)) {
      sinRespaldo++
      continue
    }

    cambios.push({ codigo, antes: [lat, lng], despues: [bueno.lat, bueno.lng] })
    reparadas++

    if (!dryRun) {
      lineas[i + 1] = `  lat: ${bueno.lat},`
      for (let j = i + 2; j < lineas.length && !/^ {2}\},?$/.test(lineas[j]); j++) {
        if (/^ {2}lng: /.test(lineas[j])) {
          lineas[j] = `  lng: ${bueno.lng},`
          break
        }
      }
    }
  }

  if (dryRun) {
    console.log(`--dry-run: se repararian ${reparadas} coordenadas`)
  } else {
    fs.writeFileSync(UBICACIONES, lineas.join('\n'), 'utf8')
    console.log(`data/ubicaciones.ts: ${reparadas} coordenadas reparadas`)
  }

  console.log(`  ya correctas y dentro de la region: ${yaCorrectas}`)
  console.log(`  fuera de rango sin respaldo en el padron: ${sinRespaldo}`)

  for (const c of cambios.slice(0, 8)) {
    console.log(`  ${c.codigo}: ${c.antes[0]}, ${c.antes[1]}  ->  ${c.despues[0]}, ${c.despues[1]}`)
  }
  if (cambios.length > 8) console.log(`  ... y ${cambios.length - 8} mas`)
}

main()
