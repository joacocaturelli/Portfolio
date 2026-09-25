import styles from './AboutSection.module.css';
import shared from '../../styles/shared.module.css';

export default function AboutSection() {
  return (
    <section
      id="about"
      className={`${shared.sectionShell} ${shared.sectionBlock} ${styles.splitSection}`}
    >
      <div>
        <p className={shared.kicker}>02 — SOBRE MÍ</p>
        <h2>Me gusta entender cómo funciona todo el producto.</h2>
      </div>

      <div className={styles.aboutCopy}>
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

        <div className={styles.aboutMeta}>
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
  );
}
