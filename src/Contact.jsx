import { useState } from 'react'
import PageHero from './PageHero.jsx'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div>
      <PageHero
        label="Contact"
        title={<>GET IN<br /><span className="text-gradient-gold">TOUCH</span></>}
        subtitle="Questions about programs, camps, or getting started? We're here."
      />

      <section className="py-20 bg-pitch-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {submitted ? (
            <div className="border border-gold/30 bg-gold/10 p-12 text-center">
              <h3 className="text-white text-2xl mb-2">Message Sent!</h3>
              <p className="text-gray-400">We’ll get back to you soon.</p>
            </div>
          ) : (
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-5"
              onSubmit={() => setSubmitted(true)}
            >
              {/* 🔑 TU ACCESS KEY */}
              <input type="hidden" name="access_key" value="32de9cfe-9a49-44e1-adb9-018b5c1f24b6" />

              <input type="hidden" name="subject" value="New Contact Form - Savannah Athletic" />
              <input type="hidden" name="from_name" value="Savannah Athletic Website" />

              <input
                name="name"
                placeholder="Name"
                required
                className="w-full p-3 bg-pitch-card border border-pitch-border text-white"
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full p-3 bg-pitch-card border border-pitch-border text-white"
              />

              <input
                name="phone"
                placeholder="Phone"
                className="w-full p-3 bg-pitch-card border border-pitch-border text-white"
              />

              <textarea
                name="message"
                placeholder="Message"
                required
                className="w-full p-3 bg-pitch-card border border-pitch-border text-white"
              />

              <button className="btn-primary w-full">
                Send Message
              </button>
            </form>
          )}

        </div>
      </section>
    </div>
  )
}
