import styles from "@/styles/IconsBox.module.css";
import { icon, iconNode } from "@/utils/motions";
import { motion } from "framer-motion";
import { FaNode } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { SiNextdotjs, SiPrisma, SiTypescript } from "react-icons/si";

function IconsBox() {
  return (
    <div className={styles.iconContainer}>
      <motion.div whileHover={"hover"} variants={icon}>
        <SiPrisma className={styles.iconSize} color="#123A50" />
      </motion.div>
      <motion.div whileHover={"hover"} variants={icon}>
        <IoLogoReact className={styles.iconSize} color="#04D5FF" />
      </motion.div>
      <motion.div whileHover={"hover"} variants={icon}>
        <SiNextdotjs className={`${styles.iconSize} ${styles.nextIcon}`} color="#000" />
      </motion.div>
      <motion.div whileHover={"hover"} variants={iconNode}>
        <FaNode className={styles.iconSize} color="#00ED64" />
      </motion.div>
      <motion.div whileHover={"hover"} variants={icon}>
        <SiTypescript className={styles.tsIcon} color="#2D79C7" />
      </motion.div>
    </div>
  );
}

export default IconsBox;
