
import type MarkdownIt from 'markdown-it'

import { registrarObjetivos } from './containers/objetivos'
import { registrarFinalidad } from './containers/finalidad'
import { registrarPrevio } from './containers/previo'
import { registrarDefinicion } from './containers/definicion'
import { registrarPageinfo } from './containers/pageinfo'
import { registrarRecuerda } from './containers/recuerda'
import { registrarActividad } from './containers/actividad'
import { registrarPractica } from './containers/practica'
import { registrarPregunta } from './containers/pregunta'
import { registrarReferencias } from './containers/referencias'

/**
 * Registra todos los containers personalizados de DAWS.
 *
 * Se invoca desde config.mts:
 * markdown: {
 *     config(md) {
 *         dawsContainers(md)
 *     }
 * }
 */
export function dawsContainers(md: MarkdownIt): void {
    registrarObjetivos(md)
    registrarFinalidad(md)
    registrarPrevio(md)
    registrarDefinicion(md)
    registrarPageinfo(md)
    registrarRecuerda(md)
    registrarActividad(md)
    registrarPractica(md)
    registrarPregunta(md)
    registrarReferencias(md)
}
