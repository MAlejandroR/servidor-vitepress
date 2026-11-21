
/**
 * Tipos de diseño disponibles:
 *
 * labeled:
 *   Etiqueta pequeña con icono, subtítulo y contenido.
 *   Ejemplos: finalidad, previo, actividad.
 *
 * featured:
 *   Cabecera destacada con icono, título secundario
 *   y contenido.
 *   Ejemplo: objetivos.
 *
 * header:
 *   Cabecera con icono y título, seguida del contenido.
 *   Ejemplos: definición, recuerda, práctica.
 *
 * El layout define la estructura HTML.
 * Los colores y estilos se establecen mediante CSS.
 */
export type ContainerLayout = 'labeled' | 'featured' | 'header'

/**
 * Propiedades necesarias para definir un contenedor.
 */
export interface ConfigContainer {
    nombre: string          // Nombre utilizado en Markdown: ::: finalidad
    etiqueta: string        // Texto identificativo: Finalidad
    titulo: string          // Título predeterminado
    icono: string           // Clase Font Awesome
    layout: ContainerLayout // Estructura HTML
}

/**
 * Catálogo de contenedores personalizados.
 *
 * Para añadir uno nuevo, basta con incorporarlo aquí.
 */
export const contenedores: ConfigContainer[] = [
    {
        nombre: 'finalidad',
        etiqueta: 'Finalidad',
        titulo: 'Al terminar el tema deberás…',
        icono: 'fa-solid fa-bullseye',
        layout: 'featured'
    },
    {
        nombre: 'objetivos',
        etiqueta: 'Objetivos',
        titulo: 'Qué veremos aquí',
        icono: 'fa-solid fa-list-check',
        layout: 'featured'
    },
    {
        nombre: 'previo',
        etiqueta: 'Conocimiento previo',
        titulo: 'Antes de seguir',
        icono: 'fa-solid fa-book-open',
        layout: 'featured'
    },
    {
        nombre: 'definicion',
        etiqueta: 'Definición',
        titulo: 'Definición',
        icono: 'fa-solid fa-book',
        layout: 'header'
    },
    {
        nombre: 'pageinfo',
        etiqueta: 'Información adicional',
        titulo: 'Información adicional',
        icono: 'fa-solid fa-circle-info',
        layout: 'header'
    },
    {
        nombre: 'recuerda',
        etiqueta: 'Recuerda',
        titulo: 'Recuerda',
        icono: 'fa-solid fa-lightbulb',
        layout: 'header'
    },
    {
        nombre: 'actividad',
        etiqueta: 'Actividad',
        titulo: 'Para hacer ahora',
        icono: 'fa-solid fa-pencil',
        layout: 'labeled'
    },
    {
        nombre: 'practica',
        etiqueta: 'Práctica',
        titulo: 'Ahora practica tú',
        icono: 'fa-solid fa-keyboard',
        layout: 'header'
    },
    {
        nombre: 'pregunta',
        etiqueta: 'Pregunta',
        titulo: 'Para pensar en clase',
        icono: 'fa-solid fa-circle-question',
        layout: 'labeled'
    },
    {
        nombre: 'referencias',
        etiqueta: 'Referencias',
        titulo: 'Dónde buscar información',
        icono: 'fa-solid fa-link',
        layout: 'labeled'
    }
]
