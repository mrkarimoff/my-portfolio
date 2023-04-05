import styles from "@/styles/Home.module.css";
import { Typewriter } from "react-simple-typewriter";

function Home({ handleNavigationClick }) {
  return (
    <div className={styles.container}>
      <div className={styles.name}>Mirfayz Karimov</div>
      <h1 className={styles.occupation}>
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
      </h1>

      <div className={styles.btnContainer}>
        <button onClick={() => handleNavigationClick(4)} className={styles.contactMe}>
          CONTACT ME
        </button>
      </div>
    </div>
  );
}

export default Home;
