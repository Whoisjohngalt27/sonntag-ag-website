import Link from 'next/link'

export interface ServiceCTASectionProps {
  className?: string
}

export function ServiceCTASection({ className = '' }: ServiceCTASectionProps) {
  return (
    <section className={`py-24 bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-black sm:text-4xl mb-6">
          Bereit für den nächsten Schritt?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Vertrauen Sie Ihre Unternehmensnachfolge den Experten an. 
          25 Jahre Expertise. Über 500 erfolgreiche Verkäufe.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/kontakt"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors"
          >
            Kostenlose Erstberatung
          </Link>
          <a
            href="tel:+496412010370"
            className="inline-flex items-center px-8 py-4 border border-gray-300 text-lg font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            📞 Sofort anrufen
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Direkter Kontakt: service@sonnt-ag.com | Grünberger Str. 148, 35394 Gießen
        </p>
      </div>
    </section>
  )
}