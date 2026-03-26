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
    const onScroll = () => setScrolled(window.scrollY > 30)
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
          ? 'bg-pitch-black/90 backdrop-blur-xl border-b border-pitch-border shadow-[0_10px_40px_rgba(0,0,0,0.45)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-full border border-blue/40 bg-pitch-card shadow-[0_0_20px_rgba(59,130,246,0.15)]">
            <svg
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
            >
              <path
                d="M18 4 L22 14 L32 14 L24 20 L27 30 L18 24 L9 30 L12 20 L4 14 L14 14 Z"
                fill="#3B82F6"
                opacity="0.18"
                stroke="#3B82F6"
                strokeWidth="1"
                strokeLinejoin="round"
              />
              <circle cx="18" cy="18" r="4.5" fill="#22C55E" />
            </svg>
          </div>

          <div className="leading-tight">
            <div className="font-display text-text-main text-xl tracking-[0.14em] group-hover:text-blue transition-colors duration-300">
              SAVANNAH
            </div>
            <div className="font-heading text-green text-[11px] tracking-[0.34em] uppercase -mt-1">
              Athletic
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map(({ path, label }) => {
            const active = location.pathname === path

            return (
              <Link
                key={path}
                to={path}
                className={`relative font-heading text-sm tracking-[0.16em] uppercase transition-all duration-200 ${
                  active ? 'text-blue' : 'text-slate-300 hover:text-text-main'
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] rounded-full transition-all duration-300 ${
                    active
                      ? 'w-full bg-green'
                      : 'w-0 bg-blue group-hover:w-full'
                  }`}
                />
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/book" className="btn-primary text-xs px-6 py-2.5">
            Book Session
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <button
          className="lg:hidden text-slate-200 hover:text-blue transition-colors p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`block h-0.5 bg-current transition-all duration-300 origin-center ${
                mobileOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                mobileOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 origin-center ${
                mobileOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-pitch-dark/95 backdrop-blur-xl border-t border-pitch-border px-4 py-6 flex flex-col gap-1">
          {navLinks.map(({ path, label }) => {
            const active = location.pathname === path

            return (
              <Link
                key={path}
                to={path}
                className={`font-heading tracking-[0.14em] uppercase text-sm py-3 px-3 rounded-md border transition-all duration-200 ${
                  active
                    ? 'text-blue border-blue/30 bg-blue/10'
                    : 'text-slate-300 border-transparent hover:border-pitch-border hover:bg-pitch-card'
                }`}
              >
                {label}
              </Link>
            )
          })}

          <Link to="/book" className="btn-primary justify-center mt-4 text-xs">
            Book Session
          </Link>
        </div>
      </div>
    </header>
  )
}
