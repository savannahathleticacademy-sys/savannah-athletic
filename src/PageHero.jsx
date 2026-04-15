export default function PageHero({ label, title, subtitle, children }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-skill-black overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(125,211,252,1) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="absolute inset-0 bg-grain-texture opacity-[0.06] pointer-events-none" />

      <div className="absolute -top-20 right-[8%] w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-[-80px] left-[6%] w-64 h-64 rounded-full bg-accent-green/10 blur-3xl" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="font-display text-[18vw] text-white/[0.03] leading-none select-none whitespace-nowrap uppercase tracking-[0.08em]">
          SKILL MILL
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {label && (
          <div className="flex items-center gap-3 mb-5 animate-fade-up">
            <div className="w-10 h-px bg-primary" />
            <span className="section-label">{label}</span>
          </div>
        )}

        <h1 className="display-heading text-5xl md:text-7xl lg:text-8xl mb-5 animate-fade-up delay-100">
          {title}
        </h1>

        {subtitle && (
          <p className="font-body text-slate-300 text-lg md:text-xl max-w-2xl animate-fade-up delay-200 leading-relaxed">
            {subtitle}
          </p>
        )}

        {children && (
          <div className="mt-8 animate-fade-up delay-300">
            {children}
          </div>
        )}
      </div>
    </section>
  )
}
