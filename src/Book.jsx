import { useState } from 'react'
import PageHero from '../components/PageHero'

const sessionTypes = [
  { id: '1v1', label: '1v1 Training', desc: 'Personalized individual session', duration: '60 min', price: 'Cost $80/h' },
  { id: 'group', label: 'Group Session', desc: 'Small group (max 5 athletes)', duration: '60 min', price: 'Cost $50/h' },
]

const coaches = [
  { id: 'zack', name: 'Zack Hargreaves', title: 'Coach', initials: 'ZH' },
  { id: 'ignacio', name: 'Ignacio Gallego', title: 'Coach', initials: 'IG' },
]

const hours = ['16:00', '17:00', '18:00', '19:00', '20:00', '21:00']

export default function Book() {
  const [sessionType, setSessionType] = useState('1v1')
  const [selectedCoach, setSelectedCoach] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const today = new Date()

  // Helper para obtener días del mes
  const getDaysInMonth = (year, month) => {
    const firstDay = new Date(year, month, 1)
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
    ? selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : ''

  return (
    <div>
      <PageHero
        label="Book a Session"
        title={<>RESERVE YOUR<br /><span className="text-gradient-gold">SESSION</span></>}
        subtitle="Choose your session type, pick your coach, and lock in your time. Spots fill fast."
      />

      <section className="py-20 bg-pitch-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Step 1 — Session Type */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gold text-pitch-black flex items-center justify-center font-display text-lg">1</div>
              <h2 className="font-heading text-xl tracking-wide text-white uppercase">Select Session Type</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sessionTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSessionType(type.id)}
                  className={`text-left p-6 border transition-all duration-300 ${
                    sessionType === type.id
                      ? 'border-gold bg-gold/10 shadow-[0_0_24px_rgba(212,175,55,0.2)]'
                      : 'border-pitch-border bg-pitch-card hover:border-gold/30'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      sessionType === type.id ? 'border-gold' : 'border-gray-600'
                    }`}>
                      {sessionType === type.id && <div className="w-2.5 h-2.5 rounded-full bg-gold" />}
                    </div>
                    <span className="text-xs font-heading tracking-wider text-gold border border-gold/30 px-2 py-0.5">{type.price}</span>
                  </div>
                  <h3 className="font-heading text-lg text-white tracking-wide mb-1">{type.label}</h3>
                  <p className="text-gray-500 text-xs mb-2">{type.desc}</p>
                  <div className="text-xs text-gray-600 font-heading tracking-wider uppercase">{type.duration} session</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2 — Coach */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-8 h-8 flex items-center justify-center font-display text-lg ${sessionType ? 'bg-gold text-pitch-black' : 'bg-pitch-card text-gray-600 border border-pitch-border'}`}>2</div>
              <h2 className="font-heading text-xl tracking-wide text-white uppercase">Choose Your Coach</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coaches.map((coach) => (
                <button
                  key={coach.id}
                  onClick={() => setSelectedCoach(coach.id)}
                  className={`text-left p-6 border transition-all duration-300 ${
                    selectedCoach === coach.id
                      ? 'border-gold bg-gold/10 shadow-[0_0_24px_rgba(212,175,55,0.2)]'
                      : 'border-pitch-border bg-pitch-card hover:border-gold/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 border flex items-center justify-center font-display text-xl flex-shrink-0 ${
                      selectedCoach === coach.id ? 'border-gold text-gold bg-gold/10' : 'border-pitch-border text-gray-500'
                    }`}>
                      {coach.initials}
                    </div>
                    <div>
                      <div className="font-heading text-lg text-white tracking-wide">{coach.name}</div>
                      <div className="text-gold text-xs font-heading tracking-wider uppercase">{coach.title}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3 — Calendar + Form */}
          {selectedCoach && (
            <div className="flex flex-col md:flex-row gap-6 mb-12">

              {/* Calendario */}
              <div className="w-full md:w-2/3 border border-gold/20 bg-pitch-card p-6">
                <div className="flex justify-between items-center mb-4 text-white">
                  <button onClick={prevMonth} className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600">&lt;</button>
                  <h3 className="text-lg font-bold">{currentMonth.toLocaleString('en-US', { month: 'long', year: 'numeric' })}</h3>
                  <button onClick={nextMonth} className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600">&gt;</button>
                </div>

                <div className="grid grid-cols-7 gap-2 text-center text-white text-sm font-bold">
                  {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
                    <div key={d}>{d}</div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-2 text-center text-white text-sm mt-1">
                  {[...Array(firstDayIndex)].map((_, i) => <div key={'empty-'+i}></div>)}
                  {days.map(day => {
                    const isPast = day < today.getDate() && currentMonth.getMonth() === today.getMonth() && currentMonth.getFullYear() === today.getFullYear()
                    return (
                      <button
                        key={day.getDate()}
                        onClick={() => handleDayClick(day)}
                        disabled={isPast}
                        className={`p-2 rounded ${selectedDate?.getTime() === day.getTime() ? 'bg-gold text-black' : 'bg-gray-700 hover:bg-gray-600'} ${isPast ? 'opacity-40 cursor-not-allowed' : ''}`}
                      >
                        {day.getDate()}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Formulario */}
              <div className="w-full md:w-1/3 bg-pitch-black p-6 rounded-lg shadow-lg">
                {selectedDate && (
                  <div className="mb-4">
                    <h4 className="text-white font-bold mb-2">Available Times</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {hours.map(h => (
                        <button
                          key={h}
                          type="button"
                          onClick={() => setSelectedTime(h)}
                          className={`p-2 rounded text-white ${selectedTime === h ? 'bg-gold text-black' : 'bg-gray-700 hover:bg-gray-600'}`}
                        >
                          {h}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <h3 className="text-xl font-bold mb-4 text-white">Book Your Session</h3>
                <form className="flex flex-col gap-3 text-white">
                  <input type="text" placeholder="First Name" className="p-2 rounded bg-gray-800"/>
                  <input type="text" placeholder="Last Name" className="p-2 rounded bg-gray-800"/>
                  <input type="email" placeholder="Email" className="p-2 rounded bg-gray-800"/>
                  <input type="tel" placeholder="Phone Number" className="p-2 rounded bg-gray-800"/>
                  {selectedDate && <input type="text" value={formattedDate} readOnly className="p-2 rounded bg-gray-800"/>}
                  {selectedTime && <input type="text" value={selectedTime} readOnly className="p-2 rounded bg-gray-800"/>}
                  <select className="p-2 rounded bg-gray-800">
                    <option value="1v1">1v1 Training</option>
                    <option value="group">Group Training</option>
                  </select>
                  <button type="submit" className="bg-gold text-black font-bold py-2 rounded mt-3 hover:bg-yellow-600">
                    Submit
                  </button>
                </form>
              </div>

            </div>
          )}

        </div>
      </section>
    </div>
  )
}