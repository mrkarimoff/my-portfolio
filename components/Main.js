import { toggleDrawer, updateState } from "@/redux/reducers/general.reducer";
import styles from "@/styles/Main.module.css";
import { useEffect, useRef, useState } from "react";
import { IoArrowUpOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Keyboard, Mousewheel, Scrollbar, Parallax } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Home from "./Sections/Home";
import Sidebar from "./Sidebar";
import About from "./Sections/About";
import Resume from "./Sections/Resume";
import Portfolio from "./Sections/Portfolio";
import Contact from "./Sections/Contact";
import { getActiveIndex } from "@/redux/reducers/general.selector";

function Main() {
  const activeIndex = useSelector(getActiveIndex());
  const swiperRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.on("slideChange", (e) => {
        dispatch(updateState({ state: "activeIndex", setState: e.activeIndex }));
      });
    }
  }, []);

  const handleNavigationClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div id="myElement">
      <Sidebar handleNavigationClick={handleNavigationClick} activeIndex={activeIndex} />
      <Swiper
        parallax={true}
        speed={500}
        onClick={() => dispatch(toggleDrawer(false))}
        ref={swiperRef}
        direction={"vertical"}
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
          <Resume />
        </SwiperSlide>
        <SwiperSlide className={styles.section}>
          <Portfolio />
        </SwiperSlide>
        <SwiperSlide className={styles.section}>
          <Contact />
        </SwiperSlide>
      </Swiper>
      <a
        onClick={() => handleNavigationClick(0)}
        className={activeIndex ? styles.arrowBox : styles.arrowBoxInvisible}
      >
        <IoArrowUpOutline size={28} />
      </a>
    </div>
  );
}

export default Main;
