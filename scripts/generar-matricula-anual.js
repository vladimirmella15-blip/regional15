// Genera data/matricula-2024-2025.json a partir del padrón oficial del MINERD.
//
// El CSV trae una fila por centro y por nivel, con la matrícula de cada nivel.
// Se agrupa por distrito y nivel para poder comparar contra el año escolar
// 2026-2027 sin inventar cifras ni repartir totales a mano.
//
// Uso: node scripts/generar-matricula-anual.js

const fs = require('fs')
const path = require('path')

const ENTRADA = path.join(__dirname, '..', 'data', 'padron-2024-2025.csv')
const SALIDA = path.join(__dirname, '..', 'data', 'matricula-2024-2025.json')

const NIVELES = {
  '1-Inicial': 'inicial',
  '2-Primario': 'primario',
  '3-Secundario': 'secundario',
  'Educ. de Adultos': 'adultos',
  'Educación de Adultos': 'adultos',
}

const DISTRITOS = ['1501', '1502', '1503', '1504', '1505', '1506']

function numero(valor) {
  const limpio = String(valor || '').replace(/[^\d-]/g, '')
  return limpio ? Number(limpio) : 0
}

const texto = fs.readFileSync(ENTRADA).toString('latin1')
const filas = texto.split(/\r?\n/).slice(2).filter(Boolean)

const porDistrito = {}
const porNivel = {}
const porDistritoNivel = {}

for (const distrito of DISTRITOS) {
  porDistrito[distrito] = { total: 0 }
  porDistritoNivel[distrito] = {}
  for (const nivel of Object.values(NIVELES)) {
    porNivel[nivel] = porNivel[nivel] || { total: 0 }
    porDistritoNivel[distrito][nivel] = { total: 0 }
  }
}

let total = 0
let filasUsadas = 0
const nivelesDesconocidos = new Set()

for (const fila of filas) {
  const columnas = fila.split(';')
  if (!String(columnas[0] || '').startsWith('15 - ')) continue
  const distrito = String(columnas[1] || '').slice(0, 4).trim()
  if (!DISTRITOS.includes(distrito)) continue
  const nivelOriginal = String(columnas[6] || '').trim()
  const nivel = NIVELES[nivelOriginal]
  if (!nivel) {
    nivelesDesconocidos.add(nivelOriginal)
    continue
  }
  const matricula = numero(columnas[8])
  porDistrito[distrito].total += matricula
  porNivel[nivel].total += matricula
  porDistritoNivel[distrito][nivel].total += matricula
  total += matricula
  filasUsadas++
}

if (nivelesDesconocidos.size) {
  console.warn('Niveles sin mapear (se omitieron):', [...nivelesDesconocidos].join(', '))
}

const salida = {
  periodo: '2024-2025',
  fuente: 'MINERD — Relación de Centros Educativos 2024-2025 (matrícula por centro y nivel)',
  nota: 'Agregado por distrito y nivel desde data/padron-2024-2025.csv. No editar a mano: ejecutar scripts/generar-matricula-anual.js.',
  total,
  porSexo: null,
  porDistrito,
  porNivel,
  porDistritoNivel,
}

fs.writeFileSync(SALIDA, JSON.stringify(salida, null, 2) + '\n', 'utf8')

console.log(`Filas usadas: ${filasUsadas}`)
console.log(`Matrícula total 2024-2025: ${total.toLocaleString('es-DO')}`)
console.log(`Archivo generado: ${SALIDA}`)
