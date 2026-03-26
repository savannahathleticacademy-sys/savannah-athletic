import { useState } from 'react'
import PageHero from './PageHero.jsx'

const contactItems = [
  {
    label: 'Email',
    value: 'savannahathleticacademy@gmail.com',
    href: 'mailto:savannahathleticacademy@gmail.com',
    icon: '📧',
    accent: 'blue',
  },
  {
    label: 'Phone',
    value: '(+1) 912-724-1861',
    href: 'tel:+19127241861',
    icon: '📱',
    accent: 'green',
  },
  {
    label: 'Location',
    value: 'Savannah, Georgia',
    href: 'https://maps.google.com/?q=Savannah,+GA',
    icon: '📍',
    accent: 'blue',
  },
  {
    label: 'Instagram',
    value: '@savannahathleticacademy',
    href: 'https://www.instagram.com/savannahathleticacademy/',
    icon: '📸',
    accent: 'green',
  },
]

export default function Contact() {
  const [result, setResult] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending...')

    const formData = new FormData(event.target)

    const first = formData.get('first_name')
    const last = formData.get('last_name')
    formData.append('name', `${first} ${last}`)

    formData.append('access_key', '32de9cfe-9a49-44e1-adb9-018b5c1f24b6')
    formData.append('subject', 'New Contact Form - Savannah Athletic')
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
        setResult('Form submitted successfully.')
        event.target.reset()
      } else {
        setResult(data.message || 'Something went wrong.')
      }
    } catch (error) {
      console.error('Fetch error:', error)
      setResult('Network error. Please try again.')
    }
  }

  return (
    <div>
      <PageHero
        label="Contact"
        title={
          <>
            GET IN
            <br />
            <span className="text-gradient-gold">TOUCH</span>
          </>
        }
        subtitle="Questions about training, camps, or getting started? Reach out and we’ll point you in the right direction."
      />

      <section className="py-20 bg-pitch-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8">
            {/* LEFT SIDE */}
            <div className="rounded-3xl border border-pitch-border bg-pitch-card p-8 md:p-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-px bg-blue" />
                <span className="section-label">Reach Us</span>
              </div>

              <h2 className="display-heading text-4xl md:text-5xl mb-5">
                LET’S START
                <br />
                THE CONVERSATION
              </h2>

              <p className="text-slate-400 leading-relaxed mb-8">
                Whether you’re looking for the right training program, camp details,
                or guidance on the college pathway, we’d love to hear from you.
              </p>

              <div className="space-y-4">
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="block rounded-2xl border border-pitch-border bg-pitch-black p-4 hover:border-blue/30 transition-all duration-200"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-11 h-11 rounded-xl border flex items-center justify-center text-lg flex-shrink-0 ${
                          item.accent === 'blue'
                            ? 'border-blue/30 bg-blue/10 text-blue'
                            : 'border-green/30 bg-green/10 text-green'
                        }`}
                      >
                        {item.icon}
                      </div>

                      <div>
                        <div className="text-slate-500 text-xs font-heading tracking-[0.18em] uppercase mb-1">
                          {item.label}
                        </div>
                        <div className="text-white leading-relaxed break-words">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* FORM */}
            <div className="rounded-3xl border border-pitch-border bg-pitch-card p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue/10 via-transparent to-green/10 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-px bg-green" />
                  <span className="section-label">Send a Message</span>
                </div>

                <h2 className="display-heading text-4xl md:text-5xl mb-5">
                  WE’LL GET
                  <br />
                  BACK TO YOU
                </h2>

                <p className="text-slate-400 leading-relaxed mb-8">
                  Fill out the form below and your message will go straight to our company email.
                </p>

                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      required
                      className="w-full p-3 rounded-xl bg-pitch-black border border-pitch-border text-white"
                    />

                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      required
                      className="w-full p-3 rounded-xl bg-pitch-black border border-pitch-border text-white"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full p-3 rounded-xl bg-pitch-black border border-pitch-border text-white"
                  />

                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    className="w-full p-3 rounded-xl bg-pitch-black border border-pitch-border text-white"
                  />

                  <textarea
                    name="message"
                    placeholder="How can we help?"
                    required
                    className="w-full p-3 rounded-xl bg-pitch-black border border-pitch-border text-white min-h-[140px]"
                  />

                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Message
                  </button>
                </form>

                <span className="text-white mt-4 block">{result}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
