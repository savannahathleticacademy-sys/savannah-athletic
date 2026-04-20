import { useRef, useState } from 'react'
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
  const [selectedGender, setSelectedGender] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const infoSectionRef = useRef(null)
  const formSectionRef = useRef(null)

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

    const playerFirst = formData.get('player_first_name')
    const playerLast = formData.get('player_last_name')
    const parentFirst = formData.get('parent_first_name')
    const parentLast = formData.get('parent_last_name')
    const email = formData.get('email')

    formData.append('name', `${playerFirst} ${playerLast}`)
    formData.append('player_name', `${playerFirst} ${playerLast}`)
    formData.append('parent_name', `${parentFirst} ${parentLast}`)
    formData.append('clinic_name', 'Skill Mill Soccer Summer Clinic')
    formData.append('clinic_dates', 'June 30 – July 3, 2026')
    formData.append('access_key', '19afe7b2-a47e-467c-a526-b22265c9e906')
    formData.append('subject', 'New Clinic Registration - Skill Mill Soccer')
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

              {/* LEFT SIDE */}
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

                {/* 🔥 COLLAB */}
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
                  <button onClick={scrollToInfo} className="px-6 py-3 rounded-full border border-skill-border">
                    Learn More
                  </button>

                  <button onClick={openForm} className="btn-primary">
                    Register for Clinic
                  </button>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="p-8 md:p-10 flex flex-col justify-between">

                {/* 🔥 FLYER */}
                <div className="mb-6">
                  <img
                    src="/images/summer-clinic-2026.png"
                    alt="Clinic Flyer"
                    className="w-full rounded-2xl border border-skill-border shadow-lg"
                  />
                </div>

                {/* Highlights */}
                <div className="space-y-4 mb-8">
                  {highlights.map((item) => (
                    <div key={item} className="rounded-xl border border-skill-border p-4">
                      ✔ {item}
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="rounded-2xl border border-primary/20 bg-primary/10 p-6">
                  <div className="text-xs uppercase mb-1">Clinic Price</div>
                  <div className="text-4xl text-primary">$325</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
