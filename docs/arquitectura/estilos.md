# Sistema de estilos DAWS

## 1. Organización de los archivos CSS

| Archivo | Responsabilidad |
|---|---|
| `styles/colors.css` | Variables de colores y paleta del proyecto |
| `styles/containers.css` | Estilos de los 10 containers Markdown-it |
| `styles/hero.css` | Portada, botones y página de contenidos |
| `styles/sumary.css` | Índices de contenidos de los temas |
| `styles/table.css` | Tablas personalizadas |
| `styles/title.css` | Títulos, numeración automática y cabecera |
| `custom.css` | Tipografía, layout y estilos generales de VitePress |
| `<style scoped>` de Vue | Estilos exclusivos de cada componente |

**Criterio:** los colores se definen en `colors.css` y se utilizan mediante variables CSS en el resto de los archivos.

---

## 2. Paleta de colores

### 2.1. Colores principales

| Elemento | Muestra | Color HEX | Variable CSS | Aplicación |
|---|---|---|---|---|
| Principal | <span style="display:inline-block;width:45px;height:22px;background:#24547D;border-radius:4px"></span> | `#24547D` | `--daws-primary` | Cabecera, enlaces, botones |
| Principal hover | <span style="display:inline-block;width:45px;height:22px;background:#173B59;border-radius:4px"></span> | `#173B59` | `--daws-primary-hover` | Hover de botones y enlaces |
| Principal claro | <span style="display:inline-block;width:45px;height:22px;background:#E8F1F8;border:1px solid #ccc;border-radius:4px"></span> | `#E8F1F8` | `--daws-primary-light` | Fondos azules suaves |
| Verde | <span style="display:inline-block;width:45px;height:22px;background:#176B50;border-radius:4px"></span> | `#176B50` | `--daws-green` | Objetivos y prácticas |
| Ámbar | <span style="display:inline-block;width:45px;height:22px;background:#9A5B08;border-radius:4px"></span> | `#9A5B08` | `--daws-amber` | Información y recordatorios |
| Rojo | <span style="display:inline-block;width:45px;height:22px;background:#B91C1C;border-radius:4px"></span> | `#B91C1C` | `--daws-red` | Errores y alertas |
| Violeta | <span style="display:inline-block;width:45px;height:22px;background:#6D28D9;border-radius:4px"></span> | `#6D28D9` | `--daws-violet` | Preguntas |
| Verde azulado | <span style="display:inline-block;width:45px;height:22px;background:#0F766E;border-radius:4px"></span> | `#0F766E` | `--daws-teal` | Conocimientos previos |

### 2.2. Colores de texto y superficies

| Elemento | Muestra | Color HEX | Variable CSS | Aplicación |
|---|---|---|---|---|
| Texto principal | <span style="display:inline-block;width:45px;height:22px;background:#263445;border-radius:4px"></span> | `#263445` | `--daws-text` | Texto general |
| Texto secundario | <span style="display:inline-block;width:45px;height:22px;background:#64748B;border-radius:4px"></span> | `#64748B` | `--daws-text-muted` | Notas y metadatos |
| Fondo principal | <span style="display:inline-block;width:45px;height:22px;background:#FFFFFF;border:1px solid #ccc;border-radius:4px"></span> | `#FFFFFF` | `--daws-bg` | Fondo general |
| Fondo suave | <span style="display:inline-block;width:45px;height:22px;background:#F5F7FA;border:1px solid #ccc;border-radius:4px"></span> | `#F5F7FA` | `--daws-bg-soft` | Superficies secundarias |
| Borde neutro | <span style="display:inline-block;width:45px;height:22px;background:#E2E8F0;border:1px solid #ccc;border-radius:4px"></span> | `#E2E8F0` | `--daws-border` | Bordes generales |

### 2.3. Fondos semánticos

| Elemento | Muestra | Color HEX | Variable CSS | Aplicación |
|---|---|---|---|---|
| Fondo verde | <span style="display:inline-block;width:45px;height:22px;background:#EAF5EE;border:1px solid #ccc;border-radius:4px"></span> | `#EAF5EE` | `--daws-green-light` | Objetivos y prácticas |
| Fondo azul | <span style="display:inline-block;width:45px;height:22px;background:#EEF4F9;border:1px solid #ccc;border-radius:4px"></span> | `#EEF4F9` | `--daws-blue-light` | Definiciones y referencias |
| Fondo ámbar | <span style="display:inline-block;width:45px;height:22px;background:#FFF7E8;border:1px solid #ccc;border-radius:4px"></span> | `#FFF7E8` | `--daws-amber-light` | Información y recordatorios |
| Fondo violeta | <span style="display:inline-block;width:45px;height:22px;background:#F3E8FF;border:1px solid #ccc;border-radius:4px"></span> | `#F3E8FF` | `--daws-violet-light` | Preguntas |
| Fondo verde azulado | <span style="display:inline-block;width:45px;height:22px;background:#E6F5F2;border:1px solid #ccc;border-radius:4px"></span> | `#E6F5F2` | `--daws-teal-light` | Conocimientos previos |

