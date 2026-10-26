//Cargamos todos los ejercicios que hay en la carpeta ejercicios de cada tema
// Cargamos los ejercicios de todos los temas,
// excluyendo el directorio php_distancia.


const archivos = import.meta.glob(
    '../../../../**/ejercicios/*.md',
    {eager: true}
)

console.log('Archivos encontrados:', Object.keys(archivos));

console.log('Primer módulo:', Object.values(archivos)[0]);


//Vamos a crear un mapa (array asociativo) donde la clave sea el nombre del ejercicio y el valor sea el contenido del archivo
const ejercicios = new Map();

for (const [ruta, modulo] of Object.entries(archivos)) {

    const datos = modulo.__pageData
    if (!datos) continue;
    const {id, titulo, tema, orden} = datos.frontmatter;
    if (!id)
        throw new Error(`El archivo ${ruta} no tiene un id definido en el frontmatter`);
    if (ejercicios.has(id))
        throw new Error(`El archivo ${ruta} tiene un id duplicado: ${id}`);
    ejercicios.set(id,
        {
            id,
            titulo,
            tema,
            orden,
            ruta,
            icon: datos.frontmatter.icon || 'fa-solid fa-code',
            url: datos.relativePath,
            componente: modulo.default

        });
}

console.log('Catálogo de ejercicios:', ejercicios);
console.log('Número de ejercicios:', ejercicios.size);

//Obtener un ejercicio concreto por su id
export function obtenerEjercicio(id) {
    return ejercicios.get(id)
}


//Obtener todos los ejercicios de un tema concreto ordenados por el campo orden del frontmatter
export function obtenerEjercicios(tema) {
    return [...ejercicios.values()]
        .filter(e => e.tema === tema)
        .sort((a, b) => Number(a.orden) - Number(b.orden))
}

//