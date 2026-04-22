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
          ? 'bg-skill-black/90 backdrop-blur-xl border-b border-skill-border shadow-[0_10px_40px_rgba(0,0,0,0.45)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logo/logo.png"
            alt="Skill Mill Soccer Logo"
            className="h-11 w-auto object-contain md:h-12"
          />

          <div className="leading-tight">
            <div className="font-display text-text-main text-xl md:text-2xl tracking-[0.1em] uppercase group-hover:text-primary transition-colors duration-300">
              SKILL MILL
            </div>
            <div className="font-heading text-accent-green text-[11px] tracking-[0.24em] uppercase -mt-1">
              Soccer
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
                className={`relative font-heading text-sm tracking-[0.14em] uppercase transition-all duration-200 ${
                  active ? 'text-primary' : 'text-slate-300 hover:text-text-main'
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] rounded-full transition-all duration-300 ${
                    active ? 'w-full bg-accent-green' : 'w-0 bg-primary'
                  }`}
                />
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://www.instagram.com/skillmillsoccer/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-xs tracking-[0.16em] uppercase text-slate-300 hover:text-primary transition-colors"
          >
            @skillmillsoccer
          </a>

          <Link to="/book" className="btn-primary text-xs px-6 py-2.5">
            Book Session
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        <button
          className="lg:hidden text-slate-200 hover:text-primary transition-colors p-2"
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
          mobileOpen ? 'max-h-[560px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-skill-dark/95 backdrop-blur-xl border-t border-skill-border px-4 py-6 flex flex-col gap-1">
          {navLinks.map(({ path, label }) => {
            const active = location.pathname === path

            return (
              <Link
                key={path}
                to={path}
                className={`font-heading tracking-[0.12em] uppercase text-sm py-3 px-3 rounded-md border transition-all duration-200 ${
                  active
                    ? 'text-primary border-primary/30 bg-primary/10'
                    : 'text-slate-300 border-transparent hover:border-skill-border hover:bg-skill-card'
                }`}
              >
                {label}
              </Link>
            )
          })}

          <a
            href="https://www.instagram.com/skillmillsoccer/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading tracking-[0.12em] uppercase text-sm py-3 px-3 rounded-md border border-transparent text-slate-300 hover:border-skill-border hover:bg-skill-card transition-all duration-200"
          >
            @skillmillsoccer
          </a>

          <Link to="/book" className="btn-primary justify-center mt-4 text-xs">
            Book Session
          </Link>
        </div>
      </div>
    </header>
  )
}
