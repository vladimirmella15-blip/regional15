import type { MetadataRoute } from 'next'
import { todosLosCentrosPublicos } from '@/lib/centros-publico'
import { SITE_URL } from '@/lib/sitio'

// Este archivo reemplaza el sitemap.xml que estaba escrito a mano en /public,
// que ademas apuntaba a un dominio que no era el del sitio y solo listaba cinco
// paginas. Las 1.489 fichas que se generan en build nunca se anunciaban.
//
// La lista sale de la MISMA funcion que usa generateStaticParams en
// /centros/[slug], asi que el sitemap no puede desincronizarse de las paginas
// reales: si se agrega o quita un centro, los dos cambian juntos.

const hoy = () => new Date()

// Paginas institucionales. La frecuencia dice que tan seguido conviene
// revisarlas, no cada cuanto se publica algo.
const INSTITUCIONALES: Array<{ ruta: string; prioridad: number; frecuencia: 'daily' | 'weekly' | 'monthly' | 'yearly' }> = [
  { ruta: '/', prioridad: 1.0, frecuencia: 'weekly' },
  { ruta: '/mapa', prioridad: 0.9, frecuencia: 'weekly' },
  { ruta: '/noticias', prioridad: 0.8, frecuencia: 'daily' },
  { ruta: '/eventos', prioridad: 0.8, frecuencia: 'daily' },
  { ruta: '/servicios', prioridad: 0.8, frecuencia: 'monthly' },
  { ruta: '/programas', prioridad: 0.7, frecuencia: 'monthly' },
  { ruta: '/centros', prioridad: 0.7, frecuencia: 'weekly' },
  { ruta: '/nosotros', prioridad: 0.6, frecuencia: 'yearly' },
  { ruta: '/director', prioridad: 0.6, frecuencia: 'yearly' },
  { ruta: '/galeria', prioridad: 0.6, frecuencia: 'weekly' },
  { ruta: '/calendario', prioridad: 0.6, frecuencia: 'weekly' },
  { ruta: '/transparencia', prioridad: 0.7, frecuencia: 'monthly' },
  { ruta: '/catalogos', prioridad: 0.6, frecuencia: 'monthly' },
  { ruta: '/medio-ambiente', prioridad: 0.5, frecuencia: 'yearly' },
  { ruta: '/accesibilidad', prioridad: 0.4, frecuencia: 'yearly' },
  { ruta: '/contacto', prioridad: 0.5, frecuencia: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const centros = todosLosCentrosPublicos()

  const institucionales: MetadataRoute.Sitemap = INSTITUCIONALES.map(({ ruta, prioridad, frecuencia }) => ({
    url: `${SITE_URL}${ruta === '/' ? '' : ruta}`,
    changeFrequency: frecuencia,
    priority: prioridad,
  }))

  // Los 1.489 centros van sin fecha de modificacion: son paginas estables y
  // ponerles la fecha de hoy haria que el sitemap cambiara en cada build sin
  // que nada haya cambiado de verdad.
  const fichas: MetadataRoute.Sitemap = centros.map(c => ({
    url: `${SITE_URL}${c.url}`,
    priority: 0.6,
    changeFrequency: 'monthly',
  }))

  return [...institucionales, ...fichas]
}