// Videoteca de la Regional 15.
//
// El orden de la lista no manda: VideoGallery ordena por `fecha` de más
// reciente a más antigua. Así, cuando se agregue un video nuevo, basta con
// ponerle su fecha para que aparezca primero.

export interface VideoItem {
  id: string
  src: string
  poster?: string
  titulo: string
  descripcion: string
  fecha?: string
  orientacion?: 'vertical' | 'horizontal'
}

export const videos: VideoItem[] = [
  {
    id: 'vid-2026-11-12-1',
    src: '/assets/videos/novedades-2026-11-12-1.mp4',
    poster: '/assets/videos/posters/novedades-2026-11-12-1.jpg',
    titulo: 'Novedades de la Regional 15: mensaje y recorrido institucional',
    descripcion: 'Un recorrido por las instalaciones y los mensajes del equipo de la Regional 15 durante noviembre de 2026.',
    fecha: '2026-11-12',
    orientacion: 'vertical',
  },
  {
    id: 'vid-2026-11-12-2',
    src: '/assets/videos/novedades-2026-11-12-2.mp4',
    poster: '/assets/videos/posters/novedades-2026-11-12-2.jpg',
    titulo: 'Inducción de la plataforma Edyntra al equipo regional',
    descripcion: 'Jornada de inducción y acompañamiento para el uso de la plataforma Edyntra en los procesos de la Regional 15.',
    fecha: '2026-11-12',
    orientacion: 'vertical',
  },
  {
    id: 'vid-complejo-pedro-martinez',
    src: '/assets/videos/complejo-pedro-martinez-inauguracion.mp4',
    poster: '/assets/videos/posters/complejo-pedro-martinez-inauguracion.jpg',
    titulo: 'Inauguración del Complejo Educativo y Deportivo Pedro Martínez',
    descripcion: 'Autoridades, estudiantes y comunidad educativa durante el acto inaugural del Complejo Educativo y Deportivo Pedro Martínez.',
    fecha: '2026-10-01',
  },
  {
    id: 'vid-huertos-escolares',
    src: '/assets/videos/huertos-escolares.mp4',
    poster: '/assets/videos/posters/huertos-escolares.jpg',
    titulo: 'Huertos escolares: aprendizaje y sostenibilidad',
    descripcion: 'Estudiantes y docentes comparten cómo los huertos escolares fortalecen el aprendizaje y el cuidado del medio ambiente.',
    fecha: '2026-09-16',
  },
  {
    id: 'vid-inauguracion-huerto-costa-rica',
    src: '/assets/videos/inauguracion-huerto-costa-rica.mp4',
    poster: '/assets/videos/posters/inauguracion-huerto-costa-rica.jpg',
    titulo: 'Inauguración del huerto escolar de la Escuela Primaria de Costa Rica',
    descripcion: 'Apertura de un nuevo espacio de aprendizaje ambiental en la Escuela Primaria de Costa Rica.',
    fecha: '2026-09-16',
  },
  {
    id: 'vid-reconocimiento-huertos',
    src: '/assets/videos/reconocimiento-estudiantes-destacadas-huertos.mp4',
    poster: '/assets/videos/posters/reconocimiento-estudiantes-destacadas-huertos.jpg',
    titulo: 'Reconocimiento a estudiantes destacadas en los huertos escolares',
    descripcion: 'Estudiantes de la Regional 15 reciben reconocimiento por su compromiso con los huertos escolares.',
    fecha: '2026-09-16',
  },
  {
    id: 'vid-188-cdn',
    src: '/assets/videos/188.mp4',
    poster: '/assets/videos/posters/188.jpg',
    titulo: 'Entrevista en CDN: regreso a clases y novedades de la Regional 15',
    descripcion: 'La Regional 15 presenta los avances del regreso a clases y las novedades del año escolar 2026-2027.',
    fecha: '2026-09-01',
  },
  {
    id: 'vid-primera-semana',
    src: '/assets/videos/primera-semana-de-clase.mp4',
    poster: '/assets/videos/posters/primera-semana-de-clase.jpg',
    titulo: 'Primera semana de clases: alegría y compromiso',
    descripcion: 'Estudiantes, docentes y familias vivieron una primera semana de clases llena de entusiasmo y esperanza.',
    fecha: '2026-08-30',
  },
  {
    id: 'vid-ano-escolar-cuenta-regresiva',
    src: '/assets/videos/video-ano-escolar-2026.mp4',
    poster: '/assets/videos/posters/video-ano-escolar-2026.jpg',
    titulo: 'La cuenta regresiva para el inicio del año escolar 2026-2027',
    descripcion: 'La comunidad educativa se prepara para recibir un nuevo año escolar en la Regional 15.',
    fecha: '2026-08-30',
  },
  {
    id: 'vid-sheila-esther',
    src: '/assets/videos/ano-escolar-1505-estudiante-sheila-esther.mp4',
    poster: '/assets/videos/posters/ano-escolar-1505-estudiante-sheila-esther.jpg',
    titulo: 'Año escolar 1505: testimonio de la estudiante Sheila Esther',
    descripcion: 'Sheila Esther, estudiante del Distrito 15-05, comparte su experiencia al inicio del año escolar 2026-2027.',
    fecha: '2026-08-30',
  },
  {
    id: 'vid-dinamica-mochila',
    src: '/assets/videos/dinamica-1-que-hay-en-tu-mochila.mp4',
    poster: '/assets/videos/posters/dinamica-1-que-hay-en-tu-mochila.jpg',
    titulo: 'Dinámica #1: ¿Qué hay en tu mochila?',
    descripcion: 'Una actividad lúdica para conocer a los estudiantes y empezar el año escolar con buen ánimo.',
    fecha: '2026-08-30',
  },
  {
    id: 'vid-prepara-sabatino',
    src: '/assets/videos/video-prepara.mp4',
    poster: '/assets/videos/posters/video-prepara.jpg',
    titulo: 'Prepara Sabatino: bienvenida al año escolar 2026-2027',
    descripcion: 'El Centro Educativo Benito Juárez da la bienvenida a las familias del programa Prepara Sabatino.',
    fecha: '2026-08-30',
  },
  {
    id: 'vid-inscripcion',
    src: '/assets/videos/Incripcion.mp4',
    poster: '/assets/videos/posters/Incripcion.jpg',
    titulo: 'Invitación al proceso de inscripción del año escolar',
    descripcion: 'El director regional invita a las familias a completar el proceso de inscripción y asegurar el cupo de sus hijos.',
    fecha: '2026-07-01',
  },
]
