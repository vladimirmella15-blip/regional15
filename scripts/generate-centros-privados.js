// Genera data/centros-privados.ts y actualiza data/ubicaciones.ts con los centros privados
// de la Regional 15 a partir de los datasets abiertos del MINERD:
//   - Relación de Centros Educativos 2024-2025 (transparencia MINERD) -> lista de centros
//   - Centros Educativos 2023-2024 (datos.gob.do / transparencia MINERD) -> coordenadas
// Uso: node scripts/generate-centros-privados.js <csv-2024-2025> <csv-2023-2024>
'use strict'

const fs = require('fs')
const path = require('path')

const csv2524 = process.argv[2]
const csv2423 = process.argv[3]
if (!csv2524 || !csv2423) {
  console.error('Uso: node scripts/generate-centros-privados.js <csv-2024-2025> <csv-2023-2024>')
  process.exit(1)
}

const DISTRITOS = {
  '1501': { codigo: '15-01', nombre: 'Los Alcarrizos' },
  '1502': { codigo: '15-02', nombre: 'Santo Domingo Centro' },
  '1503': { codigo: '15-03', nombre: 'Santo Domingo Sur-Central' },
  '1504': { codigo: '15-04', nombre: 'Santo Domingo Noroeste' },
  '1505': { codigo: '15-05', nombre: 'Herrera' },
  '1506': { codigo: '15-06', nombre: 'Pedro Brand' },
}

const NIVELES = {
  '1-Inicial': 'Inicial',
  '2-Primario': 'Primaria',
  '3-Secundario': 'Secundaria',
  'Educ. de Adultos': 'Educación de Adultos',
}
const ORDEN_NIVELES = ['Inicial', 'Primaria', 'Secundaria', 'Educación de Adultos']
function nivelesOrdenados(niveles) {
  return [...niveles].sort((a, b) => {
    const ia = ORDEN_NIVELES.indexOf(a)
    const ib = ORDEN_NIVELES.indexOf(b)
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib)
  })
}

function readCsv(file) {
  return fs.readFileSync(file, 'latin1').split(/\r?\n/).filter(Boolean)
}

function parseCentroCol(value) {
  value = (value || '').trim()
  const m = value.match(/^(\d{5})\s*-\s*(.+)$/)
  return m ? { codigo: m[1], nombre: m[2].trim() } : null
}

const rows2524 = readCsv(csv2524)
const rows2423 = readCsv(csv2423)

// ---- 1) Centros privados por distrito (2024-2025, deduplicado por código) ----
const privadosPorDistrito = {}
const warnings = []
for (let i = 2; i < rows2524.length; i++) {
  const parts = rows2524[i].split(';')
  if (parts.length < 9) continue
  const distritoRaw = (parts[1] || '').trim()
  const mDist = distritoRaw.match(/^(15\d{2})/)
  if (!mDist) continue
  const dist = mDist[1]
  if (!DISTRITOS[dist]) continue
  const sector = (parts[2] || '').trim().toUpperCase()
  if (sector !== 'PRIVADO') continue
  const centro = parseCentroCol(parts[4])
  if (!centro) continue
  const nivelRaw = (parts[6] || '').trim()
  const nivel = NIVELES[nivelRaw] || nivelRaw
  const matricula = parseInt(parts[8], 10) || 0
  if (!privadosPorDistrito[dist]) privadosPorDistrito[dist] = {}
  const entry = privadosPorDistrito[dist][centro.codigo]
  if (entry) {
    if (!entry.niveles.includes(nivel)) entry.niveles.push(nivel)
    entry.matricula += matricula
  } else {
    privadosPorDistrito[dist][centro.codigo] = {
      codigo: centro.codigo,
      nombre: centro.nombre,
      niveles: nivel ? [nivel] : [],
      matricula,
    }
  }
}

// ---- 2) Coordenadas por código (2023-2024, prioriza período 20232024) ----
const coords = {}
for (let i = 1; i < rows2423.length; i++) {
  const parts = rows2423[i].split(';')
  if (parts.length < 8) continue
  const periodo = (parts[parts.length - 1] || '').trim()
  if (periodo !== '20232024' && periodo !== '20222023') continue
  const centro = parseCentroCol(parts[2])
  if (!centro) continue
  const lat = parseFloat(parts[5])
  const lng = parseFloat(parts[6])
  if (isNaN(lat) || isNaN(lng)) continue
  const municipio = (parts[10] || '').trim()
  const provincia = (parts[9] || '').trim()
  const prev = coords[centro.codigo]
  if (!prev || (periodo === '20232024' && prev.periodo !== '20232024')) {
    coords[centro.codigo] = { lat, lng, direccion: `${municipio}, ${provincia}`, periodo }
  }
}

