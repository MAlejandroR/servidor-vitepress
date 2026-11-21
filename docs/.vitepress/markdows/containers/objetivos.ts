import { old_crearContainer } from '../old_crearContainer'
import type MarkdownIt from 'markdown-it'

export function registrarObjetivos(md: MarkdownIt) {
    old_crearContainer(md, {
        nombre: 'objetivos',
        titulo: 'Qué veremos aquí',
        icono: 'fa-solid fa-list-check',
        diseno: 'objetivos'
    })
}