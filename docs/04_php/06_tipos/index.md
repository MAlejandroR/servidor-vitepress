---
title: Tipos de datos
description: Tipos de datos
date: 19/10/26
---
<objetivos>

* Los diferentes tipos simples de php

* Diferentes formatos de int

* String: comillas dobles, comillas simples

* Heredoc y nowdoc

</objetivos>

<details class="indice-tema" open>
<summary>Contenidos</summary>

[[toc]]

</details>




## Tipos numéricos o enteros

Un número entero es un valor numérico sin parte decimal.
En php un número se puede  utilizando diferentes sistemas de numeración. Habitualmente usamos el decimal. Éste siempre se almacenará en memoria en binario, y cuando lo viualicemos, aparecerá en decimal, salvo que de alguna forma especifiquemos otro sistema

### 5.1. Representación de números enteros

| Sistema | Base | Prefijo | Ejemplo |
|---|---|---|---|
| Decimal | 10 | Ninguno | `125` |
| Octal | 8 | `0o` | `0o17` |
| Hexadecimal | 16 | `0x` | `0xFF` |
| Binario | 2 | `0b` | `0b1010` |

```php
$decimal = 125;
$octal = 0o17;
$hexadecimal = 0xFF;
$binario = 0b1010;

echo $decimal;     // 125
echo $octal;       // 15
echo $hexadecimal; // 255
echo $binario;     // 10
```

Todos estos valores son de tipo `int`.

::: tip 💡 Importante

```php
$a = 10;
$b = 0b1010;
$c = 0xA;
$d = 0o12;

var_dump($a, $b, $c, $d);
```

Las cuatro variables contienen el mismo valor entero: `10`.
:::


PHP también admite la notación octal tradicional, que comienza por `0`. (Esta es la forma antigua de representar el valor en este sistema, a partir de la versión 8.1 (noviembre de 2021) se incorporó <color>0o</color>m versión más legible y recomendada).

<PhpRunner>

```php
<?php
$numero = 0o67;

echo $numero; // 55
$numero = o67;

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

### 5.3. Visualización de enteros

Cuando utilizamos `echo` o `print` para mostrar un entero, PHP lo representa normalmente en decimal.

```php
$numero = 0xFF;

echo $numero; // 255
```

Para mostrar un número en otras bases podemos utilizar funciones de conversión.

| Función | Conversión |
|---|---|
| `decbin()` | Entero a representación binaria |
| `decoct()` | Entero a representación octal |
| `dechex()` | Entero a representación hexadecimal |

```php
$numero = 255;

echo decbin($numero); // 11111111
echo decoct($numero); // 377
echo dechex($numero); // ff
```

::: tip
Estas funciones devuelven un `string`, no un `int`.

```php
$numero = 255;
$binario = decbin($numero);

var_dump($binario);
// string(8) "11111111"
```
:::

### 5.4. Límites de los enteros

Los enteros tienen un rango de valores limitado por la plataforma.

Podemos consultar el valor máximo y mínimo utilizando:

```php
echo PHP_INT_MAX;
echo PHP_INT_MIN;
```

En una plataforma habitual de 64 bits:

```text
Máximo:  9223372036854775807
Mínimo: -9223372036854775808
```

::: warning
Si una operación entera supera los límites admitidos, PHP puede convertir el resultado a `float`, perdiendo precisión.

Los valores máximos dependen de la plataforma.
:::

### Ejercicio 5. Trabajando con enteros

::: details 📝 Enunciado
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

### Ejercicio 6. Funciones de conversión

::: details 📝 Enunciado
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

## 6. Números en coma flotante: `float`

El tipo `float` permite representar números con parte decimal y números de gran magnitud.

También se conoce como número de **coma flotante**.

### 6.1. Representación de flotantes

PHP utiliza el punto (`.`) como separador decimal en los literales numéricos.

```php
$precio = 19.95;
$temperatura = -3.14;
$probabilidad = 0.25;
$valor = .54;
```

También admite la notación científica.

```php
$numero = 7E-12;
```

Esta expresión equivale matemáticamente a:

```text
7 × 10⁻¹² = 0.000000000007
```

Otro ejemplo:

```php
$numero = 1.5E3;

echo $numero; // 1500
```

### 6.2. Precisión de los flotantes

Los valores `float` se representan normalmente utilizando el estándar IEEE 754 de doble precisión.

Esto implica que muchos números decimales no pueden representarse exactamente en memoria.

```php
$resultado = 0.1 + 0.2;

