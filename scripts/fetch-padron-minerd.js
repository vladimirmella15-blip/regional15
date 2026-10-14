// Descarga el padron oficial de centros educativos del MINERD y extrae, por codigo
// SIGERD, el Nivel y la Planta Fisica de cada centro de la Regional 15.
//
// Fuente: datos.gob.do -> "Relacion de Centros Educativos de Republica Dominicana,
// periodo escolar 2022-2024" (dataset centros-educativos-de-republica-dominicana).
//
// El padron es la unica fuente que dice si un codigo es Liceo, Escuela Primaria,
// Basica de Adultos, etc. Sin el, dos centros con el mismo nombre son
// indistinguibles (p.ej. 00330 y 06008 HERMANAS MIRABAL son el mismo plantel y el
// programa de adultos, no dos escuelas distintas).
//
// Uso:
//   node scripts/fetch-padron-minerd.js            # descarga y genera data/padron-niveles.json
//   node scripts/fetch-padron-minerd.js --local    # reutiliza data/padron-2023-2024.csv
'use strict'

const fs = require('fs')
const path = require('path')
const https = require('https')

const ROOT = path.join(__dirname, '..')
const CSV_PATH = path.join(ROOT, 'data', 'padron-2023-2024.csv')
const JSON_PATH = path.join(ROOT, 'data', 'padron-niveles.json')

const CSV_URL =
  'https://ministeriodeeducacion.gob.do/transparencia/file/descarga' +
  '?fileNombre=8sq-centros-educativos-de-republica-dominicana-periodo-escolar-2023-2024.csv' +
  '&fileExt=csv&fileName=RTz-8sq-centros-educativos-de-republica-dominicana-periodo-escolar-2023-2024csv.csv' +
  '&category=conjunto-de-datos-abiertos&subcategory=1-centros-educativos'

const DISTRITOS = ['1501', '1502', '1503', '1504', '1505', '1506']
const PERIODO = '20232024'

function descargar(url, intentos = 3) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'User-Agent': 'regional15-edu/1.0' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          res.resume()
          return descargar(res.headers.location, intentos).then(resolve, reject)
        }
        if (res.statusCode !== 200) {
          res.resume()
          return reject(new Error(`HTTP ${res.statusCode} descargando el padron`))
        }
        const trozos = []
        res.on('data', (t) => trozos.push(t))
        res.on('end', () => resolve(Buffer.concat(trozos)))
      })
      .on('error', (err) => {
        if (intentos <= 1) return reject(err)
        setTimeout(() => descargar(url, intentos - 1).then(resolve, reject), 1500)
      })
  })
}

// El padron escribe la coma y el punto decimal de las coordenadas pegados
// ("18.8944,-7;0.0376"), pero lat/lng ocupan columnas propias: parts[5] y parts[6].
// "Centros" trae el codigo SIGERD de 5 digitos; "Planta Fisica" trae una clave
// de 8 digitos que comparten todas las filas del mismo plantel (p.ej. el diurno
// y su programa de adultos).
function parseCol(valor, digitos) {
  const m = (valor || '').trim().match(new RegExp(`^(\\d{${digitos}})\\s*-\\s*(.+)$`))
  return m ? { codigo: m[1], nombre: m[2].trim() } : null
}

function construirIndice(texto) {
  const lineas = texto.split(/\r?\n/)
  const indice = {}

  for (let i = 1; i < lineas.length; i++) {
    const p = lineas[i].split(';')
    if (p.length < 12) continue

    const distrito = (p[1] || '').trim()
    const mDist = distrito.match(/^(15\d\d)/)
    if (!mDist || !DISTRITOS.includes(mDist[1])) continue

    if ((p[p.length - 1] || '').trim() !== PERIODO) continue

    const centro = parseCol(p[2], 5)
    if (!centro) continue

    const nivel = (p[4] || '').trim()
    const tipo = (p[3] || '').trim().toUpperCase()
    const planta = parseCol(p[8], 8)
    const municipio = (p[10] || '').trim()

    const previo = indice[centro.codigo]
    // Un mismo codigo puede repetirse; gana la fila con nivel utilizable.
    if (previo && previo.nivel !== '#REF!' && nivel === '#REF!') continue
    if (previo && previo.nivel === nivel && previo.tipo === tipo) continue

    indice[centro.codigo] = {
      codigo: centro.codigo,
      nombre: centro.nombre,
      nombrePadron: planta ? planta.nombre : null,
      plantaFisica: planta ? planta.codigo : null,
      nivel,
      tipo: tipo === 'PÚBLICO' || tipo === 'PUBLICO' ? 'Público' : tipo === 'PRIVADO' ? 'Privado' : tipo || null,
      municipio: municipio || null,
      distrito: mDist[1],
    }
  }

  return indice
}

async function main() {
  const soloLocal = process.argv.includes('--local')
  let csv

  if (soloLocal && fs.existsSync(CSV_PATH)) {
    console.log('Usando cache local data/padron-2023-2024.csv')
    csv = fs.readFileSync(CSV_PATH, 'latin1')
  } else {
    console.log('Descargando padron oficial del MINERD...')
    const buf = await descargar(CSV_URL)
    fs.writeFileSync(CSV_PATH, buf)
    csv = buf.toString('latin1')
    console.log(`Guardado data/padron-2023-2024.csv (${buf.length} bytes)`)
  }

  const indice = construirIndice(csv)
  const claves = Object.keys(indice).sort()
  const salida = {
    fuente: 'datos.gob.do / ministeriodeeducacion.gob.do - Relacion de Centros Educativos de RD, periodo 2022-2024',
    periodo: PERIODO,
    nota: 'Generado por scripts/fetch-padron-minerd.js. No editar a mano.',
    centros: claves.reduce((acc, k) => Object.assign(acc, { [k]: indice[k] }), {}),
  }

  fs.writeFileSync(JSON_PATH, JSON.stringify(salida, null, 2) + '\n', 'utf-8')
  console.log(`data/padron-niveles.json: ${claves.length} centros de la Regional 15`)

  const porNivel = {}
  for (const k of claves) {
    const n = indice[k].nivel || '(vacio)'
    porNivel[n] = (porNivel[n] || 0) + 1
  }
  for (const [nivel, total] of Object.entries(porNivel).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${String(total).padStart(5)}  ${nivel}`)
  }
}

main().catch((err) => {
  console.error('ERROR:', err.message)
  process.exit(1)
})