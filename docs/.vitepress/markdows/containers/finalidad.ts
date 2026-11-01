import type MarkdownIt from 'markdown-it'
import { crearContainer } from '../crearContainer'

export function registrarFinalidad(md: MarkdownIt) {
    crearContainer(md, {
        nombre: 'finalidad',
        titulo: 'Al terminar el tema deberás…',
        icono: 'fa-solid fa-bullseye'
    })
}