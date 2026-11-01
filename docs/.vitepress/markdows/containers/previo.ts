import type MarkdownIt from 'markdown-it'
import { crearContainer } from '../crearContainer'

export function registrarPrevio(md: MarkdownIt) {
    crearContainer(md, {
        nombre: 'previo',
        titulo: 'Antes de seguir',
        icono: 'fa-solid fa-clock-rotate-left'
    })
}