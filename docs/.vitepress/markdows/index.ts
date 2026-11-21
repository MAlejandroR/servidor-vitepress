import type MarkdownIt from 'markdown-it'
import { contenedores } from './config'
import { crearContainer } from './crearContainer'

export function dawsContainers(md: MarkdownIt): void {
    contenedores.forEach(config => crearContainer(md, config))
}