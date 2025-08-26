export interface Challenge {
  icon: string
  title: string
  description: string
}

export interface EmergencyChallengesProps {
  title?: string
  subtitle?: string
  challenges: Challenge[]
  className?: string
}

export function EmergencyChallenges({ 
  title = 'Ihre Herausforderungen',
  subtitle = 'Wir verstehen Ihre Situation',
  challenges,
  className = ''
}: EmergencyChallengesProps) {
  return (
    <section className={`py-20 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600">
            {subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="text-3xl mr-4">{challenge.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{challenge.title}</h3>
                  <p className="text-gray-600">{challenge.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}