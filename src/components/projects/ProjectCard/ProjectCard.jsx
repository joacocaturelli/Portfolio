import ArrowUpRight from '../../common/ArrowUpRight/ArrowUpRight';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project, number }) {
  return (
    <article className={styles.projectCard}>
      <div className={styles.projectCardTop}>
        <p className={styles.projectEyebrow}>{project.eyebrow}</p>
        <span className={styles.projectNumber}>{number}</span>
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className={styles.tags}>
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <div className={styles.projectLinks}>
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
