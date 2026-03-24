import React from "react";

export default function OurCoaches() {
  return (
    <section className="py-20 bg-pitch-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl text-white font-display mb-12 text-center">Our Coaches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Zack Hargreaves */}
          <div className="flex flex-col md:flex-row bg-pitch-card border border-pitch-border p-6 rounded-lg gap-6">
            <img
              src="/assets/zack.jpg"
              alt="Zack Hargreaves"
              className="w-32 h-32 object-cover rounded-full flex-shrink-0"
            />
            <div className="flex flex-col justify-start">
              <h3 className="text-xl font-heading text-gold mb-2">Zack Hargreaves</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Former professional soccer player with extensive experience in European and U.S. leagues. Played at Burnley FC, Indiana Wesleyan University, Missouri State University, and served as captain for the Clovers in NISA. Also captained Texas United in USL2, winning the conference.
              </p>
              <p className="text-gray-300 text-sm mt-2">
                Coaching experience includes SCAD (2 years), Savannah United (3 years), and Savannah Country Day (2 years). Skilled in youth development, team leadership, and technical training.
              </p>
            </div>
          </div>

          {/* Nacho Gallego */}
          <div className="flex flex-col md:flex-row bg-pitch-card border border-pitch-border p-6 rounded-lg gap-6">
            <img
              src="/assets/nacho.jpg"
              alt="Nacho Gallego"
              className="w-32 h-32 object-cover rounded-full flex-shrink-0"
            />
            <div className="flex flex-col justify-start">
              <h3 className="text-xl font-heading text-gold mb-2">Nacho Gallego</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Former professional academy and collegiate soccer player from Spain with extensive experience in European and U.S. soccer. Former Atlético de Madrid Academy & AD Alcorcón. Played at Presbyterian College & Mercyhurst University.
              </p>
              <p className="text-gray-300 text-sm mt-2">
                Coaching experience includes Savannah United and Madrid Stars. Passionate about youth development, technical training, and team leadership. Bilingual in Spanish and English.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}