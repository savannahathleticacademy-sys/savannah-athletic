import { Link } from 'react-router-dom'
import PageHero from './PageHero.jsx'

const pillars = [
  { number: '01', title: 'Technical Mastery', desc: 'Ball control, passing, first touch, dribbling, and finishing — the fundamental tools of an elite player, honed to precision.' },
  { number: '02', title: 'Tactical Intelligence', desc: 'Reading the game, understanding position, making decisions under pressure. We train minds as much as bodies.' },
  { number: '03', title: 'Physical Dominance', desc: 'Speed, power, endurance, agility. Our conditioning program is built for soccer — not the weight room.' },
  { number: '04', title: 'Mental Fortitude', desc: 'Confidence, resilience, composure. The athletes we develop are unshakeable when it matters most.' },
]

const milestones = [
  { year: '2019', event: 'Savannah Athletic founded by Marcus Johnson' },
  { year: '2020', event: 'Expanded to first full training facility in Savannah' },
  { year: '2021', event: 'Launched College Pathway Program — 4 players placed in first year' },
  { year: '2022', event: 'Introduced Summer Elite Academy. 150+ campers in first season.' },
  { year: '2023', event: 'Grew coaching staff; added GK and S&C specialists' },
  { year: '2024', event: '200+ athletes served. 15+ college placements. Regional recognition.' },
]

export default function About() {
  return (
    <div>
      <PageHero
        label="About Us"
        title={<>OUR<br /><span className="text-gradient-gold">STORY</span></>}
        subtitle="Built in Savannah. Built for champions."
      />

      <section className="py-24 bg-pitch-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-gold" />
                <span className="section-label">Our Mission</span>
              </div>
              <h2 className="display-heading text-5xl md:text-6xl mb-6">
                DEVELOP THE<br />
                WHOLE<br />
                <span className="text-gradient-gold">ATHLETE.</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Savannah Athletic was founded on a single belief: that every serious soccer player in Savannah deserves access to the kind of elite development that's usually reserved for big-city academies.
                </p>
                <p>
                  We started with a few cones, a pitch, and a commitment. Today we're Savannah's premier soccer development program — with coaches who've played professionally, a track record of college placements, and a community of athletes who show up every day to get better.
                </p>
                <p>
                  We don't cut corners. We don't just run drills. We develop players — technically, tactically, physically, and mentally — and we give them a clear pathway to the next level, whether that's high school, college, or beyond.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="border border-gold/20 p-10 relative bg-pitch-card">
                <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-gold" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-gold" />
                <div className="font-display text-8xl text-gold/10 leading-none absolute top-4 left-6 select-none">"</div>
                <p className="font-heading text-2xl md:text-3xl text-white leading-snug tracking-wide relative z-10 pt-6">
                  We develop complete athletes — not just better players.
                </p>
                <div className="mt-6 pt-6 border-t border-pitch-border">
                  <div className="font-heading text-gold text-xs tracking-[0.3em] uppercase">Nacho Gallego</div>
                  <div className="text-gray-600 text-xs mt-1">Founder & Coach, Savannah Athletic</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-pitch-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-gold" />
            <span className="section-label">Our Methodology</span>
          </div>
          <h2 className="display-heading text-5xl md:text-6xl mb-16">FOUR PILLARS<br />OF EXCELLENCE</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div key={p.number} className="border border-pitch-border p-6 bg-pitch-card hover:border-gold/30 transition-all duration-300 group">
                <div className="font-display text-5xl text-gold/20 mb-4 group-hover:text-gold/40 transition-colors duration-300">{p.number}</div>
                <h3 className="font-heading text-lg text-white tracking-wide mb-3">{p.title}</h3>
                <div className="w-8 h-px bg-gold mb-4" />
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-pitch-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-gold" />
            <span className="section-label">Our Journey</span>
          </div>
          <h2 className="display-heading text-5xl md:text-6xl mb-16">THE MILESTONES</h2>

          <div className="relative">
            <div className="absolute left-20 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/30 to-transparent hidden sm:block" />

            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="flex items-start gap-8">
                  <div className="flex-shrink-0 text-right w-16 hidden sm:block">
                    <span className="font-display text-gold text-xl">{m.year}</span>
                  </div>
                  <div className="relative hidden sm:flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-gold border-2 border-pitch-black z-10" />
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="sm:hidden font-display text-gold text-lg mb-1">{m.year}</div>
                    <p className="text-gray-300 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-pitch-dark border-t border-pitch-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="display-heading text-4xl md:text-5xl mb-4">BE PART OF<br />THE STORY.</h2>
          <p className="text-gray-400 mb-8">
            Join the athletes who chose Savannah Athletic and never looked back.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/book" className="btn-primary">Book a Session</Link>
            <Link to="/contact" className="btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
