// Seed script for calendar events
const Database = require('better-sqlite3')

const dbPath = require('path').join(__dirname, '..', 'data', 'regional15.db')
const db = new Database(dbPath)
db.pragma('journal_mode = WAL')

// Ensure table exists
db.exec(`
  CREATE TABLE IF NOT EXISTS calendario (
    id TEXT PRIMARY KEY,
    titulo TEXT NOT NULL,
    descripcion TEXT NOT NULL DEFAULT '',
    fecha_inicio TEXT NOT NULL,
    fecha_fin TEXT NOT NULL DEFAULT '',
    hora TEXT NOT NULL DEFAULT '',
    ubicacion TEXT NOT NULL DEFAULT '',
    color TEXT NOT NULL DEFAULT '#003876',
    todo_el_dia INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  )
`)

const now = new Date()
const y = now.getFullYear()
const m = String(now.getMonth() + 1).padStart(2, '0')

const events = [
  {
    id: 'cal-demo-1',
    titulo: 'Inicio de inscripciones escolares',
    descripcion: 'Apertura del proceso de inscripción para el año escolar 2026-2027 en todos los centros educativos de la Regional 15.',
    fecha_inicio: `${y}-${m}-02`,
    fecha_fin: `${y}-${m}-30`,
    hora: '8:00 AM',
    ubicacion: 'Todos los distritos',
    color: '#003876',
    todo_el_dia: 1,
  },
  {
    id: 'cal-demo-2',
    titulo: 'Taller de planificación docente',
    descripcion: 'Capacitación para docentes sobre planificación curricular basada en competencias.',
    fecha_inicio: `${y}-${m}-05`,
    fecha_fin: '',
    hora: '9:00 AM - 12:00 PM',
    ubicacion: 'Auditorio Regional 15',
    color: '#e67e22',
    todo_el_dia: 0,
  },
  {
    id: 'cal-demo-3',
    titulo: 'Reunión de directores distritales',
    descripcion: 'Sesión ordinaria con los directores de los 6 distritos educativos.',
    fecha_inicio: `${y}-${m}-10`,
    fecha_fin: '',
    hora: '10:00 AM',
    ubicacion: 'Salón de reuniones - Sede Regional',
    color: '#27ae60',
    todo_el_dia: 0,
  },
  {
    id: 'cal-demo-4',
    titulo: 'Feria pedagógica regional',
    descripcion: 'Exposición de proyectos educativos innovadores de los centros de la Regional 15.',
    fecha_inicio: `${y}-${m}-15`,
    fecha_fin: `${y}-${m}-16`,
    hora: '8:00 AM - 4:00 PM',
    ubicacion: 'Recinto ferial',
    color: '#8e44ad',
    todo_el_dia: 0,
  },
  {
    id: 'cal-demo-5',
    titulo: 'Entrega de certificaciones',
    descripcion: 'Entrega de certificados a docentes que completaron programas de formación continua.',
    fecha_inicio: `${y}-${m}-20`,
    fecha_fin: '',
    hora: '11:00 AM',
    ubicacion: 'Salón de actos - Sede Regional',
    color: '#c0392b',
    todo_el_dia: 0,
  },
  {
    id: 'cal-demo-6',
    titulo: 'Día del Maestro',
    descripcion: 'Celebración del Día del Maestro con actividades especiales en todos los centros educativos.',
    fecha_inicio: `${y}-${m}-30`,
    fecha_fin: '',
    hora: '',
    ubicacion: 'Todos los distritos',
    color: '#f1c40f',
    todo_el_dia: 1,
  },
  {
    id: 'cal-demo-7',
    titulo: 'Jornada de orientación psicológica',
    descripcion: 'Jornada gratuita de orientación psicológica para estudiantes y padres.',
    fecha_inicio: `${y}-${m}-25`,
    fecha_fin: '',
    hora: '9:00 AM - 3:00 PM',
    ubicacion: 'Oficina Regional 15',
    color: '#1abc9c',
    todo_el_dia: 0,
  },
  {
    id: 'cal-demo-8',
    titulo: 'Cierre de actas docentes',
    descripcion: 'Fecha límite para entrega de actas de calificaciones del primer semestre.',
    fecha_inicio: `${y}-${m}-28`,
    fecha_fin: '',
    hora: '',
    ubicacion: 'Centros educativos',
    color: '#e74c3c',
    todo_el_dia: 1,
  },
  {
    id: 'cal-recurrente-1',
    titulo: 'Reunión de equipo técnico',
    descripcion: 'Reunión semanal del equipo técnico de la Regional 15 para dar seguimiento a los planes operativos.',
    fecha_inicio: `2026-01-05`,
    fecha_fin: '',
    hora: '10:00 AM',
    ubicacion: 'Sala de reuniones - Sede Regional',
    color: '#e67e22',
    todo_el_dia: 0,
    repeticion: 'semanal',
    repeticion_dias: '1,3',
  },
  {
    id: 'cal-recurrente-2',
    titulo: 'Pago de nómina',
    descripcion: 'Procesamiento de nómina mensual del personal docente y administrativo.',
    fecha_inicio: `2026-01-15`,
    fecha_fin: '',
    hora: '',
    ubicacion: 'Oficina Regional 15',
    color: '#27ae60',
    todo_el_dia: 1,
    repeticion: 'mensual',
    repeticion_dias: '15',
  },
]

const insertStmt = db.prepare(`
  INSERT OR IGNORE INTO calendario (id, titulo, descripcion, fecha_inicio, fecha_fin, hora, ubicacion, color, todo_el_dia, repeticion, repeticion_dias)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`)

const insertMany = db.transaction((items) => {
  for (const ev of items) {
    insertStmt.run(ev.id, ev.titulo, ev.descripcion, ev.fecha_inicio, ev.fecha_fin, ev.hora, ev.ubicacion, ev.color, ev.todo_el_dia, ev.repeticion || '', ev.repeticion_dias || '')
  }
})

insertMany(events)
console.log(`Insertados ${events.length} eventos de calendario para ${y}-${m}`)
db.close()
