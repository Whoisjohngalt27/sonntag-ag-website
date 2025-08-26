/**
 * Type definitions for HeroSection component
 */

export interface HeroSectionProps {
  title?: string
  subtitle?: string
  description?: string
  primaryCTA?: CTAButton
  secondaryCTA?: CTAButton
  showBackground?: boolean
  className?: string
}

export interface CTAButton {
  text: string
  href: string
  variant?: 'primary' | 'secondary' | 'outline'
  icon?: React.ComponentType<{ className?: string }>
}