---

## 3. Tipografía

Fuente general: **Verdana, sans-serif**.

Tamaño base del contenido: **20px**.

| Elemento | Fuente | Tamaño | Peso | Interlineado | Archivo |
|---|---|---|---|---|---|
| Texto general | Verdana | 20px | 400 | 1.5 | `custom.css` |
| Párrafos | Verdana | 20px | 400 | 1.5 | `custom.css` |
| Listas | Verdana | 20px | 400 | 1.5 | `custom.css` |
| Tablas | Verdana | 20px | 400 | 1.5 | `custom.css` |
| H1 | Verdana | 2rem (32px) | 700 | 1.3 | `title.css` |
| H2 | Verdana | 1.6rem (25.6px) | 700 | 1.3 | `title.css` |
| H3 | Verdana | 1.35rem (21.6px) | 700 | 1.3 | `title.css` |
| Texto secundario | Verdana | 0.9rem (14.4px) | 400 | 1.5 | `custom.css` |
| Código inline | Monoespaciada | 0.95em | 400 | Normal | VitePress |
| Código en bloques | Monoespaciada | Según VitePress | 400 | Según VitePress | VitePress |
| Cabecera de container | Verdana | 1.25rem (20px) | 700 | 1.4 | `containers.css` |
| Cuerpo de container | Verdana | Heredado (20px) | 400 | 1.5 | `containers.css` |
| Subtítulo de container | Verdana | 1.1rem (17.6px) | 700 | 1.4 | `containers.css` |
| Título interior de objetivos | Verdana | 1.5rem (24px) | 800 | 1.4 | `containers.css` |
| Índice de tema | Verdana | 0.82rem (13.12px) | 400 | 1.45 | `sumary.css` |
| Sidebar | Verdana | Según VitePress | 400/700 | Según VitePress | `custom.css` |

> Los valores en `rem` se calculan suponiendo un tamaño raíz de 16px.

### Colores de los títulos

| Elemento | Muestra | Color HEX | Variable CSS | Archivo |
|---|---|---|---|---|
| H1 | <span style="display:inline-block;width:45px;height:22px;background:#24547D;border-radius:4px"></span> | `#24547D` | `--daws-primary` | `title.css` |
| H2 | <span style="display:inline-block;width:45px;height:22px;background:#176B50;border-radius:4px"></span> | `#176B50` | `--daws-green` | `title.css` |
| H3 | <span style="display:inline-block;width:45px;height:22px;background:#334155;border-radius:4px"></span> | `#334155` | `--daws-heading-3` | `title.css` |
| H4 | <span style="display:inline-block;width:45px;height:22px;background:#475569;border-radius:4px"></span> | `#475569` | `--daws-heading-4` | `title.css` |

La numeración automática se mantiene en `title.css` para H1, H2 y H3.

---

## 4. Colores de los containers

Todos los containers utilizan `styles/containers.css`.

Los colores se definen en `styles/colors.css`.

