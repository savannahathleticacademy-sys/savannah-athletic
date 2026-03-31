import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx'
import Programs from './Programs.jsx'
import Camps from './Camps.jsx'
import Coaches from './Coaches.jsx'
import Book from './Book.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import PathToCollege from './PathToCollege.jsx'
import Partners from './Partners.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-skill-black">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/camps" element={<Camps />} />
            <Route path="/coaches" element={<Coaches />} />
            <Route path="/book" element={<Book />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/college-pathway" element={<PathToCollege />} />
            <Route path="/partners" element={<Partners />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
