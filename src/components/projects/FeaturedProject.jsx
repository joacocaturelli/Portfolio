import ArrowUpRight from '../common/ArrowUpRight';
import EcommercePreview from './EcommercePreview';
import styles from './projects.module.css';

export default function FeaturedProject({ project }) {
  return (
    <article className={styles.featuredProject}>
      <div className={styles.projectPreview}>
        <div className={styles.browserBar}>
          <span></span>
          <span></span>
          <span></span>
          <small>mitienditaonline.netlify.app</small>
        </div>

        <EcommercePreview />

        <a
          className={styles.previewOverlay}
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir demo del e-commerce"
        >
          Abrir demo ↗
        </a>
      </div>

      <div className={styles.projectInfo}>
        <p className={styles.projectEyebrow}>{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className={styles.projectHighlights}>
          {project.highlights.map((highlight) => (
            <span key={highlight}>{highlight}</span>
          ))}
        </div>

        <div className={styles.tags}>
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className={styles.projectLinks}>
          <a href={project.demo} target="_blank" rel="noreferrer">
            Demo <ArrowUpRight />
          </a>

          <a href={project.github} target="_blank" rel="noreferrer">
            Frontend <ArrowUpRight />
          </a>

          <a href={project.backendGithub} target="_blank" rel="noreferrer">
            Backend <ArrowUpRight />
          </a>
        </div>
      </div>
    </article>
  );
}
