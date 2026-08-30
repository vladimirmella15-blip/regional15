# 🎯 GUÍA RÁPIDA DE USO

## ⚡ PRIMEROS PASOS (5 MINUTOS)

### 1. Actualizar Información del Director

**Archivo:** `/data/content.json`

```json
"director": {
  "nombre": "TU NOMBRE AQUÍ",
  "titulo": "TU TÍTULO AQUÍ",
  "foto": "assets/img/tu-foto.png",
  // ... resto de campos
}
```

**Luego:**
- Ve a `http://tudominio.com/director`
- ¡Verás los cambios automáticamente!

---

### 2. Agregar una Nueva Noticia

**Archivo:** `/data/content.json`

Sección `"noticias"`, agrega al final:

```json
{
  "id": "noticia-4",
  "fecha": "Julio 2026",
  "categoria": "Tu Categoría",
  "titulo": "Título de tu noticia",
  "descripcion": "Descripción corta (aparece en la tarjeta)",
  "contenido_completo": "Contenido largo y detallado para el modal",
  "imagen": "assets/img/imagen-principal.jpg",
  "galeria": [
    {
      "src": "assets/img/gallery/foto-1.jpg",
      "caption": "Descripción de la foto"
    },
    {
      "src": "assets/img/gallery/foto-2.jpg",
      "caption": "Descripción de la foto"
    }
  ],
  "enlace": "https://instagram.com/...",
  "texto_enlace": "Ver en Instagram",
  "autor": "Regional 15 MINERD"
}
```

**Luego:**
- Guarda el archivo
- Recarga la página
- ¡La noticia aparecerá automáticamente!

---

### 3. Ver Modal de Noticias

**En el navegador:**

1. Navega a la sección de noticias
2. Haz clic en cualquier tarjeta
3. Se abre un modal elegante
4. Usa las flechas para navegar fotos
5. Haz clic en miniaturas para cambiar
6. Cierra con X o haz clic afuera

---

## 📖 CÓMO PERSONALIZAR

### Cambiar Color Rojo
```css
/* En /assets/css/styles-premium.css */
:root {
  --red: #ED232A;  /* Cambiar este valor */
}
```

### Cambiar Fuentes
```tsx
/* En /app/layout.tsx */
<link href="https://fonts.googleapis.com/css2?family=TU_FUENTE:wght@700&display=swap" rel="stylesheet" />
```

### Cambiar Espaciado
```css
/* En /assets/css/styles-premium.css */
.section {
  padding: 80px 0;  /* Cambiar este valor */
}
```

---

## 🔍 VALIDAR CAMBIOS

### JSON válido
1. Copia contenido de `/data/content.json`
2. Ve a https://jsonlint.com
3. Pega el contenido
4. Debe decir "Valid JSON"

### Imágenes correctas
1. Verifica que existan los archivos
2. Comprueba rutas correctas
3. Optimiza imágenes (< 300KB)

---

## 📱 PROBAR EN MOBILE

1. Abre DevTools (F12)
2. Haz clic en icono responsive
3. Selecciona "iPhone SE" o tamaño deseado
4. Recarga la página
5. ¡Verifica que se vea bien!

---

## 🚀 PONER EN PRODUCCIÓN

1. **Build:**
   ```bash
   npm run build
   ```

2. **Test:**
   ```bash
   npm run start
   ```

3. **Deploy:**
   - Usa Vercel (recomendado para Next.js)
   - O tu proveedor de hosting preferido

---

## ❓ PREGUNTAS FRECUENTES

**P: ¿Cómo agrego más de una foto a una noticia?**
R: Usa la sección `"galeria"` con múltiples objetos de imagen

**P: ¿Puedo cambiar los colores?**
R: Sí, modifica las variables CSS en styles-premium.css

**P: ¿Qué tamaño debe tener la foto del director?**
R: Mínimo 300x400px, máximo 500KB

**P: ¿Cómo veo cambios sin recompilar?**
R: Actualiza el JSON y recarga la página (está optimizado)

**P: ¿Es responsive en móvil?**
R: Sí, 100% responsive en todos los dispositivos

**P: ¿Puedo agregar más información al director?**
R: Sí, expande los campos en la sección "director"

---

## 🎨 EJEMPLOS RÁPIDOS

### Cambiar nombre del director
```json
"nombre": "Tu Nombre Aquí"
```

### Cambiar foto del director
```json
"foto": "assets/img/tu-foto.png"
```

### Agregar más fortalezas
```json
"fortalezas": [
  "Excelencia",
  "Innovación",
  "TuFortaleza",  // Agregar aquí
]
```

---

## 📞 CONTACTO & SOPORTE

Si necesitas ayuda:

1. **Revisa documentación:**
   - TRANSFORMACION_PREMIUM.md
   - GUIA_DIRECTOR.md
   - GUIA_INTEGRACION_NOTICIAS.js

2. **Valida datos:**
   - https://jsonlint.com

3. **Verifica imágenes:**
   - Asegúrate que existan
   - Optimiza tamaño
   - Usa JPG o PNG

---

## ✅ CHECKLIST FINAL

Antes de producción:

- [ ] JSON válido (verificado en jsonlint.com)
- [ ] Todas las imágenes existen
- [ ] Foto del director actualizada
- [ ] Información del director correcta
- [ ] Noticias con contenido real
- [ ] Links a redes sociales funcionales
- [ ] Tested en mobile, tablet, desktop
- [ ] Build sin errores
- [ ] Rendimiento optimizado

---

**Última actualización:** 2026-06-04  
**Versión:** 2.0  
**Dificultad:** ⭐ Muy Fácil  
**Tiempo:** ⏱️ 5-10 minutos

---

¡Ahora estás listo para usar la plataforma Premium! 🚀
