
<script setup>
import { withBase } from 'vitepress'

// const contenidos = [
//   {
//     numero: '1',
//     icono: 'fa-solid fa-graduation-cap',
//     titulo: 'Presentación y motivación',
//     descripcion: 'Objetivos, metodología y organización del curso.',
//     enlace: '/000_Presentacion/'
//   },
//   {
//     numero: '2',
//     icono: 'fa-solid fa-globe',
//     titulo: 'La web y las redes',
//     descripcion: 'Internet, redes y funcionamiento de la web.',
//     enlace: '/02_entornos_herramientas/'
//   },
//   {
//     numero: '3',
//     icono: 'fa-brands fa-docker',
//     titulo: 'Docker',
//     descripcion: 'Imágenes y contenedores. Dockerfile y Docker Compose.',
//     enlace: '/02_docker/'
//   },
//   {
//     numero: '4',
//     icono: 'fa-solid fa-laptop-code',
//     titulo: 'Introducción a la programación web',
//     descripcion: 'Algoritmos, datos y fundamentos de programación.',
//     enlace: '/01_Conceptos_generales/'
//   },
//   {
//     numero: '5',
//     icono: 'fa-brands fa-php',
//     titulo: 'PHP',
//     descripcion: 'Programación web del lado del servidor.',
//     enlace: '/04_php/'
//   },
//   {
//     numero: '6',
//     icono: 'fa-brands fa-laravel',
//     titulo: 'Laravel',
//     descripcion: 'Desarrollo de aplicaciones web completas.',
//     enlace: '/construccion'
//   }
// ]

const contenidos = [
  {
    numero: 1,
    titulo: 'Presentación del módulo',
    descripcion: 'Objetivos, metodología, evaluación y organización del curso.',
    icono: 'fa-solid fa-graduation-cap',
    enlace: '/presentacion/'
  },
  {
    numero: 2,
    titulo: 'Fundamentos de la web y las redes',
    descripcion: 'Internet, redes, modelo OSI, TCP/IP, DNS, HTTP y WWW.',
    icono: 'fa-solid fa-globe',
    enlace: '/fundamentos-web/'
  },
  {
    numero: 3,
    titulo: 'Conceptos y arquitectura web',
    descripcion: 'Cliente-servidor, frontend, backend y arquitectura de aplicaciones web.',
    icono: 'fa-solid fa-sitemap',
    enlace: '/arquitectura-web/'
  },
  {
    numero: 4,
    titulo: 'Herramientas y entorno de desarrollo',
    descripcion: 'Linux, terminal, Git, inteligencia artificial y herramientas de desarrollo.',
    icono: 'fa-solid fa-screwdriver-wrench',
    enlace: '/entornos-herramientas/'
  },
  {
    numero: 5,
    titulo: 'Instalación y configuración',
    descripcion: 'PHP, Apache, servidores virtuales y configuración del entorno.',
    icono: 'fa-solid fa-gears',
    enlace: '/instalaciones/'
  },
  {
    numero: 6,
    titulo: 'Docker y contenedores',
    descripcion: 'Imágenes, contenedores, Dockerfile y Docker Compose.',
    icono: 'fa-brands fa-docker',
    enlace: '/docker/'
  },
  {
    numero: 7,
    titulo: 'Introducción a la programación web',
    descripcion: 'Algoritmos, variables, estructuras de control y funciones.',
    icono: 'fa-solid fa-code',
    enlace: '/programacion/'
  },
  {
    numero: 8,
    titulo: 'Programación web con PHP',
    descripcion: 'PHP, formularios, sesiones, orientación a objetos y bases de datos.',
    icono: 'fa-brands fa-php',
    enlace: '/php/'
  },
  {
    numero: 9,
    titulo: 'Desarrollo de aplicaciones con Laravel',
    descripcion: 'MVC, rutas, controladores, Eloquent y aplicaciones web completas.',
    icono: 'fa-brands fa-laravel',
    enlace: '/laravel/'
  }
]

</script>

<template>
  <section class="indice-contenedor">
    <div class="indice-encabezado">
      <i class="fa-solid fa-book-open"></i>
      Explora los contenidos del módulo
    </div>
  <nav class="indice-curso" aria-label="Contenidos del curso">
    <a
        v-for="item in contenidos"
        :key="item.numero"
        :href="withBase(item.enlace)"
        class="curso-tarjeta"
    >
      <div class="curso-cabecera">
        <i :class="item.icono" aria-hidden="true"></i>
        <span class="curso-numero">{{ item.numero }}</span>
      </div>

      <div class="curso-titulo">
        {{ item.titulo }}
      </div>

      <p>{{ item.descripcion }}</p>

      <span class="curso-enlace">
        Explorar contenido <span aria-hidden="true">→</span>
      </span>
    </a>
  </nav>
  </section>
</template>

<style scoped>
.indice-curso {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;

  width: 100%;


}
.curso-tarjeta {
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 190px;
  padding: 22px;

  border: 1px solid var(--daws-border, #e2e8f0);
  border-radius: 14px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  text-decoration: none;

  box-shadow: 0 3px 12px rgb(36 84 125 / 5%);

  transition:
      transform 0.2s,
      box-shadow 0.2s,
      border-color 0.2s;
}

.curso-tarjeta:hover {
  transform: translateY(-4px);
  border-color: var(--daws-primary, #24547d);
  box-shadow: 0 10px 24px rgb(36 84 125 / 12%);
}

.curso-tarjeta:focus-visible {
  outline: 3px solid var(--daws-primary, #24547d);
  outline-offset: 3px;
}

.curso-cabecera {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.curso-cabecera i {
  font-size: 24px;
  color: var(--daws-primary, #24547d);
}

.curso-numero {
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-text-3);
}
.curso-titulo {
  margin: 16px 0 12px;
  font-size: 21px;
  font-weight: 700;
  line-height: 1.35;
  color: var(--daws-green, #176b50);
}

.curso-tarjeta p {
  flex: 1;
  margin: 0 0 18px;
  font-size: 17px;
  line-height: 1.55;
  color: var(--vp-c-text-2);
}

.curso-enlace {
  font-size: 16px;
  font-weight: 650;
  color: var(--daws-primary, #24547d);
}
.curso-tarjeta:hover .curso-enlace {
  text-decoration: underline;
}
.indice-contenedor {
  max-width: 1160px;
  margin: 28px auto 48px;
  padding: 28px;

  background: var(--daws-bg-soft, #f5f7fa);
  border: 1px solid var(--daws-border, #e2e8f0);
  border-radius: 20px;
}

.indice-encabezado {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;

  color: var(--daws-primary, #24547d);
  font-size: 20px;
  font-weight: 700;
}

.indice-curso {
  margin: 0;
  padding: 0;
}

@media (max-width: 520px) {
  .indice-contenedor {
    padding: 16px;
  }
}
@media (max-width: 800px) {
  .indice-curso {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 520px) {
  .indice-curso {
    grid-template-columns: 1fr;
  }

  .curso-tarjeta {
    min-height: 160px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .curso-tarjeta {
    transition: none;
  }

  .curso-tarjeta:hover {
    transform: none;
  }
}
</style>
