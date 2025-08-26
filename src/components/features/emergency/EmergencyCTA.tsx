import Link from 'next/link'
import { PhoneIcon, ArrowRightIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export interface EmergencyCTAProps {
  title?: string
  subtitle?: string
  phone?: string
  email?: string
  features?: string[]
  className?: string
}

export function EmergencyCTA({ 
  title = 'Sofort Hilfe erhalten',
  subtitle = 'Warten Sie nicht länger. Jeder Tag zählt.',
  phone = '+49 (0) 641 201 037 00',
  email = 'notfall@sonnt-ag.com',
  features = [
    'Kostenlose Erstberatung',
    '100% diskrete Beratung',
    'Erfahrene M&A-Experten',
    'Schnelle Lösungen'
  ],
  className = ''
}: EmergencyCTAProps) {
  return (
    <section className={`py-20 bg-gradient-to-br from-red-600 to-red-700 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-xl text-red-100">
            {subtitle}
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-red-600 bg-white hover:bg-red-50 transition-colors shadow-lg"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Jetzt anrufen: {phone}
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-red-600 transition-colors"
            >
              Online-Anfrage
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-white">
                <ShieldCheckIcon className="h-5 w-5 mr-2 text-red-200" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-red-100">
              Oder per E-Mail: <a href={`mailto:${email}`} className="text-white font-semibold hover:underline">{email}</a>
            </p>
            <p className="mt-2 text-sm text-red-200">
              <ClockIcon className="h-4 w-4 inline mr-1" />
              Wir melden uns innerhalb von 24 Stunden
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}