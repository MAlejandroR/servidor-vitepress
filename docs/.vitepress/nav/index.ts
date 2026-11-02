import type { DefaultTheme } from 'vitepress'
import { presentacion } from './01_presentacion';
import { arquitectura } from './100_arquitectura';
import {arquitecturaWeb} from './03_arquitectura_web';
import { fundamentosWeb } from './02_fundamentos_web'
import { docker } from './03_docker'
import { php } from './07_php'
import {entornosHerramientas} from "./04_herramientas";


export const sidebar: DefaultTheme.Sidebar = {
    '/presentacion/': presentacion,
    '/fundamentos-web/': fundamentosWeb,
    '/arquitectura-web/': arquitecturaWeb,
    '/docker/': docker,
    '/php/': php,

    // Entornos y herramientas
    '/entornos-herramientas/': entornosHerramientas,
    '/entornos/linux/': entornosHerramientas,
    '/herramientas/git/': entornosHerramientas,
    '/herramientas/ia/': entornosHerramientas,

}
