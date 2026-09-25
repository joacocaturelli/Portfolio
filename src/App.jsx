import { useEffect, useState } from 'react';
import { projects } from './data/projects';
import { skillGroups } from './data/skills';

const profileImage =
  'https://res.cloudinary.com/do0white9/image/upload/v1774280210/IMG_1144_yanrnc.jpg';

function createFavicon() {
  if (typeof document === 'undefined') return;

  const favicon = document.getElementById('favicon');
  if (!favicon) return;

  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.clearRect(0, 0, 64, 64);

  ctx.fillStyle = '#fffdf8';
  ctx.beginPath();
  ctx.roundRect(0, 0, 64, 64, 14);
  ctx.fill();

  const fontSize = 36;
  const font = `700 ${fontSize}px "Space Grotesk", sans-serif`;
  const letterSpacing = -2.2;

  ctx.font = font;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';

  const characters = ['J', 'C', '.'];
  const widths = characters.map((character) => ctx.measureText(character).width);
  const totalWidth =
    widths.reduce((sum, width) => sum + width, 0) +
    letterSpacing * (characters.length - 1);

  const metrics = ctx.measureText('JC.');
  const ascent = metrics.actualBoundingBoxAscent || fontSize * 0.72;
  const descent = metrics.actualBoundingBoxDescent || fontSize * 0.18;
  const baseline = 32 + (ascent - descent) / 2;

  let x = (64 - totalWidth) / 2;

  ctx.fillStyle = '#151515';
  ctx.fillText(characters[0], x, baseline);
  x += widths[0] + letterSpacing;

  ctx.fillText(characters[1], x, baseline);
  x += widths[1] + letterSpacing;

  ctx.fillStyle = '#ff5a36';
  ctx.fillText(characters[2], x, baseline);

  favicon.href = canvas.toDataURL('image/png');
}

function ArrowUpRight() {
  return <span aria-hidden="true">↗</span>;
}

function EcommercePreview() {
  const [showFallback, setShowFallback] = useState(false);
  const [liveLoaded, setLiveLoaded] = useState(false);
  const screenshot = '/projects/ecommerce-home.png';

  useEffect(() => {
    if (liveLoaded) return undefined;

    const timer = window.setTimeout(() => {
      setShowFallback(true);
    }, 6000);

    return () => window.clearTimeout(timer);
  }, [liveLoaded]);

  const handleScreenshotError = (event) => {
    event.currentTarget.style.display = 'none';
    event.currentTarget.nextElementSibling.style.display = 'flex';
  };

  return (
    <>
      <iframe
        className={`ecommerce-live-preview${showFallback ? ' is-hidden' : ''}`}
        title="Demo del e-commerce de Joaquín Caturelli"
        src="https://mitienditaonline.netlify.app"
        loading="lazy"
        onLoad={() => {
          setLiveLoaded(true);
          setShowFallback(false);
        }}
        onError={() => setShowFallback(true)}
      />
      <div className={`ecommerce-fallback${showFallback ? ' is-visible' : ''}`}>
        <img
          src={screenshot}
          alt="Screenshot de la página de inicio del e-commerce de Joaquín Caturelli"
          loading="lazy"
          onError={handleScreenshotError}
        />
        <div className="ecommerce-fallback-placeholder">
          <span>SCREENSHOT DEL PROYECTO</span>
          <strong>ecommerce-home.png</strong>
          <p>
            Colocá tu screenshot real en <code>public/projects/ecommerce-home.png</code>.
          </p>
        </div>
      </div>
    </>
  );
}

function SkillIcon({ iconUrl }) {
  return (
    <span
      className="skill-logo"
      aria-hidden="true"
      style={{ '--skill-logo': `url("${iconUrl}")` }}
    />
  );
}

