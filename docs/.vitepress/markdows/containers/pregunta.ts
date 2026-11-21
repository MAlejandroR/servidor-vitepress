import type MarkdownIt from 'markdown-it'
import { old_crearContainer } from '../old_crearContainer'

export function registrarPregunta(md: MarkdownIt) {
    old_crearContainer(md, {
        nombre: 'pregunta',
        titulo: 'Para pensar en clase',
        icono: 'fa-solid fa-circle-question'
    })
}