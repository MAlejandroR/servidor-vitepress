
<script setup>
import { onMounted, onBeforeUnmount, nextTick, watch } from 'vue'
import { useRoute, onContentUpdated } from 'vitepress'

const route = useRoute()

let container = null
let currentPath = null
let lastHash = null
let scrollFrame = null

// Secciones que están plegadas.
const collapsed = new Set()

// Vista actual: 'resumida', 'expandida', 'esquema' o 'personalizada'.
let viewMode = 'resumida'

/**
 * Obtiene los títulos H1, H2 y H3 del documento.
 */
function getHeadings() {
  if (!container) return []

  return [...container.querySelectorAll(
      ':scope > h1, :scope > h2, :scope > h3'
  )].filter(heading => heading.id)
}

/**
 * Actualiza la visibilidad de títulos y contenidos.
 */
function updateVisibility() {
  if (!container) return

  const headings = getHeadings()
  const active = []

  for (const element of container.children) {
    const level = /^H[1-3]$/.test(element.tagName)
        ? Number(element.tagName[1])
        : 0

    if (level) {
      while (
          active.length &&
          active.at(-1).level >= level
          ) {
        active.pop()
      }

      // En modo esquema, todos los títulos son visibles.
      // En los demás modos se respeta la jerarquía.
      element.hidden = viewMode === 'esquema'
          ? false
          : active.some(section => section.closed)

      active.push({
        level,
        closed: collapsed.has(element.id)
      })

    } else {
      if (viewMode === 'esquema') {
        // Cada título controla su propio contenido,
        // aunque sus superiores estén plegados.
        element.hidden = active.length > 0 && active.at(-1).closed
      } else {
        // Respetar la jerarquía completa.
        element.hidden = active.some(section => section.closed)
      }
    }
  }

  // Actualizar las flechas individuales.
  for (const heading of headings) {
    const button = heading.querySelector('.heading-toggle')
    if (!button) continue

    const closed = collapsed.has(heading.id)

    button.textContent = closed ? '▸' : '▾'
    button.setAttribute('aria-expanded', String(!closed))
    button.setAttribute(
        'aria-label',
        closed ? 'Desplegar sección' : 'Plegar sección'
    )
  }

  updateControls()
}

/**
 * Abre o cierra un apartado individual.
 */
function toggleSection(heading) {
  if (collapsed.has(heading.id)) {
    collapsed.delete(heading.id)
  } else {
    collapsed.add(heading.id)
  }

  // Conservamos el modo esquema para que los títulos
  // permanezcan visibles al abrir apartados individuales.
  if (viewMode !== 'esquema') {
    viewMode = 'personalizada'
  }

  updateVisibility()
}

/**
 * Vista resumida:
 * H1 desplegados; H2 y H3 plegados.
 */
function showSummary() {
  viewMode = 'resumida'
  collapsed.clear()

  for (const heading of getHeadings()) {
    if (heading.tagName !== 'H1') {
      collapsed.add(heading.id)
    }
  }

  updateVisibility()
}

/**
 * Vista expandida:
 * Todos los apartados abiertos.
 */
function showExpanded() {
  viewMode = 'expandida'
  collapsed.clear()
  updateVisibility()
}

/**
 * Vista esquema:
 * Todos los títulos visibles, contenidos plegados.
 */
function collapseAll() {
  viewMode = 'esquema'
  collapsed.clear()

  for (const heading of getHeadings()) {
    collapsed.add(heading.id)
  }

  updateVisibility()
}

/**
 * Alterna entre expandir todo y contraer todo.
 */
function expandAll() {
  const headings = getHeadings()

  const isExpanded = headings.length > 0 &&
      headings.every(heading => !collapsed.has(heading.id))

  if (isExpanded) {
    collapseAll()
  } else {
    showExpanded()
  }
}

/**
 * Actualiza los botones globales.
 */
function updateControls() {
  if (!container) return

  const headings = getHeadings()

  const isExpanded = headings.length > 0 &&
      headings.every(heading => !collapsed.has(heading.id))

  const isSummary = viewMode !== 'esquema' &&
      headings.length > 0 &&
      headings.every(heading =>
          heading.tagName === 'H1'
              ? !collapsed.has(heading.id)
              : collapsed.has(heading.id)
      )

  const summaryButton =
      container.querySelector('.heading-summary')

  const expandButton =
      container.querySelector('.heading-expand')

  if (summaryButton) {
    summaryButton.classList.toggle('is-active', isSummary)
    summaryButton.setAttribute(
        'aria-pressed',
        String(isSummary)
    )
  }

  if (expandButton) {
    expandButton.textContent = isExpanded
        ? 'Contraer todo'
        : 'Expandir todo'

    expandButton.classList.toggle('is-active', isExpanded)
    expandButton.setAttribute(
        'aria-pressed',
        String(isExpanded)
    )
  }
}

/**
 * Crea los controles antes del primer H1.
 */
