import ArrowUpRight from '../common/ArrowUpRight';
import EcommercePreview from './EcommercePreview';

export default function FeaturedProject({ project }) {
  return (
    <article className="featured-project">
      <div className="project-preview">
        <div className="browser-bar">
          <span></span>
          <span></span>
          <span></span>
          <small>mitienditaonline.netlify.app</small>
        </div>

        <EcommercePreview />

        <a
          className="preview-overlay"
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir demo del e-commerce"
        >
          Abrir demo ↗
        </a>
      </div>

      <div className="project-info">
        <p className="project-eyebrow">{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-highlights">
          {project.highlights.map((highlight) => (
            <span key={highlight}>{highlight}</span>
          ))}
        </div>

        <div className="tags">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-links">
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
