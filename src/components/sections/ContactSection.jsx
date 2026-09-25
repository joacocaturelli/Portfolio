import ArrowUpRight from '../common/ArrowUpRight';
import CopyEmail from '../common/CopyEmail';

export default function ContactSection() {
  return (
    <section id="contact" className="section-shell contact-section">
      <div>
        <p className="kicker">04 — CONTACTO</p>
        <h2>¿Trabajamos juntos?</h2>
      </div>

      <div className="contact-links">
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
