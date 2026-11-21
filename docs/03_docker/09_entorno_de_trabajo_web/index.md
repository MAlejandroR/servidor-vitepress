---
title: Nuestro entorno de desarrollo web con Docker
description: Configuración progresiva de un entorno de desarrollo con Docker, Apache, PHP, MySQL, phpMyAdmin, Composer y Laravel.
icon: fa-brands fa-docker
---


# Nuestro entorno de desarrollo web con Docker

Vamos a construir progresivamente un entorno de desarrollo para nuestras aplicaciones web utilizando Docker.

**No pretendemos estudiar todas las posibilidades de Docker**, sino disponer de un entorno que podamos adaptar a las necesidades de nuestros proyectos.

Partiremos de un servidor Apache con PHP y, conforme avancemos, incorporaremos nuevas funcionalidades:

- Servidor web con PHP.
- Acceso a los archivos de nuestro proyecto.
- Visualización de errores y logs.
- Configuración de Apache.
- Base de datos MySQL.
- Administración de MySQL mediante phpMyAdmin.
- Gestión de dependencias con Composer.
- Preparación del entorno para Laravel.

::: tip Nuestro objetivo
Tener una configuración sencilla que podamos reutilizar y ampliar cada vez que nuestro proyecto necesite una nueva funcionalidad.
:::

## 1. Nuestro primer servidor PHP

### ¿Qué queremos conseguir?

Disponer de un servidor Apache con PHP para ejecutar nuestras aplicaciones sin instalar Apache ni PHP directamente en nuestro ordenador.

Crearemos esta estructura:

```text
proyecto/
├── docker/
│   ├── Dockerfile
│   └── compose.yaml
└── php/
    └── index.php
```

### Dockerfile

El archivo `Dockerfile` define cómo construir nuestra imagen.

```dockerfile
FROM php:8.4-apache
```

Utilizamos una imagen oficial que ya incorpora:

- Linux como sistema base.
- Apache como servidor web.
- PHP integrado con Apache.

No necesitamos instalar ninguno de estos componentes manualmente.

### compose.yaml

```yaml
services:
  web:
    build: .
    container_name: web
    ports:
      - "80:80"
    volumes:
      - ../php:/var/www/html
```

Explicación:

- `build: .`: construye la imagen utilizando el Dockerfile de esta carpeta.
- `container_name`: establece el nombre del contenedor.
- `ports`: conecta el puerto 80 del ordenador con el 80 del contenedor.
- `volumes`: comparte nuestra carpeta `php` con `/var/www/html` del contenedor.

::: info ¿Por qué `/var/www/html`?
Es el directorio desde el que Apache sirve las páginas web en la configuración predeterminada de esta imagen.
:::

### Ejecutar nuestro servidor

Situados en la carpeta `docker`:

```bash
docker compose up -d --build
```

Creamos `php/index.php`:

```php
<?php
echo "<h1>Hola desde Docker</h1>";
echo "<p>PHP " . PHP_VERSION . "</p>";
```

Accedemos a:

**http://localhost**

Ya tenemos nuestro primer entorno de desarrollo PHP.

---

## 2. Visualizar los archivos de una carpeta

### ¿Qué queremos conseguir?

Cuando accedemos a una carpeta que no contiene `index.php` ni `index.html`, queremos que Apache muestre el listado de sus archivos.

Esto resulta útil en clase para disponer de varios ejercicios organizados en carpetas.

### Modificar el Dockerfile

```dockerfile
FROM php:8.4-apache

RUN echo '<Directory /var/www/html>' >> /etc/apache2/sites-available/000-default.conf \
    && echo 'Options +Indexes' >> /etc/apache2/sites-available/000-default.conf \
    && echo '</Directory>' >> /etc/apache2/sites-available/000-default.conf
```

La directiva importante es:

```apache
Options +Indexes
```

Indica a Apache que permita mostrar el contenido de los directorios cuando no existe un archivo índice.

::: warning
Esta configuración es útil para desarrollo y ejercicios, pero normalmente no queremos mostrar el listado de archivos en un servidor de producción.
:::

### Comprobar

Creamos una carpeta con varios archivos PHP, sin `index.php`, y accedemos a ella desde el navegador.

Apache mostrará los archivos disponibles.

---

## 3. Permitir las reglas de reescritura de Apache

### ¿Qué queremos conseguir?

