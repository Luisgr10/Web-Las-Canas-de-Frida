import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Page/home';
import { ContactUs } from './Page/contactUs';
import { Services } from './Page/services';
import { Blog } from './Page/blog';
import { NavBar } from './components/navbar';
import { Footer } from './components/footer';

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
