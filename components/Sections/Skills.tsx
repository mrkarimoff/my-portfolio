import Tabs from '~/components/Tabs';
import Title from '~/components/Title';
import styles from '~/styles/Skills.module.css';

function Skills() {
  return (
    <div className={styles.container}>
      <Title>Skills</Title>
      <Tabs />
    </div>
  );
}

export default Skills;
