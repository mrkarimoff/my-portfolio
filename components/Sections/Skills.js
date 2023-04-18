import React from "react";
import styles from "@/styles/Resume.module.css";
import Title from "@/components/Title";
import Tabs from "@/components/Tabs";

function Skills() {
  return (
    <div className={styles.container}>
      <Title>Skills</Title>

      <Tabs />
    </div>
  );
}

export default Skills;
