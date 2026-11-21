import type MarkdownIt from 'markdown-it'
import { old_crearContainer } from '../old_crearContainer'

export function registrarFinalidad(md: MarkdownIt) {
    old_crearContainer(md, {
        nombre: 'finalidad',
        titulo: 'Al terminar el tema deberás…',
        icono: 'fa-solid fa-bullseye'
    })
}