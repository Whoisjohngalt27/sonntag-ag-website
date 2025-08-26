export interface MABeratungSectionProps {
  className?: string
}

export function MABeratungSection({ className = '' }: MABeratungSectionProps) {
  return (
    <section id="bewertung" className={`py-24 bg-gray-50 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">
              M&A BERATUNG
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Umfassende M&A Beratung für alle Aspekte der Unternehmensnachfolge. 
              Von der Strategieentwicklung bis zum erfolgreichen Abschluss.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                Strategische Nachfolgeplanung und -entwicklung
              </li>
              <li className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                Professionelle Unternehmensbewertung
              </li>
              <li className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                Käufersuche und Due Diligence Begleitung
              </li>
              <li className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                Verhandlungsführung und Vertragsabschluss
              </li>
              <li className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                Schutz von Arbeitsplätzen und Unternehmenskultur
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-black mb-4">
              Spezialisierte Nachfolgeszenarien
            </h3>
            <div className="text-gray-600 space-y-2">
              <p><strong>• Familieninterne Nachfolge:</strong> Qualifizierung von Familiennachfolgern</p>
              <p><strong>• Externe Nachfolge:</strong> Anonyme Käufersuche im In- und Ausland</p>
              <p><strong>• Management-Buy-Out:</strong> Unterstützung bei Finanzierung und Bewertung</p>
              <p><strong>• Sanierung:</strong> Bewertung und Planung bei wirtschaftlichen Schwierigkeiten</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}