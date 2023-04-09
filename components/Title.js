import { title } from "@/animations/motions";
import React from "react";
import styles from "@/styles/Title.module.css";
import { motion } from "framer-motion";

function Title({ children }) {
  return (
    <motion.div initial={"hidden"} whileInView={"visible"} variants={title}>
      <h2 className={styles.title}>{children}</h2>
    </motion.div>
  );
}

export default Title;
