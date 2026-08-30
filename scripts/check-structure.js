const j = require('../data/content.json')
const keys = ['servicios', 'enlaces', 'programas', 'galeria', 'distritos', 'testimonios', 'instagram']
for (const k of keys) {
  if (j[k] && Array.isArray(j[k])) {
    console.log(k + ':', j[k].length, 'items')
    if (j[k].length > 0) console.log('  sample keys:', Object.keys(j[k][0]).join(', '))
  }
}
