import { Link } from 'react-router-dom'
import PageHero from './PageHero.jsx'

const programs = [
  {
    id: 'one-v-one',
    tag: '',
    title: '1v1 Training',
    tagline: 'The Fastest Path to Elite',
    price: '$80/h',
    description:
      'Our flagship individual training program is designed for the serious athlete who demands personalized attention. Each session is built around your specific position, weaknesses, and goals.',
    details: [
      'Technical skill deep-dives: first touch, dribbling, finishing',
      'Position-specific tactical training',
      'Strength & conditioning integration',
      'Video analysis sessions (monthly)',
      'Bi-weekly progress reports',
      'Direct coach access via messaging',
    ],
    ideal: 'Ages 9–19 | All skill levels',
    cta: 'Book 1v1',
    accent: 'gold',
  },
  {
    id: 'small-group',
    tag: '',
    title: 'Small Group Training',
    tagline: 'Compete Together. Grow Together.',
    price: '$50/session',
    description:
      'Train alongside 4–5 athletes of similar ability in structured, high-intensity sessions that build tactical intelligence, game-reading skills, and competitive edge.',
    details: [
      'Max 8 athletes per group (skill-matched)',
      'Tactical drills, rondos, and game scenarios',
      'Competitive small-sided matches',
      'Positional play and shape work',
      'Monthly fitness assessments',
      'Monthly group film review',
    ],
    ideal: 'Ages 9–19 | Intermediate to Advanced',
    cta: 'Book Group Session',
    accent: 'turf',
  },
]

const ACCENT = {
  gold: {
    border: 'border-gold/30',
    tag: 'text-gold',
    bg: 'bg-gold/5',
    dot: 'bg-gold',
    btn: 'btn-primary',
    line: 'bg-gold',
  },
  turf: {
    border: 'border-turf/30',
    tag: 'text-turf-light',
    bg: 'bg-turf/5',
    dot: 'bg-turf-light',
    btn:
      'btn-outline border-turf-light text-turf-light hover:bg-turf-light hover:text-pitch-black',
    line: 'bg-turf-light',
  },
}

export default function Programs() {
  return (
    <div>
      <PageHero
        label="Programs"
        title={
          <>
            OUR
            <br />
            <span className="text-gradient-gold">PROGRAMS</span>
          </>
        }
        subtitle="Three pathways. One goal — make you the best athlete you can be."
      />

      <section className="py-20 bg-pitch-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          {programs.map((p) => {
            const A = ACCENT[p.accent]
            return (
              <div
                key={p.id}
                className={`border ${A.border} bg-pitch-card overflow-hidden group hover:shadow-[0_16px_64px_rgba(0,0,0,0.5)] transition-all duration-500`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div
                    className={`${A.bg} border-r border-pitch-border p-8 lg:p-12 flex flex-col justify-between`}
                  >
                    <div>
                      <div
                        className={`font-display text-7xl ${A.tag} opacity-20 leading-none mb-6`}
                      >
                        {p.tag}
                      </div>
                      <h2 className="font-display text-4xl text-white mb-2">
                        {p.title}
                      </h2>
                      <div
                        className={`font-heading tracking-wider uppercase text-xs ${A.tag} mb-6`}
                      >
                        {p.tagline}
                      </div>
                      <div className={`w-12 h-px ${A.line} mb-6`} />
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {p.description}
                      </p>
                    </div>

                    <div className="mt-8">
                      <div className="text-gray-600 text-xs font-heading tracking-wider uppercase mb-1">
                        Cost
                      </div>
                      <div className={`font-heading text-xl ${A.tag}`}>
                        {p.price}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-between">
                    <div>
                      <div className="text-gray-600 text-xs font-heading tracking-widest uppercase mb-4">
                        What's Included
                      </div>

                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                        {p.details.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-3 text-sm text-gray-300"
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${A.dot} mt-1.5 flex-shrink-0`}
                            />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-pitch-border">
                      <div>
                        <div className="text-gray-600 text-xs font-heading tracking-wider uppercase mb-1">
                          Ideal For
                        </div>
                        <div className="text-gray-300 text-sm">{p.ideal}</div>
                      </div>

                      <Link
                        to="/book"
                        className={`btn-primary text-xs flex-shrink-0 ${
                          p.accent === 'turf'
                            ? 'bg-turf-light text-pitch-black hover:bg-turf hover:shadow-[0_0_24px_rgba(64,145,108,0.4)]'
                            : ''
                        }`}
                      >
                        {p.cta}
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="py-20 bg-pitch-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center gap-3 mb-3 justify-center">
            <div className="w-8 h-px bg-gold" />
            <span className="section-label">Questions?</span>
          </div>

          <h2 className="display-heading text-4xl md:text-5xl mb-4">
            NOT SURE WHERE TO START?
          </h2>

          <p className="text-gray-400 mb-8">
            We'll match you with the right program for your age, skill level, and goals.
            Book a free 15-minute discovery call.
          </p>

          <Link to="/contact" className="btn-outline">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
