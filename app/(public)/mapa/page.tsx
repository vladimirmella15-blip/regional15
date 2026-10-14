'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'

// MapLibre toca `window`, asi que el mapa no se monta en el servidor. El CSS de
// maplibre-gl entra con el chunk de la pagina /mapa y no pesa en la home.
const MapaCentros = dynamic(() => import('@/components/mapa/MapaCentros'), {
  ssr: false,
  loading: () => <div className="mapa-carga">Cargando el mapa de centros…</div>,
})

export default function MapaPage() {
  useEffect(() => {
    document.title = 'Mapa de Centros Educativos | Regional 15'
  }, [])

  return (
    <main className="pagina-mapa">
      <section className="mapa-hero">
        <div className="container">
          <span className="mapa-hero-eyebrow">Localizador de centros</span>
          <h1>
            Mapa de Centros Educativos
          </h1>
          <p>
            Ubica los centros de los seis distritos educativos de la Regional 15 sobre el mapa. Filtra por
            distrito, nivel o tipo, o busca por nombre, sector o código SIGERD. Toca un punto para ver su ficha.
          </p>
        </div>
      </section>

      <section className="mapa-seccion">
        <div className="container-lg">
          <MapaCentros />
        </div>
      </section>
    </main>
  )
}
