import { useState } from 'react'
import PageHero from './PageHero.jsx'

export default function Camps() {
  const [showForm, setShowForm] = useState(false)
  const [result, setResult] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending...')

    const formData = new FormData(event.target)
    const first = formData.get('first_name')
    const last = formData.get('last_name')
    formData.append('name', `${first} ${last}`)
    formData.append('camp_name', 'Savannah Elite Summer Camp')
    formData.append('camp_dates', 'June 30 – July 3, 2026')
    formData.append('access_key', '32de9cfe-9a49-44e1-adb9-018b5c1f24b6')
    formData.append('subject', 'New Camp Registration - Savannah Athletic')
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
        setResult('Camp registration submitted successfully.')
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
        label="Camps"
        title={<>ELITE<br /><span className="text-gradient-gold">SUMMER CAMP</span></>}
        subtitle="Train at a high level. Compete. Improve. Get ready for the next step."
      />

      <section className="py-20 bg-pitch-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="relative border border-gold/30 bg-pitch-card overflow-hidden shadow-[0_16px_64px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent pointer-events-none" />

            <div className="relative p-8 md:grid md:grid-cols-2 md:gap-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-heading tracking-widest uppercase px-2.5 py-1 border bg-gold/20 text-gold border-gold/30">
                    Summer 2026
                  </span>
                  <span className="text-xs font-heading tracking-wider text-red-400">
                    Limited Spots Available
                  </span>
                </div>

                <h2 className="font-display text-3xl md:text-4xl text-white mb-3">
                  Savannah Elite Summer Camp
                </h2>

                <div className="flex flex-col gap-2 text-sm text-gray-400 mb-4">
                  <span>📅 June 30 – July 3, 2026</span>
                  <span>⏰ 9 AM – 1 PM Daily</span>
                  <span>📍 Jennifer Ross Soccer Complex</span>
                  <span className="text-xs text-gray-500">
                    7221 Sallie Mood Dr, Savannah, GA 31406
                  </span>
                  <span>👥 Ages 9–18</span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  An elite 4-day training camp focused on technical development,
                  game understanding, and high-level competition. Designed for
                  players who want to improve fast and compete at the next level.
                </p>

                <button
                  type="button"
                  onClick={() => setShowForm(true)}
                  className="bg-gold text-black font-bold py-2 px-6 hover:bg-yellow-600 transition"
                >
                  Sign Up
                </button>
              </div>

              <div>
                <div className="text-xs font-heading tracking-widest uppercase text-gray-600 mb-3">
                  Camp Highlights
                </div>

                <ul className="space-y-2 mb-6">
                  {[
                    'Technical training sessions',
                    'Game-based learning',
                    'Position-specific coaching',
                    'Small-sided competitive games',
                    'Player evaluation',
                  ].map((item) => (
                    <li key={item} className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="text-gold">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-pitch-border pt-4">
                  <div className="text-gray-600 text-xs uppercase mb-1">Price</div>
                  <div className="text-3xl text-gold font-display">$400</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showForm && (
        <section className="py-20 bg-pitch-black border-t border-pitch-border">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl text-white mb-6 font-display text-center">
              Camp Registration
            </h2>

            <form onSubmit={onSubmit} className="flex flex-col gap-4 bg-pitch-card p-6 border border-pitch-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="first_name" placeholder="First Name" required className="p-3 bg-gray-800 text-white rounded" />
                <input type="text" name="last_name" placeholder="Last Name" required className="p-3 bg-gray-800 text-white rounded" />
              </div>

              <input type="tel" name="phone" placeholder="Phone Number" className="p-3 bg-gray-800 text-white rounded" />
              <input type="email" name="email" placeholder="Email" required className="p-3 bg-gray-800 text-white rounded" />

              <select name="position" className="p-3 bg-gray-800 text-white rounded">
                <option value="">Position</option>
                <option>Goalkeeper</option>
                <option>Defender</option>
                <option>Midfielder</option>
                <option>Forward</option>
              </select>

              <select name="age_group" className="p-3 bg-gray-800 text-white rounded">
                <option value="">Age Group</option>
                <option>U10</option>
                <option>U12</option>
                <option>U14</option>
                <option>U16</option>
                <option>U18</option>
              </select>

              <textarea name="message" placeholder="Extra details" className="p-3 bg-gray-800 text-white rounded" />

              <button
                type="submit"
                className="bg-gold text-black font-bold py-3 mt-2 hover:bg-yellow-600 transition"
              >
                Submit Registration
              </button>
            </form>

            <span className="text-white mt-4 block">{result}</span>
          </div>
        </section>
      )}
    </div>
  )
}
