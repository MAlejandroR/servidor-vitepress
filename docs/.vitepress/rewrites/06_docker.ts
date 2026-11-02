// ===== DOCKER =====
export const dockerRewrites: Record<string, string> = {
    '03_docker/index.md': 'docker/index.md',
    '03_docker/01_conceptos/(.*)': 'docker/conceptos/(.*)',
    '03_docker/02_contenedores_imagenes/(.*)': 'docker/contenedores-imagenes/(.*)',
    '03_docker/03_instalaciones/(.*)': 'docker/instalaciones/(.*)',
    '03_docker/04_comandos/(.*)': 'docker/comandos/(.*)',
    '03_docker/05_dockerfile/(.*)': 'docker/dockerfile/(.*)',
    '03_docker/06_compose/(.*)': 'docker/compose/(.*)',
    '03_docker/07_practica/(.*)': 'docker/practica/(.*)',
    '03_docker/08_practica_docker_inverse/(.*)': 'docker/practica-docker-inverse/(.*)',

}