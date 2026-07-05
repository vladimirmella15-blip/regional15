import { getDb } from '../lib/db'
import { initSchema } from '../lib/db-schema'

const db = getDb()
initSchema(db)

const directorData = {
  nombre: 'Eddy Chávez Placencio',
  titulo: 'Director de la Regional 15, MINERD, M.A.',
  subtitulo: 'Líder en Transformación Educativa',
  foto: '/assets/img/FotoNueva.jpeg',
  fecha_nacimiento: '6 de enero de 1977',
  lugar_nacimiento: 'El Calmito, San Francisco de Macorís, Provincia Duarte, República Dominicana',
  resumen_ejecutivo: `Nacido el 6 de enero de 1977 en la comunidad El Caimito, municipio San Francisco de Macorís, provincia Duarte, República Dominicana. El Lic. Eddy Chávez Placencio, M.A., es un líder y educador profundamente reconocido y querido por la sociedad educativa del Gran Santo Domingo por su entrega incansable al quehacer docente y de gestión.

Realizó sus estudios primarios en el Colegio San Antonio de Padua en Bonao y sus estudios secundarios en el Liceo Nocturno Francisco Ulises Domínguez en Cristo Rey, Santo Domingo.

A lo largo de su destacada carrera, ha asumido roles de alta trascendencia en el sistema educativo dominicano, sirviendo con excelencia como profesor, coordinador docente del Liceo Matutino Benito Juárez, director del Liceo Nocturno Francisco Ulises Domínguez y director del Distrito Educativo 15-04. Actualmente, se desempeña con liderazgo transformacional como Director de la Regional 15 del Ministerio de Educación (MINERD), donde ha impulsado con éxito la innovación pedagógica, la inclusión social y la calidad administrativa en los seis distritos bajo su jurisdicción.

Bajo su dirección estratégica, la Regional 15 alcanzó un hito histórico al ser galardonada con la Medalla de Bronce en el Premio Regional a la Calidad Educativa (PRECE 2025), un reconocimiento del MAP (Ministerio de Administración Pública) a las buenas prácticas y la eficiencia de la gestión escolar. Su devoción y compromiso con la excelencia le han valido el aprecio sincero de maestros, padres y alumnos, siendo considerado un pilar fundamental en la transformación educativa del país.

Además de su labor en las aulas y oficinas de supervisión, ha recibido múltiples reconocimientos por su labor social y comunitaria. Fue distinguido como Hijo Distinguido del Sector Cristo Rey por la Fundación Cruz Jiminián, y recibió una mención especial de honor por parte del Consejo de Regidores de Pantoja en enero de 2026, destacando su incansable dedicación a favor de la mejora continua del sistema de educación pública.

Es Licenciado en Educación, mención Informática (UNICARIBE), Licenciado en Informática (UNICARIBE) y Magíster en Organización y Gestión de Centros Educativos (INTEC). Cuenta con especializaciones y maestrías internacionales en Currículum y Tecnología Educativa por Nova Southeastern University (EE. UU.), Inducción Docente por la Universidad de Sevilla (España), Neurociencia Aplicada a la Educación por el Centro de Altos Estudios Universitarios (Argentina) y Acompañamiento Pedagógico en convenio con la Universidad Peruana de las Américas.

Su formación de carácter global se consolida con becas y pasantías en tecnología y e-learning en Corea del Sur, así como estancias formativas en España, Brasil, Alemania y Polonia. Actualmente, cursa el Doctorado en Educación con Especialidad en Planificación y Gestión en la Universidad Católica de Santo Domingo (UCSD).

Es un hombre profundamente arraigado en la fe católica, querido por su calidad humana y su firme vocación de servicio, compartiendo su vida familiar en matrimonio junto a sus tres hijos.

Eddy Chávez Placencio, M.A.
Director de la Regional 15, MINERD`,
  trayectoria: [
    'Director Regional 15 – MINERD',
    'Director Distrito Educativo 15-04',
    'Director Liceo Nocturno Francisco Ulises Domínguez',
    'Coordinador Docente, Liceo Matutino Benito Juárez',
  ],
  formacion: {
    doctorado: {
      titulo: 'Educación con Especialidad en Planificación y Gestión',
      institucion: 'Universidad Católica de Santo Domingo',
      estado: 'En curso',
    },
    maestrias: [
      { titulo: 'Maestría en Currículum y Tecnología Educativa', institucion: 'Nova Southeastern University, EE. UU.' },
      { titulo: 'Maestría en Administración y Gestión de Centros Educativos', institucion: 'INTEC' },
    ],
    licenciaturas: [
      { titulo: 'Licenciatura en Educación, Mención Informática', institucion: 'Universidad del Caribe (UNICARIBE)' },
      { titulo: 'Licenciatura en Informática', institucion: 'Universidad del Caribe (UNICARIBE)' },
    ],
    capacitaciones: [
      { titulo: 'Doctorado en Educación con Especialidad en Planificación y Gestión (en curso)', institucion: 'Universidad Católica de Santo Domingo' },
      { titulo: 'Acompañamiento Pedagógico', institucion: 'INTEC y Universidad de Sevilla, España' },
      { titulo: 'Neurociencia Aplicada a la Educación', institucion: 'Centro de Altos Estudios Universitarios, Argentina' },
      { titulo: 'Tecnología Aplicada a la Educación y Maestro 2.0', institucion: 'ISFODOSU' },
      { titulo: 'Formación Internacional en Innovación Educativa', institucion: 'Corea del Sur, España, Brasil, Alemania y Polonia' },
      { titulo: 'Cursos en E-learning', institucion: 'Corea del Sur' },
    ],
  },
  fortalezas: [
    'Liderazgo Transformacional',
    'Innovación Educativa',
    'Inclusión Social',
    'Gestión Estratégica',
    'Visión Global',
    'Tecnología Educativa',
  ],
  vision: 'Una educación de calidad, inclusiva e innovadora que transforme la vida de todos los estudiantes de la Regional 15 y contribuya al desarrollo sostenible de la sociedad dominicana.',
  mision: 'Liderar la gestión educativa con excelencia, promoviendo la innovación pedagógica, la inclusión, la equidad y la tecnología como herramientas para el aprendizaje significativo.',
  valores: ['Excelencia', 'Inclusión', 'Innovación', 'Integridad', 'Compromiso Social'],
}

const existing = db.prepare("SELECT data FROM director WHERE id = 'main'").get() as any

if (existing) {
  db.prepare("UPDATE director SET data = ?, updated_at = datetime('now') WHERE id = 'main'").run(JSON.stringify(directorData))
  console.log('✓ Director data updated')
} else {
  db.prepare("INSERT INTO director (id, data) VALUES ('main', ?)").run(JSON.stringify(directorData))
  console.log('✓ Director data inserted')
}

console.log('✓ Seed de director completado')
