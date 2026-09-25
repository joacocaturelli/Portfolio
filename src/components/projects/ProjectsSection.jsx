import { projects } from '../../data/projects';
import FeaturedProject from './FeaturedProject';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const featuredProject = projects.find((project) => project.featured);
  const secondaryProjects = projects.filter((project) => !project.featured);

  return (
    <section id="work" className="section-shell section-block">
      <div className="section-heading">
        <div>
          <p className="kicker">01 — PROYECTOS</p>
          <h2>Lo que he construido</h2>
        </div>

        <p>Una muestra pequeña, pero representativa, de mi trabajo.</p>
      </div>

      {featuredProject && <FeaturedProject project={featuredProject} />}

      <div className="project-grid">
        {secondaryProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            number={`0${index + 2}`}
          />
        ))}

        <article className="project-card project-next">
          <span className="project-number">
            {String(secondaryProjects.length + 2).padStart(2, '0')}
          </span>

          <p className="project-eyebrow">PRÓXIMAMENTE</p>
          <h3>Más proyectos en construcción.</h3>
          <p>Este portfolio seguirá creciendo con nuevos proyectos.</p>
        </article>
      </div>
    </section>
  );
}
