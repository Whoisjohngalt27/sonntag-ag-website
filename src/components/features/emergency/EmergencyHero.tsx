import Link from 'next/link'
import { PhoneIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export interface EmergencyHeroProps {
  badge?: {
    icon?: React.ElementType
    text: string
    color?: string
  }
  title: React.ReactNode
  subtitle: string
  phone?: string
  ctaText?: string
  ctaLink?: string
  className?: string
}

export function EmergencyHero({ 
  badge,
  title,
  subtitle,
  phone = '+49 (0) 641 201 037 00',
  ctaText = 'Kostenlose Erstberatung',
  ctaLink = '/kontakt',
  className = ''
}: EmergencyHeroProps) {
  const BadgeIcon = badge?.icon
  
  return (
    <section className={`relative bg-white py-24 sm:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {badge && BadgeIcon && (
            <div className={`inline-flex items-center justify-center p-2 ${badge.color || 'bg-red-50'} backdrop-blur rounded-xl mb-6`}>
              <BadgeIcon className="h-6 w-6 text-red-600 mr-2" />
              <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">
                {badge.text}
              </span>
            </div>
          )}
          
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {title}
          </h1>
          
          <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Notfall-Hotline: {phone}
            </a>
            <Link
              href={ctaLink}
              className="inline-flex items-center px-8 py-4 border-2 border-red-600 text-lg font-medium rounded-md text-red-600 bg-white hover:bg-red-50 transition-colors"
            >
              {ctaText}
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="font-semibold mr-2">✓</span>
              Kostenlose Erstberatung
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-2">✓</span>
              Diskrete Beratung
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-2">✓</span>
              Schnelle Hilfe
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}