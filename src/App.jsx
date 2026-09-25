import { projects } from './data/projects';
import { skillGroups } from './data/skills';

const profileImage = 'https://res.cloudinary.com/do0white9/image/upload/v1774280210/IMG_1144_yanrnc.jpg';

function ArrowUpRight() { return <span aria-hidden="true">↗</span>; }

export default function App() {
  const featuredProject = projects.find((project) => project.featured);
  const secondaryProjects = projects.filter((project) => !project.featured);

  return <>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Joaquín Caturelli, inicio">JC<span>.</span></a>
      <nav aria-label="Navegación principal">
        <a href="#work">Proyectos</a><a href="#about">Sobre mí</a><a href="#stack">Stack</a><a href="#contact">Contacto</a>
      </nav>
      <a className="header-link" href="https://github.com/joacocaturelli" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
    </header>

    <main id="top">
      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="kicker">JUNIOR FULL STACK DEVELOPER</p>
          <h1>Construyo productos web <em>de principio a fin.</em></h1>
          <p className="hero-intro">Soy Joaquín Caturelli, desarrollador web formado en Full Stack. Me interesa crear interfaces claras, APIs sólidas y aplicaciones que funcionen como un producto completo.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Ver proyectos <ArrowUpRight /></a>
            <a className="text-link" href="#contact">Hablemos <ArrowUpRight /></a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame"><img src={profileImage} alt="Foto de Joaquín Caturelli" /></div>
          <div className="visual-note"><span>01</span><p>Full Stack<br />Web Development</p></div>
        </div>
      </section>

      <section id="work" className="section-shell section-block">
        <div className="section-heading"><div><p className="kicker">01 — PROYECTOS</p><h2>Trabajo seleccionado</h2></div><p>Proyectos reales donde puedo mostrar cómo pienso y cómo construyo.</p></div>
        {featuredProject && <article className="featured-project">
          <div className="project-preview"><div className="browser-bar"><span></span><span></span><span></span><small>e-commerce / dashboard</small></div><div className="preview-content"><span className="preview-label">FULL STACK</span><strong>SHOP</strong><div className="preview-lines"><i></i><i></i><i></i></div></div></div>
          <div className="project-info"><p className="project-eyebrow">{featuredProject.eyebrow}</p><h3>{featuredProject.title}</h3><p>{featuredProject.description}</p><div className="tags">{featuredProject.technologies.map((t) => <span key={t}>{t}</span>)}</div><div className="project-links"><a href={featuredProject.github} target="_blank" rel="noreferrer">Frontend <ArrowUpRight /></a><a href={featuredProject.backendGithub} target="_blank" rel="noreferrer">Backend <ArrowUpRight /></a></div></div>
        </article>}
        <div className="project-grid">
          {secondaryProjects.map((project, index) => <article className="project-card" key={project.title}><div className="project-card-top"><p className="project-eyebrow">{project.eyebrow}</p><span className="project-number">0{index + 2}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.technologies.map((t) => <span key={t}>{t}</span>)}</div><div className="project-links"><a href={project.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a><a href={project.demo} target="_blank" rel="noreferrer">Demo <ArrowUpRight /></a></div></article>)}
          <article className="project-card project-next"><span className="project-number">03</span><p className="project-eyebrow">PRÓXIMAMENTE</p><h3>Más proyectos en construcción.</h3><p>Este espacio está preparado para crecer a medida que avance mi experiencia profesional.</p></article>
        </div>
      </section>

      <section id="about" className="section-shell section-block split-section">
        <div><p className="kicker">02 — SOBRE MÍ</p><h2>Curioso, práctico y siempre construyendo.</h2></div>
        <div className="about-copy"><p>Mi formación en desarrollo web Full Stack me llevó a trabajar tanto en frontend como en backend, desde la interfaz hasta la base de datos y la API.</p><p>Ahora busco mi primera oportunidad profesional como desarrollador, donde pueda aportar lo que ya sé y seguir creciendo junto a un equipo con buenas prácticas de ingeniería.</p></div>
      </section>

      <section id="stack" className="section-shell section-block">
        <div className="section-heading"><div><p className="kicker">03 — STACK</p><h2>Herramientas con las que trabajo.</h2></div></div>
        <div className="stack-grid">{skillGroups.map((group) => <div className="stack-group" key={group.label}><h3>{group.label}</h3><div>{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div>
      </section>

      <section id="contact" className="section-shell contact-section">
        <div><p className="kicker">04 — CONTACTO</p><h2>¿Construimos algo juntos?</h2></div>
        <div className="contact-links"><a href="mailto:TU_EMAIL_AQUI">Email <ArrowUpRight /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a><a href="https://github.com/joacocaturelli" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a></div>
      </section>
    </main>
    <footer className="site-footer section-shell"><span>Joaquín Caturelli</span><span>© {new Date().getFullYear()}</span><a href="#top">Volver arriba ↑</a></footer>
  </>;
}