Poder utilizar archivos `.htaccess` para modificar el comportamiento de Apache y reescribir direcciones URL.

Por ejemplo, transformar:

```text
/producto/15
```

en una petición interna a:

```text
/producto.php?id=15
```

### Modificar el Dockerfile

Añadimos:

```dockerfile
RUN a2enmod rewrite
```

Esto activa el módulo `mod_rewrite` de Apache.

También debemos permitir que Apache lea las reglas de nuestros archivos `.htaccess`:

```dockerfile
RUN echo '<Directory /var/www/html>' >> /etc/apache2/sites-available/000-default.conf \
    && echo 'AllowOverride All' >> /etc/apache2/sites-available/000-default.conf \
    && echo '</Directory>' >> /etc/apache2/sites-available/000-default.conf
```

::: tip Dos requisitos
- `a2enmod rewrite`: activa el módulo de reescritura.
- `AllowOverride All`: permite aplicar las directivas autorizadas desde `.htaccess`.
:::

### Ejemplo de .htaccess

```apache
RewriteEngine On
RewriteRule ^producto/([0-9]+)/?$ producto.php?id=$1 [L,QSA]
```

Con esta regla podemos acceder a `producto.php?id=15` mediante la URL `/producto/15`.

---

## 4. Visualizar los errores de PHP en Docker

### ¿Qué queremos conseguir?

Ver los errores de nuestras aplicaciones PHP directamente en el terminal mientras trabajamos.

Docker permite consultar los logs mediante:

```bash
docker compose logs -f web
```

Sin embargo, para que aparezcan los errores de PHP, estos deben llegar a las salidas que Docker recoge.

### Configurar PHP

Añadimos al Dockerfile:

```dockerfile
RUN echo "log_errors = On" > /usr/local/etc/php/conf.d/docker-logs.ini \
    && echo "error_log = /proc/self/fd/2" >> /usr/local/etc/php/conf.d/docker-logs.ini \
    && echo "display_errors = On" >> /usr/local/etc/php/conf.d/docker-logs.ini \
    && echo "error_reporting = E_ALL" >> /usr/local/etc/php/conf.d/docker-logs.ini
```

Estamos creando un archivo de configuración adicional de PHP.

Las directivas más importantes son:

- `log_errors = On`: activa el registro de errores.
- `error_log`: establece dónde se escriben los errores.
- `display_errors = On`: muestra los errores en el navegador.
- `error_reporting = E_ALL`: informa de todos los tipos de errores.

### ¿Qué es `/proc/self/fd/2`?

Linux dispone de tres descriptores estándar:

| Descriptor | Nombre | Función |
|---|---|---|
| 0 | stdin | Entrada estándar |
| 1 | stdout | Salida estándar |
| 2 | stderr | Salida de errores |

La ruta `/proc/self/fd/2` permite escribir en el descriptor de errores del proceso actual.

Docker recoge los flujos estándar conectados al sistema de logging del contenedor.

::: info Apache
Apache suele tener sus propios registros redirigidos a Docker. Si los errores PHP no aparecen con `/proc/self/fd/2`, debemos revisar la configuración de los procesos de Apache y sus descriptores.
:::

### Comprobar

```php
<?php
error_log("Probando los logs de PHP");
```

Abrimos el terminal:

```bash
docker compose logs -f web
```

Deberíamos visualizar el mensaje si la salida de errores está correctamente conectada al sistema de logging.

::: warning Producción
En producción debemos utilizar `display_errors = Off` para evitar mostrar información interna de nuestra aplicación.
:::

---

## 5. Incorporar MySQL

### ¿Qué queremos conseguir?

Disponer de una base de datos MySQL para almacenar la información de nuestras aplicaciones PHP.

No necesitamos instalar MySQL en nuestro ordenador: añadiremos otro servicio a Docker Compose.

### Modificar compose.yaml

```yaml
services:
  web:
    build: .
    container_name: web
    ports:
      - "80:80"
    volumes:
      - ../php:/var/www/html

  mysql:
    image: mysql:8.4
    container_name: mysql
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: desarrollo
      MYSQL_USER: alumno
      MYSQL_PASSWORD: alumno
    volumes:
      - mysql_data:/var/lib/mysql

volumes:
  mysql_data:
```

Hemos incorporado:

- Un nuevo servicio `mysql`.
- Una base de datos inicial llamada `desarrollo`.
- Un usuario `alumno`.
- Un volumen para conservar los datos.

