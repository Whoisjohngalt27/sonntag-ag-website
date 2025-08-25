import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Transaktionen | SONNTAG AG - M&A Beratung Gießen',
  description: 'Erfolgreiche Transaktionen und Referenzen der SONNTAG AG. Entdecken Sie unsere Erfolgsgeschichten in der Unternehmensnachfolge und M&A Beratung.',
  keywords: [
    'M&A Transaktionen Gießen',
    'Unternehmensnachfolge Erfolge',
    'Referenzen M&A Beratung',
    'Erfolgreiche Verkäufe',
    'Mittelstand Transaktionen'
  ]
}

export default function TransaktionenPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
              Unsere Transaktionen
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              25+ Jahre erfolgreiche Transaktionen in der Unternehmensnachfolge. 
              Wir haben zahlreiche Lebenswerke erfolgreich übertragen.
            </p>
          </div>
        </div>
      </section>

      {/* Success Statistics */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-black mb-2">25+</div>
              <div className="text-gray-600">Jahre Erfahrung</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">200+</div>
              <div className="text-gray-600">Erfolgreiche Transaktionen</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">€500M+</div>
              <div className="text-gray-600">Transaktionsvolumen</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">98%</div>
              <div className="text-gray-600">Zufriedenheitsrate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Transaction Categories */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-16">
            Unsere Transaktionsbereiche
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-black mb-4">
                MARKTWERT Transaktionen
              </h3>
              <p className="text-gray-600 mb-4">
                Anonyme Bieterverfahren mit optimalen Verkaufserlösen
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Durchschnittliche Wertsteigerung: 15-25%</li>
                <li>• Anonymität während des gesamten Prozesses</li>
                <li>• Wettbewerb zwischen qualifizierten Käufern</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-black mb-4">
                MEHRWERT Transaktionen
              </h3>
              <p className="text-gray-600 mb-4">
                Wertoptimierung vor dem Verkauf für maximale Erlöse
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Durchschnittliche Wertsteigerung: 20-40%</li>
                <li>• Strategische Prozessoptimierung</li>
                <li>• Finanzielle Restrukturierung</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-black mb-4">
                M&A BERATUNG
              </h3>
              <p className="text-gray-600 mb-4">
                Umfassende Beratung für komplexe Nachfolgeszenarien in 6-18 Monaten.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Erhalt von Arbeitsplätzen</li>
                <li>• Bewahrung der Unternehmenskultur</li>
                <li>• Langfristige Erfolgsplanung</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Sectors */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-16">
            Branchenerfahrung
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-semibold text-black mb-2">Industrie</div>
              <div className="text-gray-600">Maschinenbau, Automatisierung</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-black mb-2">Handel</div>
              <div className="text-gray-600">Einzel- und Großhandel</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-black mb-2">Dienstleistungen</div>
              <div className="text-gray-600">Beratung, IT, Logistik</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-black mb-2">Handwerk</div>
              <div className="text-gray-600">Traditionelle Handwerksbetriebe</div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Success Stories */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-16">
            Erfolgsgeschichten - Beweis unserer Expertise
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Case Study 1 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-black">Traditionsbetrieb Gießen</h3>
                <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">MARKTWERT + MEHRWERT</span>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Ausgangssituation:</h4>
                <p className="text-gray-600 text-sm">Familienbetrieb mit 25 Mitarbeitern, Inhaber 65 Jahre alt, stagnierende Umsätze</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Unsere Lösung:</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Kombination aus MEHRWERT (Wertsteigerung) und MARKTWERT (Verkauf)</li>
                  <li>• Digitalisierung der Prozesse und Kostenstrukturoptimierung</li>
                  <li>• Anonymes Bieterverfahren mit qualifizierten Käufern</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-green-600 mb-2">Ergebnis:</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-600">45%</div>
                    <div className="text-xs text-gray-600">Wertsteigerung</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">8</div>
                    <div className="text-xs text-gray-600">Wochen bis Verkauf</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Case Study 2 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-black">Technologieunternehmen Marburg</h3>
                <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">M&A BERATUNG</span>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Ausgangssituation:</h4>
                <p className="text-gray-600 text-sm">Wachsendes Unternehmen, Inhaber ohne Nachfolger, internationale Interessenten</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Unsere Lösung:</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Umfassende M&A Beratung mit internationaler Käufersuche</li>
                  <li>• Bewertung verschiedener Verkaufsoptionen</li>
                  <li>• Professionelle Due Diligence Begleitung</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-blue-600 mb-2">Ergebnis:</h4>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">3x</div>
                  <div className="text-xs text-gray-600">höherer Preis als ursprünglich erwartet</div>
                  <p className="text-sm text-gray-600 mt-2">Verkauf an internationalen Konzern</p>
                </div>
              </div>
            </div>
            
            {/* Case Study 3 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-black">Handwerksbetrieb Lahn-Dill-Kreis</h3>
                <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full">MEHRWERT</span>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Ausgangssituation:</h4>
                <p className="text-gray-600 text-sm">Inhaberabhängiges Unternehmen, geringe Profitabilität, unklare Prozesse</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Unsere Lösung:</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• MEHRWERT-Service zur Wertsteigerung vor Verkauf</li>
                  <li>• Prozessoptimierung und Lean-Management</li>
                  <li>• Aufbau von Managementstrukturen</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-purple-600 mb-2">Ergebnis:</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">60%</div>
                    <div className="text-xs text-gray-600">Profitabilitätssteigerung</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">100%</div>
                    <div className="text-xs text-gray-600">Erfolgreicher Verkauf</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Case Study 4 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-black">Dienstleistungsunternehmen Wetzlar</h3>
                <span className="text-sm bg-orange-100 text-orange-800 px-3 py-1 rounded-full">M&A BERATUNG</span>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Ausgangssituation:</h4>
                <p className="text-gray-600 text-sm">Komplexe Eigentümerstruktur, mehrere Gesellschafter mit unterschiedlichen Zielen</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Unsere Lösung:</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Strukturierte M&A Beratung mit allen Beteiligten</li>
                  <li>• Moderation zwischen verschiedenen Interessensgruppen</li>
                  <li>• Lösungsfindung für komplexe Gesellschafterstrukturen</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-orange-600 mb-2">Ergebnis:</h4>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Einvernehmliche Lösung für alle Beteiligten</p>
                  <p className="text-sm text-gray-600">Erfolgreicher Verkauf an Management-Team</p>
                  <div className="text-lg font-bold text-orange-600 mt-2">Win-Win für alle</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Success Factors */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-16">
            Unsere Erfolgsfaktoren
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-black mb-3">Anonymität</h3>
              <p className="text-gray-600 text-sm">Vollständige Diskretion schützt Ihr Unternehmen und Ihre Mitarbeiter während des gesamten Prozesses.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-black mb-3">Wertsteigerung</h3>
              <p className="text-gray-600 text-sm">Operative Optimierung vor dem Verkauf steigert Ihren Unternehmenswert um 20-40%.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="text-lg font-semibold text-black mb-3">Geschwindigkeit</h3>
              <p className="text-gray-600 text-sm">Strukturierte Prozesse und qualifizierte Käufer ermöglichen Transaktionen in 6-12 Wochen.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-black mb-3">Der Richtige</h3>
              <p className="text-gray-600 text-sm">Wir finden nicht den Meistbietenden, sondern den richtigen Nachfolger für Ihr Lebenswerk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-16">
            Was unsere Kunden sagen
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-600 mb-6 italic">
                "SONNTAG AG hat unseren Verkaufsprozess professionell und diskret begleitet. 
                Das anonyme Bieterverfahren hat uns einen optimalen Erlös gebracht."
              </p>
              <div className="text-sm text-gray-800">
                <div className="font-semibold">Familienunternehmen Mittelhessen</div>
                <div className="text-gray-600">Maschinenbau, 50 Mitarbeiter</div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-600 mb-6 italic">
                "Durch die Wertoptimierung vor dem Verkauf haben wir 30% mehr Erlös 
                erzielt als ursprünglich erwartet."
              </p>
              <div className="text-sm text-gray-800">
                <div className="font-semibold">Handelsunternehmen Gießen</div>
                <div className="text-gray-600">Einzelhandel, 25 Mitarbeiter</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black sm:text-4xl mb-6">
            Bereit für Ihre erfolgreiche Transaktion?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Werden auch Sie Teil unserer Erfolgsgeschichten. 
            Über 500 Unternehmer haben bereits auf unsere Expertise vertraut.
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
            service@sonnt-ag.com | Grünberger Str. 148, 35394 Gießen
          </p>
        </div>
      </section>
    </main>
  )
}
