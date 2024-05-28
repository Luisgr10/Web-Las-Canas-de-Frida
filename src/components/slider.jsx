import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style/slider.css'


export const Slider = () => {
  return (
   <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://d375139ucebi94.cloudfront.net/region2/es/40058/inspiration/f4676301133c48088f01be1c267c74-peluqueria-organica-las-canas--inspiration-0a6f9b9a0fff4b5982bc28ccdad30b-booksy.jpeg?size=360x360" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://d375139ucebi94.cloudfront.net/region2/es/40058/inspiration/76d9859755424fada6498a7a0886c1-peluqueria-organica-las-canas--inspiration-a6ed953d20ce4b9187bab6e161c39e-booksy.jpeg?size=360x360" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