::: tip Comunicación entre contenedores
Desde PHP, el servidor de base de datos se identifica como `mysql`, que es el nombre del servicio.

No debemos utilizar `localhost` para conectar PHP con MySQL, porque ambos se ejecutan en contenedores diferentes.
:::

### Instalar el controlador de MySQL para PHP

Añadimos al Dockerfile:

```dockerfile
RUN docker-php-ext-install pdo_mysql
```

Esto permite conectar nuestras aplicaciones PHP con MySQL utilizando PDO.

### Comprobar la conexión

```php
<?php

$conexion = new PDO(
    "mysql:host=mysql;dbname=desarrollo;charset=utf8mb4",
    "alumno",
    "alumno"
);

echo "Conexión correcta";
```

::: warning
Las contraseñas anteriores son únicamente para nuestro entorno local de prácticas. En un proyecto real utilizaremos credenciales seguras y variables de entorno.
:::

---

## 6. Incorporar phpMyAdmin

### ¿Qué queremos conseguir?

Administrar nuestras bases de datos desde el navegador, sin necesidad de utilizar comandos SQL para todas las operaciones.

### Modificar compose.yaml

Añadimos un tercer servicio:

```yaml
  phpmyadmin:
    image: phpmyadmin:latest
    container_name: phpmyadmin
    ports:
      - "8080:80"
    environment:
      PMA_HOST: mysql
    depends_on:
      - mysql
```

La configuración importante es:

- `PMA_HOST: mysql`: indica dónde se encuentra el servidor MySQL.
- `8080:80`: permite acceder a phpMyAdmin desde el puerto 8080.
- `depends_on`: establece que el servicio MySQL debe iniciarse antes que phpMyAdmin, aunque no garantiza que la base de datos ya esté lista.

### Comprobar

Ejecutamos:

```bash
docker compose up -d
```

Accedemos a:

**http://localhost:8080**

Podemos identificarnos utilizando el usuario y la contraseña configurados en MySQL.

---

## 7. Incorporar Composer

### ¿Qué queremos conseguir?

Utilizar Composer para instalar y gestionar las dependencias de nuestras aplicaciones PHP.

Queremos poder ejecutar comandos como:

```bash
composer install
composer update
composer require nesbot/carbon
composer dump-autoload
```

Sin tener que instalar Composer en nuestro ordenador.

### Incorporar Composer a la imagen

Añadimos al Dockerfile:

```dockerfile
COPY --from=composer:2 /usr/bin/composer /usr/local/bin/composer
```

Esta instrucción copia el ejecutable de Composer desde su imagen oficial a nuestra imagen PHP.

::: tip
No estamos instalando una segunda versión de PHP. Estamos incorporando el ejecutable de Composer a nuestro contenedor de desarrollo.
:::

### Ejecutar Composer dentro del contenedor

Podemos utilizar:

```bash
docker compose exec web composer --version
```

O instalar una dependencia:

```bash
docker compose exec web composer require nesbot/carbon
```

Composer se ejecuta dentro del contenedor y trabaja sobre los archivos compartidos mediante el volumen.

### Simplificar su ejecución con un alias

En Linux, si utilizamos el contenedor `web`, podemos crear:

```bash
alias composer='docker exec -u "$(id -u):$(id -g)" -w "/var/www/html/$(basename "$PWD")" web composer'
```

Este alias supone que estamos situados en una carpeta de proyecto cuyo nombre coincide con una subcarpeta de `/var/www/html`.

Por ejemplo:

```text
php/
└── mi-proyecto/
    └── composer.json
```

Desde `php/mi-proyecto` podremos ejecutar:

```bash
composer install
composer update
composer dump-autoload
```

El comando se ejecutará realmente dentro del contenedor.

::: info Permisos
La opción `-u "$(id -u):$(id -g)"` permite ejecutar Composer con el identificador de usuario y grupo del anfitrión, evitando que los archivos generados pertenezcan a `root`.

Este alias presupone que el contenedor está arrancado y que su directorio de trabajo existe dentro del volumen.
:::

---

## 8. Preparar el entorno para Laravel

### ¿Qué queremos conseguir?

Reutilizar nuestro entorno PHP, Apache y MySQL para ejecutar aplicaciones Laravel.

Laravel introduce nuevos requisitos:

