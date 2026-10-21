---
title: Tipos de datos
description: Tipos de datos
date: 19/10/26
---
<objetivos>


* Diferentes formatos de int

* Sistemas de repreentación

* Los números en coma flotante y problemas de representación 

</objetivos>

<details class="indice-tema" open>
<summary>Contenidos</summary>

[[toc]]

</details>


## Tipos numéricos o enteros


<DropDown title="Objetivos de este apartado">


:::objetivos  valores enteros | fa-solid fa-hashtag 
* En este apartado vamos ver tipos enteros y su representación en php
* Es algo básico pero por curiosidad la representación está bien conocerla
* Realiza una lectura rápida para conocer estas curiosidades 
 :::

</DropDown>


Un número entero es un valor numérico sin parte decimal.

En php un número se puede  utilizando diferentes sistemas de numeración. 

Habitualmente usamos el decimal. Este valor,  siempre se almacenará en memoria en binario, y cuando lo visualicemos, aparecerá en decimal, salvo que de alguna forma especifiquemos otro sistema de representación


<div class="tabla-comparativa">
<color> Representación de números enteros</color>

Sistema | Base | Prefijo | Ejemplo |
|---|---|---|---|
| Decimal | 10 | Ninguno | `125` |
| Octal | 8 | `0o` | `0o17` |
| Hexadecimal | 16 | `0x` | `0xFF` |
| Binario | 2 | `0b` | `0b1010` |
</div>

<PhpRunner>

```php
<?php
$decimal = 125;
$octal = 0o17;
$hexadecimal = 0xFF;
$binario = 0b1010;

echo "$decimal\n";     // 125
echo "$octal\n";       // 15
echo "$hexadecimal\n"; // 255
echo "$binario\n";     // 10

?>
```

</PhpRunner>
 


Todos estos valores son de tipo `int`.

::: tip 💡 Importante

<PhpRunner>

```php
<?php
$a = 10;
$b = 0b1010;
$c = 0xA;
$d = 0o12;

var_dump($a, $b, $c, $d);
?>
```

</PhpRunner>


Las cuatro variables contienen el mismo valor entero: `10`.
:::


PHP también admite la notación octal tradicional, que comienza por `0`. (Esta es la forma antigua de representar el valor en este sistema, a partir de la versión 8.1 (noviembre de 2021) se incorporó <color>0o</color>m versión más legible y recomendada).

<PhpRunner>

```php
<?php
$numero = 0o67; //Notación actual representación octal

echo $numero; // 55
$numero = 067; //Notación antigua representración octal

echo $numero; // 55
```

</PhpRunner>

```php
```

::: warning ⚠️ Cuidado con los ceros iniciales
Un literal entero como `012` no representa el número decimal doce, sino el octal equivalente al decimal diez.

Además, un literal como `089` no es válido porque contiene dígitos no permitidos en base octal.

Para representar números decimales, evita los ceros iniciales.
:::

PHP permite utilizar el carácter `_` como **separador visual de dígitos** (desde PHP 7.4), con el objetivo de mejorar la **legibilidad** de los números. Su colocación es libre entre dígitos: no es obligatorio seguir una agrupación lógica, aunque es lo recomendable. No afecta al valor numérico.
Se puede usar con cualquier sistema de numeración

<PhpRunner>

```php
<?php
$numero = 1_000_000;       // Decimal
$binario = 0b1010_1100;    // Binario
$octal = 0o12_34;          // Octal
$hexadecimal = 0xFF_AA;    // Hexadecimal

var_dump($numero, $binario, $octal, $hexadecimal);
```

</PhpRunner>

## Visualización de enteros

Cuando utilizamos `echo` o `print` para mostrar un entero, PHP lo representa normalmente en decimal.

<PhpRunner>

```php
<?php
$numero = 0xFF;

echo $numero; // 255

?>
```

</PhpRunner>


Para mostrar un número en otras bases podemos utilizar funciones de conversión.

| Función | Conversión |
|---|---|
| `decbin()` | Entero a representación binaria |
| `decoct()` | Entero a representación octal |
| `dechex()` | Entero a representación hexadecimal |

<PhpRunner>

```php
<?php
$numero = 255;

echo decbin($numero); // 11111111
echo decoct($numero); // 377
echo dechex($numero); // ff
?>
```

