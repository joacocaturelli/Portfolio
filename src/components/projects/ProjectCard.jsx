import ArrowUpRight from '../common/ArrowUpRight';

export default function ProjectCard({ project, number }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <p className="project-eyebrow">{project.eyebrow}</p>
        <span className="project-number">{number}</span>
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="tags">
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <div className="project-links">
        <a href={project.github} target="_blank" rel="noreferrer">
          GitHub <ArrowUpRight />
        </a>

        <a href={project.demo} target="_blank" rel="noreferrer">
          Demo <ArrowUpRight />
        </a>
      </div>
    </article>
  );
}
