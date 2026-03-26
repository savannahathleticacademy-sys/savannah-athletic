import PageHero from './PageHero.jsx'

const coaches = [
  {
    name: 'Zack Hargreaves',
    role: 'Founder & Head Coach',
    image: '/assets/zack.jpg',
    bio: [
      'Former professional soccer player with experience across Europe and the United States.',
      'Played at Burnley FC, Indiana Wesleyan University, Missouri State University, and captained the Michigan Stars (NISA).',
      'Also captained Texas United (USL2), winning the conference.',
      'Coaching experience includes SCAD, Savannah United, and Savannah Country Day.',
    ],
    accent: 'blue',
  },
  {
    name: 'Nacho Gallego',
    role: 'Founder & Performance Coach',
    image: '/assets/nacho.jpg',
    bio: [
      'Former academy and collegiate player from Spain with experience in elite European environments.',
      'Developed at Atlético de Madrid Academy and AD Alcorcón.',
      'Played at Presbyterian College and Mercyhurst University.',
      'Experienced in player development, technical training, and performance optimization.',
    ],
    accent: 'green',
  },
]

export default function Coaches() {
  return (
    <div>
      <PageHero
        label="Coaches"
        title={
          <>
            OUR
            <br />
            <span className="text-gradient-gold">COACHES</span>
          </>
        }
        subtitle="Experienced professionals dedicated to developing the next generation of athletes."
      />

      <section className="py-20 bg-pitch-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">

          {coaches.map((coach) => {
            const isBlue = coach.accent === 'blue'

            return (
              <div
                key={coach.name}
                className="rounded-3xl border border-pitch-border bg-pitch-card overflow-hidden grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]"
              >
                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Name on image (mobile feel) */}
                  <div className="absolute bottom-6 left-6 lg:hidden">
                    <h3 className="text-2xl text-white font-display">
                      {coach.name}
                    </h3>
                    <div
                      className={`text-xs uppercase tracking-[0.2em] ${
                        isBlue ? 'text-blue' : 'text-green'
                      }`}
                    >
                      {coach.role}
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="hidden lg:block mb-6">
                    <h3 className="text-3xl text-white font-display mb-2">
                      {coach.name}
                    </h3>
                    <div
                      className={`text-xs uppercase tracking-[0.25em] ${
                        isBlue ? 'text-blue' : 'text-green'
                      }`}
                    >
                      {coach.role}
                    </div>
                  </div>

                  {/* Accent line */}
                  <div
                    className={`w-12 h-px mb-6 ${
                      isBlue ? 'bg-blue' : 'bg-green'
                    }`}
                  />

                  <div className="space-y-4">
                    {coach.bio.map((paragraph, i) => (
                      <p key={i} className="text-slate-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-pitch-dark border-t border-pitch-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center gap-3 mb-3 justify-center">
            <div className="w-10 h-px bg-blue" />
            <span className="section-label">Train With Us</span>
          </div>

          <h2 className="display-heading text-4xl md:text-5xl mb-4">
            WORK WITH
            <br />
            ELITE COACHES
          </h2>

          <p className="text-slate-400 mb-8">
            Get direct access to experienced coaches focused on your development.
          </p>

          <a href="/book" className="btn-primary">
            Book a Session
          </a>
        </div>
      </section>
    </div>
  )
}
