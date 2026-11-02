# <i class="fa-brands fa-git-alt"></i> Git y GitHub: comandos básicos

Git es un **sistema de control de versiones** que permite registrar los cambios de un proyecto y trabajar con diferentes versiones de su código.

**GitHub** es una plataforma que permite alojar repositorios Git en Internet.

## <i class="fa-solid fa-folder-plus"></i> Crear un repositorio

Para comenzar a utilizar Git en un proyecto existente:

```bash
cd mi-proyecto
git init
```

Esto crea un repositorio local en la carpeta `.git`.

Para comprobar su estado:

```bash
git status
```

::: tip
Un **repositorio** es un proyecto cuyo historial de cambios está gestionado por Git.
:::

## <i class="fa-solid fa-cloud-arrow-up"></i> Subir un proyecto a GitHub

Primero creamos un repositorio vacío en GitHub.

Después, desde la carpeta de nuestro proyecto:

```bash
# Añadir todos los archivos
git add .

# Guardar los cambios
git commit -m "Primer commit"

# Establecer la rama principal
git branch -M main

# Conectar con GitHub
git remote add origin https://github.com/usuario/mi-proyecto.git

# Subir el proyecto
git push -u origin main
```

En posteriores ocasiones, para subir nuevos cambios:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

## <i class="fa-solid fa-link"></i> Consultar el repositorio remoto

Para conocer la dirección del repositorio de GitHub asociado al proyecto:

```bash
git remote -v
```

Para obtener únicamente su URL:

```bash
git remote get-url origin
```

Para cambiar la dirección del repositorio remoto:

```bash
git remote set-url origin https://github.com/usuario/otro-repo.git
```

::: info
`origin` es el nombre convencional del repositorio remoto principal.
:::

## <i class="fa-solid fa-code-branch"></i> Trabajar con ramas

Las **ramas** permiten desarrollar funcionalidades sin modificar directamente la rama principal.

```bash
# Ver las ramas locales
git branch

# Crear una rama y cambiar a ella
git switch -c nueva-funcionalidad

# Cambiar a otra rama
git switch main

# Subir una rama nueva a GitHub
git push -u origin nueva-funcionalidad
```

Para incorporar los cambios de una rama a `main`:

```bash
git switch main
git merge nueva-funcionalidad
```

## <i class="fa-solid fa-download"></i> Descargar y actualizar proyectos

Clonar un repositorio de GitHub:

```bash
git clone https://github.com/usuario/mi-proyecto.git
```

Actualizar la rama actual con los cambios del repositorio remoto:

```bash
git pull
```

## <i class="fa-solid fa-clock-rotate-left"></i> Consultar el historial

```bash
# Ver los commits
git log --oneline

# Ver los cambios pendientes
git diff

# Consultar el estado
git status
```
## <i class="fa-solid fa-box-archive"></i> Guardar cambios temporalmente: `git stash`

En ocasiones estamos modificando archivos de nuestro proyecto, pero queremos **cambiar de rama sin perder el trabajo y sin realizar un commit**.

Git permite guardar estos cambios temporalmente mediante `git stash` y recuperarlos cuando los necesitemos.

### Guardar y recuperar cambios

```bash
# Guardar temporalmente los cambios
git stash

# Cambiar a otra rama
git switch desarrollo

# Volver a la rama original
git switch main

# Recuperar los cambios guardados
git stash pop
```

::: tip
`git stash` es especialmente útil cuando estamos probando una solución y queremos dejarla pendiente para decidir más adelante si la incorporamos.
:::

### Guardar cambios con un nombre

Podemos guardar varios conjuntos de cambios y asignarles una descripción:

```bash
git stash push -u -m "Probando nuevo diseño"

git stash push -u -m "Cambios en el menú"
```

La opción `-u` permite incluir también los archivos nuevos que Git todavía no está siguiendo, salvo los ignorados.

Para consultar los cambios guardados:

```bash
git stash list
```

Resultado:

```text
stash@{0}: On main: Cambios en el menú
stash@{1}: On main: Probando nuevo diseño
```

Para recuperar uno concreto:

```bash
git stash apply 'stash@{1}'
```

También podemos descartar los cambios guardados:

```bash
# Eliminar un stash concreto
git stash drop 'stash@{1}'

# Eliminar todos los stash
git stash clear
```

::: warning Importante
- `git stash pop` recupera los cambios y elimina el stash si se aplica correctamente.
- `git stash apply` recupera los cambios, pero conserva el stash.
- `git stash` guarda cambios sin confirmar; no guarda temporalmente commits ya realizados.
- Al recuperar cambios pueden producirse conflictos si hemos modificado los mismos archivos.
  :::

## <i class="fa-solid fa-table-list"></i> Resumen de comandos Git

| Comando | Función |
|---|---|
| **Repositorio** | |
| `git init` | Crear un repositorio local |
| `git clone URL` | Clonar un repositorio remoto |
| `git status` | Consultar el estado del repositorio |
| `git remote -v` | Ver los repositorios remotos |
| `git remote get-url origin` | Consultar la URL del repositorio principal |
| **Guardar y sincronizar cambios** | |
| `git add .` | Preparar los cambios |
| `git commit -m "mensaje"` | Registrar los cambios |
| `git push` | Subir los commits al repositorio remoto |
| `git pull` | Descargar e integrar cambios remotos |
| `git diff` | Consultar los cambios sin preparar |
| `git log --oneline` | Ver el historial de commits |
| **Ramas** | |
| `git branch` | Mostrar las ramas locales |
| `git switch -c nombre` | Crear una rama y cambiar a ella |
| `git switch nombre` | Cambiar de rama |
| `git merge nombre` | Incorporar otra rama a la actual |
| `git push -u origin nombre` | Publicar una rama en GitHub |
| **Cambios temporales (`stash`)** | |
| `git stash` | Guardar temporalmente los cambios |
| `git stash push -u -m "mensaje"` | Guardar cambios con descripción, incluidos archivos nuevos |
| `git stash list` | Mostrar los cambios temporales guardados |
| `git stash pop` | Recuperar los últimos cambios y retirar el stash si se aplican |
| `git stash apply` | Recuperar los cambios conservando el stash |
| `git stash apply 'stash@{n}'` | Recuperar un stash concreto |
| `git stash drop 'stash@{n}'` | Eliminar un stash concreto |
| `git stash clear` | Eliminar todos los stash |