var_dump($resultado == 0.3); // bool(false)
```

::: warning ⚠️ Precisión numérica
No debemos asumir que todas las operaciones con flotantes producen resultados matemáticamente exactos.

Para comparar valores flotantes suele ser preferible utilizar una tolerancia:

```php
$a = 0.1 + 0.2;
$b = 0.3;

$iguales = abs($a - $b) < 0.000001;

var_dump($iguales); // bool(true)
```

La tolerancia debe elegirse según la precisión necesaria en el problema.
:::

### 6.3. Formateo de flotantes

PHP proporciona la función `number_format()` para presentar números con un determinado formato.

```php
number_format(
    float $num,
    int $decimals = 0,
    ?string $decimal_separator = ".",
    ?string $thousands_separator = ","
): string
```

Ejemplo:

```php
$numero = 1234.5678;

echo number_format($numero, 2);
// 1,234.57

echo number_format($numero, 2, ',', '.');
// 1.234,57
```

::: tip
`number_format()` devuelve una cadena de caracteres (`string`).

Su finalidad es presentar el número, no modificar el valor original.

```php
$precio = 1234.5678;
$formateado = number_format($precio, 2, ',', '.');

var_dump($precio);     // float
var_dump($formateado); // string
```
:::

Documentación oficial:
[PHP - number_format()](https://www.php.net/manual/es/function.number-format.php)

### Ejercicio 6.1. Trabajando con flotantes

::: details 📝 Enunciado
Desarrolla un programa que:

1. Defina cuatro números flotantes con 1, 2, 3 y 4 cifras decimales, respectivamente.
2. Utilice tanto notación decimal como científica.
3. Muestre sus valores originales.
4. Utilice `number_format()` para mostrarlos con dos decimales.
5. Muestre los valores utilizando el formato europeo.
6. Compruebe el tipo devuelto por `number_format()`.

**Ampliación:**

Investiga cómo generar números aleatorios con decimales utilizando `rand()`.

Una posibilidad consiste en generar un entero y dividirlo:

```php
$numero = rand(0, 10000) / 100;
```

¿Garantiza esta técnica que el resultado tenga exactamente dos cifras decimales al visualizarlo?
:::

## 7. Booleanos: `bool`

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

### 7.1. Visualización de booleanos

Observa el siguiente código:

```php
$activo = true;
$finalizado = false;

echo $activo;     // Muestra 1
echo $finalizado; // No muestra nada
```

Esto sucede porque `echo` convierte los booleanos a cadenas.

- `true` se convierte en `"1"`.
- `false` se convierte en `""` (cadena vacía).

Para inspeccionar los valores booleanos podemos utilizar `var_dump()`:

```php
var_dump(true);  // bool(true)
var_dump(false); // bool(false)
```

::: tip
Cuando quieras comprobar el valor real de un booleano durante el desarrollo, utiliza `var_dump()` en lugar de `echo`.
:::

## 8. El tipo `null`

`null` es un tipo especial que representa la ausencia de valor.

Este tipo tiene un único valor posible: `null`.

```php
$nombre = null;

var_dump($nombre); // NULL
```

Podemos comprobar si una variable contiene `null` mediante `is_null()`:

```php
$nombre = null;

var_dump(is_null($nombre)); // bool(true)
```

### 8.1. Diferencia entre `null` y una variable no definida

Es importante distinguir dos situaciones.

**Variable definida con valor `null`:**

```php
$nombre = null;

var_dump($nombre); // NULL
```

**Variable no definida:**

```php
var_dump($nombreNoDefinido);
```

En este segundo caso, PHP emite una advertencia porque estamos intentando acceder a una variable que no existe.

::: warning
Una variable no definida no es exactamente lo mismo que una variable definida cuyo valor es `null`.

Aunque determinadas operaciones pueden producir resultados similares, conceptualmente son situaciones diferentes.
:::

### 8.2. La función `unset()`

La función `unset()` elimina la variable indicada.

```php
$edad = 25;

unset($edad);
```

Después de ejecutar `unset($edad)`, la variable deja de estar definida.

No es equivalente a:

```php
$edad = null;
```

En este último caso, la variable sigue definida, pero su valor es `null`.

### 8.3. Las funciones `isset()` e `is_null()`

Estas funciones permiten realizar comprobaciones diferentes.

```php
$a = null;
$b = 25;

var_dump(isset($a));   // bool(false)
var_dump(isset($b));   // bool(true)

