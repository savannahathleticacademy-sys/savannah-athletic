import { Link } from 'react-router-dom'
import PageHero from './PageHero.jsx'

const pillars = [
  {
    number: '01',
    title: 'Technical Mastery',
    desc: 'Ball control, passing, first touch, dribbling, and finishing — the core technical tools every high-level player must sharpen.',
  },
  {
    number: '02',
    title: 'Tactical Intelligence',
    desc: 'Understanding space, reading the game, and making strong decisions under pressure are central to how we train players.',
  },
  {
    number: '03',
    title: 'Physical Development',
    desc: 'Speed, balance, strength, endurance, and movement quality are all developed with soccer-specific intent.',
  },
  {
    number: '04',
    title: 'Mental Strength',
    desc: 'Confidence, focus, resilience, and composure are critical to performance — especially when the game gets demanding.',
  },
]

const milestones = [
  { year: '2025', event: 'Savannah Athletic founded by Zack Hargreaves & Ignacio Gallego' },
  { year: 'December 2025', event: 'Secured first training base in Savannah — Transform Savannah' },
  { year: 'January 2026', event: 'Launched College Pathway Program — supporting aspiring college athletes' },
  { year: 'February 2026', event: 'Announced Summer Elite Academy (150+ projected athletes)' },
  { year: 'March 2026', event: 'Expanded coaching staff and added specialist support' },
  { year: 'April 2026', event: 'More updates coming soon...' },
]

export default function About() {
  return (
    <div>
      <PageHero
        label="About Us"
        title={
          <>
            OUR
            <br />
            <span className="text-gradient-gold">STORY</span>
          </>
        }
        subtitle="Built in Savannah with a clear mission: develop better athletes through structure, purpose, and high-performance coaching."
      />

      {/* MISSION */}
      <section className="py-24 bg-pitch-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-px bg-blue" />
                <span className="section-label">Our Mission</span>
              </div>

              <h2 className="display-heading text-5xl md:text-6xl mb-6">
                DEVELOP THE
                <br />
                WHOLE
                <br />
                <span className="text-gradient-gold">ATHLETE.</span>
              </h2>

              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  Savannah Athletic was created from the belief that serious soccer players
                  in Savannah deserve access to focused, high-quality development.
                </p>
                <p>
                  What started with a simple vision has grown into a modern training environment
                  built around player growth, competitive standards, and real progression.
                </p>
                <p>
                  We do not train without purpose. Every session is built to improve players
                  technically, tactically, physically, and mentally — while giving them a clearer
                  pathway toward the next stage of their journey.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-pitch-border bg-pitch-card p-8 md:p-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue/10 via-transparent to-green/10 pointer-events-none" />
                <div className="absolute top-0 left-0 w-14 h-14 border-t border-l border-blue/30" />
                <div className="absolute bottom-0 right-0 w-14 h-14 border-b border-r border-green/30" />

                <div className="font-display text-8xl text-blue/10 leading-none absolute top-4 left-6 select-none">
                  "
                </div>

                <p className="font-heading text-2xl md:text-3xl text-white leading-snug tracking-wide relative z-10 pt-6">
                  We develop complete athletes — not just better players.
                </p>

                <div className="mt-6 pt-6 border-t border-pitch-border relative z-10">
                  <div className="font-heading text-blue text-xs tracking-[0.3em] uppercase">
                    Nacho Gallego
                  </div>
                  <div className="text-slate-500 text-xs mt-1">
                    Founder & Coach, Savannah Athletic
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24 bg-pitch-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-px bg-green" />
            <span className="section-label">Our Methodology</span>
          </div>

          <h2 className="display-heading text-5xl md:text-6xl mb-16">
            FOUR PILLARS
            <br />
            OF DEVELOPMENT
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.number}
                className="rounded-2xl border border-pitch-border p-6 bg-pitch-card hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`font-display text-5xl mb-4 ${index % 2 === 0 ? 'text-blue/25' : 'text-green/25'}`}>
                  {pillar.number}
                </div>

                <h3 className="font-heading text-lg text-white tracking-wide mb-3">
                  {pillar.title}
                </h3>

                <div className={`w-8 h-px mb-4 ${index % 2 === 0 ? 'bg-blue' : 'bg-green'}`} />

                <p className="text-slate-400 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="py-24 bg-pitch-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-px bg-blue" />
            <span className="section-label">Our Journey</span>
          </div>

          <h2 className="display-heading text-5xl md:text-6xl mb-16">
            THE MILESTONES
          </h2>

          <div className="relative">
            <div className="absolute left-28 top-0 bottom-0 w-px bg-gradient-to-b from-blue via-green/40 to-transparent hidden sm:block" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex items-start gap-8">
                  <div className="flex-shrink-0 text-right w-28 hidden sm:block">
                    <span className={`font-display text-xl ${index % 2 === 0 ? 'text-blue' : 'text-green'}`}>
                      {milestone.year}
                    </span>
                  </div>

                  <div className="relative hidden sm:flex items-center justify-center flex-shrink-0 mt-1">
                    <div className={`w-3 h-3 border-2 border-pitch-black z-10 ${index % 2 === 0 ? 'bg-blue' : 'bg-green'}`} />
                  </div>

                  <div className="flex-1 pb-4 rounded-xl border border-pitch-border bg-pitch-card px-5 py-4">
                    <div className={`sm:hidden font-display text-lg mb-1 ${index % 2 === 0 ? 'text-blue' : 'text-green'}`}>
                      {milestone.year}
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {milestone.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-pitch-dark border-t border-pitch-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="w-8 h-px bg-blue" />
            <span className="section-label">Join the Journey</span>
            <div className="w-8 h-px bg-green" />
          </div>

          <h2 className="display-heading text-4xl md:text-5xl mb-4">
            BE PART OF
            <br />
            THE STORY
          </h2>

          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Join the athletes and families choosing a more intentional pathway to development.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/book" className="btn-primary">
              Book a Session
            </Link>
            <Link to="/contact" className="btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
