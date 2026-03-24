import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/programs', label: 'Programs' },
  { path: '/coaches', label: 'Our Coaches' },
  { path: '/camps', label: 'Camps' },
  { path: '/college-pathway', label: 'College Pathway' },
  { path: '/partners', label: 'Partners' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-pitch-black/95 backdrop-blur-md border-b border-pitch-border shadow-[0_4px_32px_rgba(0,0,0,0.6)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 flex-shrink-0">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="18" cy="18" r="17" stroke="#D4AF37" strokeWidth="1.5" />
              <path d="M18 4 L22 14 L32 14 L24 20 L27 30 L18 24 L9 30 L12 20 L4 14 L14 14 Z" fill="#D4AF37" opacity="0.15" stroke="#D4AF37" strokeWidth="1" strokeLinejoin="round" />
              <circle cx="18" cy="18" r="4" fill="#D4AF37" />
            </svg>
          </div>
          <div className="leading-tight">
            <div className="font-display text-white text-xl tracking-wider group-hover:text-gold transition-colors duration-300">SAVANNAH</div>
            <div className="font-heading text-gold text-xs tracking-[0.3em] uppercase -mt-1">Athletic</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`font-heading text-sm tracking-wider uppercase transition-all duration-200 relative group ${
                location.pathname === path ? 'text-gold' : 'text-gray-400 hover:text-white'
              }`}
            >
              {label}
              <span className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                location.pathname === path ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/book" className="btn-primary text-xs px-6 py-2.5">
            Book Session
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-gray-300 hover:text-gold transition-colors p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 bg-current transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-400 overflow-hidden ${mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-pitch-dark border-t border-pitch-border px-4 py-6 flex flex-col gap-1">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`font-heading tracking-wider uppercase text-sm py-3 px-2 border-b border-pitch-border/50 transition-colors duration-200 ${
                location.pathname === path ? 'text-gold' : 'text-gray-400'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link to="/book" className="btn-primary justify-center mt-4 text-xs">
            Book Session
          </Link>
        </div>
      </div>
    </header>
  )
}
