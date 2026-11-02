<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps({
  // Propiedades originales (se mantienen)
  header: String,
  href: String,
  src: String,
  alt: String,
  color: {
    type: String,
    default: '#4f46e5',
  },

  // Propiedades nuevas (opcionales)
  title: String,
  icon: String,
  link: String,
})

const titulo = computed(() => props.title ?? props.header ?? '')
const destino = computed(() => props.link ? withBase(props.link) : props.href)
const enlaceExterno = computed(() => Boolean(props.href && !props.link))
</script>

<template>
  <component
      :is="destino ? 'a' : 'div'"
      class="daws-card"
      :href="destino"
      :target="enlaceExterno ? '_blank' : undefined"
      :rel="enlaceExterno ? 'noreferrer' : undefined"
      :style="{ '--c': color }"
  >
    <span class="daws-card__title">
      <i v-if="icon" :class="icon" aria-hidden="true"></i>
      <span>{{ titulo }}</span>
    </span>
    <div class="daws-card__body">
      <slot />
      <img v-if="src" :src="src" :alt="alt || titulo" />
    </div>
  </component>
</template>

<style scoped>
.daws-card {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  padding: 1rem 1.05rem 1.1rem;
  border-radius: 18px;
  text-decoration: none !important;
  color: inherit;
  background: #fff;
  border: 3px solid var(--c);
  box-shadow: 8px 8px 0 var(--c);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

a.daws-card:hover {
  transform: translate(-3px, -3px);
  box-shadow: 11px 11px 0 var(--c);
}

.daws-card__title {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--c);
}

.daws-card__title i {
  flex-shrink: 0;
  font-size: 1.1em;
}

.daws-card__body {
  font-size: 0.92rem;
  line-height: 1.4;
  color: #334155;
}

.daws-card__body :deep(p) {
  margin: 0.2rem 0 0.55rem;
}

.daws-card__body img,
.daws-card__body :deep(img) {
  display: block;
  width: min(100%, 140px);
  height: auto;
  margin: 0.35rem auto 0;
  border-radius: 12px;
}
</style>