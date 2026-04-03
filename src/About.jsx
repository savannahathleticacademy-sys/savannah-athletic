import { Link } from 'react-router-dom'
import PageHero from './PageHero.jsx'

const pillars = [
  {
    number: '01',
    title: 'Technical Detail',
    desc: 'First touch, ball mastery, passing, dribbling, finishing, and repetition under pressure — the details that separate better players.',
  },
  {
    number: '02',
    title: 'Game Awareness',
    desc: 'We train players to scan, read situations, understand space, and make sharper decisions at speed in realistic football actions.',
  },
  {
    number: '03',
    title: 'Speed & Strength',
    desc: 'Explosive movement, coordination, balance, strength, and athletic development are built with football-specific intent.',
  },
  {
    number: '04',
    title: 'Competitive Mindset',
    desc: 'Confidence, focus, discipline, and resilience are trained alongside performance so players can compete with purpose.',
  },
]

const milestones = [
  { year: '2025', event: 'Skill Mill Soccer launched by Zack Hargreaves & Ignacio Gallego' },
  { year: 'December 2025', event: 'Established training presence in Savannah and began building a clear player development model' },
  { year: 'January 2026', event: 'Expanded technical training and small-group sessions for ambitious players' },
  { year: 'February 2026', event: 'Added a more complete performance approach with speed, strength, and athletic development' },
  { year: 'March 2026', event: 'Continued strengthening the brand, coaching structure, and training opportunities across Savannah' },
  { year: 'June 2026', event: 'Scheduled our first College Showcase in Savannah, creating a new opportunity for players to gain exposure in front of college programs' },
  { year: 'July 2026', event: 'Scheduled our Summer Camp in Savannah, expanding our player development offering through an intensive seasonal experience' },
]

export default function About() {
  return (
    <div>
      <PageHero
        label="About"
        title={
          <>
            OUR
            <br />
            <span className="text-primary">STORY</span>
          </>
        }
        subtitle="Built to help players improve with real training, clear intention, and a high-performance environment."
      />

      {/* MISSION */}
      <section className="py-24 bg-skill-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-px bg-primary" />
                <span className="section-label">Our Mission</span>
              </div>

              <h2 className="display-heading text-5xl md:text-6xl mb-6 uppercase">
                BUILD THE
                <br />
                COMPLETE
                <br />
                <span className="text-primary">PLAYER.</span>
              </h2>

              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Skill Mill Soccer was built for players who want more than casual training.
                  We created an environment where every session has purpose, intensity, and a clear objective.
                </p>
                <p>
                  Our focus is simple: improve technical quality, movement, speed, strength,
                  and confidence through work that translates to the game.
                </p>
                <p>
                  We do not believe in empty sessions. We believe in repetition, detail,
                  competitive standards, and helping players develop habits that raise their level.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-skill-border bg-skill-card p-8 md:p-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
                <div className="absolute top-0 left-0 w-14 h-14 border-t border-l border-primary/30" />
                <div className="absolute bottom-0 right-0 w-14 h-14 border-b border-r border-accent-green/30" />

                <div className="font-display text-8xl text-primary/10 leading-none absolute top-4 left-6 select-none">
                  "
                </div>

                <p className="font-heading text-2xl md:text-3xl text-text-main leading-snug tracking-wide relative z-10 pt-6 uppercase">
                  We build sharper, faster, more complete players.
                </p>

                <div className="mt-6 pt-6 border-t border-skill-border relative z-10">
                  <div className="font-heading text-primary text-xs tracking-[0.3em] uppercase">
                    Ignacio Gallego
                  </div>
                  <div className="text-text-muted text-xs mt-1 uppercase tracking-[0.2em]">
                    Co-Founder & Coach, Skill Mill Soccer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24 bg-skill-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-px bg-accent-green" />
            <span className="section-label">Our Methodology</span>
          </div>

          <h2 className="display-heading text-5xl md:text-6xl mb-16 uppercase">
            FOUR PILLARS
            <br />
            OF DEVELOPMENT
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.number}
                className="rounded-2xl border border-skill-border p-6 bg-skill-card hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`font-display text-5xl mb-4 ${
                    index % 2 === 0 ? 'text-primary/25' : 'text-accent-green/25'
                  }`}
                >
                  {pillar.number}
                </div>

                <h3 className="font-heading text-lg text-text-main tracking-wide mb-3 uppercase">
                  {pillar.title}
                </h3>

                <div
                  className={`w-8 h-px mb-4 ${
                    index % 2 === 0 ? 'bg-primary' : 'bg-accent-green'
                  }`}
                />

                <p className="text-text-muted text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="py-24 bg-skill-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-px bg-primary" />
            <span className="section-label">Our Journey</span>
          </div>

          <h2 className="display-heading text-5xl md:text-6xl mb-16 uppercase">
            THE MILESTONES
          </h2>

          <div className="relative">
            <div className="absolute left-28 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent-green/40 to-transparent hidden sm:block" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex items-start gap-8">
                  <div className="flex-shrink-0 text-right w-28 hidden sm:block">
                    <span
                      className={`font-display text-xl ${
                        index % 2 === 0 ? 'text-primary' : 'text-accent-green'
                      }`}
                    >
                      {milestone.year}
                    </span>
                  </div>

                  <div className="relative hidden sm:flex items-center justify-center flex-shrink-0 mt-1">
                    <div
                      className={`w-3 h-3 border-2 border-skill-black z-10 ${
                        index % 2 === 0 ? 'bg-primary' : 'bg-accent-green'
                      }`}
                    />
                  </div>

                  <div className="flex-1 pb-4 rounded-xl border border-skill-border bg-skill-card px-5 py-4">
                    <div
                      className={`sm:hidden font-display text-lg mb-1 ${
                        index % 2 === 0 ? 'text-primary' : 'text-accent-green'
                      }`}
                    >
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
      <section className="py-20 bg-skill-dark border-t border-skill-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="section-label">Train With Us</span>
            <div className="w-8 h-px bg-accent-green" />
          </div>

          <h2 className="display-heading text-4xl md:text-5xl mb-4 uppercase">
            READY TO
            <br />
            LEVEL UP?
          </h2>

          <p className="text-text-muted mb-8 max-w-2xl mx-auto">
            Join Skill Mill Soccer and train in an environment built for real player development.
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
