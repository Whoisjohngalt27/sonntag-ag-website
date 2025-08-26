'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { trackContactFormSubmission } from '@/lib/analytics'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  message: string
}

export default function KontaktPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'Kontaktseite',
          urgency: 'normal'
        })
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        
        // Track conversion
        trackContactFormSubmission({
          source: 'Kontaktseite',
          urgency: 'normal',
          company: formData.company
        })
        
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setErrorMessage('Netzwerkfehler. Bitte überprüfen Sie Ihre Internetverbindung.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
              Kontakt
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Bereit für den nächsten Schritt? Lassen Sie uns gemeinsam Ihren Weg 
              zur erfolgreichen Unternehmensnachfolge planen.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-6">
                Kostenlose Erstberatung
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Vorname *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Nachname *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                  ></textarea>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="rounded-md bg-green-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-green-800">
                          Vielen Dank für Ihre Nachricht! Wir werden uns schnellstmöglich bei Ihnen melden.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="rounded-md bg-red-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <ExclamationCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-red-800">
                          {errorMessage}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Wird gesendet...
                      </>
                    ) : (
                      'Nachricht senden'
                    )}
                  </button>
                </div>
                
                <p className="text-xs text-gray-500 text-center">
                  * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
                </p>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-black mb-6">
                  Sprechen Sie mit uns
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Wir sind für Sie da und freuen uns darauf, von Ihnen zu hören. 
                  Vereinbaren Sie ein unverbindliches Gespräch.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      SONNTAG AG<br />
                      M&A Beratung<br />
                      Hauptstraße 123<br />
                      35390 Gießen<br />
                      Deutschland
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">Telefon</h3>
                    <p className="text-gray-600">
                      +49 (0) 641 123 45 67<br />
                      Mo-Fr: 9:00 - 18:00 Uhr
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">E-Mail</h3>
                    <p className="text-gray-600">
                      info@sonntag-ag.de<br />
                      beratung@sonntag-ag.de
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-black mb-3">
                  Warum eine Erstberatung?
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Kostenlose und unverbindliche Analyse</li>
                  <li>• Einschätzung Ihrer aktuellen Situation</li>
                  <li>• Erste Handlungsempfehlungen</li>
                  <li>• Kennenlernen unseres Teams</li>
                  <li>• Klarheit über nächste Schritte</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black sm:text-4xl">
              Unser Büro in Gießen
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Strategisch gelegen im Herzen Hessens
            </p>
          </div>
          
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-gray-600">Karte wird geladen...</p>
              <p className="text-sm text-gray-500 mt-2">
                Hauptstraße 123, 35390 Gießen
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              <strong>Anfahrt:</strong> Zentrale Lage in Gießen, gut erreichbar mit dem Auto und öffentlichen Verkehrsmitteln.<br />
              <strong>Parken:</strong> Kostenlose Parkplätze direkt vor dem Büro verfügbar.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-16">
            Häufig gestellte Fragen
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-3">
                Wie läuft die Erstberatung ab?
              </h3>
              <p className="text-gray-600">
                Die Erstberatung dauert etwa 60-90 Minuten. Wir analysieren Ihre Situation, 
                besprechen mögliche Wege und geben Ihnen erste Handlungsempfehlungen.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-3">
                Ist die Beratung wirklich kostenlos?
              </h3>
              <p className="text-gray-600">
                Ja, die Erstberatung ist vollständig kostenlos und unverbindlich. 
                Erst wenn Sie sich für eine Zusammenarbeit entscheiden, fallen Gebühren an.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-3">
                Wie schnell bekomme ich eine Antwort?
              </h3>
              <p className="text-gray-600">
                Wir antworten in der Regel innerhalb von 24 Stunden auf Ihre Anfrage. 
                Für dringende Anliegen können Sie uns auch direkt anrufen.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-3">
                Kann ich auch online beraten werden?
              </h3>
              <p className="text-gray-600">
                Ja, wir bieten auch Online-Beratungen per Video-Call an. 
                Dies ist besonders praktisch für erste Gespräche oder bei weiterer Entfernung.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
