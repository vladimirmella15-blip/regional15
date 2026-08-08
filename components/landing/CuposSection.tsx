'use client'

import React from 'react'
import Image from 'next/image'

export default function CuposSection() {
  return (
    <section id="cupos" className="cupos-section" aria-label="Cupos escolares Regional 15">
      <div className="container">
        <div className="cupos-inner">
          <div className="cupos-imagenes">
            <div className="cupos-img-main animate-on-scroll">
              <Image
                src="/assets/img/cupos.png"
                alt="Cupos escolares disponibles en la Regional 15"
                width={900}
                height={600}
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                style={{ objectFit: 'cover' }}
                className="cupos-img"
              />
            </div>
            <div className="cupos-img-sec animate-on-scroll">
              <Image
                src="/assets/img/cupo2.png"
                alt="Estudiantes de la Regional 15 asegurados con su cupo escolar"
                width={700}
                height={500}
                sizes="(max-width: 768px) 100vw, 35vw"
                style={{ objectFit: 'cover' }}
                className="cupos-img"
              />
            </div>
          </div>

          <div className="cupos-content">
            <span className="cupos-badge">🎓 CUPOS ESCOLARES 2026</span>
            <h2 className="cupos-title">¡Garantizando el derecho a la educación!</h2>
            <p className="cupos-parrafo">
              <strong>En la Regional 15 tenemos cupos para todos nuestros estudiantes.</strong>
            </p>
            <p className="cupos-parrafo">
              Ningún estudiante se quedará fuera. <strong>Hay espacio para todos y estamos preparados para recibirlos.</strong>
            </p>
            <p className="cupos-parrafo">
              Nuestro compromiso es garantizar el acceso a la educación y brindar oportunidades para cada estudiante de nuestra comunidad educativa.
            </p>
            <div className="cupos-cierre">
              📍 <strong>Regional 15:</strong> trabajando unidos por una educación de calidad para todos.
            </div>
            <div className="cupos-lema">
              ¡En la Regional 15 tenemos cupo garantizado para todos!
              ¡Todos somos Regional 15!
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
