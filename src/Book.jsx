import { useState } from 'react'
import PageHero from './PageHero.jsx'

const sessionTypes = [
  {
    id: '1v1',
    label: '1 on 1 Training',
    desc: 'Personalized individual session',
    duration: '60 min',
    price: '$70/session',
  },
  {
    id: 'group',
    label: 'Group Session',
    desc: 'Small group (2–5 athletes)',
    duration: '60 min',
    price: '$20–$40 per player',
  },
  {
    id: 'goalkeeping',
    label: 'Goalkeeping Coaching',
    desc: 'Specialized goalkeeper training with Jack',
    duration: '60 min',
    price: '$70/session',
  },
]

const coaches = [
  { id: 'zack', name: 'Zack Hargreaves', title: 'Coach', initials: 'ZH' },
  { id: 'ignacio', name: 'Ignacio Gallego', title: 'Coach', initials: 'IG' },
  { id: 'jack', name: 'Jack Crichton', title: 'Goalkeeper Coach', initials: 'JC' },
]

const hours = ['16:00', '17:00', '18:00', '19:00', '20:00', '21:00']

export default function Book() {
  const [result, setResult] = useState('')
  const [sessionType, setSessionType] = useState('1v1')
  const [selectedCoach, setSelectedCoach] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const today = new Date()

  const getDaysInMonth = (year, month) => {
    const lastDay = new Date(year, month + 1, 0)
    const days = []
    for (let d = 1; d <= lastDay.getDate(); d++) {
      days.push(new Date(year, month, d))
    }
    return days
  }

  const days = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth())
  const firstDayIndex = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay()

  const handleDayClick = (date) => {
    setSelectedDate(date)
    setSelectedTime(null)
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : ''

  const selectedCoachName =
    selectedCoach === 'zack'
      ? 'Zack Hargreaves'
      : selectedCoach === 'ignacio'
      ? 'Ignacio Gallego'
      : selectedCoach === 'jack'
      ? 'Jack Crichton'
      : ''

  const selectedSessionLabel =
    sessionType === '1v1'
      ? '1v1 Training'
      : sessionType === 'group'
      ? 'Group Session'
      : 'Goalkeeping Coaching'

  const availableCoaches =
    sessionType === 'goalkeeping'
      ? coaches.filter((coach) => coach.id === 'jack')
      : coaches.filter((coach) => coach.id === 'zack' || coach.id === 'ignacio')

  const onSelectSessionType = (typeId) => {
    setSessionType(typeId)
    setSelectedCoach(null)
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending...')

    const formData = new FormData(event.target)
    const first = formData.get('first_name')
    const last = formData.get('last_name')
    const email = formData.get('email')

    formData.append('name', `${first} ${last}`)
    formData.append('session_type', selectedSessionLabel)
    formData.append('coach', selectedCoachName)
    formData.append('preferred_date', formattedDate)
    formData.append('preferred_time', selectedTime || '')
    formData.append('access_key', '19afe7b2-a47e-467c-a526-b22265c9e906')
    formData.append('subject', 'New Session Booking - Skill Mill Soccer')
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
        setResult('Booking request submitted successfully.')
        event.target.reset()
        setSelectedDate(null)
        setSelectedTime(null)
        setSelectedCoach(null)
        setSessionType('1v1')
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
        label="Book a Session"
        title={
          <>
            BOOK YOUR
            <br />
            <span className="text-primary">SESSION</span>
          </>
        }
        subtitle="Choose your training type, select your coach, and request the date and time that work best for you."
      />

      <section className="py-20 bg-skill-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-primary text-skill-black flex items-center justify-center font-display text-lg">
                1
              </div>
              <h2 className="font-heading text-xl tracking-[0.14em] text-text-main uppercase">
                Select Session Type
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {sessionTypes.map((type) => {
                const active = sessionType === type.id

                return (
                  <button
                    type="button"
                    key={type.id}
                    onClick={() => onSelectSessionType(type.id)}
                    className={`text-left rounded-2xl border p-6 transition-all duration-300 ${
                      active
                        ? 'border-primary bg-primary/10 shadow-[0_0_24px_rgba(125,211,252,0.18)]'
                        : 'border-skill-border bg-skill-card hover:border-primary/30'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4 gap-4">
                      <div
                        className={`w-5 h-5 border-2 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          active ? 'border-primary' : 'border-slate-500'
                        }`}
                      >
                        {active && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                      </div>

                      <span
                        className={`text-xs font-heading tracking-[0.18em] px-2 py-1 rounded border ${
                          active
                            ? 'text-primary border-primary/30 bg-primary/10'
                            : 'text-slate-400 border-skill-border'
                        }`}
                      >
                        {type.price}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl text-text-main tracking-wide mb-2">
                      {type.label}
                    </h3>

                    <p className="text-text-muted text-sm mb-3">
                      {type.desc}
                    </p>

                    <div className="text-xs text-text-muted font-heading tracking-[0.18em] uppercase">
                      {type.duration} session
                    </div>
                  </button>
                )
              })}
            </div>

            {sessionType === 'group' && (
              <div className="mt-6 rounded-2xl border border-skill-border bg-skill-card p-5">
                <div className="text-xs font-heading tracking-[0.18em] uppercase text-accent-green mb-4">
                  Group Session Pricing
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="rounded-xl border border-skill-border bg-skill-black p-4 text-center">
                    <div className="text-sm text-text-main font-heading">2 Players</div>
                    <div className="text-xs text-text-muted mt-1">$40 per player</div>
                  </div>
                  <div className="rounded-xl border border-skill-border bg-skill-black p-4 text-center">
                    <div className="text-sm text-text-main font-heading">3 Players</div>
                    <div className="text-xs text-text-muted mt-1">$30 per player</div>
                  </div>
                  <div className="rounded-xl border border-skill-border bg-skill-black p-4 text-center">
                    <div className="text-sm text-text-main font-heading">4 Players</div>
                    <div className="text-xs text-text-muted mt-1">$25 per player</div>
                  </div>
                  <div className="rounded-xl border border-skill-border bg-skill-black p-4 text-center">
                    <div className="text-sm text-text-main font-heading">5 Players</div>
                    <div className="text-xs text-text-muted mt-1">$20 per player</div>
                  </div>
                </div>

                <p className="text-text-muted text-sm mt-4">
                  Small group sessions require a minimum of 2 players and allow a maximum of 5 players.
                </p>
              </div>
            )}
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-display text-lg ${
                  sessionType
                    ? 'bg-accent-green text-skill-black'
                    : 'bg-skill-card text-slate-500 border border-skill-border'
                }`}
              >
                2
              </div>
              <h2 className="font-heading text-xl tracking-[0.14em] text-text-main uppercase">
                Choose Your Coach
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {availableCoaches.map((coach) => {
                const active = selectedCoach === coach.id

                return (
                  <button
                    type="button"
                    key={coach.id}
                    onClick={() => setSelectedCoach(coach.id)}
                    className={`text-left rounded-2xl border p-6 transition-all duration-300 ${
                      active
                        ? 'border-accent-green bg-accent-green/10 shadow-[0_0_24px_rgba(34,197,94,0.16)]'
                        : 'border-skill-border bg-skill-card hover:border-accent-green/30'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-xl border flex items-center justify-center font-display text-xl flex-shrink-0 ${
                          active
                            ? 'border-accent-green text-accent-green bg-accent-green/10'
                            : 'border-skill-border text-slate-400'
                        }`}
                      >
                        {coach.initials}
                      </div>

                      <div>
                        <div className="font-heading text-lg text-text-main tracking-wide">
                          {coach.name}
                        </div>
                        <div className="text-accent-green text-xs font-heading tracking-[0.18em] uppercase">
                          {coach.title}
                        </div>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {selectedCoach && (
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6">
              <div className="rounded-3xl border border-skill-border bg-skill-card p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-full bg-primary text-skill-black flex items-center justify-center font-display text-lg">
                    3
                  </div>
                  <h2 className="font-heading text-xl tracking-[0.14em] text-text-main uppercase">
                    Select Preferred Date & Time
                  </h2>
                </div>

                <div className="rounded-2xl border border-skill-border bg-skill-black p-5">
                  <div className="flex justify-between items-center mb-5 text-text-main">
                    <button
                      type="button"
                      onClick={prevMonth}
                      className="px-3 py-1.5 rounded-lg bg-skill-card border border-skill-border hover:border-primary/30 transition-colors"
                    >
                      &lt;
                    </button>

                    <h3 className="text-lg font-heading tracking-wide">
                      {currentMonth.toLocaleString('en-US', {
                        month: 'long',
                        year: 'numeric',
                      })}
                    </h3>

                    <button
                      type="button"
                      onClick={nextMonth}
                      className="px-3 py-1.5 rounded-lg bg-skill-card border border-skill-border hover:border-primary/30 transition-colors"
                    >
                      &gt;
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-2 text-center text-slate-300 text-xs md:text-sm font-heading tracking-wide uppercase mb-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                      <div key={d}>{d}</div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-2 text-center text-text-main text-sm">
                    {[...Array(firstDayIndex)].map((_, i) => (
                      <div key={`empty-${i}`}></div>
                    ))}

                    {days.map((day) => {
                      const isPast =
                        day < new Date(today.getFullYear(), today.getMonth(), today.getDate()) &&
                        currentMonth.getMonth() === today.getMonth() &&
                        currentMonth.getFullYear() === today.getFullYear()

                      const active = selectedDate?.getTime() === day.getTime()

                      return (
                        <button
                          type="button"
                          key={day.getDate()}
                          onClick={() => handleDayClick(day)}
                          disabled={isPast}
                          className={`p-2.5 rounded-lg transition-all duration-200 ${
                            active
                              ? 'bg-primary text-skill-black'
                              : 'bg-skill-card hover:bg-slate-700'
                          } ${isPast ? 'opacity-30 cursor-not-allowed' : ''}`}
                        >
                          {day.getDate()}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {selectedDate && (
                  <div className="mt-6">
                    <h4 className="text-text-main font-heading tracking-[0.14em] uppercase mb-4 text-sm">
                      Available Times
                    </h4>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {hours.map((hour) => {
                        const active = selectedTime === hour

                        return (
                          <button
                            key={hour}
                            type="button"
                            onClick={() => setSelectedTime(hour)}
                            className={`p-3 rounded-xl border text-sm transition-all duration-200 ${
                              active
                                ? 'bg-accent-green text-skill-black border-accent-green'
                                : 'bg-skill-card border-skill-border text-text-main hover:border-accent-green/30'
                            }`}
                          >
                            {hour}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>

              <div className="rounded-3xl border border-skill-border bg-skill-card p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-full bg-accent-green text-skill-black flex items-center justify-center font-display text-lg">
                    4
                  </div>
                  <h3 className="font-heading text-xl tracking-[0.14em] text-text-main uppercase">
                    Booking Request
                  </h3>
                </div>

                <div className="mb-5 rounded-2xl border border-skill-border bg-skill-black p-4 space-y-2 text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-500">Session</span>
                    <span className="text-text-main text-right">{selectedSessionLabel}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-500">Coach</span>
                    <span className="text-text-main text-right">{selectedCoachName}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-500">Date</span>
                    <span className="text-text-main text-right">{formattedDate || 'Not selected'}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-500">Time</span>
                    <span className="text-text-main text-right">{selectedTime || 'Not selected'}</span>
                  </div>
                </div>

                <form onSubmit={onSubmit} className="flex flex-col gap-4 text-text-main">
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
                      className="p-3 rounded-xl bg-skill-black border border-skill-border"
                    />
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Player Last Name"
                      required
                      className="p-3 rounded-xl bg-skill-black border border-skill-border"
                    />
                  </div>

                  <input
                    type="text"
                    name="parent_name"
                    placeholder="Parent / Guardian Name"
                    className="p-3 rounded-xl bg-skill-black border border-skill-border"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="p-3 rounded-xl bg-skill-black border border-skill-border"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="p-3 rounded-xl bg-skill-black border border-skill-border"
                  />

                  <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    className="p-3 rounded-xl bg-skill-black border border-skill-border"
                  />

                  <input
                    type="text"
                    name="position"
                    placeholder="Position"
                    className="p-3 rounded-xl bg-skill-black border border-skill-border"
                  />

                  {selectedDate && (
                    <input
                      type="text"
                      value={formattedDate}
                      readOnly
                      className="p-3 rounded-xl bg-skill-black border border-skill-border text-slate-300"
                    />
                  )}

                  {selectedTime && (
                    <input
                      type="text"
                      value={selectedTime}
                      readOnly
                      className="p-3 rounded-xl bg-skill-black border border-skill-border text-slate-300"
                    />
                  )}

                  <textarea
                    name="goals"
                    placeholder="Player goals / areas to improve"
                    className="p-3 rounded-xl bg-skill-black border border-skill-border min-h-[110px]"
                  />

                  <textarea
                    name="message"
                    placeholder="Additional information"
                    className="p-3 rounded-xl bg-skill-black border border-skill-border min-h-[120px]"
                  />

                  <button type="submit" className="btn-primary justify-center mt-2">
                    Submit Booking Request
                  </button>
                </form>

                <p className="text-text-muted text-sm mt-4">
                  Booking requests are sent directly to <span className="text-text-main">skillmillsoccer@gmail.com</span>
                </p>

                <span className="text-text-main mt-4 block">{result}</span>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