| Container | Muestra principal | Color principal | Muestra fondo | Color fondo | Uso |
|---|---|---|---|---|---|
| `objetivos` | <span style="display:inline-block;width:45px;height:22px;background:#176B50;border-radius:4px"></span> | `#176B50` | <span style="display:inline-block;width:45px;height:22px;background:#EAF5EE;border:1px solid #ccc;border-radius:4px"></span> | `#EAF5EE` | Objetivos del tema |
| `finalidad` | <span style="display:inline-block;width:45px;height:22px;background:#24547D;border-radius:4px"></span> | `#24547D` | <span style="display:inline-block;width:45px;height:22px;background:#EEF4F9;border:1px solid #ccc;border-radius:4px"></span> | `#EEF4F9` | Aplicación de lo aprendido |
| `previo` | <span style="display:inline-block;width:45px;height:22px;background:#0F766E;border-radius:4px"></span> | `#0F766E` | <span style="display:inline-block;width:45px;height:22px;background:#E6F5F2;border:1px solid #ccc;border-radius:4px"></span> | `#E6F5F2` | Conocimientos previos |
| `definicion` | <span style="display:inline-block;width:45px;height:22px;background:#24547D;border-radius:4px"></span> | `#24547D` | <span style="display:inline-block;width:45px;height:22px;background:#EEF4F9;border:1px solid #ccc;border-radius:4px"></span> | `#EEF4F9` | Conceptos |
| `pageinfo` | <span style="display:inline-block;width:45px;height:22px;background:#9A5B08;border-radius:4px"></span> | `#9A5B08` | <span style="display:inline-block;width:45px;height:22px;background:#FFF7E8;border:1px solid #ccc;border-radius:4px"></span> | `#FFF7E8` | Información adicional |
| `recuerda` | <span style="display:inline-block;width:45px;height:22px;background:#9A5B08;border-radius:4px"></span> | `#9A5B08` | <span style="display:inline-block;width:45px;height:22px;background:#FFF7E8;border:1px solid #ccc;border-radius:4px"></span> | `#FFF7E8` | Ideas importantes |
| `actividad` | <span style="display:inline-block;width:45px;height:22px;background:#24547D;border-radius:4px"></span> | `#24547D` | <span style="display:inline-block;width:45px;height:22px;background:#EEF4F9;border:1px solid #ccc;border-radius:4px"></span> | `#EEF4F9` | Tareas de aprendizaje |
| `practica` | <span style="display:inline-block;width:45px;height:22px;background:#176B50;border-radius:4px"></span> | `#176B50` | <span style="display:inline-block;width:45px;height:22px;background:#EAF5EE;border:1px solid #ccc;border-radius:4px"></span> | `#EAF5EE` | Ejercicios prácticos |
| `pregunta` | <span style="display:inline-block;width:45px;height:22px;background:#6D28D9;border-radius:4px"></span> | `#6D28D9` | <span style="display:inline-block;width:45px;height:22px;background:#F3E8FF;border:1px solid #ccc;border-radius:4px"></span> | `#F3E8FF` | Reflexión y debate |
| `referencias` | <span style="display:inline-block;width:45px;height:22px;background:#24547D;border-radius:4px"></span> | `#24547D` | <span style="display:inline-block;width:45px;height:22px;background:#EEF4F9;border:1px solid #ccc;border-radius:4px"></span> | `#EEF4F9` | Documentación y fuentes |

### Estructura de los containers

| Container | Estructura HTML | Personalización |
|---|---|---|
| `objetivos` | Cabecera + título interior + cuerpo | Título e icono |
| `finalidad` | Etiqueta + subtítulo + cuerpo | Subtítulo |
| `previo` | Etiqueta + subtítulo + cuerpo | Subtítulo |
| `definicion` | Cabecera + cuerpo | Título e icono |
| `pageinfo` | Cabecera + cuerpo | Título e icono |
| `recuerda` | Cabecera + cuerpo | Título e icono |
| `actividad` | Etiqueta + subtítulo + cuerpo | Subtítulo |
| `practica` | Cabecera + cuerpo | Título e icono |
| `pregunta` | Etiqueta + subtítulo + cuerpo | Subtítulo |
| `referencias` | Etiqueta + subtítulo + cuerpo | Subtítulo |

---

## 5. Estilos estructurales

### Containers

| Elemento | Propiedad | Valor | Archivo |
|---|---|---|---|
| Container | Margen vertical | `1.5rem` | `containers.css` |
| Container | Margen horizontal | `3%` | `containers.css` |
| Container en móvil | Margen horizontal | `0` | `containers.css` |
| Container | Borde | `2px solid` | `containers.css` |
| Container | Radio de borde | `10px` | `containers.css` |
| Container | Sombra | `6px 6px 0` | `containers.css` |
| Cabecera | Padding | `0.7rem 1rem` | `containers.css` |
| Cuerpo | Padding | `1rem 1.25rem` | `containers.css` |
| Cuerpo | Tamaño de letra | Heredado (20px) | `containers.css` |
| Cuerpo | Interlineado | `1.5` | `containers.css` |
| Iconos de cabecera | Tamaño | `1.2rem` | `containers.css` |

### Layout general

| Elemento | Propiedad | Valor | Archivo |
|---|---|---|---|
| Sidebar izquierdo | Anchura | `220px` | `custom.css` |
| Layout | Anchura máxima | `1800px` | `custom.css` |
| Contenido sin outline | Anchura máxima | Sin límite adicional | `custom.css` |
| Página de contenidos | Anchura máxima | `1200px` | `hero.css` |
| Texto general | Tamaño | `20px` | `custom.css` |
| Texto general | Interlineado | `1.5` | `custom.css` |
| Fuente | Familia | `Verdana, sans-serif` | `custom.css` |
| Imágenes | Radio de borde | `16px` | `custom.css` |
| Separadores `hr` | Grosor | `3px` | `custom.css` |

