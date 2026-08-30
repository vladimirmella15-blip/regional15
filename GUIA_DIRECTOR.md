# 📖 GUÍA - PÁGINA DEL DIRECTOR

## 🎯 Información General

La página del Director es una sección profesional y elegante que muestra:
- Información biográfica completa
- Trayectoria profesional
- Formación académica detallada
- Visión, misión y valores
- Logros y reconocimientos

**Acceso:** `http://tudominio.com/director`

---

## 📝 ACTUALIZAR LA INFORMACIÓN DEL DIRECTOR

Todo se gestiona desde `/data/content.json`, sección `"director"`:

### 1. Información Básica

```json
{
  "nombre": "Eddy Chávez Placencio",
  "titulo": "Director de la Regional 15, MINERD",
  "subtitulo": "Líder en Transformación Educativa",
  "foto": "assets/img/Foto_Eddy_Chavez_comprimida.png",
  "fecha_nacimiento": "5 de enero de 1975",
  "lugar_nacimiento": "San Francisco de Macorís, República Dominicana",
  "resumen_ejecutivo": "Texto descriptivo..."
}
```

**Actualizar foto:**
1. Copia la imagen a `/assets/img/`
2. Actualiza el campo `"foto"` con la ruta correcta
3. Asegúrate que sea 300x400px aproximadamente

### 2. Trayectoria Profesional

```json
{
  "trayectoria": [
    "Director Regional 15 – MINERD",
    "Director Distrito Educativo 1504",
    "Director Liceo Nocturno Francisco Ulises Domínguez",
    "Coordinador Docente, Liceo Matutino Benito Juárez"
  ]
}
```

Agrega o modifica los puestos según corresponda.

### 3. Formación Académica

#### Doctorado
```json
{
  "doctorado": {
    "titulo": "Educación con Especialidad en Planificación y Gestión",
    "institucion": "Universidad Católica de Santo Domingo",
    "estado": "En curso"  // "Completado" o "En curso"
  }
}
```

#### Maestrías
```json
{
  "maestrias": [
    {
      "titulo": "Maestría en Currículum y Tecnología Educativa",
      "institucion": "Nova Southeastern University, EE. UU."
    },
    {
      "titulo": "Maestría en Administración y Gestión de Centros Educativos",
      "institucion": "INTEC"
    }
  ]
}
```

#### Licenciaturas
```json
{
  "licenciaturas": [
    {
      "titulo": "Licenciatura en Educación, Mención Informática",
      "institucion": "Universidad del Caribe (UNICARIBE)"
    }
  ]
}
```

#### Capacitaciones
```json
{
  "capacitaciones": [
    {
      "titulo": "Acompañamiento Pedagógico",
      "institucion": "INTEC y Universidad de Sevilla, España"
    },
    {
      "titulo": "Neurociencia Aplicada a la Educación",
      "institucion": "Centro de Altos Estudios Universitarios, Argentina"
    }
  ]
}
```

### 4. Fortalezas Clave

```json
{
  "fortalezas": [
    "Liderazgo Transformacional",
    "Innovación Educativa",
    "Inclusión Social",
    "Gestión Estratégica",
    "Visión Global",
    "Tecnología Educativa"
  ]
}
```

### 5. Visión, Misión y Valores

```json
{
  "vision": "Una educación de calidad, inclusiva e innovadora...",
  "mision": "Liderar la gestión educativa con excelencia...",
  "valores": [
    "Excelencia",
    "Inclusión",
    "Innovación",
    "Integridad",
    "Compromiso Social"
  ]
}
```

---

## 🎨 PERSONALIZACIÓN VISUAL

### Cambiar Colores de la Página

En `/assets/css/styles-premium.css`, modifica:

```css
/* Colores principales */
:root {
  --blue-dark: #003876;    /* Headers, acentos principales */
  --red: #ed232a;          /* Bordes, separadores */
  --gold: #f0a500;         /* Números en stats */
  --blue-lighter: #e8f2fc; /* Fondos suaves */
}
```

