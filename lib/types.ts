export interface Noticia {
  id: string
  fecha: string
  categoria: string
  titulo: string
  descripcion: string
  contenido_completo: string
  imagen: string
  galeria: GaleriaImagen[]
  enlace: string
  texto_enlace: string
  autor: string
  created_at: string
  updated_at: string
}

export interface GaleriaImagen {
  src: string
  caption: string
}

export interface Servicio {
  id: string
  titulo: string
  descripcion: string
  icono_path: string
  created_at: string
  updated_at: string
}

export interface Enlace {
  id: string
  nombre: string
  descripcion: string
  url: string
  icono: string
  created_at: string
  updated_at: string
}

export interface Evento {
  id: string
  titulo: string
  tipo: string
  emoji: string
  abreviatura: string
  descripcion: string
  ubicacion: string
  fecha: string
  created_at: string
  updated_at: string
}

export interface Programa {
  id: string
  titulo: string
  descripcion: string
  icono_viewbox: string
  icono_path: string
  enlace: string
  texto_enlace: string
  created_at: string
  updated_at: string
}

export interface Testimonio {
  id: string
  nombre: string
  rol: string
  texto: string
  estrellas: number
  created_at: string
  updated_at: string
}

export interface GaleriaItem {
  id: string
  imagen: string
  titulo: string
  created_at: string
}

export interface InstagramPost {
  id: string
  src: string
  caption: string
  url: string
  created_at: string
}

export interface TickerItem {
  id: string
  mensaje: string
  activo: boolean
  orden: number
  created_at: string
}

export interface Config {
  id: string
  ultima_actualizacion: string
  google_analytics_id: string
  instagram_token: string
  stats_distritos: number
  stats_publicaciones: number
  stats_seguidores: number
  stats_galas: number
  stats_anio_escolar: number
  updated_at: string
}

export interface Documento {
  id: string
  title: string
  description: string
  category: string
  filename: string
  originalName: string
  url: string
  size: number
  type: string
  uploadedAt: string
  created_at: string
}

export interface CentroEducativo {
  nombre: string
  nivel: string
  sector: string
  tipo: 'Público' | 'Privado' | 'Semioficial'
}

export interface DistritoEstadisticas {
  privados: number
  publicos: number
  semioficiales: number
  total: number
}

export interface Director {
  nombre: string
  titulo: string
  subtitulo: string
  foto: string
  fecha_nacimiento: string
  lugar_nacimiento: string
  resumen_ejecutivo: string
  trayectoria: string[]
  formacion: {
    doctorado: { titulo: string; institucion: string; estado: string }
    maestrias: Array<{ titulo: string; institucion: string }>
    licenciaturas: Array<{ titulo: string; institucion: string }>
    capacitaciones: Array<{ titulo: string; institucion: string }>
  }
  fortalezas: string[]
  vision: string
  mision: string
  valores: string[]
}

export interface POA {
  id: string
  nombre: string
  descripcion: string
  anio: number
  trimestre: number
  meta: string
  indicador: string
  avance_porcentaje: number
  responsable: string
  estado: 'pendiente' | 'en_progreso' | 'completado' | 'retrasado'
  fecha_inicio: string
  fecha_fin: string
  created_at: string
  updated_at: string
}

export interface SeguimientoPOA {
  id: string
  poa_id: string
  fecha: string
  avance_porcentaje: number
  observacion: string
  usuario: string
  created_at: string
}

export interface CalendarioEvento {
  id: string
  titulo: string
  descripcion: string
  fecha_inicio: string
  fecha_fin: string
  hora: string
  ubicacion: string
  color: string
  todo_el_dia: number
  repeticion: string
  repeticion_dias: string
  created_at: string
  updated_at: string
}

export interface ContentData {
  noticias: Noticia[]
  servicios: Servicio[]
  enlaces: Enlace[]
  eventos: Evento[]
  programas: Programa[]
  testimonios: Testimonio[]
  galeria: GaleriaItem[]
  instagram: InstagramPost[]
  calendario: CalendarioEvento[]
  distritos: any[]
  config: {
    ultima_actualizacion: string
    google_analytics_id: string
    instagram_token: string
    ticker: string[]
    stats: Record<string, number>
  }
  director: Director | null
}

export interface User {
  id: string
  nombre: string
  email: string
  password_hash: string
  rol: 'admin' | 'secretaria'
  activo: number
  created_at: string
  updated_at: string
}

export interface SalonRequest {
  id: string
  solicitante_nombre: string
  solicitante_email: string
  solicitante_telefono: string
  titulo_actividad: string
  descripcion: string
  fecha_solicitada: string
  hora_inicio: string
  hora_fin: string
  estado: 'pendiente' | 'aprobado' | 'rechazado'
  motivo_rechazo: string
  calendario_evento_id: string
  created_at: string
  updated_at: string
}
