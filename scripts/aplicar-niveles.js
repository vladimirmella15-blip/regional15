// Aplica al listado publico el Nivel oficial del padron del MINERD y renombra los
// centros cuyo nombre se repite dentro de un mismo distrito.
//
// Sin esto, 16394 y 00414 aparecen ambos como "PATRIA MIRABAL" y el visitante no
// puede saber cual es el Liceo y cual la Escuela Primaria. El padron si lo dice,
// por codigo SIGERD.
//
// Rename solo cuando el nombre normalizado se repite en el mismo distrito: en los
// demas casos el nombre ya es unico y un prefijo solo Adds ruido.
//
// Uso:
//   node scripts/aplicar-niveles.js           # escribe data/centros.ts
//   node scripts/aplicar-niveles.js --dry-run # solo el informe
'use strict'

const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..')
const PADRON_PATH = path.join(ROOT, 'data', 'padron-niveles.json')

const NIVELES = {
  'INICIAL - PRIMARIO - SECUNDARIO': 'Inicial - Primaria - Secundaria',
  'PRIMARIO - SECUNDARIO': 'Primaria - Secundaria',
  'INICIAL - PRIMARIO': 'Inicial - Primaria',
  INICIAL: 'Inicial',
  PRIMARIO: 'Primaria',
  SECUNDARIO: 'Secundaria',
  ADULTOS: 'Educación de Adultos',
}

// Como se refleja el nivel oficial en el nombre que ve el visitante.
const PREFIJOS = {
  SECUNDARIO: 'Liceo ',
  'INICIAL - PRIMARIO': 'Escuela Primaria ',
  'INICIAL - PRIMARIO - SECUNDARIO': 'Centro Educativo ',
  'PRIMARIO - SECUNDARIO': 'Colegio ',
  INICIAL: 'Estancia Infantil ',
  PRIMARIO: 'Escuela Primaria ',
}
const SUFIJOS = {
  ADULTOS: ' (Básica de Adultos)',
}

// Nombres que ya dicen su nivel: prefijarlos seria "Liceo Liceo X".
const YA_CALIFICADO =
  /^(LICEO|POLITECNICO|POLITÉCNICO|CENTRO|COLEGIO|INSTITUTO|ESCUELA|UNIVERSIDAD|COMPLEJO|C[ÁA]TEDRA|JARD[ÍI]N|CAIPI|EPES|HOGAR|MATERNAL|GUARDER[ÍI]A|ACADEMIA|RADIO SANTA MARIA)\b/

const normalizar = (s) =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^A-Z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toUpperCase()

