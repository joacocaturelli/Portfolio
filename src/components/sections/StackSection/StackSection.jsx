import { skillGroups } from '../../../data/skills';
import SkillIcon from '../../common/SkillIcon/SkillIcon';
import styles from './StackSection.module.css';
import shared from '../../../styles/shared.module.css';

export default function StackSection() {
  return (
    <section id="stack" className={`${shared.sectionShell} ${shared.sectionBlock}`}>
      <div className={shared.sectionHeading}>
        <div>
          <p className={shared.kicker}>03 — STACK</p>
          <h2>Herramientas con las que trabajo.</h2>
        </div>

        <p>Las tecnologías que más sentido tienen en mis proyectos actuales.</p>
      </div>

      <div className={styles.stackGrid}>
        {skillGroups.map((group) => (
          <div className={styles.stackGroup} key={group.label}>
            <h3>{group.label}</h3>

            <div className={styles.skillList}>
              {group.skills.map((skill) => (
                <span className={styles.skillItem} key={skill.name}>
                  <span className={styles.skillIcon}>
                    <SkillIcon iconUrl={skill.iconUrl} />
                  </span>

                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
