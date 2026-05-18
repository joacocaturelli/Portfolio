# Proyecto 1 — Portfolio & CV

Portfolio personal desarrollado con **HTML, CSS y JavaScript Vanilla** como ejercicio del módulo de Frontend en The Bridge.

## Descripción

Sitio web multipágina que funciona como CV y portfolio profesional. Incluye información personal, experiencia, educación, skills, cheatsheets de referencia, recursos útiles para el desarrollo web, y un formulario de contacto funcional. Presenta modo oscuro con persistencia y un widget del clima en el header.

---

## Páginas

- **Home (`index.html`)** — Presentación, skills, proyectos en progreso y cheatsheets.
- **About (`about.html`)** — CV completo: experiencia, educación y valores profesionales.
- **Recursos (`recursos.html`)** — Listado de recursos útiles organizados por categorías con sistema de tabs.
- **Cheatsheets** — Guías rápidas de referencia para HTML, CSS y JavaScript.
- **Contacto (`contacto.html`)** — Formulario de contacto funcional.

---

## Funcionalidades

### 🌙 Modo Oscuro
- Toggle para alternar entre modo claro y oscuro.
- Persistencia entre sesiones mediante `localStorage`.
- El estado se restaura automáticamente al cargar cualquier página.

### 🌤️ Widget del Clima
- Geolocalización automática del usuario.
- Ciudad de respaldo (Barcelona) si el usuario deniega la ubicación o el navegador no la soporta.
- Muestra temperatura actual, condición climática e icono del tiempo.
- Consume la API de [WeatherAPI](https://www.weatherapi.com/).

### 🧩 Skills
- Listado de tecnologías generado dinámicamente desde un archivo de datos.
- Filtra automáticamente las skills marcadas como dominadas.
- Muestra icono, nivel y descripción de cada una.

### 📋 Cheatsheets
- Tarjetas generadas dinámicamente que enlazan a guías de referencia internas para HTML, CSS y JavaScript.

### 📚 Recursos
- Sistema de tabs que organiza recursos externos por categorías.
- Generado dinámicamente desde un archivo de datos centralizado.

### 📬 Formulario de Contacto
- Formulario funcional integrado con [FormSubmit](https://formsubmit.co/).
- Incluye honeypot anti-spam y redirección personalizada tras el envío.
- Campos: nombre, email, asunto y mensaje.

---

## Tecnologías utilizadas

- HTML5
- CSS3 (variables, Flexbox, Grid, media queries)
- JavaScript ES6+ (módulos, async/await, arrow functions)
- Fetch API
- LocalStorage
- [WeatherAPI](https://www.weatherapi.com/)
- [FormSubmit](https://formsubmit.co/)
- Google Fonts (Roboto, Space Mono)
- Cloudinary (almacenamiento de imágenes)

---

## Estructura del proyecto

```
proyecto1/
├── index.html
├── about.html
├── contacto.html
├── recursos.html
├── cheatsheet-html.html
├── cheatsheet-css.html
├── cheatsheet-js.html
├── css/
│   ├── reset.css
│   └── styles.css
└── js/
    ├── main.js
    ├── data/
    │   ├── skills.js
    │   ├── cheatsheets.js
    │   └── resources.js
    ├── templates/
    │   └── templates.js
    └── utils/
        ├── darkMode.js
        ├── menu.js
        ├── skillsList.js
        ├── cheatsheetsList.js
        ├── resourcesGenerator.js
        └── weather.js
```

---

## Arquitectura

El proyecto usa un único `main.js` compartido por todas las páginas mediante módulos ES6. Cada módulo comprueba si su elemento existe en el DOM antes de ejecutarse, evitando errores en páginas donde no aplica. El header y el footer se generan dinámicamente desde un template centralizado que detecta automáticamente si la página está en la raíz o en un subdirectorio, ajustando las rutas de navegación en consecuencia.

---

## Demo

Podés acceder directamente desde el navegador a través de GitHub Pages:

**[Ver portfolio online](https://joacocaturelli.github.io/Proyecto1)**

---

## Autor

Joaquín Caturelli
