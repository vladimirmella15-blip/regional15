import fs from 'fs'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), 'public', 'data')
const DATA_FILE = path.join(DATA_DIR, 'content.json')

export interface Noticia {
  id: string; fecha: string; categoria: string; titulo: string;
  descripcion: string; imagen: string; enlace: string; texto_enlace: string;
}

export interface Evento {
  id: string; emoji: string; abreviatura: string; tipo: string;
  titulo: string; descripcion: string; ubicacion: string; fecha: string;
}

export interface Programa {
  id: string; titulo: string; descripcion: string;
  icono_viewbox: string; icono_path: string; enlace: string; texto_enlace: string;
}

export interface Testimonio {
  nombre: string; rol: string; texto: string; estrellas: number;
}

export interface GaleriaItem {
  id: string; imagen: string; titulo: string;
}

export interface Servicio {
  id: string; titulo: string; descripcion: string; icono_path: string;
}

export interface Enlace {
  id: string; nombre: string; descripcion: string; url: string; icono: string;
}

export interface ContentData {
  noticias: Noticia[];
  servicios: Servicio[];
  enlaces: Enlace[];
  eventos: Evento[];
  programas: Programa[];
  testimonios: Testimonio[];
  galeria: GaleriaItem[];
  config: {
    ultima_actualizacion: string;
    google_analytics_id?: string;
    stats: Record<string, number>;
    ticker: string[];
  };
}

export function getContent(): ContentData {
  const raw = fs.readFileSync(DATA_FILE, 'utf-8')
  return JSON.parse(raw)
}

export function saveContent(data: ContentData): void {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true })
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8')
}
