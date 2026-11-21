
import container from 'markdown-it-container'
import type MarkdownIt from 'markdown-it'
import type { ConfigContainer } from './config'

/**
 * Registra un contenedor personalizado en Markdown-it.
 *
 * Los nombres, títulos, iconos y layouts se definen
 * en config.ts, donde están centralizados.
 *
 * Layouts disponibles:
 *
 * labeled:
 *   Etiqueta pequeña con icono + subtítulo + contenido.
 *   Ejemplo: finalidad, previo, actividad.
 *
 * featured:
 *   Cabecera destacada con icono + título secundario
 *   + contenido.
 *   Ejemplo: objetivos.
 *
 * header:
 *   Cabecera con icono y título + contenido.
 *   Ejemplo: definición, recuerda, práctica.
 *
 * Conservamos las clases CSS originales para no romper
 * los estilos de las páginas existentes.
 */
export function crearContainer(
    md: MarkdownIt,
    config: ConfigContainer
): void {

    const {
        nombre,
        etiqueta,
        titulo,
        icono,
        layout
    } = config

    const clase = `daws-${nombre}`

    md.use(container, nombre, {

        render(tokens, idx) {

            // Cierre del contenedor según su estructura HTML.
            if (tokens[idx].nesting === -1) {
                return layout === 'featured'
                    ? '</div></div></div>\n'
                    : '</div></div>\n'
            }

            /**
             * Sintaxis Markdown:
             *
             * ::: definicion Tipo de dato | fa-solid fa-database
             *
             * El título y el icono son opcionales.
             * Si no se indican, se utilizan los de config.ts.
             */
            const info = tokens[idx].info
                .trim()
                .slice(nombre.length)
                .trim()

            const [tituloUsuario, iconoUsuario] = info
                .split('|')
                .map(valor => valor.trim())

            const tituloFinal = md.utils.escapeHtml(
                tituloUsuario || titulo
            )

            const iconoFinal = md.utils.escapeHtml(
                iconoUsuario || icono
            )

            const etiquetaFinal = md.utils.escapeHtml(etiqueta)

            /**
             * FEATURED
             *
             * Cabecera destacada + título + contenido.
             *
             * Conserva la estructura de objetivos:
             * __header, __content, __title, __body.
             */
            if (layout === 'featured') {
                return `
<div class="${clase} daws-container">
    <div class="${clase}__header">
        <i class="${iconoFinal}" aria-hidden="true"></i>
        <span>${etiquetaFinal}</span>
    </div>
    <div class="${clase}__content">
        <div class="${clase}__title">${tituloFinal}</div>
        <div class="${clase}__body">
`
            }

            /**
             * LABELED
             *
             * Etiqueta pequeña + subtítulo + contenido.
             *
             * Conserva la estructura antigua:
             * __kicker, __sub, __body.
             */
            if (layout === 'labeled') {
                return `
<div class="${clase} daws-container">
    <p class="${clase}__kicker">
        <i class="${iconoFinal}" aria-hidden="true"></i>
        ${etiquetaFinal}
    </p>
    <p class="${clase}__sub">${tituloFinal}</p>
    <div class="${clase}__body">
`
            }

            /**
             * HEADER
             *
             * Cabecera con icono y título + contenido.
             *
             * Conserva las clases:
             * __header y __body.
             */
            return `
<div class="${clase} daws-container">
    <div class="${clase}__header">
        <i class="${iconoFinal}" aria-hidden="true"></i>
        <strong>${tituloFinal}</strong>
    </div>
    <div class="${clase}__body">
`
        }
    })
}
