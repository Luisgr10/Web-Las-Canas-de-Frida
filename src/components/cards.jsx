import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../style/cards.css'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export const Cards = () => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">Natyrain Naty </h5>
          <p className="card-subtitle mb-2 text-body-secondary">11 Reseñas</p>
          <span><i className="fa-solid fa-star fa-sm" style={{color: '#17b271'}}></i>
          <i className="fa-solid fa-star fa-sm" style={{color: '#17b271'}}></i>
          <i className="fa-solid fa-star fa-sm" style={{color: '#17b271'}}></i>
          <i className="fa-solid fa-star fa-sm" style={{color: '#17b271'}}></i>
          <i className="fa-solid fa-star fa-sm" style={{color: '#17b271'}}></i>
          </span>
          <p className="card-text">
          Fui por primera vez hace unos días.Alberto es muy profesional, te valora y recomienda lo adecuado para tu caso con sinceridad. 
          A parte es muy educado y agradable. Lástima que no vivo en Gran Canaria para ir siempre. 100% recomendado. Gracias Alberto!
          </p>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">Natyrain Naty </h5>
          <p className="card-subtitle mb-2 text-body-secondary">11 Reseñas</p>
          <span><i className="fa-solid fa-star fa-sm" style={{color: '#17b271'}}></i>
          <i className="fa-solid fa-star fa-sm" style={{color: '#17b271'}}></i>
          <i className="fa-solid fa-star fa-sm" style={{color: '#17b271'}}></i>
          <i className="fa-solid fa-star fa-sm" style={{color: '#17b271'}}></i>
          <i className="fa-solid fa-star fa-sm" style={{color: '#17b271'}}></i>
          </span>
          <p className="card-text">
          Fui por primera vez hace unos días.Alberto es muy profesional, te valora y recomienda lo adecuado para tu caso con sinceridad. 
          A parte es muy educado y agradable. Lástima que no vivo en Gran Canaria para ir siempre. 100% recomendado. Gracias Alberto!
          </p>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">Natyrain Naty </h5>
          <p className="card-subtitle mb-2 text-body-secondary">11 Reseñas</p>
          <span><i className="fa-solid fa-star fa-sm" style={{color: '#17b271'}}></i>
          <i className="fa-solid fa-star fa-sm" style={{color: '#17b271'}}></i>
          <i className="fa-solid fa-star fa-sm" style={{color: '#17b271'}}></i>
          <i className="fa-solid fa-star fa-sm" style={{color: '#17b271'}}></i>
          <i className="fa-solid fa-star fa-sm" style={{color: '#17b271'}}></i>
          </span>
          <p className="card-text">
          Fui por primera vez hace unos días.Alberto es muy profesional, te valora y recomienda lo adecuado para tu caso con sinceridad. 
          A parte es muy educado y agradable. Lástima que no vivo en Gran Canaria para ir siempre. 100% recomendado. Gracias Alberto!
          </p>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">Natyrain Naty </h5>
          <p className="card-subtitle mb-2 text-body-secondary">11 Reseñas</p>
          <span><i className="fa-solid fa-star fa-sm" style={{color: '#17b271'}}></i>
          <i className="fa-solid fa-star fa-sm" style={{color: '#17b271'}}></i>
          <i className="fa-solid fa-star fa-sm" style={{color: '#17b271'}}></i>
          <i className="fa-solid fa-star fa-sm" style={{color: '#17b271'}}></i>
          <i className="fa-solid fa-star fa-sm" style={{color: '#17b271'}}></i>
          </span>
          <p className="card-text">
          Fui por primera vez hace unos días.Alberto es muy profesional, te valora y recomienda lo adecuado para tu caso con sinceridad. 
          A parte es muy educado y agradable. Lástima que no vivo en Gran Canaria para ir siempre. 100% recomendado. Gracias Alberto!
          </p>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">Natyrain Naty </h5>
          <p className="card-subtitle mb-2 text-body-secondary">11 Reseñas</p>
          <span><i className="fa-solid fa-star fa-sm" style={{color: '#17b271'}}></i>
          <i className="fa-solid fa-star fa-sm" style={{color: '#17b271'}}></i>
          <i className="fa-solid fa-star fa-sm" style={{color: '#17b271'}}></i>
          <i className="fa-solid fa-star fa-sm" style={{color: '#17b271'}}></i>
          <i className="fa-solid fa-star fa-sm" style={{color: '#17b271'}}></i>
          </span>
          <p className="card-text">
          Fui por primera vez hace unos días.Alberto es muy profesional, te valora y recomienda lo adecuado para tu caso con sinceridad. 
          A parte es muy educado y agradable. Lástima que no vivo en Gran Canaria para ir siempre. 100% recomendado. Gracias Alberto!
          </p>
        </div>
      </div>
        </SwiperSlide>
      
      </Swiper>
    </>
  );
};
