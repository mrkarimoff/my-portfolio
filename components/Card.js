import styles from "@/styles/Card.module.css";
import { card } from "@/utils/motions";
import { motion } from "framer-motion";
import Image from "next/image";

function Card({ data }) {
  return (
    <>
      <motion.div
        className={styles.card}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
        variants={card}
      >
        <motion.div whileHover={{ scale: 1.1 }} className={styles.imgWrapper}>
          <Image sizes="400" className={styles.img} fill src={data.img} alt={data.name} />
        </motion.div>
        <h4 className={styles.name}>{data.name}</h4>
        <p className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi doloribus architecto
          aperiam, hic quibusdam est minima cumque natus ipsam a odit tempora, laborum veniam
          voluptates!
        </p>
      </motion.div>
    </>
  );
}

export default Card;
