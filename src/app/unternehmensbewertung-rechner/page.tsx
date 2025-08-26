'use client'

import { useState } from 'react'

// Metadata would normally be exported, but since this uses client-side state, we'll handle SEO differently
// export const metadata: Metadata = {
//   title: 'Unternehmensbewertung Rechner | SONNTAG AG - Kostenlose Firmenbewertung',
//   description: 'Ermitteln Sie kostenlos den Wert Ihres Unternehmens mit unserem professionellen Bewertungsrechner. Basierend auf 500+ M&A Transaktionen.',
// }

interface ValuationInput {
  industry: string
  revenue: number
  ebitda: number
  growthRate: number
  employees: number
  assets: number
  marketPosition: 'leader' | 'strong' | 'average'
  email?: string
  name?: string
  phone?: string
  company?: string
}

interface ValuationResult {
  lowRange: number
  midRange: number
  highRange: number
  methods: {
    ebitdaMultiple: number
    revenueMultiple: number
    assetBased: number
  }
  confidence: number
}

// Industry multipliers based on German M&A market data - removed as unused
// const industryMultipliers = {
//   'technology': { ebitda: 8.5, revenue: 2.5 },
//   'manufacturing': { ebitda: 5.5, revenue: 0.8 },
//   'services': { ebitda: 6.0, revenue: 1.2 },
//   'retail': { ebitda: 4.5, revenue: 0.6 },
//   'healthcare': { ebitda: 7.5, revenue: 1.8 },
//   'construction': { ebitda: 4.0, revenue: 0.5 },
//   'logistics': { ebitda: 5.0, revenue: 0.7 },
//   'food': { ebitda: 5.5, revenue: 0.9 },
//   'energy': { ebitda: 6.5, revenue: 1.5 },
//   'real-estate': { ebitda: 8.0, revenue: 2.0 },
// }

