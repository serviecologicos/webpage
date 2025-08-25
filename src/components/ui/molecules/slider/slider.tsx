import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

interface SliderComponentProps {
  images: string[];
}

export default function Slider({ images }: SliderComponentProps) {
  return (
    <div className="flex items-center justify-center w-full h-auto">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={20}
        initialSlide={0}
        coverflowEffect={{
          rotate: 45,
          stretch: -10,
          depth: 80,
          modifier: 1.5,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
        loopAdditionalSlides={3}
        watchSlidesProgress={true}
        simulateTouch={true}
        touchRatio={1}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full max-w-4xl"
        style={{
          paddingBottom: '50px'
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
            initialSlide: 0,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
            initialSlide: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
            initialSlide: 0,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={`slide-${index}-${image.split('/')[1]}`}>
            <img
              src={image}
              alt={`Imagen de instalaciones ${((index % 3) + 1)}`}
              className="w-full h-64 md:h-80 object-cover rounded-xl select-none shadow-lg transition-transform duration-300 hover:scale-105"
              draggable={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
