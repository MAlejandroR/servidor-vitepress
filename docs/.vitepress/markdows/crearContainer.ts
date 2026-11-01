
import container from 'markdown-it-container'
import type MarkdownIt from 'markdown-it'

export interface ConfigContainer {
    nombre: string
    titulo: string
    icono: string
    diseno?: 'normal' | 'objetivos'
}

export function crearContainer(
    md: MarkdownIt,
    config: ConfigContainer
): void {
    const { nombre, titulo, icono, diseno = 'normal' } = config

    // Estos containers conservan la estructura antigua labeledBox
    const tipoLabeledBox = [
        'finalidad',
        'referencias',
        'previo',
        'actividad',
        'pregunta'
    ].includes(nombre)

    md.use(container, nombre, {
        render(tokens, idx) {
            // Cierre del container
            if (tokens[idx].nesting === -1) {
                if (diseno === 'objetivos') {
                    return '</div></div></div>\n'
                }

                return '</div></div>\n'
            }

            // Información escrita después de ::: nombre
            const info = tokens[idx].info
                .trim()
                .slice(nombre.length)
                .trim()

            const [tituloUsuario, iconoUsuario] = info
                .split('|')
                .map(s => s.trim())

            const tituloFinal = md.utils.escapeHtml(
                tituloUsuario || titulo
            )

            const iconoFinal = md.utils.escapeHtml(
                iconoUsuario || icono
            )

            const clase = `daws-${nombre}`

            // Diseño especial de objetivos
            if (diseno === 'objetivos') {
                return `
<div class="${clase}">
  <div class="${clase}__header">
    <i class="${iconoFinal}" aria-hidden="true"></i>
    <span>Objetivos</span>
  </div>
  <div class="${clase}__content">
    <div class="${clase}__title">${tituloFinal}</div>
    <div class="${clase}__body">
`
            }

            // Diseño antiguo de labeledBox
            if (tipoLabeledBox) {
                const subtitulo = md.utils.escapeHtml(
                    info || titulo
                )

                const etiqueta = {
                    finalidad: 'Finalidad',
                    referencias: 'Referencias',
                    previo: 'Conocimiento previo',
                    actividad: 'Actividad',
                    pregunta: 'Pregunta'
                }[nombre] || titulo

                return `
<div class="${clase}">
  <p class="${clase}__kicker">${md.utils.escapeHtml(etiqueta)}</p>
  <p class="${clase}__sub">${subtitulo}</p>
  <div class="${clase}__body">
`
            }

            // Diseño de definicion y pageinfo
            if (nombre === 'definicion' || nombre === 'pageinfo') {
                return `
<div class="${clase}">
  <div class="${clase}__header">
    <i class="${iconoFinal}" aria-hidden="true"></i>
    <strong>${tituloFinal}</strong>
  </div>
  <div class="${clase}__body">
`
            }

            // Diseño de recuerda y practica
            return `
<div class="${clase}">
  <div class="${clase}__header">
    <i class="${iconoFinal}" aria-hidden="true"></i>
    <span>${tituloFinal}</span>
  </div>
  <div class="${clase}__body">
`
        }
    })
}
