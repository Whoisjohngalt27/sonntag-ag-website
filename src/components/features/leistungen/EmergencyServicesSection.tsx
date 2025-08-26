import Link from 'next/link'

export interface EmergencyServicesSectionProps {
  className?: string
}

export function EmergencyServicesSection({ className = '' }: EmergencyServicesSectionProps) {
  return (
    <section className={`py-24 bg-red-50 border-t border-b border-red-200 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            🚨 Notfall? Wir helfen sofort!
          </h2>
          <p className="text-lg text-gray-600">
            Bei dringenden Fällen stehen wir Ihnen 24/7 zur Verfügung.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/notverkauf-unternehmen-giessen" 
             className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-red-200">
            <h3 className="font-semibold text-black mb-2">Notverkauf Unternehmen</h3>
            <p className="text-sm text-gray-600">Schnelle Hilfe bei akuten Verkaufsnotfällen</p>
          </Link>
          
          <Link href="/schneller-unternehmensverkauf-giessen" 
             className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-red-200">
            <h3 className="font-semibold text-black mb-2">Schneller Verkauf</h3>
            <p className="text-sm text-gray-600">Unternehmensverkauf in 6-12 Wochen</p>
          </Link>
          
          <Link href="/firma-sofort-verkaufen-giessen" 
             className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-red-200">
            <h3 className="font-semibold text-black mb-2">Sofort Verkaufen</h3>
            <p className="text-sm text-gray-600">Firma aus gesundheitlichen Gründen verkaufen</p>
          </Link>
          
          <Link href="/dringend-nachfolger-gesucht-giessen" 
             className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-red-200">
            <h3 className="font-semibold text-black mb-2">Nachfolger gesucht</h3>
            <p className="text-sm text-gray-600">Dringend Nachfolger ohne eigene Familie</p>
          </Link>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-black font-semibold mb-4">
            24h Hotline für Notfälle: <a href="tel:+496412010370" className="text-red-600">+49 (0) 641 201 037 00</a>
          </p>
        </div>
      </div>
    </section>
  )
}