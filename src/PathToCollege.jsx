import { useRef, useState } from 'react'
import PageHero from './PageHero.jsx'

const steps = [
  {
    number: '01',
    title: 'Build Your Profile',
    text: 'We help athletes create a stronger recruiting foundation through guidance on video, positioning, communication, and presentation.',
  },
  {
    number: '02',
    title: 'Gain Exposure',
    text: 'We support players with outreach strategy, coach communication, and preparation for showcases, combines, and opportunities.',
  },
  {
    number: '03',
    title: 'Move Forward',
    text: 'From eligibility guidance to next-step planning, we help athletes and families navigate the process with clarity.',
  },
]

const pathwayPillars = [
  {
    title: 'Academic Guidance',
    text: 'We guide players through the academic requirements needed to be eligible for college soccer.',
    items: [
      'GPA requirements',
      'NCAA eligibility basics',
      'School selection strategy',
      'Player profile development',
    ],
  },
  {
    title: 'Athletic Preparation',
    text: 'We prepare players to perform at their highest level in front of college coaches.',
    items: [
      'What college coaches look for',
      'How to perform in showcases and games',
      'Positioning and game understanding',
      'Decision-making under pressure',
    ],
  },
  {
    title: 'Recruiting Strategy',
    text: 'We help players understand the process and position themselves to get recruited.',
    items: [
      'NCAA / NAIA rules simplified',
      'How to contact college coaches',
      'Recruiting timeline and key stages',
      'Common mistakes to avoid',
    ],
  },
]

const boysColleges = [
  {
    name: 'Confirmed Boys Colleges',
    logo: '/showcase/boys/logo-back.PNG',
  },
]

const girlsColleges = [
  {
    name: 'Girls School 1',
    logo: '/College-logos/girls-school-1.png',
  },
  {
    name: 'Girls School 2',
    logo: '/College-logos/girls-school-2.png',
  },
  {
    name: 'Girls School 3',
    logo: '/College-logos/girls-school-3.png',
  },
  {
    name: 'Girls School 4',
    logo: '/College-logos/girls-school-4.png',
  },
  {
    name: 'Girls School 5',
    logo: '/College-logos/girls-school-5.png',
  },
  {
    name: 'Girls School 6',
    logo: '/College-logos/girls-school-6.png',
  },
]

const showcaseLocation = 'Memorial Stadium, 101 John J. Scott Dr, Savannah, GA 31406'
const accessKey = '19afe7b2-a47e-467c-a526-b22265c9e906'

