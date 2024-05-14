import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CgClose, CgCodeSlash } from 'react-icons/cg';
import { IoMdArrowDroprightCircle } from 'react-icons/io';
import { RxOpenInNewWindow } from 'react-icons/rx';
import styles from '~/styles/Modal.module.css';
import type { Project } from '~/utils/constants';
import { content, imageVariants, modal, text } from '~/utils/motions';

type ModalProps = {
  close: () => void;
  data: Project;
};

function Modal({ data, close }: ModalProps) {
  const { img, name, id, stack, description, url, code_base } = data;
  const leftStack = stack.slice(0, Math.ceil(stack.length / 2));
  const rightStack = stack.slice(Math.ceil(stack.length / 2));

  return (
    <motion.div
      variants={modal}
      onClick={(e) => e.stopPropagation()}
      className={styles.modal}
    >
      <button onClick={close} className={styles.closeBtn}>
        <CgClose className={styles.closeIcon} />
      </button>

      <motion.a
        variants={imageVariants}
        className={styles.imgContainer}
        target="_blank"
        href={url}
      >
        <Image
          sizes="400"
          fill
          src={img}
          className={styles.modalImg}
          alt={name + id}
        />
      </motion.a>

      <motion.div variants={content} className={styles.content}>
        <motion.h2 variants={text} className={styles.name}>
          {name}
        </motion.h2>
        <motion.p variants={text} className={styles.description}>
          {description}
        </motion.p>
        <motion.span variants={text} className={styles.stackTitle}>
          Project Stack
        </motion.span>
        {stack.length > 3 ? (
          <motion.div variants={text} className={styles.stackWrapper}>
            <ul className={styles.stackContainer}>
              {leftStack.map((item, i) => (
                <div className={styles.skill} key={i}>
                  <IoMdArrowDroprightCircle className={styles.arrowIcon} />
                  <li className={styles.stackItem}>{item}</li>
                </div>
              ))}
            </ul>
            <ul className={styles.stackContainer}>
              {rightStack.map((item, i) => (
                <div className={styles.skill} key={i}>
                  <IoMdArrowDroprightCircle className={styles.arrowIcon} />
                  <li className={styles.stackItem}>{item}</li>
                </div>
              ))}
            </ul>
          </motion.div>
        ) : (
          <motion.div variants={text} className={styles.stackWrapper}>
            <ul className={styles.stackContainer}>
              {stack.map((item, i) => (
                <div className={styles.skill} key={i}>
                  <IoMdArrowDroprightCircle className={styles.arrowIcon} />
                  <li className={styles.stackItem}>{item}</li>
                </div>
              ))}
            </ul>
          </motion.div>
        )}

        <motion.div variants={text} className={styles.btnWrapper}>
          <Link href={url} target="_blank" className={styles.sourceBtn}>
            <span>View Project</span>
            <RxOpenInNewWindow className={styles.sourceIcon} />
          </Link>
          {code_base && (
            <Link
              href={code_base}
              target="_blank"
              className={`${styles.sourceBtn} ${styles.code}`}
            >
              <span>Code</span>
              <CgCodeSlash className={styles.sourceIcon} />
            </Link>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Modal;
