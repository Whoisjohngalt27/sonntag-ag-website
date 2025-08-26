/**
 * Type definitions for TransactionsSection component
 */

export interface TransactionsSectionProps {
  title?: string
  subtitle?: string
  description?: string
  transactions?: Transaction[]
  showViewAll?: boolean
  viewAllText?: string
  viewAllHref?: string
  className?: string
}

export interface Transaction {
  date: string
  company: string
  buyer: string
  timeframe: string
  status?: 'successful' | 'pending' | 'completed'
}