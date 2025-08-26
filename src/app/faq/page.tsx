'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// export const metadata: Metadata = {
//   title: 'Häufig gestellte Fragen | SONNTAG AG',
//   description: 'Antworten auf häufige Fragen zu M&A, Unternehmensnachfolge, Bewertung und unseren Beratungsleistungen.',
//   openGraph: {
//     title: 'FAQ | SONNTAG AG',
//     description: 'Alle wichtigen Fragen und Antworten zu unseren M&A-Beratungsleistungen.',
//     type: 'website',
//   },
// };

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // General M&A Questions
  {
    category: "Allgemeine M&A-Fragen",
    question: "Was bedeutet M&A?",
    answer: "M&A steht für Mergers & Acquisitions, zu Deutsch: Fusionen und Übernahmen. Es umfasst alle Aktivitäten im Zusammenhang mit dem Kauf, Verkauf und der Zusammenführung von Unternehmen. Dies beinhaltet Unternehmenskäufe, -verkäufe, Fusionen, Joint Ventures und strategische Partnerschaften."
  },
  {
    category: "Allgemeine M&A-Fragen",
    question: "Wann ist der richtige Zeitpunkt für einen Unternehmensverkauf?",
    answer: "Der optimale Zeitpunkt hängt von verschiedenen Faktoren ab: persönliche Situation des Unternehmers, Marktumfeld, Unternehmensentwicklung und strategische Überlegungen. Grundsätzlich gilt: Ein Verkauf sollte aus einer Position der Stärke heraus erfolgen, wenn das Unternehmen gut aufgestellt ist und positive Zukunftsaussichten hat."
  },
  {
    category: "Allgemeine M&A-Fragen",
    question: "Wie lange dauert ein M&A-Prozess?",
    answer: "Ein strukturierter M&A-Prozess dauert in der Regel 6-12 Monate. Die Dauer hängt von verschiedenen Faktoren ab: Komplexität der Transaktion, Anzahl der Interessenten, Due Diligence-Umfang und Verhandlungsverlauf. Eine gute Vorbereitung kann den Prozess erheblich beschleunigen."
  },
  
  // Unternehmensnachfolge Process
  {
    category: "Unternehmensnachfolge",
    question: "Welche Nachfolgeoptionen gibt es?",
    answer: "Es gibt verschiedene Nachfolgeoptionen: familieninterne Nachfolge (Übergabe an Kinder oder Verwandte), Management Buy-Out (MBO - Verkauf an das bestehende Management), Management Buy-In (MBI - Verkauf an externes Management), strategischer Verkauf an Wettbewerber oder Finanzinvestor. Wir helfen Ihnen, die optimale Lösung zu finden."
  },
  {
    category: "Unternehmensnachfolge",
    question: "Wie bereite ich mein Unternehmen auf die Nachfolge vor?",
    answer: "Eine gute Vorbereitung umfasst: Aufbau einer zweiten Führungsebene, Dokumentation aller wichtigen Prozesse, Bereinigung der Bilanz, Optimierung der Ertragssituation, Klärung rechtlicher Fragen und frühzeitige steuerliche Gestaltung. Wir empfehlen, mindestens 2-3 Jahre vor der geplanten Übergabe mit der Vorbereitung zu beginnen."
  },
  {
    category: "Unternehmensnachfolge",
    question: "Was passiert, wenn ich keinen Nachfolger finde?",
    answer: "Ohne rechtzeitige Nachfolgeregelung droht im Ernstfall die Liquidation des Unternehmens. Daher ist es wichtig, frühzeitig verschiedene Optionen zu prüfen. Wir unterstützen Sie mit unserem Netzwerk bei der Suche nach geeigneten Nachfolgern und entwickeln alternative Lösungsansätze wie Teilverkäufe oder strategische Partnerschaften."
  },
  
  // Valuation and Pricing
  {
    category: "Bewertung und Preisfindung",
    question: "Wie wird der Unternehmenswert ermittelt?",
    answer: "Die Unternehmensbewertung erfolgt nach anerkannten Methoden: Ertragswertverfahren (Discounted Cash Flow), Multiplikatorverfahren (EBITDA-Multiple) und Substanzwertverfahren. In der Praxis wird meist eine Kombination dieser Methoden verwendet. Der finale Preis ergibt sich aus Angebot und Nachfrage sowie den Verhandlungen."
  },
  {
    category: "Bewertung und Preisfindung",
    question: "Was ist ein EBITDA-Multiple?",
    answer: "Das EBITDA-Multiple ist eine Kennzahl zur Unternehmensbewertung. Es zeigt, mit welchem Faktor das EBITDA (Gewinn vor Zinsen, Steuern und Abschreibungen) multipliziert wird, um den Unternehmenswert zu ermitteln. Die Höhe des Multiples hängt von Branche, Größe, Wachstum und Risikoprofil ab. Typische Multiples liegen zwischen 4 und 8."
  },
  {
    category: "Bewertung und Preisfindung",
    question: "Kann ich den Verkaufspreis selbst bestimmen?",
    answer: "Als Verkäufer können Sie Ihre Preisvorstellung äußern, der finale Preis ergibt sich jedoch aus den Marktgegebenheiten. Ein zu hoher Preis schreckt Interessenten ab, ein zu niedriger Preis verschenkt Wert. Unsere professionelle Bewertung hilft Ihnen, eine realistische und marktgerechte Preisvorstellung zu entwickeln."
  },
  
  // Legal and Regulatory
  {
    category: "Rechtliche und regulatorische Fragen",
    question: "Welche rechtlichen Aspekte sind beim Unternehmensverkauf zu beachten?",
    answer: "Wichtige rechtliche Aspekte sind: Wahl der Transaktionsstruktur (Share Deal vs. Asset Deal), Due Diligence-Vorbereitung, Garantien und Gewährleistungen, Wettbewerbsverbote, Datenschutz und arbeitsrechtliche Fragen. Eine frühzeitige Einbindung spezialisierter Rechtsberater ist empfehlenswert."
  },
  {
    category: "Rechtliche und regulatorische Fragen",
    question: "Was ist der Unterschied zwischen Share Deal und Asset Deal?",
    answer: "Bei einem Share Deal werden die Gesellschaftsanteile verkauft, das Unternehmen bleibt als juristische Person bestehen. Bei einem Asset Deal werden einzelne Vermögensgegenstände und Verbindlichkeiten übertragen. Share Deals sind oft einfacher, Asset Deals bieten mehr Flexibilität bei der Risikoverteilung."
  },
  {
    category: "Rechtliche und regulatorische Fragen",
    question: "Muss ich nach dem Verkauf noch im Unternehmen bleiben?",
    answer: "Das hängt von der Vereinbarung ab. Oft wünschen Käufer eine Übergangsphase von 6-24 Monaten, um Know-how zu sichern und Kontinuität zu gewährleisten. Die genaue Dauer und Ausgestaltung ist Verhandlungssache. In manchen Fällen ist auch ein sofortiger Ausstieg möglich."
  },
  
  // Timeline and Process
  {
    category: "Zeitplan und Prozess",
    question: "Was ist eine Due Diligence?",
    answer: "Die Due Diligence ist eine sorgfältige Prüfung des Unternehmens durch den potenziellen Käufer. Geprüft werden alle relevanten Bereiche: Finanzen, Recht, Steuern, Technik, Markt und Personal. Eine gute Vorbereitung mit einem Datenraum beschleunigt den Prozess erheblich und schafft Vertrauen beim Käufer."
  },
  {
    category: "Zeitplan und Prozess",
    question: "Was ist ein Letter of Intent (LOI)?",
    answer: "Ein Letter of Intent ist eine Absichtserklärung zwischen Käufer und Verkäufer. Er dokumentiert das grundsätzliche Interesse an der Transaktion, die wesentlichen Eckpunkte (Preis, Struktur) und den weiteren Ablauf. Der LOI ist meist nicht bindend, schafft aber eine verbindliche Verhandlungsgrundlage."
  },
  {
    category: "Zeitplan und Prozess",
    question: "Wie läuft ein Bieterverfahren ab?",
    answer: "In einem strukturierten Bieterverfahren werden mehrere potenzielle Käufer parallel angesprochen. Nach Unterzeichnung einer Vertraulichkeitsvereinbarung erhalten sie ein Memorandum. Interessierte Käufer geben indikative Angebote ab. Die besten Bieter werden zur Due Diligence zugelassen und geben finale Angebote ab."
  },
  
  // Costs and Fees
  {
    category: "Kosten und Gebühren",
    question: "Was kostet eine M&A-Beratung?",
    answer: "Die Vergütung erfolgt meist erfolgsabhängig als Prozentsatz des Transaktionsvolumens (typisch 2-5%, abhängig von der Transaktionsgröße). Zusätzlich kann eine monatliche Retainer-Fee für die laufende Beratung anfallen. Die genaue Struktur vereinbaren wir individuell. Die Erstberatung ist kostenlos."
  },
  {
    category: "Kosten und Gebühren",
    question: "Welche Nebenkosten fallen bei einer Transaktion an?",
    answer: "Neben der M&A-Beratung fallen typischerweise Kosten für Rechtsberatung, Steuerberatung, Due Diligence, Notargebühren und ggf. Finanzierungskosten an. Insgesamt sollten Sie mit Transaktionskosten von 3-7% des Kaufpreises rechnen. Eine gute Beratung hilft, diese Kosten zu optimieren."
  },
  {
    category: "Kosten und Gebühren",
    question: "Wann wird die Erfolgsgebühr fällig?",
    answer: "Die Erfolgsgebühr wird bei erfolgreichem Abschluss der Transaktion (Closing) fällig. Erfolg bedeutet dabei die notarielle Beurkundung des Kaufvertrags bzw. die Übertragung der Anteile. Kommt keine Transaktion zustande, wird auch keine Erfolgsgebühr fällig."
  }
];

