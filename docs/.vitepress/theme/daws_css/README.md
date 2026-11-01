# Refactor CSS de VitePress DAWS

Archivos listos para copiar a `docs/.vitepress/theme/`:

- `custom.css` en la raíz de `theme/`.
- Los otros seis archivos en `theme/styles/`.

En `theme/index.ts`, importar `styles/colors.css` **antes** de los otros CSS:

```ts
import './styles/colors.css'
import './custom.css'
import './styles/containers.css'
import './styles/sumary.css'
import './styles/table.css'
import './styles/title.css'
import './styles/hero.css'
```

Mantener los imports restantes del proyecto (tema VitePress, fuentes, Font Awesome, etc.).

## Cambios intencionados

- Paleta nueva: azul petróleo, verde, ámbar, violeta y teal.
- Titulares H1/H2/H3 cambian a azul/verde/gris.
- Contenedores se unifican en márgenes, bordes, sombras y tipografía.
- Texto base 20px; listas, párrafos y celdas heredan tamaño.
- Se mantienen clases HTML existentes y estilos auxiliares.
- El modo oscuro usa superficies propias y texto de VitePress.

## Verificación

1. Hacer commit de los CSS actuales antes de sustituirlos.
2. Ejecutar `npm run docs:dev` y revisar página con los diez containers, la portada y una página con tablas e índice.
3. Ejecutar `npm run docs:build`.
4. Revisar especialmente títulos H1/H2/H3, modo oscuro y cualquier CSS scoped de componentes Vue.

Los colores del diseño cambian respecto al CSS original; no es una refactorización visualmente idéntica.
