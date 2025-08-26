export interface SuccessStoriesSectionProps {
  className?: string
}

export function SuccessStoriesSection({ className = '' }: SuccessStoriesSectionProps) {
  return (
    <section className={`py-24 bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-black text-center mb-16">
          Erfolgsgeschichten unserer Kunden
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-black mb-3">Traditionsbetrieb Gießen</h3>
            <p className="text-gray-600 text-sm mb-4">
              Familienbetrieb mit 25 Mitarbeitern, Inhaber 65 Jahre alt
            </p>
            <div className="border-l-4 border-gray-300 pl-4">
              <p className="text-gray-600 text-sm mb-2">
                <strong>Lösung:</strong> MEHRWERT + MARKTWERT Kombination
              </p>
              <p className="text-green-600 font-semibold">
                Ergebnis: 45% Wertsteigerung in 8 Wochen
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-black mb-3">Tech-Unternehmen Marburg</h3>
            <p className="text-gray-600 text-sm mb-4">
              Wachsendes Unternehmen ohne Nachfolger
            </p>
            <div className="border-l-4 border-gray-300 pl-4">
              <p className="text-gray-600 text-sm mb-2">
                <strong>Lösung:</strong> M&A Beratung mit internationaler Käufersuche
              </p>
              <p className="text-green-600 font-semibold">
                Ergebnis: 3x höherer Preis als erwartet
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-black mb-3">Handwerksbetrieb Lahn-Dill</h3>
            <p className="text-gray-600 text-sm mb-4">
              Inhaberabhängiges Unternehmen mit geringer Profitabilität
            </p>
            <div className="border-l-4 border-gray-300 pl-4">
              <p className="text-gray-600 text-sm mb-2">
                <strong>Lösung:</strong> MEHRWERT-Service, dann MARKTWERT-Verkauf
              </p>
              <p className="text-green-600 font-semibold">
                Ergebnis: 60% Steigerung der Profitabilität
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}