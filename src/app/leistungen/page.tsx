import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Unsere Leistungen | SONNTAG AG - M&A Beratung Gießen',
  description: 'Entdecken Sie unsere Kernleistungen: MARKTWERT (anonymes Bieterverfahren), MEHRWERT (Wertoptimierung) und strategische Nachfolgeberatung für den Mittelstand.',
  keywords: [
    'M&A Beratung Gießen',
    'Unternehmensnachfolge',
    'Anonymes Bieterverfahren',
    'Wertoptimierung',
    'Nachfolgeberatung',
    'Mittelstand'
  ]
}

export default function LeistungenPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
              Unsere Leistungen
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Drei zentrale Leistungen für Ihre erfolgreiche Unternehmensnachfolge. 
              25+ Jahre Erfahrung, über 500 erfolgreiche Transaktionen, maximale Diskretion.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/notverkauf-unternehmen-giessen" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors">
                🚨 Notverkauf - 24h Hotline
              </a>
              <a href="/kontakt" className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                Kostenlose Erstberatung
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MARKTWERT Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">
                MARKTWERT
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Unser anonymes Bieterverfahren ermöglicht es Ihnen, den tatsächlichen Marktwert 
                Ihres Unternehmens zu ermitteln und hochdiskret an den Markt zu gehen. 
                In nur 6-12 Wochen zum optimalen Verkaufserlös.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  Anonyme Vermarktung schützt Ihre Identität
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  Wettbewerb zwischen qualifizierten Käufern
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  Maximale Transparenz im Verkaufsprozess
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  Durchschnittlich 20-40% höhere Verkaufspreise
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  Schnelle Transaktionen in 6-12 Wochen
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  25+ Jahre Erfahrung im anonymen Bieterverfahren
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-4">
                Der MARKTWERT-Prozess
              </h3>
              <div className="text-gray-600 space-y-3">
                <p><strong>Phase 1:</strong> Anonyme Markteinführung ohne Firmenname</p>
                <p><strong>Phase 2:</strong> Qualifizierte Käuferauswahl und -prüfung</p>
                <p><strong>Phase 3:</strong> Strukturierte Bieterrunden für optimale Preise</p>
                <p><strong>Phase 4:</strong> Professionelle Verhandlungsführung</p>
                <p><strong>Phase 5:</strong> Schneller, rechtssicherer Vertragsabschluss</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEHRWERT Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-4">
                MEHRWERT-Methodik
              </h3>
              <div className="text-gray-600 space-y-3">
                <p><strong>1. Potenzialanalyse:</strong> Identifikation aller Wertsteigerungsmöglichkeiten</p>
                <p><strong>2. Maßnahmenplan:</strong> Individueller Plan für die Wertoptimierung</p>
                <p><strong>3. Umsetzung:</strong> Gemeinsame Realisierung der Potenziale</p>
                <p><strong>4. Monitoring:</strong> Kontinuierliche Überwachung der Ergebnisse</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-black mb-6">
                MEHRWERT
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Professionelle Wertsteigerung vor dem Verkauf durch operative Optimierung. 
                14 Jahre Expertise von Prof. Dr. Bastian Heinemann für 20-40% höhere Erlöse.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  Steigerung der Profitabilität um 20-40%
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  Prozessoptimierung und Digitalisierung
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  Organisationsoptimierung und Mitarbeiterentwicklung
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  Kennzahlenbasierte Unternehmenssteuerung
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  14+ Jahre Erfahrung in der Wertoptimierung
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NACHFOLGE Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">
                M&A BERATUNG
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Umfassende M&A Beratung für alle Aspekte der Unternehmensnachfolge. 
                Von der Strategieentwicklung bis zum erfolgreichen Abschluss.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  Strategische Nachfolgeplanung und -entwicklung
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  Professionelle Unternehmensbewertung
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  Käufersuche und Due Diligence Begleitung
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  Verhandlungsführung und Vertragsabschluss
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  Schutz von Arbeitsplätzen und Unternehmenskultur
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-4">
                Spezialisierte Nachfolgeszenarien
              </h3>
              <div className="text-gray-600 space-y-2">
                <p><strong>• Familieninterne Nachfolge:</strong> Qualifizierung von Familiennachfolgern</p>
                <p><strong>• Externe Nachfolge:</strong> Anonyme Käufersuche im In- und Ausland</p>
                <p><strong>• Management-Buy-Out:</strong> Unterstützung bei Finanzierung und Bewertung</p>
                <p><strong>• Sanierung:</strong> Bewertung und Planung bei wirtschaftlichen Schwierigkeiten</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Comparison Table */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-16">
            Welcher Service passt zu Ihnen?
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-black">Kriterium</th>
                  <th className="px-6 py-4 text-center font-semibold text-black">MARKTWERT</th>
                  <th className="px-6 py-4 text-center font-semibold text-black">MEHRWERT</th>
                  <th className="px-6 py-4 text-center font-semibold text-black">M&A BERATUNG</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Dauer</td>
                  <td className="px-6 py-4 text-center text-gray-600">6-12 Wochen</td>
                  <td className="px-6 py-4 text-center text-gray-600">3-12 Monate</td>
                  <td className="px-6 py-4 text-center text-gray-600">6-18 Monate</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Wertsteigerung</td>
                  <td className="px-6 py-4 text-center text-gray-600">15-25%</td>
                  <td className="px-6 py-4 text-center text-gray-600">20-40%</td>
                  <td className="px-6 py-4 text-center text-gray-600">Individuell</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Ideal für</td>
                  <td className="px-6 py-4 text-center text-gray-600">Schneller Verkauf</td>
                  <td className="px-6 py-4 text-center text-gray-600">Wertoptimierung</td>
                  <td className="px-6 py-4 text-center text-gray-600">Komplexe Fälle</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Besonderheit</td>
                  <td className="px-6 py-4 text-center text-gray-600">Anonym</td>
                  <td className="px-6 py-4 text-center text-gray-600">Operational</td>
                  <td className="px-6 py-4 text-center text-gray-600">Ganzheitlich</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Expert Team */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-16">
            Unsere Experten für Ihren Erfolg
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-600 font-bold text-lg">TS</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black">Thomas Sonntag</h3>
                  <p className="text-gray-600">Geschäftsführer MARKTWERT</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                25 Jahre Erfahrung im Unternehmensverkauf. Entwickler des anonymen Bieterverfahrens 
                mit über 500 erfolgreichen Transaktionen.
              </p>
              <div className="text-sm text-gray-600">
                <p><strong>Expertise:</strong> Anonyme Bieterverfahren, Marktanalyse, Verhandlungsführung</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-600 font-bold text-lg">BH</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black">Prof. Dr. Bastian Heinemann</h3>
                  <p className="text-gray-600">Geschäftsführer MEHRWERT</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                14 Jahre Expertise in der operativen Wertsteigerung. Professor für Betriebswirtschaftslehre 
                und Equity Partner einer Unternehmensberatung.
              </p>
              <div className="text-sm text-gray-600">
                <p><strong>Expertise:</strong> Operative Wertsteigerung, Prozessoptimierung, Change Management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-16">
            Erfolgsgeschichten unserer Kunden
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-black mb-3">Traditionsbetrieb Gießen</h3>
              <p className="text-gray-600 text-sm mb-4">
                Familienbetrieb mit 25 Mitarbeitern, Inhaber 65 Jahre alt
              </p>
              <div className="border-l-4 border-gray-300 pl-4">
                <p className="text-gray-600 text-sm mb-2">
                  <strong>Lösung:</strong> MEHRWERT + MARKTWERT Kombination
                </p>
                <p className="text-green-600 font-semibold">
                  Ergebnis: 45% Wertsteigerung in 8 Wochen
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-black mb-3">Tech-Unternehmen Marburg</h3>
              <p className="text-gray-600 text-sm mb-4">
                Wachsendes Unternehmen ohne Nachfolger
              </p>
              <div className="border-l-4 border-gray-300 pl-4">
                <p className="text-gray-600 text-sm mb-2">
                  <strong>Lösung:</strong> M&A Beratung mit internationaler Käufersuche
                </p>
                <p className="text-green-600 font-semibold">
                  Ergebnis: 3x höherer Preis als erwartet
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-black mb-3">Handwerksbetrieb Lahn-Dill</h3>
              <p className="text-gray-600 text-sm mb-4">
                Inhaberabhängiges Unternehmen mit geringer Profitabilität
              </p>
              <div className="border-l-4 border-gray-300 pl-4">
                <p className="text-gray-600 text-sm mb-2">
                  <strong>Lösung:</strong> MEHRWERT-Service, dann MARKTWERT-Verkauf
                </p>
                <p className="text-green-600 font-semibold">
                  Ergebnis: 60% Steigerung der Profitabilität
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-24 bg-red-50 border-t border-b border-red-200">
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
            <a href="/notverkauf-unternehmen-giessen" 
               className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-red-200">
              <h3 className="font-semibold text-black mb-2">Notverkauf Unternehmen</h3>
              <p className="text-sm text-gray-600">Schnelle Hilfe bei akuten Verkaufsnotfällen</p>
            </a>
            
            <a href="/schneller-unternehmensverkauf-giessen" 
               className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-red-200">
              <h3 className="font-semibold text-black mb-2">Schneller Verkauf</h3>
              <p className="text-sm text-gray-600">Unternehmensverkauf in 6-12 Wochen</p>
            </a>
            
            <a href="/firma-sofort-verkaufen-giessen" 
               className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-red-200">
              <h3 className="font-semibold text-black mb-2">Sofort Verkaufen</h3>
              <p className="text-sm text-gray-600">Firma aus gesundheitlichen Gründen verkaufen</p>
            </a>
            
            <a href="/dringend-nachfolger-gesucht-giessen" 
               className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-red-200">
              <h3 className="font-semibold text-black mb-2">Nachfolger gesucht</h3>
              <p className="text-sm text-gray-600">Dringend Nachfolger ohne eigene Familie</p>
            </a>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-black font-semibold mb-4">
              24h Hotline für Notfälle: <a href="tel:+496412010370" className="text-red-600">+49 (0) 641 201 037 00</a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black sm:text-4xl mb-6">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Vertrauen Sie Ihre Unternehmensnachfolge den Experten an. 
            25 Jahre Expertise. Über 500 erfolgreiche Verkäufe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontakt"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors"
            >
              Kostenlose Erstberatung
            </a>
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
    </main>
  )
}
