---
title: Estructuras de control selectivas
description: Estructuras secuenciales, if, else, elseif, operador ternario, switch y match en PHP.
---

# Estructuras de control selectivas

## Estructuras de Control
*Las estructuras de control **determinan el flujo de ejecución de un programa**
- Especifican  el orden en que se ejecutarán las instrucciones.

*Existen **tres tipos principales de estructuras de control**:
1. **Secuenciales**: Ejecutan las instrucciones en orden, una tras otra.
1. **Selectivas**: Permiten elegir entre diferentes caminos según una condición.
1. **Repetitivas**: Ejecutan un bloque de instrucciones varias veces según una condición.

*Para implementarlas, necesitamos operadores y condiciones, cuya sintaxis vamos a ir estudiando.

*A modo de resumen, presentamos la siguiente tabla:

****Resumen de las estructuras de control****


<table class="tabla-comparativa">
<thead>
<tr>
<th>Estructura de control</th>
<th>Sintaxis en PHP</th>
<th>Ejemplo</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>Secuencial</b></td>
<td>

```php
{
    sentencia_1;
    sentencia_2;
    // ...
}
```

</td>
<td>

<PhpRunner :code="`$num = rand(-10, 20);
echo \"Se ha generado el número $num\";`" />

</td>
</tr>
<tr>
<td><b>Selectiva</b></td>
<td>

```php
if (expresion_booleana) {
    sentencia_1;
    sentencia_2;
}
sentencia_3;
```

</td>
<td>

<PhpRunner :code="`$num = rand(-10, 20);
if ($num < 0) {
    echo \"El número $num es negativo\";
} else {
    echo \"El número $num es positivo o cero\";
}`" />

</td>
</tr>
<tr>
<td><b>Repetitiva</b></td>
<td>

```php
while (expresion_booleana) {
    sentencia_1;
    sentencia_2;
}
sentencia_3;
```

</td>
<td>

<PhpRunner :code="`$num = 0;
$total = 0;
while ($num < 100) {
    $total = $total + $num;
    $num = $num + 1;
}
echo \"Los primeros 100 números suman $total\";`" />

</td>
</tr>
</tbody>
</table>



## Instrucciones Secuenciales
*En Este tipo de estructura de control, **las instrucciones se ejecutan una tras otra de**.
*Las instrucciones se ejecutan **en el orden en que aparecen**, de forma **secuencial**, sin saltos ni repeticiones en el proceso.