</PhpRunner>

::: tip
Estas funciones devuelven un `string`, no un `int`.

<PhpRunner>

```php
<?php
$numero = 255;
$binario = decbin($numero);

var_dump($binario);

?>
```

</PhpRunner>


:::

<color>Límites de los valores enteros</color>

Los enteros tienen un rango de valores limitado por la plataforma.

Podemos consultar el valor máximo y mínimo utilizando:

<PhpRunner>

```php
<?php
echo PHP_INT_MAX;
echo "\n"
echo PHP_INT_MIN;

?>
```

</PhpRunner>



::: warning
Si una operación entera supera los límites admitidos, PHP puede convertir el resultado a `float`, perdiendo precisión.

Los valores máximos dependen de la plataforma. En una plataforma habitual de 64 bits:

```text
Máximo:  9223372036854775807
Mínimo: -9223372036854775808
```

:::


::: details 📝 Ejercicio trabajando con enteros
Crea un programa PHP que:

1. Declare cuatro variables con valores enteros utilizando notación decimal, octal, hexadecimal y binaria.
2. Muestre el valor de cada variable con `echo`.
3. Compruebe su tipo utilizando `var_dump()`.
4. Represente el número decimal `255` en las cuatro bases.
5. Intente escribir un literal octal con un dígito no permitido y observe el error.

**Cuestiones:**

- ¿Qué tipo tienen todas las variables?
- ¿Por qué `echo` muestra valores decimales?
- ¿Qué diferencia existe entre el valor de un número y su representación?
  :::



::: details 📝 Ejercicio: funciones de conversión
Utiliza `rand()` para generar un número entero aleatorio entre 1 y 1000.

```php
$numero = rand(1, 1000);
```

Convierte el número a binario, octal y hexadecimal mediante:

```php
decbin(int $num): string
decoct(int $num): string
dechex(int $num): string
```

Muestra el número original y sus diferentes representaciones.

**Investiga:**

- ¿Qué tipo devuelve cada función?
- ¿Por qué las conversiones devuelven cadenas?
- ¿Qué ocurre si intentas sumar dos de esas cadenas?
  :::

___

# Números en coma flotante: `float`

El tipo `float` permite representar números con parte decimal y números de gran magnitud.

También se conoce como número de **coma flotante**.


<color>Para su representación</color>, PHP utiliza <color>el punto (`.`)</color> como separador decimal en los literales numéricos.

<PhpRunner>

```php
<?php
$precio = 19.95;
$temperatura = -3.14;
$probabilidad = 0.25;
$valor = .54;
var_dump($precio, $temperaturam, $probabilidad, $valor);
?>
```

</PhpRunner>

También admite la notación científica.

<PhpRunner>

```php
<?php
<?php
$numero = 7E-12;
var_dump($numero);
echo $numero;
echo "\n";
printf("Con decimales:%.12f\n", $numero); // 0.000000000007
printf("Notación científica: %.e\n", $numero); // 0.000000000007
printf("Según el valor busca la mejor representación: %.g\n", $numero); // 0.000000000007

echo "\n";

var_dump($numero);
echo $numero; // 1500

?>

?>
```

</PhpRunner>

Esta expresión equivale matemáticamente a:

```text
7 × 10⁻¹² = 0.000000000007
```


## Formato  para valores float

