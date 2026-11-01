

import { crearContainer } from '../crearContainer'
import type MarkdownIt from 'markdown-it'

export function registrarDefinicion(md: MarkdownIt) {
    crearContainer(md, {
        nombre: 'definicion',
        titulo: 'Definición',
        icono: 'fa-solid fa-book-open'
    })
}