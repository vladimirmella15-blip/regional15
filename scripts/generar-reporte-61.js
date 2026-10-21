// Entregable: tabla de los 61 centros sin ubicacion, con el distrito que
// tenemos identificado y si aparecen en las listas oficiales. Sirve para que
// la Regional revise y complete lo que falta, no para publicar pins.
const fs = require('fs')

function distritosDesdeCatalogo() {
  const mapa = new Map()
  for (const f of ['data/centros.ts', 'data/centros-privados.ts', 'data/centros-adicionales-privados.ts']) {
    if (!fs.existsSync(f)) continue
    const t = fs.readFileSync(f, 'utf8')
    for (const p of t.split(/\n\s*\{\s*\n/).slice(1)) {
      const sig = /sigerd:\s*'(\d{4})'/.exec(p)
      const nom = /nombre:\s*'([^']+)'/.exec(p)
      if (!sig || !nom) continue
      for (const c of p.matchAll(/codigo:\s*'(\d{5})'/g)) {
        mapa.set(c[1], { sigerd: sig[1], nombre: nom[1] })
      }
    }
  }
  return mapa
}

const sin = JSON.parse(fs.readFileSync('data/sin-ubicacion.json', 'utf8'))
const padron = JSON.parse(fs.readFileSync('data/padron-regional15.json', 'utf8')).centros
const d = distritosDesdeCatalogo()
const ub = fs.readFileSync('data/ubicaciones.ts', 'utf8')

const filas = sin.centros.map(c => {
  const dist = d.get(c.codigo)
  const enPadron = Object.prototype.hasOwnProperty.call(padron, c.codigo)
  const entrada = new RegExp(`'${c.codigo}'\\s*:\\s*\\{([^}]*)\\}`).exec(ub)
  let tieneCoordenada = false
  let lngRota = false
  if (entrada) {
    tieneCoordenada = /lat\s*:/.test(entrada[1])
    const m = /lng\s*:\s*(-?[\d.]+)/.exec(entrada[1])
    lngRota = m ? Math.abs(parseFloat(m[1])) < 0.5 : false
  }
  return {
    codigo: c.codigo,
    nombre: c.nombre,
    distrito: dist ? `${dist.sigerd} ${dist.nombre}` : 'NO ESTA EN NUESTRO CATALOGO',
    enPadron2025: enPadron ? 'si' : 'no',
    enListaRegional15: c.enListaRegional15 ? 'si' : 'no',
    situacion: lngRota
      ? 'TIENE COORDENADA ROTA (longitud ~0)'
      : tieneCoordenada
        ? 'tiene coordenada'
        : 'sin dato',
  }
})

const filasCSV = [
  ['codigo', 'nombre', 'distrito', 'en_padron_2025', 'en_lista_regional15', 'situacion'],
  ...filas.map(f => [f.codigo, f.nombre, f.distrito, f.enPadron2025, f.enListaRegional15, f.situacion]),
]
const csv = filasCSV
  .map(r => r.map(x => `"${String(x).replace(/"/g, '""')}"`).join(';'))
  .join('\r\n')

fs.writeFileSync('docs/CENTROS-SIN-UBICACION.csv', '﻿' + csv)
fs.writeFileSync(
  'docs/CENTROS-SIN-UBICACION.json',
  JSON.stringify(
    {
      generadoPor: 'revision de cobertura de ubicaciones',
      total: filas.length,
      conCoordenadaRota: filas.filter(f => f.situacion.includes('ROTA')).length,
      sinDato: filas.filter(f => f.situacion === 'sin dato').length,
      fueraDelCatalogo: filas.filter(f => f.distrito.startsWith('NO')).length,
      centros: filas,
    },
    null,
    2
  )
)

console.log(`Generado docs/CENTROS-SIN-UBICACION.csv  (${filas.length} centros)`)
console.log(`  con coordenada rota ....... ${filas.filter(f => f.situacion.includes('ROTA')).length}`)
console.log(`  sin ningun dato ........... ${filas.filter(f => f.situacion === 'sin dato').length}`)
console.log(`  fuera de nuestro catalogo . ${filas.filter(f => f.distrito.startsWith('NO')).length}`)
console.log(`  en el padron 2025 .......... ${filas.filter(f => f.enPadron2025 === 'si').length}`)
console.log(`  en la lista Regional 15 .... ${filas.filter(f => f.enListaRegional15 === 'si').length}`)