/**
 * Component: BieterverfahrenSection
 * Feature: Anonymous bidding process showcase
 * Extracted from: app/page.tsx (lines 56-108)
 */

import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { BieterverfahrenSectionProps } from './BieterverfahrenSection.types'

export function BieterverfahrenSection(props: BieterverfahrenSectionProps = {}) {
  const {
    title = 'Das anonyme Bieterverfahren',
    subtitle = 'Unser Erfolgsgeheimnis',
    description = 'Unser revolutionäres MARKTWERT-Verfahren wurde speziell für den deutschen Mittelstand entwickelt und garantiert Ihnen den bestmöglichen Verkaufspreis bei vollständiger Diskretion.',
    features = [],
    ctaText = 'Mehr über das Verfahren erfahren',
    ctaHref = '/leistungen',
    videoSrc = '/Line-Chart-User-Acquisition.mp4',
    showVideo = true,
    className = ''
  } = props

  return (
    <section className={`overflow-hidden bg-white py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">
          <div className="lg:pr-8">
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
                        {feature.icon && (
                          <feature.icon 
                            aria-hidden={true} 
                            className="absolute top-1 left-1 size-5 text-gray-400 transition-colors duration-200 group-hover:text-gray-600" 
                          />
                        )}
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline text-gray-600">{feature.description}</dd>
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
          
          {showVideo && videoSrc && (
            <div className="flex items-center justify-center">
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
        </div>
      </div>
    </section>
  )
}