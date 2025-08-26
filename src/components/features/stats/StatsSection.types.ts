/**
 * Type definitions for StatsSection component
 */

export interface StatsSectionProps {
  title?: string
  subtitle?: string
  description?: string
  stats?: StatItem[]
  className?: string
}

export interface StatItem {
  label: string
  value: string
  suffix?: string
  prefix?: string
}