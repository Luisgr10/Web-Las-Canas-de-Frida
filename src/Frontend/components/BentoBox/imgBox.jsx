import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../BentoBox/imgBox.css'
import alberto from '../../assets/image/Alberto.png'
import home1 from '../../assets/image/home1.jpg'
import home2 from '../../assets/image/home7.jpg'
import home3 from '../../assets/image/home4.jpg'


export const ImgBox = () => {
  return (
    <div className="container">
    <div className="area-1"><img src={home1}></img></div>
    <div className="area-2"><img src={alberto}></img></div>
    <div className="area-3"><img src={home2}></img></div>
    <div className="area-4"><img src={home3}></img></div>
    
  </div>
  )
}

