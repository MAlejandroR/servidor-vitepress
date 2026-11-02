## Referencia de containers DAWS

| Container | Uso / finalidad | Icono Font Awesome | Título por defecto |
|---|---|---|---|
| `objetivos` | Indicar qué aprenderemos en el tema. | `fa-solid fa-list-check` | Objetivos |
| `finalidad` | Explicar para qué sirve lo aprendido. | `fa-solid fa-bullseye` | Al terminar el tema deberás… |
| `previo` | Recordar conocimientos necesarios antes de comenzar. | `fa-solid fa-clock-rotate-left` | Antes de seguir |
| `definicion` | Presentar y explicar un concepto. | `fa-solid fa-book-open` | Definición |
| `pageinfo` | Añadir información complementaria o aclaraciones. | `fa-solid fa-circle-info` | Información adicional |
| `recuerda` | Destacar ideas que conviene recordar. | `fa-solid fa-lightbulb` | Recuerda |
| `actividad` | Proponer tareas o ejercicios durante la explicación. | `fa-solid fa-pencil` | Para hacer ahora |
| `practica` | Aplicar conocimientos mediante código o herramientas. | `fa-solid fa-keyboard` | Ahora practica tú |
| `pregunta` | Plantear cuestiones para reflexionar o debatir. | `fa-solid fa-circle-question` | Para pensar en clase |
| `referencias` | Ofrecer enlaces, fuentes y documentación. | `fa-solid fa-link` | Dónde buscar información |

### Particularidades

- **`objetivos`** muestra una cabecera fija «Objetivos» y un título interior personalizable.
- **`finalidad`, `previo`, `actividad`, `pregunta` y `referencias`** utilizan el diseño `labeledBox`, con etiqueta fija y subtítulo personalizable. Actualmente no muestran iconos, aunque estén configurados en sus archivos `.ts`.
- **`definicion`, `pageinfo`, `recuerda` y `practica`** muestran una cabecera con utils y título personalizable.

### Ejemplos de uso

::: objetivos Aprender a trabajar con arrays

<small>Sintaxis: <code>::: objetivos [título] | [utils]</code></small>

- Crear arrays.
- Recorrer sus elementos.
- Utilizar las funciones habituales de arrays.
  :::

::: finalidad Aplicación de lo aprendido

<small>Sintaxis: <code>::: finalidad [subtítulo]</code></small>

Al finalizar este tema podrás utilizar arrays para organizar
y procesar conjuntos de datos en tus programas PHP.
:::

::: previo Conocimientos necesarios

<small>Sintaxis: <code>::: previo [subtítulo]</code></small>

Antes de comenzar, conviene conocer las variables, los tipos de datos
y las estructuras de control de PHP.
:::

::: definicion Array | fa-solid fa-layer-group

<small>Sintaxis: <code>::: definicion [título] | [utils]</code></small>

Un array es una estructura de datos que permite almacenar
varios valores bajo un mismo identificador.
:::

::: pageinfo Arrays asociativos | fa-solid fa-circle-info

<small>Sintaxis: <code>::: pageinfo [título] | [utils]</code></small>

En PHP, los arrays pueden utilizar claves numéricas o cadenas
de texto para identificar sus elementos.
:::

::: recuerda Las claves de un array | fa-solid fa-lightbulb

<small>Sintaxis: <code>::: recuerda [título] | [utils]</code></small>

Las claves de un array deben ser enteros o cadenas de texto.
PHP puede convertir automáticamente otros tipos de claves.
:::

::: actividad Analiza el siguiente código

<small>Sintaxis: <code>::: actividad [subtítulo]</code></small>

Observa el siguiente código PHP y explica qué resultado produce.

```php
$numeros = [10, 20, 30];
echo array_sum($numeros);
```
:::

::: practica Recorre un array | fa-solid fa-keyboard

<small>Sintaxis: <code>::: practica [título] | [utils]</code></small>

Escribe un programa PHP que recorra un array de productos
utilizando `foreach` y muestre el nombre de cada producto.
:::

::: pregunta ¿Qué estructura utilizarías?

<small>Sintaxis: <code>::: pregunta [subtítulo]</code></small>

Si necesitas almacenar los nombres y precios de varios productos,
¿utilizarías variables independientes o un array?

Justifica tu respuesta.
:::

::: referencias Documentación oficial

<small>Sintaxis: <code>::: referencias [subtítulo]</code></small>

- [Manual de arrays de PHP](https://www.php.net/manual/es/language.types.array.php)
- [Funciones de arrays](https://www.php.net/manual/es/ref.array.php)
  :::