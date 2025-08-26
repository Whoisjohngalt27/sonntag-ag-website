export interface ExpertTeamSectionProps {
  className?: string
}

export function ExpertTeamSection({ className = '' }: ExpertTeamSectionProps) {
  return (
    <section className={`py-24 bg-gray-50 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-black text-center mb-16">
          Unsere Experten für Ihren Erfolg
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                <span className="text-gray-600 font-bold text-lg">TS</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black">Thomas Sonntag</h3>
                <p className="text-gray-600">Geschäftsführer MARKTWERT</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              25 Jahre Erfahrung im Unternehmensverkauf. Entwickler des anonymen Bieterverfahrens 
              mit über 500 erfolgreichen Transaktionen.
            </p>
            <div className="text-sm text-gray-600">
              <p><strong>Expertise:</strong> Anonyme Bieterverfahren, Marktanalyse, Verhandlungsführung</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                <span className="text-gray-600 font-bold text-lg">BH</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black">Prof. Dr. Bastian Heinemann</h3>
                <p className="text-gray-600">Geschäftsführer MEHRWERT</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              14 Jahre Expertise in der operativen Wertsteigerung. Professor für Betriebswirtschaftslehre 
              und Equity Partner einer Unternehmensberatung.
            </p>
            <div className="text-sm text-gray-600">
              <p><strong>Expertise:</strong> Operative Wertsteigerung, Prozessoptimierung, Change Management</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}