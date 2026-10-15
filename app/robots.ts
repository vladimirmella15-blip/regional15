import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/sitio'

// Reemplaza el robots.txt manual que estaba en /public, que ademas declaraba un
// sitemap apuntando a un dominio que no era el del sitio.
//
// /admin queda fuera de la indexacion porque es la parte privada. Se usa Disallow
// (no el encabezado X-Robots-Tag) para que quede en un solo lugar el control de
// lo que se publica.

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api/admin', '/offline'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}