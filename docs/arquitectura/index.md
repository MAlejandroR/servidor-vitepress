# Arquitectura del proyecto DAWS (VitePress)

> **Estado:** propuesta de reorganización, pendiente de aplicar y verificar.  
> **Principio:** simplificar sin romper los apuntes existentes.  
> **Alcance actual:** containers Markdown-it y componentes Vue. La unificación de estilos es una segunda fase.

## 1. Criterios de diseño

- **Container Markdown-it** para bloques didácticos de contenido Markdown con título, icono y cuerpo.
- **Componente Vue** para interactividad, estado, ejecución de código o presentaciones reutilizables cuya implementación lo justifique.
- Un solo registro por nombre de container.
- Un archivo de definición por container, con una función común de creación.
- Mantener la sintaxis pública y el HTML/CSS actuales durante la migración; cualquier cambio visual debe ser deliberado.
- No eliminar archivos ni cambiar nombres sin localizar antes todas sus referencias.

## 2. Estructura objetivo

```text
docs/.vitepress/
├── ARQUITECTURA.md
├── config.mts
├── markdowns/
│   ├── index.ts                 # Registro único
│   ├── crearContainer.ts        # Funcionalidad compartida
│   └── containers/
│       ├── objetivos.ts
│       ├── definicion.ts
│       ├── pageinfo.ts
│       ├── recuerda.ts
│       ├── practica.ts
│       ├── pregunta.ts
│       └── previo.ts
└── theme/
    ├── index.ts
    ├── components/
    │   ├── ejercicios/
    │   ├── PhpRunner.vue
    │   ├── Quiz.vue
    │   └── ...
    └── css/
        ├── colores.css          # Segunda fase
        └── containers.css
```

**Importante:** la estructura anterior es objetivo, no una descripción comprobada del árbol completo actual. Conservar los nombres y rutas reales cuando difieran.

## 3. Inventario de containers actuales

| Nombre | Función | Decisión provisional | Observaciones |
|---|---|---|---|
| `objetivos` | Objetivos de aprendizaje | Mantener | Registrado **dos veces** en `containers.ts`; conservar título interior grande |
| `definicion` | Definir conceptos | Mantener | Existe un archivo `definicion.ts` incompleto; no registrarlo junto al actual |
| `pageinfo` | Información complementaria | Mantener | Conservar su presentación, que ya funciona |
| `recuerda` | Idea importante | Mantener | Diferenciar de `pageinfo` por finalidad |
| `practica` | Tarea que realiza el alumnado | Mantener | Revisar solapamiento con `actividad` |
| `actividad` | Actividad inmediata | Revisar/fusionar | Mantener como alias temporal si ya se utiliza |
| `pregunta` | Pregunta de reflexión | Mantener | Bloque didáctico propio |
| `previo` | Conocimientos previos | Mantener | Bloque didáctico propio |
| `finalidad` | Resultado esperado | Revisar | Posible solapamiento con `objetivos` |
| `referencias` | Recursos y fuentes | Revisar | Valorar Markdown normal si no requiere estilo propio |

### Sintaxis prevista

````md
:::definicion Variable | fa-solid fa-book-open
Una variable permite acceder a un valor.
:::

:::pageinfo PHP genera la respuesta | fa-solid fa-lightbulb
PHP se ejecuta en el servidor.
:::

:::objetivos Qué aprenderemos | fa-solid fa-list-check
- Comprender las variables.
- Utilizar los tipos de datos.
:::
````

La sintaxis con `|` indica título e icono opcional. El formato concreto de `objetivos` debe conservar su título interior.

## 4. Reglas para los containers

1. Cada container se registra **una sola vez** desde `markdowns/index.ts`.
2. La lógica de lectura de título, icono y escape HTML se centraliza en `crearContainer.ts`.
3. Las particularidades visuales se expresan mediante clases CSS; `objetivos` puede requerir una variante de plantilla.
4. Se usa `md.utils.escapeHtml()` para los valores que se incorporan como texto o atributos.
5. Los nombres de las clases existentes (`daws-objetivos`, `daws-pageinfo`, etc.) se preservan hasta migrar el CSS.
6. No cambiar la semántica de un container sin actualizar este documento y los apuntes afectados.

