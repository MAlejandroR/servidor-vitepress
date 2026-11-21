import type MarkdownIt from 'markdown-it'
import { old_crearContainer } from '../old_crearContainer'

export function registrarPageinfo(md: MarkdownIt) {
    old_crearContainer(md, {
        nombre: 'pageinfo',
        titulo: 'Información adicional',
        icono: 'fa-solid fa-circle-info'
    })
}