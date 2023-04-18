import { getOpenDrawer } from "@/redux/reducers/general.selector";
import styles from "@/styles/Sidebar.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { sidebar } from "@/utils/motions";
import SocialLinks from "./SocialLinks";
import Navigations from "./Navigations";

function Sidebar({ activeIndex, handleNavigationClick }) {
  const openDrawer = useSelector(getOpenDrawer());
  const router = useRouter();

  return (
    <motion.div
      initial={"hidden"}
      animate={"visible"}
      variants={sidebar}
      className={openDrawer ? styles.bodyShow : styles.body}
    >
      <div className={styles.profile}>
        <Image
          placeholder="blur"
          blurDataURL={"/me.png"}
          src={"/me.png"}
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
      <Navigations activeIndex={activeIndex} handleNavigationClick={handleNavigationClick} />
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
