import styles from "@/styles/SkillIcon.module.css";

function SkillIcon({ hoverColor, title, Icon }) {
  return (
    <div style={{ "--hover-color": hoverColor }} className={styles.iconWrapper}>
      {Icon && <Icon className={styles.icon} />}
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default SkillIcon;
