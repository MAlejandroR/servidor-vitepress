import type { DefaultTheme } from 'vitepress'
import { icon } from './utils'

export const arquitecturaWeb: DefaultTheme.SidebarItem[] = [
    {
        text: icon('fa-solid fa-sitemap', 'Conceptos y arquitectura web'),
        collapsed: false,
        items: [
            {
                text: 'Conceptos y arquitectura web',
                link: '/arquitectura-web/'
            }
        ]
    }
]