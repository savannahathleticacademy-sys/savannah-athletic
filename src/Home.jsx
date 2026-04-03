import { Link } from 'react-router-dom'

const stats = [
  { number: '70+', label: 'Athletes Developed' },
  { number: '5+', label: 'College Placements' },
  { number: '2', label: 'Elite Coaches' },
  { number: '2', label: 'Years Building' },
]

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: '1 on 1 Performance Training',
    description:
      'Personalized sessions built around your position, technical level, and development goals.',
    link: '/programs',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Small Group Sessions',
    description:
      'High-intensity group training designed to sharpen decision-making, speed of play, and competitiveness.',
    link: '/programs',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8zm0 0V4m0 11v5m8-8h-4M8 12H4m13.657 5.657l-2.829-2.829M9.172 9.172 6.343 6.343m11.314 0-2.829 2.829M9.172 14.828l-2.829 2.829" />
      </svg>
    ),
    title: 'College Pathway',
    description:
      'A structured pathway for serious players seeking guidance, exposure, and support in the recruiting process.',
    link: '/college-pathway',
  },
]

const process = [
  {
    step: '01',
    title: 'Assess',
    text: 'We evaluate the athlete, identify priorities, and build a development plan that fits their level and goals.',
  },
  {
    step: '02',
    title: 'Develop',
    text: 'We train with purpose — combining technical detail, game understanding, physical preparation, and confidence.',
  },
  {
    step: '03',
    title: 'Advance',
    text: 'We help players take the next step, whether that means better performance, more exposure, or college opportunities.',
  },
]

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-skill-black">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(125,211,252,1) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,1) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />

        <div className="absolute inset-0 bg-grain-texture opacity-[0.06] pointer-events-none" />
        <div className="absolute -top-24 right-[-10%] w-[420px] h-[420px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[-80px] left-[-8%] w-[320px] h-[320px] rounded-full bg-accent-green/10 blur-3xl" />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="font-display text-[18vw] text-white/[0.03] leading-none select-none whitespace-nowrap uppercase">
            SKILL MILL
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-24 min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            <div>
              <div className="flex items-center gap-3 mb-6 animate-fade-up">
                <div className="w-10 h-px bg-primary" />
                <span className="section-label">Technical. Speed. Performance.</span>
              </div>

              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-[8.5rem] text-text-main leading-[0.92] mb-6 animate-fade-up delay-100 uppercase">
                BUILD YOUR
                <br />
                <span className="text-primary">GAME</span>
              </h1>

              <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 animate-fade-up delay-200">
                Skill Mill Soccer delivers high-performance training in Savannah for players who want
                to improve technically, move faster, and compete at a higher level.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
                <Link to="/book" className="btn-primary justify-center sm:justify-start">
                  Book Session
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <Link to="/college-pathway" className="btn-outline justify-center sm:justify-start">
                  Explore College Pathway
                </Link>
              </div>
            </div>

            <div className="animate-fade-up delay-400">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-skill-card/90 border border-skill-border backdrop-blur-sm p-6 md:p-7 rounded-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="stat-number text-4xl md:text-5xl">{stat.number}</div>
                    <div className="text-slate-400 text-xs md:text-sm font-heading tracking-[0.18em] uppercase mt-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-skill-border bg-skill-card/80 backdrop-blur-sm p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-accent-green" />
                  <span className="text-accent-green text-xs font-heading tracking-[0.22em] uppercase">
                    Athlete Development Focus
                  </span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  We train with intention — combining technical detail, game awareness,
                  speed, strength, and the mentality needed to perform with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24 bg-skill-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-px bg-primary" />
            <span className="section-label">What We Offer</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <h2 className="display-heading text-5xl md:text-6xl uppercase">
                PROGRAMS BUILT TO DEVELOP PLAYERS
              </h2>
            </div>
            <div className="max-w-xl text-text-muted">
              From individualized training to recruiting support, every program is built to help athletes grow with structure and purpose.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Link
                key={feature.title}
                to={feature.link}
                className="group rounded-2xl border border-skill-border bg-skill-card p-7 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl border border-primary/30 bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                  {feature.icon}
                </div>

                <h3 className="font-heading text-2xl tracking-wide text-text-main mb-3">
                  {feature.title}
                </h3>

                <p className="text-text-muted text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>

                <div className="flex items-center gap-2 text-accent-green text-xs font-heading tracking-[0.18em] uppercase">
                  Learn More
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-skill-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-px bg-accent-green" />
            <span className="section-label">How We Work</span>
          </div>

          <h2 className="display-heading text-5xl md:text-6xl mb-16 uppercase">
            A CLEAR DEVELOPMENT PROCESS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {process.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-skill-border bg-skill-card p-7 hover:border-accent-green/30 transition-all duration-300"
              >
                <div className="font-display text-5xl text-primary/25 mb-4">{item.step}</div>
                <h3 className="font-heading text-2xl tracking-wide text-text-main mb-3">{item.title}</h3>
                <div className="w-10 h-px bg-accent-green mb-4" />
                <p className="text-text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-24 bg-skill-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-px bg-primary" />
                <span className="section-label">Our Philosophy</span>
              </div>

              <h2 className="display-heading text-5xl md:text-6xl mb-6 uppercase">
                TRAINING WITH
                <br />
                <span className="text-primary">PURPOSE</span>
              </h2>

              <p className="text-text-muted leading-relaxed mb-6">
                We believe development should be intentional. Every athlete needs more
                than random drills — they need structure, feedback, competition, and
                a clear sense of progression.
              </p>

              <p className="text-text-muted leading-relaxed mb-8">
                Our environment is built to challenge players technically, sharpen them
                mentally, and prepare them to perform with confidence.
              </p>

              <Link to="/about" className="btn-outline text-sm">
                Learn About Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-skill-border bg-skill-card p-8 md:p-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-primary/20 bg-primary/10 p-5">
                    <div className="text-primary text-xs font-heading tracking-[0.18em] uppercase mb-2">Technical</div>
                    <div className="text-text-main font-heading text-xl">Detail & Precision</div>
                  </div>

                  <div className="rounded-xl border border-accent-green/20 bg-accent-green/10 p-5">
                    <div className="text-accent-green text-xs font-heading tracking-[0.18em] uppercase mb-2">Tactical</div>
                    <div className="text-text-main font-heading text-xl">Game Understanding</div>
                  </div>

                  <div className="rounded-xl border border-primary/20 bg-skill-black p-5">
                    <div className="text-primary text-xs font-heading tracking-[0.18em] uppercase mb-2">Physical</div>
                    <div className="text-text-main font-heading text-xl">Speed & Intensity</div>
                  </div>

                  <div className="rounded-xl border border-accent-green/20 bg-skill-black p-5">
                    <div className="text-accent-green text-xs font-heading tracking-[0.18em] uppercase mb-2">Mental</div>
                    <div className="text-text-main font-heading text-xl">Confidence & Focus</div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-skill-border bg-skill-black p-6">
                  <div className="text-slate-300 leading-relaxed">
                    The result is a more complete athlete — one who can think faster,
                    move better, and compete with intent.
                  </div>
                </div>
              </div>

              <div className="absolute -top-5 -right-5 w-24 h-24 rounded-2xl border border-primary/20 bg-primary/10 blur-[1px]" />
              <div className="absolute -bottom-5 -left-5 w-20 h-20 rounded-2xl border border-accent-green/20 bg-accent-green/10 blur-[1px]" />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-skill-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="rounded-3xl border border-skill-border bg-skill-card p-10 md:p-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent-green/10 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 justify-center mb-4">
                <div className="w-8 h-px bg-primary" />
                <span className="section-label">Get Started</span>
                <div className="w-8 h-px bg-accent-green" />
              </div>

              <h2 className="display-heading text-5xl md:text-6xl mb-4 uppercase">
                READY TO TAKE THE NEXT STEP?
              </h2>

              <p className="text-text-muted text-lg max-w-2xl mx-auto mb-8">
                Book a session, explore our programs, or start your pathway today.
                We’re building players with ambition.
              </p>

              <div className="flex items-center justify-center gap-4 flex-wrap">
                <Link to="/book" className="btn-primary">
                  Book Your First Session
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <Link to="/contact" className="btn-outline">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
