<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: 'marca',
  },
})
</script>

<template>
  <strong :class="['daws-color', color]">
    <slot />
  </strong>
</template>

<style scoped>
.daws-color {
  font-weight: 800;
}

.marca {
  color: var(--daws-violet);
}

.verde {
  color: var(--daws-green);
}

.azul {
  color: var(--daws-primary);
}

.rojo {
  color: var(--daws-red);
}

.naranja {
  color: var(--daws-amber);
}
</style>
