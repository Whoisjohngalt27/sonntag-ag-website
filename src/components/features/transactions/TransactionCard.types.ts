/**
 * Type definitions for TransactionCard component
 */

export interface TransactionCardProps {
  transaction: Transaction
  className?: string
}

export interface Transaction {
  id?: string | number
  date: string
  company: string
  buyer: string
  timeframe: string
  sector: string
  status?: 'successful' | 'pending' | 'completed'
  value?: string
  description?: string
  location?: string
  industry?: string
  dealSize?: string
}