export default function PathToCollege() {
  const [showForm, setShowForm] = useState(false)
  const [selectedShowcase, setSelectedShowcase] = useState('')
  const [result, setResult] = useState('')
  const [programResult, setProgramResult] = useState('')
  const [animateForm, setAnimateForm] = useState(false)
  const [showLearnMore, setShowLearnMore] = useState(false)
  const [showProgramForm, setShowProgramForm] = useState(false)

  const formSectionRef = useRef(null)
  const learnMoreRef = useRef(null)
  const programFormRef = useRef(null)

  const showcaseDate =
    selectedShowcase === 'Boys'
      ? 'June 14th, 2026'
      : selectedShowcase === 'Girls'
        ? 'June 21st, 2026'
        : ''

  const visibleColleges =
    selectedShowcase === 'Boys'
      ? boysColleges
      : selectedShowcase === 'Girls'
        ? girlsColleges
        : []

  const showcaseCost =
    selectedShowcase === 'Boys'
      ? 'Boys — June 14 | $80 Early Bird until May 4 | $100 Standard until May 25 | $120 Last Spots until June 7 | Registration closes June 7 or when full.'
      : selectedShowcase === 'Girls'
        ? 'Girls — June 21 | $80 Early Bird until May 17 | $100 Standard until May 31 | $120 Last Spots until June 14 | Registration closes June 14 or when full.'
        : '$80'

  const handleShowcaseSelect = (showcase) => {
    setSelectedShowcase(showcase)
    setShowForm(true)
    setResult('')
    setAnimateForm(false)

    setTimeout(() => {
      formSectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 120)

    setTimeout(() => {
      setAnimateForm(true)
    }, 220)
  }

  const handleLearnMore = () => {
    setShowLearnMore(true)

    setTimeout(() => {
      learnMoreRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 100)
  }

  const handleProgramApply = () => {
    setShowProgramForm(true)
    setProgramResult('')

    setTimeout(() => {
      programFormRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 100)
  }

  const onShowcaseSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending...')

    const form = event.target
    const formData = new FormData(form)
    const first = formData.get('first_name')
    const last = formData.get('last_name')
    const email = formData.get('email')

    formData.append('name', `${first} ${last}`)
    formData.append('program', 'College Pathway Showcase June 2026')
    formData.append('showcase_category', selectedShowcase)
    formData.append('showcase_date', showcaseDate)
    formData.append('location', showcaseLocation)
    formData.append('cost_details', showcaseCost)
    formData.append('access_key', accessKey)
    formData.append(
      'subject',
      `New Showcase Registration - ${selectedShowcase} - ${showcaseDate} - Skill Mill Soccer`
    )
    formData.append('from_name', 'Skill Mill Soccer Website')
    formData.append('replyto', email)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      })

      const data = await response.json()

      if (data.success) {
        setResult('Showcase registration submitted successfully. We will contact you soon with the next steps.')
        form.reset()
      } else {
        setResult(data.message || 'Something went wrong.')
      }
    } catch (error) {
      console.error(error)
      setResult('Network error. Please try again.')
    }
  }

  const onProgramSubmit = async (event) => {
    event.preventDefault()
    setProgramResult('Sending...')

    const form = event.target
    const formData = new FormData(form)
    const first = formData.get('first_name')
    const last = formData.get('last_name')
    const email = formData.get('email')

    formData.append('name', `${first} ${last}`)
    formData.append('program', 'Skill Mill — College Pathway Program')
    formData.append('access_key', accessKey)
    formData.append('subject', `New College Pathway Program Application - ${first} ${last}`)
    formData.append('from_name', 'Skill Mill Soccer Website')
    formData.append('replyto', email)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      })

      const data = await response.json()

      if (data.success) {
        setProgramResult('Application submitted successfully. We will contact you soon with the next steps.')
        form.reset()
      } else {
        setProgramResult(data.message || 'Something went wrong.')
      }
    } catch (error) {
      console.error(error)
      setProgramResult('Network error. Please try again.')
    }
  }

  return (
    <div>
      <style>{`
        @keyframes showcaseFormReveal {
          0% {
            opacity: 0;
            transform: translateY(36px) scale(0.98);
          }
          60% {
            opacity: 1;
            transform: translateY(-4px) scale(1.01);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes showcaseGlowPulse {
          0% {
            opacity: 0.18;
            transform: scale(0.96);
          }
          50% {
            opacity: 0.32;
            transform: scale(1.04);
          }
          100% {
            opacity: 0.18;
            transform: scale(0.96);
          }
        }

        .showcase-form-enter {
          animation: showcaseFormReveal 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .showcase-form-glow {
          animation: showcaseGlowPulse 4s ease-in-out infinite;
        }
      `}</style>

      <PageHero
        label="College Pathway"
        title={
          <>
            PATH TO <span className="text-primary">COLLEGE</span>
          </>
        }
        subtitle="A structured pathway for ambitious players who want guidance, exposure, and support through the recruiting process."
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#showcase-june-2026" className="btn-primary justify-center">
            Showcase June 2026
          </a>

          <a href="#pathway-details" className="btn-outline justify-center">
            College Pathway Program
          </a>
        </div>
      </PageHero>

      <section id="showcase-june-2026" className="py-20 bg-skill-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-px bg-primary" />
              <span className="section-label">Showcase Event</span>
              <div className="w-10 h-px bg-primary" />
            </div>

            <h2 className="display-heading text-4xl md:text-6xl uppercase mb-4">
              SHOWCASE <span className="text-primary">JUNE 2026</span>
            </h2>

            <p className="text-text-muted max-w-3xl mx-auto leading-relaxed">
              A one-day college showcase experience for ambitious players looking to compete,
              gain exposure, and take the next step in their recruiting journey.
            </p>
          </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="rounded-2xl border border-primary/20 bg-primary/10 p-6 text-center">
              <div className="text-primary text-xs font-heading tracking-[0.18em] uppercase mb-2">
                Age Group
              </div>
              <div className="text-text-main text-2xl font-heading tracking-wide">
                16–19 Years
              </div>
            </div>

            <div className="rounded-2xl border border-accent-green/20 bg-accent-green/10 p-6 text-center">
              <div className="text-accent-green text-xs font-heading tracking-[0.18em] uppercase mb-2">
                Entry Fee
              </div>
              <div className="text-text-main text-3xl font-heading tracking-wide">
                $80
              </div>
              <div className="text-accent-green text-xs mt-2">
                Starting registration price.
              </div>
            </div>

            <div className="rounded-2xl border border-skill-border bg-skill-card p-6 text-center">
              <div className="text-slate-400 text-xs font-heading tracking-[0.18em] uppercase mb-2">
                Format
              </div>
              <div className="text-text-main text-2xl font-heading tracking-wide">
                Boys & Girls
              </div>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-primary/10 p-6 text-center">
              <div className="text-primary text-xs font-heading tracking-[0.18em] uppercase mb-2">
                Location
              </div>
              <div className="text-text-main text-sm leading-relaxed">
                <div className="font-heading tracking-wide uppercase text-base mb-2">
                  Memorial Stadium
                </div>
                <div>101 John J. Scott Dr</div>
                <div>Savannah, GA 31406</div>
              </div>
            </div>
          </div>

          <div className="mb-12 rounded-3xl border border-skill-border bg-skill-card overflow-hidden shadow-[0_16px_64px_rgba(0,0,0,0.35)]">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="p-8 md:p-10 bg-gradient-to-br from-primary/10 via-transparent to-accent-green/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-px bg-primary" />
                  <span className="section-label">Boys Showcase</span>
                </div>

                <h3 className="display-heading text-4xl md:text-5xl uppercase mb-4">
                  BOYS COLLEGE
                  <br />
                  <span className="text-primary">SHOWCASE</span>
                </h3>

                <p className="text-slate-300 leading-relaxed mb-6">
                  Our Boys College Showcase is designed for players ages 16–19 who want
                  to compete in front of college programs, gain exposure, and take the next
                  step in their recruiting journey.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <div className="rounded-xl border border-primary/20 bg-skill-black p-4">
                    <div className="text-primary text-xs font-heading tracking-[0.18em] uppercase mb-1">
                      Date
                    </div>
                    <div className="text-text-main">June 14th, 2026</div>
                  </div>

                  <div className="rounded-xl border border-accent-green/20 bg-skill-black p-4">
                    <div className="text-accent-green text-xs font-heading tracking-[0.18em] uppercase mb-1">
                      Ages
                    </div>
                    <div className="text-text-main">16–19 Years</div>
                  </div>

                  <div className="rounded-xl border border-primary/20 bg-skill-black p-4">
                    <div className="text-primary text-xs font-heading tracking-[0.18em] uppercase mb-1">
                      Location
                    </div>
                    <div className="text-text-main">Memorial Stadium</div>
                  </div>

                  <div className="rounded-xl border border-accent-green/20 bg-skill-black p-4">
                    <div className="text-accent-green text-xs font-heading tracking-[0.18em] uppercase mb-1">
                      Entry Fee
                    </div>
                    <div className="text-text-main">$80</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleShowcaseSelect('Boys')}
                  className="btn-primary"
                >
                  Register for Boys Showcase
                </button>
              </div>

              <div className="p-6 md:p-8 bg-skill-black/40 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div className="rounded-2xl border border-skill-border bg-skill-black p-3">
                  <img
                    src="/showcase/boys/logo-front.PNG"
                    alt="Boys College Showcase flyer"
                    className="w-full rounded-xl"
                  />
                </div>

                <div className="rounded-2xl border border-skill-border bg-skill-black p-3">
                  <img
                    src="/showcase/boys/logo-back.PNG"
                    alt="Boys College Showcase confirmed colleges"
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-skill-border bg-skill-card overflow-hidden shadow-[0_16px_64px_rgba(0,0,0,0.35)]">
  <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
    <div className="p-8 md:p-10 bg-gradient-to-br from-accent-green/10 via-transparent to-primary/10">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-px bg-accent-green" />
        <span className="section-label">Girls Showcase</span>
      </div>

      <h3 className="display-heading text-4xl md:text-5xl uppercase mb-4">
        GIRLS COLLEGE
        <br />
        <span className="text-primary">SHOWCASE</span>
      </h3>

      <p className="text-slate-300 leading-relaxed mb-6">
        Our Girls College Showcase is designed for players ages 16–19 who want
        to compete in front of college programs, gain exposure, and take the next
        step in their recruiting journey.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        <div className="rounded-xl border border-primary/20 bg-skill-black p-4">
          <div className="text-primary text-xs font-heading tracking-[0.18em] uppercase mb-1">
            Date
          </div>
          <div className="text-text-main">June 21, 2026</div>
        </div>

        <div className="rounded-xl border border-accent-green/20 bg-skill-black p-4">
          <div className="text-accent-green text-xs font-heading tracking-[0.18em] uppercase mb-1">
            Ages
          </div>
          <div className="text-text-main">16–19 Years</div>
        </div>

        <div className="rounded-xl border border-primary/20 bg-skill-black p-4">
          <div className="text-primary text-xs font-heading tracking-[0.18em] uppercase mb-1">
            Location
          </div>
          <div className="text-text-main">Memorial Stadium</div>
        </div>

        <div className="rounded-xl border border-accent-green/20 bg-skill-black p-4">
          <div className="text-accent-green text-xs font-heading tracking-[0.18em] uppercase mb-1">
            Entry Fee
          </div>
          <div className="text-text-main">$80</div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => handleShowcaseSelect('Girls')}
        className="btn-primary"
      >
        Register for Girls Showcase
      </button>
    </div>

    <div className="p-6 md:p-8 bg-skill-black/40 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
      <div className="rounded-2xl border border-skill-border bg-skill-black p-3">
        <img
          src="/showcase/girls/logo-front.PNG"
          alt="Girls College Showcase flyer"
          className="w-full rounded-xl"
        />
      </div>

      <div className="rounded-2xl border border-skill-border bg-skill-black p-3">
        <img
          src="/showcase/girls/logo-back.PNG"
          alt="Girls College Showcase confirmed colleges"
          className="w-full rounded-xl"
        />
      </div>
    </div>
  </div>
