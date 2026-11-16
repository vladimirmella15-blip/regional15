// Agrega al contenido las fotos más recientes y deja la galería ordenada
// de lo más nuevo a lo más antiguo.
//
// Las fotos nuevas llevan `fecha`. Las anteriores no la tienen y se invierten
// una sola vez para que las más recientes de ese bloque también queden primero.
//
// Uso: node scripts/agregar-multimedia-reciente.js

const fs = require('fs')
const path = require('path')

const ARCHIVO = path.join(__dirname, '..', 'public', 'data', 'content.json')

const nuevas = [
  {
    id: 'gal-2026-11-16-liderazgo',
    imagen: 'assets/img/liderazgo_con_proposito_2026_11_16.png',
    titulo: 'Liderazgo con propósito: mensaje del director Eddy Chávez Placencio',
    fecha: '2026-11-16',
    ajuste: 'contain',
  },
  {
    id: 'gal-2026-11-16-encuentro',
    imagen: 'assets/img/encuentro_institucional_2026_11_16.jpg',
    titulo: 'Encuentro institucional de la Regional 15',
    fecha: '2026-11-16',
  },
  {
    id: 'gal-2026-11-11-equipo',
    imagen: 'assets/img/encuentro_equipo_2026_11_11.jpg',
    titulo: 'Jornada de trabajo con el equipo regional y aliados de la educación',
    fecha: '2026-11-11',
  },
  {
    id: 'gal-2026-10-01-asamblea-1',
    imagen: 'assets/img/asamblea_15_05_1.jpg',
    titulo: 'Asamblea de Directores del Distrito 15-05',
    fecha: '2026-10-01',
  },
  {
    id: 'gal-2026-10-01-asamblea-2',
    imagen: 'assets/img/asamblea_15_05_2.jpg',
    titulo: 'Palabras del director regional en la Asamblea del Distrito 15-05',
    fecha: '2026-10-01',
  },
  {
    id: 'gal-2026-10-01-asamblea-3',
    imagen: 'assets/img/asamblea_15_05_3.jpg',
    titulo: 'Directores y directoras del Distrito 15-05 durante la asamblea',
    fecha: '2026-10-01',
  },
  {
    id: 'gal-2026-10-01-asamblea-4',
    imagen: 'assets/img/asamblea_15_05_4.jpg',
    titulo: 'Autoridades educativas en la Asamblea del Distrito 15-05',
    fecha: '2026-10-01',
  },
  {
    id: 'gal-2026-10-01-minerva-1',
    imagen: 'assets/img/minerva_guzman_1.png',
    titulo: 'Inauguración de la Escuela Minerva Guzmán',
    fecha: '2026-10-01',
  },
  {
    id: 'gal-2026-10-01-minerva-2',
    imagen: 'assets/img/minerva_guzman_2.png',
    titulo: 'Palabras del director Eddy Chávez en la inauguración de la Escuela Minerva Guzmán',
    fecha: '2026-10-01',
  },
  {
    id: 'gal-2026-10-01-minerva-3',
    imagen: 'assets/img/minerva_guzman_3.jpeg',
    titulo: 'Nuevas instalaciones de la Escuela Minerva Guzmán',
    fecha: '2026-10-01',
  },
  {
    id: 'gal-2026-10-01-minerva-4',
    imagen: 'assets/img/minerva_guzman_4.png',
    titulo: 'Autoridades y comunidad educativa en la inauguración de la Escuela Minerva Guzmán',
    fecha: '2026-10-01',
  },
  {
    id: 'gal-2026-10-01-minerva-5',
    imagen: 'assets/img/minerva_guzman_5.png',
    titulo: 'Estudiantes durante el acto de inauguración de la Escuela Minerva Guzmán',
    fecha: '2026-10-01',
  },
  {
    id: 'gal-2026-10-01-complejo-1',
    imagen: 'assets/img/complejo_pedro_martinez_1.jpeg',
    titulo: 'Acto de inauguración del Complejo Educativo y Deportivo Pedro Martínez',
    fecha: '2026-10-01',
  },
  {
    id: 'gal-2026-10-01-complejo-2',
    imagen: 'assets/img/complejo_pedro_martinez_2.jpeg',
    titulo: 'Autoridades durante la inauguración del Complejo Pedro Martínez',
    fecha: '2026-10-01',
  },
  {
    id: 'gal-2026-10-01-complejo-3',
    imagen: 'assets/img/complejo_pedro_martinez_3.jpeg',
    titulo: 'Invitados especiales en la inauguración del Complejo Pedro Martínez',
    fecha: '2026-10-01',
  },
  {
    id: 'gal-2026-10-01-complejo-4',
    imagen: 'assets/img/complejo_pedro_martinez_4.jpeg',
    titulo: 'Comunidad educativa celebra la inauguración del Complejo Pedro Martínez',
    fecha: '2026-10-01',
  },
  {
    id: 'gal-2026-10-01-complejo-5',
    imagen: 'assets/img/complejo_pedro_martinez_5.jpeg',
    titulo: 'Estudiantes en el acto inaugural del Complejo Pedro Martínez',
    fecha: '2026-10-01',
  },
  {
    id: 'gal-2026-10-01-complejo-6',
    imagen: 'assets/img/complejo_pedro_martinez_6.jpeg',
    titulo: 'Detalles del nuevo Complejo Educativo y Deportivo Pedro Martínez',
    fecha: '2026-10-01',
  },
  {
    id: 'gal-2026-10-01-complejo-7',
    imagen: 'assets/img/complejo_pedro_martinez_7.jpeg',
    titulo: 'Autoridades recorren las instalaciones del Complejo Pedro Martínez',
    fecha: '2026-10-01',
  },
  {
    id: 'gal-2026-10-01-complejo-8',
    imagen: 'assets/img/complejo_pedro_martinez_8.jpeg',
    titulo: 'Acto protocolar de inauguración del Complejo Pedro Martínez',
    fecha: '2026-10-01',
  },
  {
    id: 'gal-2026-10-01-complejo-9',
    imagen: 'assets/img/complejo_pedro_martinez_9.jpeg',
    titulo: 'Cierre del acto de inauguración del Complejo Pedro Martínez',
    fecha: '2026-10-01',
  },
  {
    id: 'gal-2026-10-01-mesa-1',
    imagen: 'assets/img/mesa_dialogo_1.jpeg',
    titulo: 'Mesa de Diálogo con la comunidad educativa de la Regional 15',
    fecha: '2026-10-01',
  },
  {
    id: 'gal-2026-10-01-mesa-2',
    imagen: 'assets/img/mesa_dialogo_2.jpeg',
    titulo: 'Intervención del director regional en la Mesa de Diálogo',
    fecha: '2026-10-01',
  },
  {
    id: 'gal-2026-10-01-mesa-3',
    imagen: 'assets/img/mesa_dialogo_3.jpeg',
    titulo: 'Participación de la comunidad educativa en la Mesa de Diálogo',
    fecha: '2026-10-01',
  },
  {
    id: 'gal-2026-10-01-mesa-4',
    imagen: 'assets/img/mesa_dialogo_4.jpeg',
    titulo: 'Diálogo y escucha activa con los actores educativos',
    fecha: '2026-10-01',
  },
  {
    id: 'gal-2026-10-01-mesa-5',
    imagen: 'assets/img/mesa_dialogo_5.jpeg',
    titulo: 'Conclusiones y compromisos de la Mesa de Diálogo',
    fecha: '2026-10-01',
  },
]

const contenido = JSON.parse(fs.readFileSync(ARCHIVO, 'utf8'))
const galeriaActual = Array.isArray(contenido.galeria) ? contenido.galeria : []

const nuevasRutas = new Set(nuevas.map(item => item.imagen))
const anteriores = galeriaActual.filter(item => !nuevasRutas.has(item.imagen))

// La galería anterior estaba en orden cronológico ascendente. Al invertirla,
// sus fotos más recientes también quedan primero.
const anterioresDesc = [...anteriores].reverse()

contenido.galeria = [...nuevas, ...anterioresDesc]
contenido.config = contenido.config || {}
contenido.config.ultima_actualizacion = '2026-11-16'

fs.writeFileSync(ARCHIVO, JSON.stringify(contenido, null, 2) + '\n', 'utf8')

console.log(`Fotos nuevas: ${nuevas.length}`)
console.log(`Fotos anteriores conservadas: ${anterioresDesc.length}`)
console.log(`Total en galería: ${contenido.galeria.length}`)
