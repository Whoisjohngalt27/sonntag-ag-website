export interface ContactFAQProps {
  className?: string
}

const faqs = [
  {
    category: 'Beratungsprozess',
    questions: [
      {
        question: 'Wie läuft die Erstberatung ab?',
        answer: 'Die Erstberatung dauert etwa 60-90 Minuten. Wir analysieren Ihre Situation, besprechen mögliche Wege und geben Ihnen erste Handlungsempfehlungen. Das Gespräch ist vertraulich und unverbindlich.'
      },
      {
        question: 'Ist die Beratung wirklich kostenlos?',
        answer: 'Ja, die Erstberatung ist vollständig kostenlos und unverbindlich. Erst wenn Sie sich für eine Zusammenarbeit entscheiden, fallen erfolgsbasierte Gebühren an.'
      },
      {
        question: 'Kann ich auch online beraten werden?',
        answer: 'Ja, wir bieten Online-Beratungen per Video-Call an. Dies ist besonders praktisch für erste Gespräche oder bei weiterer Entfernung. Die Qualität der Beratung ist identisch zum persönlichen Treffen.'
      }
    ]
  },
  {
    category: 'Service & Reaktionszeiten',
    questions: [
      {
        question: 'Wie schnell bekomme ich eine Antwort?',
        answer: 'Wir antworten in der Regel innerhalb von 24 Stunden auf Ihre Anfrage. Bei dringenden Anliegen nutzen Sie bitte unsere Hotline für sofortige Unterstützung.'
      },
      {
        question: 'Was ist die 24/7 Notfall-Hotline?',
        answer: 'Für akute Situationen wie drohende Insolvenz oder kritische Verhandlungen sind wir rund um die Uhr erreichbar. Diese Hotline ist für echte Notfälle reserviert.'
      },
      {
        question: 'Wie lange dauert ein Verkaufsprozess?',
        answer: 'Ein strukturierter Unternehmensverkauf dauert typischerweise 6-12 Monate. Die genaue Dauer hängt von Faktoren wie Unternehmensgröße, Branche und Marktlage ab.'
      }
    ]
  },
  {
    category: 'Leistungen & Kosten',
    questions: [
      {
        question: 'Welche Leistungen bieten Sie an?',
        answer: 'Wir bieten MARKTWERT (anonymes Bieterverfahren), MEHRWERT (Wertoptimierung), M&A Beratung, Unternehmensbewertung und Notverkaufsberatung. Jede Leistung wird individuell auf Ihre Bedürfnisse zugeschnitten.'
      },
      {
        question: 'Wie setzen sich Ihre Gebühren zusammen?',
        answer: 'Unsere Gebühren sind erfolgsbasiert und transparent. Sie zahlen nur bei erfolgreichem Abschluss. Die genaue Struktur besprechen wir im persönlichen Gespräch.'
      },
      {
        question: 'Arbeiten Sie auch mit kleineren Unternehmen?',
        answer: 'Ja, wir betreuen Unternehmen aller Größen im Mittelstand. Ob Handwerksbetrieb oder größeres Industrieunternehmen - wir finden die passende Lösung.'
      }
    ]
  }
]

export function ContactFAQ({ className = '' }: ContactFAQProps) {
  return (
    <section className={`py-24 bg-gray-50 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black sm:text-4xl">
            Häufig gestellte Fragen
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hier finden Sie Antworten auf die wichtigsten Fragen
          </p>
        </div>
        
        <div className="space-y-12">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.questions.map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-black mb-3">
                      {faq.question}
                    </h4>
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}