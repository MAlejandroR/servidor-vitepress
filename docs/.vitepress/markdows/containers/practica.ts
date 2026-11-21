import type MarkdownIt from 'markdown-it'
import { old_crearContainer } from '../old_crearContainer'

export function registrarPractica(md: MarkdownIt) {
    old_crearContainer(md, {
        nombre: 'practica',
        titulo: 'Ahora practica tú',
        icono: 'fa-solid fa-keyboard'
    })
}