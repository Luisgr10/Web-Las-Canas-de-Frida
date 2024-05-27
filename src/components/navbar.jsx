import "../style/navbar.css";
import logoSmall from "../assets/image/Logo.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link to="/">
          <img src={logoSmall} className="logo" alt="Bootstrap" />
        </Link>
        <div className="navbar-option">
          <a className="n-link" href="/Servicios">
            Servicios
          </a>
          <a className="n-link" href="/contactanos">
            Contacto
          </a>
          <a className="n-link" href="/blog">
            Blog
          </a>
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
    </nav>
  );
};
