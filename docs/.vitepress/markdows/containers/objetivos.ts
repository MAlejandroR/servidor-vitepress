import { crearContainer } from '../crearContainer'
import type MarkdownIt from 'markdown-it'

export function registrarObjetivos(md: MarkdownIt) {
    crearContainer(md, {
        nombre: 'objetivos',
        titulo: 'Qué veremos aquí',
        icono: 'fa-solid fa-list-check',
        diseno: 'objetivos'
    })
}