
import type { DefaultTheme } from 'vitepress'
import { icon } from './utils'

export const fundamentosWeb: DefaultTheme.SidebarItem[] = [
    {
        text: icon('fa-solid fa-globe', 'FUNDAMENTOS WEB'),
        collapsed: false,
        items: [
            {
                text: icon('fa-solid fa-house', 'Introducción'),
                link: '/fundamentos-web/',
            },
            {
                text: icon('fa-solid fa-lightbulb', 'Conceptos generales'),
                link: '/fundamentos-web/conceptos/',
            },
            {
                text: icon('fa-solid fa-network-wired', 'Redes'),
                link: '/fundamentos-web/redes/',
            },
            {
                text: icon('fa-solid fa-layer-group', 'OSI y TCP/IP'),
                link: '/fundamentos-web/modelos-de-red/',
            },
            {
                text: icon('fa-solid fa-globe', 'Internet'),
                link: '/fundamentos-web/internet/',
            },
            {
                text: icon('fa-solid fa-earth-europe', 'World Wide Web'),
                link: '/fundamentos-web/web/',
            },
            {
                text: icon('fa-solid fa-arrow-right-arrow-left', 'HTTP y HTTPS'),
                link: '/fundamentos-web/http/',
            },
            {
                text: icon('fa-solid fa-server', 'Servidores web'),
                link: '/fundamentos-web/servidores/',
            },
        ],
    },
]
