import type MarkdownIt from 'markdown-it'
import { old_crearContainer } from '../old_crearContainer'

export function registrarPrevio(md: MarkdownIt) {
    old_crearContainer(md, {
        nombre: 'previo',
        titulo: 'Antes de seguir',
        icono: 'fa-solid fa-clock-rotate-left'
    })
}