### Cambiar Estilos Específicos

#### Hero Section (encabezado)
```css
.director-hero {
  background: linear-gradient(135deg, var(--blue-dark) 0%, var(--blue-mid) 100%);
  padding: 60px 0;
  /* Modifica estos valores */
}
```

#### Cards de Formación
```css
.formacion-section {
  background: var(--card-bg);
  border-left: 4px solid var(--blue-dark);  /* Cambiar color del borde */
  padding: 24px;  /* Aumentar/disminuir padding */
}
```

### Cambiar Tipografía

En `/app/layout.tsx`:
```tsx
<link href="https://fonts.googleapis.com/css2?family=NuevaFuente:wght@600;700;800&display=swap" rel="stylesheet" />
```

En CSS:
```css
h1, h2, h3, h4, h5, h6 {
  font-family: 'NuevaFuente', serif;  /* Cambiar fuente */
}
```

---

## 📱 ESTRUCTURA DE TABS

La página tiene 3 tabs interactivos:

### Tab 1: Perfil & Trayectoria
Muestra:
- Resumen ejecutivo
- Trayectoria completa
- Fortalezas clave

### Tab 2: Formación Académica
Muestra en grid:
- Doctorado
- Maestrías
- Licenciaturas
- Capacitaciones

### Tab 3: Visión & Valores
Muestra:
- Visión (objetivo futuro)
- Misión (propósito actual)
- Valores fundamentales (5 badges)

---

## 🖼️ RECOMENDACIONES FOTOGRÁFICAS

- **Formato:** JPG o PNG
- **Tamaño:** 400x500px mínimo
- **Peso:** Menos de 300KB
- **Fondo:** Preferiblemente neutro o corporativo
- **Expresión:** Profesional, amigable

**Optimización:**
1. Usa TinyPNG o ImageOptim
2. Comprime la imagen
3. Asegúrate que sea responsive

---

## ✨ SECCIONES VISIBLES

### 1. Hero Section (Azul degradado)
```
Eddy Chávez Placencio
Director de la Regional 15, MINERD
"Líder en Transformación Educativa"
```

### 2. Contenido Principal (Dos columnas)
- Columna izquierda: Foto + datos biográficos
- Columna derecha: Información textual

### 3. Tabs Interactivos
Cambia el contenido al hacer clic

### 4. Sección de Estadísticas
Muestra logros en cards con números/emojis

---

## 🔄 ACTUALIZACIÓN EN TIEMPO REAL

1. **Edita `/data/content.json`**
2. **Guarda el archivo**
3. **Actualiza la página en el navegador**
4. **Los cambios aparecerán automáticamente**

No necesitas recompilar ni reiniciar el servidor.

---

## 🎬 ANIMACIONES

La página incluye:
- ✅ Fade-in al cargar
- ✅ Hover en cards
- ✅ Transiciones suaves de tabs
- ✅ Desplazamiento flotante (scroll sticky)
- ✅ Pulso en números

Para desactivar animaciones (accesibilidad):
```css
body.prefers-reduced-motion * {
  animation: none !important;
  transition: none !important;
}
```

---

## 📊 ESTADÍSTICAS PERSONALIZABLES

En la sección final, puedes agregar más datos:

```json
{
  "distritos": 6,
  "galas": 3,
  "anos_experiencia": 25,
  "premios": 1
}
```

Luego mostralos en cards personalizadas.

---

## 🔐 PRIVACIDAD Y SEGURIDAD

- No se almacenan datos personales adicionales
- Solo información pública profesional
- El JSON es estático (no se envía a servidores externos)
- Complies con GDPR básico

---

## 📞 CONTACTO

Para preguntas sobre la página del Director:
- Revisa el código comentado en `/app/director/page.tsx`
- Valida el JSON en [jsonlint.com](https://jsonlint.com)
- Verifica rutas de imágenes y archivos

---

**Última actualización:** 2026-06-04  
**Versión:** 2.0  
**Status:** ✅ Listo para producción
