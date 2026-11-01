import type MarkdownIt from 'markdown-it'
import { crearContainer } from '../crearContainer'

export function registrarPageinfo(md: MarkdownIt) {
    crearContainer(md, {
        nombre: 'pageinfo',
        titulo: 'Información adicional',
        icono: 'fa-solid fa-circle-info'
    })
}