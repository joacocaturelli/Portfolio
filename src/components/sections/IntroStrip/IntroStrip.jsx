import styles from './IntroStrip.module.css';
import shared from '../../../styles/shared.module.css';

export default function IntroStrip() {
  return (
    <section className={`${shared.sectionShell} ${styles.introStrip}`}>
      <div>
        <strong>De la interfaz a la base de datos.</strong>
      </div>

      <p>
        Me gusta entender cómo encajan todas las piezas de una aplicación y
        construirlas de forma ordenada.
      </p>
    </section>
  );
}
