import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PageHero from './PageHero.jsx'

const highlights = [
  'Technical training sessions',
  'Game-based learning',
  'Position-specific coaching',
  'Small-sided competitive games',
  'Player evaluation',
]

export default function Clinics() {
  const [showForm, setShowForm] = useState(false)
  const [result, setResult] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const location = useLocation()

  const infoSectionRef = useRef(null)
  const formSectionRef = useRef(null)

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const shouldOpenRegister = params.get('register') === 'true'

    if (shouldOpenRegister) {
      setShowForm(true)

      setTimeout(() => {
        formSectionRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 300)
    }
  }, [location.search])

  const scrollToInfo = () => {
    infoSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const openForm = () => {
    setShowForm(true)

    setTimeout(() => {
      formSectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 100)
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setResult('Sending your registration...')

    const form = event.target
    const formData = new FormData(form)

    const firstName = formData.get('first_name')
    const lastName = formData.get('last_name')
    const email = formData.get('email')

    formData.append('name', `${firstName} ${lastName}`)
    formData.append('clinic_name', 'Skill Mill Soccer Summer Clinic')
    formData.append('clinic_dates', 'June 30 – July 3, 2026')
    formData.append('access_key', '19afe7b2-a47e-467c-a526-b22265c9e906')
    formData.append('subject', 'New Summer Clinic Registration - Skill Mill Soccer')
    formData.append('from_name', 'Skill Mill Soccer Website')
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
        setResult('Registration submitted successfully. We’ll contact you soon with the next steps.')
        form.reset()

        setTimeout(() => {
          setShowForm(false)
          setResult('')
        }, 2500)
      } else {
        setResult(data.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error(error)
      setResult('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <PageHero
        label="Clinics"
        title={
          <>
            ELITE
            <br />
            <span className="text-primary">SUMMER CLINIC</span>
          </>
        }
        subtitle="High-energy training, competitive environments, and focused development for players ready to improve."
      />

      <section className="py-20 bg-skill-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl border border-skill-border bg-skill-card overflow-hidden shadow-[0_16px_64px_rgba(0,0,0,0.45)]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">

              <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-skill-border bg-gradient-to-br from-primary/10 via-transparent to-accent-green/10">

                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="text-xs font-heading tracking-[0.18em] uppercase px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
                    Summer 2026
                  </span>

                  <span className="text-xs font-heading tracking-[0.18em] uppercase px-3 py-1 rounded-full border border-accent-green/30 bg-accent-green/10 text-accent-green">
                    Limited Spots Available
                  </span>
                </div>

                <h2 className="font-display text-4xl md:text-5xl text-text-main mb-3 leading-none uppercase">
                  Skill Mill Soccer
                  <br />
                  Summer Clinic
                </h2>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-accent-green" />
                  <span className="text-xs tracking-[0.25em] uppercase text-accent-green">
                    Skill Mill Soccer x 360 Vision Academy
                  </span>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6 max-w-2xl">
                  A focused 4-day summer training experience designed to help players
                  improve technical sharpness, game understanding, and confidence in
                  competitive environments.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="rounded-xl border border-skill-border bg-skill-black p-4">
                    <div className="text-slate-500 text-xs uppercase mb-1">Dates</div>
                    <div className="text-text-main">June 30 – July 3, 2026</div>
                  </div>

                  <div className="rounded-xl border border-skill-border bg-skill-black p-4">
                    <div className="text-slate-500 text-xs uppercase mb-1">Time</div>
                    <div className="text-text-main">9 AM – 2 PM Daily</div>
                  </div>

                  <div className="rounded-xl border border-skill-border bg-skill-black p-4">
                    <div className="text-slate-500 text-xs uppercase mb-1">Location</div>
                    <div className="text-text-main">Jennifer Ross Soccer Complex</div>
                  </div>

                  <div className="rounded-xl border border-skill-border bg-skill-black p-4">
                    <div className="text-slate-500 text-xs uppercase mb-1">Age Range</div>
                    <div className="text-text-main">Ages 8–18</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={scrollToInfo}
                    className="px-6 py-3 rounded-full border border-skill-border text-text-main hover:border-primary transition-colors"
                  >
                    Learn More
                  </button>

                  <button onClick={openForm} className="btn-primary">
                    Register for Clinic
                  </button>
                </div>
              </div>

              <div className="p-8 md:p-10 flex flex-col justify-between">
                <div className="mb-6">
                  <img
                    src="/images/summer-clinic-2026.png"
                    alt="Clinic Flyer"
                    className="w-full rounded-2xl border border-skill-border shadow-lg"
                  />
                </div>

                <div className="space-y-4 mb-8">
                  {highlights.map((item) => (
                    <div key={item} className="rounded-xl border border-skill-border p-4 text-slate-300">
                      ✔ {item}
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-primary/20 bg-primary/10 p-6">
                  <div className="text-xs uppercase mb-1 text-slate-400">Clinic Price</div>
                  <div className="text-4xl text-primary">$325</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section ref={infoSectionRef} className="py-20 bg-skill-black border-t border-skill-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-primary uppercase tracking-[0.25em] text-xs">
            Program Details
          </span>

          <h2 className="font-display text-4xl md:text-5xl text-text-main mt-3 mb-6 uppercase">
            What Players Can Expect
          </h2>

          <p className="text-slate-300 leading-relaxed">
            Players will train in a competitive and professional environment focused on
            technical development, decision-making, position-specific habits, and game
            confidence. The clinic is designed for motivated players who want to improve
            and enjoy high-level soccer training.
          </p>
        </div>
      </section>

      {showForm && (
        <section ref={formSectionRef} className="py-20 bg-skill-black border-t border-skill-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="rounded-3xl border border-skill-border bg-skill-card p-8 md:p-10 shadow-[0_16px_64px_rgba(0,0,0,0.45)]">

              <div className="text-center mb-8">
                <span className="text-primary uppercase tracking-[0.25em] text-xs">
                  Registration Form
                </span>

                <h2 className="font-display text-4xl md:text-5xl text-text-main mt-3 mb-4 uppercase">
                  Register for Clinic
                </h2>

                <p className="text-slate-300">
                  Complete the form below and our staff will contact you with the next steps.
                </p>
              </div>

              <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>
                  <label className="block text-sm text-slate-300 mb-2">Player First Name *</label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    className="w-full rounded-xl bg-skill-black border border-skill-border px-4 py-3 text-text-main outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-2">Player Last Name *</label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    className="w-full rounded-xl bg-skill-black border border-skill-border px-4 py-3 text-text-main outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone_number"
                    required
                    className="w-full rounded-xl bg-skill-black border border-skill-border px-4 py-3 text-text-main outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-xl bg-skill-black border border-skill-border px-4 py-3 text-text-main outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-2">Parent/Guardian Name *</label>
                  <input
                    type="text"
                    name="parent_guardian_name"
                    required
                    className="w-full rounded-xl bg-skill-black border border-skill-border px-4 py-3 text-text-main outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-2">Parent/Guardian Contact Information *</label>
                  <input
                    type="text"
                    name="parent_guardian_contact"
                    required
                    placeholder="Phone number or email"
                    className="w-full rounded-xl bg-skill-black border border-skill-border px-4 py-3 text-text-main outline-none focus:border-primary placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-2">Category *</label>
                  <select
                    name="category"
                    required
                    className="w-full rounded-xl bg-skill-black border border-skill-border px-4 py-3 text-text-main outline-none focus:border-primary"
                  >
                    <option value="">Select category</option>
                    <option value="U-8">U-8</option>
                    <option value="U-10">U-10</option>
                    <option value="U-12">U-12</option>
                    <option value="U-14">U-14</option>
                    <option value="U-16">U-16</option>
                    <option value="U-18">U-18</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-2">Position *</label>
                  <select
                    name="position"
                    required
                    className="w-full rounded-xl bg-skill-black border border-skill-border px-4 py-3 text-text-main outline-none focus:border-primary"
                  >
                    <option value="">Select position</option>
                    <option value="Goalkeeper">Goalkeeper</option>
                    <option value="Defender">Defender</option>
                    <option value="Midfielder">Midfielder</option>
                    <option value="Striker">Striker</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm text-slate-300 mb-2">Comments</label>
                  <textarea
                    name="comments"
                    rows="5"
                    placeholder="Anything else we should know?"
                    className="w-full rounded-xl bg-skill-black border border-skill-border px-4 py-3 text-text-main outline-none focus:border-primary placeholder:text-slate-600"
                  />
                </div>

                <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 items-center justify-between mt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                  </button>

                  {result && (
                    <p className="text-sm text-slate-300">
                      {result}
                    </p>
                  )}
                </div>

              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
