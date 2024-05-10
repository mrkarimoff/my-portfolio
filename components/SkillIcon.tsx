import styles from '~/styles/SkillIcon.module.css';
import type { IconType } from 'react-icons';

type SkillIconProps = {
  hoverColor: string;
  title: string;
  Icon: IconType;
};

function SkillIcon({ hoverColor, title, Icon }: SkillIconProps) {
  return (
    <div
      style={{ '--hover-color': hoverColor } as React.CSSProperties}
      className={styles.iconWrapper}
    >
      {Icon && <Icon className={styles.icon} />}
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default SkillIcon;