## 5. Inventario de componentes Vue

| Componente | Decisión provisional | Motivo o revisión |
|---|---|---|
| `Objetivos.vue` | Migrar gradualmente a container | Duplica el bloque `objetivos` |
| `Definicion.vue` | Migrar gradualmente a container | Revisar usos y props antes de retirar |
| `Ejercicio.vue` | Mantener | Ejercicios reutilizables |
| `TituloEjercicio.vue` | Revisar | Comprobar si debe integrarse en `Ejercicio.vue` |
| `PhpRunner.vue` | Mantener | Ejecución interactiva de PHP |
| `Quiz.vue` | Mantener | Interactividad |
| `DropDown.vue` | Mantener | Interacción y posible contraseña |
| `CollapsibleHeading.vue` | Mantener | Comportamiento de plegado |
| `IndiceCurso.vue` | Mantener | Índice de tarjetas |
| `RequestJourney.vue` | Mantener | Visualización especializada |
| `StackOficial.vue` | Mantener | Visualización especializada |
| `ObjetivosModulo.vue` | Mantener | Presentación del módulo; revisar posible duplicidad conceptual |
| `Cmd.vue`, `CmdPane.vue` | Revisar conjuntamente | Posible relación contenedor/contenido |
| `Card.vue`, `CardPane.vue` | Revisar conjuntamente | Posible relación contenedor/contenido |
| `Color.vue` | Mantener si se usa | Utilidad visual |
| `ButtonSlides.vue` | Mantener | Enlace a diapositivas |
| `PrintButton.vue` | Mantener | Impresión |
| `EnConstruccion.vue` | Mantener | Estado de contenido |
| `VisitorCount.vue` | Mantener si se usa | Contador de visitas |

**Regla:** un componente sin `<script>` puede seguir teniendo sentido si encapsula una presentación reutilizable; no debe eliminarse solo por carecer de lógica JavaScript. El criterio es si duplica otra abstracción.

## 6. Sistema de colores (segunda fase)

Paleta provisional aprobada para estudiar y ajustar sobre las páginas reales:

| Rol | Valor |
|---|---|
| Azul principal / cabecera | `#24547D` |
| Azul hover | `#173B59` |
| Verde objetivos | `#176B50` |
| Ámbar `pageinfo` | `#9A5B08` |
| Fondo `pageinfo` | `#FFF7E8` |
| Fondo objetivos | `#EAF5EE` |
| Texto principal | `#263445` |
| Texto secundario / TOC | `#64748B` |
| Bordes | `#E2E8F0` |

- Azul: identidad, navegación, enlaces y botones principales.
- Verde: objetivos, aprendizaje y ejecución de código.
- Ámbar: información destacada, actividades y advertencias diferenciadas por icono/título.
- Rojo: errores y acciones destructivas, no navegación ordinaria.
- `pageinfo`: mantener su estructura actual y valorar el ámbar oscuro.
- Definir variables en `theme/css/colores.css` y consumirlas desde los estilos existentes.
- Revisar modo oscuro y contraste antes de cerrar la paleta.

## 7. Plan de migración reversible

- [ ] Crear una rama Git de trabajo o commit de respaldo.
- [ ] Buscar usos de todos los containers (`:::nombre`) y componentes (`<Nombre`).
- [ ] Resolver el doble registro de `objetivos` sin cambiar el HTML resultante.
- [ ] Revisar `definicion.ts` incompleto y el registro real en `config.mts`.
- [ ] Crear `markdowns/index.ts` como punto único de registro.
- [ ] Separar un container cada vez, manteniendo sintaxis y clases.
- [ ] Comprobar `npm run docs:dev` y `npm run docs:build` tras cada grupo de cambios.
- [ ] Verificar páginas representativas de objetivos, definición, pageinfo y prácticas.
- [ ] Retirar componentes redundantes solo después de migrar sus usos.
- [ ] Centralizar colores y revisar contraste, TOC, botones y modo oscuro.

