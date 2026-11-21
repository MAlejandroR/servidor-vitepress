// ===== PHP =====
export const phpRewrites: Record<string, string> = {
    '04_php/index.md': 'php/index.md',
    '04_php/01_introduccion/(.*)': 'php/introduccion/(.*)',
    '04_php/03_empezando/(.*)': 'php/empezando/(.*)',
    '04_php/04_escribiendo/(.*)': 'php/escribiendo/(.*)',
    '04_php/05_declaraciones/(.*)': 'php/declaraciones/(.*)',
    '04_php/06_tipos/01_Int/(.*)': 'php/tipo-entero/(.*)',
    '04_php/06_tipos/02_NullBool/(.*)': 'php/tipo-bool/(.*)',
    '04_php/06_tipos/03_String/(.*)': 'php/tipo-string/(.*)',
    '04_php/06_tipos/(.*)': 'php/tipos/(.*)',

    '04_php/07_estructuras_control/index.md': 'php/estructuras-control/index.md',
    '04_php/07_estructuras_control/01_selectivo/index.md': 'php/estructuras-selectivas/index.md',
    '04_php/07_estructuras_control/02_repetitivo/index.md': 'php/estructuras-repetitivas/index.md',

    '04_php/08_expresiones/(.*)': 'php/expresiones/(.*)',
    '04_php/09_funciones/(.*)': 'php/funciones/(.*)',
    '04_php/10_otros_aspectosw/(.*)': 'php/otros-aspectos/(.*)',
    '04_php/11_arrays/(.*)': 'php/arrays/(.*)',
    '04_php/12_formularios/(.*)': 'php/formularios/(.*)',
    '04_php/13_objetos/(.*)': 'php/objetos/(.*)',
    '04_php/13_1_composer/(.*)': 'php/composer/(.*)',
    '04_php/14_persistencia/(.*)': 'php/persistencia/(.*)',
    '04_php/15_base_de_datos/(.*)': 'php/bases-de-datos/(.*)',
    '04_php/16_ejercicios/:path(.*)': 'php/ejercicios/:path(.*)',
}