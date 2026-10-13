// Utilidades de texto para los buscadores de centros educativos.
// MINERD registra los nombres en mayusculas y sin tildes ('SALOME URENA DE HENRIQUEZ'),
// pero las familias los escriben con o sin tilde. Sin normalizar, buscar 'Bartolome'
// no encuentra 'BARTOLOME DE LAS CASAS' ni al reves.

export function normalizar(texto: string | undefined | null): string {
  if (!texto) return ''
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('es')
}