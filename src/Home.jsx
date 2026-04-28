{/* BOYS COLLEGE SHOWCASE FEATURE */}
<section className="py-24 bg-skill-black border-t border-skill-border">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="rounded-3xl border border-skill-border bg-skill-card overflow-hidden shadow-[0_16px_64px_rgba(0,0,0,0.35)]">
      <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-0">
        <div className="p-8 md:p-10 bg-gradient-to-br from-accent-green/10 via-transparent to-primary/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-accent-green" />
            <span className="section-label">College Showcase</span>
          </div>

          <h2 className="display-heading text-5xl md:text-6xl mb-4 uppercase">
            BOYS COLLEGE
            <br />
            <span className="text-primary">SHOWCASE</span>
          </h2>

          <p className="text-slate-300 leading-relaxed mb-6 max-w-2xl">
            Registration is now open for our Boys College Showcase in Savannah.
            Players ages 16–19 will compete in front of college programs and receive
            exposure through match footage, recruiting support, and a college pathway environment.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="text-xs font-heading tracking-[0.12em] uppercase px-3 py-2 rounded-full border border-skill-border bg-skill-black text-slate-300">
              June 14, 2026
            </span>
            <span className="text-xs font-heading tracking-[0.12em] uppercase px-3 py-2 rounded-full border border-skill-border bg-skill-black text-slate-300">
              9 AM – 1 PM
            </span>
            <span className="text-xs font-heading tracking-[0.12em] uppercase px-3 py-2 rounded-full border border-skill-border bg-skill-black text-slate-300">
              Memorial Stadium
            </span>
            <span className="text-xs font-heading tracking-[0.12em] uppercase px-3 py-2 rounded-full border border-skill-border bg-skill-black text-slate-300">
              Boys Ages 16–19
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/college-pathway#showcase-june-2026" className="btn-primary justify-center sm:justify-start">
              Register Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link to="/college-pathway" className="btn-outline justify-center sm:justify-start">
              View College Pathway
            </Link>
          </div>
        </div>

        <div className="p-8 md:p-10 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <img
            src="/showcase/boys/logo-front.PNG"
            alt="Boys College Showcase Flyer"
            className="w-full rounded-2xl border border-skill-border shadow-lg"
          />

          <img
            src="/showcase/boys/logo-back.PNG"
            alt="Boys Showcase Confirmed Colleges"
            className="w-full rounded-2xl border border-skill-border shadow-lg"
          />
        </div>
      </div>
    </div>
  </div>
</section>
