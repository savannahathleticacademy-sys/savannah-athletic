import PageHero from './PageHero.jsx'

const partnersList = [
  {
    name: 'Partner 1',
    logo: '/partners/logo1.png',
    website: 'https://partner1.com',
    description: 'Official performance and development partner supporting athlete growth.',
    accent: 'blue',
  },
  {
    name: 'Partner 2',
    logo: '/partners/logo2.png',
    website: 'https://partner2.com',
    description: 'Collaborating to create high-level training environments and opportunities.',
    accent: 'green',
  },
]

export default function Partners() {
  return (
    <div>
      <PageHero
        label="Partners"
        title={
          <>
            OUR
            <br />
            <span className="text-gradient-gold">PARTNERS</span>
          </>
        }
        subtitle="We collaborate with organizations that share our commitment to player development and excellence."
      />

      <section className="py-20 bg-pitch-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">

          {partnersList.map((partner) => {
            const isBlue = partner.accent === 'blue'

            return (
              <a
                key={partner.name}
                href={partner.website}
                target="_blank"
                rel="noreferrer"
                className="block rounded-3xl border border-pitch-border bg-pitch-card overflow-hidden transition-all duration-300 hover:border-blue/30"
              >
                <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr]">

                  {/* LOGO SIDE */}
                  <div className="flex items-center justify-center p-10 bg-pitch-black border-b md:border-b-0 md:border-r border-pitch-border">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-20 object-contain opacity-90"
                    />
                  </div>

                  {/* INFO SIDE */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="mb-4">
                      <h3 className="text-2xl text-white font-display mb-2">
                        {partner.name}
                      </h3>

                      <div
                        className={`text-xs uppercase tracking-[0.25em] ${
                          isBlue ? 'text-blue' : 'text-green'
                        }`}
                      >
                        Official Partner
                      </div>
                    </div>

                    {/* Accent line */}
                    <div
                      className={`w-10 h-px mb-5 ${
                        isBlue ? 'bg-blue' : 'bg-green'
                      }`}
                    />

                    <p className="text-slate-400 leading-relaxed mb-6">
                      {partner.description}
                    </p>

                    <div className="text-sm font-heading tracking-[0.18em] uppercase text-slate-500">
                      Visit Website →
                    </div>
                  </div>

                </div>
              </a>
            )
          })}

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-pitch-dark border-t border-pitch-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center gap-3 mb-3 justify-center">
            <div className="w-10 h-px bg-green" />
            <span className="section-label">Collaborate With Us</span>
          </div>

          <h2 className="display-heading text-4xl md:text-5xl mb-4">
            BECOME A
            <br />
            PARTNER
          </h2>

          <p className="text-slate-400 mb-8">
            Interested in working with Savannah Athletic? Let’s build something together.
          </p>

          <a href="/contact" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
