import type MarkdownIt from 'markdown-it'
import { old_crearContainer } from '../old_crearContainer'

export function registrarRecuerda(md: MarkdownIt) {
    old_crearContainer(md, {
        nombre: 'recuerda',
        titulo: 'Recuerda',
        icono: 'fa-solid fa-lightbulb'
    })
}