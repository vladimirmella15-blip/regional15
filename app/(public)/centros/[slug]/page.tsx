// Ficha de un centro educativo.
//
// Es la primera pagina del sitio que se renderiza en el servidor: el resto son
// componentes de cliente que sacan todo por fetch('/api/content'). Aqui los datos
// se importan directamente, lo que permite que Google lea la pagina y que cada
// centro tenga su propia direccion compartible:
//
//   /centros/liceo-patria-mirabal-16394
//
// El codigo SIGERD va al final de la URL y es la referencia estable: si el
// nombre del centro cambia, el enlace sigue funcionando.

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  centroPorSlug,
  todosLosCentrosPublicos,
  type CentroPublico,
} from '@/lib/centros-publico'

const SITIO = 'https://regional15.edu.do'

// Los 1.489 centros se generan en build. Es lo que hace que la pagina sea
// indexable sin depender de una base de datos.
export function generateStaticParams() {
  return todosLosCentrosPublicos().map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const centro = centroPorSlug(slug)
  if (!centro) return { title: 'Centro no encontrado | Regional 15' }

  const partes: string[] = []
  if (centro.nivel) partes.push(centro.nivel)
  if (centro.distritoNombre) partes.push(`Distrito ${centro.distrito} ${centro.distritoNombre}`)
  if (centro.ubicacion?.sector) partes.push(`Sector ${centro.ubicacion.sector}`)

  const titulo = `${centro.nombre} (${centro.codigo}) | Regional 15 MINERD`
  const descripcion = `${partes.join(' · ')}. Código SIGERD ${centro.codigo}.${
    centro.matricula != null ? ` ${centro.matricula.toLocaleString('es-DO')} estudiantes.` : ''
  }`

  return {
    title: titulo,
    description: descripcion,
    alternates: { canonical: centro.url },
    openGraph: {
      title: titulo,
      description: descripcion,
      type: 'website',
      url: `${SITIO}${centro.url}`,
      locale: 'es_DO',
    },
  }
}

function datosEstructurados(centro: CentroPublico) {
  return {
    '@context': 'https://schema.org',
    '@type': 'School',
    name: centro.nombre,
    url: `${SITIO}${centro.url}`,
    ...(centro.codigo ? { identifier: centro.codigo } : {}),
    ...(centro.coords ? { geo: { '@type': 'GeoCoordinates', latitude: centro.coords.lat, longitude: centro.coords.lng } } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: centro.ubicacion?.direccion || undefined,
      addressLocality: centro.distritoNombre,
      addressRegion: 'Santo Domingo',
      addressCountry: 'DO',
    },
    ...(centro.nivel ? { educationalLevel: centro.nivel } : {}),
    ...(centro.ubicacion?.sector ? { description: `Sector ${centro.ubicacion.sector}` } : {}),
    ...(centro.matricula != null ? { numberOfStudents: centro.matricula } : {}),
    ...(centro.secciones != null ? { classroomCount: centro.secciones } : {}),
    ...(centro.tipoResuelto !== 'Público' ? { isAccessibleForFree: centro.tipoResuelto === 'Privado' ? 'False' : 'True' } : {}),
  }
}

function Dato({ etiqueta, valor }: { etiqueta: string; valor: React.ReactNode }) {
  if (valor == null || valor === '') return null
  return (
    <div className="centro-dato">
      <dt>{etiqueta}</dt>
      <dd>{valor}</dd>
    </div>
  )
}

