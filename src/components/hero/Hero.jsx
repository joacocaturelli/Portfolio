import ArrowUpRight from '../common/ArrowUpRight';
import styles from './Hero.module.css';
import shared from '../../styles/shared.module.css';

const PROFILE_IMAGE =
  'https://res.cloudinary.com/do0white9/image/upload/v1774280210/IMG_1144_yanrnc.jpg';

const heroFacts = ['React', 'Node.js', 'REST APIs', 'JavaScript'];

export default function Hero() {
  return (
    <section className={`${shared.sectionShell} ${styles.hero}`}>
      <div className={styles.heroCopy}>
        <p className={shared.kicker}>JUNIOR FULL STACK DEVELOPER</p>

        <h1>
          Desarrollo aplicaciones web <em>de principio a fin.</em>
        </h1>

        <p className={styles.heroIntro}>
          Soy Joaquín Caturelli, desarrollador web formado en Full Stack.
          Trabajo con React, Node.js y bases de datos para convertir una idea
          en una aplicación funcional.
        </p>

        <div className={styles.heroActions}>
          <a className={`${styles.button} ${styles.buttonDark}`} href="#work">
            Ver proyectos <ArrowUpRight />
          </a>

          <a className={styles.textLink} href="#about">
            Conoceme <ArrowUpRight />
          </a>
        </div>

        <div className={styles.heroFacts} aria-label="Áreas principales">
          {heroFacts.map((fact) => (
            <span key={fact}>{fact}</span>
          ))}
        </div>
      </div>

      <div className={styles.heroVisual}>
        <div className={styles.portraitFrame}>
          <img src={PROFILE_IMAGE} alt="Foto de Joaquín Caturelli" />
        </div>

        <div className={styles.visualNote}>
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
