import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '~/styles/Sidebar.module.css';
import { sidebar } from '~/utils/motions';
import Navigations from './Navigations';
import SocialLinks from './SocialLinks';
import { useRouter } from 'next/navigation';

type SidebarProps = {
  activeIndex: number;
  handleNavigationClick: (index: number) => void;
  isOpenDrawer: boolean;
  toggleDrawer: (value?: boolean) => void;
};

function Sidebar({
  activeIndex,
  handleNavigationClick,
  isOpenDrawer,
  toggleDrawer,
}: SidebarProps) {
  const router = useRouter();

  return (
    <motion.div
      initial={'hidden'}
      animate={'visible'}
      variants={sidebar}
      className={isOpenDrawer ? styles.bodyShow : styles.body}
    >
      <div className={styles.profile}>
        <Image
          src={'/photo1.png'}
          alt="profile"
          className={styles.img}
          width={130}
          height={130}
        />
      </div>
      <a onClick={() => handleNavigationClick(0)}>
        <h2 className={styles.name}>Mirfayz Karimov</h2>
      </a>
      <SocialLinks />
      <Navigations
        toggleDrawer={toggleDrawer}
        activeIndex={activeIndex}
        handleNavigationClick={handleNavigationClick}
      />
      <button
        className={styles.email}
        onClick={() => router.push(`mailto:mirfayzkarimoff@gmail.com`)}
      >
        mirfayzkarimoff@gmail.com
      </button>
    </motion.div>
  );
}

export default Sidebar;
