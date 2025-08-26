export interface ContactHeroSectionProps {
  title?: string
  subtitle?: string
  className?: string
}

export function ContactHeroSection({ 
  title = 'Kontakt',
  subtitle = 'Bereit für den nächsten Schritt? Lassen Sie uns gemeinsam Ihren Weg zur erfolgreichen Unternehmensnachfolge planen.',
  className = ''
}: ContactHeroSectionProps) {
  return (
    <section className={`bg-white py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}