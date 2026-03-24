export default function PageHero({ label, title, subtitle, children }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-mesh overflow-hidden">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {label && (
          <div className="flex items-center gap-3 mb-4 animate-fade-up">
            <div className="w-8 h-px bg-gold" />
            <span className="section-label">{label}</span>
          </div>
        )}
        <h1 className="display-heading text-5xl md:text-7xl lg:text-8xl mb-4 animate-fade-up delay-100">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-400 text-lg max-w-2xl animate-fade-up delay-200 leading-relaxed">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 animate-fade-up delay-300">{children}</div>}
      </div>
    </section>
  )
}
