export interface FAQItem {
  id: string
  question: string
  answer: string
  keywords: string[]
}

interface FAQCategory {
  category: string
  items: FAQItem[]
}

const faqData: FAQCategory[] = [
  {
    category: 'Información General',
    items: [
      {
        id: 'horario',
        question: '¿Cuál es el horario de atención?',
        answer: 'La Regional 15 atiende de lunes a viernes de 8:00 a.m. a 4:30 p.m. en su sede principal.',
        keywords: ['horario', 'horarios', 'atención', 'abierto', 'abren', 'cierran', 'hora'],
      },
      {
        id: 'direccion',
        question: '¿Dónde está ubicada la Regional 15?',
        answer: 'La Regional 15 de Educación está ubicada en Santo Domingo Oeste. Puedes ver la dirección exacta y un mapa en la sección de contacto de nuestra página web.',
        keywords: ['dirección', 'ubicación', 'dónde', 'mapa', 'lugar', 'sede'],
      },
      {
        id: 'telefono',
        question: '¿Cuál es el número de teléfono?',
        answer: 'Puedes comunicarte con la Regional 15 a través del formulario de contacto en nuestra web o llamando a los teléfonos que aparecen en la sección de contacto.',
        keywords: ['teléfono', 'llamar', 'contacto', 'comunicarse', 'número'],
      },
      {
        id: 'director',
        question: '¿Quién es el director de la Regional 15?',
        answer: 'El director de la Regional 15 es el Lic. Eddy Omar Chávez. Puedes ver más información en la sección de Director de nuestra página web.',
        keywords: ['director', 'quién', 'eddy', 'chávez', 'encargado', 'regional'],
      },
    ],
  },
  {
    category: 'Distritos',
    items: [
      {
        id: 'distritos-info',
        question: '¿Cuántos distritos tiene la Regional 15?',
        answer: 'La Regional 15 cuenta con 6 distritos educativos: 15-01, 15-02, 15-03, 15-04, 15-05 y 15-06. Cada distrito tiene sus propios centros educativos y personal administrativo.',
        keywords: ['distritos', 'cuántos', 'cantidad', '15-01', '15-02', '15-03', '15-04', '15-05', '15-06'],
      },
      {
        id: 'distrito-centros',
        question: '¿Cómo saber a qué distrito pertenece una escuela?',
        answer: 'Puedes consultar la sección de Distritos en nuestra página web donde encontrarás el listado completo de los distritos y los centros educativos que le corresponden a cada uno.',
        keywords: ['pertenece', 'escuela', 'centro', 'distrito', 'zona'],
      },
    ],
  },
  {
    category: 'Servicios',
    items: [
      {
        id: 'servicios-ofrecidos',
        question: '¿Qué servicios ofrece la Regional 15?',
        answer: 'La Regional 15 ofrece servicios educativos a través de sus distritos escolares, incluyendo supervisión de centros educativos, programas de formación docente, orientación académica y administrativa para las escuelas de la región.',
        keywords: ['servicios', 'ofrece', 'programas', 'educativos'],
      },
      {
        id: 'documentos',
        question: '¿Dónde puedo encontrar documentos y formularios?',
        answer: 'Los documentos y formularios están disponibles en la sección de Transparencia de nuestra página web. Allí encontrarás planificaciones, informes, POA y otros recursos.',
        keywords: ['documentos', 'formularios', 'transparencia', 'planes', 'informes', 'poa'],
      },
    ],
  },
  {
    category: 'Eventos y Calendario',
    items: [
      {
        id: 'proximos-eventos',
        question: '¿Cómo puedo ver los próximos eventos?',
        answer: 'Puedes consultar el calendario de eventos en nuestra página principal, donde publicamos todas las actividades, talleres y reuniones programadas.',
        keywords: ['eventos', 'calendario', 'próximos', 'actividades', 'talleres', 'reuniones'],
      },
      {
        id: 'galeria',
        question: '¿Dónde puedo ver fotos de los eventos?',
        answer: 'Las fotos y videos de nuestros eventos están disponibles en la sección de Galería de nuestra página web.',
        keywords: ['fotos', 'galería', 'imágenes', 'videos', 'eventos'],
      },
    ],
  },
  {
    category: 'Contacto',
    items: [
      {
        id: 'contacto-form',
        question: '¿Cómo puedo contactar a la Regional 15?',
        answer: 'Puedes contactarnos a través del formulario de contacto en nuestra página web, o visitando nuestras oficinas en horario laboral. También puedes seguirnos en Instagram para estar al tanto de nuestras novedades.',
        keywords: ['contactar', 'contacto', 'formulario', 'mensaje', 'comunicarse'],
      },
      {
        id: 'solicitud-salon',
        question: '¿Cómo solicito el uso del salón de eventos?',
        answer: 'Puedes realizar la solicitud a través del formulario de Solicitud de Salón disponible en nuestra página web. Debes completar los datos requeridos y esperar la respuesta de la administración.',
        keywords: ['salón', 'eventos', 'solicitar', 'reservar', 'uso', 'salon'],
      },
    ],
  },
  {
    category: 'Transparencia',
    items: [
      {
        id: 'poa',
        question: '¿Qué es el POA y dónde puedo verlo?',
        answer: 'El POA (Plan Operativo Anual) es el instrumento de planificación donde se detallan las metas, indicadores y actividades de la Regional para cada año. Puedes consultarlo en la sección de Transparencia de nuestra web.',
        keywords: ['poa', 'plan', 'operativo', 'anual', 'metas', 'indicadores', 'transparencia'],
      },
      {
        id: 'rendicion-cuentas',
        question: '¿Dónde puedo ver los informes de gestión?',
        answer: 'Los informes de gestión, incluyendo los informes trimestrales del POA y otros documentos de rendición de cuentas, están publicados en la sección de Transparencia.',
        keywords: ['informes', 'gestión', 'rendición', 'cuentas', 'trimestral', 'transparencia'],
      },
    ],
  },
]

export default faqData
