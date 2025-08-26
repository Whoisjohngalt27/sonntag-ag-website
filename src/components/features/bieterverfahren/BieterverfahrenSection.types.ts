/**
 * Type definitions for BieterverfahrenSection component
 */

export interface BieterverfahrenSectionProps {
  title?: string
  subtitle?: string
  description?: string
  features?: BieterverfahrenFeature[]
  ctaText?: string
  ctaHref?: string
  videoSrc?: string
  showVideo?: boolean
  className?: string
}

export interface BieterverfahrenFeature {
  name: string
  description: string
  icon?: React.ComponentType<any>
}