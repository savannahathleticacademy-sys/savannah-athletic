import PageHero from './PageHero.jsx'

const partnersList = [
  {
    name: 'Partner 1',
    logo: '/partners/logo1.png',
    website: 'https://partner1.com',
    description: 'Official performance and development partner supporting athlete growth.',
    accent: 'primary',
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
            <span className="text-primary">PARTNERS</span>
          </>
        }
        subtitle="We collaborate with organizations that share our commitment to player development and high-performance training."
      />

      <section className="py-20 bg-skill-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          {partnersList.map((partner) => {
            const isPrimary = partner.accent === 'primary'

            return (
              <a
                key={partner.name}
                href={partner.website}
                target="_blank"
                rel="noreferrer"
                className="block rounded-3xl border border-skill-border bg-skill-card overflow-hidden transition-all duration-300 hover:border-primary/30"
              >
                <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr]">
                  {/* LOGO SIDE */}
                  <div className="flex items-center justify-center p-10 bg-skill-black border-b md:border-b-0 md:border-r border-skill-border">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-20 object-contain opacity-90"
                    />
                  </div>

                  {/* INFO SIDE */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="mb-4">
                      <h3 className="text-2xl text-text-main font-display mb-2 uppercase">
                        {partner.name}
                      </h3>

                      <div
                        className={`text-xs uppercase tracking-[0.25em] ${
                          isPrimary ? 'text-primary' : 'text-accent-green'
                        }`}
                      >
                        Official Partner
                      </div>
                    </div>

                    <div
                      className={`w-10 h-px mb-5 ${
                        isPrimary ? 'bg-primary' : 'bg-accent-green'
                      }`}
                    />

                    <p className="text-text-muted leading-relaxed mb-6">
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
      <section className="py-20 bg-skill-dark border-t border-skill-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center gap-3 mb-3 justify-center">
            <div className="w-10 h-px bg-accent-green" />
            <span className="section-label">Collaborate With Us</span>
          </div>

          <h2 className="display-heading text-4xl md:text-5xl mb-4 uppercase">
            BECOME A
            <br />
            PARTNER
          </h2>

          <p className="text-text-muted mb-8">
            Interested in working with Skill Mill Soccer? Let’s build something together.
          </p>

          <a href="/contact" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
