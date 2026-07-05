-- Ejecuta este SQL en el SQL Editor de Supabase (https://supabase.com/dashboard/project/_/sql/new)
-- Crea todas las tablas necesarias para la Regional 15

-- Noticias
CREATE TABLE IF NOT EXISTS noticias (
  id TEXT PRIMARY KEY,
  fecha TEXT NOT NULL DEFAULT '',
  categoria TEXT NOT NULL DEFAULT 'General',
  titulo TEXT NOT NULL,
  descripcion TEXT NOT NULL DEFAULT '',
  contenido_completo TEXT NOT NULL DEFAULT '',
  imagen TEXT NOT NULL DEFAULT '',
  galeria JSONB NOT NULL DEFAULT '[]',
  enlace TEXT NOT NULL DEFAULT '',
  texto_enlace TEXT NOT NULL DEFAULT '',
  autor TEXT NOT NULL DEFAULT 'Regional 15 MINERD',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Servicios
CREATE TABLE IF NOT EXISTS servicios (
  id TEXT PRIMARY KEY,
  titulo TEXT NOT NULL,
  descripcion TEXT NOT NULL DEFAULT '',
  icono_path TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enlaces
CREATE TABLE IF NOT EXISTS enlaces (
  id TEXT PRIMARY KEY,
  nombre TEXT NOT NULL,
  descripcion TEXT NOT NULL DEFAULT '',
  url TEXT NOT NULL DEFAULT '',
  icono TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Eventos
CREATE TABLE IF NOT EXISTS eventos (
  id TEXT PRIMARY KEY,
  titulo TEXT NOT NULL,
  tipo TEXT NOT NULL DEFAULT '',
  emoji TEXT NOT NULL DEFAULT '',
  abreviatura TEXT NOT NULL DEFAULT '',
  descripcion TEXT NOT NULL DEFAULT '',
  ubicacion TEXT NOT NULL DEFAULT '',
  fecha TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Programas
CREATE TABLE IF NOT EXISTS programas (
  id TEXT PRIMARY KEY,
  titulo TEXT NOT NULL,
  descripcion TEXT NOT NULL DEFAULT '',
  icono_viewbox TEXT NOT NULL DEFAULT '0 0 24 24',
  icono_path TEXT NOT NULL DEFAULT '',
  enlace TEXT NOT NULL DEFAULT '',
  texto_enlace TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Testimonios
CREATE TABLE IF NOT EXISTS testimonios (
  id TEXT PRIMARY KEY,
  nombre TEXT NOT NULL,
  rol TEXT NOT NULL DEFAULT '',
  texto TEXT NOT NULL DEFAULT '',
  estrellas INTEGER NOT NULL DEFAULT 5,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Galeria
CREATE TABLE IF NOT EXISTS galeria (
  id TEXT PRIMARY KEY,
  imagen TEXT NOT NULL,
  titulo TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Instagram Posts
CREATE TABLE IF NOT EXISTS instagram_posts (
  id TEXT PRIMARY KEY,
  src TEXT NOT NULL,
  caption TEXT NOT NULL DEFAULT '',
  url TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Ticker
CREATE TABLE IF NOT EXISTS ticker (
  id TEXT PRIMARY KEY,
  mensaje TEXT NOT NULL,
  activo INTEGER NOT NULL DEFAULT 1,
  orden INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Config
CREATE TABLE IF NOT EXISTS config (
  id TEXT PRIMARY KEY DEFAULT 'main',
  ultima_actualizacion TEXT NOT NULL DEFAULT '',
  google_analytics_id TEXT NOT NULL DEFAULT '',
  instagram_token TEXT NOT NULL DEFAULT '',
  stats_distritos INTEGER NOT NULL DEFAULT 6,
  stats_privados INTEGER NOT NULL DEFAULT 816,
  stats_publicos INTEGER NOT NULL DEFAULT 609,
  stats_semioficiales INTEGER NOT NULL DEFAULT 18,
  stats_centros_total INTEGER NOT NULL DEFAULT 1443,
  stats_publicaciones INTEGER NOT NULL DEFAULT 2527,
  stats_seguidores INTEGER NOT NULL DEFAULT 9429,
  stats_galas INTEGER NOT NULL DEFAULT 3,
  stats_anio_escolar INTEGER NOT NULL DEFAULT 2025,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO config (id) VALUES ('main') ON CONFLICT (id) DO NOTHING;

-- Distritos
CREATE TABLE IF NOT EXISTS distritos (
  id TEXT PRIMARY KEY,
  codigo TEXT NOT NULL,
  nombre TEXT NOT NULL,
  centros INTEGER NOT NULL DEFAULT 0,
  privados INTEGER NOT NULL DEFAULT 0,
  publicos INTEGER NOT NULL DEFAULT 0,
  semioficiales INTEGER NOT NULL DEFAULT 0,
  descripcion TEXT NOT NULL DEFAULT '',
  director TEXT NOT NULL DEFAULT '',
  direccion TEXT NOT NULL DEFAULT '',
  telefono TEXT NOT NULL DEFAULT '',
  email TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Documentos
CREATE TABLE IF NOT EXISTS documentos (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL DEFAULT 'General',
  filename TEXT NOT NULL,
  originalName TEXT NOT NULL,
  url TEXT NOT NULL,
  size INTEGER NOT NULL DEFAULT 0,
  type TEXT NOT NULL DEFAULT '',
  uploadedAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- POA
CREATE TABLE IF NOT EXISTS poa (
  id TEXT PRIMARY KEY,
  nombre TEXT NOT NULL,
  descripcion TEXT NOT NULL DEFAULT '',
  anio INTEGER NOT NULL,
  trimestre INTEGER NOT NULL,
  meta TEXT NOT NULL DEFAULT '',
  indicador TEXT NOT NULL DEFAULT '',
  avance_porcentaje REAL NOT NULL DEFAULT 0,
  responsable TEXT NOT NULL DEFAULT '',
  estado TEXT NOT NULL DEFAULT 'pendiente',
  fecha_inicio TEXT NOT NULL DEFAULT '',
  fecha_fin TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Seguimiento POA
CREATE TABLE IF NOT EXISTS seguimiento_poa (
  id TEXT PRIMARY KEY,
  poa_id TEXT NOT NULL REFERENCES poa(id) ON DELETE CASCADE,
  fecha TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  avance_porcentaje REAL NOT NULL DEFAULT 0,
  observacion TEXT NOT NULL DEFAULT '',
  usuario TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Calendario
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
  repeticion TEXT NOT NULL DEFAULT '',
  repeticion_dias TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Director
CREATE TABLE IF NOT EXISTS director (
  id TEXT PRIMARY KEY DEFAULT 'main',
  data JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO director (id, data) VALUES ('main', '{}') ON CONFLICT (id) DO NOTHING;

-- Contact Messages
CREATE TABLE IF NOT EXISTS contact_messages (
  id TEXT PRIMARY KEY,
  nombre TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT NOT NULL DEFAULT '',
  departamento TEXT NOT NULL DEFAULT '',
  asunto TEXT NOT NULL DEFAULT '',
  mensaje TEXT NOT NULL,
  leido INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Users
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  nombre TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  rol TEXT NOT NULL DEFAULT 'secretaria',
  activo INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Salon Requests
CREATE TABLE IF NOT EXISTS salon_requests (
  id TEXT PRIMARY KEY,
  solicitante_nombre TEXT NOT NULL,
  solicitante_email TEXT NOT NULL,
  solicitante_telefono TEXT NOT NULL DEFAULT '',
  titulo_actividad TEXT NOT NULL,
  descripcion TEXT NOT NULL DEFAULT '',
  fecha_solicitada TEXT NOT NULL,
  hora_inicio TEXT NOT NULL DEFAULT '',
  hora_fin TEXT NOT NULL DEFAULT '',
  estado TEXT NOT NULL DEFAULT 'pendiente',
  motivo_rechazo TEXT NOT NULL DEFAULT '',
  calendario_evento_id TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
