import type { Metadata } from 'next'

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

const teamMembers = [
  {
    name: 'Thomas Sonntag',
    role: 'Geschäftsführer MARKTWERT',
    image: '/team/thomas-sonntag.jpg',
    bio: 'Gründer und Geschäftsführer der Sonntag AG. Mit über 25 Jahren Erfahrung im Bereich der Unternehmensnachfolge hat er sich als Experte für den deutschen Mittelstand etabliert. Entwickler des anonymen Bieterverfahrens mit über 500 erfolgreichen Transaktionen.',
    expertise: ['Anonymes Bieterverfahren', 'Unternehmensverkauf und -bewertung', 'Marktanalyse und -strategie', 'Verhandlungsführung'],
    experience: '25+ Jahre'
  },
  {
    name: 'Prof. Dr. Bastian Heinemann',
    role: 'Geschäftsführer MEHRWERT',
    image: '/team/bastian-heinemann.jpg',
    bio: 'Leitet den Geschäftsbereich MEHRWERT und bringt 14 Jahre Erfahrung in der operativen Wertsteigerung von Unternehmen mit. Professor für Betriebswirtschaftslehre, Equity Partner einer Unternehmensberatung und mehrere Aufsichtsratsmandate.',
    expertise: ['Operative Wertsteigerung', 'Prozessoptimierung', 'Organisationsentwicklung', 'Change Management'],
    experience: '14+ Jahre'
  },
  {
    name: 'Hannes Sauter',
    role: 'Senior M&A Berater',
    image: '/team/hannes-sauter.jpg',
    bio: 'Experte für komplexe Unternehmensverkäufe und strategische Beratung. Spezialisiert auf mittelständische Transaktionen mit Fokus auf nachhaltige Lösungen.',
    expertise: ['Komplexe Transaktionen', 'Strategische Beratung', 'Mittelstand M&A', 'Due Diligence'],
    experience: '12+ Jahre'
  },
  {
    name: 'Lars Michels',
    role: 'Wertsteigerungsspezialist',
    image: '/team/lars-michels.jpg',
    bio: 'Fokus auf operative Verbesserungen und Prozessoptimierung. Unterstützt Unternehmen bei der Wertsteigerung vor dem Verkauf.',
    expertise: ['Operative Verbesserungen', 'Prozessoptimierung', 'Lean Management', 'Digitalisierung'],
    experience: '10+ Jahre'
  },
  {
    name: 'Matthias Ranft',
    role: 'Marktanalyst',
    image: '/team/matthias-ranft.jpg',
    bio: 'Spezialist für Marktbewertung und strategische Positionierung. Analysiert Markttrends und identifiziert optimale Verkaufszeitpunkte.',
    expertise: ['Marktbewertung', 'Strategische Positionierung', 'Branchenanalyse', 'Bewertungsmodelle'],
    experience: '8+ Jahre'
  },
  {
    name: 'Quirin Eder',
    role: 'Rechtsberater',
    image: '/team/quirin-eder.jpg',
    bio: 'Experte für rechtliche Aspekte der Unternehmensnachfolge. Gewährleistet rechtssichere Verträge und Transaktionsabwicklung.',
    expertise: ['Unternehmensrecht', 'Vertragsgestaltung', 'M&A Recht', 'Due Diligence Legal'],
    experience: '15+ Jahre'
  },
  {
    name: 'Denis Ceylan',
    role: 'Finanzanalyst',
    image: '/team/denis-ceylan.jpg',
    bio: 'Spezialist für Finanzbewertung und Due Diligence. Entwickelt Bewertungsmodelle und analysiert Finanzstrukturen.',
    expertise: ['Finanzbewertung', 'Due Diligence Financial', 'Bewertungsmodelle', 'Finanzstrukturanalyse'],
    experience: '9+ Jahre'
  },
  {
    name: 'Masoume Bron',
    role: 'Projektmanagerin',
    image: '/team/masoume-bron.jpg',
    bio: 'Verantwortlich für die Koordination komplexer Transaktionen. Sorgt für reibungslose Abläufe und termingerechte Umsetzung.',
    expertise: ['Projektmanagement', 'Transaktionskoordination', 'Prozesssteuerung', 'Stakeholder Management'],
    experience: '7+ Jahre'
  }
]

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
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black sm:text-4xl">
              Unsere Führungskräfte
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Bei der Sonntag AG kombinieren wir 25 Jahre Erfahrung im Unternehmensverkauf 
              mit 14 Jahren Expertise in der operativen Wertsteigerung.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-w-3 aspect-h-4 bg-gray-200">
                  <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                    <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full mb-2">
                      {member.experience} Erfahrung
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-800">Expertise:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {member.expertise.map((skill) => (
                        <li key={skill} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
