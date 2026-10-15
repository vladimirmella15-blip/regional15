import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { centroPorCodigo, type CentroPublico } from '@/lib/centros-publico'
import { MAX_COMPARAR, normalizar } from '@/lib/comparar'
import { SITE_URL } from '@/lib/sitio'

// Comparador de centros. La comparacion vive en el query (?c=00001,00330)
// para que se pueda compartir por enlace, y en localStorage solo mientras se
// arma desde el mapa.

export const metadata: Metadata = {
  title: 'Comparar centros educativos | Regional 15',
  description:
    'Pon hasta tres centros educativos de la Regional 15 lado a lado y compara matrícula, secciones, nivel, turno y distrito.',
  alternates: { canonical: '/comparar' },
  openGraph: {
    title: 'Comparar centros educativos | Regional 15',
    description: 'Compara hasta tres centros de la Regional 15 lado a lado.',
    type: 'website',
    url: `${SITE_URL}/comparar`,
    locale: 'es_DO',
  },
}

export default function CompararPage({ searchParams }: { searchParams: Promise<{ c?: string | string[] }> }) {
  return <Comparar searchParams={searchParams} />
}

async function Comparar({ searchParams }: { searchParams: Promise<{ c?: string | string[] }> }) {
  const params = await searchParams
  const crudo = Array.isArray(params.c) ? params.c.join(',') : params.c || ''
  const codigos = normalizar(crudo.split(','))

  // Un codigo que no existe no rompe la pagina: se descarta y se avisa abajo.
  const centros: CentroPublico[] = []
  const descartados: string[] = []
  for (const c of codigos) {
    const centro = centroPorCodigo(c)
    if (centro) centros.push(centro)
    else descartados.push(c)
  }

  if (centros.length === 0) return <SinEleccion />

  return (
    <main className="comparar-pagina">
      <nav className="comparar-migas" aria-label="Ruta de navegación">
        <Link href="/">Inicio</Link> <span aria-hidden="true">›</span> <Link href="/mapa">Mapa de centros</Link>{' '}
        <span aria-hidden="true">›</span> <span aria-current="page">Comparar</span>
      </nav>

      <header className="comparar-cabecera">
        <h1>Comparar centros</h1>
        <p>
          {centros.length === 1
            ? 'Agrega al menos un centro más para poder compararlos.'
            : `Comparando ${centros.length} de ${MAX_COMPARAR} centros.`}
        </p>
      </header>

      {descartados.length > 0 && (
        <p className="comparar-aviso">
          No encontramos {descartados.length === 1 ? 'este centro' : 'estos centros'}:{' '}
          {descartados.map(c => (
            <code key={c}>{c}</code>
          ))}
          . Es posible que el código esté mal escrito.
        </p>
      )}

      <div className="comparar-scroll">
        <table className="comparar-tabla">
          <caption className="sr-only">Comparación de centros educativos</caption>
          <thead>
            <tr>
              <th scope="col">Dato</th>
              {centros.map(c => (
                <th key={c.codigo} scope="col">
                  <span className="comparar-codigo">{c.codigo}</span>
                  <Link className="comparar-nombre" href={c.url}>
                    {c.nombre}
                  </Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <Fila
              etiqueta="Tipo"
              valores={centros.map(c => (
                <span
                  className={`org-school-tipo org-school-tipo-${
                    c.tipoResuelto === 'Público' ? 'pub' : c.tipoResuelto === 'Privado' ? 'priv' : 'semi'
                  }`}
                >
                  {c.tipoResuelto}
                </span>
              ))}
            />
            <Fila etiqueta="Nivel" valores={centros.map(c => c.nivel)} />
            <Fila etiqueta="Turno" valores={centros.map(c => c.tanda)} />
            <Fila etiqueta="Distrito" valores={centros.map(c => `${c.distrito} ${c.distritoNombre}`.trim())} />
            <Fila etiqueta="Sector o barrio" valores={centros.map(c => c.ubicacion?.sector)} />
            <Fila etiqueta="Dirección" valores={centros.map(c => c.ubicacion?.direccion)} />
            <Fila etiqueta="Matrícula" valores={centros.map(c => numero(c.matriculaOficial ?? c.matricula))} />

            <Fila
              etiqueta="Secciones"
              valores={centros.map(c => numero(c.secciones))}
              nota="Solo 610 de los 1.428 centros con coordenadas tienen el dato de secciones."
            />

            <Fila
              etiqueta="Alumnos por sección"
              valores={centros.map(c => {
                const m = c.matriculaOficial ?? c.matricula
                // El ratio solo existe donde hay las dos cifras. Donde falta una,
                // se dice que no está disponible en vez de calcular a medias.
                if (m == null || !c.secciones) return NO_DISPONIBLE
                return `${Math.round(m / c.secciones)}`
              })}
              nota="Se calcula únicamente cuando el centro tiene matrícula y secciones registradas."
            />

            <Fila
              etiqueta="Ubicación"
              valores={centros.map(c =>
                c.coords ? (
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${c.coords.lat},${c.coords.lng}`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver en el mapa
                  </a>
                ) : (
                  NO_DISPONIBLE
                )
              )}
            />
            <Fila
              etiqueta="Ficha"
              valores={centros.map(c => (
                <Link href={c.url}>Ver la ficha completa</Link>
              ))}
            />
          </tbody>
        </table>
      </div>

      <p className="comparar-pie">
        <Link className="boton boton-primario" href="/mapa">
          Seguir buscando centros
        </Link>
      </p>
    </main>
  )
}

const NO_DISPONIBLE = <span className="comparar-vacio">No disponible</span>

function numero(n: number | null | undefined) {
  return n == null ? NO_DISPONIBLE : n.toLocaleString('es-DO')
}

function Fila({
  etiqueta,
  valores,
  nota,
}: {
  etiqueta: string
  valores: React.ReactNode[]
  nota?: string
}) {
  return (
    <tr>
      <th scope="row">
        {etiqueta}
        {nota && <span className="comparar-nota">{nota}</span>}
      </th>
      {valores.map((v, i) => (
        <td key={i}>{v}</td>
      ))}
    </tr>
  )
}

function SinEleccion() {
  return (
    <main className="comparar-pagina comparar-vacio-pagina">
      <h1>Comparar centros</h1>
      <p>
        Todavía no has elegido ningún centro. En el mapa puedes agregar hasta {MAX_COMPARAR} centros para verlos lado a
        lado: matrícula, secciones, nivel, turno y distrito.
      </p>
      <Link className="boton boton-primario" href="/mapa">
        Ir al mapa de centros
      </Link>
    </main>
  )
}