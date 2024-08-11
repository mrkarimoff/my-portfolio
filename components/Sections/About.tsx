import { motion } from 'framer-motion';
import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Title from '~/components/Title';
import styles from '~/styles/About.module.css';
import { aboutContainer, mainImg, resumeBtn, textAnim } from '~/utils/motions';

function About() {
  const downloadResume = () =>
    window.open(
      'https://drive.google.com/file/d/1LiXcUdSkOZ-y16nr7uK42kAXDysoHXCh/view?usp=sharing',
      '_blank',
    );

  return (
    <motion.div
      initial={'hidden'}
      animate={'visible'}
      variants={aboutContainer}
      className={styles.container}
    >
      <Title>About Me</Title>

      <div className={styles.content}>
        <div className={styles.left}>
          <motion.p
            initial={'hidden'}
            whileInView={'visible'}
            variants={textAnim}
            viewport={{ once: true }}
            className={styles.text}
          >
            Hi, I&apos;m Mirfayz Karimov, a Full stack developer with a focus on
            Next.js/React + Python development. I love creating web applications
            that solve everyday problems, and I&apos;m always curious to learn
            more when it comes to new technologies and creative coding.
            <br />
            <br /> When I&apos;m not coding, you can usually find me watching
            movies, reading psychological and personal growth books, or
            exploring new places. Let&apos;s connect and create something
            amazing together!
          </motion.p>
        </div>
        <motion.div
          className={styles.right}
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ once: true }}
          variants={mainImg}
        >
          <Swiper
            pagination={{ clickable: true }}
            slidesPerView={1}
            modules={[Pagination]}
            className={styles.aboutSwiper}
          >
            <SwiperSlide className={styles.main}>
              <div className={styles.imgWrapper}>
                <Image
                  sizes="300"
                  className={styles.img}
                  src={'/photo2.jpg'}
                  fill
                  alt="mainPhoto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.main}>
              <div className={styles.imgWrapper}>
                <Image
                  sizes="300"
                  className={styles.img}
                  src={'/me2.jpg'}
                  fill
                  alt="secondPhoto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.main}>
              <div className={styles.imgWrapper}>
                <Image
                  sizes="300"
                  className={styles.img}
                  src={'/photo3.jpg'}
                  fill
                  alt="thirdPhoto"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>

      <div className={styles.resumeWrapper}>
        <motion.div
          initial={'hidden'}
          whileInView={'visible'}
          variants={textAnim}
          viewport={{ once: true }}
          className={styles.more}
        >
          More about me
        </motion.div>
        <motion.button
          onClick={downloadResume}
          initial={'hidden'}
          whileInView={'visible'}
          variants={resumeBtn}
          className={styles.resumeBtn}
        >
          Resume
        </motion.button>
      </div>
    </motion.div>
  );
}

export default About;
