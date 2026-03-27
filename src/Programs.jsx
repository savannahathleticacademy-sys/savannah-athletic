import { Link } from 'react-router-dom'
import PageHero from './PageHero.jsx'

const programs = [
  {
    id: 'one-v-one',
    title: '1v1 Training',
    tagline: 'Focused. Personalized. High Impact.',
    price: '$70/h',
    description:
      'Our individual training program is built for athletes who want highly personalized coaching. Each session is tailored to the player’s position, level, and development priorities.',
    details: [
      'Technical skill development',
      'Position-specific training',
      'Finishing and first-touch work',
      'Confidence and decision-making',
      'Individual feedback and progression',
      'Clear player development focus',
    ],
    ideal: 'Ages 9–19 | All skill levels',
    cta: 'Book 1v1 Session',
    theme: 'blue',
  },
  {
    id: 'small-group',
    title: 'Small Group Training',
    tagline: 'Compete Together. Develop Faster.',
    price: '$50/session',
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
    ideal: 'Ages 9–19 | All skill levels',
    cta: 'Book Group Session',
    theme: 'green',
  },
]

const themeStyles = {
  blue: {
    panel: 'bg-blue/10 border-blue/20',
    label: 'text-blue',
    line: 'bg-blue',
    dot: 'bg-blue',
    button: 'btn-primary',
  },
  green: {
    panel: 'bg-green/10 border-green/20',
    label: 'text-green',
    line: 'bg-green',
    dot: 'bg-green',
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
            <span className="text-gradient-gold">PROGRAMS</span>
          </>
        }
        subtitle="Purpose-built training pathways designed to help athletes improve, compete, and move forward with confidence."
      />

      <section className="py-20 bg-pitch-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          {programs.map((program) => {
            const styles = themeStyles[program.theme]

            return (
              <div
                key={program.id}
                className="rounded-3xl border border-pitch-border bg-pitch-card overflow-hidden hover:shadow-[0_16px_64px_rgba(0,0,0,0.45)] transition-all duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1.4fr]">
                  {/* LEFT PANEL */}
                  <div className={`p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-pitch-border ${styles.panel}`}>
                    <div className="mb-8">
                      <div className={`text-xs font-heading tracking-[0.22em] uppercase mb-3 ${styles.label}`}>
                        Program
                      </div>

                      <h2 className="font-display text-4xl md:text-5xl text-white mb-2 leading-none">
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
                      <div className="rounded-xl border border-pitch-border bg-pitch-black p-4">
                        <div className="text-slate-500 text-xs font-heading tracking-[0.18em] uppercase mb-1">
                          Cost
                        </div>
                        <div className={`font-heading text-xl ${styles.label}`}>
                          {program.price}
                        </div>
                      </div>

                      <div className="rounded-xl border border-pitch-border bg-pitch-black p-4">
                        <div className="text-slate-500 text-xs font-heading tracking-[0.18em] uppercase mb-1">
                          Ideal For
                        </div>
                        <div className="text-slate-200 text-sm">
                          {program.ideal}
                        </div>
                      </div>
                    </div>
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
                            className="rounded-xl border border-pitch-border bg-pitch-black p-4"
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

                    <div className="pt-6 border-t border-pitch-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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

      <section className="py-20 bg-pitch-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center gap-3 mb-3 justify-center">
            <div className="w-8 h-px bg-blue" />
            <span className="section-label">Need Help Choosing?</span>
            <div className="w-8 h-px bg-green" />
          </div>

          <h2 className="display-heading text-4xl md:text-5xl mb-4">
            NOT SURE WHERE TO START?
          </h2>

          <p className="text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
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
