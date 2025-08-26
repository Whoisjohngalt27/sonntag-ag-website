/**
 * Type definitions for TransactionsGrid component
 */

import { Transaction } from './TransactionCard.types'

export interface TransactionsGridProps {
  transactions: Transaction[]
  className?: string
  columns?: 1 | 2 | 3 | 4 | 5 | 6
}