</div>
</div>
</section>

{showForm && selectedShowcase && (
  <section ref={formSectionRef} className="py-20 bg-skill-black">
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <div
        className={`rounded-3xl border border-skill-border bg-skill-card p-8 md:p-12 relative overflow-hidden ${
          animateForm ? 'showcase-form-enter' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent-green/10 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-primary" />
            <span className="section-label">Showcase Registration</span>
          </div>

          <h2 className="display-heading text-4xl md:text-5xl mb-4 uppercase">
            {selectedShowcase} SHOWCASE
            <br />
            JUNE 2026
          </h2>

          <p className="text-text-muted max-w-2xl mb-8 leading-relaxed">
            Complete the form below to register for the {selectedShowcase.toLowerCase()} showcase.
          </p>

          <form onSubmit={onShowcaseSubmit} className="space-y-8 relative z-10">
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <input type="hidden" name="showcase" value={selectedShowcase} />
            <input type="hidden" name="showcase_date" value={showcaseDate} />
            <input type="hidden" name="event_name" value="Showcase June 2026" />
            <input type="hidden" name="price" value={showcaseCost} />
            <input type="hidden" name="age_group" value="16-19" />
            <input type="hidden" name="location" value={showcaseLocation} />
                  <div className="rounded-2xl border border-skill-border bg-skill-black/90 backdrop-blur-sm p-6 md:p-8">
                    <div className="mb-6">
                      <div className="text-primary text-xs font-heading tracking-[0.18em] uppercase mb-2">
                        Section 1
                      </div>
                      <h3 className="font-heading text-2xl text-text-main uppercase tracking-wide">
                        Player Information
                      </h3>
                      <div className="w-12 h-px bg-primary mt-3" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-slate-300 mb-2">Player First Name</label>
                        <input type="text" name="first_name" required className="w-full p-3 rounded-lg bg-skill-card border border-skill-border text-text-main" />
                      </div>

                      <div>
                        <label className="block text-sm text-slate-300 mb-2">Player Last Name</label>
                        <input type="text" name="last_name" required className="w-full p-3 rounded-lg bg-skill-card border border-skill-border text-text-main" />
                      </div>

                      <div>
                        <label className="block text-sm text-slate-300 mb-2">Parent / Guardian Name</label>
                        <input type="text" name="parent_name" className="w-full p-3 rounded-lg bg-skill-card border border-skill-border text-text-main" />
                      </div>

                      <div>
                        <label className="block text-sm text-slate-300 mb-2">Email Address</label>
                        <input type="email" name="email" required className="w-full p-3 rounded-lg bg-skill-card border border-skill-border text-text-main" />
                      </div>

                      <div>
                        <label className="block text-sm text-slate-300 mb-2">Phone Number</label>
                        <input type="tel" name="phone" required className="w-full p-3 rounded-lg bg-skill-card border border-skill-border text-text-main" />
                      </div>

                      <div>
                        <label className="block text-sm text-slate-300 mb-2">Age</label>
                        <input type="number" name="age" min="16" max="19" required className="w-full p-3 rounded-lg bg-skill-card border border-skill-border text-text-main" />
                      </div>

                      <div>
                        <label className="block text-sm text-slate-300 mb-2">Current Club / Academy / Team</label>
                        <input type="text" name="current_club_academy_team" required className="w-full p-3 rounded-lg bg-skill-card border border-skill-border text-text-main" />
                      </div>

                      <div>
                        <label className="block text-sm text-slate-300 mb-2">First Position</label>
                        <input type="text" name="first_position" required className="w-full p-3 rounded-lg bg-skill-card border border-skill-border text-text-main" />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm text-slate-300 mb-2">Highlight Video Link</label>
                        <input type="url" name="highlight_video" className="w-full p-3 rounded-lg bg-skill-card border border-skill-border text-text-main" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-skill-border bg-skill-black/90 backdrop-blur-sm p-6 md:p-8">
                    <label className="flex items-start gap-3 rounded-xl border border-skill-border bg-skill-card p-4 cursor-pointer">
                      <input type="checkbox" name="image_video_consent" value="Yes" required className="mt-1" />
                      <span className="text-sm text-slate-300 leading-relaxed">
                        I give consent for Skill Mill Soccer to use images and videos taken during the showcase for promotional, marketing, and social media purposes.
                      </span>
                    </label>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                    <button type="submit" className="btn-primary">
                      Submit Registration
                    </button>
                    <span className="text-text-main">{result}</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-skill-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-px bg-accent-green" />
              <span className="section-label">Colleges Confirmed</span>
              <div className="w-10 h-px bg-accent-green" />
            </div>

            <h2 className="display-heading text-4xl md:text-5xl uppercase mb-4">
              SCHOOLS ATTENDING
              <br />
              THE SHOWCASE
            </h2>

            <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
              {selectedShowcase
                ? `Programs confirmed for the ${selectedShowcase.toLowerCase()} showcase are displayed below.`
                : 'Select the boys or girls showcase above to see the programs attending that specific event.'}
            </p>
          </div>

          {selectedShowcase ? (
            selectedShowcase === 'Boys' ? (
              <div className="max-w-4xl mx-auto rounded-3xl border border-skill-border bg-skill-card p-5 shadow-[0_16px_64px_rgba(0,0,0,0.28)]">
                <img
                  src="/showcase/boys/logo-back.PNG"
                  alt="Confirmed colleges for the boys showcase"
                  className="w-full rounded-2xl border border-skill-border"
                />
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                {visibleColleges.map((college) => (
                  <div
                    key={college.name}
                    className="rounded-2xl border border-skill-border bg-skill-card p-5 flex flex-col items-center justify-center text-center min-h-[180px] hover:border-primary/40 transition-all duration-300"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-4">
                      <img
                        src={college.logo}
                        alt={college.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="text-sm text-text-main font-medium leading-snug">
                      {college.name}
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="rounded-2xl border border-skill-border bg-skill-card p-8 text-center">
              <p className="text-text-muted">
                Choose a showcase category above to view the schools attending.
              </p>
            </div>
          )}
        </div>
      </section>

      <section id="pathway-details" className="py-20 bg-skill-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10">
            <div className="rounded-2xl border border-skill-border bg-skill-card p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-px bg-primary" />
                <span className="section-label">Program Overview</span>
              </div>

              <h2 className="display-heading text-4xl md:text-5xl mb-5 uppercase">
                A SMARTER ROUTE TO THE NEXT LEVEL
              </h2>

              <p className="text-slate-300 leading-relaxed mb-5">
                The <strong>Skill Mill — College Pathway Program</strong> is designed for serious athletes who want more than just training.
                It gives players and families a clearer process for building visibility, improving communication with coaches, and preparing
                for opportunities at the next level.
              </p>

              <p className="text-text-muted leading-relaxed mb-8">
                We combine player development with practical recruiting support so athletes are not only improving on the field,
                but also becoming better prepared for the college process off the field.
              </p>

              <button type="button" onClick={handleLearnMore} className="btn-primary">
                Learn More
              </button>
            </div>

            <div className="rounded-2xl border border-skill-border bg-skill-card p-8 md:p-10">
              <div className="text-primary text-xs font-heading tracking-[0.2em] uppercase mb-3">
                Ideal For
              </div>

              <h3 className="font-heading text-2xl text-text-main mb-4 tracking-wide">
                Ages 14–19
              </h3>

              <p className="text-text-muted leading-relaxed mb-6">
                Best suited for committed players and families looking for structure,
                accountability, and support through the recruiting journey.
              </p>

              <div className="space-y-4">
                <div className="rounded-xl border border-primary/20 bg-primary/10 p-4">
                  <div className="text-primary text-xs font-heading tracking-[0.18em] uppercase mb-1">
                    Focus
                  </div>
                  <div className="text-text-main">Exposure, preparation, and planning</div>
                </div>

                <div className="rounded-xl border border-accent-green/20 bg-accent-green/10 p-4">
                  <div className="text-accent-green text-xs font-heading tracking-[0.18em] uppercase mb-1">
                    Format
                  </div>
                  <div className="text-text-main">Custom support packages</div>
                </div>

                <div className="rounded-xl border border-skill-border bg-skill-black p-4">
                  <div className="text-slate-400 text-xs font-heading tracking-[0.18em] uppercase mb-1">
                    Goal
                  </div>
                  <div className="text-text-main">Help athletes move forward with a real plan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            {showLearnMore && (
        <section ref={learnMoreRef} className="py-20 bg-skill-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-px bg-primary" />
                <span className="section-label">Skill Mill Program</span>
                <div className="w-10 h-px bg-primary" />
              </div>

              <h2 className="display-heading text-4xl md:text-6xl uppercase mb-4">
                COLLEGE PATHWAY
                <br />
                <span className="text-primary">PROGRAM</span>
              </h2>

              <p className="text-text-muted max-w-3xl mx-auto leading-relaxed">
                A complete pathway designed to guide players through the academic, athletic,
                and recruiting process needed to pursue college soccer opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {pathwayPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-skill-border bg-skill-card p-7 hover:border-primary/40 transition-all duration-300"
                >
                  <h3 className="font-heading text-2xl text-text-main mb-3 uppercase tracking-wide">
                    {pillar.title}
                  </h3>

                  <div className="w-10 h-px bg-accent-green mb-4" />

                  <p className="text-text-muted leading-relaxed mb-5">
                    {pillar.text}
                  </p>

                  <div className="space-y-3">
                    {pillar.items.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm text-slate-300">
                        <span className="text-accent-green mt-0.5">✔</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-primary/20 bg-primary/10 p-8 md:p-10 text-center">
              <h3 className="font-heading text-3xl text-text-main uppercase mb-4">
                Available to All Players
              </h3>

              <p className="text-text-muted max-w-3xl mx-auto leading-relaxed mb-8">
                This program is available to players whether or not they attend our showcase.
                The goal is to give each athlete a clearer process, stronger profile, and better
                preparation for the college recruiting journey.
              </p>

              <button type="button" onClick={handleProgramApply} className="btn-primary">
                Apply for the Program
              </button>
            </div>
          </div>
        </section>
      )}

      {showProgramForm && (
        <section ref={programFormRef} className="py-20 bg-skill-dark">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="rounded-3xl border border-skill-border bg-skill-card p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent-green/10 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-px bg-primary" />
                  <span className="section-label">Program Application</span>
                </div>

                <h2 className="display-heading text-4xl md:text-5xl mb-4 uppercase">
                  APPLY FOR THE
                  <br />
                  COLLEGE PATHWAY PROGRAM
                </h2>

                <p className="text-text-muted max-w-2xl mb-8 leading-relaxed">
                  Fill out the form below and our team will contact you with the next steps.
                </p>

                <form onSubmit={onProgramSubmit} className="space-y-8">
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: 'none' }}
                  />

                  <div className="rounded-2xl border border-skill-border bg-skill-black/90 p-6 md:p-8">
                    <div className="mb-6">
                      <div className="text-primary text-xs font-heading tracking-[0.18em] uppercase mb-2">
                        Section 1
                      </div>

                      <h3 className="font-heading text-2xl text-text-main uppercase tracking-wide">
                        Player Information
                      </h3>

                      <div className="w-12 h-px bg-primary mt-3" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-slate-300 mb-2">
                          Player First Name
                        </label>
                        <input
                          type="text"
                          name="first_name"
                          required
                          className="w-full p-3 rounded-lg bg-skill-card border border-skill-border text-text-main"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-slate-300 mb-2">
                          Player Last Name
                        </label>
                        <input
                          type="text"
                          name="last_name"
                          required
                          className="w-full p-3 rounded-lg bg-skill-card border border-skill-border text-text-main"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-slate-300 mb-2">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          name="date_of_birth"
                          required
                          className="w-full p-3 rounded-lg bg-skill-card border border-skill-border text-text-main"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-slate-300 mb-2">
                          Age
                        </label>
                        <input
                          type="number"
                          name="age"
                          min="14"
                          max="19"
                          required
                          className="w-full p-3 rounded-lg bg-skill-card border border-skill-border text-text-main"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-slate-300 mb-2">
                          Gender
                        </label>
                        <select
                          name="gender"
                          required
                          className="w-full p-3 rounded-lg bg-skill-card border border-skill-border text-text-main"
                        >
                          <option value="">Select</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm text-slate-300 mb-2">
                          Position
                        </label>
                        <input
                          type="text"
                          name="position"
                          required
                          className="w-full p-3 rounded-lg bg-skill-card border border-skill-border text-text-main"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-skill-border bg-skill-black/90 p-6 md:p-8">
                    <div className="mb-6">
                      <div className="text-accent-green text-xs font-heading tracking-[0.18em] uppercase mb-2">
                        Section 2
                      </div>

                      <h3 className="font-heading text-2xl text-text-main uppercase tracking-wide">
                        Contact Information
                      </h3>

                      <div className="w-12 h-px bg-accent-green mt-3" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-slate-300 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full p-3 rounded-lg bg-skill-card border border-skill-border text-text-main"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-slate-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          className="w-full p-3 rounded-lg bg-skill-card border border-skill-border text-text-main"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-slate-300 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          required
                          className="w-full p-3 rounded-lg bg-skill-card border border-skill-border text-text-main"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-slate-300 mb-2">
                          Country
                        </label>
                        <input
                          type="text"
                          name="country"
                          required
                          className="w-full p-3 rounded-lg bg-skill-card border border-skill-border text-text-main"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-skill-border bg-skill-black/90 p-6 md:p-8">
                    <div className="mb-6">
                      <div className="text-primary text-xs font-heading tracking-[0.18em] uppercase mb-2">
                        Section 3
                      </div>

                      <h3 className="font-heading text-2xl text-text-main uppercase tracking-wide">
                        Soccer & Academic Background
                      </h3>

                      <div className="w-12 h-px bg-primary mt-3" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-slate-300 mb-2">
                          Current Team / Club
                        </label>
                        <input
                          type="text"
                          name="current_team"
                          required
                          className="w-full p-3 rounded-lg bg-skill-card border border-skill-border text-text-main"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-slate-300 mb-2">
                          League / Level
                        </label>
                        <input
                          type="text"
                          name="league_level"
                          className="w-full p-3 rounded-lg bg-skill-card border border-skill-border text-text-main"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-slate-300 mb-2">
                          Graduation Year
                        </label>
                        <input
                          type="text"
                          name="graduation_year"
                          required
                          className="w-full p-3 rounded-lg bg-skill-card border border-skill-border text-text-main"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-slate-300 mb-2">
                          GPA Optional
                        </label>
                        <input
                          type="text"
                          name="gpa"
                          className="w-full p-3 rounded-lg bg-skill-card border border-skill-border text-text-main"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm text-slate-300 mb-2">
                          Highlight Video Link Optional
                        </label>
                        <input
                          type="url"
                          name="highlight_video"
                          className="w-full p-3 rounded-lg bg-skill-card border border-skill-border text-text-main"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-skill-border bg-skill-black/90 p-6 md:p-8">
                    <div className="mb-6">
                      <div className="text-accent-green text-xs font-heading tracking-[0.18em] uppercase mb-2">
                        Section 4
                      </div>

                      <h3 className="font-heading text-2xl text-text-main uppercase tracking-wide">
                        Recruiting Status
                      </h3>

                      <div className="w-12 h-px bg-accent-green mt-3" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-slate-300 mb-2">
                          Have you attended a showcase before?
                        </label>
                        <select
                          name="attended_showcase"
                          required
                          className="w-full p-3 rounded-lg bg-skill-card border border-skill-border text-text-main"
                        >
                          <option value="">Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm text-slate-300 mb-2">
                          Are you currently talking to college coaches?
                        </label>
                        <select
                          name="talking_to_coaches"
                          required
                          className="w-full p-3 rounded-lg bg-skill-card border border-skill-border text-text-main"
                        >
                          <option value="">Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm text-slate-300 mb-2">
                          What are your goals with college soccer?
                        </label>
                        <textarea
                          name="goals"
                          rows="5"
                          required
                          className="w-full p-3 rounded-lg bg-skill-card border border-skill-border text-text-main min-h-[130px]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                    <button type="submit" className="btn-primary">
                      Submit Application
                    </button>

                    <span className="text-text-main">{programResult}</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-skill-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-accent-green" />
            <span className="section-label">The Process</span>
          </div>

          <h2 className="display-heading text-4xl md:text-6xl mb-14 uppercase">
            THREE STEPS.
            <br />
            ONE CLEAR PATH.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-skill-border bg-skill-card p-7 hover:border-primary/40 transition-all duration-300"
              >
                <div className="font-display text-5xl text-primary/25 mb-4">
                  {step.number}
                </div>

                <h3 className="font-heading text-2xl text-text-main mb-3 tracking-wide">
                  {step.title}
                </h3>

                <div className="w-10 h-px bg-accent-green mb-4" />

                <p className="text-text-muted leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
