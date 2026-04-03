import { Link } from 'react-router-dom'
import PageHero from './PageHero.jsx'

const programs = [
  {
    id: 'one-v-one',
    title: '1 on 1 Training',
    tagline: 'Focused. Personalized. High Impact.',
    price: '$70/session',
    description:
      'Our individual training program is built for players who want highly personalized coaching. Each session is tailored to the athlete’s position, level, and development priorities.',
    details: [
      'Technical skill development',
      'Position-specific training',
      'Finishing and first-touch work',
      'Confidence and decision-making',
      'Individual feedback and progression',
      'Clear player development focus',
    ],
    ideal: 'All ages | All skill levels',
    cta: 'Book 1 on 1 Session',
    theme: 'primary',
  },
  {
    id: 'small-group',
    title: 'Small Group Training',
    tagline: 'Compete Together. Develop Faster.',
    price: '$20–$40 per player',
    description:
      'Train in a focused small-group environment that encourages competition, tactical awareness, and game-speed decision-making with players of similar level.',
    details: [
      'Small-sided competitive play',
      'Tactical drills and scenarios',
      'Higher repetition in realistic moments',
      'Improved speed of play',
      'Game understanding and communication',
      'Strong team and training intensity',
    ],
    ideal: 'All ages | All skill levels',
    cta: 'Book Group Session',
    theme: 'green',
    pricingTable: [
      { players: 2, price: '$40 per player' },
      { players: 3, price: '$30 per player' },
      { players: 4, price: '$25 per player' },
      { players: 5, price: '$20 per player' },
    ],
  },
]

const themeStyles = {
  primary: {
    panel: 'bg-primary/10 border-primary/20',
    label: 'text-primary',
    line: 'bg-primary',
    dot: 'bg-primary',
    button: 'btn-primary',
  },
  green: {
    panel: 'bg-accent-green/10 border-accent-green/20',
    label: 'text-accent-green',
    line: 'bg-accent-green',
    dot: 'bg-accent-green',
    button: 'btn-outline',
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
            <span className="text-primary">PROGRAMS</span>
          </>
        }
        subtitle="Purpose-built training options designed to help players improve, compete, and develop with confidence."
      />

      <section className="py-20 bg-skill-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          {programs.map((program) => {
            const styles = themeStyles[program.theme]

            return (
              <div
                key={program.id}
                className="rounded-3xl border border-skill-border bg-skill-card overflow-hidden hover:shadow-[0_16px_64px_rgba(0,0,0,0.45)] transition-all duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1.4fr]">
                  {/* LEFT PANEL */}
                  <div className={`p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-skill-border ${styles.panel}`}>
                    <div className="mb-8">
                      <div className={`text-xs font-heading tracking-[0.22em] uppercase mb-3 ${styles.label}`}>
                        Program
                      </div>

                      <h2 className="font-display text-4xl md:text-5xl text-text-main mb-2 leading-none uppercase">
                        {program.title}
                      </h2>

                      <div className={`font-heading tracking-[0.18em] uppercase text-xs mb-5 ${styles.label}`}>
                        {program.tagline}
                      </div>

                      <div className={`w-14 h-px ${styles.line} mb-6`} />

                      <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                        {program.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="rounded-xl border border-skill-border bg-skill-black p-4">
                        <div className="text-slate-500 text-xs font-heading tracking-[0.18em] uppercase mb-1">
                          Cost
                        </div>
                        <div className={`font-heading text-xl ${styles.label}`}>
                          {program.price}
                        </div>
                      </div>

                      <div className="rounded-xl border border-skill-border bg-skill-black p-4">
                        <div className="text-slate-500 text-xs font-heading tracking-[0.18em] uppercase mb-1">
                          Ideal For
                        </div>
                        <div className="text-slate-200 text-sm">
                          {program.ideal}
                        </div>
                      </div>
                    </div>

                    {program.pricingTable && (
                      <div className="mt-6 rounded-2xl border border-skill-border bg-skill-black overflow-hidden">
                        <div className="px-4 py-3 border-b border-skill-border">
                          <div className={`text-xs font-heading tracking-[0.18em] uppercase ${styles.label}`}>
                            Small Group Pricing
                          </div>
                        </div>

                        <div className="grid grid-cols-2 bg-white/5 text-xs font-heading tracking-[0.14em] uppercase text-slate-400">
                          <div className="px-4 py-3 border-r border-skill-border">
                            Players
                          </div>
                          <div className="px-4 py-3">
                            Price
                          </div>
                        </div>

                        {program.pricingTable.map((item, index) => (
                          <div
                            key={item.players}
                            className={`grid grid-cols-2 text-sm ${
                              index !== 0 ? 'border-t border-skill-border' : ''
                            }`}
                          >
                            <div className="px-4 py-3 border-r border-skill-border text-slate-300">
                              {item.players} Players
                            </div>
                            <div className="px-4 py-3 text-slate-200">
                              {item.price}
                            </div>
                          </div>
                        ))}

                        <div className="px-4 py-3 border-t border-skill-border bg-white/5">
                          <p className="text-xs text-slate-400 leading-relaxed">
                            Small group sessions require a minimum of 2 players and allow a maximum of 5 players.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* RIGHT PANEL */}
                  <div className="p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <div className="text-slate-500 text-xs font-heading tracking-[0.2em] uppercase mb-4">
                        What’s Included
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                        {program.details.map((detail) => (
                          <div
                            key={detail}
                            className="rounded-xl border border-skill-border bg-skill-black p-4"
                          >
                            <div className="flex items-start gap-3">
                              <span className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${styles.dot}`} />
                              <span className="text-slate-300 text-sm leading-relaxed">
                                {detail}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-skill-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <div className="text-slate-500 text-xs font-heading tracking-[0.18em] uppercase mb-1">
                          Next Step
                        </div>
                        <div className="text-slate-300 text-sm">
                          Book a session and start building your development plan.
                        </div>
                      </div>

                      <Link
                        to="/book"
                        className={`${styles.button} text-xs flex-shrink-0`}
                      >
                        {program.cta}
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

      <section className="py-20 bg-skill-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center gap-3 mb-3 justify-center">
            <div className="w-8 h-px bg-primary" />
            <span className="section-label">Need Help Choosing?</span>
            <div className="w-8 h-px bg-accent-green" />
          </div>

          <h2 className="display-heading text-4xl md:text-5xl mb-4 uppercase">
            NOT SURE WHERE TO START?
          </h2>

          <p className="text-text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
            We’ll help match you with the right training option based on age,
            experience, goals, and the type of support you need most.
          </p>

          <Link to="/contact" className="btn-outline">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
