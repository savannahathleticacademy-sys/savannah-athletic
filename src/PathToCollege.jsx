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
  const [result, setResult] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending...')

    const formData = new FormData(event.target)
    const first = formData.get('first_name')
    const last = formData.get('last_name')

    formData.append('name', `${first} ${last}`)
    formData.append('program', 'College Pathway')
    formData.append('access_key', '32de9cfe-9a49-44e1-adb9-018b5c1f24b6')
    formData.append('subject', 'New College Pathway Inquiry - Savannah Athletic')
    formData.append('from_name', 'Savannah Athletic Website')

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
        setResult('Pathway inquiry submitted successfully.')
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
            PATH TO <span className="text-gradient-gold">COLLEGE</span>
          </>
        }
        subtitle="A structured pathway for ambitious players who want guidance, exposure, and support through the recruiting process."
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="btn-primary justify-center"
          >
            Start Your Pathway
          </button>

          <a href="#pathway-details" className="btn-outline justify-center">
            Explore the Process
          </a>
        </div>
      </PageHero>

      {/* OVERVIEW */}
      <section id="pathway-details" className="py-20 bg-pitch-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10">
            <div className="rounded-2xl border border-pitch-border bg-pitch-card p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-px bg-blue" />
                <span className="section-label">Program Overview</span>
              </div>

              <h2 className="display-heading text-4xl md:text-5xl mb-5">
                A SMARTER ROUTE TO THE NEXT LEVEL
              </h2>

              <p className="text-slate-300 leading-relaxed mb-5">
                The College Pathway is designed for serious athletes who want more than
                just training. It gives players and families a clearer process for building
                visibility, improving communication with coaches, and preparing for
                opportunities at the next level.
              </p>

              <p className="text-slate-400 leading-relaxed">
                We combine player development with practical recruiting support so that
                athletes are not only improving on the field, but also becoming better
                prepared for the college process off the field.
              </p>
            </div>

            <div className="rounded-2xl border border-pitch-border bg-pitch-card p-8 md:p-10">
              <div className="text-blue text-xs font-heading tracking-[0.2em] uppercase mb-3">
                Ideal For
              </div>

              <h3 className="font-heading text-2xl text-white mb-4 tracking-wide">
                Ages 14–19
              </h3>

              <p className="text-slate-400 leading-relaxed mb-6">
                Best suited for committed players and families looking for structure,
                accountability, and support through the recruiting journey.
              </p>

              <div className="space-y-4">
                <div className="rounded-xl border border-blue/20 bg-blue/10 p-4">
                  <div className="text-blue text-xs font-heading tracking-[0.18em] uppercase mb-1">
                    Focus
                  </div>
                  <div className="text-white">Exposure, preparation, and planning</div>
                </div>

                <div className="rounded-xl border border-green/20 bg-green/10 p-4">
                  <div className="text-green text-xs font-heading tracking-[0.18em] uppercase mb-1">
                    Format
                  </div>
                  <div className="text-white">Custom support packages</div>
                </div>

                <div className="rounded-xl border border-pitch-border bg-pitch-black p-4">
                  <div className="text-slate-400 text-xs font-heading tracking-[0.18em] uppercase mb-1">
                    Goal
                  </div>
                  <div className="text-white">Help athletes move forward with a real plan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 STEP PROCESS */}
      <section className="py-20 bg-pitch-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-green" />
            <span className="section-label">The Process</span>
          </div>

          <h2 className="display-heading text-4xl md:text-6xl mb-14">
            THREE STEPS.
            <br />
            ONE CLEAR PATH.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-pitch-border bg-pitch-card p-7 hover:border-blue/40 transition-all duration-300"
              >
                <div className="font-display text-5xl text-blue/25 mb-4">{step.number}</div>
                <h3 className="font-heading text-2xl text-white mb-3 tracking-wide">
                  {step.title}
                </h3>
                <div className="w-10 h-px bg-green mb-4" />
                <p className="text-slate-400 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED + BENEFITS */}
      <section className="py-20 bg-pitch-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-pitch-border bg-pitch-card p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-blue" />
              <span className="section-label">What’s Included</span>
            </div>

            <h2 className="display-heading text-4xl md:text-5xl mb-8">
              BUILT TO SUPPORT
              <br />
              THE FULL PROCESS
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {includedItems.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-pitch-border bg-pitch-black p-4 text-slate-300"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-green mt-0.5">✔</span>
                    <span className="leading-relaxed text-sm">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-pitch-border bg-pitch-card p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-green" />
              <span className="section-label">Why It Matters</span>
            </div>

            <h2 className="display-heading text-4xl md:text-5xl mb-8">
              MORE CLARITY.
              <br />
              MORE DIRECTION.
            </h2>

            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-xl border border-blue/20 bg-blue/10 p-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-blue mt-0.5">→</span>
                    <span className="text-slate-200 leading-relaxed">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-pitch-border bg-pitch-black p-5">
              <div className="text-slate-400 text-sm leading-relaxed">
                Every athlete’s pathway looks different. Our goal is to give players and
                families structure, confidence, and better decision-making throughout the journey.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-20 bg-pitch-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl border border-pitch-border bg-pitch-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue/10 via-transparent to-green/10 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-px bg-blue" />
                <span className="section-label">Start Here</span>
              </div>

              <h2 className="display-heading text-4xl md:text-5xl mb-4">
                LET’S BUILD YOUR PATHWAY
              </h2>

              <p className="text-slate-400 max-w-2xl mb-8 leading-relaxed">
                Fill out the form below and we’ll reach out with more information about the
                process, support options, and next steps.
              </p>

              {!showForm ? (
                <button
                  type="button"
                  onClick={() => setShowForm(true)}
                  className="btn-primary"
                >
                  Open Inquiry Form
                </button>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      required
                      className="p-3 rounded-lg bg-pitch-black border border-pitch-border text-white"
                    />
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      required
                      className="p-3 rounded-lg bg-pitch-black border border-pitch-border text-white"
                    />
                    <input
                      type="date"
                      name="date_of_birth"
                      className="p-3 rounded-lg bg-pitch-black border border-pitch-border text-white"
                    />
                    <input
                      type="text"
                      name="class_year"
                      placeholder="Class Year"
                      className="p-3 rounded-lg bg-pitch-black border border-pitch-border text-white"
                    />
                    <input
                      type="text"
                      name="position"
                      placeholder="Position"
                      className="p-3 rounded-lg bg-pitch-black border border-pitch-border text-white"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="p-3 rounded-lg bg-pitch-black border border-pitch-border text-white"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      className="p-3 rounded-lg bg-pitch-black border border-pitch-border text-white md:col-span-2"
                    />
                  </div>

                  <textarea
                    name="message"
                    placeholder="Tell us more about your goals"
                    className="w-full p-3 rounded-lg bg-pitch-black border border-pitch-border text-white min-h-[120px]"
                  />

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <button type="submit" className="btn-primary">
                      Submit Inquiry
                    </button>
                    <span className="text-white">{result}</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
