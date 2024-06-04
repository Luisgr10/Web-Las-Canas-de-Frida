import "../style/home.css";
import Logo from "../assets/image/Logo.png";
import peluqueria from '../assets/image/peluqueria1.jpg'
import { ImgBox } from "../components/imgBox";
import { Opinions} from "../components/swiper";
import { Slider } from "../components/slider";

export const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="landing-01 col-6">
          <img
            src={Logo}
            className="logo-landing"
            alt="Logo Las canas de frida"
          />
          <p>
            {" "}
            ¡Bienvenido a <strong>Las Canas de Frida</strong>, donde el cuidado
            del cabello se encuentra con la conciencia ambiental! 
          </p>
          <a
            href="https://booksy.com/es-es/40058_peluqueria-organica-las-canas-de-frida_peluqueria_69556_las-palmas-de-gran-canaria?do=invite&_branch_match_id=1323659425554383576&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVT8sw9IgK9S5JrUwCAB%2Bqw24iAAAA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="btn-navbar">
              Reservar cita
            </button>
          </a>
        </div>
        <div className="landing col-6 ">
          <Slider/>
        </div>
      </div>
      <div className="row">
        <div className=" col-6 mt-5">
          <ImgBox />
        </div>
        <div className=" perfil-02 col-6">
          <h1>Conocenos</h1>
          <p>
            Las Canas de Frida, una peluquería orgánica que nace de un sueño:
            ofrecer un espacio donde cada clienta es tratada con cariño y
            dedicación. Nuestro enfoque se centra en el uso de productos
            naturales y técnicas respetuosas con el medio ambiente, garantizando
            un cuidado integral y saludable para tu cabello. Detrás de este
            hermoso proyecto está Alberto, un apasionado estilista con más de 15
            años de experiencia en el mundo de la belleza. Su visión es crear
            una experiencia única, donde la atención personalizada y el
            bienestar de nuestras clientas son la prioridad. Ven a Las Canas de
            Frida y descubre cómo transformamos el arte de la peluquería en un
            acto de amor y respeto por ti y por nuestro planeta.
          </p>
          <a
            className="mt-3"
            href="https://booksy.com/es-es/40058_peluqueria-organica-las-canas-de-frida_peluqueria_69556_las-palmas-de-gran-canaria?do=invite&_branch_match_id=1323659425554383576&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVT8sw9IgK9S5JrUwCAB%2Bqw24iAAAA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="btn-navbar">
              Reservar cita
            </button>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center flex-column align-items-center mt-5 resumen">
          <h3>Opiniones que hablan por sí solas</h3>
          <a href="https://g.co/kgs/JRb4kc1">4,9/5 Resumen de reseñas de Google </a>
        </div>
        <div className="col-12 mb-5">
         <Opinions/>
        </div>
        </div>
      </div>
  );
};
