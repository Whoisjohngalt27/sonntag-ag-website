import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  PhoneIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Dringend Nachfolger gesucht Gießen | Unternehmensnachfolge schnell finden | SONNTAG AG',
  description: 'Dringend Nachfolger für Ihr Unternehmen in Gießen gesucht? SONNTAG AG findet schnell den idealen Nachfolger für Ihr Lebenswerk. Diskret, kompetent, erfolgreich. Jetzt Nachfolgesuche starten!',
  keywords: [
    'dringend nachfolger gesucht gießen',
    'unternehmensnachfolge gießen', 
    'nachfolger finden gießen',
    'geschäftsnachfolge mittelhessen',
    'lebenswerk übergeben',
    'betriebsnachfolge gießen',
    'nachfolgesuche experte'
  ]
}

export default function DringendNachfolgerGesuchtPage() {
  const successionChallenges = [
    { icon: '👨‍👩‍👧‍👦', title: 'Kein Nachfolger in der Familie', description: 'Kinder sind nicht interessiert oder geeignet' },
    { icon: '⏰', title: 'Zeitdruck durch Alter', description: 'Gesundheit oder Renteneintritt drängen' },
    { icon: '💎', title: 'Lebenswerk bewahren', description: 'Tradition und Werte sollen erhalten bleiben' },
    { icon: '👥', title: 'Mitarbeiter absichern', description: 'Arbeitsplätze langfristig sichern' },
    { icon: '🏆', title: 'Würdiger Nachfolger', description: 'Jemand, der das Unternehmen versteht' },
    { icon: '🔄', title: 'Reibungslose Übergabe', description: 'Kontinuität für Kunden gewährleisten' }
  ]

  const successorTypes = [
    { 
      type: 'Familienexterner Manager',
      description: 'Erfahrene Führungskraft aus der Branche',
      advantages: ['Branchenerfahrung', 'Sofort einsetzbar', 'Frische Impulse'],
      icon: '👔'
    },
    { 
      type: 'Management-Buy-Out',
      description: 'Übernahme durch das eigene Management-Team',
      advantages: ['Kennt das Unternehmen', 'Vertrauensbasis', 'Kontinuität'],
      icon: '🤝'
    },
    { 
      type: 'Strategischer Käufer',
      description: 'Branchenverwandtes Unternehmen mit Synergien',
      advantages: ['Synergieeffekte', 'Wachstumschancen', 'Finanzstärke'],
      icon: '🏢'
    },
    { 
      type: 'Finanzinvestor',
      description: 'Private Equity mit Wachstumsfokus',
      advantages: ['Kapital für Wachstum', 'Professionalisierung', 'Exit-Option'],
      icon: '💼'
    }
  ]

  const successionProcess = [
    { step: '1', title: 'Nachfolge-Analyse', time: '1 Tag', description: 'Unternehmensprofil und idealer Nachfolger-Typ', phase: 'VORBEREITUNG' },
    { step: '2', title: 'Kandidaten-Screening', time: '1 Woche', description: 'Systematische Suche im gesamten DACH-Raum', phase: 'SUCHE' },
    { step: '3', title: 'Diskrete Ansprache', time: '2 Wochen', description: 'Persönliche Kontaktaufnahme mit Top-Kandidaten', phase: 'KONTAKT' },
    { step: '4', title: 'Kennenlernen & Match', time: '3-4 Wochen', description: 'Intensive Gespräche und Unternehmensbesichtigungen', phase: 'MATCHING' },
    { step: '5', title: 'Übergabe-Planung', time: '6-8 Wochen', description: 'Detaillierte Übergabe- und Einarbeitungsplanung', phase: 'ÜBERGABE' }
  ]

  const successionSuccess = [
    {
      date: 'Juni 2025',
      company: 'Traditionsbäckerei Müller',
      founder: '3. Generation, keine Nachfolger',
      successor: 'Branchenerfahrener Manager',
      result: 'Erfolgreiche Übergabe',
      highlight: 'Alle 18 Arbeitsplätze erhalten, Tradition fortgeführt'
    },
    {
      date: 'Mai 2025', 
      company: 'Metallverarbeitung Schmidt',
      founder: 'Altersbedingte Übergabe',
      successor: 'Management-Buy-Out',
      result: 'Reibungsloser Übergang',
      highlight: 'Führungsteam übernahm erfolgreich, Wachstum um 20%'
    }
  ]

  const legacyProtection = [
    { aspect: 'Unternehmenskultur', description: 'Werte und Traditionen bleiben erhalten' },
    { aspect: 'Mitarbeiterbindung', description: 'Bewährte Teams werden übernommen' },
    { aspect: 'Kundenbeziehungen', description: 'Langjährige Partnerschaften fortführen' },
    { aspect: 'Standorttreue', description: 'Verbundenheit zur Region Mittelhessen' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Emergency Banner */}
      <div className="bg-blue-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4">
            <MagnifyingGlassIcon className="h-5 w-5" />
            <span className="font-medium">NACHFOLGER-HOTLINE</span>
            <a href="tel:+4964120103700" className="font-bold hover:underline flex items-center">
              <PhoneIcon className="h-4 w-4 mr-1" />
              +49 (0) 641 201 037 00
            </a>
            <span className="text-blue-200">|</span>
            <span className="text-sm">Diskrete Nachfolgersuche</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-2 bg-blue-50 backdrop-blur rounded-xl mb-6">
              <HeartIcon className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                Lebenswerk-Nachfolge
              </span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Dringend Nachfolger gesucht in{' '}
              <span className="text-blue-600">Gießen</span>
            </h1>
            
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Sie suchen einen würdigen Nachfolger für Ihr Lebenswerk? Mit unserem bewährten NACHFOLGE-MARKTWERT-Verfahren 
              finden wir den idealen Kandidaten, der Ihre Tradition ehrt und Ihr Unternehmen erfolgreich weiterführt.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+4964120103700"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Nachfolger-Hotline: +49 (0) 641 201 037 00
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
              >
                Nachfolgesuche starten
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-8">
              <div className="flex items-center">
                <MagnifyingGlassIcon className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm text-gray-600">DACH-weite Suche</span>
              </div>
              <div className="flex items-center">
                <ShieldCheckIcon className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm text-gray-600">100% diskret</span>
              </div>
              <div className="flex items-center">
                <HeartIcon className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm text-gray-600">Lebenswerk bewahren</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Succession Challenges */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Herausforderungen der Unternehmensnachfolge
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Wir verstehen Ihre Sorgen und finden maßgeschneiderte Lösungen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successionChallenges.map((challenge, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{challenge.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.description}</p>
                <div className="mt-4 text-sm text-blue-600 font-medium">
                  → Wir haben die Lösung
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Successor Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Der richtige Nachfolger für Ihr Unternehmen
            </h2>
            <p className="text-lg text-gray-600">
              Verschiedene Nachfolger-Typen - wir finden den perfekten Match
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {successorTypes.map((successor, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{successor.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{successor.type}</h3>
                    <p className="text-gray-600 mt-1">{successor.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Vorteile:</p>
                  {successor.advantages.map((advantage, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Succession Process */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Unser bewährter Nachfolge-Prozess
            </h2>
            <p className="text-lg text-gray-600">
              Strukturierte Suche und professionelle Übergabe für Ihren Seelenfrieden
            </p>
          </div>
          
          <div className="space-y-8">
            {successionProcess.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center bg-white p-8 rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 lg:mb-0 lg:mr-8">
                  {step.step}
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <div className="flex items-center space-x-4 justify-center lg:justify-end">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {step.phase}
                      </span>
                      <span className="text-gray-500 text-sm">{step.time}</span>
                    </div>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Protection */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Ihr Lebenswerk in guten Händen
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Wir sorgen dafür, dass Ihre Werte und Traditionen bewahrt werden
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {legacyProtection.map((aspect, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeartIcon className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{aspect.aspect}</h3>
                <p className="text-sm text-gray-600">{aspect.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Erfolgreiche Nachfolge-Geschichten
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Lebenswerke erfolgreich übergeben - Traditionen bewahrt
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {successionSuccess.map((success, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm font-semibold text-gray-500">{success.date}</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                    {success.result}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{success.company}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Ausgangslage:</span> {success.founder}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Nachfolger:</span> {success.successor}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-green-600 font-medium">✓ {success.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Ihre Nachfolge-Experten mit Herz
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Persönliche Betreuung durch unsere erfahrenen Vorstände
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold text-gray-900">Thomas Sonntag</h3>
              <p className="text-gray-600 mb-4">Nachfolge-Experte & Vorstand</p>
              <div className="space-y-2 text-left max-w-sm mx-auto">
                <p className="text-sm text-gray-600">✓ 25 Jahre Nachfolge-Erfahrung</p>
                <p className="text-sm text-gray-600">✓ Über 300 erfolgreich vermittelte Nachfolger</p>
                <p className="text-sm text-gray-600">✓ Spezialist für Familienunternehmen</p>
              </div>
              <div className="mt-6">
                <a href="mailto:thomas.sonntag@sonnt-ag.com" className="text-blue-600 font-medium hover:underline">
                  thomas.sonntag@sonnt-ag.com
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold text-gray-900">Prof. Dr. Bastian Heinemann</h3>
              <p className="text-gray-600 mb-4">Übergabe-Spezialist & Vorstand</p>
              <div className="space-y-2 text-left max-w-sm mx-auto">
                <p className="text-sm text-gray-600">✓ Experte für reibungslose Übergaben</p>
                <p className="text-sm text-gray-600">✓ Professor für Betriebswirtschaftslehre</p>
                <p className="text-sm text-gray-600">✓ Nachfolge-Strategien und -Strukturen</p>
              </div>
              <div className="mt-6">
                <a href="mailto:bastian.heinemann@sonnt-ag.com" className="text-blue-600 font-medium hover:underline">
                  bastian.heinemann@sonnt-ag.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Häufige Fragen zur Nachfolgersuche
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Wie finde ich den richtigen Nachfolger für mein Unternehmen?
              </h3>
              <p className="text-gray-600">
                Das ist unsere Kernkompetenz! Wir analysieren Ihr Unternehmen, definieren das ideale Nachfolger-Profil 
                und suchen systematisch im gesamten DACH-Raum. Unser Netzwerk umfasst tausende potenzielle Kandidaten.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Kann ich sicher sein, dass mein Lebenswerk in guten Händen ist?
              </h3>
              <p className="text-gray-600">
                Absolut! Wir prüfen jeden Kandidaten intensiv auf fachliche Kompetenz, Wertekompatibilität und 
                langfristige Visionen. Sie lernen jeden potenziellen Nachfolger persönlich kennen, bevor Sie entscheiden.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Wie lange dauert es, einen geeigneten Nachfolger zu finden?
              </h3>
              <p className="text-gray-600">
                Die Dauer hängt von der Branche und den Anforderungen ab. In der Regel präsentieren wir nach 4-6 Wochen 
                die ersten qualifizierten Kandidaten. Der gesamte Prozess bis zur Übergabe dauert meist 3-6 Monate.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Was passiert mit meinen Mitarbeitern nach der Übergabe?
              </h3>
              <p className="text-gray-600">
                Der Schutz Ihrer Mitarbeiter ist uns sehr wichtig. Wir suchen gezielt Nachfolger, die das Team 
                schätzen und erhalten wollen. Arbeitsplatz-Sicherheit ist ein zentrales Kriterium unserer Auswahl.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HeartIcon className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            Ihr Lebenswerk verdient den besten Nachfolger
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Überlassen Sie die Zukunft Ihres Unternehmens nicht dem Zufall. 
            Starten Sie heute die professionelle Nachfolgersuche mit SONNTAG AG.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+4964120103700"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 transition-colors"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Nachfolger-Hotline: +49 (0) 641 201 037 00
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-blue-600 transition-colors"
            >
              Nachfolgesuche starten
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
          
          <div className="mt-8 pt-8 border-t border-blue-500">
            <p className="text-sm text-blue-100">
              SONNTAG AG | Grünberger Str. 148, 35394 Gießen | service@sonnt-ag.com
            </p>
            <p className="text-xs text-blue-200 mt-2">
              25 Jahre Nachfolge-Expertise. Ihr Lebenswerk. Unsere Mission.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}