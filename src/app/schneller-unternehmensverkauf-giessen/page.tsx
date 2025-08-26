import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  PhoneIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  RocketLaunchIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Schneller Unternehmensverkauf Gießen | 4-8 Wochen bis zum Abschluss | SONNTAG AG',
  description: 'Ihr Unternehmen schnell verkaufen in Gießen? SONNTAG AG verkauft Ihr Unternehmen in Rekordzeit: 4-8 Wochen vom Start bis zum erfolgreichen Abschluss. Jetzt kostenfrei informieren!',
  keywords: [
    'schneller unternehmensverkauf gießen',
    'unternehmen schnell verkaufen gießen', 
    'eiliger geschäftsverkauf mittelhessen',
    'zügiger firmenverkauf gießen',
    'express unternehmensverkauf',
    'schnelle geschäftsabwicklung',
    'rekordzeit unternehmensverkauf'
  ]
}

export default function SchnellerUnternehmensverkaufPage() {
  const speedAdvantages = [
    { icon: '⚡', title: 'Express-Verfahren', description: 'Optimierte Prozesse für maximale Geschwindigkeit' },
    { icon: '🎯', title: 'Zielgerichtete Käufersuche', description: 'Direktansprache qualifizierter Investoren' },
    { icon: '⏰', title: '4-8 Wochen Garantie', description: 'Verbindliche Zusage für schnellen Abschluss' },
    { icon: '🔄', title: 'Parallele Verhandlung', description: 'Mehrere Interessenten gleichzeitig' },
    { icon: '📋', title: 'Digitale Dokumentation', description: 'Papierloser, effizienter Prozess' },
    { icon: '🤝', title: 'Direkte Kommunikation', description: 'Kurze Wege, schnelle Entscheidungen' }
  ]

  const timelineSteps = [
    { step: '1', title: 'Express-Analyse', time: '24-48h', description: 'Sofortige Unternehmensbewertung und Strategieplanung', icon: '📊' },
    { step: '2', title: 'Blitzmarktführung', time: 'Woche 1', description: 'Zeitgleiche Ansprache aller relevanten Käufergruppen', icon: '🚀' },
    { step: '3', title: 'Speed-Verhandlung', time: 'Woche 2-3', description: 'Parallele Verhandlungsführung mit Top-Interessenten', icon: '⚡' },
    { step: '4', title: 'Turbo-Due-Diligence', time: 'Woche 4-5', description: 'Beschleunigte Prüfungsverfahren', icon: '🔍' },
    { step: '5', title: 'Express-Abschluss', time: 'Woche 6-8', description: 'Finalisierung und Vertragsunterzeichnung', icon: '✅' }
  ]

  const successMetrics = [
    { value: '4-8', unit: 'Wochen', label: 'Durchschnittliche Verkaufszeit' },
    { value: '95%', unit: '', label: 'Erfolgsquote bei Schnellverkäufen' },
    { value: '3x', unit: '', label: 'Schneller als der Marktdurchschnitt' },
    { value: '24h', unit: '', label: 'Erste Kaufinteressenten' }
  ]

  const recentDeals = [
    {
      date: 'Juli 2025',
      company: 'TechServ Solutions GmbH',
      industry: 'IT-Dienstleistungen',
      time: '5 Wochen',
      result: 'Über Zielpreis verkauft',
      highlight: 'Drei konkurrierende Gebote'
    },
    {
      date: 'Juni 2025', 
      company: 'Präzisionsteile Mittelhessen',
      industry: 'Automobilzulieferer',
      time: '6 Wochen',
      result: 'Strategischer Käufer gefunden',
      highlight: 'Arbeitsplätze gesichert'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Emergency Banner */}
      <div className="bg-black text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4">
            <RocketLaunchIcon className="h-5 w-5" />
            <span className="font-medium">SCHNELL-VERKAUF HOTLINE</span>
            <a href="tel:+4964120103700" className="font-bold hover:underline flex items-center">
              <PhoneIcon className="h-4 w-4 mr-1" />
              +49 (0) 641 201 037 00
            </a>
            <span className="text-gray-300">|</span>
            <span className="text-sm">Express-Beratung innerhalb 2h</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-2 bg-black/5 backdrop-blur rounded-xl mb-6">
              <RocketLaunchIcon className="h-6 w-6 text-black mr-2" />
              <span className="text-sm font-semibold text-black uppercase tracking-wider">
                Express-Unternehmensverkauf
              </span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Schneller Unternehmensverkauf in{' '}
              <span className="text-black">Gießen</span>
            </h1>
            
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Zeit ist Geld – verkaufen Sie Ihr Unternehmen in Rekordzeit! Unser Express-MARKTWERT-Verfahren 
              garantiert Ihnen einen erfolgreichen Verkauf in nur 4-8 Wochen. 25 Jahre Erfahrung, bewährte Prozesse.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+4964120103700"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Express-Hotline: +49 (0) 641 201 037 00
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center px-8 py-4 border-2 border-black text-lg font-medium rounded-md text-black bg-white hover:bg-gray-50 transition-colors"
              >
                Sofort-Beratung anfragen
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-8">
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm text-gray-600">4-8 Wochen Verkaufszeit</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm text-gray-600">95% Erfolgsquote</span>
              </div>
              <div className="flex items-center">
                <RocketLaunchIcon className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm text-gray-600">3x schneller als üblich</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speed Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Warum wir so schnell sind - Unsere Geschwindigkeitsvorteile
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Bewährte Prozesse und innovative Technologie für maximale Effizienz
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speedAdvantages.map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{advantage.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Rekordzeiten - Messbare Erfolge
            </h2>
            <p className="text-xl text-gray-300">
              Zahlen, die für unsere Express-Kompetenz sprechen
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">
                  {metric.value}
                  <span className="text-2xl text-gray-400">{metric.unit}</span>
                </div>
                <p className="text-gray-300">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Express Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ihr Express-Zeitplan zum Verkauf
            </h2>
            <p className="text-lg text-gray-600">
              Von der ersten Kontaktaufnahme bis zum erfolgreichen Abschluss in Rekordzeit
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gray-300"></div>
            
            <div className="space-y-12">
              {timelineSteps.map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-2xl">{step.icon}</div>
                        <span className="text-sm font-semibold text-gray-500">{step.time}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Aktuelle Express-Verkäufe
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Beweise für unsere Schnelligkeit und Kompetenz
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {recentDeals.map((deal, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm font-semibold text-gray-500">{deal.date}</span>
                  <div className="flex space-x-2">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                      Express-Verkauf
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                      {deal.time}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{deal.company}</h3>
                <p className="text-gray-600 mb-2">{deal.industry}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center">
                    <RocketLaunchIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm font-medium text-gray-900">{deal.result}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3 italic">{deal.highlight}</p>
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
              Ihre Express-Verkaufs-Experten
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Direkter Zugang zu unseren Vorständen - persönlich und sofort verfügbar
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold text-gray-900">Thomas Sonntag</h3>
              <p className="text-gray-600 mb-4">Vorstand & Express-Verkaufs-Spezialist</p>
              <div className="space-y-2 text-left max-w-sm mx-auto">
                <p className="text-sm text-gray-600">✓ 25 Jahre Express-Verkaufserfahrung</p>
                <p className="text-sm text-gray-600">✓ Über 200 Schnellverkäufe unter 8 Wochen</p>
                <p className="text-sm text-gray-600">✓ Deutschlandweites Käufernetzwerk</p>
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
              <p className="text-gray-600 mb-4">Vorstand & Turbo-Bewertungsexperte</p>
              <div className="space-y-2 text-left max-w-sm mx-auto">
                <p className="text-sm text-gray-600">✓ Spezialist für Express-Bewertungen</p>
                <p className="text-sm text-gray-600">✓ Professor für Betriebswirtschaftslehre</p>
                <p className="text-sm text-gray-600">✓ Digitale Bewertungsmethoden</p>
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
            Häufige Fragen zum schnellen Unternehmensverkauf
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Ist ein Verkauf in 4-8 Wochen wirklich möglich?
              </h3>
              <p className="text-gray-600">
                Ja! Mit unserem Express-MARKTWERT-Verfahren haben wir bereits über 200 Unternehmen in unter 8 Wochen 
                verkauft. Durch optimierte Prozesse, digitale Tools und unser etabliertes Käufernetzwerk schaffen wir, 
                was andere für unmöglich halten.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Muss ich bei der Geschwindigkeit Abstriche beim Preis machen?
              </h3>
              <p className="text-gray-600">
                Nein! Unser Bieterverfahren mit mehreren Interessenten gleichzeitig führt oft zu höheren Preisen als 
                herkömmliche, langwierige Verkaufsprozesse. Geschwindigkeit bedeutet bei uns nicht weniger Geld, sondern 
                mehr Effizienz.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Wie schnell bekomme ich die ersten Interessenten?
              </h3>
              <p className="text-gray-600">
                In der Regel haben wir innerhalb von 24-48 Stunden nach unserem ersten Gespräch bereits die ersten 
                qualifizierten Kaufinteressenten identifiziert und kontaktiert. Unser Netzwerk ist sofort aktivierbar.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Was unterscheidet Ihr Express-Verfahren von anderen?
              </h3>
              <p className="text-gray-600">
                Drei Faktoren: 1) Unser über 25 Jahre aufgebautes Käufernetzwerk, 2) Digitale, papierlose Prozesse 
                und 3) Die Fähigkeit, mehrere Verhandlungsstränge parallel zu führen. Das spart entscheidende Zeit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RocketLaunchIcon className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            Starten Sie jetzt - Ihr Express-Verkauf beginnt heute
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Warum warten? In 4-8 Wochen könnte Ihr Unternehmen bereits verkauft sein. 
            Kontaktieren Sie uns für eine kostenlose Express-Bewertung.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+4964120103700"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-black bg-white hover:bg-gray-100 transition-colors"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Express-Hotline: +49 (0) 641 201 037 00
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-black transition-colors"
            >
              Sofort-Bewertung anfordern
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-400">
              SONNTAG AG | Grünberger Str. 148, 35394 Gießen | service@sonnt-ag.com
            </p>
            <p className="text-xs text-gray-500 mt-2">
              25 Jahre Express-Expertise. Rekordzeiten. Ihr Erfolg.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}