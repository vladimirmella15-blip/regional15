const Database = require('better-sqlite3')
const path = require('path')
const fs = require('fs')

const dbPath = path.join(process.cwd(), 'data', 'regional15.db')
const backupPath = path.join(process.cwd(), 'data', 'content.json')

if (!fs.existsSync(backupPath)) {
  console.log('No backup found at', backupPath)
  process.exit(0)
}

const backup = JSON.parse(fs.readFileSync(backupPath, 'utf8'))
const db = new Database(dbPath)
db.pragma('journal_mode = WAL')

// Restore eventos → calendario
if (backup.eventos && Array.isArray(backup.eventos)) {
  const insert = db.prepare(`INSERT OR IGNORE INTO calendario (id, titulo, descripcion, fecha_inicio, hora, ubicacion, color, categoria, tipo, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now', '-4 hours'))`)
  let count = 0
  for (const ev of backup.eventos) {
    const id = ev.id || require('crypto').randomUUID()
    insert.run(id, ev.titulo || '', ev.descripcion || '', ev.fecha || '', ev.hora || '', ev.ubicacion || '', '#2ecc71', ev.tipo || 'general', ev.tipo || 'evento')
    count++
  }
  console.log(`Restored ${count} eventos`)
}

// Restore noticias → news
if (backup.noticias && Array.isArray(backup.noticias)) {
  const insert = db.prepare(`INSERT OR IGNORE INTO news (id, titulo, resumen, contenido, contenido_completo, categoria, fecha, imagen, slug, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now', '-4 hours'))`)
  let count = 0
  for (const n of backup.noticias) {
    const id = n.id || require('crypto').randomUUID()
    const slug = n.titulo ? n.titulo.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + Date.now() : id
    insert.run(id, n.titulo || '', n.descripcion || '', n.descripcion || '', n.contenido_completo || '', n.categoria || 'general', n.fecha || '', n.imagen || '', slug)
    count++
  }
  console.log(`Restored ${count} noticias`)
}

// Restore site_config
if (backup.config && typeof backup.config === 'object') {
  const insert = db.prepare(`INSERT OR REPLACE INTO site_config (key, value) VALUES (?, ?)`)
  let count = 0
  for (const [key, value] of Object.entries(backup.config)) {
    insert.run(key, typeof value === 'object' ? JSON.stringify(value) : String(value))
    count++
  }
  console.log(`Restored ${count} config entries`)
}

// Restore servicios
if (backup.servicios && Array.isArray(backup.servicios)) {
  const insert = db.prepare(`INSERT OR IGNORE INTO servicios (id, titulo, descripcion, icono_path, created_at) VALUES (?, ?, ?, ?, datetime('now', '-4 hours'))`)
  let count = 0
  for (const item of backup.servicios) {
    insert.run(item.id || require('crypto').randomUUID(), item.titulo || '', item.descripcion || '', item.icono_path || '')
    count++
  }
  console.log(`Restored ${count} servicios`)
}

// Restore enlaces
if (backup.enlaces && Array.isArray(backup.enlaces)) {
  const insert = db.prepare(`INSERT OR IGNORE INTO enlaces (id, nombre, descripcion, url, icono, created_at) VALUES (?, ?, ?, ?, ?, datetime('now', '-4 hours'))`)
  let count = 0
  for (const item of backup.enlaces) {
    insert.run(item.id || require('crypto').randomUUID(), item.nombre || '', item.descripcion || '', item.url || '', item.icono || '')
    count++
  }
  console.log(`Restored ${count} enlaces`)
}

// Restore programas
if (backup.programas && Array.isArray(backup.programas)) {
  const insert = db.prepare(`INSERT OR IGNORE INTO programas (id, titulo, descripcion, icono_viewbox, icono_path, enlace, texto_enlace, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now', '-4 hours'))`)
  let count = 0
  for (const item of backup.programas) {
    insert.run(item.id || require('crypto').randomUUID(), item.titulo || '', item.descripcion || '', item.icono_viewbox || '', item.icono_path || '', item.enlace || '', item.texto_enlace || '')
    count++
  }
  console.log(`Restored ${count} programas`)
}

// Restore testimonios
if (backup.testimonios && Array.isArray(backup.testimonios)) {
  const insert = db.prepare(`INSERT OR IGNORE INTO testimonios (id, nombre, rol, texto, estrellas, created_at) VALUES (?, ?, ?, ?, ?, datetime('now', '-4 hours'))`)
  let count = 0
  for (const item of backup.testimonios) {
    const id = item.id || require('crypto').randomUUID()
    insert.run(id, item.nombre || '', item.rol || '', item.texto || '', item.estrellas || 5)
    count++
  }
  console.log(`Restored ${count} testimonios`)
}

// Restore galeria
if (backup.galeria && Array.isArray(backup.galeria)) {
  const insert = db.prepare(`INSERT OR IGNORE INTO galeria (id, imagen, titulo, created_at) VALUES (?, ?, ?, datetime('now', '-4 hours'))`)
  let count = 0
  for (const item of backup.galeria) {
    insert.run(item.id || require('crypto').randomUUID(), item.imagen || '', item.titulo || '')
    count++
  }
  console.log(`Restored ${count} galeria items`)
}

// Restore instagram posts
if (backup.instagram && Array.isArray(backup.instagram)) {
  const insert = db.prepare(`INSERT OR IGNORE INTO instagram_posts (id, src, caption, url, created_at) VALUES (?, ?, ?, ?, datetime('now', '-4 hours'))`)
  let count = 0
  for (const item of backup.instagram) {
    insert.run(item.id || require('crypto').randomUUID(), item.src || '', item.caption || '', item.url || '')
    count++
  }
  console.log(`Restored ${count} instagram posts`)
}

// Restore distritos
if (backup.distritos && Array.isArray(backup.distritos)) {
  const insert = db.prepare(`INSERT OR IGNORE INTO distritos (id, codigo, nombre, centros, privados, publicos, semioficiales, descripcion, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, datetime('now', '-4 hours'))`)
  let count = 0
  for (const item of backup.distritos) {
    insert.run(item.id || require('crypto').randomUUID(), item.codigo || '', item.nombre || '', item.centros || 0, item.privados || 0, item.publicos || 0, item.semioficiales || 0, item.descripcion || '')
    count++
  }
  console.log(`Restored ${count} distritos`)
}

console.log('Restore complete')
db.close()
