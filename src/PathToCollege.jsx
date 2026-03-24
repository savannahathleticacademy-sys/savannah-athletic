import { useState } from 'react'
import PageHero from './PageHero.jsx'

export default function PathToCollege() {
  const [showForm, setShowForm] = useState(false)
  const [result, setResult] = useState('')

  const program = {
    id: 'college-pathway',
    tag: '',
    title: 'College Pathway',
    tagline: 'Your Scholarship Starts Here.',
    price: 'Custom Packages',
    description:
      'Our College Pathway program is a comprehensive athlete development and recruitment platform designed to take talented players from raw potential to future College recruitment. We provide personalized athletic, academic, and recruiting support every step of the way.',
    details: [
      'Personalized recruiting profile (video + stats)',
      'College coach outreach & networking',
      'NCAA eligibility guidance',
      'Combine and showcase preparation',
      'Academic athlete support',
      'Dedicated pathway advisor',
    ],
    ideal: 'Ages 14–19 | Committed & College-Bound',
    benefits: [
      'Maximize exposure to college coaches',
      'Enhance technical and tactical skills',
      'Receive guidance on scholarships and recruitment',
      'Structured roadmap for athletic and academic success',
    ],
    cta: 'Start Pathway',
  }

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
        label="Programs"
        title={
          <>
            PATH TO <span className="text-gradient-gold">COLLEGE</span>
          </>
        }
        subtitle="Your roadmap from athlete to college scholarship."
      />

      <section className="py-20 bg-pitch-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="border border-gold/30 bg-pitch-card overflow-hidden p-8 lg:p-12 rounded-lg">
            <div className="mb-6">
              <div className="font-display text-7xl text-gold opacity-20 leading-none mb-4">{program.tag}</div>
              <h2 className="font-display text-4xl text-white mb-2">{program.title}</h2>
              <div className="font-heading tracking-wider uppercase text-xs text-gold mb-6">{program.tagline}</div>
              <p className="text-gray-300 text-sm leading-relaxed">{program.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-gray-600 text-xs font-heading tracking-wider uppercase mb-1">Cost</h3>
              <div className="font-heading text-xl text-gold">{program.price}</div>
            </div>

            <div className="mb-6">
              <h3 className="text-gray-600 text-xs font-heading tracking-widest uppercase mb-2">What's Included</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {program.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-gray-600 text-xs font-heading tracking-wider uppercase mb-1">Ideal For</h3>
              <div className="text-gray-300 text-sm">{program.ideal}</div>
            </div>

            <div className="mb-6">
              <h3 className="text-gray-600 text-xs font-heading tracking-widest uppercase mb-2">Benefits</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {program.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={() => setShowForm(!showForm)}
                className="btn-primary flex items-center gap-2 text-xs"
              >
                {program.cta}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {showForm && (
              <form onSubmit={onSubmit} className="mt-8 bg-pitch-dark p-6 rounded-lg space-y-4 text-gray-300">
                <h3 className="text-xl font-display mb-4">Learn More About the Process</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="first_name" placeholder="First Name" required className="p-2 rounded bg-pitch-card border border-gray-600" />
                  <input type="text" name="last_name" placeholder="Last Name" required className="p-2 rounded bg-pitch-card border border-gray-600" />
                  <input type="date" name="date_of_birth" placeholder="Date of Birth" className="p-2 rounded bg-pitch-card border border-gray-600" />
                  <input type="text" name="class_year" placeholder="Class Year" className="p-2 rounded bg-pitch-card border border-gray-600" />
                  <input type="text" name="position" placeholder="Position" className="p-2 rounded bg-pitch-card border border-gray-600" />
                  <input type="email" name="email" placeholder="Email" required className="p-2 rounded bg-pitch-card border border-gray-600" />
                  <input type="tel" name="phone" placeholder="Phone Number" className="p-2 rounded bg-pitch-card border border-gray-600" />
                </div>

                <textarea name="message" placeholder="Extra details" className="w-full p-2 rounded bg-pitch-card border border-gray-600" />

                <button type="submit" className="btn-primary mt-4">
                  Submit
                </button>

                <span className="text-white mt-4 block">{result}</span>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
