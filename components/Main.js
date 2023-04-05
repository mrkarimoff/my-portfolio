import { toggleDrawer } from "@/redux/reducers/general.reducer";
import styles from "@/styles/Main.module.css";
import { useEffect, useRef, useState } from "react";
import { IoArrowUpOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Keyboard, Mousewheel, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Home from "./Sections/Home";
import Sidebar from "./Sidebar";

function Main() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.on("slideChange", (e) => {
        setActiveIndex(e.activeIndex);
      });
    }
  }, []);

  const handleNavigationClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div>
      <Sidebar handleNavigationClick={handleNavigationClick} activeIndex={activeIndex} />
      <Swiper
        speed={500}
        onClick={() => dispatch(toggleDrawer(false))}
        ref={swiperRef}
        direction={"vertical"}
        scrollbar={{ draggable: true }}
        mousewheel={{ forceToAxis: true }}
        keyboard={{ enabled: true }}
        slidesPerView={1}
        modules={[Mousewheel, Scrollbar, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide className={styles.main}>
          <Home handleNavigationClick={handleNavigationClick} />
        </SwiperSlide>
        <SwiperSlide className={styles.section}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.section}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles.section}>Slide 4</SwiperSlide>
        <SwiperSlide className={styles.section}>Slide 5</SwiperSlide>
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
