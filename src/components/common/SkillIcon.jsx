export default function SkillIcon({ iconUrl }) {
  return (
    <span
      className="skill-logo"
      aria-hidden="true"
      style={{ '--skill-logo': `url("${iconUrl}")` }}
    />
  );
}
