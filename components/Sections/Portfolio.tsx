import { type Dispatch, type SetStateAction, useState } from 'react';
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '~/components/Card';
import Title from '~/components/Title';
import styles from '~/styles/Portfolio.module.css';
import projects, { type Project } from '~/utils/constants';

import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

type PortfolioProps = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setCurrentProject: (value: Project) => void;
};

function Portfolio({ setOpenModal, setCurrentProject }: PortfolioProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.container}>
      <Title>Portfolio</Title>

      <Swiper
        effect={'coverflow'}
        centeredSlides={true}
        slidesPerView={'auto'}
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
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        className={styles.portfolioSwiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {projects.map((item, index) => (
          <SwiperSlide
            onClick={() => {
              setOpenModal(true);
              setCurrentProject(item);
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
