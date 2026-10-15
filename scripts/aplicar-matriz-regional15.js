// Aplica la matricula oficial de la Regional 15 (data/padron-regional15.json) y
// agrega los centros que faltaban.
//
// Regla de la Regional 15: si falta algo, se completa; nada se borra. Ningun
// centro existente se elimina ni se renombra aqui, solo se le actualiza la
// matricula cuando hay una cifra oficial mas nueva, y se le marca el periodo.
//
// Uso:
//   node scripts/aplicar-matriz-regional15.js --dry-run
//   node scripts/aplicar-matriz-regional15.js
'use strict'

const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..')
const CENTROS = path.join(ROOT, 'data', 'centros.ts')
const UBICACIONES = path.join(ROOT, 'data', 'ubicaciones.ts')

// Centros que no estaban en el listado del sitio. Nivel, turno y matricula
// salen del padron oficial 2024-2025 publicado por el MINERD en enero de 2026.
const NUEVOS = [
  {
    codigo: '00037',
    distrito: '15-04',
    nombre: 'ANGEL MANUEL BELLIARD - MIS MUCHACHITOS',
    nivel: 'Inicial - Primaria - Secundaria',
    matricula: 207,
    secciones: null,
    tanda: null,
  },
  {
    codigo: '05672',
    distrito: '15-06',
    nombre: 'Liceo GREGORIO LUPERON (Vespertina)',
    nivel: 'Secundaria',
    matricula: 741,
    secciones: null,
    tanda: 'Vespertina',
  },
  {
    codigo: '05607',
    distrito: '15-03',
    nombre: 'Liceo VICTOR GARRIDO (Nocturna)',
    nivel: 'Secundaria',
    matricula: 61,
    secciones: null,
    tanda: 'Nocturna',
  },
  {
    codigo: '04987',
    distrito: '15-05',
    nombre: 'CLUB 16 DE AGOSTO (Básica de Adultos)',
    nivel: 'Educación de Adultos',
    matricula: 42,
    secciones: null,
    tanda: 'Nocturna',
  },
  {
    codigo: '05741',
    distrito: '15-01',
    nombre: 'RADIO SANTA MARIA - CARMEN CELIA BALAGUER (Básica de Adultos)',
    nivel: 'Educación de Adultos',
    matricula: 1,
    secciones: null,
    tanda: 'Semipresencial',
  },
  {
    codigo: '15625',
    distrito: '15-01',
    nombre: 'RADIO SANTA MARIA - SAN JOSE FE Y ALEGRIA (Básica de Adultos)',
    nivel: 'Educación de Adultos',
    matricula: 16,
    secciones: null,
    tanda: 'Semipresencial',
  },
]

// Ubicaciones recuperados: 6 del padron 2023-2024 (join de la longitud partida),
// 5 por planta fisica compartida con un centro que ya tenia pinpoint, 1 del
// archivo manual del distrito 15-03 que estaba en el repo sin usarse.
//
// Los 5 de planta NO llevan coordenadas propias: heredan las del centro hermano
// porque comparten edificio. Si ese hermano no tiene pinpoint, no se agrega
// nada: es preferible que el centro quede sin punto antes que poner uno inventado.
const RECUPERADAS = {
  '05079': { lat: 18.4518, lng: -69.9526, de: 'padron 2023-2024' },
  '04987': { lat: 18.467605, lng: -69.981483, de: 'padron 2023-2024' },
  '05607': { lat: 18.428815, lng: -69.973609, de: 'padron 2023-2024' },
  '05672': { lat: 18.564843, lng: -70.089441, de: 'padron 2023-2024' },
  '05741': { lat: 18.524452, lng: -70.020661, de: 'padron 2023-2024' },
  '15625': { lat: 18.534632, lng: -69.990878, de: 'padron 2023-2024' },
  '14695': { copia: '13400', de: '13400' },
  '15468': { copia: '10954', de: '10954' },
  '17371': { copia: '05796', de: '05796' },
  '17372': { copia: '00051', de: '00051' },
  '17420': { copia: '04969', de: '04969' },
  '17428': {
    lat: 18.5406,
    lng: -69.9719,
    direccion: 'km 10, Av. Cayetano Germosén 26, Santo Domingo',
    de: 'data/1503-ubicaciones.json',
  },
}

