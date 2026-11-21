import type MarkdownIt from 'markdown-it'
import { old_crearContainer } from '../old_crearContainer'

export function registrarActividad(md: MarkdownIt) {
    old_crearContainer(md, {
        nombre: 'actividad',
        titulo: 'Para hacer ahora',
        icono: 'fa-solid fa-pencil'
    })
}