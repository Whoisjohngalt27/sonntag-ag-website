export interface ServiceComparisonSectionProps {
  className?: string
}

export function ServiceComparisonSection({ className = '' }: ServiceComparisonSectionProps) {
  return (
    <section className={`py-24 bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-black text-center mb-16">
          Welcher Service passt zu Ihnen?
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-black">Kriterium</th>
                <th className="px-6 py-4 text-center font-semibold text-black">MARKTWERT</th>
                <th className="px-6 py-4 text-center font-semibold text-black">MEHRWERT</th>
                <th className="px-6 py-4 text-center font-semibold text-black">M&A BERATUNG</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">Dauer</td>
                <td className="px-6 py-4 text-center text-gray-600">6-12 Wochen</td>
                <td className="px-6 py-4 text-center text-gray-600">3-12 Monate</td>
                <td className="px-6 py-4 text-center text-gray-600">6-18 Monate</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Wertsteigerung</td>
                <td className="px-6 py-4 text-center text-gray-600">15-25%</td>
                <td className="px-6 py-4 text-center text-gray-600">20-40%</td>
                <td className="px-6 py-4 text-center text-gray-600">Individuell</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">Ideal für</td>
                <td className="px-6 py-4 text-center text-gray-600">Schneller Verkauf</td>
                <td className="px-6 py-4 text-center text-gray-600">Wertoptimierung</td>
                <td className="px-6 py-4 text-center text-gray-600">Komplexe Fälle</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Besonderheit</td>
                <td className="px-6 py-4 text-center text-gray-600">Anonym</td>
                <td className="px-6 py-4 text-center text-gray-600">Operational</td>
                <td className="px-6 py-4 text-center text-gray-600">Ganzheitlich</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}