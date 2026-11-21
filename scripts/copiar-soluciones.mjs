import { cpSync, existsSync, mkdirSync } from 'node:fs'

const origen = 'docs/04_php/12_formularios/ejercicios/soluciones'
const destino = 'docs/.vitepress/dist/php/formularios/ejercicios/soluciones'

if (existsSync(origen)) {
    mkdirSync(destino, { recursive: true })
    cpSync(origen, destino, { recursive: true, force: true })

    console.log('✓ Soluciones PHP copiadas correctamente')
}