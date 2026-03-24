import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Programs from './pages/Programs'
import Camps from './pages/Camps'
import Coaches from './pages/Coaches'
import Book from './pages/Book'
import About from './pages/About'
import Contact from './pages/Contact'
import PathToCollege from './pages/PathToCollege'
import Partners from './pages/Partners'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-pitch-black">
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
