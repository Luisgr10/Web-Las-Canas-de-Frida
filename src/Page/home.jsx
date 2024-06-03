import "../style/home.css";
import Logo from "../assets/image/Logo.png";
import Perfil from "../assets/image/Alberto.png";
import { Slider } from "../components/slider";
import { Cards } from "../components/cards";

export const Home = () => {
  return (
    <div className="container-fluid p-0">
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
            del cabello se encuentra con la conciencia ambiental! Sumérgete en
            una experiencia única, donde no solo te mimamos con los tratamientos
            capilares más exclusivos, sino que también te invitamos a unirte a
            nuestro compromiso con el medio ambiente y la salud. Reserva ahora y
            descubre cómo podemos transformar tu cabello mientras cuidamos
            nuestro planeta.
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
        <div className="landing col-6">
          <img
            src="https://d375139ucebi94.cloudfront.net/region2/es/40058/biz_photo/ed4f11097acb4662b2dbe6defc00dd-peluqueria-organica-las-canas--biz-photo-b70eb0719dbe475396cdd6a9e3c76f-booksy.jpeg?size=640x427"
            className="img-landing"
            alt="Imagen local"
          />
        </div>
      </div>
      <div className="row">
        <div className=" col-6 mt-5">
          <Slider />
        </div>
        <div className=" perfil-02 mt-5 col-6">
          <h1>Conocenos</h1>
          <p>
            {" "}
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
        <div className="col-12">
          <Cards />
        </div>
        </div>
      </div>
  );
};
