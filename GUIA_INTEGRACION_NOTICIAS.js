/**
 * GUÍA DE INTEGRACIÓN - NoticiasSection
 * 
 * Para agregar la sección de noticias mejorada a tu página principal,
 * sigue estos pasos:
 */

// 1. Importa el componente en /app/page.tsx
import NoticiasSection from '@/components/NoticiasSection'

// 2. Usa el componente en tu JSX (dentro de la función HomePage)
export default function HomePage() {
  return (
    <main>
      {/* ... otras secciones (hero, stats, etc) ... */}
      
      {/* AGREGA ESTA LÍNEA DONDE QUIERAS QUE APAREZCAN LAS NOTICIAS */}
      <NoticiasSection />
      
      {/* ... resto del contenido ... */}
    </main>
  )
}

/**
 * EJEMPLO COMPLETO:
 * 
 * El componente NoticiasSection ya incluye:
 * - Carga automática de datos desde /data/content.json
 * - Grid responsivo de tarjetas
 * - Modal con galería de imágenes
 * - Navegación entre fotos
 * - Metadata completa
 * 
 * NO necesitas pasar props, funciona solo:
 * <NoticiasSection />
 * 
 * O puedes pasar noticias manualmente:
 * <NoticiasSection noticias={misDatos} />
 */

/**
 * ESTRUCTURA DE DATOS ESPERADA:
 * 
 * El JSON debe tener una sección "noticias" como:
 * {
 *   "noticias": [
 *     {
 *       "id": "noticia-1",
 *       "titulo": "Título",
 *       "fecha": "Mayo 2026",
 *       "categoria": "Categoría",
 *       "descripcion": "Descripción corta",
 *       "contenido_completo": "Contenido completo para el modal",
 *       "imagen": "assets/img/imagen.jpg",
 *       "galeria": [
 *         { "src": "assets/img/foto1.jpg", "caption": "Texto" },
 *         { "src": "assets/img/foto2.jpg", "caption": "Texto" }
 *       ],
 *       "enlace": "https://instagram.com/...",
 *       "texto_enlace": "Ver en Instagram",
 *       "autor": "Regional 15"
 *     }
 *   ]
 * }
 */

/**
 * ESTILOS APLICADOS:
 * 
 * Los estilos vienen incluidos en /assets/css/styles-premium.css
 * Clases principales:
 * - .noticias-section: contenedor principal
 * - .noticias-grid: grid de tarjetas
 * - .noticia-card: tarjeta individual
 * - .noticia-image: imagen de la tarjeta
 * - .noticia-content: contenido de la tarjeta
 * - .modal-overlay: fondo oscuro del modal
 * - .modal-content: contenido del modal
 * - .gallery-main: imagen principal de la galería
 * - .gallery-thumbnails: miniaturas
 */

/**
 * PERSONALIZACIÓN:
 * 
 * Para cambiar colores, edita /assets/css/styles-premium.css:
 * :root {
 *   --red: #ed232a;        // Categoría badge
 *   --blue-dark: #003876;  // Headers
 *   --gold: #f0a500;       // Acentos
 * }
 */
