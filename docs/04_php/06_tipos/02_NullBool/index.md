---
title: Tipos de datos
description: Tipos de datos
date: 19/10/26
---
<objetivos>

* Los valores null y vacío en variables

* Los valores booleanos

* Funciones para verificar valores de variables
</objetivos>

<details class="indice-tema" open>
<summary>Contenidos</summary>

[[toc]]

</details>






# Booleanos: `bool`

El tipo booleano representa un valor lógico que únicamente puede ser:

- `true`: verdadero.
- `false`: falso.

Se utiliza principalmente en condiciones y expresiones lógicas.

```php
$activo = true;
$finalizado = false;
```

PHP no distingue entre mayúsculas y minúsculas en los literales booleanos.

```php
$estado = TRUE;
$estado = TrUe;
$estado = falsE;
```

Aunque todas estas expresiones son válidas, se recomienda escribir siempre `true` y `false` en minúsculas.

## Visualización de booleanos

Observa el siguiente código:

<PhpRunner>

```php
<?php


$activo = true;
$finalizado = false;

echo $activo;     // Muestra 1
echo $finalizado; // No muestra nada
?>
```

</PhpRunner>


Esto sucede porque `echo` convierte los booleanos a cadenas.

- `true` se convierte en `"1"`.
- `false` se convierte en `""` (cadena vacía).

Para inspeccionar los valores booleanos podemos utilizar var_dump(), var_export:

<PhpRunner>

```php
<?php
var_dump(true);  // bool(true)
var_dump(false); // bool(false)
var_export(true);  // bool(true)
var_export(false); // bool(false)

?>
```

</PhpRunner>

::: tip
Cuando quieras comprobar el valor real de un booleano durante el desarrollo, utiliza `var_dump()` en lugar de `echo`.
:::

# El tipo `null`

`null` es un tipo especial que representa la ausencia de valor.

Este tipo tiene un único valor posible: `null`.

<PhpRunner>

```php
<?php
$nombre = null;
var_dump($nombre); // NULL
var_export($nombre); // NULL
?>
```

</PhpRunner>

## Null y las variables

Podemos comprobar si una variable contiene `null` mediante `is_null()`:

<PhpRunner>

```php
<?php
$nombre = null;

var_dump(is_null($nombre)); // bool(true)

?>
```

</PhpRunner>

<color><color>null</color> y una variable no definida</color>

Es importante distinguir dos situaciones.

**Variable definida con valor `null`:**

<PhpRunner>

```php
<?php
$nombre = null;

var_dump($nombre); // NULL
var_dump($nombreNoDefinido); //Warning

?>
```

</PhpRunner>

**Variable no definida:**

```php
```

En este segundo caso, PHP emite una advertencia porque estamos intentando acceder a una variable que no existe.

::: warning
Una variable no definida no es exactamente lo mismo que una variable definida cuyo valor es `null`.

Aunque determinadas operaciones pueden producir resultados similares, conceptualmente son situaciones diferentes.
:::

# Funciones para comprobar variables y valores

PHP proporciona diferentes funciones y construcciones del lenguaje que permiten comprobar si una variable está definida, analizar su contenido o identificar su tipo de dato.

## Comprobar la existencia y el contenido de una variable

| Función | Descripción |
|---|---|
| `isset()` | Comprueba si una variable está definida y su valor no es `null`. |
| `is_null()` | Comprueba si un valor es `null`. |
| `empty()` | Comprueba si una variable no existe o contiene un valor considerado vacío. |

**Ejemplo:**

```php
<?php
$a = null;
$b = 25;
$c = 0;

var_dump(isset($a));   // bool(false)
var_dump(isset($b));   // bool(true)

var_dump(is_null($a)); // bool(true)
var_dump(is_null($b)); // bool(false)

var_dump(empty($a));   // bool(true)
var_dump(empty($b));   // bool(false)
var_dump(empty($c));   // bool(true)
?>
```

