import type { DefaultTheme } from 'vitepress'
import { icon } from './utils.ts'

export const presentacion: DefaultTheme.SidebarItem[] = [
    {
        text: icon('fa-solid fa-graduation-cap', 'PRESENTACIÓN'),
        collapsed: false,
        items: [
            {
                text: icon('fa-solid fa-bullseye', 'Objetivos'),
                link: '/presentacion/',
            },
            {
                text: icon('fa-solid fa-chalkboard-user', 'Presentación'),
                link: '/presentacion/el-modulo',
            },
            {
                text: icon('fa-solid fa-rocket', 'Motivación'),
                link: '/presentacion/motivacion',
            },
        ],
    },
]