var_dump(is_null($a)); // bool(true)
var_dump(is_null($b)); // bool(false)
```

`isset()` devuelve `false` cuando la variable no existe o contiene `null`.

`is_null()` comprueba si el valor recibido es `null`.

::: tip
Para comprobar si una variable existe y no contiene `null`, podemos utilizar `isset()` sin provocar advertencias por variables no definidas.
:::

## 9. Ejercicio de integración

### Ejercicio 8. Variables y tipos de datos

::: details 📝 Enunciado
Crea un programa PHP que:

1. Defina una variable de tipo `int`.
2. Defina una variable de tipo `float`.
3. Defina una variable de tipo `string`.
4. Defina una variable de tipo `bool`.
5. Defina una variable con valor `null`.
6. Muestre todos sus valores mediante `echo`.
7. Utilice `var_dump()` para comprobar sus tipos.
8. Modifique el tipo de alguna variable mediante una nueva asignación.
9. Compruebe cómo se visualizan los valores `true`, `false` y `null`.

**Cuestiones:**

- ¿Qué ocurre al mostrar `false` con `echo`?
- ¿Qué ocurre al mostrar `null`?
- ¿Puede cambiar el tipo de una variable durante la ejecución?
- ¿Qué diferencias existen entre `echo` y `var_dump()`?
  :::

::: details 💻 Ejemplo de solución
```php
<?php

$entero = 5;
$cadena = "Esto es una cadena";
$decimal = 5.35;
$booleano = true;
$nulo = null;

echo "El valor de entero es $entero\n";
echo "El valor de cadena es $cadena\n";
echo "El valor de decimal es $decimal\n";

var_dump($booleano);
var_dump($nulo);

echo "Tipos de las variables:\n";

var_dump($entero);
var_dump($cadena);
var_dump($decimal);
var_dump($booleano);
var_dump($nulo);

$entero = "Ahora soy una cadena";

var_dump($entero);
```

El ejemplo utiliza saltos de línea `\n` para facilitar su ejecución desde la consola.

Si se ejecuta en un navegador, se puede utilizar `<pre>` en el HTML para conservar el formato de los saltos de línea.
:::

## 10. Resumen

::: tip 📌 Conceptos fundamentales
- Una **variable** permite identificar y acceder a un valor.
- Un **tipo de dato** determina las características de un valor y las operaciones que admite.
- PHP es un lenguaje de **tipado dinámico**.
- Las variables comienzan por `$` y no requieren una declaración previa de tipo.
- Los enteros pueden representarse en decimal, octal, hexadecimal y binario.
- Los flotantes pueden presentar problemas de precisión.
- Los booleanos únicamente pueden contener `true` o `false`.
- `null` representa ausencia de valor, pero no es lo mismo que una variable no definida.
- `echo` permite mostrar valores, mientras que `var_dump()` proporciona información sobre su tipo y contenido.
  :::

### Preguntas de repaso

1. ¿Qué diferencia existe entre declaración, inicialización y asignación?
2. ¿Qué significa que PHP tenga tipado dinámico?
3. ¿Qué diferencia existe entre un tipo de dato y una variable?
4. ¿Qué prefijos se utilizan para representar números binarios, octales y hexadecimales?
5. ¿Qué devuelve la función `decbin()`?
6. ¿Por qué no es recomendable comparar flotantes mediante igualdad exacta?
7. ¿Qué diferencia existe entre `null` y una variable no definida?
8. ¿Qué diferencia existe entre `isset()` e `is_null()`?
9. ¿Por qué `echo false` no muestra ningún carácter?
10. ¿Qué función utilizarías para conocer el tipo y el valor de una variable?


# Los strings en PHP

## 1. ¿Qué es un string?

Hasta ahora hemos utilizado muchas veces valores como:

```php
"Hola mundo"
"PHP"
"Desarrollo web"
"123"
```

Todos ellos tienen un tipo de dato concreto: `string`.

::: definicion String | fa-solid fa-font

Un **string** es una secuencia de bytes que utilizamos habitualmente para representar cadenas de caracteres.

Por ejemplo:

```php
$nombre = "Ana";
$modulo = "Desarrollo Web en Entorno Servidor";
$codigo = "123";
```

Aunque `"123"` contiene dígitos, es un `string`, no un `int`.

:::

En PHP no existe un tipo independiente `char`, como ocurre en otros lenguajes de programación.

Una cadena puede contener un solo carácter:

```php
$letra = "A";
```

y seguirá siendo de tipo `string`.

::: tip
PHP proporciona numerosas funciones para trabajar con cadenas de caracteres.

[Documentación oficial de strings](https://www.php.net/manual/es/language.types.string.php)

[Funciones para trabajar con strings](https://www.php.net/manual/es/ref.strings.php)
:::

### 1.1. Codificación de caracteres: ASCII y UTF-8

Los ordenadores almacenan la información mediante bytes. Para representar texto necesitamos establecer una correspondencia entre los caracteres y los bytes que los codifican.

Esta correspondencia se realiza mediante una **codificación de caracteres**.

Dos conceptos importantes son:

- **ASCII:** codificación histórica de 7 bits que representa 128 caracteres, incluyendo letras del alfabeto inglés, números y símbolos.
- **UTF-8:** codificación de Unicode que permite representar caracteres de numerosos idiomas, utilizando entre 1 y 4 bytes por punto de código Unicode.

UTF-8 es actualmente la codificación predominante en la web.

::: practica ¿Un carácter ocupa siempre un byte? | fa-solid fa-keyboard

Observa el siguiente código:

<PhpRunner>

```php
<?php

