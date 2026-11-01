import type MarkdownIt from 'markdown-it'
import { crearContainer } from '../crearContainer'

export function registrarRecuerda(md: MarkdownIt) {
    crearContainer(md, {
        nombre: 'recuerda',
        titulo: 'Recuerda',
        icono: 'fa-solid fa-lightbulb'
    })
}