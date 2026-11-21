const favicons = [
    {
        path: '/docker/',
        icon: '/favicons/docker.ico',
    },
    {
        path: '/php/',
        icon: '/favicons/php.png',
    },

    {
        path: '/laravel/',
        icon: '/favicons/laravel.jpeg',
    },
]

export function getFavicon(path: string): string {
    const favicon = favicons.find(item => path.startsWith(item.path))
    console.log('Ruta recibida:', path)
    console.log('Favicon seleccionado:', favicon?.icon)

    return favicon?.icon ?? '/favicons/dwes.png'
}