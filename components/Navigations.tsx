import { CgBriefcase } from 'react-icons/cg';
import { FiHome, FiMessageCircle, FiUser } from 'react-icons/fi';
import { TbTools } from 'react-icons/tb';
import styles from '~/styles/Sidebar.module.css';

type NavigationsProps = {
  activeIndex: number;
  handleNavigationClick: (index: number) => void;
  toggleDrawer: (value?: boolean) => void;
};

function Navigations({
  activeIndex,
  handleNavigationClick,
  toggleDrawer,
}: NavigationsProps) {
  return (
    <ul className={styles.navigation}>
      <li>
        <a
          onClick={() => {
            handleNavigationClick(0);
            toggleDrawer(false);
          }}
          className={
            activeIndex === 0 ? styles.linkFocused : styles.linkContainer
          }
        >
          <FiHome className={styles.icon} size={22} />
          <span className={styles.link}>Home</span>
        </a>
      </li>
      <li>
        <a
          onClick={() => {
            handleNavigationClick(1);
            toggleDrawer(false);
          }}
          className={
            activeIndex === 1 ? styles.linkFocused : styles.linkContainer
          }
        >
          <FiUser className={styles.icon} size={22} />
          <span className={styles.link}>About</span>
        </a>
      </li>
      <li>
        <a
          onClick={() => {
            handleNavigationClick(2);
            toggleDrawer(false);
          }}
          className={
            activeIndex === 2 ? styles.linkFocused : styles.linkContainer
          }
        >
          <TbTools className={styles.icon} size={22} />
          <span className={styles.link}>Skills</span>
        </a>
      </li>
      <li>
        <a
          onClick={() => {
            handleNavigationClick(3);
            toggleDrawer(false);
          }}
          className={
            activeIndex === 3 ? styles.linkFocused : styles.linkContainer
          }
        >
          <CgBriefcase className={styles.icon} size={22} />
          <span className={styles.link}>Portfolio</span>
        </a>
      </li>
      <li>
        <a
          onClick={() => {
            handleNavigationClick(4);
            toggleDrawer(false);
          }}
          className={
            activeIndex === 4 ? styles.linkFocused : styles.linkContainer
          }
        >
          <FiMessageCircle className={styles.icon} size={22} />
          <span className={styles.link}>Contact</span>
        </a>
      </li>
    </ul>
  );
}

export default Navigations;
