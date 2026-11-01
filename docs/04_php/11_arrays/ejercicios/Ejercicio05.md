---
id: php-arrays-005
titulo: Imágenes aleatorias
tema: arrays
orden: 5
---

- Crea un array con las URL de varias imágenes.
- Muestra **3 imágenes aleatorias**, sin repetir ninguna.
- Actualiza la página cada **5 segundos** para mostrar otras 3 imágenes.

<details>
<summary>💡 Ayuda: recarga de página y array de imágenes</summary>

Para recargar automáticamente una página cada 5 segundos puedes utilizar esta etiqueta HTML dentro de `<head>`:

```html
<meta http-equiv="refresh" content="5">
```

Si deseas indicar expresamente la página que se recargará:

```html
<meta http-equiv="refresh" content="5; url=vuestra_pagina.php">
```

**Array de imágenes de ejemplo:**

```php
<?php
$imagenes = [
    "https://es.wikieducator.org/images/3/3d/Ajax_cliente_servidor.png",
    "https://es.wikieducator.org/images/7/7b/Funcionamiento_ajax.png",
    "https://es.wikieducator.org/images/a/aa/Angular_app_base.png",
    "https://es.wikieducator.org/images/3/3d/Docker_distancia_1.png",
    "https://es.wikieducator.org/images/4/4e/Opcion_Instalar.png",
    "https://es.wikieducator.org/images/a/ab/AplicacionWeb.png",
    "https://es.wikieducator.org/images/e/e4/Red3.png",
    "https://es.wikieducator.org/images/f/f2/DACTW.png",
    "https://es.wikieducator.org/images/e/e5/M3_web.png",
    "https://es.wikieducator.org/images/a/a6/Ficheros.jpeg"
];
```

</details>