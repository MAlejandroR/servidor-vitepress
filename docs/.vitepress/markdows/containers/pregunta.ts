import type MarkdownIt from 'markdown-it'
import { crearContainer } from '../crearContainer'

export function registrarPregunta(md: MarkdownIt) {
    crearContainer(md, {
        nombre: 'pregunta',
        titulo: 'Para pensar en clase',
        icono: 'fa-solid fa-circle-question'
    })
}