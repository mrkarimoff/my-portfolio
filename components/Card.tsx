import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '~/styles/Card.module.css';
import type { Project } from '~/utils/constants';
import { card } from '~/utils/motions';

function Card({ data }: { data: Project }) {
  return (
    <motion.div
      className={styles.card}
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true }}
      variants={card}
    >
      <motion.div whileHover={{ scale: 1.1 }} className={styles.imgWrapper}>
        <Image
          sizes="400"
          className={styles.img}
          fill
          src={data.img}
          alt={data.name}
        />
      </motion.div>
      <h4 className={styles.name}>{data.name}</h4>
      <p className={styles.description}>{data.description}</p>
    </motion.div>
  );
}

export default Card;