Para dar formato a los valores <color>float</color>, tenemos funciones como  [printf](https://www.php.net/manual/en/function.printf.php), o funciones más específicas,   [number_format](https://www.php.net/manual/en/function.number-format.php) (también sirve para un valor int)
<color>([printf()](https://www.php.net/manual/en/function.printf.php))</color>

La función `printf()` permite mostrar datos con un **formato específico**. Procede del lenguaje C y su sistema de especificadores de formato se utiliza, con variantes, en otros lenguajes como C++, Java y Python.

<div class="tabla-comparativa">

| Formato | Descripción |
|---|---|
| <color>%f</color> | Notación decimal (6 decimales por defecto). |
| <color>%.2f</color> | Notación decimal con 2 decimales. |
| <color>%e</color> | Notación científica con `e` minúscula. |
| <color>%E</color> | Notación científica con `E` mayúscula. |
| <color>%.2E</color> | Notación científica con 2 decimales en la mantisa. |
| <color>%g / %G</color> | Selecciona automáticamente entre notación decimal y científica. Por defecto, utiliza 6 cifras significativas. |

</div>

::: tip Precisión
El formato utilizado afecta a cómo se **muestra** el número, pero no modifica su valor almacenado.
:::
<color>Precisión de los flotantes</color>

Los valores `float` se representan normalmente utilizando el estándar IEEE 754 de doble precisión.

Esto implica que muchos números decimales no pueden representarse exactamente en memoria.

<PhpRunner>

```php
<?php
$resultado = 0.1 + 0.2;

var_dump($resultado == 0.3); // bool(false)
var_dump($resultado);
?>
```

</PhpRunner>
Otro ejemplo curioso es sumar 10 veces 0.1
<PhpRunner>

```php
<?php
$suma = 0;

for ($i = 0; $i < 10; $i++) {
    $suma += 0.1;
}

printf("%.17f\n", $suma);

var_dump($suma == 1.0);
?>
```

</PhpRunner>



<DropDown title="Problema con la precisión de números flotante">

Esta es una cracterística de la representacion binaria de números decimales, común a una gran mayoría de lenguajes de programación

Los ordenadores representan los números en **sistema binario (base 2)**. Esto significa que, mientras en decimal utilizamos potencias de 10, en binario utilizamos potencias de 2.

Para representar la parte fraccionaria de un número se utilizan **potencias negativas de 2**:

| Potencia | Valor decimal |
|---|---|
| 2⁻¹ | 0.5 |
| 2⁻² | 0.25 |
| 2⁻³ | 0.125 |
| 2⁻⁴ | 0.0625 |
| 2⁻⁵ | 0.03125 |

Por ejemplo, el número **0.625** puede representarse exactamente en binario:

0.625 = 0.5 + 0.125 = 2⁻¹ + 2⁻³

Por tanto:

**0.625₁₀ = 0.101₂**

Sin embargo, otros números, como **0.1**, no pueden obtenerse mediante una suma finita de estas potencias. Su representación binaria es periódica e infinita:

**0.1₁₀ = 0.00011001100110011...₂**

Como los números `float` disponen de una cantidad limitada de bits (habitualmente 64), el ordenador debe almacenar una **aproximación** del valor.

Esto explica que algunas operaciones aparentemente sencillas produzcan resultados inesperados:

<PhpRunner>

```php
<?php
$resultado = 0.1 + 0.2;

var_dump($resultado == 0.3); // bool(false)
var_dump($resultado);        // float(0.30000000000000004)
?>
```

</PhpRunner>


:::: tip Idea importante
Los números `float` no siempre almacenan el valor decimal exacto, sino su aproximación binaria más cercana.

Por eso, **no es recomendable comparar directamente con `==` números `float` obtenidos mediante operaciones aritméticas** cuando pueden existir errores de redondeo.
::: warning ⚠️ Precisión numérica
No debemos asumir que todas las operaciones con flotantes producen resultados matemáticamente exactos.

Para comparar valores flotantes suele ser preferible utilizar una tolerancia:

<PhpRunner>

```php
<?php
$a = 0.1 + 0.2;
$b = 0.3;

$iguales = abs($a - $b) < 0.000001;

var_dump($iguales); // bool(true)
?>
```

</PhpRunner>

La tolerancia debe elegirse según la precisión necesaria en el problema.

::::

</DropDown>





<color>number_format</color>
Además de la función <color>printf</color> para dar formato a los números,PHP proporciona la función [PHP - number_format()](https://www.php.net/manual/es/function.number-format.php) para presentar números con un determinado formato.

`number_format()` devuelve una cadena de caracteres (`string`).

Su finalidad es presentar el número, no modificar el valor original.

```php
number_format(
    float $num,
    int $decimals = 0,
    ?string $decimal_separator = ".",
    ?string $thousands_separator = ","
): string
```

<PhpRunner>

```php

<?php

$numero = 1234.5678;

echo number_format($numero, 2);
// 1,234.57

echo number_format($numero, 2, ',', '.');
// 1.234,57

?>

```

</PhpRunner>






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


