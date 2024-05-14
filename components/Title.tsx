import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import styles from '~/styles/Title.module.css';
import { title } from '~/utils/motions';

function Title({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <motion.h2
        initial={'hidden'}
        animate={'delay'}
        whileInView={'visible'}
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
