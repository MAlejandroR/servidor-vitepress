

import { old_crearContainer } from '../old_crearContainer'
import type MarkdownIt from 'markdown-it'

export function registrarDefinicion(md: MarkdownIt) {
    old_crearContainer(md, {
        nombre: 'definicion',
        titulo: 'Definición',
        icono: 'fa-solid fa-book-open'
    })
}