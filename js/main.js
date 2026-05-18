// Funcion para renderizar el header y el footer principal
import { mainHeaderTemplate, mainFooterTemplate } from "./templates/templates.js";

//Funcion para renderizar la lista de skills dominadas
import { renderSkills } from "./utils/skillsList.js";

//Importar lista de skills
import { skillsData } from "./data/skills.js";

//Funcion para el modo oscuro y para comprobar el estado del modo oscuro al cargar la pagina
import { darkMode, comprobarDarkMode } from "./utils/darkMode.js";

//Funcion para el menu hamburguesa
import { menu } from "./utils/menu.js";

//Importar lista de cheetsheets
import { cheatsheetsData } from "./data/cheatsheets.js";   

//Importar funcion para renderizar la lista de cheatsheets
import { renderCheatsheet } from "./utils/cheatsheetsList.js";

//Importar lista de recursos
import { resources } from "./data/resources.js";

//Importar funciones para renderizar la lista de recursos y las tabs de categorias de recursos y para añadir evento a las tabs de recursos
import { renderizarTabsRecursos, renderizarTabsPanel, tabsRecursosListener } from "./utils/resourcesGenerator.js"

//Importar funcion para renderizar el widget con el clima y para obtener la geolocalizacion
import { getLocalWeather } from "./utils/weather.js"


// Renderizar el header y el footer
const header = document.getElementById("main-header");
if (header) {
    header.innerHTML = mainHeaderTemplate();
}

const footer = document.getElementById("main-footer");
if (footer) {
    footer.innerHTML = mainFooterTemplate();
}

// Renderizar la lista de skills dominadas solo si existe el contenedor de skills en la pagina, para evitar errores en paginas que no lo tengan
const skillsContainer = document.getElementById("skills-container");
if (skillsContainer) {
    skillsContainer.innerHTML = renderSkills(skillsData);
}

//Renderizar la lista de cheatsheets solo si existe el contenedor de cheatsheets en la pagina
const cheatsheetsContainter = document.getElementById("cheatsheets-container");
if (cheatsheetsContainter) {
    cheatsheetsContainter.innerHTML = renderCheatsheet(cheatsheetsData)
}

//Renderizar la lista de recursos solo si existe el contenedor de recursos en la pagina
const recursosContainer = document.getElementById("recursos-container");
if (recursosContainer) {
    recursosContainer.innerHTML = renderizarTabsRecursos(resources)
}

//Renderizar el panel de categorias de recursos solo si existe el contenedor de paneles en la pagina
const panelesContainer = document.getElementById("paneles-container");
if (panelesContainer) {
    panelesContainer.innerHTML = renderizarTabsPanel(resources)
}

//Añadir evento a las tabs de recursos solo si existen los contenedores de recursos y paneles en la pagina
if (recursosContainer && panelesContainer) {
    tabsRecursosListener();
}

// Añadir evento al botón de modo oscuro
const btnModoOscuro = document.getElementById("btnModoOscuro");

if (btnModoOscuro) {
    btnModoOscuro.addEventListener("click", darkMode);
}

// Inicializar el menú hamburguesa
menu();
comprobarDarkMode();

// Inicializar el widget del clima
getLocalWeather()