$texto1 = "A";
$texto2 = "ñ";
$texto3 = "€";

echo "A: " . strlen($texto1) . " bytes<br>";
echo "ñ: " . strlen($texto2) . " bytes<br>";
echo "€: " . strlen($texto3) . " bytes<br>";
```

</PhpRunner>

**¿Por qué obtenemos valores diferentes si cada cadena contiene un único carácter visible?**

La función `strlen()` devuelve el número de **bytes**, no el número de caracteres Unicode.

Si necesitamos contar puntos de código Unicode en una cadena UTF-8, podemos utilizar `mb_strlen($texto, 'UTF-8')`, siempre que esté disponible la extensión `mbstring`.

:::

## 2. Formas de representar strings

En PHP podemos escribir literales de cadenas de cuatro maneras:

| Forma | Sintaxis | Características |
|---|---|---|
| Comillas dobles | `"Hola"` | Interpreta variables y secuencias de escape |
| Comillas simples | `'Hola'` | Interpretación prácticamente literal |
| Heredoc | `<<<FIN` | Permite cadenas multilínea e interpolación |
| Nowdoc | `<<<'FIN'` | Permite cadenas multilínea sin interpolación |

Inicialmente estudiaremos las comillas simples y dobles, que son las más habituales.

## 3. Comillas dobles frente a comillas simples

Con ambas formas especificamos **literales de tipo string**.

```php
$nombre = "Ana";
$apellido = 'García';
```

Sin embargo, no se comportan exactamente igual.

### 3.1. Comillas dobles

Dentro de un string delimitado por comillas dobles, PHP interpreta determinadas construcciones especiales.

Podemos distinguir tres elementos importantes:

- **`\`**: barra invertida que introduce determinadas secuencias de escape.
- **`$`**: permite identificar referencias a variables cuando va seguido de una sintaxis válida.
- **`{...}`**: permite utilizar la sintaxis compleja de interpolación, delimitando variables y determinados accesos a arrays y propiedades de objetos.

Cuando aparecen en el contexto adecuado, PHP no los trata simplemente como texto literal, sino que aplica sus reglas de interpretación.

::: definicion Interpolación de variables | fa-solid fa-code

La **interpolación de variables** consiste en incorporar el valor de una variable dentro de una cadena de caracteres.

```php
$nombre = "Alicia";

echo "Hola $nombre";
```

Resultado:

```text
Hola Alicia
```

PHP sustituye la referencia `$nombre` por su valor al construir la cadena.

:::

Veamos un ejemplo más completo:

<PhpRunner>

```php
<?php

$nombre = "Alicia";
$pais = "España";

$capital[$pais] = "Madrid";

echo "Hola $nombre<br>";

echo "La capital de $pais es {$capital[$pais]}<br>";

echo "Primera línea\nSegunda línea<br>";

echo "Nombre:\t$nombre";
```

</PhpRunner>

::: tip
Observa que hemos mezclado secuencias de escape (`\n`, `\t`) y etiquetas HTML (`<br>`).

No realizan la misma función. Más adelante estudiaremos esta diferencia.
:::

### 3.2. Comillas simples

Con comillas simples, PHP **no interpola variables**.

```php
<?php

$nombre = "María";

echo 'Hola $nombre';
```

La salida será literalmente:

```text
Hola $nombre
```

Tampoco interpreta la mayoría de las secuencias de escape.

```php
echo 'Primera línea\nSegunda línea';
```

Mostrará:

```text
Primera línea\nSegunda línea
```

Las dos secuencias que sí tienen un tratamiento especial son:

| Secuencia | Significado |
|---|---|
| `\'` | Permite incluir una comilla simple |
| `\\` | Permite representar una barra invertida |

Por ejemplo:

