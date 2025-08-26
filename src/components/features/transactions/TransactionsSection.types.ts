/**
 * Type definitions for TransactionsSection component
 */

import { Transaction } from './TransactionCard.types'

export interface TransactionsSectionProps {
  title?: string
  subtitle?: string
  description?: string
  transactions?: Transaction[]
  showViewAll?: boolean
  viewAllText?: string
  viewAllHref?: string
  className?: string
  columns?: 1 | 2 | 3 | 4 | 5 | 6
}