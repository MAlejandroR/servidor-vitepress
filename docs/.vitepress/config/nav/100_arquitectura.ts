import type { DefaultTheme } from 'vitepress'
import { icon } from './utils'

export const arquitectura: DefaultTheme.SidebarItem[] = [
    {
        text: icon('fa-solid fa-sitemap', 'ARQUITECTURA'),
        collapsed: false,
        items: [
            {
                text: icon('fa-solid fa-house', 'Inicio'),
                link: '/arquitectura/',
            },
            {
                text: icon('fa-solid fa-cubes', 'Componentes'),
                link: '/arquitectura/componentes',
            },
            {
                text: icon('fa-solid fa-layer-group', 'Contenedores'),
                link: '/arquitectura/containers',
            },
            {
                text: icon('fa-solid fa-palette', 'Estilos'),
                link: '/arquitectura/estilos',
            },
        ],
    },
]