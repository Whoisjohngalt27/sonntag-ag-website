import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Über uns | SONNTAG AG - M&A Beratung Gießen',
  description: 'Lernen Sie SONNTAG AG kennen. 25+ Jahre Erfahrung in der Unternehmensnachfolge und M&A Beratung. Wir sichern Lebenswerke durch anonyme Bieterverfahren.',
  keywords: [
    'Über SONNTAG AG',
    'M&A Beratung Gießen',
    'Unternehmensnachfolge Erfahrung',
    'Team SONNTAG AG',
    'Geschichte SONNTAG AG'
  ]
}

export default function UeberUnsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
              Über SONNTAG AG
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Wir verkaufen keine Unternehmen. <strong>Wir sichern Lebenswerke.</strong> 
              25+ Jahre Erfahrung, über 500 erfolgreiche Transaktionen.
            </p>
            <div className="mt-8 bg-gray-50 p-6 rounded-lg max-w-4xl mx-auto">
              <p className="text-xl text-gray-800 font-medium italic text-center">
                &ldquo;Für den Unternehmer, der sein Lebenswerk in die richtigen Hände geben will.&rdquo;
              </p>
              <p className="text-center text-gray-600 mt-2">- Unser Markenmanifest -</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">
                Unsere Geschichte
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Es gibt eine Welt, die von Zahlen getrieben wird. Von undurchsichtigen Begriffen, 
                komplexen Prozessen und dem Versprechen auf den schnellen Profit. 
                <strong>Das ist nicht unsere Welt.</strong>
              </p>
              <p className="text-gray-600 mb-6">
                Wir glauben, dass der Wert eines Unternehmens <strong>nicht allein in der Bilanz</strong> steht. 
                Er steht in den Werkshallen, den Köpfen der Mitarbeiter, den jahrzehntelangen 
                Beziehungen zu Kunden und dem Ansehen, das man sich vor Ort erarbeitet hat.
              </p>
              <p className="text-gray-600 mb-6">
                <strong>Er ist das Lebenswerk. Und ein Lebenswerk verdient mehr als einen Standardprozess.</strong>
              </p>
              <p className="text-gray-600">
                Mit über 500 erfolgreichen Transaktionen und einem Transaktionsvolumen von 
                über 500 Millionen Euro haben wir bewiesen: Unser Ansatz funktioniert.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-4">
                Unser Versprechen
              </h3>
              <p className="text-lg text-gray-800 mb-4 font-medium">
                Wir finden nicht den Meistbietenden, sondern den Richtigen. 
                Den, der versteht, was er in den Händen hält.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Das ist kein Geschäft. Das ist eine Haltung.</strong>
              </p>
              <div className="bg-gray-100 p-4 rounded">
                <p className="text-sm text-gray-700 font-semibold text-center">
                  SONNTAG AG. Klarheit. Verantwortung. Ergebnis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-16">
            Unsere Werte
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                Vertrauen
              </h3>
              <p className="text-gray-600">
                Wir bauen auf langfristige Beziehungen und gegenseitiges Vertrauen. 
                Diskretion und Anonymität sind unsere obersten Prinzipien.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                Exzellenz
              </h3>
              <p className="text-gray-600">
                Wir streben nach höchster Qualität in allem, was wir tun. 
                Kontinuierliche Weiterbildung und Innovation sind unser Antrieb.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                Partnerschaft
              </h3>
              <p className="text-gray-600">
                Wir verstehen uns als Partner unserer Kunden. Gemeinsam entwickeln 
                wir maßgeschneiderte Lösungen für erfolgreiche Übergänge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">
                Standort Gießen
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Als traditionsreiches Unternehmen in Gießen verstehen wir die besonderen 
                Herausforderungen des deutschen Mittelstands. Unsere lokale Verankerung 
                kombiniert mit nationaler Reichweite macht uns zum idealen Partner.
              </p>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gray-700 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Gießen, Hessen - Zentrum für M&A Beratung</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gray-700 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>25+ Jahre Erfahrung in der Region</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gray-700 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <span>Über 200 erfolgreiche Transaktionen</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-4">
                Unser Idealkunde
              </h3>
              <p className="text-gray-600 mb-3">
                Der <strong>patriarchalische oder matriarchalische Inhaber</strong> eines gesunden, 
                deutschen mittelständischen Unternehmens.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-semibold text-black mb-2">Hauptmotivationen:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Sicherheit für die Mitarbeiter</li>
                  <li>• Bewahrung des Lebenswerks (Legacy)</li>
                  <li>• Schutz der Anonymität und des Rufs</li>
                  <li>• Soziale Verantwortung für die Region</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black sm:text-4xl mb-6">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Vertrauen Sie Ihr Lebenswerk den Experten an, die verstehen, worüber Sie entscheiden.
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