function initializeGlobalButton() {
  if (!container) return
  if (container.querySelector('.heading-controls')) return

  const firstH1 = container.querySelector(':scope > h1')
  if (!firstH1) return

  const controls = document.createElement('div')
  controls.className = 'heading-controls'

  const info = document.createElement('span')
  info.className = 'heading-controls-info'
  info.textContent =
      'Pulsa en los títulos para desplegar los apartados.'

  const actions = document.createElement('div')
  actions.className = 'heading-controls-actions'

  const summaryButton = document.createElement('button')
  summaryButton.type = 'button'
  summaryButton.className =
      'heading-toggle-all heading-summary'
  summaryButton.textContent = 'Vista resumida'
  // summaryButton.title = 'Muestra el contenido de títulos principales(1,2,...).\nMantiene plegados títulos secundarios (1.1 ...).';
  summaryButton.dataset.tooltip = 'Muestra el contenido de títulos principales(1,2,...).\n Mantiene plegados títulos secundarios (1.1 ...).';
  summaryButton.addEventListener('click', showSummary)

  const expandButton = document.createElement('button')
  expandButton.type = 'button'
  expandButton.className =
      'heading-toggle-all heading-expand'
  expandButton.textContent = 'Expandir todo'
  expandButton.dataset.tooltip =  'Expande - Contrae todo el contenido\n' +
      ' agrupado por títulos';

  expandButton.addEventListener('click', expandAll)

  actions.append(summaryButton, expandButton)
  controls.append(info, actions)

  firstH1.before(controls)
}

/**
 * Despliega un apartado indicado mediante #hash
 * y todos sus títulos superiores.
 *
 * También permite navegar a un elemento situado
 * dentro de un apartado.
 */
function expandFromHash() {
  if (!container || !window.location.hash) return false

  let id

  try {
    id = decodeURIComponent(window.location.hash.slice(1))
  } catch {
    return false
  }

  const target = document.getElementById(id)

  if (!target || !container.contains(target)) {
    return false
  }

  const headings = getHeadings()
  const ancestors = []

  // Localizar el título de destino, si existe.
  const targetIndex = headings.indexOf(target)

  if (targetIndex >= 0) {
    const targetLevel = Number(target.tagName[1])

    // Abrir el título de destino.
    ancestors.push(target)

    // Buscar sus H1/H2 superiores.
    let requiredLevel = targetLevel

    for (let i = targetIndex - 1; i >= 0; i--) {
      const heading = headings[i]
      const level = Number(heading.tagName[1])

      if (level < requiredLevel) {
        ancestors.push(heading)
        requiredLevel = level
      }

      if (requiredLevel === 1) break
    }

  } else {
    // Si el destino no es un título, localizar
    // la sección que contiene ese elemento.
    const preceding = headings.filter(heading =>
        Boolean(
            heading.compareDocumentPosition(target) &
            Node.DOCUMENT_POSITION_FOLLOWING
        )
    )

    let requiredLevel = 4

    for (let i = preceding.length - 1; i >= 0; i--) {
      const heading = preceding[i]
      const level = Number(heading.tagName[1])

      if (level < requiredLevel) {
        ancestors.push(heading)
        requiredLevel = level
      }

      if (requiredLevel === 1) break
    }
  }

  // Abrir únicamente los apartados necesarios.
  for (const heading of ancestors) {
    collapsed.delete(heading.id)
  }

  updateVisibility()

  // Desplazamiento después de actualizar el DOM.
  if (scrollFrame !== null) {
    cancelAnimationFrame(scrollFrame)
  }

  scrollFrame = requestAnimationFrame(() => {
    scrollFrame = null

    if (!target.isConnected) return

    target.scrollIntoView({
      behavior: 'instant',
      block: 'start'
    })
  })

  return true
}

/**
 * Procesa el hash solamente cuando cambia.
 * Si todavía no existe el destino, permite
 * reintentarlo tras actualizar el contenido.
 */
function processHash() {
  const hash = window.location.hash
  if (!hash || hash === lastHash) return

  if (expandFromHash()) {
    lastHash = hash
  }
}

/**
 * Inicializa el documento.
 */
function initialize() {
  const nextContainer = document.querySelector('.vp-doc > div')
  if (!nextContainer) return

  container = nextContainer

  const headings = getHeadings()

  // Nueva página: recuperar la vista resumida.
  if (currentPath !== route.path) {
    currentPath = route.path
    lastHash = null
    viewMode = 'resumida'

    collapsed.clear()

    for (const heading of headings) {
      if (heading.tagName !== 'H1') {
        collapsed.add(heading.id)
      }
    }
  }

  // Crear flechas en los títulos.
  for (const heading of headings) {
    if (heading.querySelector('.heading-toggle')) continue

    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'heading-toggle'
    button.textContent = '▾'
    button.setAttribute('aria-label', 'Plegar sección')

    heading.addEventListener('click', event => {
      if (event.target.closest('a')) return
      toggleSection(heading)
    })

    heading.appendChild(button)
  }

  initializeGlobalButton()
  updateVisibility()
  processHash()
}

/**
 * Detecta actualizaciones del contenido VitePress.
 */
onContentUpdated(() => {
  initialize()
})

/**
 * Detecta cambios del fragmento de la URL.
 */
function handleHashChange() {
  processHash()
}

/**
 * Registrar el listener al montar el componente.
 */
onMounted(() => {
  window.addEventListener('hashchange', handleHashChange)
  initialize()
})

/**
 * Navegación entre páginas de VitePress.
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
 */
onBeforeUnmount(() => {
  window.removeEventListener('hashchange', handleHashChange)

  if (scrollFrame !== null) {
    cancelAnimationFrame(scrollFrame)
    scrollFrame = null
  }

  if (container) {
    for (const element of container.children) {
      element.hidden = false
    }

    container.querySelectorAll('.heading-toggle')
        .forEach(button => button.remove())

    container.querySelector('.heading-controls')?.remove()
  }

  collapsed.clear()
  container = null
  currentPath = null
  lastHash = null
  viewMode = 'resumida'
})
</script>

<template>
  <span style="display: none"></span>
</template>
