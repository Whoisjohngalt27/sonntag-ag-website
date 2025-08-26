import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  PhoneIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  FireIcon,
  ShieldCheckIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Firma sofort verkaufen Gießen | Sofortiger Unternehmensverkauf | SONNTAG AG',
  description: 'Firma sofort verkaufen in Gießen? SONNTAG AG - Ihr Krisenexperte für sofortigen Unternehmensverkauf. Diskret, schnell, erfolgreich. 25 Jahre Krisenerfahrung. Jetzt Soforthilfe anfordern!',
  keywords: [
    'firma sofort verkaufen gießen',
    'unternehmen sofort verkaufen gießen', 
    'sofortiger unternehmensverkauf',
    'krisenunternehmen verkaufen gießen',
    'insolvenz vermeiden verkauf',
    'firma in der krise verkaufen',
    'sofort-verkaufs-experte'
  ]
}

export default function FirmaSofortVerkaufenPage() {
  const crisisSituations = [
    { icon: '🚨', title: 'Akute Liquiditätskrise', description: 'Sofortige Zahlungsunfähigkeit droht' },
    { icon: '⚖️', title: 'Drohende Insolvenz', description: 'Insolvenzantrag steht unmittelbar bevor' },
    { icon: '💔', title: 'Gesellschafterzwist', description: 'Unüberbrückbare Konflikte zwischen Partnern' },
    { icon: '🏥', title: 'Gesundheitsnotfall', description: 'Plötzliche schwere Erkrankung des Inhabers' },
    { icon: '📉', title: 'Markteinbruch', description: 'Dramatischer Umsatzverlust in kurzer Zeit' },
    { icon: '🏛️', title: 'Behördendruck', description: 'Regulatorische Probleme erfordern sofortiges Handeln' }
  ]

  const emergencyProcess = [
    { step: '1', title: 'SOFORT-Analyse', time: '2-4h', description: 'Krisenanalyse und Handlungsoptionen binnen Stunden', urgency: 'HEUTE' },
    { step: '2', title: 'Blitz-Bewertung', time: '24h', description: 'Express-Unternehmensbewertung und Verkaufspreis', urgency: 'MORGEN' },
    { step: '3', title: 'Käufer-Aktivierung', time: '48h', description: 'Sofortige Kontaktaufnahme mit Notfall-Käufern', urgency: 'TAG 2' },
    { step: '4', title: 'Krisen-Verhandlung', time: '1 Woche', description: 'Intensiv-Verhandlungen mit mehreren Interessenten', urgency: 'WOCHE 1' },
    { step: '5', title: 'SOFORT-Abschluss', time: '2-4 Wochen', description: 'Notfall-Verkauf mit bestmöglichem Ergebnis', urgency: 'WOCHE 2-4' }
  ]

  const crisisAdaptations = [
    { title: 'Angepasste Bewertung', description: 'Realistische Preisfindung für Krisenunternehmen' },
    { title: 'Diskrete Abwicklung', description: 'Schutz vor Rufschädigung und Panik bei Mitarbeitern' },
    { title: 'Rechtssichere Struktur', description: 'Anfechtungssichere Vertragsgestaltung' },
    { title: 'Gläubigerschutz', description: 'Koordination mit Banken und Lieferanten' }
  ]

  const crisisSuccesses = [
    {
      date: 'Juli 2025',
      situation: 'Liquiditätskrise',
      company: 'Metallbau Schmidt GmbH',
      result: 'Insolvenz verhindert',
      time: '3 Wochen',
      highlight: '42 Arbeitsplätze gerettet'
    },
    {
      date: 'Juni 2025', 
      situation: 'Gesellschafterstreit',
      company: 'Familienunternehmen Retail',
      result: 'Einvernehmlicher Verkauf',
      time: '4 Wochen',
      highlight: 'Familienfriede wiederhergestellt'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4">
            <FireIcon className="h-5 w-5 animate-pulse" />
            <span className="font-medium">KRISEN-HOTLINE</span>
            <a href="tel:+4964120103700" className="font-bold hover:underline flex items-center">
              <PhoneIcon className="h-4 w-4 mr-1" />
              +49 (0) 641 201 037 00
            </a>
            <span className="text-red-200">|</span>
            <span className="text-sm">SOFORT verfügbar - 24/7</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-2 bg-red-50 backdrop-blur rounded-xl mb-6">
              <FireIcon className="h-6 w-6 text-red-600 mr-2" />
              <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">
                SOFORT-VERKAUFS-SERVICE
              </span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Firma sofort verkaufen in{' '}
              <span className="text-red-600">Gießen</span>
            </h1>
            
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Stehen Sie unter Zeitdruck? Droht die Insolvenz? Mit unserem KRISEN-MARKTWERT-Verfahren 
              verkaufen wir Ihr Unternehmen sofort und diskret. 25 Jahre Erfahrung in schwierigsten Situationen.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+4964120103700"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors animate-pulse"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                KRISEN-HOTLINE: +49 (0) 641 201 037 00
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center px-8 py-4 border-2 border-red-600 text-lg font-medium rounded-md text-red-600 bg-white hover:bg-red-50 transition-colors"
              >
                SOFORT-Hilfe anfordern
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-8">
              <div className="flex items-center">
                <FireIcon className="h-5 w-5 text-red-600 mr-2" />
                <span className="text-sm text-gray-600 font-semibold">SOFORT verfügbar</span>
              </div>
              <div className="flex items-center">
                <ShieldCheckIcon className="h-5 w-5 text-red-600 mr-2" />
                <span className="text-sm text-gray-600 font-semibold">100% diskret</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-red-600 mr-2" />
                <span className="text-sm text-gray-600 font-semibold">Krisenerfahrung seit 1998</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Situations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Krisensituationen - Wir helfen sofort
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Egal wie aussichtslos es scheint - wir haben für jede Krise eine Lösung
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crisisSituations.map((crisis, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{crisis.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{crisis.title}</h3>
                <p className="text-gray-600">{crisis.description}</p>
                <div className="mt-4 text-sm text-red-600 font-medium">
                  → Sofortige Intervention möglich
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              SOFORT-Verkaufs-Prozess - Jede Stunde zählt
            </h2>
            <p className="text-lg text-gray-600">
              Unser bewährtes Krisenverfahren rettet Unternehmen vor dem Untergang
            </p>
          </div>
          
          <div className="space-y-8">
            {emergencyProcess.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center bg-gray-50 p-6 rounded-lg">
                <div className="flex-shrink-0 w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 md:mb-0 md:mr-6">
                  {step.step}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <div className="flex items-center space-x-4">
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {step.urgency}
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

      {/* Crisis Adaptations */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Speziell für Krisenunternehmen entwickelt
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Einzigartige Expertise für schwierigste Situationen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {crisisAdaptations.map((adaptation, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{adaptation.title}</h3>
                <p className="text-gray-600">{adaptation.description}</p>
                <div className="mt-3 flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm text-green-600 font-medium">Bewährt in über 100 Krisenfällen</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crisis Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Gerettete Unternehmen - Aktuelle Erfolge
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Auch in aussichtslosesten Situationen finden wir Lösungen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {crisisSuccesses.map((success, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm font-semibold text-gray-500">{success.date}</span>
                  <div className="flex space-x-2">
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">
                      {success.situation}
                    </span>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                      Gerettet
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{success.company}</h3>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center">
                    <FireIcon className="h-5 w-5 text-red-500 mr-2" />
                    <span className="text-sm font-medium text-gray-900">{success.result}</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{success.time}</span>
                  </div>
                </div>
                <p className="text-sm text-green-600 font-medium mt-3">✓ {success.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crisis Team */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Ihre Krisen-Experten - 24/7 für Sie da
            </h2>
            <p className="text-xl text-gray-300">
              Direkter Zugang zu unseren Vorständen in jeder Krisensituation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-700 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold mb-2">Thomas Sonntag</h3>
              <p className="text-gray-300 mb-4">Krisen-Spezialist & Vorstand</p>
              <div className="space-y-2 text-left max-w-sm mx-auto">
                <p className="text-sm text-gray-300">✓ 25 Jahre Krisenerfahrung</p>
                <p className="text-sm text-gray-300">✓ Über 150 Krisenunternehmen gerettet</p>
                <p className="text-sm text-gray-300">✓ 24h-Verfügbarkeit in Notfällen</p>
              </div>
              <div className="mt-6 space-y-2">
                <a href="tel:+4964120103700" className="block text-red-400 font-bold hover:underline">
                  📞 +49 (0) 641 201 037 00
                </a>
                <a href="mailto:thomas.sonntag@sonnt-ag.com" className="block text-white font-medium hover:underline">
                  ✉️ thomas.sonntag@sonnt-ag.com
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-700 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold mb-2">Prof. Dr. Bastian Heinemann</h3>
              <p className="text-gray-300 mb-4">Sanierungs-Experte & Vorstand</p>
              <div className="space-y-2 text-left max-w-sm mx-auto">
                <p className="text-sm text-gray-300">✓ Spezialist für Krisenbewertungen</p>
                <p className="text-sm text-gray-300">✓ Insolvenz-Rechtssicherheit</p>
                <p className="text-sm text-gray-300">✓ Turnaround-Strategien</p>
              </div>
              <div className="mt-6 space-y-2">
                <a href="tel:+4964120103700" className="block text-red-400 font-bold hover:underline">
                  📞 +49 (0) 641 201 037 00
                </a>
                <a href="mailto:bastian.heinemann@sonnt-ag.com" className="block text-white font-medium hover:underline">
                  ✉️ bastian.heinemann@sonnt-ag.com
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
            Häufige Fragen zu SOFORT-Verkäufen
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Kann ich mein Unternehmen auch in einer akuten Krise verkaufen?
              </h3>
              <p className="text-gray-600">
                Ja, das ist unsere Spezialität! Wir haben über 150 Unternehmen in kritischen Situationen erfolgreich 
                verkauft und dabei Insolvenz verhindert. Je früher Sie uns kontaktieren, desto mehr Optionen haben wir.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Was ist, wenn mein Unternehmen bereits überschuldet ist?
              </h3>
              <p className="text-gray-600">
                Auch überschuldete Unternehmen haben oft noch einen Verkaufswert durch Kundenstamm, Know-how oder 
                Marktposition. Wir bewerten ehrlich und realistisch und finden auch für schwierige Fälle Lösungen.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Wie schnell kann ich mit ersten Ergebnissen rechnen?
              </h3>
              <p className="text-gray-600">
                Bei echten Krisenfällen starten wir innerhalb von 2-4 Stunden nach Ihrem Anruf. Erste Käufer-Kontakte 
                erfolgen oft noch am selben Tag. Wir verstehen, dass in der Krise jede Stunde zählt.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Können meine Mitarbeiter und Kunden etwas von der Krise erfahren?
              </h3>
              <p className="text-gray-600">
                Diskretion ist bei Krisenfällen besonders wichtig. Unser anonymes Verfahren schützt Sie vollständig. 
                Niemand erfährt von Ihren Schwierigkeiten, bis eine Lösung gefunden ist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Emergency CTA */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FireIcon className="h-16 w-16 mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl font-bold mb-4">
            SOFORT handeln - Retten Sie Ihr Lebenswerk
          </h2>
          <p className="text-xl mb-8 text-red-100">
            In Krisensituationen entscheiden Minuten über Erfolg oder Untergang. 
            Rufen Sie JETZT an und sichern Sie sich professionelle Soforthilfe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+4964120103700"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-md text-red-600 bg-white hover:bg-gray-100 transition-colors animate-pulse"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              KRISEN-HOTLINE: +49 (0) 641 201 037 00
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-red-600 transition-colors"
            >
              SOFORT-Beratung anfordern
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
          
          <div className="mt-8 pt-8 border-t border-red-500">
            <p className="text-sm text-red-100">
              SONNTAG AG | Grünberger Str. 148, 35394 Gießen | service@sonnt-ag.com
            </p>
            <p className="text-xs text-red-200 mt-2">
              Ihr Krisen-Experte seit 1998. SOFORT verfügbar. Ihr Unternehmen zählt.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}