## 8. Convención de mantenimiento

Cuando se cree o modifique un elemento, registrar:

1. **Nombre y propósito**: qué necesidad cubre.
2. **Ubicación**: archivo de implementación y archivo de estilos.
3. **Uso**: ejemplo mínimo de Markdown o Vue.
4. **Dependencias**: otros componentes o registros requeridos.
5. **Estado**: activo, pendiente de migración o retirado.

**Regla principal:** no añadir un container o componente nuevo si uno existente puede resolver el caso de forma clara y sin complejidad adicional.
# Arquitectura DAWS — Containers Markdown-it

## Objetivo
Un registro por container, un fichero de configuración por tipo y un único generador `crearContainer.ts`. Esta primera fase **no cambia los estilos CSS ni los contenidos Markdown**.

## Ubicación
Los archivos del directorio `markdows/` se copian a `docs/.vitepress/markdows/` (se conserva el nombre real actual, aunque tenga una errata).

## Catálogo

| Container | Uso | Diseño HTML actual | Sintaxis |
|---|---|---|---|
| objetivos | Objetivos de aprendizaje | especial, cabecera + título interior | `::: objetivos Tema` |
| finalidad | Propósito del aprendizaje | clásico (kicker/sub/body) | `::: finalidad Subtítulo` |
| referencias | Fuentes de consulta | clásico | `::: referencias Subtítulo` |
| previo | Conocimientos previos | clásico | `::: previo Subtítulo` |
| actividad | Tarea de aula | clásico | `::: actividad Subtítulo` |
| pregunta | Reflexión | clásico | `::: pregunta Subtítulo` |
| pageinfo | Información complementaria | cabecera + cuerpo | `::: pageinfo Título \| fa-solid fa-lightbulb` |
| definicion | Conceptos | cabecera + cuerpo | `::: definicion Variable \| fa-solid fa-code` |
| recuerda | Ideas clave | cabecera + cuerpo | `::: recuerda Título` |
| practica | Aplicación práctica | cabecera + cuerpo | `::: practica Título` |

**Nota:** En los cinco containers clásicos, el texto después del nombre sigue siendo un subtítulo completo, incluso si contiene `|`. No se cambia esa semántica en esta fase.

## Instalación reversible

1. Crear una rama Git o un commit previo: `git add . && git commit -m "Antes de reorganizar containers"`.
2. Copiar `markdows/crearContainer.ts`, `markdows/index.ts` y `markdows/containers/*.ts` a `docs/.vitepress/markdows/`.
3. **No borrar todavía** `docs/.vitepress/markdows/containers.ts` ni el antiguo `definicion.ts`.
4. En `docs/.vitepress/config.mts`, cambiar **solo** la ruta de importación de `dawsContainers` de `./markdows/containers` a `./markdows/index`. Mantener la llamada `dawsContainers(md)`.
5. Ejecutar `npm run docs:build` y revisar visualmente objetivos, definición, pageinfo, actividad, pregunta, recuerda y práctica.
6. Si hay diferencias, revertir exclusivamente el import de `config.mts`.
7. Solo tras validar, retirar los archivos antiguos no importados en otro commit.

## Compatibilidad

- Conserva las clases CSS antiguas de los diez containers.
- Conserva el doble nivel de `objetivos` (`__header`, `__content`, `__title`, `__body`).
- Conserva `__kicker`, `__sub`, `__body` en los cinco containers clásicos.
- Conserva los títulos e iconos por defecto que mostraban los registros activos.
- No modifica `Objetivos.vue` ni sus nueve usos; su migración será otra fase.
- No introduce variables de color ni altera `containers.css`.

## Decisiones pendientes

- Migración de los nueve `::: objetivos` a `:::objetivos`.
- Revisión de posibles fusiones `actividad`/`practica` y `finalidad`/`objetivos`, sin pérdida de contenido.
- Segunda fase de diseño: `colores.css`, normalización de estilos y modo oscuro.