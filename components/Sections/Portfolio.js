import Card from "@/components/Card";
import Title from "@/components/Title";
import { updateState } from "@/redux/reducers/general.reducer";
import styles from "@/styles/Portfolio.module.css";
import projects from "@/utils/constants";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Portfolio({ setOpenModal }) {
  const dispatch = useDispatch();
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className={styles.container}>
      <Title>Portfolio</Title>

      <Swiper
        ref={swiperRef}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3200,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        className={styles.portfolioSwiper}
        onSlideChange={handleSlideChange}
      >
        {projects.map((item, index) => (
          <SwiperSlide
            onClick={() => {
              setOpenModal(true);
              dispatch(updateState({ state: "currentCard", setState: item }));
            }}
            key={item.id}
            className={`${styles.swiperSlide} ${activeIndex === index && styles.activeSlide}`}
          >
            <Card data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Portfolio;
