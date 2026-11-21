<script setup>
import {computed, ref} from 'vue'
import {withBase} from 'vitepress'
import PhpRunner from './../PhpRunner.vue'

import {obtenerEjercicio} from './catalogo.js'

// Propiedades recibidas desde el Markdown
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  open: {
    type: Boolean,
    default: false
  }
})

const isOpen = ref(props.open);

//Calcular la url de la posible solución
const urlSolucion = computed(() => {
  if (!ejercicio.value?.solucion) return null

  const carpeta = ejercicio.value.url.substring(
      0,
      ejercicio.value.url.lastIndexOf('/') + 1
  )

  return withBase('/' + carpeta + ejercicio.value.solucion)
})

//Saber si podemos ver el código
const mostrarFuente = ref(false);

//Que exista solución y esté en frontmatter activada la opción
const puedeVerCodigo = computed(() => {
  return Boolean(
      ejercicio.value?.solucion &&
      ejercicio.value?.mostrarCodigo
  )
})

// Buscamos el ejercicio en el catálogo
const ejercicio = computed(() => obtenerEjercicio(props.id))

// Comprobación temporal
console.log('ID solicitado:', props.id)
console.log('Ejercicio encontrado:', ejercicio.value)
</script>

<template>
  <div v-if="ejercicio" class="ejercicio">

    <div class="ejercicio-cabecera">
      <button class="ejercicio-title"
              :aria-expanded="isOpen"
              @click="isOpen = !isOpen">
        <i
            :class="isOpen
        ? 'fa-solid fa-chevron-down'
        : 'fa-solid fa-chevron-right'"
        ></i>

        <span class="ejercicio-numero">
        Ejercicio {{ ejercicio.orden }}:
    </span>

        <span class="ejercicio-nombre">
        {{ ejercicio.titulo }}
    </span>
      </button>
      <div class="ejercicio-acciones">

        <a :href="withBase('/' + ejercicio.url.replace(/\.md$/, '.html'))">
          Ver ejercicio
        </a>

        <a
            v-if="urlSolucion"
            :href="urlSolucion"
            target="_blank"
            class="btn-ejecutar"
        >
          <i class="fa-solid fa-play"></i>
          Ejecutar solución
        </a>
        <button
            v-if="puedeVerCodigo"
            type="button"
            class="btn-codigo"
            :aria-expanded="mostrarFuente"
            @click="mostrarFuente = !mostrarFuente"
        >
          <i class="fa-solid fa-code" aria-hidden="true"></i>
          {{ mostrarFuente ? 'Ocultar código' : 'Ver código fuente' }}
        </button>
      </div>
    </div>
    <div v-show="isOpen">

    <div class="ejercicio-contenido vp-doc">

      <component :is="ejercicio.componente"/>
    </div>


    <div v-if="puedeVerCodigo && mostrarFuente" class="ejercicio-fuente">
      <div class="ejercicio-fuente__titulo">
        <i class="fa-solid fa-file-code"></i>
        Código fuente de la solución
      </div>

      <p>
        La visualización del código estará disponible cuando
        conectemos el servidor de soluciones PHP.
      </p>
    </div>

    <PhpRunner filename="ejercicio.php" description="Código del ejercicio"/>

    </div>
  </div>

  <div v-else class="ejercicio-error">
    No existe el ejercicio: {{ id }}
  </div>
</template>


<style scoped>
/* Contenedor completo del ejercicio */
.ejercicio {
  margin: 1.5rem 0;
  border: 1px solid #93C5FD;
  border-radius: 8px;
  overflow: hidden;
  background-color: #EFF6FF;
}

/* Cabecera: azul más intenso */
.ejercicio-cabecera {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 12px 16px;
  background-color: #DBEAFE;
  border-bottom: 1px solid #93C5FD;
}

/* Título del ejercicio */
.ejercicio-title {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.4rem 0.75rem;
  border-left: 4px solid #2563EB;
  border-radius: 4px;
  font-size: 1.35rem;
  line-height: 1.5;
  color: #1E3A8A;
}

/* Icono */
.ejercicio-title i {
  color: #2563EB;
  font-size: 1.2rem;
}

/* Número del ejercicio */
.ejercicio-numero {
  font-weight: 800;
  white-space: nowrap;
  color: #1D4ED8;
}

/* Nombre del ejercicio */
.ejercicio-nombre {
  font-weight: 650;
  color: #1E3A8A;
}

/* Contenido del ejercicio */
.ejercicio-contenido {
  padding: 16px;
  background-color: #EFF6FF;
  color: #1E293B;
}

/* Enlace */
.ejercicio-cabecera a {
  color: #1D4ED8;
  font-weight: 600;
  white-space: nowrap;
}

/* Error */
.ejercicio-error {
  color: var(--vp-c-danger-1);
}

/* Modo oscuro */
:global(.dark) .ejercicio {
  border-color: #334155;
  background-color: #172554;
}

:global(.dark) .ejercicio-cabecera {
  background-color: #1E3A8A;
  border-bottom-color: #334155;
}

:global(.dark) .ejercicio-contenido {
  background-color: #172554;
  color: #E2E8F0;
}

:global(.dark) .ejercicio-title,
:global(.dark) .ejercicio-nombre {
  color: #EFF6FF;
}

:global(.dark) .ejercicio-numero,
:global(.dark) .ejercicio-title i,
:global(.dark) .ejercicio-cabecera a {
  color: #93C5FD;
}

.ejercicio-acciones {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.ejercicio-acciones .btn-ejecutar {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #16734a;
  color: white;
  padding: 8px 14px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
}

.ejercicio-acciones .btn-ejecutar:hover {
  background: #115e3c;
  color: white;
}

.ejercicio-acciones .btn-codigo {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 8px 14px;
  border: 1px solid #2563eb;
  border-radius: 6px;
  background: #eff6ff;
  color: #1d4ed8;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
}

.ejercicio-acciones .btn-codigo:hover {
  background: #dbeafe;
}

.ejercicio-fuente {
  padding: 16px;
  border-top: 1px solid #93c5fd;
  background: #f8fafc;
  color: #1e293b;
}

.ejercicio-fuente__titulo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 12px;
  font-weight: 700;
}

:global(.dark) .ejercicio-fuente {
  background: #0f172a;
  color: #e2e8f0;
}
</style>
