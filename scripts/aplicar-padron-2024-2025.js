// Aplica data/padron-2024-2025.json sobre data/centros.ts:
//
//  1. Corrige el tipo de los centros SEMIOFICIALES. El listado del sitio no
//     declaraba `tipo`, asi que todos caian en 'Público' por defecto: 22 de los
//     23 semioficiales del MINERD estaban publicados como públicos.
//  2. Agrega la Tanda (turno) al centro, que el padron viejo no traia y que
//     explica por que un mismo plantel aparece con varios codigos SIGERD.
//  3. Informa de los centros que el sitio tiene y el padron 2024-2025 no.
//
// Regla de la Regional 15: se completa y se corrige, nada se borra. Un centro
// que este en la pagina y no en el padron se deja estar y se reporta; puede ser
// una escuela abierta despues de la publicacion.
//
// Uso:
//   node scripts/aplicar-padron-2024-2025.js --dry-run
//   node scripts/aplicar-padron-2024-2025.js
'use strict'

const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..')
const CENTROS = path.join(ROOT, 'data', 'centros.ts')
const PADRON = path.join(ROOT, 'data', 'padron-2024-2025.json')
const SALIDA_PENDIENTES = path.join(ROOT, 'docs', 'CENTROS-POR-CONFIRMAR.md')

const NIVEL_PADRON = {
  Inicial: 'Inicial',
  Primaria: 'Primaria',
  Secundaria: 'Secundaria',
  'Educación de Adultos': 'Educación de Adultos',
  'Inicial - Primaria': 'Inicial - Primaria',
  'Inicial - Primaria - Secundaria': 'Inicial - Primaria - Secundaria',
  'Primaria - Secundaria': 'Primaria - Secundaria',
}

function main() {
  const dryRun = process.argv.includes('--dry-run')
  const padron = JSON.parse(fs.readFileSync(PADRON, 'utf8')).centros
  let texto = fs.readFileSync(CENTROS, 'utf8')

  let reclasificados = 0
  let conTanda = 0
  let conNivel = 0
  let sinTipoEnPadron = 0

  const lineas = texto.split('\n').map((linea) => {
    const m = /^\s*\{ codigo: '(\d{5})',/.exec(linea)
    if (!m) return linea
    const p = padron[m[1]]
    if (!p) return linea

    // --- tipo ---
    const tipoOficial = p.sector === 'PRIVADO' ? 'Privado' : p.sector === 'SEMIOFICIAL' ? 'Semioficial' : 'Público'
    if (!p.sector) sinTipoEnPadron++

    const tieneTipo = /tipo: '([^']*)'/.exec(linea)
    if (tipoOficial === 'Semioficial' && (!tieneTipo || tieneTipo[1] !== 'Semioficial')) {
      reclasificados++
      if (tieneTipo) return linea.replace(/tipo: '[^']*'/, "tipo: 'Semioficial'")
      return linea.replace(/ \},\s*$/, ", tipo: 'Semioficial' },")
    }

    // --- nivel: el padron 2024-2025 es mas nuevo que el 2023-2024 ---
    const nivelPadron = NIVEL_PADRON[p.nivel]
    if (nivelPadron && !/nivel: '/.test(linea)) {
      conNivel++
      return linea.replace(/(nombre: '(?:[^'\\]|\\.)*',)/, `$1 nivel: '${nivelPadron}',`)
    }

    // --- tanda ---
    if (p.tanda && !/tanda: '/.test(linea)) {
      conTanda++
      return linea.replace(/ \},\s*$/, `, tanda: '${p.tanda}' },`)
    }

    return linea
  })

  texto = lineas.join('\n')

  if (dryRun) {
    console.log(`--dry-run: ${reclasificados} reclasificados, ${conNivel} niveles, ${conTanda} tandas`)
  } else {
    fs.writeFileSync(CENTROS, texto, 'utf8')
    console.log(`data/centros.ts: ${reclasificados} semioficiales corregidos, ${conNivel} niveles agregados, ${conTanda} turnos agregados`)
  }
  if (sinTipoEnPadron) console.log(`  ${sinTipoEnPadron} filas del padron vienen sin sector legible`)

  // --- Informe de centros del sitio que el padron 2024-2025 no tiene ---
  const delSitio = new Set()
  for (const l of texto.split('\n')) {
    const m = /^\s*\{ codigo: '(\d{5})',/.exec(l)
    if (m) delSitio.add(m[1])
  }
  const noEstan = [...delSitio].filter(c => !padron[c]).sort()
  console.log(`\nEn la pagina y NO en el padron 2024-2025: ${noEstan.length}`)

  if (!dryRun) {
    const regional = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'padron-regional15.json'), 'utf8'))
    const oficial = new Set(Object.keys(regional.centros))
    const cuerpo = noEstan
      .map(c => {
        const m = new RegExp(`\\{ codigo: '${c}', nombre: '((?:[^'\\\\]|\\\\.)*)'`).exec(texto)
        const nivel = new RegExp(`\\{ codigo: '${c}',[\\s\\S]*?nivel: '([^']*)'`).exec(texto)
        const enRegional = oficial.has(c)
        return `| \`${c}\` | ${m ? m[1] : '—'} | ${nivel ? nivel[1] : '—'} | ${enRegional ? 'Sí' : 'No'} |`
      })
      .join('\n')

    fs.writeFileSync(
      SALIDA_PENDIENTES,
      `# Centros por confirmar

**Fecha:** 14 de octubre de 2026

Estos **${noEstan.length} códigos** están publicados en la web pero **no aparecen** en el
padrón oficial de centros educativos 2024-2025 que el MINERD publicó el 9 de enero
de 2026 (\`data/padron-2024-2025.json\`, 1.459 centros de la Regional 15).

**No se borraron.** Puede tratarse de escuelas inauguradas después de la publicación
del padrón, o de centros dados de baja. La columna "En la lista de la Regional 15"
dice si aparecen en el listado oficial de matrícula que entregó la Regional.

| Código | Centro | Nivel | En la lista de la Regional 15 |
|---|---|---|---|
${cuerpo}

## Qué hacer con cada uno

1. Los que **sí están en la lista de la Regional 15** con matrícula: son centros reales
   que el MINERD aún no publicó. Confirmar y mantener.
2. Los que **no están en ningún lado**: probablemente cerraron o se fusionaron.
   Confirmar con el distrito antes de quitar nada.

`,
      'utf8'
    )
    console.log('docs/CENTROS-POR-CONFIRMAR.md escrito')
  }
}

main()
