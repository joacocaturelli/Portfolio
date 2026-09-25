import styles from './Footer.module.css';
import shared from '../../styles/shared.module.css';

export default function Footer() {
  return (
    <footer className={`${shared.sectionShell} ${styles.siteFooter}`}>
      <span>Joaquín Caturelli</span>
      <span>© {new Date().getFullYear()}</span>
      <a href="#top">Volver arriba ↑</a>
    </footer>
  );
}
