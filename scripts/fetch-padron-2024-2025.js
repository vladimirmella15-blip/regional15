// Descarga el padron oficial de centros educativos 2024-2025 del MINERD y lo
// deja en data/padron-2024-2025.json.
//
// Es el listado mas reciente que el Ministerio publica: lo subió el 9 de enero
// de 2026 en minerd.gob.do/transparencia. Trae columnas que el padron 2023-2024
// no tenia, y que el sitio todavia no aprovecha:
//
//   - Tanda (turno: Matutina, Vespertina, Nocturna, Semipresencial). Es lo que
//     explica por que un mismo plantel aparece con varios codigos SIGERD.
//   - Modalidad
//   - Sector real: aqui si distingue PUBLICO / PRIVADO / SEMIOFICIAL
//   - Planta Fisica con nombre
//
// A diferencia del padron 2023-2024, este NO trae coordenadas.
//
// Uso: node scripts/fetch-padron-2024-2025.js
'use strict'

const fs = require('fs')
const path = require('path')
const https = require('https')

const ROOT = path.join(__dirname, '..')
const SALIDA = path.join(ROOT, 'data', 'padron-2024-2025.json')
const CSV_LOCAL = path.join(ROOT, 'data', 'padron-2024-2025.csv')

const CSV_URL =
  'https://minerd.gob.do/transparencia/file/descarga' +
  '?fileNombre=RELACI%C3%93N+DE+CENTROS+EDUCATIVOS+2024-2025.csv' +
  '&fileExt=csv&fileName=8xl-relacion-de-centros-educativos-2024-2025csv.csv' +
  '&category=conjunto-de-datos-abiertos&subcategory=1-centros-educativos'

const NIVELES = {
  '1-Inicial': 'Inicial',
  '2-Primario': 'Primaria',
  '3-Secundario': 'Secundaria',
  'Educ. de Adultos': 'Educación de Adultos',
}

const descargar = (url, intentos = 3) =>
  new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'User-Agent': 'regional15-edu/1.0' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          res.resume()
          return descargar(res.headers.location, intentos).then(resolve, reject)
        }
        if (res.statusCode !== 200) {
          res.resume()
          return reject(new Error(`HTTP ${res.statusCode}`))
        }
        const trozos = []
        res.on('data', (t) => trozos.push(t))
        res.on('end', () => resolve(Buffer.concat(trozos).toString('utf8')))
      })
      .on('error', (err) => {
        if (intentos <= 1) return reject(err)
        setTimeout(() => descargar(url, intentos - 1).then(resolve, reject), 1500)
      })
  })

function construir(texto) {
  const lineas = texto.replace(/^\uFEFF/, '').split(/\r?\n/)
  const centros = {}
  // Una fila por (codigo, tanda, nivel): un mismo codigo puede tener varias.
  const porCodigo = new Map()

  for (let i = 1; i < lineas.length; i++) {
    const p = lineas[i].split(';')
    if (p.length < 9) continue

    const mDist = /^(15\d\d) - /.exec((p[1] || '').trim())
    if (!mDist) continue

    const mCentro = /^\s*(\d{5})\s*-\s*(.+)$/.exec(p[4] || '')
    if (!mCentro) continue

    const codigo = mCentro[1]
    const nivel = NIVELES[(p[6] || '').trim()] || (p[6] || '').trim() || null
    const tanda = (p[5] || '').trim() || null

    if (!porCodigo.has(codigo)) {
      porCodigo.set(codigo, {
        codigo,
        nombre: mCentro[2].trim(),
        distrito: mDist[1],
        sector: (p[2] || '').trim().replace(/[^A-Z]/g, ''),
        plantaFisica: /^\s*(\d{8})\s*-\s*(.+)$/.exec(p[3] || '')?.[1] || null,
        plantaNombre: /^\s*(\d{8})\s*-\s*(.+)$/.exec(p[3] || '')?.[2]?.trim() || null,
        niveles: [],
        tandas: [],
        modalidad: [],
        matricula: 0,
      })
    }
    const c = porCodigo.get(codigo)
    c.matricula += parseInt(p[8], 10) || 0
    if (nivel && !c.niveles.includes(nivel)) c.niveles.push(nivel)
    if (tanda && !c.tandas.includes(tanda)) c.tandas.push(tanda)
    const mod = (p[7] || '').trim()
    if (mod && mod !== 'No aplica' && !c.modalidad.includes(mod)) c.modalidad.push(mod)
  }

  for (const c of porCodigo.values()) {
    centros[c.codigo] = {
      nombre: c.nombre,
      distrito: c.distrito,
      sector: c.sector,
      nivel: c.niveles.length ? c.niveles.join(' - ') : null,
      tanda: c.tandas.length ? c.tandas.join(' - ') : null,
      modalidad: c.modalidad.length ? c.modalidad.join(' - ') : null,
      plantaFisica: c.plantaFisica,
      plantaNombre: c.plantaNombre,
      matricula: c.matricula,
    }
  }
  return centros
}

async function main() {
  let texto
  if (fs.existsSync(CSV_LOCAL) && process.argv.includes('--local')) {
    console.log('Usando cache local data/padron-2024-2025.csv')
    texto = fs.readFileSync(CSV_LOCAL, 'utf8')
  } else {
    console.log('Descargando padron 2024-2025 del MINERD (minerd.gob.do)...')
    texto = await descargar(CSV_URL)
    fs.writeFileSync(CSV_LOCAL, texto, 'utf8')
  }

  const centros = construir(texto)

  const salida = {
    fuente: 'minerd.gob.do/transparencia - Relacion de Centros Educativos 2024-2025, publicada 9-ene-2026',
    periodo: '2024-2025',
    nota: 'Generado por scripts/fetch-padron-2024-2025.js. No editar a mano. Este padron no trae coordenadas.',
    total: Object.keys(centros).length,
    centros,
  }
  fs.writeFileSync(SALIDA, JSON.stringify(salida, null, 2) + '\n', 'utf8')

  console.log(`data/padron-2024-2025.json: ${salida.total} centros de la Regional 15`)

  const porSector = {}
  for (const c of Object.values(centros)) porSector[c.sector] = (porSector[c.sector] || 0) + 1
  for (const [s, n] of Object.entries(porSector).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${String(n).padStart(5)}  ${s}`)
  }
  const conTanda = Object.values(centros).filter((c) => c.tanda).length
  console.log(`  ${String(conTanda).padStart(5)}  con Tanda (turno) declarada`)
}

main().catch((e) => {
  console.error('ERROR:', e.message)
  process.exit(1)
})
