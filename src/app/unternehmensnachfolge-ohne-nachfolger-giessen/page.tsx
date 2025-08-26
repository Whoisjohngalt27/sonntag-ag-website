import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRightIcon, PhoneIcon, UserGroupIcon, LightBulbIcon, CheckCircleIcon, ExclamationTriangleIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Unternehmensnachfolge ohne Nachfolger | SONNTAG AG Gießen',
  description: 'Professionelle Lösungen für Unternehmensnachfolge ohne familieninternen Nachfolger in Gießen. SONNTAG AG findet den optimalen Käufer für Ihr Lebenswerk.',
  keywords: [
    'Unternehmensnachfolge ohne Nachfolger',
    'Nachfolgeregelung Gießen',
    'Externer Nachfolger',
    'Management Buy-Out',
    'Management Buy-In',
    'Strategischer Käufer',
    'Familienunternehmen Nachfolge',
    'Mittelstand Nachfolge Hessen'
  ]
}

export default function UnternehmensnachfolgeOhneNachfolgerPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Problem Statement */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full mb-6">
              <ExclamationTriangleIcon className="h-5 w-5 text-amber-600" />
              <span className="text-sm font-medium text-amber-800">Häufigste Nachfolge-Herausforderung</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
              Unternehmensnachfolge ohne Nachfolger
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Kein Familienmitglied will oder kann Ihr Unternehmen übernehmen? 
              Wir finden die optimale Lösung für Ihr Lebenswerk.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/kontakt"
                className="rounded-md bg-black px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Kostenlose Erstberatung
              </Link>
              <a
                href="tel:+496419798500"
                className="flex items-center gap-2 text-base font-semibold text-gray-900"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>+49 641 97985-00</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Description */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-black mb-8">
              Die Herausforderung: Keine familieninterne Nachfolge
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                <strong>67% aller Familienunternehmen</strong> in Deutschland stehen in den nächsten Jahren vor der 
                Nachfolgefrage. In über der Hälfte der Fälle gibt es keinen familieninternen Nachfolger. 
                Die Gründe sind vielfältig:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Kinder haben andere berufliche Interessen oder Qualifikationen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Keine Kinder vorhanden oder diese leben im Ausland</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Führungskräfte im Unternehmen fehlt das Kapital für einen Buy-Out</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Komplexität des Unternehmens übersteigt die Fähigkeiten potentieller Nachfolger</span>
                </li>
              </ul>
              <p className="mt-6">
                Ohne rechtzeitige Planung droht die Zerschlagung oder der Notverkauf unter Wert. 
                Ihr Lebenswerk und die Arbeitsplätze Ihrer Mitarbeiter sind gefährdet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics & Impact */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-black">30.000</div>
              <div className="mt-2 text-sm text-gray-600">Unternehmen jährlich ohne Nachfolger</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-black">400.000</div>
              <div className="mt-2 text-sm text-gray-600">Gefährdete Arbeitsplätze</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-black">5 Jahre</div>
              <div className="mt-2 text-sm text-gray-600">Durchschnittliche Vorbereitungszeit</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-black">-40%</div>
              <div className="mt-2 text-sm text-gray-600">Wertverlust bei Notverkauf</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Options */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-black">
              Ihre Optionen für eine erfolgreiche Nachfolge
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Verschiedene Wege führen zum Ziel - wir finden den optimalen für Sie
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Management Buy-Out */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center justify-center w-12 h-12 bg-black rounded-lg mb-6">
                <UserGroupIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Management Buy-Out (MBO)</h3>
              <p className="text-gray-600 mb-6">
                Übernahme durch das bestehende Management-Team. Ideal wenn kompetente Führungskräfte vorhanden sind.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Kontinuität in der Führung</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Erhalt der Unternehmenskultur</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Schnelle Umsetzung möglich</span>
                </li>
              </ul>
            </div>

            {/* Strategic Buyer */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center justify-center w-12 h-12 bg-black rounded-lg mb-6">
                <ArrowTrendingUpIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Strategischer Käufer</h3>
              <p className="text-gray-600 mb-6">
                Verkauf an ein anderes Unternehmen aus der Branche. Oft höchste Kaufpreise durch Synergien.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Maximaler Verkaufspreis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Zugang zu neuen Märkten</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Wachstumsperspektiven</span>
                </li>
              </ul>
            </div>

            {/* Financial Investor */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center justify-center w-12 h-12 bg-black rounded-lg mb-6">
                <LightBulbIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Finanzinvestor</h3>
              <p className="text-gray-600 mb-6">
                Private Equity oder Family Offices als Partner. Professionelle Weiterentwicklung Ihres Unternehmens.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Kapital für Wachstum</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Professionalisierung</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Flexible Beteiligung möglich</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-black">
              Der Weg zur erfolgreichen Nachfolge
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Strukturiert und diskret zum optimalen Nachfolger
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-black mb-2">Analyse & Vorbereitung</h3>
                  <p className="text-gray-600">
                    Umfassende Bewertung Ihres Unternehmens, Identifikation von Werttreibern und 
                    Optimierungspotentialen. Erstellung aussagekräftiger Verkaufsunterlagen.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-black mb-2">Anonyme Käufersuche</h3>
                  <p className="text-gray-600">
                    Diskrete Ansprache potentieller Nachfolger ohne Preisgabe Ihrer Identität. 
                    Aufbau eines kontrollierten Bieterverfahrens.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-black mb-2">Verhandlung & Due Diligence</h3>
                  <p className="text-gray-600">
                    Professionelle Verhandlungsführung, Koordination der Due Diligence, 
                    Maximierung des Verkaufspreises bei optimalen Konditionen.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-black mb-2">Vertragsabschluss & Übergabe</h3>
                  <p className="text-gray-600">
                    Rechtssichere Vertragsgestaltung, strukturierte Übergabe und 
                    Begleitung in der Übergangsphase für einen reibungslosen Übergang.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-black">
              Erfolgreiche Nachfolgelösungen aus der Region
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Beispiele gelungener Nachfolgeregelungen ohne Familiennachfolger
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm font-semibold text-gray-500 mb-2">Maschinenbau</div>
              <h3 className="text-lg font-bold text-black mb-3">
                MBO mit 45 Mitarbeitern
              </h3>
              <p className="text-gray-600 mb-4">
                Familienunternehmen ohne Nachfolger erfolgreich an das Management-Team verkauft. 
                Alle Arbeitsplätze erhalten, Wachstum fortgesetzt.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Transaktionswert</span>
                  <span className="font-semibold text-black">12 Mio. €</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm font-semibold text-gray-500 mb-2">Handel</div>
              <h3 className="text-lg font-bold text-black mb-3">
                Strategischer Verkauf
              </h3>
              <p className="text-gray-600 mb-4">
                Regionaler Marktführer an bundesweiten Mitbewerber verkauft. 
                Synergien genutzt, Standort gestärkt.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Transaktionswert</span>
                  <span className="font-semibold text-black">8 Mio. €</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm font-semibold text-gray-500 mb-2">Dienstleistung</div>
              <h3 className="text-lg font-bold text-black mb-3">
                Private Equity Partner
              </h3>
              <p className="text-gray-600 mb-4">
                IT-Dienstleister mit Investor als Partner. Digitalisierung vorangetrieben, 
                Umsatz in 3 Jahren verdoppelt.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Transaktionswert</span>
                  <span className="font-semibold text-black">15 Mio. €</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-black text-center mb-16">
              Häufige Fragen zur Nachfolge ohne Nachfolger
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-black mb-3">
                  Wann ist der richtige Zeitpunkt für die Nachfolgeplanung?
                </h3>
                <p className="text-gray-600">
                  Beginnen Sie mindestens 3-5 Jahre vor dem geplanten Ausstieg. Dies gibt Ihnen Zeit für 
                  Wertsteigerungsmaßnahmen und die Suche nach dem optimalen Nachfolger ohne Zeitdruck.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">
                  Wie finde ich den richtigen Käufer für mein Unternehmen?
                </h3>
                <p className="text-gray-600">
                  Durch unser anonymes Bieterverfahren erreichen wir eine große Anzahl qualifizierter Interessenten. 
                  Die systematische Auswahl erfolgt nach Ihren Kriterien: Kaufpreis, Unternehmensfortführung, 
                  Mitarbeitersicherheit.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">
                  Was passiert mit meinen Mitarbeitern?
                </h3>
                <p className="text-gray-600">
                  Der Erhalt der Arbeitsplätze ist oft ein zentrales Kriterium bei der Käuferauswahl. 
                  Wir verhandeln entsprechende Garantien und Übergangsregelungen in den Kaufvertrag.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">
                  Kann ich nach dem Verkauf noch im Unternehmen bleiben?
                </h3>
                <p className="text-gray-600">
                  Ja, viele Käufer wünschen eine Übergangsphase mit dem bisherigen Inhaber. 
                  Die Dauer und Konditionen werden individuell vereinbart - von wenigen Monaten bis zu mehreren Jahren.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">
                  Wie diskret läuft der Verkaufsprozess ab?
                </h3>
                <p className="text-gray-600">
                  Absolute Diskretion hat oberste Priorität. Die Erstansprache erfolgt anonym, 
                  Vertraulichkeitsvereinbarungen werden abgeschlossen und Informationen nur kontrolliert weitergegeben.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Sichern Sie die Zukunft Ihres Lebenswerks
            </h2>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
              Auch ohne familieninternen Nachfolger gibt es exzellente Lösungen. 
              Lassen Sie uns gemeinsam den optimalen Weg für Ihr Unternehmen finden.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kontakt"
                className="w-full sm:w-auto rounded-md bg-white px-8 py-3 text-base font-semibold text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Kostenlose Erstberatung vereinbaren
              </Link>
              <a
                href="tel:+496419798500"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-md border border-white px-8 py-3 text-base font-semibold text-white hover:bg-white hover:text-black transition-colors"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>Sofort anrufen</span>
              </a>
            </div>
            <p className="mt-8 text-sm text-gray-400">
              Über 200 erfolgreiche Nachfolgeregelungen in Mittelhessen
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}