import styles from './SkillIcon.module.css';

export default function SkillIcon({ iconUrl }) {
  return (
    <span
      className={styles.skillLogo}
      aria-hidden="true"
      style={{ '--skill-logo': `url("${iconUrl}")` }}
    />
  );
}
