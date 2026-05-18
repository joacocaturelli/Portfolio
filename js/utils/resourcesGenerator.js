// Funcion para renderizar las tabs de recursos
export function renderizarTabsRecursos (tabs) {
    return tabs
    //Generar un boton para cada categoria de recursos
    .map((tab, indice) => `
        <button class="btn-tab ${indice === 0 ? 'active' : ''}" data-category="${indice}">${tab.categoria}</button>
    `)
    .join('')
}

// Funcion para renderizar el panel de categorias de cada recurso
export function renderizarTabsPanel (recursos) {
    return recursos

    // Generar un panel para cada categoria de recursos, con un enlace para cada recurso dentro de esa categoria
    .map((recurso, indice) => `
        <div class="tab-panel ${indice === 0 ? 'active' : ''}" data-panel="${indice}">
            <div class="recursos-grid">

                ${recurso.items.map(item => `
                    <a href="${item.URL}" target="_blank" class="recurso-card">
                        <h3>${item.titulo}</h3>
                        <p>${item.note}</p> 
                    </a>
                `).join("")} 
            </div>
        </div>
    `)
    .join('')
}

export function tabsRecursosListener() {
    const tabs = document.querySelectorAll(".btn-tab");
    const panels = document.querySelectorAll(".tab-panel");

    tabs.forEach((tab, indice) => {
        tab.addEventListener("click", () => {
            // Quitar la clase "active" de todos los botones y paneles
            tabs.forEach(t => t.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));

            // Agregar la clase "active" al botón y panel correspondientes
            tab.classList.add("active");
            panels[indice].classList.add("active");
        });
    });
}