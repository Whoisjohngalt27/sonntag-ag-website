/**
 * Component: StatsSection
 * Feature: Homepage statistics display
 * Extracted from: app/page.tsx (lines 211-236)
 */

import { StatsSectionProps } from './StatsSection.types'

const defaultStats = [
  { label: 'Jahre Erfahrung', value: '25+' },
  { label: 'Erfolgreiche Verkäufe', value: '500+' },
  { label: 'Zufriedene Kunden', value: '98%' },
  { label: 'Durchschnittliche Wertsteigerung', value: '35%' },
]

export function StatsSection(props: StatsSectionProps = {}) {
  const {
    title = 'Vertrauen durch Erfahrung',
    subtitle = 'Unsere Bilanz',
    description = 'Zahlen, die für sich sprechen',
    stats = defaultStats,
    className = ''
  } = props

  return (
    <section className={`bg-white py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            {subtitle && (
              <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                {subtitle}
              </h2>
            )}
            <p className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
              {title}
            </p>
            {description && (
              <p className="mt-4 text-lg text-gray-600 font-light">
                {description}
              </p>
            )}
          </div>
          <dl className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col group">
                <dt className="text-sm font-medium uppercase tracking-wide text-gray-500 transition-colors duration-200 group-hover:text-gray-700">
                  {stat.label}
                </dt>
                <dd className="mt-3 text-4xl font-light leading-none tracking-tight text-gray-900 sm:text-5xl transition-all duration-300 group-hover:scale-105 transform tabular-nums">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}