const categories = Array.from(new Set(faqData.map(item => item.category)));

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Alle Kategorien');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const filteredFAQs = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Alle Kategorien' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sonntagBlue to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Häufig gestellte Fragen
          </h1>
          <p className="text-xl text-blue-100">
            Finden Sie Antworten auf die wichtigsten Fragen zu M&A und Unternehmensnachfolge
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Suchen Sie nach Fragen oder Stichworten..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sonntagBlue"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sonntagBlue"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option>Alle Kategorien</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  Keine Fragen gefunden. Bitte ändern Sie Ihre Suchkriterien.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((item, index) => {
                  const isExpanded = expandedItems.includes(index);
                  return (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <button
                        className="w-full px-6 py-4 text-left flex justify-between items-start hover:bg-gray-50 transition-colors"
                        onClick={() => toggleExpanded(index)}
                      >
                        <div className="flex-1">
                          <div className="text-sm text-sonntagBlue font-semibold mb-1">
                            {item.category}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">
                            {item.question}
                          </h3>
                        </div>
                        {isExpanded ? (
                          <ChevronUpIcon className="h-5 w-5 text-gray-400 flex-shrink-0 mt-1" />
                        ) : (
                          <ChevronDownIcon className="h-5 w-5 text-gray-400 flex-shrink-0 mt-1" />
                        )}
                      </button>
                      {isExpanded && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-sonntagBlue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ihre Frage wurde nicht beantwortet?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Kontaktieren Sie uns für eine persönliche Beratung
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt"
              className="inline-block bg-white text-sonntagBlue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Kontakt aufnehmen
            </Link>
            <a
              href="tel:+4964196998370"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-sonntagBlue transition-colors"
            >
              +49 641 96 99 83 70
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}