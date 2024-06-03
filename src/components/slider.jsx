import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style/slider.css'
import alberto from '../assets/image/Alberto.png'


export const Slider = () => {
  return (
    <div className="container">
    <div className="area-1"><img src={alberto}></img></div>
    <div className="area-2"><img src={alberto}></img></div>
    <div className="area-3"><img src={alberto}></img></div>
    <div className="area-4"><img src={alberto}></img></div>
    
  </div>
  )
}

