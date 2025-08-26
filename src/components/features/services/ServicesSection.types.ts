/**
 * Type definitions for ServicesSection component
 */

export interface ServicesSectionProps {
  title?: string
  subtitle?: string
  services?: ServiceCard[]
  className?: string
}

export interface ServiceCard {
  name: string
  description: string
  features?: string[]
  stats?: ServiceStat[]
  link?: string
  icon?: React.ComponentType<{ className?: string }>
  highlight?: boolean
  gridSpan?: 1 | 2
  rowSpan?: 1 | 2
}

export interface ServiceStat {
  value: string
  label: string
  sublabel?: string
}