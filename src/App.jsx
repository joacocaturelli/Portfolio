import { projects } from './data/projects';
import { skillGroups } from './data/skills';
const profileImage =
  'https://res.cloudinary.com/do0white9/image/upload/v1774280210/IMG_1144_yanrnc.jpg';

function ArrowUpRight() {
  return <span aria-hidden="true">↗</span>;
}

function SkillIcon({ icon, iconUrl, name }) {
  return (
    <img
      className={iconUrl ? 'skill-logo-original' : ''}
      src={iconUrl ?? `https://cdn.simpleicons.org/${icon}/5f5c56`}
      alt=""
      aria-hidden="true"
      title={name}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={(event) => {
        event.currentTarget.style.display = 'none';
      }}
    />
  );
}

export default function App() {
  const featuredProject = projects.find((project) => project.featured);
  const secondaryProjects = projects.filter((project) => !project.featured);

  return <>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Joaquín Caturelli, inicio">JC<span>.</span></a>
      <nav aria-label="Navegación principal">
        <a href="#work">Proyectos</a>
        <a href="#about">Sobre mí</a>
        <a href="#stack">Stack</a>
        <a href="#contact">Contacto</a>
      </nav>
      <a className="header-link" href="https://github.com/joacocaturelli" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
    </header>

    <main id="top">
      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="kicker">JUNIOR FULL STACK DEVELOPER</p>
          <h1>Desarrollo aplicaciones web <em>de principio a fin.</em></h1>
          <p className="hero-intro">
            Soy Joaquín Caturelli, desarrollador web formado en Full Stack.
            Trabajo con React, Node.js y bases de datos para convertir una idea
            en una aplicación funcional.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Ver proyectos <ArrowUpRight /></a>
            <a className="text-link" href="#about">Conoceme <ArrowUpRight /></a>
          </div>
          <div className="hero-facts" aria-label="Áreas principales">
            <span>React</span>
            <span>Node.js</span>
            <span>REST APIs</span>
            <span>SQL</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-frame"><img src={profileImage} alt="Foto de Joaquín Caturelli" /></div>
          <div className="visual-note">
            <span>01</span>
            <p>Full Stack<br />Web Development</p>
          </div>
        </div>
      </section>

      <section className="intro-strip section-shell">
        <div><strong>De la interfaz a la base de datos.</strong></div>
        <p>Me gusta entender cómo encajan todas las piezas de una aplicación y construirlas de forma ordenada.</p>
      </section>

      <section id="work" className="section-shell section-block">
        <div className="section-heading">
          <div>
            <p className="kicker">01 — PROYECTOS</p>
            <h2>Lo que he construido</h2>
          </div>
          <p>Una muestra pequeña, pero representativa, de mi trabajo.</p>
        </div>

        {featuredProject && <article className="featured-project">
          <div className="project-preview">
            <div className="browser-bar">
              <span></span><span></span><span></span>
              <small>mitienditaonline.netlify.app</small>
            </div>
            <iframe
              title="Vista previa del e-commerce de Joaquín Caturelli"
              src="https://mitienditaonline.netlify.app"
              loading="lazy"
            />
            <a className="preview-overlay" href="https://mitienditaonline.netlify.app" target="_blank" rel="noreferrer" aria-label="Abrir demo del e-commerce">
              Abrir demo ↗
            </a>
          </div>

          <div className="project-info">
            <p className="project-eyebrow">{featuredProject.eyebrow}</p>
            <h3>{featuredProject.title}</h3>
            <p>Una aplicación e-commerce completa que conecta frontend, backend, persistencia de datos y servicios externos en un único producto.</p>
            <div className="project-highlights">
              <span>Autenticación</span>
              <span>Carrito & wishlist</span>
              <span>Checkout Stripe</span>
              <span>Panel admin</span>
              <span>Reviews</span>
              <span>Responsive</span>
            </div>
            <div className="tags">
              {featuredProject.technologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
            <div className="project-links">
              <a href="https://mitienditaonline.netlify.app" target="_blank" rel="noreferrer">Demo <ArrowUpRight /></a>
              <a href={featuredProject.github} target="_blank" rel="noreferrer">Frontend <ArrowUpRight /></a>
              <a href={featuredProject.backendGithub} target="_blank" rel="noreferrer">Backend <ArrowUpRight /></a>
            </div>
          </div>
        </article>}

        <div className="project-grid">
          {secondaryProjects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-card-top">
                <p className="project-eyebrow">{project.eyebrow}</p>
                <span className="project-number">0{index + 2}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
                <a href={project.demo} target="_blank" rel="noreferrer">Demo <ArrowUpRight /></a>
              </div>
            </article>
          ))}
          <article className="project-card project-next">
            <span className="project-number">03</span>
            <p className="project-eyebrow">PRÓXIMAMENTE</p>
            <h3>Más proyectos en construcción.</h3>
            <p>Este espacio está preparado para crecer a medida que avance mi experiencia profesional.</p>
          </article>
        </div>
      </section>

      <section id="about" className="section-shell section-block split-section">
        <div>
          <p className="kicker">02 — SOBRE MÍ</p>
          <h2>Me gusta entender cómo funciona todo el producto.</h2>
        </div>
        <div className="about-copy">
          <p>Mi formación en desarrollo web Full Stack me llevó a trabajar tanto en frontend como en backend, desde la interfaz hasta la base de datos y la API.</p>
          <p>Me interesa seguir desarrollándome como software developer, construyendo aplicaciones útiles, mantenibles y bien estructuradas junto a un buen equipo.</p>
          <div className="about-meta">
            <div><span>FORMACIÓN</span><strong>Full Stack Web Development</strong></div>
            <div><span>INTERESES</span><strong>Frontend · Backend · Full Stack</strong></div>
          </div>
        </div>
      </section>

      <section id="stack" className="section-shell section-block">
        <div className="section-heading">
          <div><p className="kicker">03 — STACK</p><h2>Herramientas con las que trabajo.</h2></div>
          <p>Las tecnologías que más sentido tienen en mis proyectos actuales.</p>
        </div>
        <div className="stack-grid">
          {skillGroups.map((group) => (
            <div className="stack-group" key={group.label}>
              <h3>{group.label}</h3>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span className="skill-item" key={skill.name}>
                    <span className="skill-icon"><SkillIcon icon={skill.icon} iconUrl={skill.iconUrl} name={skill.name} /></span>
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell contact-section">
        <div><p className="kicker">04 — CONTACTO</p><h2>¿Hablamos?</h2></div>
        <div className="contact-links">
          <a href="mailto:TU_EMAIL_AQUI">Email <ArrowUpRight /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>
          <a href="https://github.com/joacocaturelli" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
        </div>
      </section>
    </main>

    <footer className="site-footer section-shell">
      <span>Joaquín Caturelli</span>
      <span>© {new Date().getFullYear()}</span>
      <a href="#top">Volver arriba ↑</a>
    </footer>
  </>;
}
