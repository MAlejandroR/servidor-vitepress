
<script setup lang="ts">
import { ref, useAttrs } from 'vue'

const props = defineProps<{
  title?: string
  password?: string
}>()
const attrs = useAttrs();

const dialog = ref<HTMLDialogElement | null>(null)
const unlocked = ref<boolean>(false)
const enteredPassword = ref<string>('')
const error = ref<boolean>(false)

// Controlar apertura del desplegable
function handleToggle(event: Event) {
  const details = event.target as HTMLDetailsElement

  // Sin contraseña o ya desbloqueado
  if (!props.password || unlocked.value) {
    return
  }

  if (details.open) {
    details.open = false
    dialog.value?.showModal()
  }
}

// Comprobar contraseña
function unlock() {
  if (enteredPassword.value === props.password) {
    unlocked.value = true
    error.value = false
    enteredPassword.value = ''
    dialog.value?.close()
  } else {
    error.value = true
  }
}

// Cerrar diálogo
function closeDialog() {
  enteredPassword.value = ''
  error.value = false
  dialog.value?.close()
}
</script>

<template>
  <details :class="attrs.class" @toggle="handleToggle">    <summary>
      <span class="title">
        {{ title || 'Ver contenido' }}
      </span>
    </summary>

    <div class="content">
      <slot />
    </div>
  </details>

  <dialog ref="dialog">
    <form @submit.prevent="unlock">
      <h3>Contenido protegido</h3>

      <p>Introduce la contraseña para ver el contenido.</p>

      <input
          v-model="enteredPassword"
          type="password"
          placeholder="Contraseña"
          autofocus
      />

      <p v-if="error" class="error">
        Contraseña incorrecta
      </p>

      <div class="buttons">
        <button type="button" @click="closeDialog">
          Cancelar
        </button>

        <button type="submit">
          Ver contenido
        </button>
      </div>
    </form>
  </dialog>
</template>

<style scoped>
/* Título del desplegable */
.title {
  display: inline-flex;
  align-items: center;
  gap: 12px;

  background-color: #d4e6fa;
  border-radius: 8px;
  padding: 6px 12px;
  margin: 0;

  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.4;
}

/* Flecha integrada en el título */
/*
.title::after {
  content: "▶";
  font-size: 1.2em;
  color: #6485aa !important;
  background: transparent !important;
  transition: transform 0.2s;
}
*/


/* Girar flecha al desplegar */
/*
details[open] .title::after {
  transform: rotate(90deg);
}
*/
.title::after {
  content: "";
  display: inline-block;
  width: 15px;
  height: 15px;
  border-right: 5px solid #6485aa;
  border-bottom: 5px solid #6485aa;
  transform: rotate(-45deg);
  transition: transform 0.2s;
}

details[open] .title::after {
  transform: rotate(45deg);
}


/* Cabecera del desplegable */
summary {
  display: flex;
  align-items: center;
  list-style: none;
  cursor: pointer;
}

summary::-webkit-details-marker {
  display: none;
}

/* Contenido */
.content {
  margin-top: 1rem;
}

/* Diálogo de contraseña */
dialog {
  border: none;
  border-radius: 8px;
  padding: 1.5rem;
  min-width: 320px;
}

dialog::backdrop {
  background: rgb(0 0 0 / 50%);
}

input {
  width: 100%;
  box-sizing: border-box;
  padding: 0.6rem;
  margin: 0.5rem 0;
}

.buttons {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;
}

.error {
  font-size: 0.9rem;
  color: #c00;
}
/* ============================================================
   DROPDOWN - PARA PROFUNDIZAR
   ============================================================ */

details.ampliacion {
  margin: 1.5rem 0;
  padding: 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
}

/* Encabezado informativo */
details.ampliacion::before {
  content: "📖  Para profundizar";
  display: block;
  margin-bottom: 16px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

/* Cabecera desplegable */
details.ampliacion summary {
  width: 100%;
}

/* Título */
details.ampliacion .title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  background: transparent;
  border-radius: 0;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--vp-c-text-3);
}

/* Flecha */
details.ampliacion .title::after {
  content: "";
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  margin: 0 8px 0 16px;
  border-right: 2px solid var(--vp-c-text-2);
  border-bottom: 2px solid var(--vp-c-text-2);
  transform: rotate(-45deg);
  transition: transform 0.2s;
}

details.ampliacion[open] .title::after {
  transform: rotate(45deg);
}
</style>
