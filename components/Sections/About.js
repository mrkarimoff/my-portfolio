import React from "react";
import styles from "@/styles/About.module.css";
import Title from "@/components/Title";
import Image from "next/image";
import { motion } from "framer-motion";
import { mainImg, resumeBtn, textAnim } from "@/utils/motions";

function About() {
  const downloadResume = () =>
    window.open("https://drive.google.com/file/d/1kpuUdOeeaoqyylU81WrJ-CWz9kDS6LW5/view", "_blank");

  return (
    <div className={styles.container}>
      <Title>About Me</Title>

      <div className={styles.content}>
        <div className={styles.left}>
          <motion.p
            initial={"hidden"}
            whileInView={"visible"}
            variants={textAnim}
            viewport={{ once: true }}
            className={styles.text}
          >
            Hi, I&apos;m Mirfayz Karimov, a Full stack developer with a focus on Next.js/React
            development. I love creating web applications that solve everyday problems, and I&apos;m
            always curious to learn more when it comes to new technologies and creative coding.
            <br />
            <br /> When I&apos;m not coding, you can usually find me watching movies, reading
            psychological and personal growth books, or exploring new places. Let&apos;s connect and
            create something amazing together!
          </motion.p>
        </div>
        <motion.div
          initial={"hidden"}
          whileHover={"hover"}
          whileTap={"tap"}
          whileInView={"visible"}
          viewport={{ once: true }}
          variants={mainImg}
          className={styles.right}
        >
          <Image sizes="300" className={styles.img} src={"/me2.jpg"} fill alt="mainImg" />
        </motion.div>
      </div>

      <div className={styles.resumeWrapper}>
        <motion.div
          initial={"hidden"}
          whileInView={"visible"}
          variants={textAnim}
          viewport={{ once: true }}
          className={styles.more}
        >
          More about me
        </motion.div>
        <motion.button
          onClick={downloadResume}
          initial={"hidden"}
          whileInView={"visible"}
          variants={resumeBtn}
          className={styles.resumeBtn}
        >
          Resume
        </motion.button>
      </div>
    </div>
  );
}

export default About;
