import type MarkdownIt from 'markdown-it'
import { crearContainer } from '../crearContainer'

export function registrarReferencias(md: MarkdownIt) {
    crearContainer(md, {
        nombre: 'referencias',
        titulo: 'Dónde buscar información',
        icono: 'fa-solid fa-link'
    })
}