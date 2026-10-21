
<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  title?: string
  password?: string
}>()

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
  <details @toggle="handleToggle">
    <summary>
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

  background-color: #e8f1fc;
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
</style>
