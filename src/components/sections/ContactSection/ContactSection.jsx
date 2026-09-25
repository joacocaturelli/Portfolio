import ArrowUpRight from '../../common/ArrowUpRight/ArrowUpRight';
import CopyEmail from '../../common/CopyEmail/CopyEmail';
import styles from './ContactSection.module.css';
import shared from '../../../styles/shared.module.css';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className={`${shared.sectionShell} ${styles.contactSection}`}
    >
      <div>
        <p className={shared.kicker}>04 — CONTACTO</p>
        <h2>¿Trabajamos juntos?</h2>
      </div>

      <div className={styles.contactLinks}>
        <CopyEmail />

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
  );
}