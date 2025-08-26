/**
 * Component: TransactionsSection
 * Feature: Recent transactions display
 * Extracted from: app/page.tsx (lines 585-631)
 */

import Link from 'next/link'
import { ChevronRightIcon, ClockIcon } from '@heroicons/react/24/outline'
import { TransactionsSectionProps } from './TransactionsSection.types'

const defaultTransactions = [
  {
    date: 'Juni 2025',
    company: 'Wieland & Schultz Kaisersauern GmbH',
    buyer: 'Encevo Deutschland GmbH',
    timeframe: '6 Wochen'
  },
  {
    date: 'März 2025',
    company: 'Becker GmbH CAD-CAM-CAST',
    buyer: 'Windschiegl Maschinenbau GmbH',
    timeframe: '8 Wochen'
  },
  {
    date: 'Januar 2025',
    company: 'Mittelständisches Handelsunternehmen',
    buyer: 'Strategischer Investor',
    timeframe: '10 Wochen'
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
    className = ''
  } = props

  return (
    <section className={`py-16 sm:py-20 lg:py-24 bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          {subtitle && (
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              {subtitle}
            </h2>
          )}
          <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 leading-[1.1]">
            {title}
          </p>
          {description && (
            <p className="text-lg text-gray-600 font-light">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {transactions.map((transaction, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-gray-500">{transaction.date}</span>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Erfolgreich
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {transaction.company}
              </h3>
              <p className="text-sm text-gray-600 mb-3 font-light">
                Käufer: {transaction.buyer}
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <ClockIcon className="h-4 w-4 mr-1" />
                <span>Abschluss in {transaction.timeframe}</span>
              </div>
            </div>
          ))}
        </div>

        {showViewAll && (
          <div className="mt-12 text-center">
            <Link
              href={viewAllHref}
              className="inline-flex items-center text-base font-medium text-black hover:text-gray-700 transition-all duration-200 hover:translate-x-2"
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