import ArrowUpRight from '../common/ArrowUpRight';

const links = [
  { href: '#work', label: 'Proyectos' },
  { href: '#about', label: 'Sobre mí' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contacto' },
];

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Joaquín Caturelli, inicio">
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
        className="header-link"
        href="https://github.com/joacocaturelli"
        target="_blank"
        rel="noreferrer"
      >
        GitHub <ArrowUpRight />
      </a>
    </header>
  );
}
