/**
 * Component: TransactionsSection
 * Feature: Recent transactions display with enhanced cards
 * Extracted from: app/page.tsx (lines 585-631)
 */

import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { TransactionsSectionProps } from './TransactionsSection.types'
import { TransactionsGrid } from './TransactionsGrid'

const defaultTransactions = [
  {
    id: 1,
    date: 'Juni 2025',
    company: 'Wieland & Schultz Kaisersauern GmbH',
    buyer: 'Encevo Deutschland GmbH',
    timeframe: '6 Wochen',
    sector: 'manufacturing',
    status: 'successful' as const,
    value: '€2.5M',
    location: 'Kaisersauern, Deutschland'
  },
  {
    id: 2,
    date: 'März 2025',
    company: 'Becker GmbH CAD-CAM-CAST',
    buyer: 'Windschiegl Maschinenbau GmbH',
    timeframe: '8 Wochen',
    sector: 'technology',
    status: 'successful' as const,
    value: '€1.8M',
    location: 'München, Deutschland'
  },
  {
    id: 3,
    date: 'Januar 2025',
    company: 'Mittelständisches Handelsunternehmen',
    buyer: 'Strategischer Investor',
    timeframe: '10 Wochen',
    sector: 'retail',
    status: 'completed' as const,
    value: '€3.2M',
    location: 'Hessen, Deutschland'
  }
]

export function TransactionsSection(props: TransactionsSectionProps = {}) {
  const {
    title = 'Unsere jüngsten Transaktionen',
    subtitle = 'Aktuelle Erfolge',
    description = 'Diskret, schnell und erfolgreich – so arbeiten wir.',
    transactions = defaultTransactions,
    showViewAll = true,
    viewAllText = 'Alle Transaktionen ansehen',
    viewAllHref = '/transaktionen',
    className = '',
    columns = 3
  } = props

  return (
    <section className={`py-16 sm:py-20 lg:py-24 bg-gray-900 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          {subtitle && (
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              {subtitle}
            </h2>
          )}
          <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-[1.1]">
            {title}
          </p>
          {description && (
            <p className="text-lg text-gray-300 font-light">
              {description}
            </p>
          )}
        </div>

        <TransactionsGrid 
          transactions={transactions} 
          columns={columns}
          className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none"
        />

        {showViewAll && (
          <div className="mt-12 text-center">
            <Link
              href={viewAllHref}
              className="inline-flex items-center text-base font-medium text-white hover:text-gray-300 transition-all duration-200 hover:translate-x-2"
            >
              {viewAllText}
              <ChevronRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}