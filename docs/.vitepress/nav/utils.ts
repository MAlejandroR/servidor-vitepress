export function icon(clase: string, texto: string): string {
    return `<span class="sidebar-title">
                <i class="${clase}" aria-hidden="true"></i>
                <span>${texto}</span>
            </span>`
}