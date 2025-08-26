import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRightIcon, PhoneIcon, ChartBarIcon, CurrencyEuroIcon, CheckCircleIcon, ExclamationTriangleIcon, ArrowTrendingUpIcon, LightBulbIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Firma verkaufen ohne Gewinn | SONNTAG AG Gießen',
  description: 'Unternehmen ohne Gewinn verkaufen? SONNTAG AG zeigt Wege zur erfolgreichen Veräußerung durch Wertsteigerung und strategische Positionierung in Gießen.',
  keywords: [
    'Firma verkaufen ohne Gewinn',
    'Unternehmen ohne Profit verkaufen',
    'Verlustunternehmen verkaufen',
    'Sanierungsfall verkaufen',
    'Asset Deal Gießen',
    'Turnaround Verkauf',
    'Restrukturierung vor Verkauf',
    'Notverkauf vermeiden'
  ]
}

export default function FirmaVerkaufenOhneGewinnPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Problem Statement */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full mb-6">
              <ExclamationTriangleIcon className="h-5 w-5 text-red-600" />
              <span className="text-sm font-medium text-red-800">Herausfordernde Verkaufssituation</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
              Firma verkaufen ohne Gewinn
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Auch Unternehmen ohne aktuelle Gewinne haben Wert. 
              Wir entwickeln die richtige Strategie für Ihren erfolgreichen Verkauf.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/kontakt"
                className="rounded-md bg-black px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Kostenlose Analyse
              </Link>
              <a
                href="tel:+496419798500"
                className="flex items-center gap-2 text-base font-semibold text-gray-900"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>Sofortberatung</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Analysis */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-black mb-8">
              Warum Unternehmen trotz fehlender Gewinne wertvoll sind
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                Ein Unternehmen ohne aktuelle Gewinne ist nicht automatisch wertlos. 
                Viele erfolgreiche Verkäufe zeigen: Der wahre Wert liegt oft in anderen Faktoren:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Kundenstamm & Marktposition:</strong> Langjährige Kundenbeziehungen und Marktanteile</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Immaterielle Werte:</strong> Patente, Markenrechte, Know-how, Lizenzen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Qualifizierte Mitarbeiter:</strong> Eingearbeitetes Team mit Spezialwissen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Infrastruktur & Assets:</strong> Maschinen, Immobilien, Lagerbestände</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Synergien für Käufer:</strong> Kosteneinsparungen oder Umsatzsteigerungen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons for Missing Profits */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-black mb-12">
            Typische Gründe für fehlende Gewinne
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg p-6">
              <ChartBarIcon className="h-8 w-8 text-gray-400 mb-4" />
              <h3 className="font-bold text-black mb-2">Marktzyklus</h3>
              <p className="text-sm text-gray-600">
                Temporäre Marktschwäche, Preisdruck oder strukturelle Veränderungen in der Branche
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <CurrencyEuroIcon className="h-8 w-8 text-gray-400 mb-4" />
              <h3 className="font-bold text-black mb-2">Investitionsphase</h3>
              <p className="text-sm text-gray-600">
                Hohe Investitionen in Wachstum, Digitalisierung oder neue Produkte belasten Ergebnis
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <ExclamationTriangleIcon className="h-8 w-8 text-gray-400 mb-4" />
              <h3 className="font-bold text-black mb-2">Einmaleffekte</h3>
              <p className="text-sm text-gray-600">
                Restrukturierungskosten, Rechtsstreitigkeiten oder außerordentliche Aufwendungen
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <ArrowTrendingUpIcon className="h-8 w-8 text-gray-400 mb-4" />
              <h3 className="font-bold text-black mb-2">Managementfehler</h3>
              <p className="text-sm text-gray-600">
                Strategische Fehlentscheidungen oder operative Ineffizienzen
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <LightBulbIcon className="h-8 w-8 text-gray-400 mb-4" />
              <h3 className="font-bold text-black mb-2">Nachfolgeproblem</h3>
              <p className="text-sm text-gray-600">
                Fehlende Nachfolgeplanung führt zu Stagnation und Investitionsstau
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <ChevronRightIcon className="h-8 w-8 text-gray-400 mb-4" />
              <h3 className="font-bold text-black mb-2">Corona-Folgen</h3>
              <p className="text-sm text-gray-600">
                Nachwirkungen der Pandemie, gestörte Lieferketten oder Nachfrageeinbruch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Options */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-black">
              Strategische Verkaufsoptionen
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Verschiedene Ansätze für den erfolgreichen Verkauf
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Quick Turnaround */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-black mb-4">
                Option 1: Quick Turnaround vor Verkauf
              </h3>
              <p className="text-gray-600 mb-6">
                Schnelle Maßnahmen zur Ergebnisverbesserung in 6-12 Monaten:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-black font-bold mr-2">•</span>
                  <span className="text-gray-600">Kostensenkungsprogramm implementieren</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-bold mr-2">•</span>
                  <span className="text-gray-600">Unprofitable Bereiche abstossen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-bold mr-2">•</span>
                  <span className="text-gray-600">Preiserhöhungen durchsetzen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-bold mr-2">•</span>
                  <span className="text-gray-600">Working Capital optimieren</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-green-50 rounded">
                <p className="text-sm text-green-800">
                  <strong>Vorteil:</strong> Höherer Verkaufspreis durch nachweisbare Verbesserung
                </p>
              </div>
            </div>

            {/* Strategic Positioning */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-black mb-4">
                Option 2: Strategische Positionierung
              </h3>
              <p className="text-gray-600 mb-6">
                Fokus auf Synergien und strategischen Wert für Käufer:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-black font-bold mr-2">•</span>
                  <span className="text-gray-600">Marktzugang und Kundenbasis betonen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-bold mr-2">•</span>
                  <span className="text-gray-600">Technologie und Know-how hervorheben</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-bold mr-2">•</span>
                  <span className="text-gray-600">Synergiepotentiale aufzeigen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-bold mr-2">•</span>
                  <span className="text-gray-600">Skaleneffekte für Käufer berechnen</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-blue-50 rounded">
                <p className="text-sm text-blue-800">
                  <strong>Vorteil:</strong> Käufer zahlt für zukünftiges Potential, nicht nur Historie
                </p>
              </div>
            </div>

            {/* Asset Deal */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-black mb-4">
                Option 3: Asset Deal strukturieren
              </h3>
              <p className="text-gray-600 mb-6">
                Verkauf wertvoller Einzelteile statt Gesamtunternehmen:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-black font-bold mr-2">•</span>
                  <span className="text-gray-600">Immobilien separat vermarkten</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-bold mr-2">•</span>
                  <span className="text-gray-600">Maschinenpark einzeln bewerten</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-bold mr-2">•</span>
                  <span className="text-gray-600">Patente und Lizenzen verwerten</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-bold mr-2">•</span>
                  <span className="text-gray-600">Kundenstamm als Asset verkaufen</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-yellow-50 rounded">
                <p className="text-sm text-yellow-800">
                  <strong>Vorteil:</strong> Oft höhere Summe als Gesamtverkauf möglich
                </p>
              </div>
            </div>

            {/* Distressed M&A */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-black mb-4">
                Option 4: Distressed M&A Prozess
              </h3>
              <p className="text-gray-600 mb-6">
                Spezialisierte Investoren für Turnaround-Situationen:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-black font-bold mr-2">•</span>
                  <span className="text-gray-600">Turnaround-Spezialisten ansprechen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-bold mr-2">•</span>
                  <span className="text-gray-600">Restrukturierungskonzept entwickeln</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-bold mr-2">•</span>
                  <span className="text-gray-600">Earn-Out Strukturen verhandeln</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-bold mr-2">•</span>
                  <span className="text-gray-600">Verkäufergarantien minimieren</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-red-50 rounded">
                <p className="text-sm text-red-800">
                  <strong>Vorteil:</strong> Schneller Verkauf auch in schwieriger Lage möglich
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-black mb-12">
            Erfolgreiche Verkäufe trotz fehlender Gewinne
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-black">73%</div>
              <div className="mt-2 text-sm text-gray-600">der Verlustunternehmen finden strategische Käufer</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-black">2-4x</div>
              <div className="mt-2 text-sm text-gray-600">Umsatz als Bewertungsbasis statt Gewinn</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-black">6-9</div>
              <div className="mt-2 text-sm text-gray-600">Monate durchschnittliche Verkaufsdauer</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-black">85%</div>
              <div className="mt-2 text-sm text-gray-600">Arbeitsplatzerhalt bei strategischem Verkauf</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Enhancement */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-black">
              Wertsteigerung vor dem Verkauf
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Konkrete Maßnahmen zur Verbesserung der Verkaufsposition
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Financial Measures */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-black mb-4 flex items-center">
                  <CurrencyEuroIcon className="h-5 w-5 mr-2" />
                  Finanzielle Maßnahmen
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Bilanzbereinigung durchführen</li>
                  <li>• Einmaleffekte herausrechnen</li>
                  <li>• EBITDA-Adjustments vornehmen</li>
                  <li>• Working Capital optimieren</li>
                  <li>• Forderungsmanagement verbessern</li>
                </ul>
              </div>

              {/* Operational Measures */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-black mb-4 flex items-center">
                  <ChartBarIcon className="h-5 w-5 mr-2" />
                  Operative Maßnahmen
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Prozesse digitalisieren</li>
                  <li>• Kostenstruktur verschlanken</li>
                  <li>• Produktportfolio bereinigen</li>
                  <li>• Vertriebseffizienz steigern</li>
                  <li>• Outsourcing-Optionen prüfen</li>
                </ul>
              </div>

              {/* Strategic Measures */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-black mb-4 flex items-center">
                  <LightBulbIcon className="h-5 w-5 mr-2" />
                  Strategische Maßnahmen
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Unique Selling Points definieren</li>
                  <li>• Wachstumsstrategie entwickeln</li>
                  <li>• Synergien identifizieren</li>
                  <li>• Marktposition stärken</li>
                  <li>• Innovationspipeline aufzeigen</li>
                </ul>
              </div>

              {/* Legal Measures */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-black mb-4 flex items-center">
                  <CheckCircleIcon className="h-5 w-5 mr-2" />
                  Rechtliche Maßnahmen
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Verträge standardisieren</li>
                  <li>• Risiken minimieren</li>
                  <li>• Compliance sicherstellen</li>
                  <li>• IP-Rechte sichern</li>
                  <li>• Dokumentation vervollständigen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-black">
              Erfolgsbeispiele aus der Praxis
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Reale Fälle erfolgreicher Verkäufe trotz Verlustsituation
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="bg-white rounded-lg p-6">
              <div className="text-sm font-semibold text-red-600 mb-2">Maschinenbau • Verlust: -1,2 Mio. €</div>
              <h3 className="text-lg font-bold text-black mb-3">
                Turnaround durch strategischen Käufer
              </h3>
              <p className="text-gray-600 mb-4">
                Traditionsunternehmen mit temporären Verlusten durch Marktrückgang. 
                Verkauf an Mitbewerber mit komplementärem Produktportfolio.
              </p>
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Verkaufspreis</span>
                  <span className="font-semibold text-black">8,5 Mio. €</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Bewertung</span>
                  <span className="font-semibold text-black">0,7x Umsatz</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-sm font-semibold text-red-600 mb-2">E-Commerce • Verlust: -800T €</div>
              <h3 className="text-lg font-bold text-black mb-3">
                Asset Deal mit Technologie-Fokus
              </h3>
              <p className="text-gray-600 mb-4">
                Online-Händler in Wachstumsphase mit hohen Investitionen. 
                Verkauf der Plattform-Technologie und Kundenbasis separat.
              </p>
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Verkaufspreis</span>
                  <span className="font-semibold text-black">5,2 Mio. €</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Bewertung</span>
                  <span className="font-semibold text-black">2x ARR</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-sm font-semibold text-red-600 mb-2">Logistik • Verlust: -500T €</div>
              <h3 className="text-lg font-bold text-black mb-3">
                MBO mit Restrukturierung
              </h3>
              <p className="text-gray-600 mb-4">
                Spedition mit Corona-bedingten Verlusten. Management-Buy-Out mit 
                gleichzeitiger Restrukturierung und Investorenunterstützung.
              </p>
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Verkaufspreis</span>
                  <span className="font-semibold text-black">3,8 Mio. €</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Bewertung</span>
                  <span className="font-semibold text-black">Asset-basiert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-black text-center mb-16">
              Häufige Fragen zum Verkauf ohne Gewinn
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-black mb-3">
                  Ist mein Unternehmen überhaupt verkäuflich ohne Gewinn?
                </h3>
                <p className="text-gray-600">
                  Ja, in den meisten Fällen. Entscheidend sind die Ursachen der Verluste und das 
                  Potential für Verbesserungen. Strategische Käufer bewerten oft anders als reine Finanzinvestoren.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">
                  Wie wird der Unternehmenswert ohne Gewinn ermittelt?
                </h3>
                <p className="text-gray-600">
                  Alternative Bewertungsmethoden wie Substanzwert, Umsatzmultiplikatoren, DCF mit 
                  Turnaround-Szenario oder Sum-of-Parts-Bewertung kommen zum Einsatz.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">
                  Sollte ich vor dem Verkauf eine Sanierung durchführen?
                </h3>
                <p className="text-gray-600">
                  Quick-Win-Maßnahmen sind sinnvoll, eine vollständige Sanierung oft nicht. 
                  Viele Käufer bevorzugen es, die Restrukturierung selbst durchzuführen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">
                  Wer kauft Unternehmen ohne Gewinn?
                </h3>
                <p className="text-gray-600">
                  Strategische Käufer (Wettbewerber, Lieferanten, Kunden), Turnaround-Spezialisten, 
                  Private Equity Fonds mit Restrukturierungsfokus oder Management-Teams.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">
                  Wie lange dauert der Verkaufsprozess?
                </h3>
                <p className="text-gray-600">
                  Typischerweise 6-12 Monate. Bei akutem Handlungsbedarf sind auch schnellere 
                  Lösungen in 3-4 Monaten möglich, allerdings oft zu schlechteren Konditionen.
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
              Handeln Sie jetzt - bevor es zu spät ist
            </h2>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
              Je früher Sie handeln, desto mehr Optionen haben Sie. 
              Lassen Sie uns gemeinsam die beste Lösung für Ihr Unternehmen finden.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kontakt"
                className="w-full sm:w-auto rounded-md bg-white px-8 py-3 text-base font-semibold text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Kostenlose Situationsanalyse
              </Link>
              <a
                href="tel:+496419798500"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-md border border-white px-8 py-3 text-base font-semibold text-white hover:bg-white hover:text-black transition-colors"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>Vertrauliches Gespräch</span>
              </a>
            </div>
            <p className="mt-8 text-sm text-gray-400">
              100% vertraulich • Keine Verpflichtungen • Erfahrung aus 200+ Transaktionen
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}