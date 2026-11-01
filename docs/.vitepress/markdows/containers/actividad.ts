import type MarkdownIt from 'markdown-it'
import { crearContainer } from '../crearContainer'

export function registrarActividad(md: MarkdownIt) {
    crearContainer(md, {
        nombre: 'actividad',
        titulo: 'Para hacer ahora',
        icono: 'fa-solid fa-pencil'
    })
}