// ---- 3) Generar data/centros-privados.ts ----
const distritosOrden = ['1501', '1502', '1503', '1504', '1505', '1506']
const lineas = []
lineas.push('// Listado de centros educativos privados por distrito de la Regional 15.')
lineas.push('// Fuente: Relación de Centros Educativos 2024-2025 del MINERD (transparencia MINERD).')
lineas.push('// Archivo generado por scripts/generate-centros-privados.js — no editar a mano.')
lineas.push('')
lineas.push("import { Centro, CentrosDistrito } from './centros'")
lineas.push('')
lineas.push('export const centrosPrivadosPorDistrito: CentrosDistrito[] = [')
let totalPriv = 0
let totalConCoord = 0
for (const dist of distritosOrden) {
  const items = Object.values(privadosPorDistrito[dist] || {})
  items.sort((a, b) => a.codigo.localeCompare(b.codigo))
  lineas.push('  {')
  lineas.push(`    codigo: '${DISTRITOS[dist].codigo}',`)
  lineas.push(`    sigerd: '${dist}',`)
  lineas.push(`    nombre: '${DISTRITOS[dist].nombre}',`)
  lineas.push('    centros: [')
  for (const c of items) {
    const nivelStr = nivelesOrdenados(c.niveles).join(' - ')
    const partes = [`codigo: '${c.codigo}'`, `nombre: '${c.nombre.replace(/'/g, "\\'")}'`]
    if (nivelStr) partes.push(`nivel: '${nivelStr.replace(/'/g, "\\'")}'`)
    partes.push('tipo: \'Privado\'')
    if (c.matricula > 0) partes.push(`matricula: ${c.matricula}`)
    lineas.push(`      { ${partes.join(', ')} },`)
    totalPriv++
    if (coords[c.codigo]) totalConCoord++
  }
  lineas.push('    ],')
  lineas.push('  },')
}
lineas.push(']')
fs.writeFileSync(path.join(__dirname, '..', 'data', 'centros-privados.ts'), lineas.join('\n') + '\n', 'utf-8')

// ---- 4) Actualizar data/ubicaciones.ts (bloque entre marcadores) ----
const ubFile = path.join(__dirname, '..', 'data', 'ubicaciones.ts')
let ubContent = fs.readFileSync(ubFile, 'utf-8')
const START = '  // ===== CENTROS PRIVADOS (generado: scripts/generate-centros-privados.js) ====='
const END = '  // ===== FIN CENTROS PRIVADOS ====='
const reBlock = new RegExp(`${START.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?${END.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\n?`)
// Claves ya existentes en el archivo (fuera del bloque generado) — no duplicar
const clavesExistentes = new Set()
const posStart = ubContent.indexOf(START)
const posEnd = ubContent.indexOf(END)
const reClave = /^  '(\d{5})': \{/gm
let mClave
while ((mClave = reClave.exec(ubContent)) !== null) {
  const dentroBloque = posStart !== -1 && posEnd !== -1 && mClave.index > posStart && mClave.index < posEnd
  if (!dentroBloque) clavesExistentes.add(mClave[1])
}
const block = [START]
let omitidos = 0
for (const dist of distritosOrden) {
  const items = Object.values(privadosPorDistrito[dist] || {})
  items.sort((a, b) => a.codigo.localeCompare(b.codigo))
  for (const c of items) {
    const coord = coords[c.codigo]
    if (!coord) continue
    if (clavesExistentes.has(c.codigo)) {
      omitidos++
      continue
    }
    block.push(`  '${c.codigo}': {`)
    block.push(`  lat: ${coord.lat},`)
    block.push(`  lng: ${coord.lng},`)
    block.push(`  direccion: "${coord.direccion.replace(/"/g, '\\"')}",`)
    block.push(`  enlace: "https://www.google.com/maps/search/?api=1&query=${coord.lat},${coord.lng}"`)
    block.push('  },')
  }
}
block.push(END)
const blockText = block.join('\n') + '\n'
if (reBlock.test(ubContent)) {
  ubContent = ubContent.replace(reBlock, blockText)
} else {
  const marker = 'export const ubicacionesPorCodigo: Record<string, Ubicacion> = {'
  ubContent = ubContent.replace(marker, `${marker}\n${blockText}`)
}
fs.writeFileSync(ubFile, ubContent, 'utf-8')

console.log(`Centros privados generados: ${totalPriv} (con coordenadas: ${totalConCoord})`)
console.log(`Ubicaciones añadidas: ${800 - omitidos} (omitidas ya existentes: ${omitidos})`)
for (const dist of distritosOrden) {
  console.log(`  ${dist} ${DISTRITOS[dist].nombre}: ${Object.keys(privadosPorDistrito[dist] || {}).length}`)
}
for (const w of warnings) console.warn('  WARN:', w)