### Tablas

| Elemento | Propiedad | Valor | Archivo |
|---|---|---|---|
| Tabla comparativa | Anchura máxima | `750px` | `table.css` |
| Tabla comparativa | Alineación | Centrada | `table.css` |
| Cabecera `th` | Fondo | `--daws-amber-light` | `table.css` |
| Cabecera `th` | Color de texto | `--daws-amber` | `table.css` |
| Cabecera `th` | Peso | 700 | `table.css` |
| Celdas | Padding | `0.7rem 1rem` | `table.css` |

### Índice de tema

| Elemento | Propiedad | Valor | Archivo |
|---|---|---|---|
| Índice | Anchura mínima abierto | `260px` | `sumary.css` |
| Índice | Fondo | `--daws-bg-soft` | `sumary.css` |
| Índice | Borde | `1px solid` | `sumary.css` |
| Índice | Tamaño de letra | `0.82rem` | `sumary.css` |
| Índice | Enlaces | `--daws-primary` | `sumary.css` |
| Índice | Interlineado | `1.45` | `sumary.css` |
| Índice plegado | Anchura | Ajustada al contenido | `sumary.css` |

---

## 6. Elementos de VitePress

| Elemento | Color principal | Muestra | Archivo |
|---|---|---|---|
| Cabecera de navegación | `#24547D` | <span style="display:inline-block;width:45px;height:22px;background:#24547D;border-radius:4px"></span> | `title.css` |
| Botón principal | `#24547D` | <span style="display:inline-block;width:45px;height:22px;background:#24547D;border-radius:4px"></span> | `custom.css` |
| Botón hover | `#173B59` | <span style="display:inline-block;width:45px;height:22px;background:#173B59;border-radius:4px"></span> | `hero.css` |
| Bloque `tip` | `#176B50` | <span style="display:inline-block;width:45px;height:22px;background:#176B50;border-radius:4px"></span> | `custom.css` |
| Bloque `info` | `#24547D` | <span style="display:inline-block;width:45px;height:22px;background:#24547D;border-radius:4px"></span> | `custom.css` |
| Bloque `warning` | `#9A5B08` | <span style="display:inline-block;width:45px;height:22px;background:#9A5B08;border-radius:4px"></span> | `custom.css` |
| Bloque `danger` | `#B91C1C` | <span style="display:inline-block;width:45px;height:22px;background:#B91C1C;border-radius:4px"></span> | `custom.css` |
| Enlaces | `#24547D` | <span style="display:inline-block;width:45px;height:22px;background:#24547D;border-radius:4px"></span> | `custom.css` |
| Enlaces hover | `#176B50` | <span style="display:inline-block;width:45px;height:22px;background:#176B50;border-radius:4px"></span> | `custom.css` |

---

## 7. Convenciones de mantenimiento

1. Los colores se definen exclusivamente en `styles/colors.css`.
2. Los demás CSS utilizan `var(--daws-...)` en lugar de repetir códigos hexadecimales.
3. La tipografía general se configura en `custom.css`.
4. La numeración y apariencia de H1, H2 y H3 se gestionan en `title.css`.
5. Todos los containers se estilizan desde `containers.css`.
6. Los componentes Vue mantienen sus estilos `scoped` cuando son específicos del componente.
7. No se repiten selectores CSS salvo cuando sea necesario por estados, responsive o modo oscuro.
8. Los containers deben respetar los estilos globales de tipografía, evitando tamaños de letra independientes sin justificación.
9. Se deben definir variantes para modo oscuro utilizando variables CSS.
10. Cualquier cambio en la paleta o tipografía debe reflejarse en este documento.

---

## 8. Estado de implementación

Este documento describe el diseño objetivo de DAWS.

Queda pendiente:

- [ ] Centralizar todas las variables en `colors.css`.
- [ ] Limpiar y reorganizar `containers.css`.
- [ ] Unificar tamaños de letra y márgenes.
- [ ] Revisar `custom.css` y eliminar duplicidades.
- [ ] Actualizar `title.css`, `hero.css`, `sumary.css` y `table.css`.
- [ ] Revisar el modo oscuro.
- [ ] Migrar `Objetivos.vue` al container `::: objetivos`.
- [ ] Comprobar visualmente los diez containers.