
<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'
import PhpRunner from './../PhpRunner.vue'

import { obtenerEjercicio } from './catalogo.js'

// Propiedades recibidas desde el Markdown
const props = defineProps({
  id: {
    type: String,
    required: true
  }
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
      <div class="ejercicio-title">
        <i :class="ejercicio.icon" aria-hidden="true"></i>

        <span class="ejercicio-numero">
        Ejercicio {{ ejercicio.orden }}:
    </span>

        <span class="ejercicio-nombre">
        {{ ejercicio.titulo }}
    </span>
      </div>
      <a :href="withBase('/' + ejercicio.url.replace(/\.md$/, '.html'))">
        Ver ejercicio
      </a>
    </div>
    <div class="ejercicio-contenido vp-doc">

      <component :is="ejercicio.componente" />
    </div>

<PhpRunner filename="ejercicio.php" description="Código del ejercicio"  />



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
</style>
