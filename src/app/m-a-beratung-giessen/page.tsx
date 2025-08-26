import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircleIcon, ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'M&A Beratung Gießen | SONNTAG AG',
  description: 'Professionelle M&A Beratung in Gießen und Mittelhessen. Experten für Unternehmenskauf, Unternehmensverkauf und strategische Transaktionen.',
  openGraph: {
    title: 'M&A Beratung Gießen | SONNTAG AG',
    description: 'Professionelle M&A Beratung in Gießen und Mittelhessen. Experten für Unternehmenskauf und -verkauf.',
    type: 'website',
  },
};

const processSteps = [
  {
    number: "01",
    title: "Strategieentwicklung",
    description: "Gemeinsame Definition Ihrer M&A-Ziele und Entwicklung einer maßgeschneiderten Transaktionsstrategie."
  },
  {
    number: "02",
    title: "Marktanalyse",
    description: "Identifikation geeigneter Käufer oder Zielunternehmen durch systematische Marktanalyse."
  },
  {
    number: "03",
    title: "Unternehmensbewertung",
    description: "Professionelle Bewertung nach anerkannten Methoden für eine optimale Preisfindung."
  },
  {
    number: "04",
    title: "Due Diligence",
    description: "Umfassende Prüfung aller relevanten Unternehmensbereiche für maximale Transaktionssicherheit."
  },
  {
    number: "05",
    title: "Verhandlungsführung",
    description: "Professionelle Verhandlung der Transaktionsbedingungen in Ihrem besten Interesse."
  },
  {
    number: "06",
    title: "Vertragsabschluss",
    description: "Begleitung bis zum erfolgreichen Closing und darüber hinaus."
  }
];

const services = [
  {
    title: "Unternehmensverkauf",
    description: "Strukturierter Verkaufsprozess für maximalen Unternehmenswert",
    features: [
      "Verkaufsvorbereitung und Optimierung",
      "Käuferidentifikation und -ansprache",
      "Bieterverfahren-Management",
      "Verhandlungsführung"
    ]
  },
  {
    title: "Unternehmenskauf",
    description: "Strategische Akquisitionen für nachhaltiges Wachstum",
    features: [
      "Zielunternehmenssuche",
      "Akquisitionsstrategie",
      "Due Diligence Koordination",
      "Finanzierungsberatung"
    ]
  },
  {
    title: "Nachfolgeregelung",
    description: "Sichere Übergabe in die nächste Generation",
    features: [
      "Nachfolgeplanung",
      "MBO/MBI Beratung",
      "Familieninterne Nachfolge",
      "Notfallplanung"
    ]
  },
  {
    title: "Strategische Beratung",
    description: "Ganzheitliche Begleitung bei Wachstum und Transformation",
    features: [
      "Wachstumsstrategie",
      "Restrukturierung",
      "Joint Ventures",
      "Carve-outs"
    ]
  }
];

const expertiseAreas = [
  "Maschinenbau & Industrie",
  "IT & Software",
  "Handel & E-Commerce",
  "Dienstleistungen",
  "Handwerk & Bau",
  "Gesundheit & Pflege",
  "Logistik & Transport",
  "Immobilien"
];

export default function MABeratungPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sonntagBlue to-blue-900 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              M&A Beratung in Gießen
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Ihr Partner für erfolgreiche Unternehmenstransaktionen in Mittelhessen. 
              Mit über 300 begleiteten Transaktionen und einem Volumen von über 1 Milliarde Euro.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center bg-white text-sonntagBlue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Kostenlose Erstberatung
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+4964196998370"
                className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-sonntagBlue transition-colors"
              >
                <PhoneIcon className="mr-2 h-5 w-5" />
                +49 641 96 99 83 70
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unsere M&A-Beratungsleistungen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von der strategischen Planung bis zum erfolgreichen Abschluss – 
              wir begleiten Sie durch jeden Schritt Ihrer Transaktion.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unser bewährter M&A-Prozess
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strukturiert, transparent und erfolgsorientiert – so führen wir Ihre Transaktion zum Erfolg.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                  <div className="text-4xl font-bold text-sonntagBlue mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRightIcon className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Branchenexpertise für Ihren Erfolg
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Mit unserer langjährigen Erfahrung in verschiedenen Branchen verstehen wir die 
                spezifischen Herausforderungen und Chancen Ihres Marktes. Unser Team aus spezialisierten 
                Beratern bringt das notwendige Know-how für Ihre erfolgreiche Transaktion mit.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {expertiseAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-sonntagBlue text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Warum SONNTAG AG?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-3xl font-bold mr-4">300+</span>
                  <div>
                    <p className="font-semibold">Erfolgreiche Transaktionen</p>
                    <p className="text-blue-100">Bewährte Expertise seit 2014</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-3xl font-bold mr-4">1 Mrd.+</span>
                  <div>
                    <p className="font-semibold">Transaktionsvolumen</p>
                    <p className="text-blue-100">Vertrauen namhafter Unternehmen</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-3xl font-bold mr-4">98%</span>
                  <div>
                    <p className="font-semibold">Erfolgsquote</p>
                    <p className="text-blue-100">Überdurchschnittliche Abschlussrate</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Erfolgsgeschichten aus der Region
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vertrauen Sie auf unsere nachgewiesene Erfolgsbilanz bei M&A-Transaktionen in Mittelhessen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-sm text-gray-500 mb-2">Maschinenbau</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Strategischer Verkauf an Konzern
              </h3>
              <p className="text-gray-600 mb-4">
                Erfolgreiche Veräußerung eines mittelständischen Maschinenbauers an einen 
                internationalen Konzern. Transaktionsvolumen: 45 Mio. EUR
              </p>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-500">Ergebnis:</p>
                <p className="font-semibold text-green-600">30% über Erwartung</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-sm text-gray-500 mb-2">IT-Dienstleistungen</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Management Buy-Out
              </h3>
              <p className="text-gray-600 mb-4">
                Begleitung eines erfolgreichen MBO bei einem IT-Dienstleister mit 120 Mitarbeitern. 
                Strukturierung und Finanzierung der Transaktion.
              </p>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-500">Zeitrahmen:</p>
                <p className="font-semibold text-green-600">4 Monate bis Closing</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-sm text-gray-500 mb-2">Handel</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Nachfolgeregelung Familienunternehmen
              </h3>
              <p className="text-gray-600 mb-4">
                Strukturierte Nachfolgelösung für traditionsreiches Handelsunternehmen. 
                Sicherung von 85 Arbeitsplätzen.
              </p>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-500">Besonderheit:</p>
                <p className="font-semibold text-green-600">Fortführung der Tradition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sonntagBlue to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Starten Sie Ihre M&A-Transaktion mit den Experten
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Nutzen Sie unsere kostenlose Erstberatung und erfahren Sie, wie wir Ihre 
            Transaktionsziele erreichen können.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center bg-white text-sonntagBlue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Erstberatung vereinbaren
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/unternehmensbewertung-rechner"
              className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-sonntagBlue transition-colors"
            >
              Unternehmenswert berechnen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}