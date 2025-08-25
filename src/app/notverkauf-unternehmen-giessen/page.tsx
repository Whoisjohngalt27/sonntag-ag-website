import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  PhoneIcon, 
  ClockIcon, 
  ShieldCheckIcon, 
  CheckCircleIcon,
  ExclamationTriangleIcon,
  BoltIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  UserGroupIcon,
  ChartBarIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Notverkauf Unternehmen Gießen | Schneller Unternehmensverkauf | SONNTAG AG',
  description: 'Dringend Unternehmen verkaufen in Gießen? SONNTAG AG - Ihr Experte für schnellen Unternehmensverkauf in Mittelhessen. 25 Jahre Erfahrung, 4-8 Wochen bis zum Abschluss. Jetzt kostenlos beraten lassen!',
  keywords: [
    'notverkauf unternehmen gießen',
    'schneller unternehmensverkauf gießen', 
    'firma sofort verkaufen gießen',
    'dringend nachfolger gesucht gießen',
    'eiliger geschäftsverkauf mittelhessen',
    'unternehmen schnell verkaufen',
    'notverkauf mittelstand'
  ]
}

export default function NotverkaufPage() {
  const emergencyReasons = [
    { icon: '🏥', text: 'Gesundheitliche Gründe' },
    { icon: '👥', text: 'Fehlende Nachfolge' },
    { icon: '💰', text: 'Finanzielle Engpässe' },
    { icon: '📉', text: 'Marktveränderungen' },
    { icon: '⚖️', text: 'Gesellschafterkonflikt' },
    { icon: '🎯', text: 'Strategische Neuausrichtung' }
  ]

  const processSteps = [
    { step: '1', title: 'Sofortkontakt', time: 'Heute', description: 'Rufen Sie uns jetzt an oder nutzen Sie unser Kontaktformular' },
    { step: '2', title: 'Analyse', time: '24h', description: 'Wir analysieren Ihre Situation und entwickeln eine Strategie' },
    { step: '3', title: 'Marktführung', time: '1 Woche', description: 'Anonyme Ansprache qualifizierter Kaufinteressenten' },
    { step: '4', title: 'Verhandlung', time: '2-4 Wochen', description: 'Professionelle Verhandlungsführung mit mehreren Bietern' },
    { step: '5', title: 'Abschluss', time: '4-8 Wochen', description: 'Erfolgreicher Verkauf mit optimalem Ergebnis' }
  ]

  const successStories = [
    {
      date: 'Juni 2025',
      company: 'Wieland & Schultz Kaisersauern GmbH',
      buyer: 'Encevo Deutschland GmbH',
      time: '6 Wochen',
      highlight: 'Trotz schwieriger Marktbedingungen erfolgreich verkauft'
    },
    {
      date: 'März 2025',
      company: 'Becker GmbH CAD-CAM-CAST',
      buyer: 'Windschiegl Maschinenbau GmbH',
      time: '8 Wochen',
      highlight: 'Optimaler Preis durch strategischen Käufer'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Emergency Banner */}
      <div className="bg-black text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4">
            <ExclamationTriangleIcon className="h-5 w-5" />
            <span className="font-medium">NOTFALL-HOTLINE</span>
            <a href="tel:+4964120103700" className="font-bold hover:underline flex items-center">
              <PhoneIcon className="h-4 w-4 mr-1" />
              +49 (0) 641 201 037 00
            </a>
            <span className="text-gray-300">|</span>
            <span className="text-sm">24h Rückruf-Garantie</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-2 bg-black/5 backdrop-blur rounded-xl mb-6">
              <BoltIcon className="h-6 w-6 text-black mr-2" />
              <span className="text-sm font-semibold text-black uppercase tracking-wider">
                Dringender Unternehmensverkauf
              </span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Notverkauf Ihres Unternehmens in{' '}
              <span className="text-black">Gießen</span>
            </h1>
            
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Müssen Sie Ihr Unternehmen schnell verkaufen? Mit 25 Jahren Erfahrung und unserem bewährten 
              MARKTWERT-Verfahren verkaufen wir Ihr Unternehmen diskret und erfolgreich in nur 4-8 Wochen.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+4964120103700"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Jetzt anrufen: +49 (0) 641 201 037 00
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center px-8 py-4 border-2 border-black text-lg font-medium rounded-md text-black bg-white hover:bg-gray-50 transition-colors"
              >
                Kostenlose Erstberatung anfragen
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-8">
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm text-gray-600">100% Diskret & Anonym</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm text-gray-600">4-8 Wochen bis zum Verkauf</span>
              </div>
              <div className="flex items-center">
                <ShieldCheckIcon className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm text-gray-600">25 Jahre Erfahrung</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons for Emergency Sale */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Gründe für einen Notverkauf - Wir verstehen Ihre Situation
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Egal aus welchem Grund Sie schnell verkaufen müssen - wir haben die Lösung
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {emergencyReasons.map((reason, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{reason.icon}</div>
                <p className="text-gray-900 font-medium">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARKTWERT Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-base font-semibold leading-7 text-black uppercase tracking-wider">
                Unser bewährtes Verfahren
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                MARKTWERT - Anonymes Bieterverfahren für schnellen Verkauf
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Unser einzigartiges Verfahren wurde speziell für Notverkäufe im deutschen Mittelstand entwickelt. 
                Durch die anonyme Marktführung und multiple Interessenten erreichen wir in kürzester Zeit den 
                optimalen Verkaufspreis.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Anonyme Marktführung</h3>
                    <p className="text-gray-600">Ihre Identität bleibt bis zur Vertragsunterzeichnung geschützt</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Multiple Interessenten</h3>
                    <p className="text-gray-600">Wir generieren mehrere Kaufinteressenten gleichzeitig</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Echter Marktwert</h3>
                    <p className="text-gray-600">Der tatsächliche Wert wird durch konkurrierende Gebote ermittelt</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Schneller Abschluss</h3>
                    <p className="text-gray-600">Von der ersten Kontaktaufnahme bis zum Verkauf in 4-8 Wochen</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 lg:mt-0">
              <div className="bg-black text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Ihr Zeitplan zum Verkauf</h3>
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">{step.title}</h4>
                          <span className="text-sm text-gray-300">{step.time}</span>
                        </div>
                        <p className="text-sm text-gray-300 mt-1">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Aktuelle Notverkauf-Erfolge
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Vertrauen Sie auf unsere bewährte Expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm font-semibold text-gray-500">{story.date}</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                    Erfolgreich verkauft
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{story.company}</h3>
                <p className="text-gray-600 mb-4">an {story.buyer}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center">
                    <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm font-medium text-gray-900">Verkaufszeit: {story.time}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3 italic">{story.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Ihre Experten für den Notverkauf
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Direkter Draht zu unseren Vorständen - wir kümmern uns persönlich
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold text-gray-900">Thomas Sonntag</h3>
              <p className="text-gray-600 mb-4">Vorstand & M&A Experte</p>
              <div className="space-y-2 text-left max-w-sm mx-auto">
                <p className="text-sm text-gray-600">✓ 25 Jahre Erfahrung im Unternehmensverkauf</p>
                <p className="text-sm text-gray-600">✓ Über 500 erfolgreiche Transaktionen</p>
                <p className="text-sm text-gray-600">✓ Spezialist für Krisensituationen</p>
              </div>
              <div className="mt-6">
                <a href="mailto:thomas.sonntag@sonnt-ag.com" className="text-black font-medium hover:underline">
                  thomas.sonntag@sonnt-ag.com
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold text-gray-900">Prof. Dr. Bastian Heinemann</h3>
              <p className="text-gray-600 mb-4">Vorstand & Wertsteigerungsexperte</p>
              <div className="space-y-2 text-left max-w-sm mx-auto">
                <p className="text-sm text-gray-600">✓ 14 Jahre operative Expertise</p>
                <p className="text-sm text-gray-600">✓ Professor für Betriebswirtschaftslehre</p>
                <p className="text-sm text-gray-600">✓ Mehrfacher Aufsichtsrat</p>
              </div>
              <div className="mt-6">
                <a href="mailto:bastian.heinemann@sonnt-ag.com" className="text-black font-medium hover:underline">
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
            Häufige Fragen zum Notverkauf
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Wie schnell kann mein Unternehmen verkauft werden?
              </h3>
              <p className="text-gray-600">
                Mit unserem MARKTWERT-Verfahren erreichen wir in der Regel einen erfolgreichen Verkauf innerhalb von 
                4-8 Wochen. In besonders dringenden Fällen können wir den Prozess noch weiter beschleunigen.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Bleibt mein Unternehmen wirklich anonym?
              </h3>
              <p className="text-gray-600">
                Ja, absolut! Unser anonymes Bieterverfahren schützt Ihre Identität vollständig. Potenzielle Käufer 
                erfahren erst nach Unterzeichnung einer Vertraulichkeitsvereinbarung, um welches Unternehmen es sich handelt.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Was kostet der Notverkauf?
              </h3>
              <p className="text-gray-600">
                Die Kosten richten sich nach dem Unternehmenswert und der Komplexität. Wir bieten transparente 
                Kostenstrukturen und arbeiten teilweise erfolgsabhängig. Die Erstberatung ist immer kostenlos.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Kann ich mein Unternehmen auch mit Schulden verkaufen?
              </h3>
              <p className="text-gray-600">
                Ja, das ist möglich. Wir haben Erfahrung mit verschiedenen Unternehmenssituationen und können auch 
                Unternehmen mit Schulden erfolgreich vermarkten. Wichtig ist eine ehrliche Bestandsaufnahme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ExclamationTriangleIcon className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            Jetzt handeln - Jede Minute zählt
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Bei einem Notverkauf ist Zeit Ihr wertvollstes Gut. Kontaktieren Sie uns sofort für eine 
            kostenlose und unverbindliche Erstberatung.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+4964120103700"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-black bg-white hover:bg-gray-100 transition-colors"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Sofort anrufen: +49 (0) 641 201 037 00
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-black transition-colors"
            >
              Kontaktformular nutzen
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-400">
              SONNTAG AG | Grünberger Str. 148, 35394 Gießen | service@sonnt-ag.com
            </p>
            <p className="text-xs text-gray-500 mt-2">
              25 Jahre Erfahrung. Bewährte Methodik. Ihr Erfolg.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}