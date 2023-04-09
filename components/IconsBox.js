import { IoLogoReact } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";
import styles from "@/styles/IconsBox.module.css";
import Image from "next/image";
import { icon, iconNode } from "@/animations/motions";

function IconsBox() {
  return (
    <div className={styles.iconContainer}>
      <motion.div whileHover={"hover"} variants={icon}>
        <DiMongodb className={styles.iconSize} color="#00ED64" />
      </motion.div>
      <motion.div whileHover={"hover"} variants={icon}>
        <IoLogoReact className={styles.iconSize} color="#04D5FF" />
      </motion.div>
      <motion.div whileHover={"hover"} variants={icon}>
        <Image
          className={styles.nextIcon}
          src={"/next.png"}
          width={60}
          height={60}
          alt="nextIcon"
        />
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
