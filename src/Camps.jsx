import { useRef, useState } from 'react'
import PageHero from './PageHero.jsx'

const highlights = [
  'Technical training sessions',
  'Game-based learning',
  'Position-specific coaching',
  'Small-sided competitive games',
  'Player evaluation',
]

export default function Camps() {
  const [showForm, setShowForm] = useState(false)
  const [result, setResult] = useState('')
  const [selectedGender, setSelectedGender] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formSectionRef = useRef(null)

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
    const first = formData.get('first_name')
    const last = formData.get('last_name')
    const email = formData.get('email')

    formData.append('name', `${first} ${last}`)
    formData.append('camp_name', 'Skill Mill Soccer Summer Camp')
    formData.append('camp_dates', 'June 30 – July 3, 2026')
    formData.append('access_key', '19afe7b2-a47e-467c-a526-b22265c9e906')
    formData.append('subject', 'New Camp Registration - Skill Mill Soccer')
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
        setResult('Registration submitted successfully. Our team will contact you soon.')
        form.reset()
        setSelectedGender('')

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
        label="Camps"
        title={
          <>
            ELITE
            <br />
            <span className="text-primary">SUMMER CAMP</span>
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

                <h2 className="font-display text-4xl md:text-5xl text-text-main mb-4 leading-none uppercase">
                  Skill Mill Soccer
                  <br />
                  Summer Camp
                </h2>

                <p className="text-slate-300 leading-relaxed mb-6 max-w-2xl">
                  A focused 4-day summer training experience designed to help players
                  improve technical sharpness, game understanding, and confidence in
                  competitive environments.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="rounded-xl border border-skill-border bg-skill-black p-4">
                    <div className="text-slate-500 text-xs font-heading tracking-[0.18em] uppercase mb-1">
                      Dates
                    </div>
                    <div className="text-text-main">June 30 – July 3, 2026</div>
                  </div>

                  <div className="rounded-xl border border-skill-border bg-skill-black p-4">
                    <div className="text-slate-500 text-xs font-heading tracking-[0.18em] uppercase mb-1">
                      Time
                    </div>
                    <div className="text-text-main">9 AM – 2 PM Daily</div>
                  </div>

                  <div className="rounded-xl border border-skill-border bg-skill-black p-4">
                    <div className="text-slate-500 text-xs font-heading tracking-[0.18em] uppercase mb-1">
                      Location
                    </div>
                    <div className="text-text-main">Jennifer Ross Soccer Complex</div>
                    <div className="text-slate-500 text-sm mt-1">
                      7221 Sallie Mood Dr, Savannah, GA 31406
                    </div>
                  </div>

                  <div className="rounded-xl border border-skill-border bg-skill-black p-4">
                    <div className="text-slate-500 text-xs font-heading tracking-[0.18em] uppercase mb-1">
                      Age Range
                    </div>
                    <div className="text-text-main">Ages 8–18</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={openForm}
                  className="btn-primary"
                >
                  Register for Camp
                </button>
              </div>

              <div className="p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-px bg-accent-green" />
                    <span className="section-label">Camp Highlights</span>
                  </div>

                  <div className="space-y-4 mb-8">
                    {highlights.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-skill-border bg-skill-black p-4"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-accent-green mt-0.5">✔</span>
                          <span className="text-slate-300 leading-relaxed">{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-primary/20 bg-primary/10 p-6">
                  <div className="text-slate-500 text-xs font-heading tracking-[0.18em] uppercase mb-1">
                    Camp Price
                  </div>
                  <div className="text-4xl text-primary font-display leading-none">$325</div>
                  <div className="text-slate-300 text-sm mt-2">
                    Includes all scheduled training sessions during camp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showForm && (
        <section
          ref={formSectionRef}
          className="py-20 bg-skill-dark border-t border-skill-border"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="rounded-3xl border border-skill-border bg-skill-card p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent-green/10 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-px bg-primary" />
                  <span className="section-label">Registration Form</span>
                </div>

                <h2 className="display-heading text-4xl md:text-5xl mb-4 uppercase">
                  CAMP
                  <br />
                  REGISTRATION
                </h2>

                <p className="text-text-muted mb-8 leading-relaxed">
                  Complete the form below to reserve your player’s spot for camp.
                </p>

                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: 'none' }}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="Player First Name"
                      required
                      className="p-3 rounded-xl bg-skill-black border border-skill-border text-text-main"
                    />

                    <input
                      type="text"
                      name="last_name"
                      placeholder="Player Last Name"
                      required
                      className="p-3 rounded-xl bg-skill-black border border-skill-border text-text-main"
                    />
                  </div>

                  <input
                    type="text"
                    name="parent_name"
                    placeholder="Parent / Guardian Name"
                    required
                    className="p-3 rounded-xl bg-skill-black border border-skill-border text-text-main"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="p-3 rounded-xl bg-skill-black border border-skill-border text-text-main"
                    />

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      required
                      className="p-3 rounded-xl bg-skill-black border border-skill-border text-text-main"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="number"
                      name="age"
                      placeholder="Age"
                      required
                      min="8"
                      max="18"
                      className="p-3 rounded-xl bg-skill-black border border-skill-border text-text-main"
                    />

                    <select
                      name="gender"
                      required
                      value={selectedGender}
                      onChange={(e) => setSelectedGender(e.target.value)}
                      className="p-3 rounded-xl bg-skill-black border border-skill-border text-text-main"
                    >
                      <option value="">Boys / Girls</option>
                      <option value="Boys">Boys</option>
                      <option value="Girls">Girls</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <select
                      name="position"
                      required
                      className="p-3 rounded-xl bg-skill-black border border-skill-border text-text-main"
                    >
                      <option value="">Position</option>
                      <option value="Goalkeeper">Goalkeeper</option>
                      <option value="Defender">Defender</option>
                      <option value="Midfielder">Midfielder</option>
                      <option value="Forward">Forward</option>
                    </select>

                    <select
                      name="shirt_size_category"
                      required
                      disabled={!selectedGender}
                      className="p-3 rounded-xl bg-skill-black border border-skill-border text-text-main disabled:opacity-60"
                    >
                      <option value="">
                        {selectedGender ? 'Shirt Size Category' : 'Select gender first'}
                      </option>

                      <option value="Youth">Youth</option>

                      {selectedGender === 'Boys' && (
                        <option value="Adult Men">Adult Men</option>
                      )}

                      {selectedGender === 'Girls' && (
                        <option value="Adult Women">Adult Women</option>
                      )}
                    </select>
                  </div>

                  <textarea
                    name="medical_notes"
                    placeholder="Medical notes / allergies / important information"
                    className="p-3 rounded-xl bg-skill-black border border-skill-border text-text-main min-h-[110px]"
                  />

                  <textarea
                    name="message"
                    placeholder="Additional information"
                    className="p-3 rounded-xl bg-skill-black border border-skill-border text-text-main min-h-[120px]"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                  </button>
                </form>

                <span className="text-text-main mt-4 block">{result}</span>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
