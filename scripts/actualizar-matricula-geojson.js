// Actualiza matrícula, secciones, período y estado de cada punto del mapa con
// la relación oficial 2026-2027 por centro.
//
// Uso: node scripts/actualizar-matricula-geojson.js

const fs = require('fs')
const path = require('path')

const GEOJSON = path.join(__dirname, '..', 'public', 'data', 'centros.geojson')
const MATRICULA = path.join(__dirname, '..', 'data', 'matricula-centros-2026-2027.json')

const ESTADOS = {
  A: 'Autorizado',
  T: 'Centro Autorizado temporalmente',
  N: 'No autorizado',
  C: 'Cerrado',
}

const geojson = JSON.parse(fs.readFileSync(GEOJSON, 'utf8'))
const datos = JSON.parse(fs.readFileSync(MATRICULA, 'utf8'))
const centros = datos.centros

let actualizados = 0
let sinDatos = 0

for (const feature of geojson.features) {
  const codigo = feature.properties?.codigo
  const fila = codigo ? centros[codigo] : null
  if (!fila) {
    // No está en la relación 2026-2027. Se deja sin matrícula para no mostrar
    // una cifra vieja como si fuera del año actual.
    feature.properties.matricula = null
    feature.properties.secciones = null
    feature.properties.periodo = null
    feature.properties.estado = null
    sinDatos++
    continue
  }
  feature.properties.matricula = fila[0]
  feature.properties.secciones = fila[1]
  feature.properties.periodo = datos.periodo
  feature.properties.estado = ESTADOS[fila[2]] || 'No autorizado'
  actualizados++
}

fs.writeFileSync(GEOJSON, JSON.stringify(geojson), 'utf8')

console.log(`Puntos actualizados: ${actualizados}`)
console.log(`Puntos sin dato 2026-2027: ${sinDatos}`)
console.log(`Total de puntos: ${geojson.features.length}`)
