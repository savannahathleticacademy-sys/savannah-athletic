import { Link } from 'react-router-dom'

const stats = [
  { number: '50+', label: 'Athletes Trained' },
  { number: '10+', label: 'College Placements' },
  { number: '2', label: 'Elite Coaches' },
  { number: '2', label: 'Years of Excellence' },
]

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: '1v1 Elite Training',
    description: 'Personalized coaching that addresses your specific weaknesses, amplifies your strengths, and accelerates your development.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Small Group Sessions',
    description: 'High-intensity small group training that builds tactical intelligence, competitive edge, and team chemistry.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'College Pathway',
    description: 'A complete roadmap from player evaluation to college recruitment — we connect your talent with the right opportunities.'
  },
]

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Diagonal accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden pointer-events-none">
          <div
            className="absolute top-0 right-0 w-full h-full opacity-10"
            style={{ background: 'linear-gradient(135deg, transparent 40%, rgba(212,175,55,0.15) 100%)' }}
          />
        </div>

        {/* Large background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="font-display text-[20vw] text-white/[0.02] leading-none select-none whitespace-nowrap">
            ATHLETIC
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32 flex flex-col lg:flex-row items-center gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start animate-fade-up">
              <div className="w-8 h-px bg-gold" />
              <span className="section-label">Savannah's Premier Soccer Academy</span>
            </div>

            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-none mb-6 animate-fade-up delay-100">
              TRAIN LIKE<br />
              <span className="text-gradient-gold">A PRO.</span><br />
              COMPETE AT<br />
              THE NEXT LEVEL.
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-fade-up delay-200">
              Elite Soccer Development in Savannah with a Pathway to College & Professional Opportunities
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-up delay-300">
              <Link to="/book" className="btn-primary text-sm w-full sm:w-auto justify-center">
                Book Session
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link to="/programs" className="btn-outline text-sm w-full sm:w-auto justify-center">
                Join Now
              </Link>
            </div>
          </div>

          {/* Right — stat cards */}
          <div className="flex-shrink-0 w-full lg:w-auto animate-fade-up delay-400">
            <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto lg:mx-0">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="bg-pitch-card/80 border border-pitch-border backdrop-blur-sm p-5 text-center hover:border-gold/40 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                >
                  <div className="stat-number text-4xl">{stat.number}</div>
                  <div className="text-gray-500 text-xs font-heading tracking-wider uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="gold-line" />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent mx-auto mb-1" />
          <svg className="w-4 h-4 text-gold/60 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-24 bg-pitch-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-gold" />
            <span className="section-label">What We Offer</span>
          </div>
          <h2 className="display-heading text-5xl md:text-6xl mb-16">OUR PROGRAMS</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={f.title} className="card-dark group cursor-default" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold mb-5 group-hover:bg-gold/10 transition-colors duration-300">
                  {f.icon}
                </div>
                <h3 className="font-heading text-xl tracking-wide text-white mb-3">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
                <div className="mt-5 flex items-center gap-2 text-gold text-xs font-heading tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gold opacity-[0.04]" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(212,175,55,0.06) 0%, transparent 50%, rgba(212,175,55,0.06) 100%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="font-display text-5xl md:text-7xl text-white mb-4">
            READY TO LEVEL UP?
          </div>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Book your first session today and discover what elite training feels like.
          </p>
          <div className="flex items-center gap-4 justify-center flex-wrap">
            <Link to="/book" className="btn-primary">
              Book Your First Session
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link to="/camps" className="btn-outline">
              View Camps
            </Link>
          </div>
        </div>
      </section>

      {/* ACADEMY PHILOSOPHY TEASER */}
      <section className="py-24 bg-pitch-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px bg-gold" />
                <span className="section-label">Our Philosophy</span>
              </div>
              <h2 className="display-heading text-5xl md:text-6xl mb-6">
                MORE THAN<br />
                <span className="text-gradient-gold">JUST SOCCER.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                At Savannah Athletic, we develop complete athletes. Our methodology blends technical mastery, tactical intelligence, physical conditioning, and mental fortitude — the four pillars of elite performance.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Every session is intentional. Every drill has purpose. And every athlete leaves with a clearer picture of who they're becoming.
              </p>
              <Link to="/about" className="btn-outline text-sm">
                Our Story
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              {/* Decorative pitch graphic */}
              <div className="aspect-square max-w-sm mx-auto relative">
                <div className="absolute inset-0 border border-gold/20 rotate-3" />
                <div className="absolute inset-0 border border-gold/10 -rotate-3" />
                <div className="absolute inset-8 border border-gold/20 flex items-center justify-center">
                  <div className="text-center">
                    <svg viewBox="0 0 120 120" className="w-32 h-32 mx-auto text-gold/30" fill="none" stroke="currentColor" strokeWidth="1">
                      <circle cx="60" cy="60" r="55" />
                      <circle cx="60" cy="60" r="15" />
                      <line x1="5" y1="60" x2="115" y2="60" />
                      <rect x="5" y="35" width="25" height="50" />
                      <rect x="90" y="35" width="25" height="50" />
                    </svg>
                    <div className="font-display text-2xl text-gold/50 tracking-widest mt-2">THE PITCH</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/5 border border-gold/20" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-turf/10 border border-turf/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COACHES TEASER */}
      <section className="py-24 bg-pitch-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center gap-3 mb-3 justify-center">
            <div className="w-8 h-px bg-gold" />
            <span className="section-label">World-Class Staff</span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="display-heading text-5xl md:text-6xl mb-4">MEET THE COACHES</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10">
            Our coaching staff brings professional experience, UEFA credentials, and a deep commitment to athlete development.
          </p>
          <Link to="/coaches" className="btn-primary">
            View Coaching Staff
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
