// Centros privados presentes en el padron oficial MINERD 2022-2024 que no aparecen en
// data/centros-privados.ts, cuya fuente es la "Relacion de Centros Educativos 2024-2025".
//
// Viven aqui, y no en el archivo generado, porque scripts/generate-centros-privados.js
// reescribe data/centros-privados.ts por completo. Matricula y nivel del periodo 20232024.
//
// Fuente: datos.gob.do - "Relacion de Centros Educativos de Republica Dominicana,
// periodo escolar 2022-2024" (dataset id centros-educativos-de-republica-dominicana).
// Analisis completo en docs/SONDEO_CENTROS_FALTANTES.md.

import { CentrosDistrito } from './centros'

export const centrosPrivadosAdicionalesPorDistrito: CentrosDistrito[] = [
  {
    codigo: '15-01',
    sigerd: '1501',
    nombre: 'Los Alcarrizos',
    centros: [
      // El padron lo registra como PUBLICO en 2022-2023 y como PRIVADO en 2023-2024.
      { codigo: '04918', nombre: 'ESCUELA DE SORDOS VIDA Y ESPERANZA', nivel: 'Inicial - Primaria', tipo: 'Privado', matricula: 19 },
    ],
  },
  {
    codigo: '15-02',
    sigerd: '1502',
    nombre: 'Santo Domingo Centro',
    centros: [
      { codigo: '05332', nombre: 'BELLO AMANECER', nivel: 'Inicial', tipo: 'Privado', matricula: 16 },
      { codigo: '12281', nombre: 'JARDIN DE NIÑOS DIVINA LUZ', nivel: 'Inicial', tipo: 'Privado', matricula: 25 },
    ],
  },
  {
    codigo: '15-03',
    sigerd: '1503',
    nombre: 'Santo Domingo Sur-Central',
    centros: [
      { codigo: '05079', nombre: 'DON MAX', nivel: 'Inicial - Primaria - Secundaria', tipo: 'Privado', matricula: 62 },
      { codigo: '05355', nombre: 'MAHATMA GANDHI', nivel: 'Inicial - Primaria - Secundaria', tipo: 'Privado', matricula: 187 },
      { codigo: '06232', nombre: 'CENTRO EDUCATIVO MLC SCHOOL', nivel: 'Inicial - Primaria - Secundaria', tipo: 'Privado', matricula: 142 },
    ],
  },
  {
    codigo: '15-04',
    sigerd: '1504',
    nombre: 'Santo Domingo Noroeste',
    centros: [
      { codigo: '13479', nombre: 'PASEO DE LA GRACIA DE DIOS', nivel: 'Inicial - Primaria', tipo: 'Privado', matricula: 18 },
      { codigo: '17145', nombre: 'CENTRO EDUCATIVO PEDAGOGICO CANAAN', nivel: 'Inicial - Primaria', tipo: 'Privado', matricula: 35 },
    ],
  },
  {
    codigo: '15-05',
    sigerd: '1505',
    nombre: 'Herrera',
    centros: [
      { codigo: '06099', nombre: 'CENTRO EDUCATIVO PROF. LUISA TAVAREZ DE DIAZ', nivel: 'Inicial - Primaria', tipo: 'Privado', matricula: 144 },
      { codigo: '09326', nombre: 'COLEGIO CRISTIANO ARCO DEL ARCA', nivel: 'Inicial - Primaria', tipo: 'Privado', matricula: 16 },
      { codigo: '09436', nombre: 'CARMELY', nivel: 'Inicial - Primaria', tipo: 'Privado', matricula: 14 },
      { codigo: '09450', nombre: 'MIRADOR DEL OESTE', nivel: 'Inicial - Primaria', tipo: 'Privado', matricula: 6 },
      { codigo: '10035', nombre: 'COLEGIO PSICOPEDAGOGICO PILAR INFANTIL', nivel: 'Inicial - Primaria', tipo: 'Privado', matricula: 16 },
      { codigo: '12665', nombre: 'COLEGIO LAS PALOMAS', nivel: 'Inicial - Primaria', tipo: 'Privado', matricula: 12 },
    ],
  },
  {
    codigo: '15-06',
    sigerd: '1506',
    nombre: 'Pedro Brand',
    centros: [
      { codigo: '16760', nombre: 'LA ESPERANZA', nivel: 'Inicial - Primaria', tipo: 'Privado', matricula: 25 },
    ],
  },
]