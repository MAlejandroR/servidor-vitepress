// ===== FUNDAMENTOS WEB =====
export const fundamentosWebRewrites: Record<string, string> = {
    '02_fundamentos_web/index.md': 'fundamentos-web/index.md',
    '02_fundamentos_web/01_conceptos_generales/(.*)':
        'fundamentos-web/conceptos/(.*)',

    '02_fundamentos_web/02_redes/(.*)':
        'fundamentos-web/redes/(.*)',

    '02_fundamentos_web/03_osi_tcpip/(.*)':
        'fundamentos-web/modelos-de-red/(.*)',

    '02_fundamentos_web/04_internet/(.*)':
        'fundamentos-web/internet/(.*)',

    '02_fundamentos_web/05_www/(.*)':
        'fundamentos-web/web/(.*)',

    '02_fundamentos_web/06_http_https/(.*)':
        'fundamentos-web/http/(.*)',

    '02_fundamentos_web/07_servidores_web/(.*)':
        'fundamentos-web/servidores/(.*)',
}