import '../style/contactUs.css'
import peluqueria from '../assets/image/peluqueria1.jpg'
import logo from '../assets/image/Logo.png'
import { Map } from '../components/Map/map'

export const ContactUs = () => {
  return (
    <div className="container-fluid contact-Us">
      <div className="row">
        <div className="contact-01 col-12">
          <img src={peluqueria} className="img-fluid" alt="..." />
          <div className='logo-contact'>
            <img src={logo} alt="Logotipo peluqueria" />
          </div>
          <div className='btn-contact'>
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
            <a
              className="mt-3"
              href="https://booksy.com/es-es/40058_peluqueria-organica-las-canas-de-frida_peluqueria_69556_las-palmas-de-gran-canaria?do=invite&_branch_match_id=1323659425554383576&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVT8sw9IgK9S5JrUwCAB%2Bqw24iAAAA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="btn-navbar">
                <span><i className="fa-brands fa-whatsapp fa-sm" style={{ color: '#ffffff' }}></i></span> Contactanos
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-6 contact-form my-5'>
          <Map />
            </div>
            <div className='col-6 contact-02 my-5'>
              <h6>Direccion</h6>
              <p>C. Gordillo, 87, 35009 Las Palmas de Gran Canaria, Las Palmas</p>
              <h6>Telefono</h6>
              <p>+34 633 74 47 47</p>
              <h6>Correo Electronico</h6>
              <p>lascanasdefrida@gmail.com</p>
              <h6>Redes sociales</h6>
              <div className='redes'> <a
              href="https://www.instagram.com/tu_peluqueria"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            </div>
              
            </div>
            </div>
      </div>
      )
}

