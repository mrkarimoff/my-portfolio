import { getOpenDrawer } from "@/redux/reducers/general.selector";
import styles from "@/styles/Sidebar.module.css";
import Image from "next/image";
import Link from "next/link";
import { CgBriefcase } from "react-icons/cg";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaSkype } from "react-icons/fa";
import { FiFile, FiGithub, FiHome, FiMessageCircle, FiUser } from "react-icons/fi";
import { useSelector } from "react-redux";

function Sidebar({ activeIndex, handleNavigationClick }) {
  const openDrawer = useSelector(getOpenDrawer());

  return (
    <div className={openDrawer ? styles.bodyShow : styles.body}>
      <div className={styles.profile}>
        <Image
          placeholder="blur"
          blurDataURL={"/me.png"}
          src={"/me.png"}
          alt="profile"
          className={styles.img}
          width={130}
          height={130}
        />
      </div>
      <a onClick={() => handleNavigationClick(0)}>
        <h2 className={styles.name}>Mirfayz Karimov</h2>
      </a>

      <ul className={styles.socialContainer}>
        <li className={styles.social}>
          <Link target="_blank" href={"https://github.com/mrkarimoff"}>
            <FiGithub size={18} />
          </Link>
        </li>
        <li className={styles.social}>
          <Link target="_blank" href={"https://www.instagram.com/mirfayzkarimov"}>
            <FaInstagram size={18} />
          </Link>
        </li>
        <li className={styles.social}>
          <Link target="_blank" href={"https://www.facebook.com/mirfayz.karimov.3"}>
            <FaFacebookF size={18} />
          </Link>
        </li>
        <li className={styles.social}>
          <Link target="_blank" href={"https://www.linkedin.com/in/mirfayz-karimov-dev"}>
            <FaLinkedinIn size={18} />
          </Link>
        </li>
        <li className={styles.social}>
          <Link target="_blank" href={"https://join.skype.com/invite/KzHXf4ZS9hvG"}>
            <FaSkype size={18} />
          </Link>
        </li>
      </ul>

      <ul className={styles.navigation}>
        <li>
          <a
            onClick={() => handleNavigationClick(0)}
            className={activeIndex === 0 ? styles.linkFocused : styles.linkContainer}
          >
            <FiHome className={styles.icon} size={22} />
            <span className={styles.link}>Home</span>
          </a>
        </li>
        <li>
          <a
            onClick={() => handleNavigationClick(1)}
            className={activeIndex === 1 ? styles.linkFocused : styles.linkContainer}
          >
            <FiUser className={styles.icon} size={22} />
            <span className={styles.link}>About</span>
          </a>
        </li>
        <li>
          <a
            onClick={() => handleNavigationClick(2)}
            className={activeIndex === 2 ? styles.linkFocused : styles.linkContainer}
          >
            <FiFile className={styles.icon} size={22} />
            <span className={styles.link}>Resume</span>
          </a>
        </li>
        <li>
          <a
            onClick={() => handleNavigationClick(3)}
            className={activeIndex === 3 ? styles.linkFocused : styles.linkContainer}
          >
            <CgBriefcase className={styles.icon} size={22} />
            <span className={styles.link}>Portfolio</span>
          </a>
        </li>
        <li>
          <a
            onClick={() => handleNavigationClick(4)}
            className={activeIndex === 4 ? styles.linkFocused : styles.linkContainer}
          >
            <FiMessageCircle className={styles.icon} size={22} />
            <span className={styles.link}>Contact</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
