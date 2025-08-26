/**
 * Component: WertmaximierungSection
 * Feature: Value maximization showcase
 * Extracted from: app/page.tsx (lines 110-180)
 */

import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { WertmaximierungSectionProps } from './WertmaximierungSection.types'

const defaultFeatures = [
  {
    name: 'Profitabilitätssteigerung',
    description: 'Operative Exzellenz und Kostensenkung erhöhen Ihre EBITDA-Marge nachhaltig.',
    icon: (
      <svg className="absolute top-1 left-1 size-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    name: 'Digitalisierung & Prozesse',
    description: 'Moderne Strukturen und digitale Prozesse machen Ihr Unternehmen zukunftsfähig.',
    icon: (
      <svg className="absolute top-1 left-1 size-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    name: '20-40% Wertsteigerung',
    description: 'Durchschnittliche Steigerung des Unternehmenswertes durch systematische Optimierung.',
    icon: (
      <svg className="absolute top-1 left-1 size-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
]

export function WertmaximierungSection(props: WertmaximierungSectionProps = {}) {
  const {
    title = 'Mehr Wert. Mehr Erlös.',
    subtitle = 'Wertmaximierung',
    description = 'Mit unserem MEHRWERT-Ansatz steigern wir den Unternehmenswert systematisch vor dem Verkauf. 14 Jahre Erfahrung in operativer Optimierung zahlen sich für Sie aus.',
    features = defaultFeatures,
    ctaText = 'MEHRWERT entdecken',
    ctaHref = '/leistungen',
    videoSrc = '/Hexagon-Rotate-Loader.mp4',
    showVideo = true,
    videoPosition = 'left',
    className = ''
  } = props

  const isVideoLeft = videoPosition === 'left'

  return (
    <section className={`overflow-hidden bg-white py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Video Column */}
          {showVideo && videoSrc && (
            <div className={`flex items-center justify-center ${isVideoLeft ? 'order-2 lg:order-1' : 'order-2'}`}>
              <div className="relative w-full max-w-lg">
                <video
                  autoPlay
                  muted
                  playsInline
                  loop
                  className="w-full h-auto object-contain rounded-lg"
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}
          
          {/* Content Column */}
          <div className={`${isVideoLeft ? 'lg:pl-8 order-1 lg:order-2' : 'lg:pr-8 order-1'}`}>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              {subtitle && (
                <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  {subtitle}
                </h2>
              )}
              <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
                {title}
              </p>
              {description && (
                <p className="mt-6 text-lg text-gray-600 leading-[1.7] font-light">
                  {description}
                </p>
              )}
              
              {features.length > 0 && (
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9 transition-all duration-200 hover:translate-x-2">
                      <dt className="inline font-medium text-gray-900">
                        {feature.icon}
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              )}
              
              {ctaText && (
                <div className="mt-10">
                  <Link
                    href={ctaHref}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-black hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                  >
                    {ctaText}
                    <ChevronRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}