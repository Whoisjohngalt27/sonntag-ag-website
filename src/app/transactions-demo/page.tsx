/**
 * Demo page for transaction components
 */

import { TransactionsSection, TransactionCard, TransactionsGrid } from '@/components/features/transactions'
import { Transaction } from '@/components/features/transactions/TransactionCard.types'

const demoTransactions: Transaction[] = [
  {
    id: 1,
    date: 'Juni 2025',
    company: 'Wieland & Schultz Kaisersauern GmbH',
    buyer: 'Encevo Deutschland GmbH',
    timeframe: '6 Wochen',
    sector: 'manufacturing',
    status: 'successful',
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
    status: 'successful',
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
    status: 'completed',
    value: '€3.2M',
    location: 'Hessen, Deutschland'
  },
  {
    id: 4,
    date: 'Dezember 2024',
    company: 'Medizintechnik Solutions AG',
    buyer: 'Healthcare Partners GmbH',
    timeframe: '12 Wochen',
    sector: 'healthcare',
    status: 'successful',
    value: '€4.1M',
    location: 'Berlin, Deutschland'
  },
  {
    id: 5,
    date: 'November 2024',
    company: 'Bauprojekt Management KG',
    buyer: 'Construction Group International',
    timeframe: '9 Wochen',
    sector: 'construction',
    status: 'completed',
    value: '€1.9M',
    location: 'Hamburg, Deutschland'
  },
  {
    id: 6,
    date: 'Oktober 2024',
    company: 'Automotive Parts GmbH',
    buyer: 'Global Auto Solutions',
    timeframe: '7 Wochen',
    sector: 'automotive',
    status: 'successful',
    value: '€3.7M',
    location: 'Stuttgart, Deutschland'
  }
]

export default function TransactionsDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Transaction Components Demo
          </h1>
          <p className="text-xl text-gray-300">
            Showcasing enhanced transaction cards with sector-specific backgrounds
          </p>
        </div>
      </div>

      {/* Single Transaction Card Demo */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Single Transaction Card
          </h2>
          <div className="max-w-md mx-auto">
            <TransactionCard transaction={demoTransactions[0]} />
          </div>
        </div>
      </section>

      {/* 2-Column Grid Demo */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            2-Column Grid Layout
          </h2>
          <TransactionsGrid 
            transactions={demoTransactions.slice(0, 4)} 
            columns={2}
          />
        </div>
      </section>

      {/* 3-Column Grid Demo */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            3-Column Grid Layout
          </h2>
          <TransactionsGrid 
            transactions={demoTransactions.slice(0, 3)} 
            columns={3}
          />
        </div>
      </section>

      {/* 4-Column Grid Demo */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            4-Column Grid Layout
          </h2>
          <TransactionsGrid 
            transactions={demoTransactions.slice(0, 4)} 
            columns={4}
          />
        </div>
      </section>

      {/* Full TransactionsSection Demo */}
      <section className="py-16 bg-white">
        <TransactionsSection 
          title="Alle Transaktionen"
          subtitle="Vollständige Übersicht"
          description="Hier sehen Sie alle unsere erfolgreichen Transaktionen der letzten Monate."
          transactions={demoTransactions}
          columns={3}
        />
      </section>

      {/* Sector Examples */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Verschiedene Branchen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoTransactions.slice(0, 6).map((transaction) => (
              <div key={transaction.id} className="h-80">
                <TransactionCard transaction={transaction} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
