import { CgBriefcase } from "react-icons/cg";
import { FiHome, FiMessageCircle, FiUser } from "react-icons/fi";
import { TbTools } from "react-icons/tb";
import styles from "@/styles/Sidebar.module.css";
import { useDispatch } from "react-redux";
import { toggleDrawer } from "@/redux/reducers/general.reducer";

function Navigations({ activeIndex, handleNavigationClick }) {
  const dispatch = useDispatch();

  return (
    <ul className={styles.navigation}>
      <li>
        <a
          onClick={() => {
            handleNavigationClick(0);
            dispatch(toggleDrawer(false));
          }}
          className={activeIndex === 0 ? styles.linkFocused : styles.linkContainer}
        >
          <FiHome className={styles.icon} size={22} />
          <span className={styles.link}>Home</span>
        </a>
      </li>
      <li>
        <a
          onClick={() => {
            handleNavigationClick(1);
            dispatch(toggleDrawer(false));
          }}
          className={activeIndex === 1 ? styles.linkFocused : styles.linkContainer}
        >
          <FiUser className={styles.icon} size={22} />
          <span className={styles.link}>About</span>
        </a>
      </li>
      <li>
        <a
          onClick={() => {
            handleNavigationClick(2);
            dispatch(toggleDrawer(false));
          }}
          className={activeIndex === 2 ? styles.linkFocused : styles.linkContainer}
        >
          <TbTools className={styles.icon} size={22} />
          <span className={styles.link}>Skills</span>
        </a>
      </li>
      <li>
        <a
          onClick={() => {
            handleNavigationClick(3);
            dispatch(toggleDrawer(false));
          }}
          className={activeIndex === 3 ? styles.linkFocused : styles.linkContainer}
        >
          <CgBriefcase className={styles.icon} size={22} />
          <span className={styles.link}>Portfolio</span>
        </a>
      </li>
      <li>
        <a
          onClick={() => {
            handleNavigationClick(4);
            dispatch(toggleDrawer(false));
          }}
          className={activeIndex === 4 ? styles.linkFocused : styles.linkContainer}
        >
          <FiMessageCircle className={styles.icon} size={22} />
          <span className={styles.link}>Contact</span>
        </a>
      </li>
    </ul>
  );
}

export default Navigations;
