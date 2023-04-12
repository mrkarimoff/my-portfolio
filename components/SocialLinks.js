import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaSkype } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import styles from "@/styles/Sidebar.module.css";

function SocialLinks() {
  return (
    <ul className={styles.socialContainer}>
      <li className={styles.social}>
        <Link className={styles.socialLink} target="_blank" href={"https://github.com/mrkarimoff"}>
          <FiGithub size={18} />
        </Link>
      </li>
      <li className={styles.social}>
        <Link
          className={styles.socialLink}
          target="_blank"
          href={"https://www.instagram.com/mirfayzkarimov"}
        >
          <FaInstagram size={18} />
        </Link>
      </li>
      <li className={styles.social}>
        <Link
          className={styles.socialLink}
          target="_blank"
          href={"https://www.facebook.com/mirfayz.karimov.3"}
        >
          <FaFacebookF size={18} />
        </Link>
      </li>
      <li className={styles.social}>
        <Link
          className={styles.socialLink}
          target="_blank"
          href={"https://www.linkedin.com/in/mirfayz-karimov-dev"}
        >
          <FaLinkedinIn size={18} />
        </Link>
      </li>
      <li className={styles.social}>
        <Link
          className={styles.socialLink}
          target="_blank"
          href={"https://join.skype.com/invite/KzHXf4ZS9hvG"}
        >
          <FaSkype size={18} />
        </Link>
      </li>
    </ul>
  );
}

export default SocialLinks;
