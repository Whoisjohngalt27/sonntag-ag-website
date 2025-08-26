import { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowRightIcon, 
  DocumentTextIcon, 
  MagnifyingGlassIcon,
  ChartBarIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  CheckCircleIcon,
  ClockIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Der M&A-Prozess | SONNTAG AG',
  description: 'Erfahren Sie mehr über unseren strukturierten M&A-Prozess von der ersten Analyse bis zum erfolgreichen Abschluss.',
  openGraph: {
    title: 'Der M&A-Prozess | SONNTAG AG',
    description: 'Unser bewährter 6-Phasen-Prozess für erfolgreiche Unternehmenstransaktionen.',
    type: 'website',
  },
};

const processPhases = [
  {
    phase: 1,
    title: "Erstberatung & Analyse",
    duration: "1-2 Wochen",
    icon: DocumentTextIcon,
    description: "Kennenlernen, Zielsetzung und Machbarkeitsanalyse",
    tasks: [
      "Kostenloses Erstgespräch",
      "Analyse der Ausgangssituation",
      "Definition der Transaktionsziele",
      "Erste Unternehmensbewertung",
      "Machbarkeitsprüfung",
      "Beratungsvertrag"
    ],
    deliverables: [
      "Indikative Bewertung",
      "Prozessfahrplan",
      "Zeitplan"
    ]
  },
  {
    phase: 2,
    title: "Vorbereitung & Aufbereitung",
    duration: "4-6 Wochen",
    icon: ChartBarIcon,
    description: "Optimierung und Dokumentation für den Verkaufsprozess",
    tasks: [
      "Detaillierte Unternehmensanalyse",
      "Erstellung Verkaufsdokumentation",
      "Information Memorandum",
      "Datenraum-Vorbereitung",
      "Identifikation von Value Drivers",
      "Bereinigung der Zahlen"
    ],
    deliverables: [
      "Information Memorandum",
      "Virtueller Datenraum",
      "Unternehmenspräsentation"
    ]
  },
  {
    phase: 3,
    title: "Marketing & Ansprache",
    duration: "6-8 Wochen",
    icon: UserGroupIcon,
    description: "Systematische Identifikation und Ansprache von Interessenten",
    tasks: [
      "Erstellung Long List",
      "Käuferscreening",
      "Anonyme Erstansprache",
      "Vertraulichkeitsvereinbarungen",
      "Versand Information Memorandum",
      "Management Präsentationen"
    ],
    deliverables: [
      "Käuferliste",
      "NDAs",
      "Prozessbriefe"
    ]
  },
  {
    phase: 4,
    title: "Due Diligence & Verhandlung",
    duration: "8-10 Wochen",
    icon: MagnifyingGlassIcon,
    description: "Detailprüfung und Verhandlung der Transaktionsbedingungen",
    tasks: [
      "Due Diligence Koordination",
      "Q&A Management",
      "Expertenrunden",
      "Angebotseinholung",
      "Verhandlungsführung",
      "Letter of Intent"
    ],
    deliverables: [
      "Due Diligence Report",
      "Verbindliche Angebote",
      "Letter of Intent"
    ]
  },
  {
    phase: 5,
    title: "Vertragsgestaltung",
    duration: "4-6 Wochen",
    icon: DocumentCheckIcon,
    description: "Ausarbeitung und Finalisierung der Vertragswerke",
    tasks: [
      "Kaufvertragsentwurf",
      "Garantie- & Gewährleistungen",
      "Kaufpreisanpassungen",
      "Closing-Bedingungen",
      "Steueroptimierung",
      "Finanzierungsstruktur"
    ],
    deliverables: [
      "Kaufvertrag",
      "Gesellschaftervereinbarungen",
      "Übergabeprotokoll"
    ]
  },
  {
    phase: 6,
    title: "Closing & Integration",
    duration: "2-4 Wochen",
    icon: CheckCircleIcon,
    description: "Vollzug der Transaktion und Übergabebegleitung",
    tasks: [
      "Erfüllung Closing-Bedingungen",
      "Notarielle Beurkundung",
      "Kaufpreiszahlung",
      "Übergabe Management",
      "Mitarbeiterkommunikation",
      "Post-Merger Integration"
    ],
    deliverables: [
      "Closing Memorandum",
      "Übergabeplan",
      "Integrationsfahrplan"
    ]
  }
];

