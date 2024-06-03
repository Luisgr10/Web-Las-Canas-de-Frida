import logoSmall from "../assets/image/Logo.png";
import "../style/footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-4">
          <div className="contact-info">
            <div>
              <i className="fas fa-map-marker-alt"></i> Dirección: C. Gordillo,
              87, 35009 Las Palmas de Gran Canaria, Las Palmas
            </div>
            <div>
              <i className="fas fa-phone-alt"></i> Teléfono: (34) 633 74 47 47
            </div>
            <div className="social-media">
            <a
              href="https://www.instagram.com/tu_peluqueria"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/tu_peluqueria"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>
          </div>
        </div>
        <div className="col-4 ">
          <div className="site-map"> <br/>
            <a href="#servicios">Servicios</a>  
            <a href="#contacto">Contáctanos</a>  
            <a href="#blog">Blog</a>
          </div>
        </div>
        <div className="col-4">
        <div className="appointment">
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
        </div>
      <div className="legal">
      <a href="#privacidad">Política de privacidad</a> 
              <a href="#cookies">Cookies</a> 
              <a href="#legal">Aviso legal</a>
      </div>
      <div className="creator">
        <h6>Creado por Luisgr</h6></div>
      </div>
    </footer>
  );
};
