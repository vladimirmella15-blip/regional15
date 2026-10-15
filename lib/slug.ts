// Generador de la URL de un centro: /centros/<nombre-en-minusculas>-<codigo>.
//
// Vive solo aqui, sin imports de los listados, para que el mapa y el buscador
// (que corren en el navegador) puedan construir el enlace sin arrastrar los
// 1.489 registros al paquete del cliente.

/** "Liceo Patria Mirabal" -> "liceo-patria-mirabal" */
export function slugify(texto: string): string {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 70)
    .replace(/-+$/, '')
}

export function construirSlug(nombre: string, codigo: string): string {
  return `${slugify(nombre)}-${codigo}`
}

/** URL de la ficha de un centro a partir de su nombre y codigo SIGERD. */
export function urlCentro(nombre: string, codigo: string): string {
  return `/centros/${construirSlug(nombre, codigo)}`
}