const processHighlights = [
  {
    icon: ClockIcon,
    title: "Zeiteffizienz",
    description: "Durchschnittlich 6-9 Monate vom Start bis zum Closing"
  },
  {
    icon: ShieldCheckIcon,
    title: "Risikominimierung",
    description: "Strukturierter Prozess reduziert Transaktionsrisiken"
  },
  {
    icon: ChartBarIcon,
    title: "Wertsteigerung",
    description: "Optimale Vorbereitung maximiert den Verkaufspreis"
  }
];

const documents = [
  {
    category: "Phase 1-2",
    items: [
      "Jahresabschlüsse (3 Jahre)",
      "BWA und SuSa aktuell",
      "Gesellschaftsverträge",
      "Organigramm",
      "Mitarbeiterliste"
    ]
  },
  {
    category: "Phase 3-4",
    items: [
      "Wichtige Verträge",
      "Kundenliste TOP 20",
      "Lieferantenverträge",
      "Miet- und Leasingverträge",
      "Versicherungspolicen"
    ]
  },
  {
    category: "Phase 5-6",
    items: [
      "Grundbuchauszüge",
      "Patente und Schutzrechte",
      "Compliance-Nachweise",
      "Steuerunterlagen",
      "Genehmigungen"
    ]
  }
];

export default function ProzessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sonntagBlue to-blue-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Der SONNTAG M&A-Prozess
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Strukturiert, transparent und erfolgsorientiert zum optimalen Transaktionsergebnis
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center bg-white text-sonntagBlue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Prozess starten
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/unternehmensbewertung-rechner"
                className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-sonntagBlue transition-colors"
              >
                Unternehmenswert ermitteln
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Process Highlights */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {processHighlights.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <highlight.icon className="h-12 w-12 text-sonntagBlue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Phases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Die 6 Phasen zum erfolgreichen Abschluss
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jede Phase ist sorgfältig strukturiert, um maximale Effizienz und optimale Ergebnisse zu gewährleisten.
            </p>
          </div>

          <div className="space-y-8">
            {processPhases.map((phase, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-sonntagBlue to-blue-700 text-white p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-5xl font-bold opacity-50">0{phase.phase}</span>
                      <phase.icon className="h-12 w-12" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{phase.title}</h3>
                    <p className="text-blue-100 mb-4">{phase.description}</p>
                    <div className="inline-flex items-center bg-white/20 px-3 py-1 rounded-full text-sm">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {phase.duration}
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Hauptaufgaben</h4>
                        <ul className="space-y-2">
                          {phase.tasks.map((task, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Ergebnisse</h4>
                        <ul className="space-y-2">
                          {phase.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-start">
                              <DocumentCheckIcon className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benötigte Unterlagen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eine gute Vorbereitung beschleunigt den Prozess. Diese Dokumente werden im Verlauf benötigt:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {documents.map((doc, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {doc.category}
                </h3>
                <ul className="space-y-2">
                  {doc.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <DocumentTextIcon className="h-5 w-5 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Keine Sorge: Wir helfen Ihnen bei der Zusammenstellung und Aufbereitung aller notwendigen Unterlagen.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center text-sonntagBlue font-semibold hover:underline"
            >
              Checkliste anfordern
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Erfolgsfaktoren für Ihre Transaktion
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diese Faktoren sind entscheidend für den Erfolg Ihrer M&A-Transaktion:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-sonntagBlue text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Frühzeitige Planung</h3>
              <p className="text-gray-600">
                Je früher Sie mit der Vorbereitung beginnen, desto besser das Ergebnis
              </p>
            </div>
            <div className="text-center">
              <div className="bg-sonntagBlue text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Transparenz</h3>
              <p className="text-gray-600">
                Offene Kommunikation schafft Vertrauen bei allen Beteiligten
              </p>
            </div>
            <div className="text-center">
              <div className="bg-sonntagBlue text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Professionelle Begleitung</h3>
              <p className="text-gray-600">
                Erfahrene Berater maximieren Ihre Erfolgschancen
              </p>
            </div>
            <div className="text-center">
              <div className="bg-sonntagBlue text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Realistische Erwartungen</h3>
              <p className="text-gray-600">
                Marktgerechte Preisvorstellungen führen zum Erfolg
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sonntagBlue to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für den ersten Schritt?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Starten Sie jetzt mit unserer kostenlosen Erstberatung und erfahren Sie, 
            wie wir Sie zum Erfolg führen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center bg-white text-sonntagBlue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Prozess starten
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-sonntagBlue transition-colors"
            >
              Häufige Fragen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}