- El directorio público de la aplicación es `public`.
- Necesitamos Composer.
- Debemos disponer de determinadas extensiones PHP.
- Necesitamos permitir la reescritura de URLs.
- Algunos directorios requieren permisos de escritura.

### Modificar el directorio público de Apache

Laravel no debe servir directamente todos los archivos del proyecto.

Su punto de entrada es:

```text
proyecto-laravel/
├── app/
├── bootstrap/
├── config/
├── public/
│   └── index.php
├── resources/
├── routes/
├── storage/
└── vendor/
```

Debemos configurar Apache para que utilice `public` como directorio raíz.

Por ejemplo, si montamos el proyecto Laravel directamente en `/var/www/html`, podemos añadir al Dockerfile:

```dockerfile
ENV APACHE_DOCUMENT_ROOT=/var/www/html/public

RUN sed -ri \
    -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' \
    /etc/apache2/sites-available/*.conf
```

La configuración se aplica a los archivos de los sitios de Apache, no a todas las referencias del servidor.

### Activar las reescrituras

```dockerfile
RUN a2enmod rewrite
```

Y permitir el archivo `.htaccess` que Laravel incorpora en `public`:

```dockerfile
RUN echo '<Directory /var/www/html/public>' >> /etc/apache2/sites-available/000-default.conf \
    && echo 'AllowOverride All' >> /etc/apache2/sites-available/000-default.conf \
    && echo '</Directory>' >> /etc/apache2/sites-available/000-default.conf
```

::: info
Este apartado es una primera aproximación. Cuando comencemos con Laravel, completaremos la configuración con las extensiones PHP necesarias, los permisos de `storage` y `bootstrap/cache`, y las variables de entorno.
:::

---

## 9. Comandos habituales de nuestro entorno

| Objetivo | Comando |
|---|---|
| Iniciar servicios | `docker compose up -d` |
| Reconstruir imagen | `docker compose up -d --build` |
| Detener servicios | `docker compose down` |
| Ver contenedores | `docker compose ps` |
| Consultar logs | `docker compose logs -f web` |
| Entrar en PHP | `docker compose exec web bash` |
| Consultar versión PHP | `docker compose exec web php -v` |
| Consultar módulos PHP | `docker compose exec web php -m` |
| Ejecutar Composer | `docker compose exec web composer install` |
| Reiniciar Apache | `docker compose restart web` |

::: warning Importante
Cuando modificamos el `Dockerfile`, necesitamos reconstruir la imagen:

```bash
docker compose up -d --build web
```

Cuando modificamos `compose.yaml`, normalmente debemos recrear los servicios afectados:

```bash
docker compose up -d
```

Si únicamente modificamos archivos PHP compartidos mediante un volumen, no necesitamos reconstruir el contenedor.
:::

## 10. Nuestro Dockerfile de referencia

Después de incorporar las funcionalidades anteriores, podemos disponer de un Dockerfile como este para proyectos PHP convencionales:

```dockerfile
FROM php:8.4-apache

# Extensión de MySQL
RUN docker-php-ext-install pdo_mysql

# Composer
COPY --from=composer:2 /usr/bin/composer /usr/local/bin/composer

# Reescritura de URLs
RUN a2enmod rewrite

# Configuración de Apache
RUN echo '<Directory /var/www/html>' >> /etc/apache2/sites-available/000-default.conf \
    && echo 'Options +Indexes' >> /etc/apache2/sites-available/000-default.conf \
    && echo 'AllowOverride All' >> /etc/apache2/sites-available/000-default.conf \
    && echo '</Directory>' >> /etc/apache2/sites-available/000-default.conf

# Errores de PHP
RUN echo "log_errors = On" > /usr/local/etc/php/conf.d/docker-logs.ini \
    && echo "error_log = /proc/self/fd/2" >> /usr/local/etc/php/conf.d/docker-logs.ini \
    && echo "display_errors = On" >> /usr/local/etc/php/conf.d/docker-logs.ini \
    && echo "error_reporting = E_ALL" >> /usr/local/etc/php/conf.d/docker-logs.ini

WORKDIR /var/www/html
```

::: tip Una configuración que evoluciona
No necesitamos incorporar todas estas instrucciones desde el principio.

La idea es **añadir cada configuración cuando aparezca la necesidad**, entendiendo qué problema resuelve y cómo comprobar su funcionamiento.

Cuando trabajemos con Laravel, adaptaremos este Dockerfile a sus requisitos específicos.
:::
