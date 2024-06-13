import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../Carousel/slider.css'
import peluqueria from '../../assets/image/peluqueria1.jpg'
import peluqueria1 from '../../assets/image/peluqueria2.jpg'
import peluqueria2 from '../../assets/image/peluqueria3.jpg'


// import required modules
import { Autoplay, Pagination, EffectFade} from 'swiper/modules';

export const Slider = ()  => {

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper-i"
      >
        <SwiperSlide className='swiper-i'>
          <img src={peluqueria} alt="" />
        </SwiperSlide>
        <SwiperSlide className='swiper-i'>
          <img src={peluqueria1} alt="" />
        </SwiperSlide>
        <SwiperSlide className='swiper-i'>
          <img src={peluqueria2} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

