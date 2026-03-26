export default function PageHero({ label, title, subtitle, children }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-mesh overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Soft glow accents */}
      <div className="absolute -top-20 right-[8%] w-72 h-72 rounded-full bg-blue/10 blur-3xl" />
      <div className="absolute bottom-[-80px] left-[6%] w-64 h-64 rounded-full bg-green/10 blur-3xl" />

      {/* Background wordmark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="font-display text-[18vw] text-white/[0.03] leading-none select-none whitespace-nowrap">
          SAVANNAH
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {label && (
          <div className="flex items-center gap-3 mb-5 animate-fade-up">
            <div className="w-10 h-px bg-blue" />
            <span className="section-label">{label}</span>
          </div>
        )}

        <h1 className="display-heading text-5xl md:text-7xl lg:text-8xl mb-5 animate-fade-up delay-100">
          {title}
        </h1>

        {subtitle && (
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl animate-fade-up delay-200 leading-relaxed">
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
