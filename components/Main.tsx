'use client';

import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useContext, useEffect, useRef, useState } from 'react';
import { IoArrowUpOutline } from 'react-icons/io5';
import { Keyboard, Mousewheel, Parallax, Scrollbar } from 'swiper/modules';
import { Swiper, type SwiperRef, SwiperSlide } from 'swiper/react';
import Overlay from '~/components/Overlay';
import styles from '~/styles/Main.module.css';
import Context from '~/utils/context';
import About from './Sections/About';
import Contact from './Sections/Contact';
import Home from './Sections/Home';
import Portfolio from './Sections/Portfolio';
import Skills from './Sections/Skills';
import Sidebar from './Sidebar';

import 'swiper/css';
import 'swiper/css/pagination';

function Main() {
  const [openModal, setOpenModal] = useState(false);
  const swiperRef = useRef<SwiperRef>(null);

  const context = useContext(Context);

  if (!context) {
    throw new Error('Main component must be used within a ContextProvider');
  }

  const {
    activeIndex,
    isOpenDrawer,
    currentProject,
    toggleDrawer,
    setActiveIndex,
    setCurrentProject,
  } = context;

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.on('slideChange', (e) =>
        setActiveIndex(e.activeIndex),
      );
    }
  }, [setActiveIndex]);

  const handleNavigationClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <main>
      <AnimatePresence>
        {openModal && (
          <Overlay project={currentProject} close={() => setOpenModal(false)} />
        )}
      </AnimatePresence>

      <div>
        <Sidebar
          handleNavigationClick={handleNavigationClick}
          activeIndex={activeIndex}
          isOpenDrawer={isOpenDrawer}
          toggleDrawer={toggleDrawer}
        />
        <Swiper
          parallax={true}
          speed={500}
          onClick={() => toggleDrawer(false)}
          ref={swiperRef}
          direction={'vertical'}
          scrollbar={{ draggable: true }}
          mousewheel={{ forceToAxis: true }}
          keyboard={{ enabled: true }}
          slidesPerView={1}
          modules={[Mousewheel, Scrollbar, Keyboard, Parallax]}
          className="mySwiper"
        >
          <SwiperSlide className={styles.main}>
            <Home handleNavigationClick={handleNavigationClick} />
          </SwiperSlide>
          <SwiperSlide className={styles.section}>
            <About />
          </SwiperSlide>
          <SwiperSlide className={styles.section}>
            <Skills />
          </SwiperSlide>
          <SwiperSlide className={styles.section}>
            <Portfolio
              setOpenModal={setOpenModal}
              setCurrentProject={setCurrentProject}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.section}>
            <Contact />
          </SwiperSlide>
        </Swiper>
        <Link
          href="#"
          onClick={() => handleNavigationClick(0)}
          className={activeIndex ? styles.arrowBox : styles.arrowBoxInvisible}
        >
          <IoArrowUpOutline size={28} />
        </Link>
      </div>
    </main>
  );
}

export default Main;
