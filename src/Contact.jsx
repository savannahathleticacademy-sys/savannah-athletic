import { useState } from 'react'
import PageHero from './PageHero.jsx'

export default function Contact() {
  const [result, setResult] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending...')

    const formData = new FormData(event.target)
    formData.append('access_key', '32de9cfe-9a49-44e1-adb9-018b5c1f24b6')
    formData.append('subject', 'New Contact Form - Savannah Athletic')
    formData.append('from_name', 'Savannah Athletic Website')

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

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
      console.log('Error', data)
      setResult(data.message || 'Something went wrong.')
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
                  <a
                    href="mailto:savannahathleticacademy@gmail.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 border border-pitch-border flex items-center justify-center text-gold">
                      📧
                    </div>
                    <div>
                      <div className="text-xs uppercase text-gray-600">Email</div>
                      <div className="text-gray-300 text-sm">
                        savannahathleticacademy@gmail.com
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <form onSubmit={onSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full p-3 bg-pitch-card border border-pitch-border text-white"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full p-3 bg-pitch-card border border-pitch-border text-white"
                />

                <input
                  type="text"
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

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>

              <span className="text-white mt-4 block">{result}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
