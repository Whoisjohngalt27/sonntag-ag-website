/**
 * Component: TransactionsGrid
 * Feature: Grid layout for displaying multiple transaction cards
 */

import { TransactionCard } from './TransactionCard'
import { TransactionsGridProps } from './TransactionsGrid.types'

export function TransactionsGrid({ transactions, className = '', columns = 3 }: TransactionsGridProps) {
  const getGridCols = (cols: number) => {
    const gridCols: Record<number, string> = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
      5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
      6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'
    }
    
    return gridCols[cols] || gridCols[3]
  }

  return (
    <div className={`grid ${getGridCols(columns)} gap-6 lg:gap-8 ${className}`}>
      {transactions.map((transaction, index) => (
        <TransactionCard
          key={transaction.id || index}
          transaction={transaction}
          className="h-full"
        />
      ))}
    </div>
  )
}