::: tip Diferencia entre `isset()` e `is_null()`
- `isset()` comprueba si una variable existe y tiene un valor distinto de `null`.
- `is_null()` comprueba si el valor recibido es `null`.

Si una variable no está definida, `isset()` devuelve `false` sin generar advertencias. En cambio, pasar directamente una variable no definida a `is_null()` genera un `Warning`.
:::

## Valor vacío de una variable


La construcción `empty()` devuelve `true` para los siguientes valores:

| Valor | `empty()` |
|---|---|
| `0` | `true` |
| `0.0` | `true` |
| `false` | `true` |
| `""` (cadena vacía) | `true` |
| `"0"` (cadena con un cero) | `true` |
| `null` | `true` |
| `[]` (array vacío) | `true` |
| Variable no definida | `true` |

::: warning
`empty()` no comprueba exclusivamente si una variable está vacía en el sentido habitual. También considera vacíos valores válidos como `0` o `false`.

Por tanto, no debemos confundir `empty()` con `isset()`.
:::

## El tipo de un valor

PHP dispone de funciones específicas para comprobar si un valor pertenece a un determinado tipo de dato.

| Función | Tipo que comprueba |
|---|---|
| `is_int()` | Entero (`int`) |
| `is_float()` | Decimal (`float`) |
| `is_string()` | Cadena (`string`) |
| `is_bool()` | Booleano (`bool`) |
| `is_null()` | Nulo (`null`) |
| `is_array()` | Array (`array`) |
| `is_object()` | Objeto (`object`) |
| `is_numeric()` | Número o cadena numérica válida |
| `is_scalar()` | `int`, `float`, `string` o `bool` |

Todas estas funciones devuelven un valor booleano: `true` o `false`.

**Ejemplo:**

```php
<?php
$edad = 25;
$precio = 12.5;
$texto = "123";

var_dump(is_int($edad));      // bool(true)
var_dump(is_float($precio));  // bool(true)
var_dump(is_string($texto));  // bool(true)
var_dump(is_numeric($texto)); // bool(true)
var_dump(is_int($texto));     // bool(false)
?>
```

::: tip `is_numeric()` no es lo mismo que `is_int()` o `is_float()`
`is_numeric()` comprueba si el valor es numérico o puede interpretarse como un número, incluso cuando su tipo es `string`.

Por ejemplo, `"123"` es una cadena, pero `is_numeric("123")` devuelve `true`.
:::

## Eliminar variables: `unset()`

La construcción `unset()` permite eliminar una variable.

```php
<?php
$edad = 25;

unset($edad);

var_dump(isset($edad)); // bool(false)
?>
```

Después de ejecutar `unset($edad)`, la variable deja de estar definida.

**No es equivalente a asignarle `null`:**

```php
<?php
$edad = null;
?>
```

En este segundo caso, la variable continúa definida, aunque su valor sea `null`.

::: tip
Tanto una variable eliminada mediante `unset()` como una variable que contiene `null` hacen que `isset()` devuelva `false`.

Si necesitamos distinguir ambas situaciones, podemos utilizar `array_key_exists()` junto con `get_defined_vars()` para comprobar si el nombre de la variable existe entre las variables definidas.
:::

## Tabla resumen

| Función | ¿Qué comprueba? |
|---|---|
| `isset()` | Existe y no es `null` |
| `empty()` | No existe o tiene un valor vacío |
| `is_null()` | Su valor es `null` |
| `is_int()`, `is_float()`, etc. | Pertenece a un tipo concreto |
| `is_numeric()` | Es un número o una cadena numérica |
| `get_debug_type()` | Obtiene el nombre del tipo |
| `var_dump()` | Muestra el tipo y el contenido |
| `unset()` | Elimina una variable |

**Nota:** `get_debug_type()` devuelve una cadena con el nombre del tipo; `var_dump()` muestra información directamente; `unset()` elimina la variable. No son funciones de comprobación booleana como las anteriores.


