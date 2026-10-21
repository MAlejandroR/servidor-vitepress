<script setup>
import { onMounted, onBeforeUnmount, nextTick, watch } from 'vue'
import { useRoute } from 'vitepress'
import { onContentUpdated } from 'vitepress'

// Ruta actual de VitePress.
// Permite reinicializar el componente al navegar entre páginas.
const route = useRoute()

// Contenedor principal del documento Markdown.
let container = null

// Conjunto de identificadores (id) de los títulos plegados.
const collapsed = new Set()

/**
 * Actualiza la visibilidad de las secciones.
 *
 * Recorre los elementos del documento y determina cuáles deben
 * ocultarse según los títulos que estén plegados.
 *
 * La jerarquía se respeta:
 * - h1 contiene sus h2 y h3.
 * - h2 contiene sus h3.
 * - h3 contiene su contenido hasta el siguiente título.
 */
function updateVisibility() {
  if (!container) return

  // Pila que representa las secciones activas.
  const active = []

  for (const element of container.children) {

    // Identificamos los títulos h1, h2 y h3.
    // Los demás elementos tienen nivel 0.
    const level = /^H[1-3]$/.test(element.tagName)
        ? Number(element.tagName[1])
        : 0

    if (level) {

      // Cuando encontramos un título de igual o mayor jerarquía,
      // terminamos las secciones anteriores correspondientes.
      //
      // Ejemplo: al encontrar un h2, termina el h2 anterior
      // y cualquier h3 que estuviera dentro de él.
      while (active.length && active.at(-1).level >= level) {
        active.pop()
      }

      // El título se oculta si pertenece a una sección
      // superior que está plegada.
      element.hidden = active.some(section => section.closed)

      // Registramos la nueva sección en la pila.
      active.push({
        level,
        closed: collapsed.has(element.id)
      })

      continue
    }

    // Los elementos que no son títulos (párrafos, tablas,
    // bloques de código, listas...) se ocultan si alguna
    // de sus secciones contenedoras está plegada.
    element.hidden = active.some(section => section.closed)
  }

  // Actualizamos el aspecto y los atributos de accesibilidad
  // de los botones de plegado.
  container.querySelectorAll('.heading-toggle').forEach(button => {

    const heading = button.closest('h1, h2, h3')
    const closed = collapsed.has(heading.id)

    // Flecha derecha: plegado.
    // Flecha abajo: desplegado.
    button.textContent = closed ? '▸' : '▾'

    // Indica a los lectores de pantalla si está desplegado.
    button.setAttribute('aria-expanded', String(!closed))

    // Descripción accesible de la acción.
    button.setAttribute(
        'aria-label',
        closed ? 'Desplegar sección' : 'Plegar sección'
    )
  })
}

/**
 * Inicializa los botones de plegado.
 *
 * Localiza los títulos del documento y añade una flecha
 * a cada uno, sin modificar el texto del título ni sus enlaces.
 */
function initialize() {
  container = document.querySelector('.vp-doc > div');
  console.log('Contenedor:', container)

  if (!container) return

  console.log(
      'Títulos directos:',
      container.querySelectorAll(':scope > h1, :scope > h2, :scope > h3').length
  )

  console.log(
      'Todos los títulos:',
      container.querySelectorAll('h1, h2, h3').length
  )

  // Al entrar en una página, todas las secciones
  // comienzan desplegadas.
  collapsed.clear()

  // Seleccionamos únicamente los títulos principales
  // del documento, no los incluidos dentro de otros componentes.
  const headings = container.querySelectorAll(
      ':scope > h1, :scope > h2, :scope > h3'
  );


  for (const heading of headings) {

    // Evitamos añadir botones duplicados.
    // También descartamos títulos sin identificador.
    if (!heading.id || heading.querySelector('.heading-toggle')) {
      continue
    }

    // Creamos el botón que actuará como flecha.
    const button = document.createElement('button')

    button.type = 'button'
    button.className = 'heading-toggle'
    button.textContent = '▾'

    // Atributos de accesibilidad.
    button.setAttribute('aria-label', 'Plegar sección')
    button.setAttribute('aria-expanded', 'true')

    // Al pulsar la flecha, alternamos el estado de la sección.
    button.addEventListener('click', () => {

      if (collapsed.has(heading.id)) {
        // La sección estaba plegada: la desplegamos.
        collapsed.delete(heading.id)
      } else {
        // La sección estaba desplegada: la plegamos.
        collapsed.add(heading.id)
      }

      // Aplicamos los cambios de visibilidad.
      updateVisibility()
    })

    // Insertamos la flecha después  del título.
    heading.appendChild(button);
  }

  // Mostramos inicialmente todas las secciones.
  updateVisibility()
}

/**
 * Se ejecuta cuando Vue monta el componente.
 *
 * Esperamos a que VitePress haya generado el contenido
 * Markdown antes de buscar los títulos.
 */
// onMounted(async () => {
//   await nextTick()
//   initialize()
// })
onContentUpdated(() => {
  initialize()
})

/**
 * Detecta los cambios de página en VitePress.
 *
 * Cuando cambia la ruta:
 * 1. Esperamos a que Vue actualice el documento.
 * 2. Buscamos los nuevos títulos.
 * 3. Inicializamos sus botones.
 */
watch(
    () => route.path,
    async () => {
      await nextTick()
      initialize()
    },
    { flush: 'post' }
)

/**
 * Limpieza al desmontar el componente.
 *
 * Restauramos la visibilidad del documento y eliminamos
 * los botones añadidos para no dejar modificaciones
 * pendientes en el DOM.
 */
onBeforeUnmount(() => {
  if (container) {
    for (const element of container.children) {
      element.hidden = false
    }

    container.querySelectorAll('.heading-toggle').forEach(button => {
      button.remove()
    })
  }

  collapsed.clear()
  container = null
})
</script>

<template>
  <!--
    Componente sin representación visual propia.

    Su función consiste en modificar los títulos y controlar
    el plegado del contenido Markdown generado por VitePress.
  -->
  <span style="display: none"></span>
</template>