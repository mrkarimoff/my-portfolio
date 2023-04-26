import React from "react";
import styles from "@/styles/Overlay.module.css";
import { getCurrentCard } from "@/redux/reducers/general.selector";
import { useSelector } from "react-redux";
import Modal from "@/components/Modal";
import { motion } from "framer-motion";
import { overlay } from "@/utils/motions";

function Overlay({ close }) {
  const project = useSelector(getCurrentCard());

  return (
    <motion.div
      key={"overlay"}
      variants={overlay}
      initial={"hidden"}
      exit={"hidden"}
      animate={"visible"}
      className={styles.overlay}
      onClick={close}
    >
      {project && <Modal data={project} close={close} />}
    </motion.div>
  );
}

export default Overlay;
