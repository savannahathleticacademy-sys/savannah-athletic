import { useState } from 'react'
import PageHero from './PageHero.jsx'

const steps = [
  {
    number: '01',
    title: 'Build Your Profile',
    text: 'We help athletes create a stronger recruiting foundation through guidance on video, positioning, communication, and presentation.',
  },
  {
    number: '02',
    title: 'Gain Exposure',
    text: 'We support players with outreach strategy, coach communication, and preparation for showcases, combines, and opportunities.',
  },
  {
    number: '03',
    title: 'Move Forward',
    text: 'From eligibility guidance to next-step planning, we help athletes and families navigate the process with clarity.',
  },
]

const includedItems = [
  'Personalized recruiting profile support',
  'Video and highlight guidance',
  'College coach outreach strategy',
  'NCAA eligibility guidance',
  'Showcase and combine preparation',
  'Academic-athlete planning support',
]

const benefits = [
  'Increase visibility with the right college programs',
  'Build confidence in the recruiting process',
  'Develop a more complete player profile',
  'Create a structured pathway with clear next steps',
]

export default function PathToCollege() {
  const [showForm, setShowForm] = useState(false)
  const [selectedShowcase, setSelectedShowcase] = useState('')
  const [result, setResult] = useState('')

  const showcaseDate =
    selectedShowcase === 'Boys'
      ? 'June 14th, 2026'
      : selectedShowcase === 'Girls'
        ? 'June 21st, 2026'
        : ''

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending...')

    const formData = new FormData(event.target)
    const first = formData.get('first_name')
    const last = formData.get('last_name')
    const email = formData.get('email')

    formData.append('name', `${first} ${last}`)
    formData.append('program', 'College Pathway Showcase June 2026')
    formData.append('showcase_category', selectedShowcase)
    formData.append('showcase_date', showcaseDate)
    formData.append('access_key', '19afe7b2-a47e-467c-a526-b22265c9e906')
    formData.append(
      'subject',
      `New Showcase Registration - ${selectedShowcase} - ${showcaseDate} - Savannah Athletic`
    )
    formData.append('from_name', 'Savannah Athletic Website')
    formData.append('replyto', email)

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      })

      const data = await response.json()

      if (data.success) {
        setResult('Showcase registration submitted successfully.')
        event.target.reset()
      } else {
        setResult(data.message || 'Something went wrong.')
      }
    } catch (error) {
      console.error(error)
      setResult('Network error. Please try again.')
    }
  }

  return (
    <div>
      <PageHero
        label="College Pathway"
        title={
          <>
            PATH TO <span className="text-primary">COLLEGE</span>
          </>
        }
        subtitle="A structured pathway for ambitious players who want guidance, exposure, and support through the recruiting process."
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#showcase-june-2026" className="btn-primary justify-center">
            Showcase June 2026
          </a>

          <a href="#pathway-details" className="btn-outline justify-center">
            Explore the Process
          </a>
        </div>
      </PageHero>

      <section id="showcase-june-2026" className="py-20 bg-skill-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-px bg-primary" />
              <span className="section-label">Showcase Event</span>
              <div className="w-10 h-px bg-primary" />
            </div>

            <h2 className="display-heading text-4xl md:text-6xl uppercase mb-4">
              SHOWCASE <span className="text-primary">JUNE 2026</span>
            </h2>

            <p className="text-text-muted max-w-3xl mx-auto leading-relaxed">
              A one-day college showcase experience for ambitious players looking to compete,
              gain exposure, and take the next step in their recruiting journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="rounded-2xl border border-primary/20 bg-primary/10 p-6 text-center">
              <div className="text-primary text-xs font-heading tracking-[0.18em] uppercase mb-2">
                Age Group
              </div>
              <div className="text-text-main text-2xl font-heading tracking-wide">
                16–19 Years
              </div>
            </div>

            <div className="rounded-2xl border border-accent-green/20 bg-accent-green/10 p-6 text-center">
              <div className="text-accent-green text-xs font-heading tracking-[0.18em] uppercase mb-2">
                Entry Fee
              </div>
              <div className="text-text-main text-2xl font-heading tracking-wide">
                $100 Per Player
              </div>
            </div>

            <div className="rounded-2xl border border-skill-border bg-skill-card p-6 text-center">
              <div className="text-slate-400 text-xs font-heading tracking-[0.18em] uppercase mb-2">
                Format
              </div>
              <div className="text-text-main text-2xl font-heading tracking-wide">
                Boys & Girls
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              type="button"
              onClick={() => {
                setSelectedShowcase('Boys')
                setShowForm(true)
                setResult('')
              }}
              className={`rounded-2xl border p-8 text-left transition-all duration-300 ${
                selectedShowcase === 'Boys'
                  ? 'border-primary bg-primary/10'
                  : 'border-skill-border bg-skill-card hover:border-primary/40'
              }`}
            >
              <div className="text-primary text-xs font-heading tracking-[0.2em] uppercase mb-3">
                Showcase Category
              </div>
              <h3 className="font-heading text-3xl text-text-main mb-3 tracking-wide uppercase">
                Boys
              </h3>
              <p className="text-text-muted leading-relaxed mb-4">
                Register for the boys showcase and take the field in a competitive environment
                built to support exposure and next-level opportunities.
              </p>
              <div className="rounded-xl border border-primary/20 bg-skill-black p-4">
                <div className="text-primary text-xs font-heading tracking-[0.18em] uppercase mb-1">
                  Showcase Date
                </div>
                <div className="text-text-main">June 14th, 2026</div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                setSelectedShowcase('Girls')
                setShowForm(true)
                setResult('')
              }}
              className={`rounded-2xl border p-8 text-left transition-all duration-300 ${
                selectedShowcase === 'Girls'
                  ? 'border-primary bg-primary/10'
                  : 'border-skill-border bg-skill-card hover:border-primary/40'
              }`}
            >
              <div className="text-primary text-xs font-heading tracking-[0.2em] uppercase mb-3">
                Showcase Category
              </div>
              <h3 className="font-heading text-3xl text-text-main mb-3 tracking-wide uppercase">
                Girls
              </h3>
              <p className="text-text-muted leading-relaxed mb-4">
                Register for the girls showcase and compete in a high-level setting designed
                to create visibility and meaningful recruiting opportunities.
              </p>
              <div className="rounded-xl border border-primary/20 bg-skill-black p-4">
                <div className="text-primary text-xs font-heading tracking-[0.18em] uppercase mb-1">
                  Showcase Date
                </div>
                <div className="text-text-main">June 21st, 2026</div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {showForm && selectedShowcase && (
        <section className="py-20 bg-skill-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="rounded-3xl border border-skill-border bg-skill-card p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent-green/10 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-px bg-primary" />
                  <span className="section-label">Showcase Registration</span>
                </div>

                <h2 className="display-heading text-4xl md:text-5xl mb-4 uppercase">
                  {selectedShowcase} SHOWCASE
                  <br />
                  JUNE 2026
                </h2>

                <p className="text-text-muted max-w-2xl mb-3 leading-relaxed">
                  Complete the form below to register for the {selectedShowcase.toLowerCase()} showcase.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="rounded-xl border border-primary/20 bg-primary/10 p-4">
                    <div className="text-primary text-xs font-heading tracking-[0.18em] uppercase mb-1">
                      Date
                    </div>
                    <div className="text-text-main">{showcaseDate}</div>
                  </div>

                  <div className="rounded-xl border border-accent-green/20 bg-accent-green/10 p-4">
                    <div className="text-accent-green text-xs font-heading tracking-[0.18em] uppercase mb-1">
                      Ages
                    </div>
                    <div className="text-text-main">16–19</div>
                  </div>

                  <div className="rounded-xl border border-skill-border bg-skill-black p-4">
                    <div className="text-slate-400 text-xs font-heading tracking-[0.18em] uppercase mb-1">
                      Cost
                    </div>
                    <div className="text-text-main">$100 per player</div>
                  </div>
                </div>

                <form onSubmit={onSubmit} className="space-y-5">
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: 'none' }}
                  />

                  <input type="hidden" name="showcase" value={selectedShowcase} />
                  <input type="hidden" name="showcase_date" value={showcaseDate} />
                  <input type="hidden" name="event_name" value="Showcase June 2026" />
                  <input type="hidden" name="price" value="$100" />
                  <input type="hidden" name="age_group" value="16-19" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="Player First Name"
                      required
                      className="p-3 rounded-lg bg-skill-black border border-skill-border text-text-main"
                    />
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Player Last Name"
                      required
                      className="p-3 rounded-lg bg-skill-black border border-skill-border text-text-main"
                    />
                    <input
                      type="text"
                      name="parent_name"
                      placeholder="Parent / Guardian Name"
                      className="p-3 rounded-lg bg-skill-black border border-skill-border text-text-main"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="p-3 rounded-lg bg-skill-black border border-skill-border text-text-main"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      required
                      className="p-3 rounded-lg bg-skill-black border border-skill-border text-text-main"
                    />
                    <input
                      type="number"
                      name="age"
                      min="16"
                      max="19"
                      placeholder="Age"
                      required
                      className="p-3 rounded-lg bg-skill-black border border-skill-border text-text-main"
                    />
                    <input
                      type="text"
                      name="graduation_year"
                      placeholder="Graduation Year"
                      className="p-3 rounded-lg bg-skill-black border border-skill-border text-text-main"
                    />
                    <input
                      type="text"
                      name="current_club"
                      placeholder="Current Club / Team"
                      className="p-3 rounded-lg bg-skill-black border border-skill-border text-text-main"
                    />
                    <input
                      type="text"
                      name="position"
                      placeholder="Position"
                      className="p-3 rounded-lg bg-skill-black border border-skill-border text-text-main"
                    />
                    <input
                      type="text"
                      name="gpa"
                      placeholder="GPA (optional)"
                      className="p-3 rounded-lg bg-skill-black border border-skill-border text-text-main"
                    />
                    <input
                      type="url"
                      name="highlight_video"
                      placeholder="Highlight Video Link"
                      className="p-3 rounded-lg bg-skill-black border border-skill-border text-text-main md:col-span-2"
                    />
                  </div>

                  <textarea
                    name="goals"
                    placeholder="Tell us about your goals"
                    className="w-full p-3 rounded-lg bg-skill-black border border-skill-border text-text-main min-h-[120px]"
                  />

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <button type="submit" className="btn-primary">
                      Submit Registration
                    </button>
                    <span className="text-text-main">{result}</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      <section id="pathway-details" className="py-20 bg-skill-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10">
            <div className="rounded-2xl border border-skill-border bg-skill-card p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-px bg-primary" />
                <span className="section-label">Program Overview</span>
              </div>

              <h2 className="display-heading text-4xl md:text-5xl mb-5 uppercase">
                A SMARTER ROUTE TO THE NEXT LEVEL
              </h2>

              <p className="text-slate-300 leading-relaxed mb-5">
                The College Pathway is designed for serious athletes who want more than
                just training. It gives players and families a clearer process for building
                visibility, improving communication with coaches, and preparing for
                opportunities at the next level.
              </p>

              <p className="text-text-muted leading-relaxed">
                We combine player development with practical recruiting support so that
                athletes are not only improving on the field, but also becoming better
                prepared for the college process off the field.
              </p>
            </div>

            <div className="rounded-2xl border border-skill-border bg-skill-card p-8 md:p-10">
              <div className="text-primary text-xs font-heading tracking-[0.2em] uppercase mb-3">
                Ideal For
              </div>

              <h3 className="font-heading text-2xl text-text-main mb-4 tracking-wide">
                Ages 14–19
              </h3>

              <p className="text-text-muted leading-relaxed mb-6">
                Best suited for committed players and families looking for structure,
                accountability, and support through the recruiting journey.
              </p>

              <div className="space-y-4">
                <div className="rounded-xl border border-primary/20 bg-primary/10 p-4">
                  <div className="text-primary text-xs font-heading tracking-[0.18em] uppercase mb-1">
                    Focus
                  </div>
                  <div className="text-text-main">Exposure, preparation, and planning</div>
                </div>

                <div className="rounded-xl border border-accent-green/20 bg-accent-green/10 p-4">
                  <div className="text-accent-green text-xs font-heading tracking-[0.18em] uppercase mb-1">
                    Format
                  </div>
                  <div className="text-text-main">Custom support packages</div>
                </div>

                <div className="rounded-xl border border-skill-border bg-skill-black p-4">
                  <div className="text-slate-400 text-xs font-heading tracking-[0.18em] uppercase mb-1">
                    Goal
                  </div>
                  <div className="text-text-main">Help athletes move forward with a real plan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-skill-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-accent-green" />
            <span className="section-label">The Process</span>
          </div>

          <h2 className="display-heading text-4xl md:text-6xl mb-14 uppercase">
            THREE STEPS.
            <br />
            ONE CLEAR PATH.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-skill-border bg-skill-card p-7 hover:border-primary/40 transition-all duration-300"
              >
                <div className="font-display text-5xl text-primary/25 mb-4">{step.number}</div>
                <h3 className="font-heading text-2xl text-text-main mb-3 tracking-wide">
                  {step.title}
                </h3>
                <div className="w-10 h-px bg-accent-green mb-4" />
                <p className="text-text-muted leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-skill-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-skill-border bg-skill-card p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-primary" />
              <span className="section-label">What’s Included</span>
            </div>

            <h2 className="display-heading text-4xl md:text-5xl mb-8 uppercase">
              BUILT TO SUPPORT
              <br />
              THE FULL PROCESS
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {includedItems.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-skill-border bg-skill-black p-4 text-slate-300"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-accent-green mt-0.5">✔</span>
                    <span className="leading-relaxed text-sm">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-skill-border bg-skill-card p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-accent-green" />
              <span className="section-label">Why It Matters</span>
            </div>

            <h2 className="display-heading text-4xl md:text-5xl mb-8 uppercase">
              MORE CLARITY.
              <br />
              MORE DIRECTION.
            </h2>

            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-xl border border-primary/20 bg-primary/10 p-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-0.5">→</span>
                    <span className="text-slate-200 leading-relaxed">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-skill-border bg-skill-black p-5">
              <div className="text-text-muted text-sm leading-relaxed">
                Every athlete’s pathway looks different. Our goal is to give players and
                families structure, confidence, and better decision-making throughout the journey.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
