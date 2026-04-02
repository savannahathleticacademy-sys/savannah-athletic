import { useState } from 'react'
import PageHero from './PageHero.jsx'

const partnersList = [
  {
    name: 'Partner 1',
    logo: '/partners/logo1.png',
    website: 'https://partner1.com',
    description: 'Official performance and development partner supporting athlete growth.',
    accent: 'primary',
  },
  {
    name: 'Partner 2',
    logo: '/partners/logo2.png',
    website: 'https://partner2.com',
    description: 'Collaborating to create high-level training environments and opportunities.',
    accent: 'green',
  },
]

export default function Partners() {
  const [showForm, setShowForm] = useState(false)
  const [result, setResult] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending...')

    const formData = new FormData(event.target)
    const first = formData.get('first_name')
    const last = formData.get('last_name')
    const email = formData.get('email')

    formData.append('name', `${first} ${last}`)
    formData.append('inquiry_type', 'Partner Inquiry')
    formData.append('access_key', '32de9cfe-9a49-44e1-adb9-018b5c1f24b6')
    formData.append('subject', 'New Partner Inquiry - Skill Mill Soccer')
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
        setResult('Partner inquiry submitted successfully.')
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
        label="Partners"
        title={
          <>
            OUR
            <br />
            <span className="text-primary">PARTNERS</span>
          </>
        }
        subtitle="We collaborate with organizations that share our commitment to player development and high-performance training."
      />

      <section className="py-20 bg-skill-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          {partnersList.map((partner) => {
            const isPrimary = partner.accent === 'primary'

            return (
              <a
                key={partner.name}
                href={partner.website}
                target="_blank"
                rel="noreferrer"
                className="block rounded-3xl border border-skill-border bg-skill-card overflow-hidden transition-all duration-300 hover:border-primary/30"
              >
                <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr]">
                  <div className="flex items-center justify-center p-10 bg-skill-black border-b md:border-b-0 md:border-r border-skill-border">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-20 object-contain opacity-90"
                    />
                  </div>

                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="mb-4">
                      <h3 className="text-2xl text-text-main font-display mb-2 uppercase">
                        {partner.name}
                      </h3>

                      <div
                        className={`text-xs uppercase tracking-[0.25em] ${
                          isPrimary ? 'text-primary' : 'text-accent-green'
                        }`}
                      >
                        Official Partner
                      </div>
                    </div>

                    <div
                      className={`w-10 h-px mb-5 ${
                        isPrimary ? 'bg-primary' : 'bg-accent-green'
                      }`}
                    />

                    <p className="text-text-muted leading-relaxed mb-6">
                      {partner.description}
                    </p>

                    <div className="text-sm font-heading tracking-[0.18em] uppercase text-slate-500">
                      Visit Website →
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </section>

      <section className="py-20 bg-skill-dark border-t border-skill-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center gap-3 mb-3 justify-center">
            <div className="w-10 h-px bg-accent-green" />
            <span className="section-label">Collaborate With Us</span>
          </div>

          <h2 className="display-heading text-4xl md:text-5xl mb-4 uppercase">
            BECOME A
            <br />
            PARTNER
          </h2>

          <p className="text-text-muted mb-8">
            Interested in working with Skill Mill Soccer? Let’s build something together.
          </p>

          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="btn-primary"
          >
            Get in Touch
          </button>
        </div>
      </section>

      {showForm && (
        <section className="py-20 bg-skill-black border-t border-skill-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="rounded-3xl border border-skill-border bg-skill-card p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent-green/10 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-px bg-primary" />
                  <span className="section-label">Partner Inquiry</span>
                </div>

                <h2 className="display-heading text-4xl md:text-5xl mb-4 uppercase">
                  LET’S BUILD
                  <br />
                  SOMETHING TOGETHER
                </h2>

                <p className="text-text-muted mb-8 leading-relaxed">
                  Fill out the form below and we’ll receive your partnership inquiry directly at
                  <span className="text-text-main"> skillmillsoccer@gmail.com</span>.
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
                      placeholder="First Name"
                      required
                      className="p-3 rounded-xl bg-skill-black border border-skill-border text-text-main"
                    />

                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      required
                      className="p-3 rounded-xl bg-skill-black border border-skill-border text-text-main"
                    />
                  </div>

                  <input
                    type="text"
                    name="company_name"
                    placeholder="Company / Organization Name"
                    required
                    className="p-3 rounded-xl bg-skill-black border border-skill-border text-text-main"
                  />

                  <input
                    type="text"
                    name="role"
                    placeholder="Your Role / Position"
                    className="p-3 rounded-xl bg-skill-black border border-skill-border text-text-main"
                  />

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
                    className="p-3 rounded-xl bg-skill-black border border-skill-border text-text-main"
                  />

                  <input
                    type="text"
                    name="website"
                    placeholder="Website or Social Media"
                    className="p-3 rounded-xl bg-skill-black border border-skill-border text-text-main"
                  />

                  <select
                    name="partnership_type"
                    className="p-3 rounded-xl bg-skill-black border border-skill-border text-text-main"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Type of Partnership
                    </option>
                    <option value="Club Partnership">Club Partnership</option>
                    <option value="Brand Partnership">Brand Partnership</option>
                    <option value="Event Collaboration">Event Collaboration</option>
                    <option value="Sponsorship">Sponsorship</option>
                    <option value="Facility Partnership">Facility Partnership</option>
                    <option value="Other">Other</option>
                  </select>

                  <textarea
                    name="message"
                    placeholder="Tell us about your organization and the type of partnership you have in mind"
                    required
                    className="p-3 rounded-xl bg-skill-black border border-skill-border text-text-main min-h-[140px]"
                  />

                  <button type="submit" className="btn-primary justify-center mt-2">
                    Submit Partner Inquiry
                  </button>
                </form>

                <p className="text-text-muted text-sm mt-4">
                  Partnership inquiries are sent directly to <span className="text-text-main">skillmillsoccer@gmail.com</span>
                </p>

                <span className="text-text-main mt-4 block">{result}</span>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
