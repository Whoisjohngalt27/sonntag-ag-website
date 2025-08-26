export interface ProcessStep {
  step: string
  title: string
  time: string
  description: string
  phase?: string
}

export interface EmergencyProcessProps {
  title?: string
  subtitle?: string
  steps: ProcessStep[]
  className?: string
}

export function EmergencyProcess({ 
  title = 'Unser bewährter Prozess',
  subtitle = 'Strukturiert und professionell',
  steps,
  className = ''
}: EmergencyProcessProps) {
  return (
    <section className={`py-20 bg-red-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600">
            {subtitle}
          </p>
        </div>
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center bg-white p-8 rounded-lg shadow-sm">
              <div className="flex-shrink-0 w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 lg:mb-0 lg:mr-8">
                {step.step}
              </div>
              <div className="flex-1 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  <div className="flex items-center space-x-4 justify-center lg:justify-end">
                    {step.phase && (
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {step.phase}
                      </span>
                    )}
                    <span className="text-gray-500 text-sm">{step.time}</span>
                  </div>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}