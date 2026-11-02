import {defineConfig} from 'vitepress'
import {withMermaid} from 'vitepress-plugin-mermaid'
import {fetchVisitCount, goatCounter} from './site'
import {dawsContainers} from './markdows'
import footnote from 'markdown-it-footnote';
import {fileURLToPath, URL} from 'node:url'
import {sidebar} from "./nav/index.ts";
import {rewrites}    from "./rewrites/index.ts";


const dawsVisitCount = await fetchVisitCount()

export default withMermaid(
    defineConfig({
        lang: 'es',
        title: 'DAWS',
        description:
            'Desarrollo web en entorno servidor: PHP, Laravel, Docker, Git y el viaje de una petición HTTP.',
        vite: {
            define: {
                __DAWS_VISIT_COUNT__: JSON.stringify(dawsVisitCount),
            },
            resolve: {
                // alias para establecer el dir de los apuntes (en docs)
                alias: {
                    '@apuntes': fileURLToPath(new URL('../', import.meta.url))
                }
            }
        },

        markdown: {
            lineNumbers: true,
            config(md) {
                dawsContainers(md);
                md.use(footnote);
            },
            toc: {
                level: [1, 2, 3, 4],
            },

        },

        mermaid: {
            theme: 'default',
            securityLevel: 'loose',
        },

        head: goatCounter
            ? [
                [
                    'script',
                    {
                        'data-goatcounter': `https://${goatCounter}.goatcounter.com/count`,
                        async: 'true',
                        src: '//gc.zgo.at/count.js',
                    },
                ],
            ]
            : [],

        srcExclude: ['php_distancia/**'],

        rewrites,

        themeConfig: {
            nav: [
                {
                    text: 'Inicio',
                    link: '/',
                },
                {
                    text: 'Contenido',
                    link: '/contenido/',
                },

            ],




            sidebar,

            outline:
                'deep',

            socialLinks:
                [
                    {
                        icon: 'github',
                        link: 'https://github.com/MAlejandroR/servidor-vitepress'
                    }
                ],

            editLink:
                {
                    pattern: 'https://github.com/MAlejandroR/servidor-vitepress/edit/main/docs/:path',
                    text:
                        '✏️ Proponer una mejora'
                }
            ,
            search: {
                provider: 'local',
                options:
                    {
                        translations: {
                            button: {
                                buttonText: 'Buscar',
                                buttonAriaLabel:
                                    'Buscar en los apuntes',
                            }
                            ,
                            modal: {
                                displayDetails: 'Mostrar vista detallada',
                                resetButtonTitle:
                                    'Limpiar búsqueda',
                                backButtonTitle:
                                    'Cerrar búsqueda',
                                noResultsText:
                                    'No hay resultados para',
                                footer:
                                    {
                                        selectText: 'para seleccionar',
                                        selectKeyAriaLabel:
                                            'entrar',
                                        navigateText:
                                            'para navegar',
                                        navigateUpKeyAriaLabel:
                                            'arriba',
                                        navigateDownKeyAriaLabel:
                                            'abajo',
                                        closeText:
                                            'para cerrar',
                                        closeKeyAriaLabel:
                                            'escape',
                                    }
                                ,
                            }
                            ,
                        }
                        ,
                    }
                ,
            }
            ,
        }
        ,
    }),
)