// components/landing/DistritosSection.tsx
'use client'

import React, { useState } from 'react'

interface CentroEducativo {
  nombre: string
  nivel: string
  sector: string
  tipo: 'Público' | 'Privado' | 'Semioficial'
}

interface DistritoItem {
  id: string
  codigo: string
  nombre: string
  centros: number
  privados: number
  publicos: number
  semioficiales: number
  matricula_privada: number
  matricula_publica: number
  descripcion: string
  director: string
  direccion: string
  telefono: string
  email: string
  centros_educativos: CentroEducativo[]
}
const defaultDistritos: DistritoItem[] = [
  {
    id: 'dist-1',
    codigo: '15-01',
    nombre: 'Los Alcarrizos',
    centros: 244,
    privados: 114,
    publicos: 130,
    semioficiales: 0,
    matricula_privada: 19207,
    matricula_publica: 59824,
    descripcion: 'Administra la educación pública del municipio Los Alcarrizos, incluyendo sus secciones y parajes, coordinando centros del nivel inicial, primario y secundario.',
    director: 'Maria Castillo',
    direccion: 'Calle San Antonio, Los Alcarrizos Viejo, Los Alcarrizos, Santo Domingo',
    telefono: '(809) 560-2937',
    email: 'distrito15-01@minerd.gob.do',
    centros_educativos: [
      { nombre: 'Politécnico Prof. Virgilio Casilla Minaya', nivel: 'Secundaria', sector: 'Los Alcarrizos', tipo: 'Público' },
      { nombre: 'Camila Henríquez Fe y Alegría', nivel: 'Inicial-Primaria-Secundaria', sector: 'Los Alcarrizos', tipo: 'Público' },
      { nombre: 'Amparo García Molina', nivel: 'Inicial-Primaria', sector: 'Los Alcarrizos', tipo: 'Público' },
      { nombre: 'Amin Abel Hasbun', nivel: 'Secundaria', sector: 'Los Alcarrizos', tipo: 'Público' },
      { nombre: 'Carmen Celia Balaguer', nivel: 'Inicial-Primaria-Secundaria', sector: 'Los Alcarrizos', tipo: 'Público' },
      { nombre: 'Escuela Primaria Luisa Mercedes Mateo Peguero', nivel: 'Inicial-Primaria', sector: 'Los Alcarrizos', tipo: 'Público' },
      { nombre: 'Liceo Roberto Duvergé Mejía', nivel: 'Secundaria', sector: 'Los Alcarrizos', tipo: 'Público' },
      { nombre: 'Buenas Nuevas', nivel: 'Inicial-Primaria', sector: 'Los Alcarrizos', tipo: 'Público' },
      { nombre: 'Ana Lucía Pujols', nivel: 'Inicial-Primaria', sector: 'Los Alcarrizos', tipo: 'Público' },
      { nombre: 'Escuela Básica Los Alcarrizos', nivel: 'Primario', sector: 'Los Alcarrizos', tipo: 'Público' },
      { nombre: 'Liceo Cardenal Sancha', nivel: 'Secundario', sector: 'Los Alcarrizos', tipo: 'Público' },
      { nombre: 'Centro Educativo La Ciénaga', nivel: 'Inicial-Primario', sector: 'La Ciénaga', tipo: 'Público' },
      { nombre: 'Politécnico Los Alcarrizos', nivel: 'Técnico-Profesional', sector: 'Los Alcarrizos', tipo: 'Público' },
      { nombre: 'Fundación Colegio Parroquial San Antonio de Padua', nivel: 'Inicial-Primario-Secundario', sector: 'Los Alcarrizos', tipo: 'Privado' },
      { nombre: 'Centro de Estudios Duarte', nivel: 'Inicial-Primario-Secundario', sector: 'Los Alcarrizos', tipo: 'Privado' },
      { nombre: 'Centro de Estudios Despertad', nivel: 'Inicial-Primario-Secundario', sector: 'Los Alcarrizos', tipo: 'Privado' },
      { nombre: 'Colegio Evangélico Emanuel', nivel: 'Inicial-Primario-Secundario', sector: 'Los Alcarrizos', tipo: 'Privado' },
      { nombre: 'Colegio Cristiano Marileidy', nivel: 'Inicial-Primario-Secundario', sector: 'Los Alcarrizos', tipo: 'Privado' },
      { nombre: 'Centro Educativo Alejandrina', nivel: 'Inicial-Primario-Secundario', sector: 'Los Alcarrizos', tipo: 'Privado' },
      { nombre: 'Colegio San José', nivel: 'Inicial-Primario-Secundario', sector: 'Los Alcarrizos', tipo: 'Privado' },
      { nombre: 'Colegio Evangélico Bethel', nivel: 'Inicial-Primario', sector: 'Los Alcarrizos', tipo: 'Privado' },
    ]
  },
  {
    id: 'dist-2',
    codigo: '15-02',
    nombre: 'Santo Domingo Centro',
    centros: 208,
    privados: 95,
    publicos: 113,
    semioficiales: 0,
    matricula_privada: 14529,
    matricula_publica: 48538,
    descripcion: 'Comprende sectores centrales del Distrito Nacional. Incluye centros educativos en zonas de alta densidad urbana de la capital dominicana.',
    director: 'Ana Lucia',
    direccion: 'Calle Peña Batlle Esq. Villa Espesa, Villa Juana, Santo Domingo, D.N.',
    telefono: '(809) 688-9700',
    email: 'distrito15-02@minerd.gob.do',
    centros_educativos: [
      { nombre: 'Escuela República Dominicana', nivel: 'Inicial-Primario-Secundario', sector: 'Villa Juana', tipo: 'Público' },
      { nombre: 'Instituto Tecnológico Cardenal Sancha', nivel: 'Técnico-Profesional', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Politécnico Nuestra Señora del Carmen', nivel: 'Secundaria', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Instituto Técnico Salesiano (ITESA)', nivel: 'Técnico-Profesional', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Instituto Politécnico Parroquial Santa Ana', nivel: 'Técnico-Profesional', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Politécnico Hermana Rosario Torres (Fe y Alegría)', nivel: 'Técnico-Profesional', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Politécnico Manuel Aurelio Tavárez Justo (Manolo)', nivel: 'Secundaria', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Liceo Gregorio Urbano Gilbert', nivel: 'Secundaria', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Liceo Profesor Juan Bosch', nivel: 'Secundaria', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Centro Educativo Modalidad en Arts María Montez', nivel: 'Secundaria Artes', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Escuela Mauricio Báez', nivel: 'Inicial-Primario-Secundario', sector: 'Villa Juana', tipo: 'Público' },
      { nombre: 'Escuela República de Haití', nivel: 'Inicial-Primario', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Escuela Mercedes Sepúlveda', nivel: 'Inicial-Primario', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Escuela República de Francia', nivel: 'Primario', sector: 'Gazcue', tipo: 'Público' },
      { nombre: 'Liceo Juan Pablo Duarte', nivel: 'Secundario', sector: 'Ensanche La Fe', tipo: 'Público' },
      { nombre: 'Centro Educativo San Martín de Porres', nivel: 'Inicial-Primario', sector: 'Villa Consuelo', tipo: 'Público' },
      { nombre: 'Politécnico Femenino María de la Altagracia', nivel: 'Técnico-Profesional', sector: 'Ensanche Capotillo', tipo: 'Público' },
      { nombre: 'Colegio Episcopal San Andrés', nivel: 'Inicial-Primario-Secundario', sector: 'Distrito Nacional', tipo: 'Privado' },
      { nombre: 'Palacio Escolar España', nivel: 'Inicial-Primario-Secundario', sector: 'Villas Agrícolas', tipo: 'Privado' },
      { nombre: 'Colegio Cardenal Sancha', nivel: 'Inicial-Primario-Secundario', sector: 'Distrito Nacional', tipo: 'Privado' },
      { nombre: 'Colegio Loyola', nivel: 'Inicial-Primario-Secundario', sector: 'Gazcue', tipo: 'Privado' },
      { nombre: 'Colegio Santo Domingo', nivel: 'Inicial-Primario', sector: 'Ensanche La Fe', tipo: 'Privado' },
      { nombre: 'Centro Educativo Los Prados', nivel: 'Inicial-Primario', sector: 'Los Prados', tipo: 'Privado' },
    ]
  },
  {
    id: 'dist-3',
    codigo: '15-03',
    nombre: 'Santo Domingo Sur-Central',
    centros: 332,
    privados: 242,
    publicos: 90,
    semioficiales: 0,
    matricula_privada: 50961,
    matricula_publica: 30529,
    descripcion: 'Zona sur-central del Distrito Nacional y Santo Domingo Sur. Atiende una diversa población estudiantil en barrios y urbanizaciones del sur capitalino.',
    director: 'Francia Chalas',
    direccion: 'Calle José Gabriel García No. 153, Ciudad Nueva, Santo Domingo, D.N.',
    telefono: '(809) 687-6055',
    email: 'distrito15-03@minerd.gob.do',
    centros_educativos: [
      { nombre: 'Escuela Primaria República del Brasil', nivel: 'Inicial-Primaria', sector: 'Ciudad Nueva', tipo: 'Público' },
      { nombre: 'Escuela General Antonio Duvergé', nivel: 'Inicial-Primaria', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Hogar Escuela Santo Domingo Savio (Salesiano)', nivel: 'Inicial-Primaria-Secundaria', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Escuela República de Guatemala', nivel: 'Inicial-Primaria', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Paula Montal', nivel: 'Inicial-Primaria-Secundaria', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Víctor Garrido', nivel: 'Inicial-Primaria-Secundaria', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Politécnico Padre Bartolomé Vegh', nivel: 'Técnico-Profesional', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Liceo Rosa Duarte', nivel: 'Secundaria', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Liceo Técnico Profesional MoveArte', nivel: 'Técnico-Profesional', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Liceo Estados Unidos de América', nivel: 'Secundaria', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Escuela Básica San Cristóbal', nivel: 'Primario', sector: 'Los Prados', tipo: 'Público' },
      { nombre: 'Liceo Matutino del Sur', nivel: 'Secundario', sector: 'Ensanche Ozama', tipo: 'Público' },
      { nombre: 'Centro Educativo La Esperanza', nivel: 'Inicial-Primario', sector: 'Los Mina', tipo: 'Público' },
      { nombre: 'Politécnico del Sur', nivel: 'Técnico-Profesional', sector: 'Brisa Oriental', tipo: 'Público' },
      { nombre: 'Colegio Bautista', nivel: 'Inicial-Primario-Secundario', sector: 'Distrito Nacional', tipo: 'Privado' },
      { nombre: 'Colegio Ergos', nivel: 'Inicial-Primario-Secundario', sector: 'Distrito Nacional', tipo: 'Privado' },
      { nombre: 'Colegio San Judas Tadeo', nivel: 'Inicial-Primario-Secundario', sector: 'Distrito Nacional', tipo: 'Privado' },
      { nombre: 'Colegio Quisqueya', nivel: 'Inicial-Primario-Secundario', sector: 'Distrito Nacional', tipo: 'Privado' },
      { nombre: 'Colegio María Auxiliadora', nivel: 'Inicial-Primario-Secundario', sector: 'Los Prados', tipo: 'Privado' },
      { nombre: 'Colegio El Divino Niño', nivel: 'Inicial-Primario', sector: 'Los Mina', tipo: 'Privado' },
    ]
  },
  {
    id: 'dist-4',
    codigo: '15-04',
    nombre: 'Santo Domingo Noroeste',
    centros: 255,
    privados: 154,
    publicos: 101,
    semioficiales: 0,
    matricula_privada: 25733,
    matricula_publica: 44864,
    descripcion: 'Con sede en Cristo Rey, D.N. Incluye sectores como Cristo Rey, Villa Juana y aledaños.',
    director: 'Santa Polanco',
    direccion: 'Calle 1ra esquina Manuel Flores Cabrera, Barrio La Cementera, Cristo Rey, Santo Domingo, D.N.',
    telefono: '(809) 549-3677',
    email: 'distrito15-04@minerd.gob.do',
    centros_educativos: [
      { nombre: 'Escuela República de Costa Rica', nivel: 'Inicial-Primario-Secundario', sector: 'Cristo Rey', tipo: 'Público' },
      { nombre: 'Liceo Fidel Ferrer', nivel: 'Secundaria', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Escuela Fray Ramón Pané', nivel: 'Inicial-Primario-Secundario', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Escuela José Bordas Valdez', nivel: 'Inicial-Primario', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Centro Educativo Parroquial Cristo Rey', nivel: 'Inicial-Primario-Secundario', sector: 'Cristo Rey', tipo: 'Público' },
      { nombre: 'Escuela Francisco Ulises Domínguez', nivel: 'Inicial-Primaria-Secundaria', sector: 'Cristo Rey', tipo: 'Público' },
      { nombre: 'Liceo San Pablo Apóstol', nivel: 'Secundaria', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Escuela Benito Juárez', nivel: 'Inicial-Primaria-Secundaria', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Instituto Politécnico Ángeles Custodios', nivel: 'Técnico-Profesional', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Escuela Marillac', nivel: 'Inicial-Primaria-Secundaria', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Escuela Puerto Isabela', nivel: 'Inicial-Primaria', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Escuela Prof. Juan Emilio Bosch Gaviño', nivel: 'Inicial-Primaria-Secundaria', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Escuela Malaquías Gil', nivel: 'Inicial-Primaria', sector: 'Distrito Nacional', tipo: 'Público' },
      { nombre: 'Escuela Básica Cristo Rey', nivel: 'Primario', sector: 'Cristo Rey', tipo: 'Público' },
      { nombre: 'Liceo Nocturno Francisco Ulises Domínguez', nivel: 'Secundario', sector: 'Cristo Rey', tipo: 'Público' },
      { nombre: 'Centro Educativo Villa Juana', nivel: 'Inicial-Primario', sector: 'Villa Juana', tipo: 'Público' },
      { nombre: 'Politécnico Noroeste', nivel: 'Técnico-Profesional', sector: 'Los Peralejos', tipo: 'Público' },
      { nombre: 'Colegio Americano de Santo Domingo', nivel: 'Inicial-Primario-Secundario', sector: 'Distrito Nacional', tipo: 'Privado' },
      { nombre: 'Colegio Adventista Los Girasoles', nivel: 'Inicial-Primario-Secundario', sector: 'Los Girasoles', tipo: 'Privado' },
      { nombre: 'Colegio San Luis', nivel: 'Inicial-Primario-Secundario', sector: 'Distrito Nacional', tipo: 'Privado' },
      { nombre: 'Colegio Preuniversitario Dr. Luis Alfredo Duvergé Mejía (UNPHU)', nivel: 'Secundaria', sector: 'Distrito Nacional', tipo: 'Privado' },
      { nombre: 'Colegio Parroquial Nuestra Señora de Lourdes', nivel: 'Inicial-Primario-Secundario', sector: 'Distrito Nacional', tipo: 'Privado' },
      { nombre: 'Colegio Internacional SEK Las Américas', nivel: 'Inicial-Primario-Secundario', sector: 'Distrito Nacional', tipo: 'Privado' },
      { nombre: 'Saint Thomas School', nivel: 'Inicial-Primario-Secundario', sector: 'Distrito Nacional', tipo: 'Privado' },
      { nombre: 'The Community for Learning', nivel: 'Inicial-Primario-Secundario', sector: 'Distrito Nacional', tipo: 'Privado' },
      { nombre: 'Colegio Cristiano Logos', nivel: 'Inicial-Primario-Secundario', sector: 'Distrito Nacional', tipo: 'Privado' },
      { nombre: 'Colegio San Ramón', nivel: 'Inicial-Primario-Secundario', sector: 'Distrito Nacional', tipo: 'Privado' },
      { nombre: 'Colegio Santa Teresita', nivel: 'Inicial-Primario-Secundario', sector: 'Cristo Rey', tipo: 'Privado' },
      { nombre: 'Colegio San Esteban', nivel: 'Primario-Secundario', sector: 'Simón Bolívar', tipo: 'Privado' },
    ]
  },
  {
    id: 'dist-5',
    codigo: '15-05',
    nombre: 'Santo Domingo Oeste / Herrera',
    centros: 332,
    privados: 195,
    publicos: 137,
    semioficiales: 0,
    matricula_privada: 36924,
    matricula_publica: 66253,
    descripcion: 'Zona de Herrera, Santo Domingo Oeste. Una de las áreas de mayor crecimiento educativo del Gran Santo Domingo en los últimos años.',
    director: 'Servio Sena Perez',
    direccion: 'Avenida Isabel Aguiar No. 100, Zona Industrial de Herrera, Santo Domingo Oeste',
    telefono: '(809) 534-1910',
    email: 'distrito15-05@minerd.gob.do',
    centros_educativos: [
      { nombre: 'Escuela Primaria Barbados', nivel: 'Inicial-Primaria', sector: 'Herrera', tipo: 'Público' },
      { nombre: 'Escuela Camila Henríquez', nivel: 'Inicial-Primaria', sector: 'Herrera', tipo: 'Público' },
      { nombre: 'Politécnico Madre Rafaela Ybarra', nivel: 'Secundaria', sector: 'Herrera', tipo: 'Público' },
      { nombre: 'Liceo Elsa Mojica', nivel: 'Secundaria', sector: 'Herrera', tipo: 'Público' },
      { nombre: 'Liceo Las Américas', nivel: 'Secundaria', sector: 'Herrera', tipo: 'Público' },
      { nombre: 'Centro en Artes Adelaida Acosta', nivel: 'Secundaria Artes', sector: 'Herrera', tipo: 'Público' },
      { nombre: 'Centro en Artes Pedro Aponte', nivel: 'Secundaria Artes', sector: 'Herrera', tipo: 'Público' },
      { nombre: 'Escuela Básica Herrera', nivel: 'Primario', sector: 'Herrera', tipo: 'Público' },
      { nombre: 'Liceo Matutino de Herrera', nivel: 'Secundario', sector: 'Herrera', tipo: 'Público' },
      { nombre: 'Centro Educativo El Café', nivel: 'Inicial-Primario', sector: 'El Café', tipo: 'Público' },
      { nombre: 'Politécnico de Herrera', nivel: 'Técnico-Profesional', sector: 'Herrera', tipo: 'Público' },
      { nombre: 'Colegio Bautista El Maestro', nivel: 'Inicial-Primario-Secundario', sector: 'Herrera', tipo: 'Privado' },
      { nombre: 'Brigham Young School', nivel: 'Inicial-Primario-Secundario', sector: 'Herrera', tipo: 'Privado' },
      { nombre: 'Colegio Nuevo Mundo', nivel: 'Inicial-Primario-Secundario', sector: 'Herrera', tipo: 'Privado' },
      { nombre: 'Colegio Cristiano Shaddai', nivel: 'Inicial-Primario', sector: 'Manoguayabo', tipo: 'Privado' },
    ]
  },
  {
    id: 'dist-6',
    codigo: '15-06',
    nombre: 'Pedro Brand',
    centros: 72,
    privados: 16,
    publicos: 56,
    semioficiales: 0,
    matricula_privada: 3117,
    matricula_publica: 21668,
    descripcion: 'Municipio de Pedro Brand, Santo Domingo Oeste. El distrito más reciente de la Regional 15, creado para atender la creciente demanda educativa de esta zona.',
    director: 'Rafaela Suero',
    direccion: 'Autopista Duarte Km. 18, La Guáyiga, Pedro Brand',
    telefono: '(809) 688-9700 (Ext. Regional 15)',
    email: 'distrito15-06@minerd.gob.do',
    centros_educativos: [
      { nombre: 'Politécnico José Manuel Buret Taveras', nivel: 'Técnico-Profesional', sector: 'Pedro Brand', tipo: 'Público' },
      { nombre: 'Liceo General Gregorio Luperón', nivel: 'Secundaria', sector: 'Pedro Brand', tipo: 'Público' },
      { nombre: 'Liceo Pedro Henríquez Ureña', nivel: 'Secundaria', sector: 'Pedro Brand', tipo: 'Público' },
      { nombre: 'Escuela Primaria Profesor Julián Abad Mambrú', nivel: 'Inicial-Primaria', sector: 'La Cuaba', tipo: 'Público' },
      { nombre: 'Centro Educativo Gregorio Pérez', nivel: 'Inicial-Primaria', sector: 'Salamanca', tipo: 'Público' },
      { nombre: 'Centro Educativo Francisco del Rosario Sánchez', nivel: 'Inicial-Primaria', sector: 'Pedro Brand', tipo: 'Público' },
      { nombre: 'Escuela Básica Pedro Brand', nivel: 'Primario', sector: 'Pedro Brand', tipo: 'Público' },
      { nombre: 'Liceo de Pedro Brand', nivel: 'Secundario', sector: 'Pedro Brand', tipo: 'Público' },
      { nombre: 'Centro Educativo La Guáyiga', nivel: 'Inicial-Primario', sector: 'La Guáyiga', tipo: 'Público' },
      { nombre: 'Politécnico de Pedro Brand', nivel: 'Técnico-Profesional', sector: 'Pedro Brand', tipo: 'Público' },
      { nombre: 'Centro Educativo Salem', nivel: 'Inicial-Primario-Secundario', sector: 'Pedro Brand', tipo: 'Privado' },
      { nombre: 'Colegio Calasanz Pablo Mella', nivel: 'Inicial-Primario-Secundario', sector: 'Pedro Brand', tipo: 'Privado' },
      { nombre: 'Colegio Santa Teresa', nivel: 'Inicial-Primario-Secundario', sector: 'Pedro Brand', tipo: 'Privado' },
      { nombre: 'Colegio San Miguel', nivel: 'Inicial-Primario', sector: 'Pedro Brand', tipo: 'Privado' },
    ]
  }
]

function SchoolList({ centros = [] }: { centros?: CentroEducativo[] }) {
  const safeCentros = centros || []
  const publicos = safeCentros.filter(c => c.tipo === 'Público')
  const privados = safeCentros.filter(c => c.tipo === 'Privado')
  const semioficiales = safeCentros.filter(c => c.tipo === 'Semioficial')

  return (
    <div className="org-schools-wrapper">
      <div className="org-schools-section">
        <h5 className="org-schools-heading public">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="var(--blue-mid)"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>
          Centros Públicos ({publicos.length}{semioficiales.length > 0 ? ` + ${semioficiales.length} Semioficiales` : ''})
        </h5>
        {publicos.length === 0 ? (
          <p className="org-schools-empty">No hay centros públicos registrados</p>
        ) : (
          <div className="org-schools-list">
            {publicos.map((c, i) => (
              <div className="org-school-item" key={i}>
                <div className="org-school-icon public">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="var(--blue-mid)"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>
                </div>
                <div className="org-school-info">
                  <strong>{c.nombre}</strong>
                  <span>{c.nivel} · {c.sector}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {semioficiales.length > 0 && (
          <div className="org-schools-section" style={{ marginTop: '12px' }}>
            <h5 className="org-schools-heading" style={{ color: '#0891b2' }}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="#0891b2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              Centros Semioficiales ({semioficiales.length})
            </h5>
            <div className="org-schools-list">
              {semioficiales.map((c, i) => (
                <div className="org-school-item" key={i}>
                  <div className="org-school-icon" style={{ background: '#ecfeff' }}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="#0891b2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                  </div>
                  <div className="org-school-info">
                    <strong>{c.nombre}</strong>
                    <span>{c.nivel} · {c.sector}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="org-schools-section">
        <h5 className="org-schools-heading private">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="var(--gold)"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          Centros Privados ({privados.length})
        </h5>
        {privados.length === 0 ? (
          <p className="org-schools-empty">No hay centros privados registrados</p>
        ) : (
          <div className="org-schools-list">
            {privados.map((c, i) => (
              <div className="org-school-item" key={i}>
                <div className="org-school-icon private">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="var(--gold)"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>
                <div className="org-school-info">
                  <strong>{c.nombre}</strong>
                  <span>{c.nivel} · {c.sector}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function DistritoLogo({ codigo }: { codigo: string }) {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    return (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="var(--blue-dark)">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
      </svg>
    )
  }

  return (
    <img
      src={`/assets/img/distrito_${codigo}.png`}
      alt={codigo}
      style={{ width: '44px', height: '44px', objectFit: 'contain', borderRadius: '8px' }}
      onError={() => setImgError(true)}
    />
  )
}

function DistritoLogoLarge({ codigo }: { codigo: string }) {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    return (
      <svg viewBox="0 0 24 24" width="40" height="40" fill="var(--blue-dark)">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
      </svg>
    )
  }

  return (
    <img
      src={`/assets/img/distrito_${codigo}.png`}
      alt={codigo}
      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      onError={() => setImgError(true)}
    />
  )
}

export default function DistritosSection({ distritos }: { distritos?: DistritoItem[] }) {
  // Merge distritos from content.json with defaultDistritos.
  // IMPORTANT: Numeric stats (centros, privados, publicos, matricula) always come from
  // defaultDistritos (official source of truth) to prevent wrong DB values from overriding them.
  // Only admin-editable text fields (director, descripcion, direccion, telefono, email) use DB values.
  const list = distritos && distritos.length > 0
    ? distritos.map(d => {
        const defaultDist = defaultDistritos.find(item => item.codigo === d.codigo || item.id === d.id);
        return {
          ...defaultDist,
          ...d,
          // Always use defaultDistritos for official numeric stats (source of truth)
          centros: defaultDist?.centros ?? d.centros,
          privados: defaultDist?.privados ?? d.privados,
          publicos: defaultDist?.publicos ?? d.publicos,
          semioficiales: defaultDist?.semioficiales ?? d.semioficiales,
          matricula_privada: defaultDist?.matricula_privada ?? d.matricula_privada,
          matricula_publica: defaultDist?.matricula_publica ?? d.matricula_publica,
          centros_educativos: d.centros_educativos || defaultDist?.centros_educativos || []
        } as DistritoItem;
      })
    : defaultDistritos;
  const [selected, setSelected] = useState<DistritoItem | null>(null)

  const openModal = (e: React.MouseEvent, dist: DistritoItem) => {
    e.stopPropagation()
    setSelected(dist)
  }

  const closeModal = () => setSelected(null)

  return (
    <section id="distritos" className="section programs-section" aria-label="6 Distritos Educativos de la Regional 15">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/></svg>
            Organigrama
          </span>
          <h2>Estructura Orgánica de la Regional 15</h2>
          <p>La Regional 15 supervisa y coordina la educación en seis distritos que abarcan el Gran Santo Domingo, desde Los Alcarrizos hasta Pedro Brand.</p>
          <div className="section-divider"></div>
        </div>

        {/* ===================== DESGLOSE TABLE ===================== */}
        <div className="animate-on-scroll" style={{ marginBottom: '36px', overflowX: 'auto' }}>
          <table style={{
            width: '100%', borderCollapse: 'collapse', fontSize: '.85rem',
            borderRadius: '12px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
          }}>
            <thead>
              <tr style={{ background: 'var(--blue-dark)', color: '#fff' }}>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600 }}>Distrito</th>
                <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 600 }}>Privados</th>
                <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 600 }}>Públicos / Semioficiales</th>
                <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 600 }}>Total Centros</th>
                <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 600 }}>Matrícula Privada</th>
                <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 600 }}>Matrícula Pública</th>
              </tr>
            </thead>
            <tbody>
              {list.map((d, i) => (
                <tr key={d.id} style={{
                  background: i % 2 === 0 ? 'var(--card-bg)' : 'var(--bg-alt)',
                  borderBottom: '1px solid var(--gray-light)',
                  transition: 'background 0.15s',
                  cursor: 'pointer',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--gray-light)'}
                  onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? 'var(--card-bg)' : 'var(--bg-alt)'}
                  onClick={(e) => openModal(e, d)}
                >
                  <td style={{ padding: '10px 16px', fontWeight: 600, color: 'var(--text-main)' }}>
                    {d.codigo} — {d.nombre}
                  </td>
                  <td style={{ padding: '10px 16px', textAlign: 'center', color: '#d97706' }}>{d.privados}</td>
                  <td style={{ padding: '10px 16px', textAlign: 'center', color: '#16a34a' }}>{d.publicos + d.semioficiales}</td>
                  <td style={{ padding: '10px 16px', textAlign: 'center', fontWeight: 700, color: 'var(--blue-dark)' }}>{d.centros}</td>
                  <td style={{ padding: '10px 16px', textAlign: 'center', color: '#d97706' }}>{(d.matricula_privada || 0).toLocaleString()}</td>
                  <td style={{ padding: '10px 16px', textAlign: 'center', color: '#16a34a' }}>{(d.matricula_publica || 0).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr style={{ background: 'var(--blue-dark)', color: '#fff', fontWeight: 700 }}>
                <td style={{ padding: '12px 16px' }}>TOTAL</td>
                <td style={{ padding: '12px 16px', textAlign: 'center' }}>{list.reduce((a, d) => a + d.privados, 0)}</td>
                <td style={{ padding: '12px 16px', textAlign: 'center' }}>{list.reduce((a, d) => a + d.publicos + d.semioficiales, 0)}</td>
                <td style={{ padding: '12px 16px', textAlign: 'center' }}>{list.reduce((a, d) => a + d.centros, 0)}</td>
                <td style={{ padding: '12px 16px', textAlign: 'center' }}>{list.reduce((a, d) => a + (d.matricula_privada || 0), 0).toLocaleString()}</td>
                <td style={{ padding: '12px 16px', textAlign: 'center' }}>{list.reduce((a, d) => a + (d.matricula_publica || 0), 0).toLocaleString()}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* ===================== BAR CHARTS ===================== */}
        <div className="animate-on-scroll" style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--blue-dark)', marginBottom: '20px', textAlign: 'center' }}>Centros Educativos: Público vs Privado</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {list.map((d) => {
              const totalCentros = d.centros || 1
              const pubPct = ((d.publicos + d.semioficiales) / totalCentros * 100).toFixed(1)
              const privPct = (d.privados / totalCentros * 100).toFixed(1)
              return (
                <div key={d.id + '-bar'} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ minWidth: '150px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-main)', textAlign: 'right' }}>{d.codigo} {d.nombre}</span>
                  <div style={{ flex: 1, display: 'flex', height: '28px', borderRadius: '6px', overflow: 'hidden', background: '#f1f5f9' }}>
                    <div style={{ width: `${pubPct}%`, background: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.7rem', fontWeight: 700, transition: 'width 0.5s', minWidth: 'fit-content', padding: '0 6px' }}>
                      {d.publicos + d.semioficiales}
                    </div>
                    <div style={{ width: `${privPct}%`, background: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.7rem', fontWeight: 700, transition: 'width 0.5s', minWidth: 'fit-content', padding: '0 6px' }}>
                      {d.privados}
                    </div>
                  </div>
                  <span style={{ minWidth: '60px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{totalCentros} total</span>
                </div>
              )
            })}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ minWidth: '150px', fontSize: '0.8rem', fontWeight: 700, color: 'var(--blue-dark)', textAlign: 'right' }}>TOTAL</span>
              <div style={{ flex: 1, display: 'flex', height: '32px', borderRadius: '6px', overflow: 'hidden' }}>
                <div style={{ width: '43.5%', background: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.8rem', fontWeight: 700 }}>627 Púb.</div>
                <div style={{ width: '56.5%', background: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.8rem', fontWeight: 700 }}>816 Priv.</div>
              </div>
              <span style={{ minWidth: '60px', fontSize: '0.8rem', fontWeight: 700, color: 'var(--blue-dark)' }}>1,443</span>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '8px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#16a34a', display: 'inline-block' }} /> Público / Semioficial</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#d97706', display: 'inline-block' }} /> Privado</span>
          </div>
        </div>

        <div className="animate-on-scroll" style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--blue-dark)', marginBottom: '20px', textAlign: 'center' }}>Matrícula de Estudiantes: Pública vs Privada</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {list.map((d) => {
              const totalMat = (d.matricula_publica || 0) + (d.matricula_privada || 0)
              const pubPct = totalMat > 0 ? ((d.matricula_publica || 0) / totalMat * 100).toFixed(1) : 0
              const privPct = totalMat > 0 ? ((d.matricula_privada || 0) / totalMat * 100).toFixed(1) : 0
              return (
                <div key={d.id + '-bar2'} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ minWidth: '150px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-main)', textAlign: 'right' }}>{d.codigo} {d.nombre}</span>
                  <div style={{ flex: 1, display: 'flex', height: '28px', borderRadius: '6px', overflow: 'hidden', background: '#f1f5f9' }}>
                    <div style={{ width: `${pubPct}%`, background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.7rem', fontWeight: 700, transition: 'width 0.5s', minWidth: 'fit-content', padding: '0 6px' }}>
                      {(d.matricula_publica || 0).toLocaleString()}
                    </div>
                    <div style={{ width: `${privPct}%`, background: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.7rem', fontWeight: 700, transition: 'width 0.5s', minWidth: 'fit-content', padding: '0 6px' }}>
                      {(d.matricula_privada || 0).toLocaleString()}
                    </div>
                  </div>
                  <span style={{ minWidth: '60px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{totalMat.toLocaleString()} total</span>
                </div>
              )
            })}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ minWidth: '150px', fontSize: '0.8rem', fontWeight: 700, color: 'var(--blue-dark)', textAlign: 'right' }}>TOTAL</span>
              <div style={{ flex: 1, display: 'flex', height: '32px', borderRadius: '6px', overflow: 'hidden' }}>
                <div style={{ width: '64.4%', background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.8rem', fontWeight: 700 }}>271,676 Púb.</div>
                <div style={{ width: '35.6%', background: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.8rem', fontWeight: 700 }}>150,471 Priv.</div>
              </div>
              <span style={{ minWidth: '60px', fontSize: '0.8rem', fontWeight: 700, color: 'var(--blue-dark)' }}>422,147</span>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '8px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#2563eb', display: 'inline-block' }} /> Matrícula Pública</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#d97706', display: 'inline-block' }} /> Matrícula Privada</span>
          </div>
        </div>

        {/* ===================== ORGANIGRAMA VISUAL ===================== */}
        <div className="org-chart animate-on-scroll" style={{ marginBottom: '40px' }}>
          <div className="org-node org-root">
            <div className="org-card" style={{ cursor: 'default' }}>
              <div className="org-avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img
                  src="/assets/img/FotoNueva.jpeg"
                  alt="Director Regional"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
                />
              </div>
              <div className="org-info">
                <span className="org-codigo">Regional 15</span>
                <h3 className="org-nombre">Dirección Regional de Educación 15</h3>
                <span className="org-cargo">Ministerio de Educación de la República Dominicana</span>
              </div>
              <div className="org-meta">
                <span>{list.length} Distritos</span>
              </div>
            </div>

            <div className="org-connector">
              <div className="org-line-v"></div>
              <div style={{ position: 'relative', width: '70%', maxWidth: '900px', height: '2px', background: 'var(--blue-mid)', opacity: 0.3, margin: '0 auto' }}>
                {list.map((_, i) => (
                  <div key={i} className="org-line-v short" style={{
                    position: 'absolute',
                    left: `${(i + 0.5) / list.length * 100}%`,
                    transform: 'translateX(-50%)',
                    bottom: '-20px',
                    height: '20px',
                  }} />
                ))}
              </div>
            </div>

            <div className="org-children">
              {list.map((d) => (
                <div className="org-node" key={d.id}>
                  <div className="org-card distrito" onClick={(e) => openModal(e, d)}>
                    <div className="org-card-top">
                      <div className="distrito-logo-mini">
                        <DistritoLogo codigo={d.codigo} />
                      </div>
                      <div className="org-info">
                        <span className="org-codigo">{d.codigo}</span>
                        <h4 className="org-nombre small">{d.nombre}</h4>
                      </div>
                      <span className="org-badge">{d.centros} centros</span>
                    </div>
                    <p className="org-desc">{d.descripcion}</p>
                    <button className="org-btn" onClick={(e) => { e.stopPropagation(); openModal(e, d); }}>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                      Ver Detalles
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {selected && (
          <div className="org-overlay" onClick={closeModal} role="dialog" aria-modal="true" aria-label={`Información del Distrito ${selected.codigo}`}>
            <div className="org-modal" onClick={e => e.stopPropagation()}>
              <button className="org-modal-close" onClick={closeModal} type="button" aria-label="Cerrar">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>

              <div className="org-modal-head">
                <div style={{ width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(0,56,118,0.06), rgba(0,91,170,0.1))', borderRadius: '12px', border: '1px solid rgba(0,56,118,0.12)', overflow: 'hidden', flexShrink: 0 }}>
                  <DistritoLogoLarge codigo={selected.codigo} />
                </div>
                <div>
                  <span className="org-codigo">Distrito {selected.codigo}</span>
                  <h2>{selected.nombre}</h2>
                  <p className="org-modal-sub">{selected.centros} centros educativos</p>
                </div>
              </div>

              <div className="org-modal-body">
                <div className="org-modal-col">
                  <h4>Información del Distrito</h4>
                  <div className="org-info-row">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--blue-mid)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span><strong>Ubicación:</strong> {selected.direccion}</span>
                  </div>
                  <div className="org-info-row">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--blue-mid)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.19 11.8 19.79 19.79 0 0 1 1.12 3.13 2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <span><strong>Teléfono:</strong> {selected.telefono}</span>
                  </div>
                  <div className="org-info-row">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--blue-mid)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    <span><strong>Email:</strong> {selected.email}</span>
                  </div>

                  <h4 style={{ marginTop: '20px' }}>Director del Distrito</h4>
                  <div className="org-director-card">
                    <div className="org-director-avatar">
                      <svg viewBox="0 0 24 24" width="28" height="28" fill="var(--blue-mid)"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                    </div>
                    <div>
                      <strong>{selected.director}</strong>
                      <span style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '2px' }}>Director Distrital</span>
                    </div>
                  </div>
                </div>

                <div className="org-modal-col">
                  <h4 style={{ marginTop: 0 }}>Desglose de Centros Educativos</h4>
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: '100px', background: '#f0fdf4', borderRadius: '10px', padding: '14px', border: '1px solid #dcfce7', textAlign: 'center' }}>
                      <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#16a34a' }}>{selected.publicos + selected.semioficiales}</div>
                      <div style={{ fontSize: '.75rem', color: '#166534', fontWeight: 600, marginTop: '4px' }}>Públicos / Semioficiales</div>
                    </div>
                    <div style={{ flex: 1, minWidth: '100px', background: '#fffbeb', borderRadius: '10px', padding: '14px', border: '1px solid #fef3c7', textAlign: 'center' }}>
                      <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#d97706' }}>{selected.privados}</div>
                      <div style={{ fontSize: '.75rem', color: '#92400e', fontWeight: 600, marginTop: '4px' }}>Privados</div>
                    </div>
                    <div style={{ flex: 1, minWidth: '100px', background: '#eff6ff', borderRadius: '10px', padding: '14px', border: '1px solid #dbeafe', textAlign: 'center' }}>
                      <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#2563eb' }}>{selected.centros}</div>
                      <div style={{ fontSize: '.75rem', color: '#1e40af', fontWeight: 600, marginTop: '4px' }}>Total Centros</div>
                    </div>
                  </div>

                  <h4>Matrícula de Estudiantes</h4>
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: '100px', background: '#f0fdf4', borderRadius: '10px', padding: '14px', border: '1px solid #dcfce7', textAlign: 'center' }}>
                      <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#16a34a' }}>{(selected.matricula_publica || 0).toLocaleString()}</div>
                      <div style={{ fontSize: '.75rem', color: '#166534', fontWeight: 600, marginTop: '4px' }}>Matrícula Pública</div>
                    </div>
                    <div style={{ flex: 1, minWidth: '100px', background: '#fffbeb', borderRadius: '10px', padding: '14px', border: '1px solid #fef3c7', textAlign: 'center' }}>
                      <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#d97706' }}>{(selected.matricula_privada || 0).toLocaleString()}</div>
                      <div style={{ fontSize: '.75rem', color: '#92400e', fontWeight: 600, marginTop: '4px' }}>Matrícula Privada</div>
                    </div>
                    <div style={{ flex: 1, minWidth: '100px', background: '#eff6ff', borderRadius: '10px', padding: '14px', border: '1px solid #dbeafe', textAlign: 'center' }}>
                      <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#2563eb' }}>{((selected.matricula_publica || 0) + (selected.matricula_privada || 0)).toLocaleString()}</div>
                      <div style={{ fontSize: '.75rem', color: '#1e40af', fontWeight: 600, marginTop: '4px' }}>Total Estudiantes</div>
                    </div>
                  </div>

                  <h4>Centros Educativos ({selected.centros} totales)</h4>
                  <SchoolList centros={selected.centros_educativos || []} />
                  <p className="org-schools-note">* Mostrando {selected.centros_educativos ? selected.centros_educativos.length : 0} de {selected.centros} centros registrados. Consulte al distrito para el listado completo.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
