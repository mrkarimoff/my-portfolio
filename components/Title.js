import { title } from "@/utils/motions";
import React from "react";
import styles from "@/styles/Title.module.css";
import { motion } from "framer-motion";

function Title({ children }) {
  return (
    <div className={styles.container}>
      <motion.h2
        initial={"hidden"}
        animate={"delay"}
        whileInView={"visible"}
        variants={title}
        className={styles.title}
      >
        {children}
      </motion.h2>
      <div className={styles.line} />
    </div>
  );
}

export default Title;
