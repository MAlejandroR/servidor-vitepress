import type MarkdownIt from 'markdown-it'
import { old_crearContainer } from '../old_crearContainer'

export function registrarReferencias(md: MarkdownIt) {
    old_crearContainer(md, {
        nombre: 'referencias',
        titulo: 'Dónde buscar información',
        icono: 'fa-solid fa-link'
    })
}