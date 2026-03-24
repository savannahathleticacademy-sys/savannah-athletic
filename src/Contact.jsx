import { useState } from 'react'
import PageHero from './PageHero.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    await new Promise(r => setTimeout(r, 1200))
    setSending(false)
    setSubmitted(true)
  }

  return (
    <div>
      <PageHero
        label="Contact"
        title={<>GET IN<br /><span className="text-gradient-gold">TOUCH</span></>}
        subtitle="Questions about programs, camps, or getting started? We're here."
      />

      <section className="py-20 bg-pitch-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-px bg-gold" />
                  <span className="section-label">Reach Us</span>
                </div>

                <div className="space-y-5">
                  <a href="mailto:savannahathleticacademy@gmail.com" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 border border-pitch-border flex items-center justify-center text-gold">
                      📧
                    </div>
                    <div>
                      <div className="text-xs uppercase text-gray-600">Email</div>
                      <div className="text-gray-300 text-sm">savannahathleticacademy@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/savannahathleticacademy/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 border border-pitch-border flex items-center justify-center text-gold">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5A3.75 3.75 0 0020 16.25v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.75-.9a1.15 1.15 0 110 2.3 1.15 1.15 0 010-2.3z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs uppercase text-gray-600">Instagram</div>
                      <div className="text-gray-300 text-sm">@savannahathleticacademy</div>
                    </div>
                  </a>

                  <a href="tel:+19127241861" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 border border-pitch-border flex items-center justify-center text-gold">
                      📱
                    </div>
                    <div>
                      <div className="text-xs uppercase text-gray-600">Call / Text</div>
                      <div className="text-gray-300 text-sm">(+1) 912-724-1861</div>
                    </div>
                  </a>

                  <a href="https://maps.google.com/?q=Savannah,+GA" target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 border border-pitch-border flex items-center justify-center text-gold">
                      📍
                    </div>
                    <div>
                      <div className="text-xs uppercase text-gray-600">Location</div>
                      <div className="text-gray-300 text-sm">Savannah, GA</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="border border-gold/20 bg-gold/5 p-5">
                <p className="text-gray-400 text-sm">
                  We typically respond within 4–8 hours during business days.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              {submitted ? (
                <div className="border border-gold/30 bg-gold/10 p-12 text-center">
                  <h3 className="text-white text-2xl mb-2">Message Sent!</h3>
                  <p className="text-gray-400">We’ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    className="w-full p-3 bg-pitch-card border border-pitch-border text-white"
                  />

                  <input
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="w-full p-3 bg-pitch-card border border-pitch-border text-white"
                  />

                  <input
                    name="phone"
                    placeholder="Phone"
                    onChange={handleChange}
                    className="w-full p-3 bg-pitch-card border border-pitch-border text-white"
                  />

                  <textarea
                    name="message"
                    placeholder="Message"
                    onChange={handleChange}
                    className="w-full p-3 bg-pitch-card border border-pitch-border text-white"
                  />

                  <button className="btn-primary w-full" disabled={sending}>
                    {sending ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
