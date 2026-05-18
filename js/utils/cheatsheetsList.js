//Exportar funcion para renderizar las tarjetas de cheatsheets.
export function renderCheatsheet(cheatsheets) {
    return cheatsheets
    
    .map(cheatsheet => 
        `
        <a href= "${cheatsheet.link}" class="cheatsheet-tarjeta">
            <img src="${cheatsheet.icon}" alt="${cheatsheet.name}" class="skill-icon">
            <h3>${cheatsheet.name}</h3>
            <p>Guía rápida de referencia</p>
        </a>
    `)
    .join('');
}