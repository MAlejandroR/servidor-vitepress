import type MarkdownIt from 'markdown-it'
import { crearContainer } from '../crearContainer'

export function registrarPractica(md: MarkdownIt) {
    crearContainer(md, {
        nombre: 'practica',
        titulo: 'Ahora practica tú',
        icono: 'fa-solid fa-keyboard'
    })
}