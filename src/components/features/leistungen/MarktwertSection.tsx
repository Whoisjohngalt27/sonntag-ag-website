export interface MarktwertSectionProps {
  className?: string
}

export function MarktwertSection({ className = '' }: MarktwertSectionProps) {
  return (
    <section id="marktwert" className={`py-24 bg-gray-50 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">
              MARKTWERT
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Unser anonymes Bieterverfahren ermöglicht es Ihnen, den tatsächlichen Marktwert 
              Ihres Unternehmens zu ermitteln und hochdiskret an den Markt zu gehen. 
              In nur 6-12 Wochen zum optimalen Verkaufserlös.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                Anonyme Vermarktung schützt Ihre Identität
              </li>
              <li className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                Wettbewerb zwischen qualifizierten Käufern
              </li>
              <li className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                Maximale Transparenz im Verkaufsprozess
              </li>
              <li className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                Durchschnittlich 20-40% höhere Verkaufspreise
              </li>
              <li className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                Schnelle Transaktionen in 6-12 Wochen
              </li>
              <li className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                25+ Jahre Erfahrung im anonymen Bieterverfahren
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-black mb-4">
              Der MARKTWERT-Prozess
            </h3>
            <div className="text-gray-600 space-y-3">
              <p><strong>Phase 1:</strong> Anonyme Markteinführung ohne Firmenname</p>
              <p><strong>Phase 2:</strong> Qualifizierte Käuferauswahl und -prüfung</p>
              <p><strong>Phase 3:</strong> Strukturierte Bieterrunden für optimale Preise</p>
              <p><strong>Phase 4:</strong> Professionelle Verhandlungsführung</p>
              <p><strong>Phase 5:</strong> Schneller, rechtssicherer Vertragsabschluss</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}