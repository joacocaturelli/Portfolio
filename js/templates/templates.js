// Exportar la funcion para renderizar el header.
export function mainHeaderTemplate() {

	// Detectar si estamos en un subdirectorio o en la raíz
    const enSubdirectorio = window.location.pathname.split('/').filter(Boolean).length > 1;
    const base = enSubdirectorio ? '../' : './';

	return `
	<div class="container header-content">
		<div class="logo">
			<a href="${base}index.html">
				<img
					src="https://res.cloudinary.com/do0white9/image/upload/v1773181650/Bootcamp/Proyecto-1/joaquin_circulo_eba1c5.png"
					alt="Logo JC"
				/>
			</a>
		</div>

		<nav class="nav">
			<ul class="nav-list">
				<li><a href="${base}about.html">About</a></li>
				<li><a href="${base}index.html#skills-section">Skills</a></li>
				<li><a href="${base}index.html#cheatsheets-section">Cheatsheets</a></li>
				<li><a href="${base}recursos.html">Recursos</a></li>
				<li><a href="${base}contacto.html">Contacto</a></li>
			</ul>
		</nav>

		<div id="weather-container"></div>

		<div class="icon-container">
			<button class="dark-mode-toggle" id="btnModoOscuro" aria-label="Cambiar modo oscuro">
				<img class="icon sun" id="iconToggle"
					src="https://res.cloudinary.com/do0white9/image/upload/v1776022339/sun_p2fszq.svg"
					alt="Dark Mode Toggle Icon Sun"
				/>
			</button>

			<button
				class="hamburger"
				id="hamburger"
				aria-label="Menú de navegación"
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>
	</div>`;
}

// Exportar la funcion para renderizar el footer.
export function mainFooterTemplate() {
	return `
	<div class="container footer-container">
		<nav class="footer-nav">
			<a
				href="https://www.linkedin.com/in/joaquin-caturelli-0582b2212/"
				target="_blank"
				rel="noopener noreferrer"
				>Linkedin</a
			>
			<a
				href="https://github.com/joacocaturelli"
				target="_blank"
				rel="noopener noreferrer"
				>GitHub</a
			>
			<a
				href="https://www.instagram.com/joacocaturelli/"
				target="_blank"
				rel="noopener noreferrer"
				>Instagram</a
			>
		</nav>
		<p>&copy; 2026 Joaquín Caturelli - Fullstack Developer</p>
	</div>`;
}