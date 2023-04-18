import { container } from "@/utils/motions";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import IconsBox from "../IconsBox";

function Home({ handleNavigationClick }) {
  return (
    <div className={styles.container}>
      <div
        className={styles.slideImage}
        data-swiper-parallax="95%"
        data-swiper-parallax-opacity={0.3}
      >
        <Image className={styles.bgImage} alt="bg-image" src={"/bg.jpg"} fill />
      </div>
      <motion.div
        initial={"hidden"}
        animate={"visible"}
        variants={container}
        className={styles.content}
      >
        <motion.div className={styles.name}>Mirfayz Karimov</motion.div>
        <motion.h1 className={styles.occupation}>
          I'm a{" "}
          <span className={styles.typeEffect}>
            <Typewriter
              words={["Web Developer.", "MERN Stack Developer.", "Freelancer."]}
              loop={{}}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={20}
            />
          </span>
        </motion.h1>
        <IconsBox />
        <div data-swiper-parallax="-100" className={styles.btnContainer}>
          <motion.button onClick={() => handleNavigationClick(4)} className={styles.contactMe}>
            CONTACT ME
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
