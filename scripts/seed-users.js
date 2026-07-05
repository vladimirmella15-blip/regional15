const D = require('better-sqlite3')
const path = require('path')
const db = new D(path.join(process.cwd(), 'data', 'regional15.db'))
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY, nombre TEXT NOT NULL, email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL, rol TEXT NOT NULL DEFAULT 'secretaria',
    activo INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
  CREATE TABLE IF NOT EXISTS salon_requests (
    id TEXT PRIMARY KEY, solicitante_nombre TEXT NOT NULL, solicitante_email TEXT NOT NULL,
    solicitante_telefono TEXT NOT NULL DEFAULT '', titulo_actividad TEXT NOT NULL,
    descripcion TEXT NOT NULL DEFAULT '', fecha_solicitada TEXT NOT NULL,
    hora_inicio TEXT NOT NULL DEFAULT '', hora_fin TEXT NOT NULL DEFAULT '',
    estado TEXT NOT NULL DEFAULT 'pendiente', motivo_rechazo TEXT NOT NULL DEFAULT '',
    calendario_evento_id TEXT NOT NULL DEFAULT '',
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`)
console.log('Tables created')

// Seed admin user if not exists
const existing = db.prepare("SELECT id FROM users WHERE email = ?").get('admin@regional15.edu.do')
if (!existing) {
  const crypto = require('crypto')
  const hash = crypto.createHash('sha256').update('admin15').digest('hex')
  db.prepare("INSERT INTO users (id, nombre, email, password_hash, rol) VALUES (?,?,?,?,?)").run(
    'user-admin', 'Administrador', 'admin@regional15.edu.do', hash, 'admin'
  )
  console.log('Admin user seeded')
}
db.close()