const RE_CENTRO = /^\s*\{\s*codigo:\s*'(\d{5})',\s*nombre:\s*'((?:[^'\\]|\\.)*)',\s*(?:nivel:\s*'(?:[^'\\]|\\.)*',\s*)?(?:tipo:\s*'([^']*)',\s*)?/
const RE_DISTRITO = /codigo:\s*'(\d\d-\d\d)'[\s\S]*?centros:\s*\[/

function leerCentros(relPath) {
  const texto = fs.readFileSync(path.join(ROOT, relPath), 'utf8')
  const esPrivado = relPath !== 'data/centros.ts'
  const entradas = []
  let distrito = null

  for (const linea of texto.split('\n')) {
    const mDist = RE_DISTRITO.exec(linea)
    if (mDist) distrito = mDist[1]
    const m = RE_CENTRO.exec(linea)
    if (!m) continue
    entradas.push({
      relPath,
      distrito,
      codigo: m[1],
      nombre: m[2].replace(/\\'/g, "'"),
      // La insignia Publico/Privado ya separa centros de distinta naturaleza, asi
      // que solo cuentan como ambiguos los choques dentro del mismo tipo.
      tipo: m[3] || (esPrivado ? 'Privado' : 'Público'),
      tieneNivel: /nivel:\s*'/.test(linea),
    })
  }
  return entradas
}

function main() {
  const dryRun = process.argv.includes('--dry-run')
  const padron = JSON.parse(fs.readFileSync(PADRON_PATH, 'utf-8')).centros

  const archivos = [
    'data/centros.ts',
    'data/centros-privados.ts',
    'data/centros-adicionales-privados.ts',
  ]
  const todas = archivos.flatMap(leerCentros)

  // --- 1) Nombres que se repiten dentro de un distrito y un mismo tipo ---
  const porGrupo = new Map()
  for (const e of todas) {
    const clave = `${e.distrito}|${e.tipo}|${normalizar(e.nombre)}`
    if (!porGrupo.has(clave)) porGrupo.set(clave, [])
    porGrupo.get(clave).push(e)
  }
  const ambiguos = new Set()
  for (const grupo of porGrupo.values()) {
    if (grupo.length > 1) for (const e of grupo) ambiguos.add(e.codigo)
  }
  const porCodigo = new Map(todas.map((e) => [e.codigo, e]))

  // --- 2) Decidir el nombre nuevo de cada centro publico ---
  const renombres = new Map()
  const sinResolver = []

  for (const codigo of ambiguos) {
    const p = padron[codigo]
    if (!p || !NIVELES[p.nivel]) continue
    const entrada = porCodigo.get(codigo)
    if (entrada.relPath !== 'data/centros.ts') continue // los privados ya traen nivel
    if (YA_CALIFICADO.test(entrada.nombre)) continue

    let nombre = entrada.nombre
    if (PREFIJOS[p.nivel]) nombre = PREFIJOS[p.nivel] + nombre
    else if (SUFIJOS[p.nivel]) nombre = nombre + SUFIJOS[p.nivel]
    else continue

    renombres.set(codigo, { de: entrada.nombre, a: nombre, nivel: NIVELES[p.nivel] })
  }

  // --- 3) Comprobar que el renombre resuelve de verdad cada grupo ---
  const despues = new Map()
  for (const e of todas) {
    const nombre = renombres.get(e.codigo)?.a || e.nombre
    const clave = `${e.distrito}|${e.tipo}|${normalizar(nombre)}`
    if (!despues.has(clave)) despues.set(clave, [])
    despues.get(clave).push(e)
  }
  for (const grupo of despues.values()) {
    if (grupo.length > 1) {
      const plantas = new Set(grupo.map((e) => padron[e.codigo]?.plantaFisica || '-'))
      sinResolver.push({
        nombre: grupo[0].nombre,
        // Misma planta fisica = mismo|center con varios codigos (turnos/programas):
        // ningun nombre los separa porque no son centros distintos.
        mismaPlanta: plantas.size === 1,
        miembros: grupo.map((e) => ({
          codigo: e.codigo,
          tipo: e.tipo,
          nivel: NIVELES[padron[e.codigo]?.nivel] || 'sin nivel en el padron',
          planta: padron[e.codigo]?.plantaFisica || '-',
        })),
      })
    }
  }

  // --- 4) Reescribir data/centros.ts ---
  if (!dryRun) {
    const ruta = path.join(ROOT, 'data', 'centros.ts')
    const original = fs.readFileSync(ruta, 'utf8')
    let anadidos = 0
    let renombrados = 0

    const salida = original.split('\n').map((linea) => {
      const m = RE_CENTRO.exec(linea)
      if (!m) return linea

      const codigo = m[1]
      const nombreActual = m[2].replace(/\\'/g, "'")
      const p = padron[codigo]
      if (!p) return linea

      const nivel = NIVELES[p.nivel]
      const renombrado = renombres.get(codigo)
      const nuevoNombre = renombrado && renombrado.a !== nombreActual ? renombrado.a : null

      if (!nuevoNombre && (!nivel || m.tieneNivel)) return linea

      // Se reconstruye el par nombre/nivel entero: reemplazar el nombre suelto
      // volveria a casar dentro del nombre ya prefijado.
      const partes = [`nombre: '${(nuevoNombre || nombreActual).replace(/'/g, "\\'")}'`]
      if (nivel && !m.tieneNivel) {
        partes.push(`nivel: '${nivel}'`)
        anadidos++
      }
      if (nuevoNombre) renombrados++

      return linea.replace(`nombre: '${m[2]}'`, partes.join(', '))
    })

    fs.writeFileSync(ruta, salida.join('\n'), 'utf8')
    console.log(`data/centros.ts: ${anadidos} niveles anadidos, ${renombrados} nombres actualizados.`)
  } else {
    console.log('--dry-run: no se escribio nada.')
  }

  // --- 5) Informe ---
  console.log(`\ncentros con nombre repetido en su distrito: ${ambiguos.size}`)
  console.log(`nombres actualizados: ${renombres.size}`)
  console.log(`sin nivel en el padron: ${todas.filter((e) => !padron[e.codigo]).length}`)

  if (renombres.size) {
    console.log('\n--- Renombres aplicados ---')
    for (const [codigo, r] of [...renombres].sort()) {
      console.log(`${codigo}  ${r.de}\n      -> ${r.a}   [${r.nivel}]`)
    }
  }

  const mismaPlanta = sinResolver.filter((g) => g.mismaPlanta)
  const distintasPlantas = sinResolver.filter((g) => !g.mismaPlanta)
  console.log(`\n--- Grupos que siguen repetidos tras el renombre: ${sinResolver.length} ---`)
  console.log(`    misma planta fisica (mismo|center, varios codigos): ${mismaPlanta.length}`)
  console.log(`    plantas fisicas distintas (centros distintos, mismo nombre): ${distintasPlantas.length}`)
  for (const grupo of sinResolver) {
    console.log(`  ${grupo.mismaPlanta ? '=' : '!'} ${grupo.nombre}`)
    for (const m of grupo.miembros) {
      console.log(`      ${m.codigo}  ${m.tipo.padEnd(11)} ${m.nivel.padEnd(30)} planta=${m.planta}`)
    }
  }

  fs.writeFileSync(
    path.join(ROOT, 'data', 'grupos-pendientes.json'),
    JSON.stringify(
      { generadoPor: 'scripts/aplicar-niveles.js', nota: 'Nombres que el padron no permite desempatar. Requieren confirmacion de la Regional 15.', grupos: sinResolver },
      null,
      2
    ) + '\n',
    'utf8'
  )
  console.log('\ndata/grupos-pendientes.json escrito.')
}

main()