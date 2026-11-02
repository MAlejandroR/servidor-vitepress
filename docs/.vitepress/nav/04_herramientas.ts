import type { DefaultTheme } from 'vitepress'
import { icon } from './utils'

export const entornosHerramientas: DefaultTheme.SidebarItem[] = [
    {
        text: icon('fa-solid fa-screwdriver-wrench', 'Entornos y herramientas'),
        collapsed: false,
        link: '/entornos-herramientas/',
        items: [
            {
                text: icon('fa-brands fa-linux', 'Linux y terminal'),
                link: '/entornos/linux/'
            },
            {
                text: icon('fa-brands fa-git-alt', 'Git y GitHub'),
                link: '/herramientas/git/'
            },
            {
                text: icon('fa-solid fa-robot', 'Inteligencia artificial'),
                link: '/herramientas/ia/'
            },
            {
                text: icon('fa-solid fa-gears', 'Instalaciones'),
                link: '/entornos-herramientas/instalaciones/'
            }
        ]
    }
]