![imagen muestra un flujo en el que cada paso se realiza de forma consecutiva, de arriba hacia abajo.

## = Ejemplos de Estructura Secuencial en PHP =


::: tip Operaciones matemáticas en secuencia

```php
<?php
// Asignación de valores a variables
$a = 5;
$b = 10;
$c = $a + $b;  // Se suma $a y $b
$d = $c * 2;   // El resultado se multiplica por 2
echo "El resultado final es $d"; // Imprime el resultado
?>
```
:::

::: tip Mostrar mensajes

*Ejemplo 2: Mostrar mensajes secuenciales
```php
<?php
echo "Primero se ejecuta esta línea.\n";
echo "Luego se ejecuta esta línea.\n";
echo "Finalmente, se ejecuta esta última línea.";
?>
```
:::

**En ambos ejemplos:**
* Las instrucciones se ejecutan en orden, sin interrupciones.
* Cada línea de código sigue a la anterior y se ejecuta solo una vez.

Esta estructura es **la más simple de las estructuras de control** y establece la base para comprender el flujo de ejecución en un programa.


## Selección con if
*La estructura de control *if* permite evaluar una *expresión booleana* (una condición que puede ser verdadera o falsa).
*Siempre la **expresión booleana** va entre paréntesis

::: tip flujo de ejecución

**Si la expresión booleana es **true** ejecutará un bloque de sentencias**
**Si no,  o lo omitirá, o ejecutará otro si se especifica.**
:::


![estructura_if.png](secuencial.png](/images/secuencial.png)

*La)(/images/estructura_if.png)
![class="wikitable" style="text-align: center;"
|-
! Estructura IF
! Estructura IF ELSE
|-
|![estructura_if.png](estructura_if_else.png](/images/estructura_if_else.png)


<table>
<tr>
<th>![Sintaxis Básica ====</th>
<th>*La estructura básica de **if** es:
<pre><code class="language-php">
if (expresion_booleana)
    Sentencia_1;
</code></pre>

*Si hay más de una sentencia a ejecutar cuando la condición es verdadera, debemos utilizar llaves `{ }` para agrupar el bloque de instrucciones, también lo podemos poner si solo hay una instruccion:
<pre><code class="language-php">
if (expresion_booleana) {
    Sentencia_1;
    Sentencia_2;
}
if (expresion_booleana){
    Sentencia_1;
}

</code></pre>
**La indentación:**
*Es muy importante la **indentación**.
*Consiste en  dejar espacios o sangrías al inicio de cada línea de código dentro de un bloque.
*Esto ayuda a visualizar la estructura y jerarquía de las instrucciones, facilitando la lectura y comprensión del código.
*Una buena indentación es fundamental para evitar errores y mantener el código organizado0.
## Expresiones booleanas


::: info Nota
Las expresiones booleanas las veremos en el capítulo siguiente **Expresiones**.
**Esto es una introducción para poderlas utilizar en las estructuras de control.**
:::

::: tip Qué es una expresión

Es un conjunto de **operandos** y **operadores**
**Qué se evalúa**
y da como resultado **un valor de un determinado tipo**.
:::

::: tip Tipo de la expresión

**El tipo de la expresión lo establece el operador.**
*Será el tipo del valor devuelto.
:::
**Las expresiones booleanas se definen mediante los siguientes operadores:**
1. Operadores de comparación.
1. Operadores booleanos o lógicos.

**Operadores de comparación.**

*Los **operadores de comparación** permiten comparar dos valores. Estos valores dependen de los [tipos que tengan asignados](estructura_if_else.png](/images/estructura_if_else.png)</th>
</tr>
</table>

====)(http://php.net/manual/es/language.types.type-juggling.php).
*Pueden verse las diferencias comparativas en la [de comparación de tipos](tabla)(http://php.net/manual/es/types.comparisons.php).
**|+ **Operadores de comparación****

<table>
<tr>
<th>**Ejemplo**</th>
<th>**Nombre**</th>
<th>**Resultado**</th>
</tr>
<tr>
<td>$x == $y</td>
<td>Igual</td>
<td>**true**, si son iguales (adapta tipos, lo analizaremos).</td>
</tr>
<tr>
<td>$x === $y</td>
<td>Idéntico</td>
<td>**true**, si son exactamente iguales (valor y tipo).</td>
</tr>
<tr>
<td>$x != $y</td>
<td>Distinto</td>
<td>**true**, si son diferentes (adapta tipos, lo analizaremos).</td>
</tr>
<tr>
<td>$x <> $y</td>
<td>Distinto</td>
<td>**true**, si son diferentes (adapta tipos, lo analizaremos).</td>
</tr>
<tr>
<td>$x !== $y</td>
<td>No idéntico</td>
<td>**true**, si son diferentes (valor y tipo).</td>
</tr>
<tr>
<td>$x < $y</td>
<td>Menor que</td>
<td>**true**, si $x es menor que $y.</td>
</tr>
<tr>
<td>$x > $y</td>
<td>Mayor que</td>
<td>**true**, si $x es mayor que $y.</td>
</tr>
<tr>
<td>$x <= $y</td>
<td>Menor o igual que</td>
<td>**true**, si $x es menor o igual que $y.</td>
</tr>
<tr>
<td>$x >= $y</td>
<td>Mayor o igual que</td>
<td>**true**, si $x es mayor o igual que $y.</td>
</tr>
</table>

::: info Nota
PHP si comparo valores de diferentes tipo, va a realizar conversiones que veremos más adelante
- [de string a números](conversión)(http://php.net/manual/es/language.types.string.php#language.types.string.conversion).
  :::


<details>
<summary>Practica ejercicios aquí</summary>


***Ejercicio pendiente de incorporar:** Ejercicio 12:Selección simple
***Ejercicio pendiente de incorporar:** Ejercicio 13:Selección simple 2
**Ejercicio pendiente de incorporar:** Ejercicio 13.1: Selección con función strpos Operador Comparacion
</details>


**Operadores Lógicos **

Los operadores lógicos permiten combinar expresiones booleanas para realizar evaluaciones más complejas.

**|+ **Operadores Lógicos****

<table>
<tr>
<th>**Operador**</th>
<th>**Resultado**</th>
<th></th>
</tr>
<tr>
<td>$x and $y</td>
<td>**true** si $x y $y son **true**.</td>
<td></td>
</tr>
<tr>
<td>$x && $y</td>
<td>**true** si $x y $y son **true**.</td>
<td></td>
</tr>
<tr>
<td>$x or $y</td>
<td>**true** si uno de los dos es **true** (o los dos).</td>
<td></td>
</tr>
<tr>
<td>$x</td>
<td>$y</td>
<td>**true** si uno de los dos es **true** (o los dos).</td>
</tr>
<tr>
<td>!$x</td>
<td>**true** si $x **no** es **true** (Es para negar algo=.</td>
<td></td>
</tr>
<tr>
<td>$x xor $y</td>
<td>**true** si **sólo uno** de los dos es **true** (No muy usado).</td>
<td></td>
</tr>
</table>

## Formularios


::: info Nota
Los Formularios, constituyen un tema posterior
**Realizamos una introducción para tener más opciones a la hora de proponer ejercicios**
*De esta forma podremos aportar valores por parte del usuario a la ejecución de los mismos

:::
---
**Ejemplos**

<details>
<summary>Programa que obtiene el valor absoluto de un número</summary>

```php
$num = rand(-10, 20);
if ($num < 0) {
   $num = -$num;
}
echo "El valor absoluto del número es $num";

</details>

```
<!-- Cierre de plantilla original -->
**Ejercicios: Realiza los siguientes ejercicios**

> **Ejercicio externo pendiente de incorporar:** `ManuelRomero/ProgramacionWeb/Sintaxis/ejercicios/ejercicio12`


> **Ejercicio externo pendiente de incorporar:** `ManuelRomero/ProgramacionWeb/Sintaxis/ejercicios/ejercicio13`


## = If gráficamente (ordinagrama) =
![imagen muestra el flujo de ejecución: si la **expresión booleana* es **true**, se ejecutan las sentencias dentro del bloque **if**; si es **false*', el flujo continúa después del bloque.


## = if...else =
*Podemos añadir una estructura **else** para especificar un bloque de sentencias que se ejecutará solo cuando la condición sea **false**.
```php
if (expresion_booleana) {
    bloque_de_sentencias_1;
} else {
    bloque_de_sentencias_2;
}
```

**Ejemplo de `if...else` **
```php


<details>
<summary>Miramos si una edad en mayor o menor de edad</summary>

```php
$edad = rand(1,35);
if ($edad >= 18) {
    echo "Eres mayor de edad.";
} else {
    echo "Eres menor de edad.";
}
```
</details>
*Si **$edad** es 18 o más, se imprime "Eres mayor de edad". Si **$edad** es menor que 18, se imprime "Eres menor de edad".


## = if...else  gráfico (Ordinograma) =
![estructura_if_else.png](estructura_if.png](/images/estructura_if.png)
La)(/images/estructura_if_else.png)
La imagen muestra que si la condición es **true**, se ejecuta el bloque **if**; si es **false**, se ejecuta el bloque **else**.

**Realiza los siguientes ejercicios**

> **Ejercicio externo pendiente de incorporar:** `ManuelRomero/ProgramacionWeb/Sintaxis/ejercicios/ejercicio14`


> **Ejercicio externo pendiente de incorporar:** `ManuelRomero/ProgramacionWeb/Sintaxis/ejercicios/ejercicio15`


> **Ejercicio externo pendiente de incorporar:** `ManuelRomero/ProgramacionWeb/Sintaxis/ejercicios/ejercicio100`


## = `if...elseif...else` =
*La estructura `if...elseif...else` permite evaluar múltiples condiciones en secuencia. Solo se ejecutará el bloque correspondiente a la primera condición verdadera.

```php
if (expresion_booleana_1) {
    bloque_sentencias_1;
} elseif (expresion_booleana_2) {
    bloque_sentencias_2;
} elseif (expresion_booleana_3) {
    bloque_sentencias_3;
} else {
    bloque_sentencias_4;
}
```

## = Ejemplo de `if...elseif...else` =
```php
$nota = 85;
if ($nota >= 90) {
    echo "Excelente";
} elseif ($nota >= 75) {
    echo "Bueno";
} elseif ($nota >= 50) {
    echo "Aprobado";
} else {
    echo "Reprobado";
}
```

*En este ejemplo, dependiendo del valor de `$nota`, el programa imprime un mensaje diferente. Solo se ejecuta el bloque de la primera condición verdadera.

## = Visualización del `if...elseif...else` =
![estructura_if_elseif.png](/images/estructura_if_elseif.png)
La imagen muestra cómo se evalúan varias condiciones en secuencia hasta que una sea verdadera. Si ninguna lo es, se ejecuta el bloque `else`.

## = Sintaxis Alternativa =
*PHP permite una sintaxis alternativa para **if**, **else**, y **elseif**, especialmente útil cuando se intercala código HTML:
```php
if (condicion):
    Sentencia_1;
elseif (otra_condicion):
    Sentencia_2;
else:
    Sentencia_3;
endif;
```

*Ejemplo con HTML:
```php
<?php if (true): ?>
    <h1>Este contenido se mostrará</h1>
<?php else: ?>
    <h1>Este contenido no se mostrará</h1>
<?php endif; ?>
```


> **Ejercicio externo pendiente de incorporar:** `ManuelRomero/ProgramacionWeb/Sintaxis/ejercicios/ejercicioIfHtml`

## = Ejercicio Propuesto =
*Escribe un programa que evalúe la temperatura y muestre un mensaje según el rango:
- Si la temperatura es menor que 0: "Hace mucho frío".
- Si la temperatura está entre 0 y 15: "Hace frío".
- Si la temperatura está entre 15 y 30: "Temperatura agradable".
- Si la temperatura es mayor que 30: "Hace calor".
```php
$temp = rand(-10, 40); // Genera una temperatura aleatoria
echo "La temperatura actual es $temp grados.\n";

// Escribe el código del ejercicio aquí
```


## Operador Ternario
*El **operador ternario** es una forma más compacta de expresar una estructura **if-else** en una única línea, ideal cuando se desea evaluar una condición y devolver un valor en función del resultado.
*Esta expresión retorna un valor según la condición especificada.

```php
(expresión_booleana) ? valor_si_true : valor_si_false;
```

*El valor que retorna es el resultado de la **expresión** que corresponda según el valor de la condición. Esta expresión es equivalente a:

```php
if (expresión_booleana)
    valor_si_true;
else
    valor_si_false;
```

*Usar el operador ternario ayuda a escribir el código de forma más compacta y clara, especialmente en expresiones sencillas.

## = Ejemplo =


**Actividad:** Determinar si un número aleatorio es par o impar


<details>
<summary>Operador ternario</summary>

Programa para par o impar con operador ternario
```php
<?php
$num = rand(1, 100);
echo ($num % 2 == 0) ? "$num es par" : "$num es impar";
?>
```
</details>


<details>
<summary>Estructura if-else</summary>

Programa para par o impar con estructura if-else
```php
<?php
$num = rand(1, 100);
if ($num % 2 == 0) {
    echo "$num es par";
} else {
    echo "$num es impar";
}
?>
```
</details>


*Este **operador ternario** se utiliza mucho en programación, y conviene entenderlo y habituarse a su uso para escribir código más conciso y claro.


> **Ejercicio externo pendiente de incorporar:** `ManuelRomero/ProgramacionWeb/Sintaxis/ejercicios/17_TirarDado`


## Selección con switch
*El operador **switch** es un selector múltiple que permite evaluar el valor de una variable o expresión y ejecutar el bloque de código correspondiente al primer caso que coincida.
*En PHP, la sentencia `case` puede albergar valores de cualquier tipo simple (números, cadenas, etc.), no está limitada a enteros como en otros lenguajes.
*Esta estructura es útil cuando tenemos múltiples casos excluyentes y queremos evitar múltiples `if-else`.

## = Sintaxis =
La sintaxis básica de un `switch` en PHP es:
```php
switch ($valor) {
    case "valor1":
        // acciones
        break;
    case "valor2":
        // acciones
        break;
    case "valorn":
        // acciones
        break;
    default:
        // acciones si no hay coincidencia
}
```

## = Notas Importantes =
*El **switch** busca la primera coincidencia de **$valor** con los valores de los casos (**case**) y ejecuta todas las instrucciones posteriores hasta encontrar un **break**.
*Si no se coloca un **break**, continuará ejecutando los casos siguientes, incluso si no coinciden.

## = Ejemplo Básico =


::: tip Ejemplo: Identificar un Nombre

*Escribe un programa que evalúe si una variable `$nombre` es "María", "Pedro", o cualquier otro nombre.


<details>
<summary>Posible Solución</summary>

```php
<?php
$nombre = "Pedro";

switch ($nombre) {
    case "María":
        echo "Eres una chica";
        break;
    case "Pedro":
        echo "Eres un chico";
        break;
    default:
        echo "No sé qué nombre tienes";
}
?>
```
</details>
:::


> **Ejercicio externo pendiente de incorporar:** `ManuelRomero/ProgramacionWeb/Sintaxis/ejercicios/ejercicio16`


## = Ejemplo con Rango de Valores =
*En algunos casos, queremos evaluar rangos de valores (por ejemplo, edades, calificaciones). En PHP, esto se logra usando expresiones booleanas dentro de los `case` y configurando el `switch` para evaluar `true`.


::: tip Ejemplo: Nivel de Madurez

*Generar una edad aleatoria entre 0 y 110 y clasificarla según el nivel de madurez:

- 0–2: Bebé
- 3–10: Niñez
- 11–17: Adolescencia
- 18–26: Juventud
- 27–59: Adultez
- 60–80: Experimentado
- Más de 80: Disfrutando la vida


<details>
<summary>Posible Solución</summary>

```php
<?php
$edad = rand(0, 110);

switch (true) {
    case ($edad >= 0 && $edad <= 2):
        echo "Con $edad años: Eres un bebé";
        break;
    case ($edad >= 3 && $edad <= 10):
        echo "Con $edad años: Estás en la niñez";
        break;
    case ($edad >= 11 && $edad <= 17):
        echo "Con $edad años: Estás en la adolescencia";
        break;
    case ($edad >= 18 && $edad <= 26):
        echo "Con $edad años: Eres joven";
        break;
    case ($edad >= 27 && $edad <= 59):
        echo "Con $edad años: Eres adulto";
        break;
    case ($edad >= 60 && $edad <= 80):
        echo "Con $edad años: Eres experimentado";
        break;
    default:
        echo "Con $edad años: Disfruta la vida";
}
?>
```
</details>
:::

## = Casos Curiosos en PHP =
*PHP en una comparación, adapta los tipos a comparar (si puede).
*Simpre que compare un entero con un booleano, convertirá el entero a booleano.
*En PHP, si especificamos expresiones booleanas dentro de un **case**,  deberíamos de establecer también un booleano en el **switch** para evaluar `true`.
**Esto evita errores de interpretación con valores como `0`.**

**Ejemplo Problemático**:
```php
<?php
$nota = 0;

switch ($nota) {
    case ($nota >= 0 && $nota <= 3):
        echo "Nota deficiente";
        break;
    case 4:
        echo "Nota insuficiente";
        break;
    case 5:
        echo "Nota suficiente";
        break;
    case ($nota > 6 && $nota < 9):
        echo "Nota notable";
        break;
    case ($nota >= 9):
        echo "Nota sobresaliente";
        break;
}
?>
```

*Si `$nota = 0`, el primer caso no se ejecuta porque PHP convierte `0` a booleano `false`, lo que genera errores lógicos.

**Solución Recomendada**:
```php
<?php
$nota = rand(0, 10);

switch (true) {
    case ($nota >= 0 && $nota <= 3):
        echo "Nota deficiente";
        break;
    case $nota == 4:
        echo "Nota insuficiente";
        break;
    case $nota == 5:
        echo "Nota suficiente";
        break;
    case $nota == 6:
        echo "Nota bien";
        break;
    case ($nota >= 7 && $nota <= 8):
        echo "Nota notable";
        break;
    case ($nota >= 9):
        echo "Nota sobresaliente";
        break;
}
?>
```


*Generar un número aleatorio para el mes (entre 1 y 12) y mostrar el número de días correspondientes. Si el número no corresponde a un mes válido, informar al usuario.


<details>
<summary>Posible Solución</summary>

```php
<?php
$mes = rand(1, 15);

switch ($mes) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        echo "$mes es un mes de 31 días";
        break;
    case 4: case 6: case 9: case 11:
        echo "$mes es un mes de 30 días";
        break;
    case 2:
        echo "$mes es un mes de 28 o 29 días (dependiendo del año)";
        break;
    default:
        echo "$mes no es un mes válido";
}
?>
```
</details>

## Selección con el operador match
*El operador **match** aparece en php en la versión 8
*Es una opción depurada y para casos concretos que puede sustituir  a la estructura switch-case
*A diferencia del **switch-case**, es un **operador**, y por lo tanto **devuelve un valor**.
**Su sintaxis:**
```php
$variable = match($valor){
valor_rama_1 => valor_retornado_rama_1,
valor_rama_2 => valor_retornado_rama_2,
....
default => valor_retornado_si_ninguna_coincidencia_anterior
};
```

::: tip Observa

*1.- Lo que retorne **lo asigno** a una variable
```php
$variable = match ($valor){
 ....
};
```
*2.- En cada rama tengo **dos partes** separadas por el operador **=>**:
- El valor con el que comparo
- El valor que retorno si hay un match (coincidencia)
```php
valor_rama_1 => valor_retornado_rama_1,
```
*3. Puedo tener una rama de **default**
```php
default => valor_retornado_si_ninguna_coincidencia_anterior
```
*4. Al final hay un punto y coma, ya que termina la asignación
```php
$variable = match ($valor){
 ....
};
```
:::


::: tip Operador match

*1.- Siempre **retornará un valor**.
*2.- **Evaluamos un valor**, al igual que con switch-case.
*3.- En **cada una de las ramas** puedo establecer **varias condiciones separadas por comas**, intuyendo en ello una **or lógica**.
*4.- Igual que en switch-case existe **la rama default**.
*5.- Como va a ser parte de una asignación, debe de terminar en **;** (punto y comoa).
*6.- Las comparaciones que hace **son estrictas**  a diferenica del switch-case que hace comparaciones no estrictas
:::
*A continuación podemos ver ejemplos
```php
$numero_mes = rand(1,15);
$nombre_mes = match ($numero_mes){
	1=>"Enero",
	2=>"Febrero",
	.....
	default => "Mes incorrecto"
};
echo "El mes $numero_mes es $nombre_mes"

```
- Aquí vemos el uso de varios valores posibles en la comparación
```php
$numero_mes = rand(1,15);
$numero_dias=match($mes){  
    1,3,5,7,8,10,12 => 31,  
    4,6,8,11 =>30,  
    2 => 28  
};  
echo "El mes $mes tiene $numero_dias días";
```

**Ejercicio**

> **Ejercicio externo pendiente de incorporar:** `ManuelRomero/ProgramacionWeb/Sintaxis/ejercicios/Calculadora`

