'use client'

import React from 'react'

export default function AvisoServicios() {
  return (
    <div className="aviso-servicios" role="region" aria-label="Aviso de servicios gratuitos" style={{ opacity: 1 }}>
      <div className="container">
        <div className="aviso-inner">
          <div className="aviso-icon-wrap">
            <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
          </div>
          <div className="aviso-content">
            <div className="aviso-titulo">
              <span className="aviso-badge">AVISO IMPORTANTE</span>
              <h3>Todos los Servicios de la Regional 15 son Completamente Gratuitos</h3>
            </div>
            <p className="aviso-descripcion">
              En la <strong>Regional 15 del MINERD</strong> ponemos a disposición de toda la comunidad educativa y el público en general una amplia gama de servicios sin costo alguno, entre ellos: <strong>Recursos Humanos (RRHH)</strong>, <strong>Certificaciones académicas</strong>, supervisión educativa, orientación psicológica, trámites docentes, tecnología educativa, y mucho más.
            </p>
            <div className="aviso-horario">
              <div className="horario-item horario-regular">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                </svg>
                <span><strong>Horario regular:</strong> Lunes a Viernes, 8:00 AM – 4:00 PM</span>
              </div>
              <div className="horario-item horario-extendido">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                </svg>
                <span><strong>Horario extendido:</strong> Hasta las <strong>6:00 PM</strong> — ampliado para dar mejor soporte a nuestra comunidad</span>
                <span className="badge-extendido">AMPLIADO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
