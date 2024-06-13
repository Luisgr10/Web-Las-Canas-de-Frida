import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './Frontend/components/Navbar/navbar';
import { Home } from './Frontend/Page/home';
import { ContactUs } from './Frontend/Page/contactUs';
import { Services } from './Frontend/Page/services';
import { Blog } from './Frontend/Page/blog';
import { Footer } from './Frontend/components/Footer/footer';



function App() {
  

  return (
    <Router>
      < NavBar/>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactanos" element={<ContactUs />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer/>
  </Router>
  )
}

export default App