export default function App() {
  useEffect(() => {
    document.fonts?.load('700 36px "Space Grotesk"').then(createFavicon);
  }, []);

  const featuredProject = projects.find((project) => project.featured);
  const secondaryProjects = projects.filter((project) => !project.featured);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Joaquín Caturelli, inicio">
          JC<span>.</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#work">Proyectos</a>
          <a href="#about">Sobre mí</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contacto</a>
        </nav>
        <a
          className="header-link"
          href="https://github.com/joacocaturelli"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <ArrowUpRight />
        </a>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="kicker">JUNIOR FULL STACK DEVELOPER</p>
            <h1>
              Desarrollo aplicaciones web <em>de principio a fin.</em>
            </h1>
            <p className="hero-intro">
              Soy Joaquín Caturelli, desarrollador web formado en Full Stack.
              Trabajo con React, Node.js y bases de datos para convertir una
              idea en una aplicación funcional.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                Ver proyectos <ArrowUpRight />
              </a>
              <a className="text-link" href="#about">
                Conoceme <ArrowUpRight />
              </a>
            </div>
            <div className="hero-facts" aria-label="Áreas principales">
              <span>React</span>
              <span>Node.js</span>
              <span>REST APIs</span>
              <span>JavaScript</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <img src={profileImage} alt="Foto de Joaquín Caturelli" />
            </div>
            <div className="visual-note">
              <span>01</span>
              <p>
                Full Stack
                <br />
                Web Development
              </p>
            </div>
          </div>
        </section>

        <section className="intro-strip section-shell">
          <div>
            <strong>De la interfaz a la base de datos.</strong>
          </div>
          <p>
            Me gusta entender cómo encajan todas las piezas de una aplicación y
            construirlas de forma ordenada.
          </p>
        </section>

        <section id="work" className="section-shell section-block">
          <div className="section-heading">
            <div>
              <p className="kicker">01 — PROYECTOS</p>
              <h2>Lo que he construido</h2>
            </div>
            <p>Una muestra pequeña, pero representativa, de mi trabajo.</p>
          </div>

          {featuredProject && (
            <article className="featured-project">
              <div className="project-preview">
                <div className="browser-bar">
                  <span></span>
                  <span></span>
                  <span></span>
                  <small>mitienditaonline.netlify.app</small>
                </div>
                <EcommercePreview />
                <a
                  className="preview-overlay"
                  href="https://mitienditaonline.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir demo del e-commerce"
                >
                  Abrir demo ↗
                </a>
              </div>

              <div className="project-info">
                <p className="project-eyebrow">{featuredProject.eyebrow}</p>
                <h3>{featuredProject.title}</h3>
                <p>{featuredProject.description}</p>
                <div className="project-highlights">
                  <span>Autenticación</span>
                  <span>Carrito & wishlist</span>
                  <span>Checkout Stripe</span>
                  <span>Panel admin</span>
                  <span>Reviews</span>
                  <span>Responsive</span>
                </div>
                <div className="tags">
                  {featuredProject.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href="https://mitienditaonline.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo <ArrowUpRight />
                  </a>
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Frontend <ArrowUpRight />
                  </a>
                  <a
                    href={featuredProject.backendGithub}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Backend <ArrowUpRight />
                  </a>
                </div>
              </div>
            </article>
          )}

          <div className="project-grid">
            {secondaryProjects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-card-top">
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <span className="project-number">0{index + 2}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub <ArrowUpRight />
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Demo <ArrowUpRight />
                  </a>
                </div>
              </article>
            ))}
            <article className="project-card project-next">
              <span className="project-number">03</span>
              <p className="project-eyebrow">PRÓXIMAMENTE</p>
              <h3>Más proyectos en construcción.</h3>
              <p>Este portfolio seguirá creciendo con nuevos proyectos.</p>
            </article>
          </div>
        </section>

        <section id="about" className="section-shell section-block split-section">
          <div>
            <p className="kicker">02 — SOBRE MÍ</p>
            <h2>Me gusta entender cómo funciona todo el producto.</h2>
          </div>
          <div className="about-copy">
            <p>
              Mi formación en desarrollo web Full Stack me llevó a trabajar tanto
              en frontend como en backend, desde la interfaz hasta la base de
              datos y la API.
            </p>
            <p>
              Me interesa seguir desarrollándome como software developer,
              construyendo aplicaciones útiles, mantenibles y bien estructuradas
              junto a un buen equipo.
            </p>
            <div className="about-meta">
              <div>
                <span>FORMACIÓN</span>
                <strong>Full Stack Web Development</strong>
              </div>
              <div>
                <span>INTERESES</span>
                <strong>Frontend · Backend · Full Stack</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="section-shell section-block">
          <div className="section-heading">
            <div>
              <p className="kicker">03 — STACK</p>
              <h2>Herramientas con las que trabajo.</h2>
            </div>
            <p>Las tecnologías que más sentido tienen en mis proyectos actuales.</p>
          </div>
          <div className="stack-grid">
            {skillGroups.map((group) => (
              <div className="stack-group" key={group.label}>
                <h3>{group.label}</h3>
                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span className="skill-item" key={skill.name}>
                      <span className="skill-icon">
                        <SkillIcon iconUrl={skill.iconUrl} />
                      </span>
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell contact-section">
          <div>
            <p className="kicker">04 — CONTACTO</p>
            <h2>¿Trabajamos juntos?</h2>
          </div>
          <div className="contact-links">
            <span className="contact-email">joacocatu@gmail.com</span>
            <a
              href="https://www.linkedin.com/in/joaquincaturelli/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight />
            </a>
            <a
              href="https://github.com/joacocaturelli"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <span>Joaquín Caturelli</span>
        <span>© {new Date().getFullYear()}</span>
        <a href="#top">Volver arriba ↑</a>
      </footer>
    </>
  );
}
