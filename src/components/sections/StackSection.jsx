import { skillGroups } from '../../data/skills';
import SkillIcon from '../common/SkillIcon';

export default function StackSection() {
  return (
    <section id="stack" className="section-shell section-block">
      <div className="section-heading">
        <div>
          <p className="kicker">03 — STACK</p>
          <h2>Herramientas con las que trabajo.</h2>
        </div>

        <p>Las tecnologías que más sentido tienen en mis proyectos actuales.</p>
      </div>

      <div className="stack-grid">
        {skillGroups.map((group) => (
          <div className="stack-group" key={group.label}>
            <h3>{group.label}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span className="skill-item" key={skill.name}>
                  <span className="skill-icon">
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
