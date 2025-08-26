import Link from 'next/link'

export interface ServiceHeroSectionProps {
  title?: string
  subtitle?: string
  className?: string
  showCTA?: boolean
}

export function ServiceHeroSection({ 
  title = 'Unsere Leistungen',
  subtitle = 'Drei zentrale Leistungen für Ihre erfolgreiche Unternehmensnachfolge. 25+ Jahre Erfahrung, über 500 erfolgreiche Transaktionen, maximale Diskretion.',
  className = '',
  showCTA = true
}: ServiceHeroSectionProps) {
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
          {showCTA && (
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/notverkauf-unternehmen-giessen" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors">
                🚨 Notverkauf - 24h Hotline
              </Link>
              <Link href="/kontakt" className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                Kostenlose Erstberatung
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}