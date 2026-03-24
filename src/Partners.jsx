import React from 'react'
import PageHero from '../components/PageHero'

// Array de partners (puedes añadir logos y links)
const partnersList = [
  {
    name: 'Partner 1',
    logo: '/partners/logo1.png', // ruta al logo
    website: 'https://partner1.com',
  },
  {
    name: 'Partner 2',
    logo: '/partners/logo2.png',
    website: 'https://partner2.com',
  },
  // Añade más partners según sea necesario
]

export default function Partners() {
  return (
    <div>
      <PageHero
        label="Partners"
        title={
          <>
            OUR <span className="text-gradient-gold">PARTNERS</span>
          </>
        }
        subtitle="We are proud to collaborate with these amazing organizations."
      />

      <section className="py-20 bg-pitch-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {partnersList.map((partner) => (
              <a
                key={partner.name}
                href={partner.website}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center p-6 bg-pitch-card border border-pitch-border hover:border-gold transition-all duration-200 rounded-lg"
              >
                <img src={partner.logo} alt={partner.name} className="w-32 h-auto mb-4" />
                <div className="text-white font-heading text-sm">{partner.name}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}