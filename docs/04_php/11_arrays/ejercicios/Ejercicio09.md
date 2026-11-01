---
id: php-arrays-009
titulo: Canales de televisión
tema: arrays
orden: 9
---

Utiliza el fichero JSON de canales de televisión disponible en:

https://github.com/MAlejandroR/json_tv

- Descarga el contenido de `tv.json` utilizando `file_get_contents()`.
- Convierte el JSON en un array asociativo con `json_decode()`.
- Analiza su estructura y recórrelo con `foreach`.
- Muestra los canales de televisión, incluyendo su nombre y logotipo.

**URL del fichero:**

```php
$url = "https://raw.githubusercontent.com/MAlejandroR/json_tv/main/tv.json";