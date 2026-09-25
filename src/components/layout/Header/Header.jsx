import ArrowUpRight from '../../common/ArrowUpRight/ArrowUpRight';
import styles from './Header.module.css';
import shared from '../../../styles/shared.module.css';

const links = [
  { href: '#work', label: 'Proyectos' },
  { href: '#about', label: 'Sobre mí' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contacto' },
];

export default function Header() {
  return (
    <header className={`${shared.sectionShell} ${styles.siteHeader}`}>
      <a className={styles.brand} href="#top" aria-label="Joaquín Caturelli, inicio">
        JC<span>.</span>
      </a>

      <nav aria-label="Navegación principal">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a
        className={styles.headerLink}
        href="https://github.com/joacocaturelli"
        target="_blank"
        rel="noreferrer"
      >
        GitHub <ArrowUpRight />
      </a>
    </header>
  );
}
