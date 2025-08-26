import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRightIcon, PhoneIcon, ClockIcon, UserGroupIcon, CheckCircleIcon, ExclamationTriangleIcon, HeartIcon, CalendarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Altersbedingte Geschäftsaufgabe | SONNTAG AG Gießen',
  description: 'Professionelle Begleitung bei altersbedingter Geschäftsaufgabe in Gießen. SONNTAG AG sichert Ihr Lebenswerk und maximiert den Verkaufserlös für Ihren Ruhestand.',
  keywords: [
    'Altersbedingte Geschäftsaufgabe',
    'Ruhestand Unternehmensverkauf',
    'Altersvorsorge Firmenverkauf',
    'Betriebsaufgabe Alter',
    'Seniorunternehmer Nachfolge',
    'Lebenswerk sichern',
    'Rente durch Unternehmensverkauf',
    'Nachfolge Gießen'
  ]
}

export default function AltersbedingteGeschaeftsaufgabePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Emotional Appeal */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
              <HeartIcon className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Ihr Lebenswerk in guten Händen</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
              Altersbedingte Geschäftsaufgabe
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Nach Jahrzehnten erfolgreicher Unternehmensführung ist es Zeit für den wohlverdienten Ruhestand. 
              Wir sorgen für einen würdigen Abschluss und maximale Sicherheit.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/kontakt"
                className="rounded-md bg-black px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Vertrauliches Erstgespräch
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

      {/* Emotional Introduction */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-black mb-8">
              Ihr Lebenswerk verdient den besten Abschluss
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                Sie haben Jahrzehnte Ihres Lebens in Ihr Unternehmen investiert. Sie haben es aufgebaut, 
                durch Krisen geführt und zu dem gemacht, was es heute ist. Jetzt, mit 60, 65 oder 70 Jahren, 
                steht eine der wichtigsten Entscheidungen Ihres Unternehmerlebens an.
              </p>
              <p className="mt-6">
                <strong>Die altersbedingte Geschäftsaufgabe ist mehr als nur ein Verkauf</strong> - 
                es ist der Übergang in einen neuen Lebensabschnitt, die Sicherung Ihrer Altersvorsorge 
                und die Weitergabe Ihres Lebenswerks in verantwortungsvolle Hände.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-black mb-12">
            Die Realität der Unternehmensnachfolge in Deutschland
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-black">190.000</div>
              <div className="mt-2 text-sm text-gray-600">Unternehmer über 60 Jahre suchen Nachfolger</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-black">Ø 67</div>
              <div className="mt-2 text-sm text-gray-600">Jahre beim Unternehmensverkauf</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-black">43%</div>
              <div className="mt-2 text-sm text-gray-600">haben keine geregelte Nachfolge</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-black">2,4 Mio.</div>
              <div className="mt-2 text-sm text-gray-600">Arbeitsplätze betroffen</div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-black">
              Typische Herausforderungen bei der altersbedingten Aufgabe
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Diese Sorgen und Fragen beschäftigen Seniorunternehmer
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Emotional Challenges */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <HeartIcon className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-xl font-bold text-black">Emotionale Herausforderungen</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Loslassen nach Jahrzehnten der Verantwortung</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Sorge um die Zukunft der Mitarbeiter</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Angst vor der Leere nach dem Verkauf</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Zweifel am richtigen Zeitpunkt</span>
                </li>
              </ul>
            </div>

            {/* Practical Challenges */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <CalendarIcon className="h-8 w-8 text-blue-500 mr-3" />
                <h3 className="text-xl font-bold text-black">Praktische Herausforderungen</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Unternehmensbewertung und Preisfindung</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Steueroptimale Gestaltung des Verkaufs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Absicherung der Altersvorsorge</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Gesundheitliche Einschränkungen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline for Planning */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-black">
              Der optimale Zeitplan für Ihre Nachfolge
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Rechtzeitige Planung sichert den bestmöglichen Verkaufserfolg
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {/* 5 Years Before */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-blue-600">5J</span>
                  </div>
                  <div className="ml-8">
                    <h3 className="text-lg font-bold text-black mb-2">5 Jahre vorher: Erste Überlegungen</h3>
                    <p className="text-gray-600">
                      Strategische Ausrichtung prüfen, Nachfolgeoptionen evaluieren, 
                      erste Wertsteigerungsmaßnahmen einleiten.
                    </p>
                  </div>
                </div>

                {/* 3 Years Before */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-blue-700">3J</span>
                  </div>
                  <div className="ml-8">
                    <h3 className="text-lg font-bold text-black mb-2">3 Jahre vorher: Konkrete Vorbereitung</h3>
                    <p className="text-gray-600">
                      Unternehmensbewertung durchführen, Schwachstellen beseitigen, 
                      Dokumentation vervollständigen, Berater auswählen.
                    </p>
                  </div>
                </div>

                {/* 1 Year Before */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-blue-800">1J</span>
                  </div>
                  <div className="ml-8">
                    <h3 className="text-lg font-bold text-black mb-2">1 Jahr vorher: Aktive Vermarktung</h3>
                    <p className="text-gray-600">
                      Verkaufsprozess starten, Interessenten ansprechen, 
                      Verhandlungen führen, Due Diligence vorbereiten.
                    </p>
                  </div>
                </div>

                {/* Sale */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircleIcon className="h-8 w-8 text-white" />
                  </div>
                  <div className="ml-8">
                    <h3 className="text-lg font-bold text-black mb-2">Verkauf & Übergabe</h3>
                    <p className="text-gray-600">
                      Vertragsabschluss, strukturierte Übergabe, 
                      Begleitung in der Übergangsphase nach Bedarf.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Options for Retirement */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-black">
              Ihre Optionen für den Ruhestand
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Verschiedene Wege führen zu einem erfolgreichen Übergang
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Complete Sale */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center justify-center w-12 h-12 bg-black rounded-lg mb-6">
                <ShieldCheckIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Komplettverkauf</h3>
              <p className="text-gray-600 mb-6">
                Vollständiger Verkauf mit sofortiger oder gestaffelter Übergabe. 
                Maximale finanzielle Sicherheit für den Ruhestand.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Einmaliger Verkaufserlös</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Klarer Schnitt möglich</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Steueroptimierung möglich</span>
                </li>
              </ul>
            </div>

            {/* Gradual Exit */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center justify-center w-12 h-12 bg-black rounded-lg mb-6">
                <ClockIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Schrittweiser Ausstieg</h3>
              <p className="text-gray-600 mb-6">
                Verkauf mit verlängerter Übergangsphase. Sie bleiben noch 1-3 Jahre 
                beratend tätig.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Sanfter Übergang</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Zusätzliches Einkommen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Wissenstransfer gesichert</span>
                </li>
              </ul>
            </div>

            {/* Family Office */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center justify-center w-12 h-12 bg-black rounded-lg mb-6">
                <UserGroupIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Familienlösung</h3>
              <p className="text-gray-600 mb-6">
                Verkauf an Familienmitglieder oder Mitarbeiter mit externer 
                Finanzierung und Ihrer Begleitung.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Lebenswerk bleibt erhalten</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Emotionale Bindung</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Flexible Gestaltung</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Security */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-black">
              Finanzielle Sicherheit für Ihren Ruhestand
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              So optimieren Sie Ihren Verkaufserlös und sichern Ihre Altersvorsorge
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold text-black mb-6">Steueroptimierung</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold text-green-600">1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-black">Freibeträge nutzen</p>
                    <p className="text-sm text-gray-600">Altersentlastungsbetrag und Veräußerungsfreibeträge optimal einsetzen</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold text-green-600">2</span>
                  </div>
                  <div>
                    <p className="font-semibold text-black">Fünftelregelung</p>
                    <p className="text-sm text-gray-600">Steuerliche Begünstigung bei Veräußerungsgewinnen</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold text-green-600">3</span>
                  </div>
                  <div>
                    <p className="font-semibold text-black">Zeitpunkt optimieren</p>
                    <p className="text-sm text-gray-600">Verkauf im optimalen Steuerjahr planen</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold text-black mb-6">Vermögensanlage</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold text-blue-600">1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-black">Diversifikation</p>
                    <p className="text-sm text-gray-600">Verkaufserlös breit streuen für Sicherheit</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold text-blue-600">2</span>
                  </div>
                  <div>
                    <p className="font-semibold text-black">Rentenoptionen</p>
                    <p className="text-sm text-gray-600">Private Rentenversicherungen oder Auszahlpläne</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold text-blue-600">3</span>
                  </div>
                  <div>
                    <p className="font-semibold text-black">Inflationsschutz</p>
                    <p className="text-sm text-gray-600">Sachwerte und inflationsgeschützte Anlagen</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-black">
              Erfolgreiche Übergänge in den Ruhestand
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Beispiele gelungener altersbedingter Geschäftsaufgaben aus der Region
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm font-semibold text-blue-600 mb-2">Handwerk • 68 Jahre</div>
              <h3 className="text-lg font-bold text-black mb-3">
                Elektromeister übergibt an Gesellen
              </h3>
              <p className="text-gray-600 mb-4">
                Nach 42 Jahren erfolgreiche Übergabe an langjährigen Mitarbeiter. 
                Finanzierung durch Bürgschaftsbank ermöglicht.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  "Die beste Entscheidung meines Lebens. Mein Lebenswerk ist in guten Händen 
                  und ich genieße meinen Ruhestand."
                </p>
                <p className="text-xs text-gray-500 mt-2">- Herbert M., Gießen</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm font-semibold text-blue-600 mb-2">Einzelhandel • 72 Jahre</div>
              <h3 className="text-lg font-bold text-black mb-3">
                Traditionsgeschäft nach 3 Generationen
              </h3>
              <p className="text-gray-600 mb-4">
                Familienunternehmen an strategischen Käufer verkauft. 
                Marke und Standort bleiben erhalten.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  "SONNTAG AG hat den perfekten Nachfolger gefunden. 
                  Alle Mitarbeiter wurden übernommen."
                </p>
                <p className="text-xs text-gray-500 mt-2">- Marianne K., Wetzlar</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm font-semibold text-blue-600 mb-2">Produktion • 65 Jahre</div>
              <h3 className="text-lg font-bold text-black mb-3">
                Maschinenbauer mit 45 Mitarbeitern
              </h3>
              <p className="text-gray-600 mb-4">
                Verkauf an Mitbewerber mit Synergien. 
                Unternehmer bleibt 2 Jahre als Berater.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  "Der schrittweise Ausstieg war genau richtig. 
                  So konnte ich loslassen und bin trotzdem noch dabei."
                </p>
                <p className="text-xs text-gray-500 mt-2">- Wolfgang S., Marburg</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life After Sale */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-black">
              Das Leben nach dem Verkauf
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Ein neuer Lebensabschnitt mit vielen Möglichkeiten
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-8">
              <p className="text-lg text-gray-600 mb-8">
                Viele Unternehmer fürchten die Leere nach dem Verkauf. 
                Doch die Realität zeigt: Ein erfülltes Leben wartet!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <HeartIcon className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-1">Familie & Freunde</h4>
                    <p className="text-sm text-gray-600">Endlich Zeit für die wichtigen Menschen</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CalendarIcon className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-1">Reisen & Hobbys</h4>
                    <p className="text-sm text-gray-600">Lang gehegte Träume verwirklichen</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <UserGroupIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-1">Mentoring</h4>
                    <p className="text-sm text-gray-600">Erfahrung an Gründer weitergeben</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <ShieldCheckIcon className="h-6 w-6 text-purple-500 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-1">Ehrenamt</h4>
                    <p className="text-sm text-gray-600">Gesellschaftliches Engagement</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <p className="text-center text-gray-700">
                  <strong>92% der Unternehmer</strong> bereuen den Verkauf nicht und 
                  genießen ihren neuen Lebensabschnitt in vollen Zügen.
                </p>
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
              Häufige Fragen zur altersbedingten Geschäftsaufgabe
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-black mb-3">
                  Wann ist der richtige Zeitpunkt für den Verkauf?
                </h3>
                <p className="text-gray-600">
                  Der beste Zeitpunkt ist, wenn Sie noch gesund und leistungsfähig sind - 
                  typischerweise zwischen 60 und 70 Jahren. So können Sie den Prozess aktiv 
                  gestalten und optimale Konditionen aushandeln.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">
                  Was passiert mit meinen langjährigen Mitarbeitern?
                </h3>
                <p className="text-gray-600">
                  Der Schutz der Arbeitsplätze ist oft ein zentrales Kriterium bei der Käuferauswahl. 
                  Wir verhandeln entsprechende Garantien in den Kaufvertrag. In über 85% der Fälle 
                  werden alle Mitarbeiter übernommen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">
                  Wie viel ist mein Unternehmen für die Altersvorsorge wert?
                </h3>
                <p className="text-gray-600">
                  Eine professionelle Bewertung zeigt den realistischen Marktwert. 
                  Oft ist das Unternehmen wertvoller als gedacht - es ist häufig der größte 
                  Vermögenswert für die Altersvorsorge.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">
                  Muss ich sofort komplett ausscheiden?
                </h3>
                <p className="text-gray-600">
                  Nein, viele Käufer wünschen eine Übergangsphase. Sie können noch 
                  6 Monate bis 3 Jahre beratend tätig bleiben, oft mit attraktiver Vergütung 
                  und reduzierten Arbeitszeiten.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">
                  Wie diskret läuft der Verkaufsprozess ab?
                </h3>
                <p className="text-gray-600">
                  Absolute Diskretion ist garantiert. Mitarbeiter, Kunden und Lieferanten 
                  erfahren erst vom Verkauf, wenn Sie es wünschen - meist erst nach 
                  Vertragsabschluss.
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
              Beginnen Sie Ihren neuen Lebensabschnitt mit Sicherheit
            </h2>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
              Sie haben Ihr ganzes Leben hart gearbeitet. Jetzt ist es Zeit, 
              die Früchte Ihrer Arbeit zu genießen. Wir begleiten Sie auf diesem wichtigen Weg.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kontakt"
                className="w-full sm:w-auto rounded-md bg-white px-8 py-3 text-base font-semibold text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Vertrauliches Erstgespräch vereinbaren
              </Link>
              <a
                href="tel:+496419798500"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-md border border-white px-8 py-3 text-base font-semibold text-white hover:bg-white hover:text-black transition-colors"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>Persönliches Gespräch</span>
              </a>
            </div>
            <p className="mt-8 text-sm text-gray-400">
              25+ Jahre Erfahrung • 200+ erfolgreiche Übergänge • 100% Diskretion
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}