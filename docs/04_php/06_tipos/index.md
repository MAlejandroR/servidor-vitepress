---
title: Tipos de datos
description: Tipos de datos en PHP
date: 19/10/26
---

<objetivos>

* Conocer los principales tipos de datos de PHP.
* Comprender la diferencia entre tipos de valores y tipos utilizados en declaraciones.
* Conocer los diferentes formatos de representación de enteros.
* Utilizar funciones de PHP para identificar y trabajar con valores.
* Comprender las cadenas de texto: comillas simples y dobles.
* Conocer Heredoc y Nowdoc.

</objetivos>

# Los tipos y valores en PHP

Los programas trabajan continuamente con **datos**: números, textos, valores lógicos, etc. Cada dato tiene un **valor** y pertenece a un **tipo**, que determina cómo se representa y qué operaciones podemos realizar con él.

Ya vimos en el apartado de [declaraciones](https://manuel.web.infenlaces.com/04_php/05_declaraciones/) que las variables permiten identificar y trabajar con valores almacenados en memoria.

<img
src="./images/sistema_ipo_datos.png"
alt="Sistema IPO: instrucciones que procesan datos"
width="500"
style="display: block; margin: 0 auto;"
/>

PHP es un lenguaje de **tipado dinámico**, lo que significa que el tipo de una variable se determina durante la ejecución y puede cambiar al asignarle un nuevo valor.

En este tema conoceremos los principales tipos de datos de PHP, cómo se representan sus valores y algunas particularidades de su comportamiento. También aprenderemos a identificar los tipos y a realizar conversiones entre ellos.

## Clasificación de los tipos de datos

PHP dispone de diferentes tipos de datos que podemos clasificar según su naturaleza:

| Categoría | Tipos | Descripción |
|---|---|---|
| **Escalares** | `bool`, `int`, `float`, `string` | Representan valores individuales: booleanos, enteros, decimales y cadenas de texto. |
| **Compuestos** | `array`, `object` | Permiten representar colecciones de datos y objetos. |
| **Especiales** | `null`, `resource` | Representan la ausencia de valor y referencias a recursos externos. |

Esta clasificación corresponde a los tipos de valores que podemos encontrar durante la ejecución de un programa PHP.

::: tip El caso particular de null

Aunque `null` tiene un único valor posible (`null`), y podría parecer similar a un tipo escalar, PHP lo clasifica como un **tipo especial**.

Conviene distinguirlo de `false`:

- `false` es un valor del tipo `bool`.
- `null` es el único valor del tipo `null` y representa la ausencia de valor.

:::

## Tipos utilizados en las declaraciones

PHP permite indicar los tipos de los parámetros y valores de retorno de funciones y métodos, así como los tipos de las propiedades de las clases.

Además de los tipos anteriores, admite otros que expresan **restricciones o características de los valores aceptados**, pero que no representan necesariamente un tipo independiente de valor durante la ejecución.

| Tipo | Significado |
|---|---|
| `callable` | Acepta un valor que puede invocarse como una función. |
| `iterable` | Acepta un array o un objeto que implemente `Traversable`. |
| `mixed` | Acepta cualquier tipo de valor, incluido `null`. |
| `void` | Indica que una función o método no devuelve un valor utilizable. |
| `never` | Indica que una función o método nunca termina normalmente. |

::: tip Tipos de valores y tipos de declaraciones

No todos los nombres de tipos utilizados en las declaraciones representan tipos independientes de valores.

Por ejemplo, `iterable` puede admitir un `array` o un objeto iterable, pero `get_debug_type()` seguirá identificando el tipo real del valor.

Además, no todos los tipos pueden utilizarse en cualquier declaración:

- `void` y `never` solo pueden emplearse como tipos de retorno.
- `callable` puede utilizarse en parámetros y retornos, pero no directamente como tipo de una propiedad.
- `mixed` puede utilizarse en parámetros, retornos y propiedades. Correspondería a int|bool|string|array|null|object

:::

## Las funciones también pueden ser valores

En PHP, una función anónima puede **asignarse a una variable, pasarse como argumento o devolverse desde otra función**.

Por ejemplo, podemos almacenar una función en una variable utilizando la sintaxis de las funciones flecha:

```php
<?php
$sumar = fn() => 5 + 7;

echo get_debug_type($sumar); // Closure
echo $sumar();               // 12

var_dump(is_callable($sumar)); // bool(true)
```

En este ejemplo:

- `$sumar` no contiene el número `12`, sino una función que podemos ejecutar.
- `get_debug_type($sumar)` devuelve `Closure`.
- `$sumar()` ejecuta la función y devuelve `12`.
- `is_callable($sumar)` comprueba si el valor puede invocarse como una función.

### Diferencia entre Closure y callable

Es importante distinguir estos dos conceptos:

| Concepto | Descripción |
|---|---|
| `Closure` | Clase integrada en PHP cuyos objetos representan funciones anónimas y funciones flecha. |
| `callable` | Tipo utilizado en declaraciones para aceptar cualquier valor que pueda invocarse como una función. |

Por tanto, **`Closure` es una clase y `callable` expresa una capacidad**.

Un objeto `Closure` es un valor de tipo `object`, pero también cumple la condición de ser `callable`.

::: tip Funciones como valores

Este comportamiento permite tratar las funciones como datos: podemos almacenarlas en variables y transmitirlas a otras funciones.

Es un concepto muy utilizado en la programación moderna, especialmente en las funciones de orden superior, los callbacks y la programación funcional.

:::

En las siguientes secciones estudiaremos los principales tipos de valores de PHP, comenzando por los **tipos escalares**.