export default function UnternehmensbewertungRechner() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<Partial<ValuationInput>>({})
  const [result, setResult] = useState<ValuationResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const totalSteps = 4

  const handleInputChange = (field: keyof ValuationInput, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const calculateValuation = async () => {
    setIsCalculating(true)
    
    try {
      const response = await fetch('/api/valuation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Calculation failed')
      }

      const data = await response.json()
      setResult(data)
      setCurrentStep(5) // Go to results
    } catch (error) {
      console.error('Error calculating valuation:', error)
      alert('Es gab einen Fehler bei der Berechnung. Bitte versuchen Sie es erneut.')
    } finally {
      setIsCalculating(false)
    }
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      calculateValuation()
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
              Unternehmensbewertung Rechner
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Ermitteln Sie kostenlos und unverbindlich den aktuellen Marktwert Ihres Unternehmens. 
              Basierend auf über 500 erfolgreichen M&A-Transaktionen im deutschen Mittelstand.
            </p>
            {currentStep <= totalSteps && (
              <div className="mt-8 flex justify-center">
                <div className="flex items-center space-x-2">
                  {[...Array(totalSteps)].map((_, i) => (
                    <div key={i} className="flex items-center">
                      <div className={`h-2 w-16 rounded-full ${i < currentStep ? 'bg-black' : 'bg-gray-300'}`} />
                      {i < totalSteps - 1 && <div className="w-2" />}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
            {isCalculating ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 border-4 border-gray-300 border-t-black rounded-full animate-spin mb-4" />
                <h3 className="text-xl font-semibold text-black mb-2">Berechne Unternehmenswert...</h3>
                <p className="text-gray-600">Analyse Ihrer Daten läuft</p>
              </div>
            ) : currentStep === 1 ? (
              // Step 1: Basic Information
              <div>
                <h2 className="text-2xl font-bold text-black mb-6">Schritt 1: Grundlegende Informationen</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Branche
                    </label>
                    <select
                      value={formData.industry || ''}
                      onChange={(e) => handleInputChange('industry', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="technology">Technologie & IT</option>
                      <option value="manufacturing">Produktion & Fertigung</option>
                      <option value="services">Dienstleistungen</option>
                      <option value="retail">Handel & E-Commerce</option>
                      <option value="healthcare">Gesundheitswesen</option>
                      <option value="construction">Bau & Handwerk</option>
                      <option value="logistics">Logistik & Transport</option>
                      <option value="food">Lebensmittel & Gastronomie</option>
                      <option value="energy">Energie & Umwelt</option>
                      <option value="real-estate">Immobilien</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Jahresumsatz (EUR)
                    </label>
                    <input
                      type="number"
                      value={formData.revenue || ''}
                      onChange={(e) => handleInputChange('revenue', parseInt(e.target.value))}
                      placeholder="z.B. 5000000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Anzahl Mitarbeiter
                    </label>
                    <input
                      type="number"
                      value={formData.employees || ''}
                      onChange={(e) => handleInputChange('employees', parseInt(e.target.value))}
                      placeholder="z.B. 25"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            ) : currentStep === 2 ? (
              // Step 2: Financial Details
              <div>
                <h2 className="text-2xl font-bold text-black mb-6">Schritt 2: Finanzkennzahlen</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      EBITDA (EUR)
                    </label>
                    <input
                      type="number"
                      value={formData.ebitda || ''}
                      onChange={(e) => handleInputChange('ebitda', parseInt(e.target.value))}
                      placeholder="z.B. 800000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                    <p className="mt-1 text-sm text-gray-500">Gewinn vor Zinsen, Steuern und Abschreibungen</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Wachstumsrate letzte 3 Jahre (%)
                    </label>
                    <input
                      type="number"
                      value={formData.growthRate || ''}
                      onChange={(e) => handleInputChange('growthRate', parseInt(e.target.value))}
                      placeholder="z.B. 15"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bilanzsumme / Assets (EUR)
                    </label>
                    <input
                      type="number"
                      value={formData.assets || ''}
                      onChange={(e) => handleInputChange('assets', parseInt(e.target.value))}
                      placeholder="z.B. 2000000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            ) : currentStep === 3 ? (
              // Step 3: Market Position
              <div>
                <h2 className="text-2xl font-bold text-black mb-6">Schritt 3: Marktposition</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Wie bewerten Sie Ihre Marktposition?
                    </label>
                    <div className="space-y-3">
                      <label className="flex items-start cursor-pointer p-4 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <input
                          type="radio"
                          name="marketPosition"
                          value="leader"
                          checked={formData.marketPosition === 'leader'}
                          onChange={(e) => handleInputChange('marketPosition', e.target.value)}
                          className="mt-1 mr-3"
                        />
                        <div>
                          <div className="font-semibold text-black">Marktführer</div>
                          <div className="text-sm text-gray-600">Top 3 in Ihrer Region/Nische, starke Marke</div>
                        </div>
                      </label>
                      <label className="flex items-start cursor-pointer p-4 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <input
                          type="radio"
                          name="marketPosition"
                          value="strong"
                          checked={formData.marketPosition === 'strong'}
                          onChange={(e) => handleInputChange('marketPosition', e.target.value)}
                          className="mt-1 mr-3"
                        />
                        <div>
                          <div className="font-semibold text-black">Starke Position</div>
                          <div className="text-sm text-gray-600">Etabliert, gute Kundenbasis, stabiles Wachstum</div>
                        </div>
                      </label>
                      <label className="flex items-start cursor-pointer p-4 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <input
                          type="radio"
                          name="marketPosition"
                          value="average"
                          checked={formData.marketPosition === 'average'}
                          onChange={(e) => handleInputChange('marketPosition', e.target.value)}
                          className="mt-1 mr-3"
                        />
                        <div>
                          <div className="font-semibold text-black">Durchschnittlich</div>
                          <div className="text-sm text-gray-600">Solide Position, Wettbewerbsdruck vorhanden</div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            ) : currentStep === 4 ? (
              // Step 4: Contact Information
              <div>
                <h2 className="text-2xl font-bold text-black mb-6">Schritt 4: Ihre Kontaktdaten (Optional)</h2>
                <p className="text-gray-600 mb-6">
                  Erhalten Sie eine detaillierte Bewertung als PDF per E-Mail. 
                  Ihre Daten werden vertraulich behandelt.
                </p>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formData.name || ''}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Max Mustermann"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      value={formData.email || ''}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="max@musterfirma.de"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={formData.phone || ''}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+49 641 123456"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      value={formData.company || ''}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Musterfirma GmbH"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            ) : currentStep === 5 && result ? (
              // Results
              <div>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-black mb-2">Ihre Unternehmensbewertung</h2>
                  <p className="text-gray-600">Basierend auf aktuellen Marktdaten</p>
                </div>

                {/* Value Range */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 mb-6">
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-600 mb-2">Geschätzter Unternehmenswert</p>
                    <div className="flex items-center justify-center space-x-4">
                      <div>
                        <p className="text-xs text-gray-500">Minimum</p>
                        <p className="text-xl font-bold text-gray-700">{formatCurrency(result.lowRange)}</p>
                      </div>
                      <div className="text-4xl text-gray-400">–</div>
                      <div className="bg-black text-white rounded-lg px-4 py-2">
                        <p className="text-xs opacity-80">Wahrscheinlich</p>
                        <p className="text-3xl font-bold">{formatCurrency(result.midRange)}</p>
                      </div>
                      <div className="text-4xl text-gray-400">–</div>
                      <div>
                        <p className="text-xs text-gray-500">Maximum</p>
                        <p className="text-xl font-bold text-gray-700">{formatCurrency(result.highRange)}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Valuation Methods Breakdown */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-black mb-4">Bewertungsmethoden im Detail</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">EBITDA-Multiple Methode</span>
                      <span className="font-semibold text-black">{formatCurrency(result.methods.ebitdaMultiple)}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Umsatz-Multiple Methode</span>
                      <span className="font-semibold text-black">{formatCurrency(result.methods.revenueMultiple)}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Substanzwert Methode</span>
                      <span className="font-semibold text-black">{formatCurrency(result.methods.assetBased)}</span>
                    </div>
                  </div>
                </div>

                {/* Confidence Score */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Bewertungsgenauigkeit</span>
                    <span className="text-sm font-semibold text-black">{result.confidence}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-black h-2 rounded-full" style={{ width: `${result.confidence}%` }} />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Basierend auf Vollständigkeit der Daten
                  </p>
                </div>

                {/* CTA Section */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Nächste Schritte</h3>
                  <div className="space-y-3">
                    <a href="/kontakt" className="block w-full text-center px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
                      Kostenlose Expertenberatung vereinbaren
                    </a>
                    <button
                      onClick={() => window.print()}
                      className="block w-full text-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Bewertung als PDF speichern
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    Diese Bewertung ist eine erste Indikation. Für eine präzise Bewertung empfehlen wir eine professionelle Due Diligence.
                  </p>
                </div>
              </div>
            ) : null}

            {/* Navigation Buttons */}
            {currentStep <= totalSteps && (
              <div className="flex justify-between mt-8">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className={`px-6 py-3 font-medium rounded-lg transition-colors ${
                    currentStep === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Zurück
                </button>
                <button
                  onClick={handleNext}
                  className="px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                >
                  {currentStep === totalSteps ? 'Bewertung berechnen' : 'Weiter'}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">500+</div>
              <p className="text-gray-600">Erfolgreiche Transaktionen</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">25+</div>
              <p className="text-gray-600">Jahre Erfahrung</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">100%</div>
              <p className="text-gray-600">Diskrete Abwicklung</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-12">Häufige Fragen zur Unternehmensbewertung</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-black mb-2">Wie genau ist diese Online-Bewertung?</h3>
              <p className="text-gray-600">
                Unsere Online-Bewertung bietet eine erste fundierte Einschätzung basierend auf Branchenmultiplikatoren und über 500 realen Transaktionen. 
                Für eine exakte Bewertung ist jedoch eine detaillierte Due Diligence erforderlich.
              </p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-black mb-2">Bleiben meine Daten vertraulich?</h3>
              <p className="text-gray-600">
                Absolut. Alle eingegebenen Daten werden verschlüsselt übertragen und streng vertraulich behandelt. 
                Wir geben keine Informationen an Dritte weiter.
              </p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-black mb-2">Was ist der EBITDA?</h3>
              <p className="text-gray-600">
                EBITDA steht für &ldquo;Earnings Before Interest, Taxes, Depreciation and Amortization&rdquo; - 
                auf Deutsch: Gewinn vor Zinsen, Steuern und Abschreibungen. Es ist eine wichtige Kennzahl zur Unternehmensbewertung.
              </p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-black mb-2">Kostet die Bewertung etwas?</h3>
              <p className="text-gray-600">
                Nein, unsere Online-Bewertung ist komplett kostenlos und unverbindlich. 
                Auch die anschließende Erstberatung ist für Sie kostenfrei.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}