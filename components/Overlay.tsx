import { motion } from 'framer-motion';
import Modal from '~/components/Modal';
import styles from '~/styles/Overlay.module.css';
import type { Project } from '~/utils/constants';
import { overlay } from '~/utils/motions';

type OverlayProps = {
  close: () => void;
  project: Project | null;
};

function Overlay({ close, project }: OverlayProps) {
  return (
    <motion.div
      key={'overlay'}
      variants={overlay}
      initial={'hidden'}
      exit={'hidden'}
      animate={'visible'}
      className={styles.overlay}
      onClick={close}
    >
      {project && <Modal data={project} close={close} />}
    </motion.div>
  );
}

export default Overlay;