function main() {
  const dryRun = process.argv.includes('--dry-run')
  const oficial = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'padron-regional15.json'), 'utf-8'))

  // ---------------- data/centros.ts ----------------
  let texto = fs.readFileSync(CENTROS, 'utf8')

  // 1) Actualizar la matricula y el periodo de los centros que aparecen en el
  //    listado oficial de la Regional 15.
  let actualizados = 0
  let sinCambio = 0
  let lineas = texto.split('\n').map((linea) => {
    const m = /^\s*\{ codigo: '(\d{5})',/.exec(linea)
    if (!m) return linea
    const d = oficial.centros[m[1]]
    if (!d || d.m == null) return linea

    const antes = /matricula: (\d+)/.exec(linea)
    const valor = String(d.m)
    if (antes && antes[1] === valor && /periodo:/.test(linea)) {
      sinCambio++
      return linea
    }
    actualizados++

    let out = antes ? linea.replace(/matricula: \d+/, `matricula: ${valor}`) : linea.replace(/ \},\s*$/, `, matricula: ${valor} },`)
    // El periodo se agrega una sola vez, al final del objeto.
    out = out.replace(/(\},?)\s*$/, (todo, cierre) => `, periodo: '${oficial.periodo}' ${cierre}`)
    return out
  })
  texto = lineas.join('\n')

  // 2) Agregar los centros que faltaban, al final de su bloque de distrito.
  //    Se recorre por indice de linea porque el cierre de "centros: [" tiene
  //    seis espacios y no encaja en una expresion regular comoda.
  let agregados = 0
  for (const n of NUEVOS) {
    if (new RegExp(`codigo: '${n.codigo}'`).test(texto)) continue

    const partes = [`codigo: '${n.codigo}'`, `nombre: '${n.nombre.replace(/'/g, "\\'")}'`, `nivel: '${n.nivel}'`]
    if (n.secciones) partes.push(`secciones: ${n.secciones}`)
    partes.push(`matricula: ${n.matricula}`, `periodo: '2024-2025'`)
    const entrada = `      { ${partes.join(', ')} },`

    const lineas = texto.split('\n')
    // El archivo puede venir con finales de linea CRLF, asi que se compara
    // sobre la linea recortada y no con una expresion anclada exacta.
    const cabecera = `codigo: '${n.distrito}',`
    const inicio = lineas.findIndex((l) => l.trim() === cabecera)
    if (inicio === -1) {
      console.warn(`  AVISO: no se encontro el bloque ${n.distrito} para ${n.codigo}`)
      continue
    }
    // El arreglo "centros" cierra con "    ]" sin coma, porque es la ultima
    // propiedad del objeto de distrito y la coma sobrante alli es opcional.
    let fin = -1
    for (let i = inicio; i < lineas.length; i++) {
      if (lineas[i].trim() === ']') {
        fin = i
        break
      }
    }
    if (fin === -1) {
      console.warn(`  AVISO: no se encontro el cierre del bloque ${n.distrito}`)
      continue
    }
    lineas.splice(fin, 0, entrada)
    texto = lineas.join('\n')
    agregados++
  }

  if (dryRun) {
    console.log(`--dry-run: ${actualizados} matriculas actualizadas, ${agregados} centros agregados`)
  } else {
    fs.writeFileSync(CENTROS, texto, 'utf8')
    console.log(`data/centros.ts: ${actualizados} matriculas actualizadas (${sinCambio} ya estaban), ${agregados} centros agregados`)
  }

  // ---------------- data/ubicaciones.ts ----------------
  const ubiLineas = fs.readFileSync(UBICACIONES, 'utf8').split('\n')
  const existentes = new Set(
    ubiLineas.map((l) => /^ {2}'(\d{5})': \{$/.exec(l)).filter(Boolean).map((m) => m[1])
  )
  const enMapa = new Map()
  for (let i = 0; i < ubiLineas.length; i++) {
    const m = /^ {2}'(\d{5})': \{$/.exec(ubiLineas[i])
    if (!m) continue
    let lat = null
    let lng = null
    for (let j = i + 1; j < ubiLineas.length && !/^ {2}\},?$/.test(ubiLineas[j]); j++) {
      const c = /^(?: {2}lat: (-?[\d.]+),| {2}lng: (-?[\d.]+),)$/.exec(ubiLineas[j])
      if (!c) continue
      if (c[1] != null) lat = parseFloat(c[1])
      if (c[2] != null) lng = parseFloat(c[2])
    }
    if (lat != null && lng != null) enMapa.set(m[1], { lat, lng })
  }

  const nuevas = []
  const omitidas = []
  for (const [codigo, r] of Object.entries(RECUPERADAS)) {
    if (enMapa.has(codigo)) continue
    let lat = r.lat
    let lng = r.lng
    let comentario = null
    if (r.copia) {
      const fuente = enMapa.get(r.copia)
      if (!fuente) {
        omitidas.push(`${codigo} (su fuente ${r.copia} no tiene pinpoint)`)
        continue
      }
      lat = fuente.lat
      lng = fuente.lng
      comentario = `Comparte planta fisica con ${r.copia}: mismo edificio.`
    }
    if (!lat || !lng) {
      omitidas.push(codigo)
      continue
    }
    nuevas.push({ codigo, lat, lng, direccion: r.direccion, comentario, de: r.de })
  }

  if (nuevas.length) {
    const bloque = nuevas
      .map(
        (f) =>
          `  '${f.codigo}': {\n  lat: ${f.lat},\n  lng: ${f.lng},\n  direccion: "${f.direccion || 'Santo Domingo'}",` +
          (f.comentario ? `\n  // ${f.comentario}\n` : '') +
          `\n  },`
      )
      .join('\n')
    const marcador = 'export const ubicacionesPorCodigo: Record<string, Ubicacion> = {'
    if (dryRun) {
      console.log(`--dry-run: se agregarian ${nuevas.length} fichas de ubicacion`)
    } else {
      const contenido = fs.readFileSync(UBICACIONES, 'utf8')
      fs.writeFileSync(UBICACIONES, contenido.replace(marcador, `${marcador}\n${bloque}`), 'utf8')
      console.log(`data/ubicaciones.ts: ${nuevas.length} fichas agregadas`)
    }
    for (const f of nuevas) console.log(`  ${f.codigo}  ${f.lat}, ${f.lng}   (${f.de})`)
  } else {
    console.log('data/ubicaciones.ts: todas las fichas recuperadas ya estaban')
  }
  if (omitidas.length) console.log(`  omitidas por falta de pinpoint de origen: ${omitidas.join(', ')}`)
}

main()