```php
echo 'Hoy estoy aprendiendo \'PHP\'';
```

Resultado:

```text
Hoy estoy aprendiendo 'PHP'
```

::: practica ¿Qué aparecerá? | fa-solid fa-keyboard

Antes de ejecutar el código, intenta escribir la salida que esperas obtener.

<PhpRunner>

```php
<?php

$nombre = "Ana";
$edad = 23;

echo "Hola $nombre<br>";
echo "Tienes $edad años<br>";

echo 'Hola $nombre<br>';
echo 'Tienes $edad años<br>';

echo "Primera\nSegunda<br>";
echo 'Primera\nSegunda<br>';
```

</PhpRunner>

**Cuestiones:**

1. ¿Por qué las cuatro primeras instrucciones no producen el mismo resultado?
2. ¿Por qué `\n` se interpreta en un caso y en otro no?
3. ¿Por qué `<br>` funciona con ambos tipos de comillas?

:::

::: recuerda Comillas dobles y simples

**Comillas dobles:**

```php
"Hola $nombre"
```

PHP puede interpretar variables y secuencias de escape.

**Comillas simples:**

```php
'Hola $nombre'
```

PHP trata el contenido prácticamente de forma literal.

Solo reconoce especialmente `\'` y `\\`.

:::

## 4. Interpolación de variables y llaves `{}`

En ocasiones necesitamos indicar con claridad dónde comienza y termina el nombre de una variable.

Imagina que queremos mostrar un nombre seguido de un guion bajo y un apellido.

```php
<?php

$nombre = "Manuel";
$apellido = "Romero";

echo "Tu identificación es $nombre_$apellido";
```

**¿Qué ocurre?**

PHP intenta interpretar `$nombre_` como una variable, porque el guion bajo puede formar parte de un identificador.

Como esa variable no está definida, se produce una advertencia y no obtenemos el resultado esperado.

Podemos resolverlo utilizando llaves:

```php
<?php

$nombre = "Manuel";
$apellido = "Romero";

echo "Tu identificación es {$nombre}_{$apellido}";
```

Resultado:

```text
Tu identificación es Manuel_Romero
```

Las llaves permiten delimitar correctamente las referencias a variables.

### 4.1. Otros ejemplos

```php
<?php

$producto = "ordenador";

echo "Tengo dos {$producto}s";
```

Resultado:

```text
Tengo dos ordenadors
```

El resultado es gramaticalmente incorrecto, pero demuestra que PHP ha identificado correctamente la variable `$producto`.

También podemos acceder a elementos de arrays:

```php
<?php

$capitales = [
    "España" => "Madrid",
    "Francia" => "París"
];

$pais = "España";

echo "La capital de $pais es {$capitales[$pais]}";
```

Resultado:

```text
La capital de España es Madrid
```

::: warning
La sintaxis `{...}` dentro de un string no permite evaluar cualquier expresión PHP.

Por ejemplo, esto no es válido como interpolación de una suma:

```php
echo "Resultado: {2 + 3}";
```

PHP mostrará literalmente `Resultado: {2 + 3}`.

Para incorporar el resultado de una operación podemos calcularlo previamente o utilizar concatenación.

```php
$resultado = 2 + 3;

echo "Resultado: $resultado";
```
:::

## 5. Secuencias de escape

