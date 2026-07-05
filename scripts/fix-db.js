const Database = require('better-sqlite3')
const path = require('path')
const fs = require('fs')

const dir = path.join(process.cwd(), 'data')
const dbPath = path.join(dir, 'regional15.db')

// Clean up any stale WAL files
try { fs.unlinkSync(dbPath) } catch (e) {}
try { fs.unlinkSync(dbPath + '-shm') } catch (e) {}
try { fs.unlinkSync(dbPath + '-wal') } catch (e) {}

const db = new Database(dbPath)
db.pragma('journal_mode = WAL')

db.exec(`
  CREATE TABLE IF NOT EXISTS site_config (key TEXT PRIMARY KEY, value TEXT);
  CREATE TABLE IF NOT EXISTS news (id TEXT PRIMARY KEY, titulo TEXT, resumen TEXT, contenido TEXT, contenido_completo TEXT, categoria TEXT, fecha TEXT, imagen TEXT, slug TEXT UNIQUE, created_at TEXT);
  CREATE TABLE IF NOT EXISTS contact_messages (id TEXT PRIMARY KEY, nombre TEXT, email TEXT, telefono TEXT, departamento TEXT, asunto TEXT, mensaje TEXT, created_at TEXT DEFAULT (datetime('now', '-4 hours')));
  CREATE TABLE IF NOT EXISTS calendario (id TEXT PRIMARY KEY, titulo TEXT, descripcion TEXT, fecha_inicio TEXT, fecha_fin TEXT, hora TEXT, ubicacion TEXT, color TEXT DEFAULT '#2ecc71', categoria TEXT, tipo TEXT, enlace TEXT, created_at TEXT, repeticion TEXT DEFAULT '', repeticion_dias TEXT DEFAULT '', todo_el_dia INTEGER NOT NULL DEFAULT 0);
  CREATE TABLE IF NOT EXISTS director (id TEXT PRIMARY KEY DEFAULT 'main', data TEXT NOT NULL DEFAULT '{}', created_at TEXT NOT NULL DEFAULT (datetime('now')), updated_at TEXT NOT NULL DEFAULT (datetime('now')));
  CREATE TABLE IF NOT EXISTS documentos (id TEXT PRIMARY KEY, nombre TEXT, descripcion TEXT, archivo TEXT, tipo TEXT, categoria TEXT, created_at TEXT);
  CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, nombre TEXT NOT NULL, email TEXT NOT NULL UNIQUE, password_hash TEXT NOT NULL, rol TEXT NOT NULL DEFAULT 'secretaria', activo INTEGER NOT NULL DEFAULT 1, created_at TEXT NOT NULL DEFAULT (datetime('now')), updated_at TEXT NOT NULL DEFAULT (datetime('now')));
  CREATE TABLE IF NOT EXISTS salon_requests (id TEXT PRIMARY KEY, solicitante_nombre TEXT NOT NULL, solicitante_email TEXT NOT NULL, solicitante_telefono TEXT NOT NULL DEFAULT '', titulo_actividad TEXT NOT NULL, descripcion TEXT NOT NULL DEFAULT '', fecha_solicitada TEXT NOT NULL, hora_inicio TEXT NOT NULL DEFAULT '', hora_fin TEXT NOT NULL DEFAULT '', estado TEXT NOT NULL DEFAULT 'pendiente', motivo_rechazo TEXT NOT NULL DEFAULT '', calendario_evento_id TEXT NOT NULL DEFAULT '', created_at TEXT NOT NULL DEFAULT (datetime('now')), updated_at TEXT NOT NULL DEFAULT (datetime('now')));`)

console.log('Database recreated successfully')
db.close()
