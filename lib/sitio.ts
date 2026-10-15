// Dominio del sitio.
//
// En Vercel el dominio se configura en el panel (Settings > Domains), pero el
// codigo tambien lo necesita para armar las direcciones canonicas y de Open
// Graph que leen los buscadores. Si no se define NEXT_PUBLIC_SITE_URL se cae
// al dominio de Vercel, que es lo unico que se conoce en desarrollo.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://regional15-edu.vercel.app'
).replace(/\/+$/, '')

export const SITE_NAME = 'Regional 15 Educación Santo Domingo'
export const SITE_DESCRIPTION =
  'Portal oficial de la Regional de Educación 15 del Ministerio de Educación de la República Dominicana. 6 distritos educativos en Los Alcarrizos, Santo Domingo, Santo Domingo Oeste y Pedro Brand.'
