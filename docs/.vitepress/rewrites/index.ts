
import { contenidoRewrites } from './0_contenido'
import { presentacionRewrites } from './01_presentacion'
import { fundamentosWebRewrites } from './02_fundamentos_web'
import { fundamentosArquitecturaRewrites } from './03_fundamentos_arquitectura'
import { dockerRewrites } from './06_docker'
import { phpRewrites } from './08_php'
import {entornosHerramientasRewrites} from "./04_entornos_herramientas";

export const rewrites: Record<string, string> = {
    ...contenidoRewrites,
    ...presentacionRewrites,
    ...fundamentosWebRewrites,
    ...fundamentosArquitecturaRewrites,
    ...dockerRewrites,
    ...phpRewrites,
    ...entornosHerramientasRewrites,
}