<script setup>
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div class="ejercicio-title">
    <span>{{ frontmatter.titulo }}</span>
  </div>
</template>

<style scoped>
.ejercicio-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1rem;
  background: var(--vp-c-bg-soft);
  border-left: 4px solid #3b82f6;
  border-radius: 5px;
  color: var(--vp-c-text-1);
  font-size: 2rem;
}
</style>