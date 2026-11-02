---
title: Guía de componentes Vue
description: Referencia de los componentes Vue utilizados en los apuntes DAWS.
---

# Guía de componentes Vue

Esta página recoge los componentes Vue utilizados en los apuntes de **Desarrollo Web en Entorno Servidor**.

Los componentes se encuentran principalmente en:

`docs/.vitepress/theme/components/`

::: tip
Los **containers** se utilizan para bloques de contenido (objetivos, definiciones, prácticas, referencias, etc.).

Los **componentes Vue** permiten incorporar elementos visuales especializados, reutilización e interactividad.
:::

## Catálogo de componentes

| Componente | Finalidad |
|---|---|
| [`PhpRunner`](#phprunner) | Ejecutar código PHP |
| [`Ejercicio`](#ejercicio) | Incorporar ejercicios independientes |
| [`Color`](#color) | Destacar fragmentos de texto |
| [`Cmd`](#cmd-y-cmdpane) | Documentar comandos |
| [`CmdPane`](#cmd-y-cmdpane) | Agrupar comandos |
| [`Card`](#card-y-cardpane) | Mostrar tarjetas |
| [`CardPane`](#card-y-cardpane) | Agrupar tarjetas |
| [`DropDown`](#dropdown) | Mostrar u ocultar contenido |
| [`Quiz`](#quiz) | Incorporar preguntas interactivas |
| [`ButtonSlides`](#buttonslides) | Enlazar presentaciones |
| [`EnConstruccion`](#enconstruccion) | Señalar contenido pendiente |
| [`RequestJourney`](#requestjourney) | Visualizar una petición web |
| [`ObjetivosModulo`](#objetivosmodulo) | Objetivos generales del módulo |
| [`StackOficial`](#stackoficial) | Presentar tecnologías oficiales |
| [`IndiceCurso`](#indicecurso) | Mostrar el índice del curso |

---

## PhpRunner

Permite ejecutar código PHP directamente desde los apuntes.

### Sintaxis

~~~md
<PhpRunner filename="hola.php" description="Primer programa">

```php
<?php
echo "Hola mundo";
```

</PhpRunner>
~~~

### Resultado

<PhpRunner filename="hola.php" description="Primer programa">

```php
<?php
echo "Hola mundo";
```

</PhpRunner>

---

## Ejercicio

Incorpora un ejercicio almacenado en un archivo Markdown independiente.

### Sintaxis

~~~md
<Ejercicio id="php-arrays-001" />
~~~

### Ejemplo

<!-- Activar cuando se complete el diseño del componente.

<Ejercicio id="php-arrays-001" />

-->

::: warning
Este componente está pendiente de completar su diseño.

Debe permitir reutilizar ejercicios, acceder a su URL independiente e integrar `PhpRunner`.
:::

---

## Color

Permite destacar fragmentos de texto.

### Sintaxis

~~~md
<Color>Texto destacado</Color>
~~~

### Resultado

<Color>Texto destacado</Color>

---

## Cmd y CmdPane

Estos componentes están relacionados:

- `Cmd` representa una tarjeta que explica un comando.
- `CmdPane` agrupa tarjetas en una cuadrícula responsive.

### Propiedades de Cmd

| Propiedad | Tipo | Obligatoria | Descripción |
|---|---|---|---|
| `name` | string | Sí | Nombre del comando |
| `mne` | string | No | Significado o regla mnemotécnica |
| `example` | string | No | Ejemplo de ejecución |
| `pkg` | string | No | Paquete que debe instalarse |
| `need` | string | No | Requisito previo |
| `wide` | boolean | No | Ocupa todo el ancho de la cuadrícula |

El texto delimitado por `*` dentro de `mne` se destaca mediante el componente `Color`.

### Ejemplo básico

~~~md
<Cmd
  name="pwd"
  mne="*P*rint *W*orking *D*irectory"
  example="pwd"
>
Muestra el directorio de trabajo actual.
</Cmd>
~~~

### Resultado

<Cmd
name="pwd"
mne="*P*rint *W*orking *D*irectory"
example="pwd"
>
Muestra el directorio de trabajo actual.
</Cmd>

### Agrupar comandos

~~~md
<CmdPane>

<Cmd
  name="pwd"
  mne="*P*rint *W*orking *D*irectory"
  example="pwd"
>
Muestra el directorio actual.
</Cmd>

<Cmd
  name="ls"
  mne="*L*i*s*t"
  example="ls -la"
>
Lista archivos y directorios.
</Cmd>

<Cmd
  name="cd"
  mne="*C*hange *D*irectory"
  example="cd /var/www/html"
>
Cambia de directorio.
</Cmd>

<Cmd
  name="mkdir"
  mne="*M*a*k*e *Dir*ectory"
  example="mkdir proyecto"
>
Crea un directorio.
</Cmd>

</CmdPane>
~~~

### Resultado

<CmdPane>

<Cmd
name="pwd"
mne="*P*rint *W*orking *D*irectory"
example="pwd"
>
Muestra el directorio actual.
</Cmd>

<Cmd
name="ls"
mne="*L*i*s*t"
example="ls -la"
>
Lista archivos y directorios.
</Cmd>

<Cmd
name="cd"
mne="*C*hange *D*irectory"
example="cd /var/www/html"
>
Cambia de directorio.
</Cmd>

<Cmd
name="mkdir"
mne="*M*a*k*e *Dir*ectory"
example="mkdir proyecto"
>
Crea un directorio.
</Cmd>

</CmdPane>

### Instalación de paquetes

La propiedad `pkg` genera automáticamente la instrucción `sudo apt install`.

~~~md
<Cmd
  name="tree"
  pkg="tree"
  example="tree -L 2"
>
Muestra los directorios en forma de árbol.
</Cmd>
~~~

### Resultado

<Cmd
name="tree"
pkg="tree"
example="tree -L 2"
>
Muestra los directorios en forma de árbol.
</Cmd>

### Requisitos previos

La propiedad `need` permite indicar un requisito.

~~~md
<Cmd
  name="docker"
  need="Requiere tener Docker instalado."
  example="docker ps"
>
Muestra los contenedores en ejecución.
</Cmd>
~~~

### Resultado

<Cmd
name="docker"
need="Requiere tener Docker instalado."
example="docker ps"
>
Muestra los contenedores en ejecución.
</Cmd>

### Tarjeta de ancho completo

La propiedad `wide` permite ocupar las dos columnas de `CmdPane`.

~~~md
<CmdPane>

<Cmd
  name="docker compose up"
  example="docker compose up -d --build"
  wide
>
Construye las imágenes necesarias e inicia los servicios.

La opción `-d` ejecuta los contenedores en segundo plano.
</Cmd>

<Cmd
  name="docker compose ps"
  example="docker compose ps"
>
Muestra los servicios.
</Cmd>

<Cmd
  name="docker compose down"
  example="docker compose down"
>
Detiene y elimina los contenedores.
</Cmd>

</CmdPane>
~~~

### Resultado

<CmdPane>

<Cmd
name="docker compose up"
example="docker compose up -d --build"
wide
>
Construye las imágenes necesarias e inicia los servicios.

La opción `-d` ejecuta los contenedores en segundo plano.
</Cmd>

<Cmd
name="docker compose ps"
example="docker compose ps"
>
Muestra los servicios.
</Cmd>

<Cmd
name="docker compose down"
example="docker compose down"
>
Detiene y elimina los contenedores.
</Cmd>

</CmdPane>

::: info Comportamiento responsive
- `CmdPane` utiliza una columna en pantallas pequeñas.
- A partir de 900 px muestra dos columnas.
- `wide` ocupa las dos columnas disponibles.
- Un `Cmd` también puede utilizarse fuera de `CmdPane`.
  :::

---

## DropDown

Permite mostrar y ocultar contenido utilizando el elemento HTML `<details>`.

Opcionalmente puede solicitar una contraseña antes de mostrar el contenido.

### Propiedades

| Propiedad | Tipo | Obligatoria | Descripción |
|---|---|---|---|
| `title` | string | No | Texto de la cabecera |
| `password` | string | No | Contraseña para desplegar el contenido |

Si no se indica `title`, aparece **Ver contenido**.

### Ejemplo básico

~~~md
<DropDown title="¿Qué es PHP?">

PHP es un lenguaje de programación especialmente utilizado
para desarrollar aplicaciones web en el servidor.

</DropDown>
~~~

### Resultado

<DropDown title="¿Qué es PHP?">

PHP es un lenguaje de programación especialmente utilizado
para desarrollar aplicaciones web en el servidor.

</DropDown>

### Ejemplo con código

~~~md
<DropDown title="Ver solución">

```php
<?php
$nombre = "Ana";
echo "Hola $nombre";
```

</DropDown>
~~~

### Resultado

<DropDown title="Ver solución">

```php
<?php
$nombre = "Ana";
echo "Hola $nombre";
```

</DropDown>

### Contenido protegido mediante contraseña

~~~md
<DropDown
  title="Ver solución protegida"
  password="1234"
>

La solución es **42**.

</DropDown>
~~~

### Resultado

<DropDown
title="Ver solución protegida"
password="1234"
>

La solución es **42**.

</DropDown>

::: warning Seguridad
La contraseña se incorpora al código enviado al navegador.

Por tanto, **no constituye una protección real de información confidencial**.

Es adecuada únicamente como barrera didáctica para evitar que el alumnado consulte accidentalmente una solución.
:::

---

## ButtonSlides

Permite mostrar un botón que abre una presentación en una pestaña nueva.

### Propiedades

| Propiedad | Tipo | Obligatoria | Descripción |
|---|---|---|---|
| `href` | string | Sí | URL de la presentación |

El texto del botón es fijo: **🎬 Ver diapositivas**.

### Sintaxis

~~~md
<ButtonSlides href="/slides/introduccion/" />
~~~

### Resultado

<!-- Sustituir por la URL real de una presentación existente. -->

<ButtonSlides href="/slides/introduccion/" />

::: info
El componente abre el enlace en una nueva pestaña mediante `target="_blank"`.

La ruta del ejemplo debe sustituirse por una presentación existente.
:::

---

## Card y CardPane

Permiten presentar información mediante tarjetas. `Card` representa una tarjeta y `CardPane` organiza varias tarjetas.

### Propiedades de Card

| Propiedad | Tipo | Obligatoria | Descripción |
|---|---|---|---|
| `header` | string | No | Título original de la tarjeta (se conserva por compatibilidad). |
| `title` | string | No | Nuevo nombre alternativo del título; si se indican ambos, prevalece `title`. |
| `icon` | string | No | Clases de un icono Font Awesome, por ejemplo `fa-solid fa-network-wired`. |
| `link` | string | No | Ruta interna de VitePress, respetando la configuración `base`. Abre en la misma pestaña. |
| `href` | string | No | Enlace original. Abre en una pestaña nueva si no se indica `link`. |
| `color` | string | No | Color del borde, sombra y título. Por defecto `#4f46e5`. |
| `src` | string | No | URL de una imagen mostrada dentro de la tarjeta. |
| `alt` | string | No | Texto alternativo de la imagen. Por defecto utiliza el título. |

::: tip Compatibilidad
El uso anterior con `header`, `href`, `src`, `alt` y `color` sigue funcionando. Las propiedades nuevas son opcionales. Si se indican `link` y `href`, prevalece `link`.
:::

### Ejemplo original: tarjetas de contenido

~~~md
<CardPane>

<Card header="Léxico" color="#2563eb">

Palabras y símbolos del lenguaje.

</Card>

<Card header="Sintaxis" color="#16a34a">

Reglas para construir instrucciones válidas.

</Card>

<Card header="Semántica" color="#d97706">

Significado de las instrucciones.

</Card>

</CardPane>
~~~

### Resultado

<CardPane>

<Card header="Léxico" color="#2563eb">

Palabras y símbolos del lenguaje.

</Card>

<Card header="Sintaxis" color="#16a34a">

Reglas para construir instrucciones válidas.

</Card>

<Card header="Semántica" color="#d97706">

Significado de las instrucciones.

</Card>

</CardPane>

### Nuevo uso: título, icono y enlace interno

El atributo `link` utiliza la URL pública definida por los `rewrites` de VitePress.

~~~md
<CardPane>

<Card
  title="Redes"
  icon="fa-solid fa-network-wired"
  link="/fundamentos/redes/"
  color="#2563eb"
>

Equipos, direcciones IP y comunicación.

</Card>

<Card
  title="HTTP y HTTPS"
  icon="fa-solid fa-arrow-right-arrow-left"
  link="/fundamentos/http/"
  color="#16a34a"
>

Peticiones, respuestas y comunicación segura.

</Card>

</CardPane>
~~~

### Resultado

<CardPane>

<Card
title="Redes"
icon="fa-solid fa-network-wired"
link="/fundamentos/redes/"
color="#2563eb"
>

Equipos, direcciones IP y comunicación.

</Card>

<Card
title="HTTP y HTTPS"
icon="fa-solid fa-arrow-right-arrow-left"
link="/fundamentos/http/"
color="#16a34a"
>

Peticiones, respuestas y comunicación segura.

</Card>

</CardPane>

### Enlace externo con `href` (comportamiento original)

~~~md
<Card
  header="Documentación de PHP"
  icon="fa-brands fa-php"
  href="https://www.php.net/manual/es/"
>

Consultar el manual oficial de PHP.

</Card>
~~~

### Resultado

<Card
header="Documentación de PHP"
icon="fa-brands fa-php"
href="https://www.php.net/manual/es/"
>

Consultar el manual oficial de PHP.

</Card>

### Tarjeta con imagen (comportamiento original)

~~~md
<Card
  header="PHP"
  src="/images/php.png"
  alt="Logotipo de PHP"
>

Lenguaje de programación del lado del servidor.

</Card>
~~~

La ruta de `src` es ilustrativa: utiliza una imagen que exista en tu proyecto.

---

## Quiz

Componente para incorporar preguntas interactivas.

### Ejemplo didáctico previsto

Una pregunta podría tener este contenido:

**¿Qué función de PHP devuelve el número de elementos de un array?**

- `length()`
- `count()` — correcta
- `size()`
- `sizeof_array()`

### Sintaxis del componente

La sintaxis concreta debe obtenerse de `Quiz.vue`, porque todavía no se han revisado sus propiedades.

No se incluye un `<Quiz />` vacío, ya que no garantiza que aparezca una pregunta funcional.

::: warning Pendiente
Revisar `Quiz.vue` y añadir aquí:

- Propiedades admitidas.
- Estructura de preguntas y respuestas.
- Ejemplo Markdown funcional.
- Resultado interactivo.
  :::

---

## EnConstruccion

Indica que una página o apartado está pendiente de completar.

### Sintaxis

~~~md
<EnConstruccion />
~~~

### Resultado

<EnConstruccion />

---

## RequestJourney

Representa el recorrido de una petición web.

### Sintaxis

~~~md
<RequestJourney />
~~~

### Resultado

<RequestJourney />

---

## ObjetivosModulo

Presenta los objetivos generales del módulo mediante tarjetas de colores.

Procede de una página anterior de Hugo y se mantiene como componente específico.

### Sintaxis

~~~md
<ObjetivosModulo />
~~~

### Resultado

<ObjetivosModulo />

::: info
`ObjetivosModulo` es diferente del container `::: objetivos`.

El container se utiliza para los objetivos particulares de cada tema.
:::

---

## StackOficial

Presenta tecnologías y recursos oficiales relacionados con el módulo.

### Sintaxis

~~~md
<StackOficial />
~~~

### Resultado

<StackOficial />

---

## IndiceCurso

Muestra el índice general del curso.

### Sintaxis

~~~md
<IndiceCurso />
~~~

### Resultado

<IndiceCurso />

---

## Referencias

`referencias` pertenece al sistema de **containers Markdown-it**, no a los componentes Vue.

Se utiliza para presentar recursos, enlaces o documentación de consulta.

### Sintaxis orientativa

~~~md
::: referencias

- [Documentación oficial de PHP](https://www.php.net/manual/es/)
- [Documentación de Laravel](https://laravel.com/docs)
- [Documentación de VitePress](https://vitepress.dev/)

:::
~~~

### Ejemplo

::: referencias

- [Documentación oficial de PHP](https://www.php.net/manual/es/)
- [Documentación de Laravel](https://laravel.com/docs)
- [Documentación de VitePress](https://vitepress.dev/)

:::

::: info
El ejemplo utiliza el nombre `referencias` identificado en la arquitectura de containers.

Si su implementación exige un subtítulo u otra cabecera, habrá que adaptar la sintaxis a `referencias.ts`.
:::

---

## Componentes internos del tema

Algunos componentes se utilizan desde el propio tema y no necesitan incorporarse directamente en Markdown.

| Componente | Finalidad |
|---|---|
| `CollapsibleHeading` | Gestionar títulos plegables |
| `PrintButton` | Facilitar la impresión |
| `VisitorCount` | Mostrar estadísticas de visitas |

---

## Containers frente a componentes Vue

| Necesidad | Tipo | Sintaxis |
|---|---|---|
| Objetivos de un tema | Container | `::: objetivos` |
| Finalidad | Container | `::: finalidad` |
| Conocimientos previos | Container | `::: previo` |
| Definiciones | Container | `::: definicion` |
| Información adicional | Container | `::: pageinfo` |
| Recordatorios | Container | `::: recuerda` |
| Actividades | Container | `::: actividad` |
| Prácticas | Container | `::: practica` |
| Preguntas | Container | `::: pregunta` |
| Referencias | Container | `::: referencias` |
| Ejecutar PHP | Vue | `<PhpRunner>` |
| Incorporar ejercicios | Vue | `<Ejercicio>` |
| Destacar texto | Vue | `<Color>` |
| Documentar comandos | Vue | `<Cmd>` |
| Agrupar comandos | Vue | `<CmdPane>` |
| Tarjetas | Vue | `<Card>` y `<CardPane>` |
| Contenido desplegable | Vue | `<DropDown>` |
| Preguntas interactivas | Vue | `<Quiz>` |
| Diapositivas | Vue | `<ButtonSlides>` |

---

## Organización y mantenimiento

Los componentes Vue se encuentran principalmente en:

```text
docs/
└── .vitepress/
    └── theme/
        ├── components/
        │   ├── PhpRunner.vue
        │   ├── Ejercicio.vue
        │   ├── Color.vue
        │   ├── Cmd.vue
        │   ├── CmdPane.vue
        │   ├── DropDown.vue
        │   ├── ButtonSlides.vue
        │   └── ...
        ├── styles/
        │   ├── colors.css
        │   ├── containers.css
        │   └── ...
        └── index.ts
```

### Criterios de mantenimiento

1. Utilizar nombres en PascalCase para los componentes.
2. Mantener los estilos específicos dentro de cada componente cuando corresponda.
3. Utilizar las variables de `colors.css` para los colores compartidos.
4. Evitar crear componentes cuando un container resuelva la misma necesidad.
5. Mantener los componentes heredados que sigan siendo necesarios.
6. Documentar las propiedades y ejemplos de cada componente.
7. Conservar los ejercicios en archivos independientes de las páginas que los utilizan.

---

## Pendientes

- [ ] Completar el diseño de `Ejercicio.vue`.
- [ ] Documentar las propiedades reales de `Quiz.vue`.
- [ ] Verificar las propiedades de `Card.vue` y `CardPane.vue`.
- [ ] Verificar las propiedades de `PhpRunner.vue`.
- [ ] Revisar la sintaxis de `referencias.ts`.
- [ ] Completar la documentación de los componentes restantes.