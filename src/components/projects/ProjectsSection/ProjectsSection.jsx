import { projects } from '../../../data/projects';
import FeaturedProject from '../FeaturedProject/FeaturedProject';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './ProjectsSection.module.css';
import shared from '../../../styles/shared.module.css';

export default function ProjectsSection() {
  const featuredProject = projects.find((project) => project.featured);
  const secondaryProjects = projects.filter((project) => !project.featured);

  return (
    <section id="work" className={`${shared.sectionShell} ${shared.sectionBlock}`}>
      <div className={shared.sectionHeading}>
        <div>
          <p className={shared.kicker}>01 — PROYECTOS</p>
          <h2>Lo que he construido</h2>
        </div>

        <p>Una muestra pequeña, pero representativa, de mi trabajo.</p>
      </div>

      {featuredProject && <FeaturedProject project={featuredProject} />}

      <div className={styles.projectGrid}>
        {secondaryProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            number={`0${index + 2}`}
          />
        ))}

        <article className={styles.projectNextCard}>
          <span className={styles.projectNumber}>
            {String(secondaryProjects.length + 2).padStart(2, '0')}
          </span>

          <p className={styles.projectEyebrow}>PRÓXIMAMENTE</p>
          <h3>Más proyectos en construcción.</h3>
          <p>Este portfolio seguirá creciendo con nuevos proyectos.</p>
        </article>
      </div>
    </section>
  );
}