export default async function CentroPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const centro = centroPorSlug(slug)
  if (!centro) notFound()

  const enlaceMaps =
    centro.ubicacion?.enlace ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent([centro.nombre, centro.codigo, 'República Dominicana'].filter(Boolean).join(' '))}`

  const titulo = centro.nombre
    .replace(/^(Liceo|Centro Educativo|Escuela Primaria|Escuela|Colegio|Instituto)\s+/i, '')
    .replace(/\s*\(Básica de Adultos\)\s*$/i, '')
    .trim()

  return (
    <main style={{ marginTop: '80px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datosEstructurados(centro)) }}
      />

      <section
        className="section"
        style={{ background: 'linear-gradient(135deg, var(--blue-dark) 0%, #002a5c 100%)', padding: '64px 0 54px', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, var(--gold), transparent)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <nav aria-label="Ruta de navegación" style={{ marginBottom: '14px' }}>
            <Link href="/mapa" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.82rem', textDecoration: 'none' }}>
              ← Volver al mapa de centros
            </Link>
          </nav>
          <span className="section-eyebrow" style={{ color: 'var(--gold)', marginBottom: '10px', display: 'block' }}>
            CENTRO EDUCATIVO · SIGERD {centro.codigo}
          </span>
          <h1
            style={{
              fontSize: 'clamp(1.6rem, 3.6vw, 2.4rem)',
              color: 'white',
              margin: '0 0 12px',
              fontWeight: 800,
              fontFamily: "'Outfit', sans-serif",
              lineHeight: 1.15,
              textTransform: 'capitalize',
            }}
          >
            {titulo}
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span className={`org-school-info org-school-tipo org-school-tipo-${centro.tipoResuelto === 'Público' ? 'pub' : centro.tipoResuelto === 'Privado' ? 'priv' : 'semi'}`}>
              {centro.tipoResuelto}
            </span>
            {centro.nivel && <span className="org-school-nivel">{centro.nivel}</span>}
            <span className="org-school-nivel">
              Distrito {centro.distrito} · {centro.distritoNombre}
            </span>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-body)' }}>
        <div className="container">
          <div className="centro-ficha">
            <div>
              <h2 className="centro-ficha-titulo">Datos del centro</h2>
              <dl className="centro-datos">
                <Dato etiqueta="Código SIGERD" valor={<code>{centro.codigo}</code>} />
                <Dato etiqueta="Nivel" valor={centro.nivel} />
                <Dato etiqueta="Modalidad" valor={centro.tipoResuelto} />
                <Dato etiqueta="Distrito educativo" valor={`${centro.distrito} · ${centro.distritoNombre}`} />
                <Dato etiqueta="Sector" valor={centro.ubicacion?.sector} />
                <Dato etiqueta="Dirección" valor={centro.ubicacion?.direccion} />
                <Dato etiqueta="Secciones" valor={centro.secciones?.toLocaleString('es-DO')} />
                <Dato
                  etiqueta="Matrícula"
                  valor={
                    centro.matricula != null ? (
                      <>
                        {centro.matricula.toLocaleString('es-DO')} estudiantes
                        {centro.periodo && (
                          <span style={{ display: 'block', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                            Período {centro.periodo}
                          </span>
                        )}
                      </>
                    ) : null
                  }
                />
              </dl>

              <a
                className="centro-boton-maps"
                href={enlaceMaps}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Ver en Google Maps
              </a>

              {centro.matriculaOficial != null && centro.matriculaOficial !== centro.matricula && (
                <p className="centro-Nota">
                  La matrícula oficial de la Regional 15 para este centro es de{' '}
                  {centro.matriculaOficial.toLocaleString('es-DO')} estudiantes.
                </p>
              )}
            </div>

            <aside className="centro-lado">
              {centro.coords ? (
                <>
                  <h2 className="centro-ficha-titulo">Ubicación</h2>
                  <div className="centro-mapa">
                    <iframe
                      title={`Mapa de ${centro.nombre}`}
                      width="100%"
                      height="260"
                      style={{ border: 0, borderRadius: '10px', display: 'block' }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps?q=${centro.coords.lat},${centro.coords.lng}&z=17&output=embed`}
                    />
                  </div>
                  {centro.ubicacion?.sector && (
                    <p className="centro-sector">Sector {centro.ubicacion.sector}</p>
                  )}
                </>
              ) : (
                <p className="centro-Nota">
                  Este centro todavía no tiene una ubicación verificada en el mapa. Podés buscarlo por su
                  nombre o código SIGERD en Google Maps con el enlace de arriba.
                </p>
              )}
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
