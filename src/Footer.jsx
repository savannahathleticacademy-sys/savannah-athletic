import { Link } from 'react-router-dom'

function InstagramIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5A3.75 3.75 0 0020 16.25v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.75-.9a1.15 1.15 0 110 2.3 1.15 1.15 0 010-2.3z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-skill-dark border-t border-skill-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-display text-text-main text-3xl tracking-[0.18em] mb-1 uppercase">
              SKILL MILL
            </div>
            <div className="font-heading text-accent-green text-xs tracking-[0.4em] uppercase mb-4">
              Soccer
            </div>

            <p className="text-text-muted text-sm leading-relaxed max-w-sm">
              High-performance soccer training in Savannah, GA. Focused on technical
              development, speed, strength, and helping players improve in a real training environment.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/skillmill.soccer/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg border border-skill-border flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              <a
                href="mailto:skillmillsoccer@gmail.com"
                className="w-10 h-10 rounded-lg border border-skill-border flex items-center justify-center text-slate-400 hover:text-accent-green hover:border-accent-green transition-all duration-200"
                aria-label="Email"
              >
                📧
              </a>

              <a
                href="tel:+19127241861"
                className="w-10 h-10 rounded-lg border border-skill-border flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all duration-200"
                aria-label="Phone"
              >
                📱
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading tracking-[0.22em] uppercase text-xs text-primary mb-5">
              Navigate
            </h4>

            <ul className="space-y-3">
              {[
                ['/', 'Home'],
                ['/programs', 'Programs'],
                ['/camps', 'Camps'],
                ['/coaches', 'Coaches'],
                ['/college-pathway', 'College Pathway'],
                ['/about', 'About'],
                ['/contact', 'Contact'],
              ].map(([path, label]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-text-muted hover:text-text-main text-sm transition-colors duration-200 font-body"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading tracking-[0.22em] uppercase text-xs text-accent-green mb-5">
              Contact
            </h4>

            <ul className="space-y-3 text-sm text-text-muted">
              <li className="flex items-start gap-2">
                📍 Savannah, GA
              </li>

              <li className="flex items-start gap-2">
                📧
                <a
                  href="mailto:skillmillsoccer@gmail.com"
                  className="hover:text-text-main transition-colors duration-200 break-all"
                >
                  skillmillsoccer@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-2">
                📱
                <a
                  href="tel:+19127241861"
                  className="hover:text-text-main transition-colors duration-200"
                >
                  (+1) 912-724-1861
                </a>
              </li>

              <li className="flex items-start gap-2">
                <InstagramIcon className="w-4 h-4 mt-[2px]" />
                <a
                  href="https://www.instagram.com/skillmill.soccer/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-text-main transition-colors duration-200"
                >
                  @skillmill.soccer
                </a>
              </li>
            </ul>

            <Link to="/book" className="btn-primary text-xs mt-6 inline-flex">
              Book a Session
            </Link>
          </div>
        </div>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Skill Mill Soccer. All rights reserved.</p>
          <p className="font-heading tracking-[0.2em] uppercase">Savannah, Georgia</p>
        </div>
      </div>
    </footer>
  )
}
