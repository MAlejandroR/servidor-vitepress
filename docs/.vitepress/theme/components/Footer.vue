
<script setup>
import VisitorCount from './VisitorCount.vue'
</script>

<template>
  <footer class="daws-footer">
    <span>© 2026 · DAWS · Desarrollo Web en Entorno Servidor</span>

    <div class="daws-footer-links">
      <a
          href="https://github.com/MAlejandroR/servidor-vitepress.git"
          target="_blank"
          rel="noopener noreferrer"
          title="Código fuente en GitHub"
      >
        <i class="fa-brands fa-github"></i>
        GitHub
      </a>

      <VisitorCount />
    </div>
  </footer>
</template>

<style scoped>
.daws-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 12px 24px;
  border-top: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  font-size: 12px;
}

.daws-footer-links {
  display: flex;
  align-items: center;
  gap: 24px;
}

.daws-footer a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.daws-footer a:hover {
  text-decoration: underline;
}
</style>
