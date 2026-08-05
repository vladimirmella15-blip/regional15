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
              La Regional 15 continúa desarrollando acciones coordinadas para asegurar los cupos escolares en sus seis distritos educativos, con el objetivo de que cada estudiante cuente con un espacio para iniciar el año escolar en condiciones oportunas.
            </p>
            <p className="cupos-parrafo">
              Este esfuerzo incluye el levantamiento de la demanda de inscripción, la optimización de la capacidad de los centros educativos y el trabajo conjunto entre los equipos distritales y regionales para ofrecer respuestas ágiles a las familias.
            </p>
            <p className="cupos-parrafo">
              Nuestro compromiso es que ningún estudiante quede fuera de las aulas, fortaleciendo una gestión educativa eficiente, inclusiva y centrada en el bienestar de la comunidad escolar.
            </p>
            <div className="cupos-cierre">
              📍 <strong>Regional 15:</strong> trabajando unidos por una educación de calidad para todos.
            </div>
            <div className="cupos-lema">
              EN LA REGIONAL 15 TENEMOS CUPOS PARA TODOS NUESTROS ESTUDIANTES Y NINGÚN ESTUDIANTE SE QUEDARÁ FUERA, HAY CUPO PARA TODOS. TODOS SOMOS REGIONAL 15
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
