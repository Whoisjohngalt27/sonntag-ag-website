export interface MehrwertSectionProps {
  className?: string
}

export function MehrwertSection({ className = '' }: MehrwertSectionProps) {
  return (
    <section id="mehrwert" className={`py-24 bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-black mb-4">
              MEHRWERT-Methodik
            </h3>
            <div className="text-gray-600 space-y-3">
              <p><strong>1. Potenzialanalyse:</strong> Identifikation aller Wertsteigerungsmöglichkeiten</p>
              <p><strong>2. Maßnahmenplan:</strong> Individueller Plan für die Wertoptimierung</p>
              <p><strong>3. Umsetzung:</strong> Gemeinsame Realisierung der Potenziale</p>
              <p><strong>4. Monitoring:</strong> Kontinuierliche Überwachung der Ergebnisse</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-black mb-6">
              MEHRWERT
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Professionelle Wertsteigerung vor dem Verkauf durch operative Optimierung. 
              14 Jahre Expertise von Prof. Dr. Bastian Heinemann für 20-40% höhere Erlöse.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                Steigerung der Profitabilität um 20-40%
              </li>
              <li className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                Prozessoptimierung und Digitalisierung
              </li>
              <li className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                Organisationsoptimierung und Mitarbeiterentwicklung
              </li>
              <li className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                Kennzahlenbasierte Unternehmenssteuerung
              </li>
              <li className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                14+ Jahre Erfahrung in der Wertoptimierung
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}