import fs from 'fs'
import path from 'path'
import Database from 'better-sqlite3'
import { initSchema } from '../lib/db-schema'

const DATA_FILE = path.join(process.cwd(), 'public', 'data', 'content.json')
const DB_PATH = path.join(process.cwd(), 'data', 'regional15.db')

interface ContentJSON {
  noticias?: any[]
  servicios?: any[]
  enlaces?: any[]
  eventos?: any[]
  programas?: any[]
  testimonios?: any[]
  galeria?: any[]
  instagram?: any[]
  distritos?: any[]
  config?: any
  director?: any
}

function migrate() {
  if (!fs.existsSync(DATA_FILE)) {
    console.log('No content.json found, skipping migration.')
    return
  }

  const raw = fs.readFileSync(DATA_FILE, 'utf-8')
  const data: ContentJSON = JSON.parse(raw)

  const dbDir = path.dirname(DB_PATH)
  if (!fs.existsSync(dbDir)) fs.mkdirSync(dbDir, { recursive: true })

  const db = new Database(DB_PATH)
  db.pragma('journal_mode = WAL')
  db.pragma('foreign_keys = ON')

  // Initialize schema
  initSchema(db)

  const insertNoticia = db.prepare(`
    INSERT OR REPLACE INTO noticias (id, fecha, categoria, titulo, descripcion, contenido_completo, imagen, galeria, enlace, texto_enlace, autor)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)
  for (const n of data.noticias || []) {
    insertNoticia.run(
      n.id || `noticia-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      n.fecha || '', n.categoria || '', n.titulo || '', n.descripcion || '',
      n.contenido_completo || '', n.imagen || '',
      JSON.stringify(n.galeria || []), n.enlace || '', n.texto_enlace || '',
      n.autor || 'Regional 15 MINERD'
    )
  }

  const insertServicio = db.prepare(`INSERT OR REPLACE INTO servicios (id, titulo, descripcion, icono_path) VALUES (?, ?, ?, ?)`)
  for (const s of data.servicios || []) {
    insertServicio.run(s.id || `servicio-${Date.now()}`, s.titulo || '', s.descripcion || '', s.icono_path || '')
  }

  const insertEnlace = db.prepare(`INSERT OR REPLACE INTO enlaces (id, nombre, descripcion, url, icono) VALUES (?, ?, ?, ?, ?)`)
  for (const e of data.enlaces || []) {
    insertEnlace.run(e.id || `enlace-${Date.now()}`, e.nombre || '', e.descripcion || '', e.url || '', e.icono || '')
  }

  const insertEvento = db.prepare(`INSERT OR REPLACE INTO eventos (id, titulo, tipo, emoji, abreviatura, descripcion, ubicacion, fecha) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`)
  for (const e of data.eventos || []) {
    insertEvento.run(e.id || `evento-${Date.now()}`, e.titulo || '', e.tipo || '', e.emoji || '', e.abreviatura || '', e.descripcion || '', e.ubicacion || '', e.fecha || '')
  }

  const insertPrograma = db.prepare(`INSERT OR REPLACE INTO programas (id, titulo, descripcion, icono_viewbox, icono_path, enlace, texto_enlace) VALUES (?, ?, ?, ?, ?, ?, ?)`)
  for (const p of data.programas || []) {
    insertPrograma.run(p.id || `programa-${Date.now()}`, p.titulo || '', p.descripcion || '', p.icono_viewbox || '0 0 24 24', p.icono_path || '', p.enlace || '', p.texto_enlace || '')
  }

  const insertTestimonio = db.prepare(`INSERT OR REPLACE INTO testimonios (id, nombre, rol, texto, estrellas) VALUES (?, ?, ?, ?, ?)`)
  for (const t of data.testimonios || []) {
    insertTestimonio.run(t.id || `testimonio-${Date.now()}`, t.nombre || '', t.rol || '', t.texto || '', t.estrellas || 5)
  }

  const insertGaleria = db.prepare(`INSERT OR REPLACE INTO galeria (id, imagen, titulo) VALUES (?, ?, ?)`)
  for (const g of data.galeria || []) {
    insertGaleria.run(g.id || `galeria-${Date.now()}`, g.imagen || '', g.titulo || '')
  }

  const insertInsta = db.prepare(`INSERT OR REPLACE INTO instagram_posts (id, src, caption, url) VALUES (?, ?, ?, ?)`)
  for (const p of data.instagram || []) {
    insertInsta.run(p.id || `ig-${Date.now()}`, p.src || '', p.caption || '', p.url || '')
  }

  const insertTicker = db.prepare(`INSERT OR REPLACE INTO ticker (id, mensaje, activo, orden) VALUES (?, ?, 1, ?)`)
  for (const [i, msg] of (data.config?.ticker || []).entries()) {
    insertTicker.run(`ticker-${Date.now()}-${i}`, msg, i)
  }

  const s = data.config?.stats || {}
  db.prepare(`UPDATE config SET ultima_actualizacion = ?, google_analytics_id = ?, instagram_token = ?, stats_distritos = ?, stats_privados = ?, stats_publicos = ?, stats_semioficiales = ?, stats_centros_total = ?, stats_publicaciones = ?, stats_seguidores = ?, stats_galas = ?, stats_anio_escolar = ? WHERE id = 'main'`).run(
    data.config?.ultima_actualizacion || '', data.config?.google_analytics_id || '', data.config?.instagram_token || '',
    s.distritos || 6, s.privados || 816, s.publicos || 609, s.semioficiales || 18, s.centros_total || 1443,
    s.publicaciones || 2527, s.seguidores || 9429, s.galas || 3, s.anio_escolar || 2025
  )

  // Migrate distritos
  const insertDistrito = db.prepare(`INSERT OR REPLACE INTO distritos (id, codigo, nombre, centros, privados, publicos, semioficiales, descripcion) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`)
  for (const d of data.distritos || []) {
    insertDistrito.run(
      d.id || `dist-${Date.now()}`, d.codigo || '', d.nombre || '',
      d.centros ?? 0, d.privados ?? 0, d.publicos ?? 0, d.semioficiales ?? 0,
      d.descripcion || ''
    )
  }

  db.close()
  console.log('Migration completed successfully! Migrated all data from content.json to SQLite.')
}

migrate()
