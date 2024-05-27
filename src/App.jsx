import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Page/home';
import { ContactUs } from './Page/contactUs';
import { Services } from './Page/services';
import { Blog } from './Page/blog';
import { Navbar } from 'react-bootstrap';

function App() {
  

  return (
    <Router>
      < Navbar/>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactanos" element={<ContactUs />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
  </Router>
  )
}

export default App
