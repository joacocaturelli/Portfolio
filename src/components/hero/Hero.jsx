import ArrowUpRight from '../common/ArrowUpRight';

const PROFILE_IMAGE =
  'https://res.cloudinary.com/do0white9/image/upload/v1774280210/IMG_1144_yanrnc.jpg';

const heroFacts = ['React', 'Node.js', 'REST APIs', 'JavaScript'];

export default function Hero() {
  return (
    <section className="hero section-shell">
      <div className="hero-copy">
        <p className="kicker">JUNIOR FULL STACK DEVELOPER</p>

        <h1>
          Desarrollo aplicaciones web <em>de principio a fin.</em>
        </h1>

        <p className="hero-intro">
          Soy Joaquín Caturelli, desarrollador web formado en Full Stack.
          Trabajo con React, Node.js y bases de datos para convertir una idea
          en una aplicación funcional.
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
          {heroFacts.map((fact) => (
            <span key={fact}>{fact}</span>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <div className="portrait-frame">
          <img src={PROFILE_IMAGE} alt="Foto de Joaquín Caturelli" />
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
  );
}
