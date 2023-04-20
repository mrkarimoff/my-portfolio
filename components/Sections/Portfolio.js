import Title from "@/components/Title";
import styles from "@/styles/Portfolio.module.css";
import { useRef, useState } from "react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Portfolio() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const sayHello = () => {
    console.log("Salomlar");
  };

  return (
    <div className={styles.container}>
      <Title>Portfolio</Title>

      <Swiper
        ref={swiperRef}
        loop
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 40,
          stretch: 10,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        className={styles.portfolioSwiper}
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide
          onClick={sayHello}
          className={`${styles.swiperSlide} ${activeIndex === 0 && styles.activeSlide}`}
        >
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide
          onClick={sayHello}
          className={`${styles.swiperSlide} ${activeIndex === 1 && styles.activeSlide}`}
        >
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide
          onClick={sayHello}
          className={`${styles.swiperSlide} ${activeIndex === 2 && styles.activeSlide}`}
        >
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide
          onClick={sayHello}
          className={`${styles.swiperSlide} ${activeIndex === 3 && styles.activeSlide}`}
        >
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide
          onClick={sayHello}
          className={`${styles.swiperSlide} ${activeIndex === 4 && styles.activeSlide}`}
        >
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide
          onClick={sayHello}
          className={`${styles.swiperSlide} ${activeIndex === 5 && styles.activeSlide}`}
        >
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Portfolio;
