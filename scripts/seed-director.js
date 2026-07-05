// Seed script for director data
const Database = require('better-sqlite3')
const path = require('path')

const dbPath = path.join(__dirname, '..', 'data', 'regional15.db')
const db = new Database(dbPath)
db.pragma('journal_mode = WAL')

db.exec(`
  CREATE TABLE IF NOT EXISTS director (
    id TEXT PRIMARY KEY DEFAULT 'main',
    data TEXT NOT NULL DEFAULT '{}',
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  )
`)

const directorData = {
  nombre: 'Eddy Ch\u00e1vez Placencio',
  titulo: 'Director de la Regional 15, MINERD, M.A.',
  subtitulo: 'L\u00edder en Transformaci\u00f3n Educativa',
  foto: 'assets/img/FotoNueva.jpeg',
  fecha_nacimiento: '6 de enero de 1977',
  lugar_nacimiento: 'El Calmito, San Francisco de Macor\u00eds, Provincia Duarte, Rep\u00fablica Dominicana',
  resumen_ejecutivo: 'Nacido el 6 de enero de 1977 en la comunidad El Caimito, municipio San Francisco de Macor\u00eds, provincia Duarte, Rep\u00fablica Dominicana. El Lic. Eddy Ch\u00e1vez Placencio, M.A., es un l\u00edder y educador profundamente reconocido y querido por la sociedad educativa del Gran Santo Domingo por su entrega incansable al quehacer docente y de gesti\u00f3n.\n\nRealiz\u00f3 sus estudios primarios en el Colegio San Antonio de Padua en Bonao y sus estudios secundarios en el Liceo Nocturno Francisco Ulises Dom\u00ednguez en Cristo Rey, Santo Domingo.\n\nA lo largo de su destacada carrera, ha asumido roles de alta trascendencia en el sistema educativo dominicano, sirviendo con excelencia como profesor, coordinador docente del Liceo Matutino Benito Ju\u00e1rez, director del Liceo Nocturno Francisco Ulises Dom\u00ednguez y director del Distrito Educativo 15-04. Actualmente, se desempe\u00f1a con liderazgo transformacional como Director de la Regional 15 del Ministerio de Educaci\u00f3n (MINERD), donde ha impulsado con \u00e9xito la innovaci\u00f3n pedag\u00f3gica, la inclusi\u00f3n social y la calidad administrativa en los seis distritos bajo su jurisdicci\u00f3n.\n\nBajo su direcci\u00f3n estrat\u00e9gica, la Regional 15 alcanz\u00f3 un hito hist\u00f3rico al ser galardonada con la Medalla de Bronce en el Premio Regional a la Calidad Educativa (PRECE 2025), un reconocimiento del MAP (Ministerio de Administraci\u00f3n P\u00fablica) a las buenas pr\u00e1cticas y la eficiencia de la gesti\u00f3n escolar. Su devoci\u00f3n y compromiso con la excelencia le han valido el aprecio sincero de maestros, padres y alumnos, siendo considerado un pilar fundamental en la transformaci\u00f3n educativa del pa\u00eds.\n\nAdem\u00e1s de su labor en las aulas y oficinas de supervisi\u00f3n, ha recibido m\u00faltiples reconocimientos por su labor social y comunitaria. Fue distinguido como Hijo Distinguido del Sector Cristo Rey por la Fundaci\u00f3n Cruz Jimini\u00e1n, y recibi\u00f3 una menci\u00f3n especial de honor por parte del Consejo de Regidores de Pantoja en enero de 2026, destacando su incansable dedicaci\u00f3n a favor de la mejora continua del sistema de educaci\u00f3n p\u00fablica.\n\nEs Licenciado en Educaci\u00f3n, menci\u00f3n Inform\u00e1tica (UNICARIBE), Licenciado en Inform\u00e1tica (UNICARIBE) y Mag\u00edster en Organizaci\u00f3n y Gesti\u00f3n de Centros Educativos (INTEC). Cuenta con especializaciones y maestr\u00edas internacionales en Curr\u00edculum y Tecnolog\u00eda Educativa por Nova Southeastern University (EE. UU.), Inducci\u00f3n Docente por la Universidad de Sevilla (Espa\u00f1a), Neurociencia Aplicada a la Educaci\u00f3n por el Centro de Altos Estudios Universitarios (Argentina) y Acompa\u00f1amiento Pedag\u00f3gico en convenio con la Universidad Peruana de las Am\u00e9ricas.\n\nSu formaci\u00f3n de car\u00e1cter global se consolida con becas y pasant\u00edas en tecnolog\u00eda y e-learning en Corea del Sur, as\u00ed como estancias formativas en Espa\u00f1a, Brasil, Alemania y Polonia. Actualmente, cursa el Doctorado en Educaci\u00f3n con Especialidad en Planificaci\u00f3n y Gesti\u00f3n en la Universidad Cat\u00f3lica de Santo Domingo (UCSD).\n\nEs un hombre profundamente arraigado en la fe cat\u00f3lica, querido por su calidad humana y su firme vocaci\u00f3n de servicio, compartiendo su vida familiar en matrimonio junto a sus tres hijos.\n\nEddy Ch\u00e1vez Placencio, M.A.\nDirector de la Regional 15, MINERD',
  trayectoria: [
    'Director Regional 15 \u2013 MINERD',
    'Director Distrito Educativo 15-04',
    'Director Liceo Nocturno Francisco Ulises Dom\u00ednguez',
    'Coordinador Docente, Liceo Matutino Benito Ju\u00e1rez',
  ],
  formacion: {
    doctorado: { titulo: 'Educaci\u00f3n con Especialidad en Planificaci\u00f3n y Gesti\u00f3n', institucion: 'Universidad Cat\u00f3lica de Santo Domingo', estado: 'En curso' },
    maestrias: [
      { titulo: 'Maestr\u00eda en Curr\u00edculum y Tecnolog\u00eda Educativa', institucion: 'Nova Southeastern University, EE. UU.' },
      { titulo: 'Maestr\u00eda en Administraci\u00f3n y Gesti\u00f3n de Centros Educativos', institucion: 'INTEC' },
    ],
    licenciaturas: [
      { titulo: 'Licenciatura en Educaci\u00f3n, Menci\u00f3n Inform\u00e1tica', institucion: 'Universidad del Caribe (UNICARIBE)' },
      { titulo: 'Licenciatura en Inform\u00e1tica', institucion: 'Universidad del Caribe (UNICARIBE)' },
    ],
    capacitaciones: [
      { titulo: 'Doctorado en Educaci\u00f3n con Especialidad en Planificaci\u00f3n y Gesti\u00f3n (en curso)', institucion: 'Universidad Cat\u00f3lica de Santo Domingo' },
      { titulo: 'Acompa\u00f1amiento Pedag\u00f3gico', institucion: 'INTEC y Universidad de Sevilla, Espa\u00f1a' },
      { titulo: 'Neurociencia Aplicada a la Educaci\u00f3n', institucion: 'Centro de Altos Estudios Universitarios, Argentina' },
      { titulo: 'Tecnolog\u00eda Aplicada a la Educaci\u00f3n y Maestro 2.0', institucion: 'ISFODOSU' },
      { titulo: 'Formaci\u00f3n Internacional en Innovaci\u00f3n Educativa', institucion: 'Corea del Sur, Espa\u00f1a, Brasil, Alemania y Polonia' },
      { titulo: 'Cursos en E-learning', institucion: 'Corea del Sur' },
    ],
  },
  fortalezas: ['Liderazgo Transformacional', 'Innovaci\u00f3n Educativa', 'Inclusi\u00f3n Social', 'Gesti\u00f3n Estrat\u00e9gica', 'Visi\u00f3n Global', 'Tecnolog\u00eda Educativa'],
  vision: 'Una educaci\u00f3n de calidad, inclusiva e innovadora que transforme la vida de todos los estudiantes de la Regional 15 y contribuya al desarrollo sostenible de la sociedad dominicana.',
  mision: 'Liderar la gesti\u00f3n educativa con excelencia, promoviendo la innovaci\u00f3n pedag\u00f3gica, la inclusi\u00f3n, la equidad y la tecnolog\u00eda como herramientas para el aprendizaje significativo.',
  valores: ['Excelencia', 'Inclusi\u00f3n', 'Innovaci\u00f3n', 'Integridad', 'Compromiso Social'],
}

const existing = db.prepare("SELECT data FROM director WHERE id = 'main'").get()

if (existing) {
  db.prepare("UPDATE director SET data = ?, updated_at = datetime('now') WHERE id = 'main'").run(JSON.stringify(directorData))
  console.log('\u2713 Director data updated')
} else {
  db.prepare("INSERT INTO director (id, data) VALUES ('main', ?)").run(JSON.stringify(directorData))
  console.log('\u2713 Director data inserted')
}

console.log('\u2713 Seed de director completado')
db.close()