La barra invertida (`\`) permite representar determinados caracteres especiales dentro de strings delimitados por comillas dobles.

::: definicion Secuencia de escape | fa-solid fa-code

Una **secuencia de escape** es una combinación de caracteres que PHP interpreta como un carácter o una construcción especial.

Por ejemplo:

```php
echo "Primera línea\nSegunda línea";
```

La secuencia `\n` representa un carácter de nueva línea.

:::

### 5.1. Principales secuencias de escape

| Secuencia | Significado |
|---|---|
| `\n` | Nueva línea (LF) |
| `\r` | Retorno de carro (CR) |
| `\t` | Tabulación horizontal |
| `\v` | Tabulación vertical |
| `\e` | Carácter de escape (ESC) |
| `\f` | Salto de página |
| `\\` | Barra invertida |
| `\"` | Comillas dobles |
| `\$` | Símbolo `$` literal |
| `\xNN` | Byte expresado en hexadecimal |
| `\NNN` | Byte expresado en octal |
| `\u{...}` | Carácter Unicode indicado por su punto de código |

Las secuencias de escape no tienen por qué producir un efecto visual cuando mostramos HTML en un navegador.

### 5.2. Ejemplos

<PhpRunner>

```php
<?php

$nombre = "Manuel";

echo "Nombre:\t$nombre\n";

echo "La variable \$nombre contiene \"$nombre\"\n";

echo "Una barra invertida: \\\n";

echo "Carácter hexadecimal: \x41\n";

echo "Carácter Unicode: \u{20AC}\n";
```

</PhpRunner>

::: pregunta Analiza el resultado

1. ¿Por qué `\$nombre` muestra el nombre de la variable y no su valor?
2. ¿Qué representa `\x41`?
3. ¿Qué representa `\u{20AC}`?
4. ¿Por qué algunos caracteres no producen cambios visibles en el navegador?

:::

## 6. Generando HTML desde PHP

En desarrollo web utilizamos PHP para generar respuestas que, habitualmente, contienen HTML.

Podemos incluir etiquetas HTML dentro de un string:

<PhpRunner>

```php
<?php

echo "<h1>Hola mundo</h1>";

echo "<p>Estamos generando HTML desde PHP</p>";
```

</PhpRunner>

**PHP no interpreta las etiquetas HTML.**

Simplemente genera una secuencia de texto que contiene esas etiquetas.

El navegador recibe:

```html
<h1>Hola mundo</h1>
<p>Estamos generando HTML desde PHP</p>
```

Y es el navegador quien interpreta y representa visualmente ese HTML.

::: pregunta ¿Quién hace cada trabajo?

Observa:

<PhpRunner>

```php
<?php

echo "<strong>Hola</strong>";
```

</PhpRunner>

Intenta identificar:

1. ¿Qué ejecuta PHP?
2. ¿Qué texto genera PHP?
3. ¿Qué recibe el navegador?
4. ¿Quién convierte finalmente `Hola` en texto en negrita?

Esta separación entre **servidor y cliente** será fundamental durante todo el módulo.

:::

### 6.1. `\n` no es `<br>`

Esta diferencia es especialmente importante en desarrollo web.

Observa:

```php
echo "Uno\nDos";
```

PHP genera un carácter de nueva línea entre `Uno` y `Dos`.

Sin embargo, HTML normalmente no representa ese carácter como un salto de línea visual.

En cambio:

```php
echo "Uno<br>Dos";
```

PHP genera:

```html
Uno<br>Dos
```

El navegador interpreta `<br>` como una etiqueta HTML que provoca un salto visual.

::: definicion `\n` frente a `<br>` | fa-solid fa-code

**No hacen lo mismo.**

`\n` pertenece al contenido del texto generado:

```php
echo "Uno\nDos";
```

`<br>` pertenece al lenguaje HTML:

```php
echo "Uno<br>Dos";
```

El primero introduce un carácter de nueva línea en la respuesta.

El segundo envía una etiqueta que posteriormente interpreta el navegador.

:::

::: practica Mira también el código fuente | fa-solid fa-keyboard

Ejecuta el siguiente código:

<PhpRunner>

```php
<?php

echo "Primera línea\nSegunda línea";

echo "<hr>";

echo "Primera línea<br>Segunda línea";
```

</PhpRunner>

No te limites a observar el resultado visual.

Si ejecutas este código como una página PHP independiente en un navegador, utiliza **Ver código fuente de la página**.

Compara el HTML recibido en ambos casos.

**¿Por qué `\n` puede existir en el código fuente y, sin embargo, no provocar un salto de línea visual?**

Ten en cuenta que la vista de resultados de un ejecutor integrado puede procesar la salida de forma diferente a una página PHP independiente.

:::

## 7. Concatenación de strings

La **concatenación** consiste en unir varias cadenas de caracteres para obtener una nueva.

En PHP utilizamos el operador punto (`.`).

::: definicion Concatenación | fa-solid fa-link

El operador `.` permite unir dos valores como cadenas de caracteres.

```php
$nombre = "Ana";
$apellido = "García";

$nombreCompleto = $nombre . " " . $apellido;

echo $nombreCompleto;
```

Resultado:

```text
Ana García
```

:::

### 7.1. Concatenación frente a interpolación

Podemos conseguir resultados similares utilizando diferentes técnicas.

**Concatenación:**

```php
$nombre = "Ana";

echo "Hola " . $nombre;
```

**Interpolación:**

```php
$nombre = "Ana";

echo "Hola $nombre";
```

Ambas producen:

```text
Hola Ana
```

También podemos combinar ambas técnicas:

```php
$nombre = "Ana";
$edad = 23;

echo "Hola " . $nombre . ", tienes $edad años";
```

::: tip
La elección entre interpolación y concatenación depende de la claridad del código.

Cuando trabajamos con cadenas delimitadas por comillas dobles, la interpolación suele resultar más legible.

La concatenación resulta útil cuando necesitamos unir valores o expresiones.
:::

### 7.2. El operador `+` no concatena

En otros lenguajes, como JavaScript, el operador `+` puede utilizarse para concatenar cadenas.

En PHP, **el operador de concatenación es `.`**.

```php
<?php

$a = "Hola";
$b = " mundo";

echo $a . $b;
```

Resultado:

```text
Hola mundo
```

Si utilizamos `+`, PHP intenta realizar una operación aritmética.

```php
<?php

$a = "10";
$b = "20";

echo $a + $b;
```

Resultado:

```text
30
```

Esto ocurre porque PHP puede convertir automáticamente determinadas cadenas numéricas a valores numéricos.

::: warning
No todas las cadenas pueden convertirse a números.

```php
$a = "Hola";
$b = "mundo";

echo $a + $b;
```

En PHP moderno, esta operación produce un `TypeError`.

Las conversiones automáticas dependen del contenido de las cadenas y de la operación realizada.
:::

### 7.3. Concatenación y asignación

PHP también dispone del operador `.=`.

Permite añadir contenido a una cadena existente.

```php
<?php

$mensaje = "Hola";

$mensaje .= " mundo";
$mensaje .= "!";

echo $mensaje;
```

Resultado:

```text
Hola mundo!
```

Es equivalente a:

```php
$mensaje = $mensaje . " mundo";
```

### Ejercicio 10.1. Concatenando

::: practica Concatenando | fa-solid fa-keyboard

Declara dos variables:

```php
$nombre = "Manuel";
$apellido = "Romero";
```

Utiliza concatenación para obtener:

```text
Manuel_Romero
```

Realiza el ejercicio de tres formas:

1. Utilizando el operador `.`.
2. Utilizando interpolación con llaves `{}`.
3. Utilizando el operador `.=`.

:::

## 8. Conversión de otros tipos a string

PHP realiza determinadas conversiones automáticas cuando necesita representar valores como cadenas.

Esto sucede, por ejemplo, cuando utilizamos `echo` o interpolamos variables.

### 8.1. Enteros y flotantes

Los valores numéricos se convierten a su representación textual.

```php
<?php

$edad = 25;
$nota = 9.58;

echo "Tengo $edad años<br>";

echo "Mi nota es $nota";
```

Resultado:

```text
Tengo 25 años
Mi nota es 9.58
```

### 8.2. Booleanos

Los valores booleanos se convierten de la siguiente manera:

| Valor | Conversión a string |
|---|---|
| `true` | `"1"` |
| `false` | `""` |

```php
<?php

$activo = true;
$finalizado = false;

echo "Activo: -$activo-<br>";

echo "Finalizado: -$finalizado-";
```

Resultado:

```text
Activo: -1-
Finalizado: --
```

### 8.3. Null

El valor `null` se convierte a una cadena vacía.

```php
<?php

$valor = null;

echo "Valor: -$valor-";
```

Resultado:

```text
Valor: --
```

### 8.4. Arrays

Si intentamos convertir directamente un array a string, PHP emite una advertencia y utiliza la palabra `"Array"`.

```php
<?php

$numeros = [1, 2, 3];

echo $numeros;
```

Resultado habitual:

```text
Warning: Array to string conversion
Array
```

::: tip
Para inspeccionar arrays utilizaremos `var_dump()` o `print_r()`.

```php
$numeros = [1, 2, 3];

var_dump($numeros);
```

Más adelante estudiaremos cómo recorrer arrays y generar cadenas a partir de sus elementos.
:::

### 8.5. Objetos

Los objetos no pueden convertirse siempre a cadenas automáticamente.

```php
<?php

class Persona
{
}

$persona = new Persona();

echo $persona;
```

Esto provoca un error porque el objeto no dispone de una representación textual.

En programación orientada a objetos estudiaremos el método especial `__toString()`, que permite definir cómo se convierte un objeto a string.

::: recuerda Conversiones a string

| Tipo original | Resultado |
|---|---|
| `int` | Representación decimal |
| `float` | Representación numérica textual |
| `bool` (`true`) | `"1"` |
| `bool` (`false`) | `""` |
| `null` | `""` |
| `array` | `"Array"` y advertencia |
| `object` | Depende de si admite conversión a string |

:::

## 9. Heredoc y Nowdoc

Además de las comillas simples y dobles, PHP proporciona dos formas de representar cadenas de varias líneas.

Son especialmente útiles cuando trabajamos con textos largos.

### 9.1. Heredoc

Heredoc permite escribir cadenas multilínea sin necesidad de encerrar todo el contenido entre comillas.

Se comporta de forma similar a las comillas dobles: interpreta variables y secuencias de escape.

```php
<?php

$nombre = "Ana";

$texto = <<<FIN
Hola $nombre.

Bienvenida al módulo de
Desarrollo Web en Entorno Servidor.
FIN;

echo $texto;
```

La cadena contiene los saltos de línea escritos en el código.

::: tip
Heredoc comienza con `<<<` seguido de un identificador delimitador.

La cadena finaliza cuando aparece el delimitador de cierre.

Desde PHP 7.3, el delimitador de cierre puede estar indentado, siempre que se respeten las reglas de indentación de Heredoc.

Para los primeros ejemplos, escribirlo al principio de la línea facilita la comprensión.
:::

### 9.2. Nowdoc

Nowdoc es similar a Heredoc, pero se comporta como las comillas simples.

No interpola variables ni procesa secuencias de escape.

```php
<?php

$nombre = "Ana";

$texto = <<<'FIN'
Hola $nombre.

Esta cadena contiene literalmente
el texto \n y la variable $nombre.
FIN;

echo $texto;
```

La variable `$nombre` no será sustituida por su valor.

### 9.3. Comparación

| Característica | Heredoc | Nowdoc |
|---|---|---|
| Multilínea | Sí | Sí |
| Interpola variables | Sí | No |
| Interpreta secuencias de escape | Sí | No |
| Comportamiento | Similar a comillas dobles | Similar a comillas simples |

::: practica Heredoc frente a Nowdoc | fa-solid fa-keyboard

Crea dos cadenas multilínea con el mismo contenido:

```text
Hola $nombre
Estamos aprendiendo PHP.
Primera línea\nSegunda línea
```

Una mediante Heredoc y otra mediante Nowdoc.

Muestra ambas utilizando `var_dump()`.

**¿Qué diferencias encuentras?**

:::

## 10. Ejercicio de integración: HTML dinámico

::: practica Cambiar aleatoriamente el estilo de un texto | fa-solid fa-keyboard

Crea un programa PHP que genere un encabezado HTML con un nivel y un color aleatorios.

El encabezado tendrá un nivel comprendido entre `h1` y `h6`.

El color se generará utilizando tres componentes RGB:

- **R:** intensidad de rojo, entre 0 y 255.
- **G:** intensidad de verde, entre 0 y 255.
- **B:** intensidad de azul, entre 0 y 255.

El resultado generado deberá tener una estructura similar a:

```html
<h2 style="color:#FF8030">
    Este es el texto que debe aparecer cambiante
</h2>
```

Utiliza:

- `rand()` para generar los valores aleatorios.
- `dechex()` o `sprintf()` para convertir los componentes de color a hexadecimal.
- Concatenación o interpolación para construir el HTML.
- `echo` para enviar el resultado al navegador.

**Ampliación:**

Intenta generar el mismo HTML utilizando Heredoc.

:::

## 11. Resumen

::: recuerda Conceptos fundamentales

- Un `string` es una secuencia de bytes que habitualmente representa texto.
- PHP no tiene un tipo independiente `char`.
- Los strings pueden representarse mediante comillas simples, dobles, Heredoc y Nowdoc.
- Las comillas dobles permiten interpolar variables y utilizar secuencias de escape.
- Las comillas simples tratan el contenido prácticamente de forma literal.
- Las llaves `{}` permiten delimitar variables durante la interpolación.
- El operador de concatenación es `.`.
- El operador `.=` permite añadir contenido a una cadena.
- PHP puede convertir automáticamente otros tipos a string.
- `\n` genera un carácter de nueva línea; `<br>` es una etiqueta HTML.
- Heredoc y Nowdoc facilitan la escritura de cadenas multilínea.

:::

### Preguntas de repaso

1. ¿Qué es un string?
2. ¿Qué diferencia existe entre un carácter Unicode y un byte?
3. ¿Qué diferencia existe entre comillas simples y dobles?
4. ¿Qué es la interpolación de variables?
5. ¿Para qué se utilizan las llaves `{}` dentro de un string?
6. ¿Qué representa la secuencia `\n`?
7. ¿Por qué `\n` y `<br>` no producen necesariamente el mismo resultado visual?
8. ¿Qué operador se utiliza para concatenar strings en PHP?
9. ¿Qué ocurre cuando intentamos convertir un array a string?
10. ¿Qué diferencias existen entre Heredoc y Nowdoc?
