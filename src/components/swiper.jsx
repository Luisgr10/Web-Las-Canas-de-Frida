import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../style/cards.css";

// import required modules
import { Pagination } from "swiper/modules";

export const Opinions = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 100,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Frida Wiig</h5>
              <p className="card-subtitle mb-2 text-body-secondary">
                11 Reseñas
              </p>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <span>Hace un mes</span>
              <p className="card-text">
                Perfect! Alberto is amazing and so kind. Lovely salon. Me
                encanta mi nuevo cabello
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Natyrain Naty</h5>
              <p className="card-subtitle mb-2 text-body-secondary">
                11 Reseñas
              </p>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <span>Hace 2 meses</span>
              <p className="card-text">
                Fui por primera vez hace unos días.Alberto es muy profesional,
                te valora y recomienda lo adecuado para tu caso con sinceridad.
                A parte es muy educado y agradable. Lástima que no vivo en Gran
                Canaria para ir siempre. 100% recomendado. Gracias Alberto!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Raúl Suarez</h5>
              <p className="card-subtitle mb-2 text-body-secondary">
                Local Guide·38 reseñas·28 fotos
              </p>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <span>Hace 3 meses</span>
              <p className="card-text">
                Hoy e acudido a este salón orgánico y e decir que me fascinó el
                trato del chico me asesoró súper bien y me dejo mi pelo
                espectacular Volveré, gracias
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Elena Fernández Bayona</h5>
              <p className="card-subtitle mb-2 text-body-secondary">
                4 Reseñas
              </p>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <span>Hace 3 meses</span>
              <p className="card-text">
                Ayer en la tarde fui, por primera vez, a esta peluquería para
                hacerme un cambio atrevido para mi. Desde el primer momento,
                pude notar la profesionalidad de Alberto, pero más aún cuando
                acabó su trabajo. Es todo un profesional.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Hansel Ferrón</h5>
              <p className="card-subtitle mb-2 text-body-secondary">
                Local Guide·13 reseñas·38 fotos
              </p>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <span>Hace un año</span>
              <p className="card-text">
                Nunca antes había disfrutado tanto de la experiencia que es
                cortarse el pelo. Un trato increíble desde el minuto uno por
                parte de Alberto todo un profesional que supo adaptarse a mis
                ideas y junto a su experiencia hacer el mejor trabajo con mi
                peinado.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Luis Guilarte Rodriguez</h5>
              <p className="card-subtitle mb-2 text-body-secondary">
                Hace 2 años
              </p>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <i
                className="fa-solid fa-star fa-sm"
                style={{ color: "#17b271" }}
              ></i>
              <span>Hace un año</span>
              <p className="card-text">
                Encantado con el color de cabello, era la tercera peluquería que
                visitaba y no habían dado con el tono que tengo ahora... 100%
                recomendado
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
