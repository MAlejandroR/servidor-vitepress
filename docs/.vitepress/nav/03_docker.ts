import type { DefaultTheme } from 'vitepress'
import { icon } from './utils'

export const docker: DefaultTheme.SidebarItem[] = [
    {
        text: icon('fa-brands fa-docker', 'Docker'),
        link: '/docker/',
        collapsed: false,
        items: [
            {
                text: icon('fa-solid fa-lightbulb', 'Conceptos'),
                link: '/docker/conceptos/'
            },
            {
                text: icon('fa-solid fa-cubes', 'Contenedores e imágenes'),
                link: '/docker/contenedores-imagenes/'
            },
            {
                text: icon('fa-solid fa-download', 'Instalaciones'),
                link: '/docker/instalaciones/'
            },
            {
                text: icon('fa-solid fa-terminal', 'Comandos'),
                link: '/docker/comandos/'
            },
            {
                text: icon('fa-solid fa-file-code', 'Dockerfile'),
                link: '/docker/dockerfile/'
            },
            {
                text: icon('fa-solid fa-layer-group', 'Docker Compose'),
                link: '/docker/compose/'
            },
            {
                text: icon('fa-solid fa-laptop-code', 'Práctica'),
                link: '/docker/practica/'
            },
            {
                text: icon('fa-solid fa-arrows-rotate', 'Práctica Docker Inverse'),
                link: '/docker/practica-docker-inverse/'
            }
        ]
    }
]