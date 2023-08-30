import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaSkype } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";
import styles from "@/styles/Sidebar.module.css";

function SocialLinks() {
  return (
    <ul className={styles.socialContainer}>
      <li title="Github" className={styles.social}>
        <Link className={styles.socialLink} target="_blank" href={"https://github.com/mrkarimoff"}>
          <FiGithub size={18} />
        </Link>
      </li>
      <li title="Instagram" className={styles.social}>
        <Link
          className={styles.socialLink}
          target="_blank"
          href={"https://www.instagram.com/mirfayzkarimov"}
        >
          <FaInstagram size={18} />
        </Link>
      </li>
      <li title="Facebook" className={styles.social}>
        <Link
          className={styles.socialLink}
          target="_blank"
          href={"https://www.facebook.com/mirfayz.karimov.3"}
        >
          <FaFacebookF size={18} />
        </Link>
      </li>
      <li title="LinkedIn" className={styles.social}>
        <Link
          className={styles.socialLink}
          target="_blank"
          href={"https://www.linkedin.com/in/mirfayz-karimov-dev"}
        >
          <FaLinkedinIn size={18} />
        </Link>
      </li>
      <li title="Upwork" className={styles.social}>
        <Link
          className={styles.socialLink}
          target="_blank"
          href={"https://www.upwork.com/freelancers/~0101dee15581757f78"}
        >
          <SiUpwork size={18} />
        </Link>
      </li>
    </ul>
  );
}

export default SocialLinks;
