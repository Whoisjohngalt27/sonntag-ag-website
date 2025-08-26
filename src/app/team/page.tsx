import type { Metadata } from 'next'
import { TeamWithBioAdapted } from '@/components/features/team'
import { teamMembers } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Unser Team | SONNTAG AG - M&A Beratung Gießen',
  description: 'Lernen Sie unser erfahrenes Team kennen. Experten für Unternehmensnachfolge mit 25+ Jahren Erfahrung in M&A Beratung und anonymen Bieterverfahren.',
  keywords: [
    'Team SONNTAG AG',
    'M&A Experten Gießen',
    'Unternehmensnachfolge Berater',
    'Team SONNTAG AG',
    'M&A Beratung Team'
  ]
}


export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
              Unser Team
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Doppelte Spitze für Ihren Erfolg. 25 Jahre Erfahrung im Unternehmensverkauf 
              kombiniert mit 14 Jahren Expertise in der operativen Wertsteigerung.
            </p>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <TeamWithBioAdapted 
        title="Unsere Experten"
        subtitle="Bei der Sonntag AG kombinieren wir 25 Jahre Erfahrung im Unternehmensverkauf mit 14 Jahren Expertise in der operativen Wertsteigerung. Unser Team aus erfahrenen Experten arbeitet Hand in Hand für Ihren erfolgreichen Unternehmensverkauf."
        members={teamMembers}
        showSocial={false}
      />

      {/* Team Values */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-16">
            Was macht unser Team einzigartig?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Anonymes Bieterverfahren</h3>
              <p className="text-sm text-gray-600">
                Das von Thomas Sonntag entwickelte Verfahren schützt Ihre Identität 
                und schafft eine belastbare Entscheidungsgrundlage.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Doppelte Expertise</h3>
              <p className="text-sm text-gray-600">
                MARKTWERT für den Verkauf, MEHRWERT für die Wertsteigerung - 
                beide Bereiche arbeiten Hand in Hand.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Lokale Verankerung</h3>
              <p className="text-sm text-gray-600">
                Tief verwurzelt in Gießen und Mittelhessen, 
                mit nationaler Reichweite.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">100% Diskretion</h3>
              <p className="text-sm text-gray-600">
                Diskrete Abwicklung aller Transaktionen mit höchster 
                Vertraulichkeit und Anonymität.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working Together */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">
                Gemeinsam zum Erfolg
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Unser bewährtes Team arbeitet nach einem einzigartigen Ansatz: 
                Wir suchen nicht den höchsten Bieter, sondern den richtigen Nachfolger.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  25+ Jahre Erfahrung im deutschen Mittelstand
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  Über 500 erfolgreiche Transaktionen in allen Branchen
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  Anonymes Bieterverfahren für maximale Diskretion
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  Persönliche Betreuung durch erfahrene Experten
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-4">
                Unser Versprechen
              </h3>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-gray-700 font-semibold mb-2">Unser Erfolgsrezept:</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• <strong>MARKTWERT:</strong> Anonymes Bieterverfahren für den Verkauf</p>
                  <p>• <strong>MEHRWERT:</strong> Operative Wertsteigerung vor dem Verkauf</p>
                  <p>• <strong>Lokale Verankerung:</strong> Tief verwurzelt in der Region</p>
                  <p>• <strong>Diskretion:</strong> 100% vertrauliche Abwicklung</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black sm:text-4xl mb-6">
            Lernen Sie uns persönlich kennen
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Lassen Sie sich von unserem erfahrenen Team beraten. 
            Kostenlose Erstberatung und optimale Strategie für Ihre Unternehmensnachfolge.
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
              📞 Direkter Kontakt
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
