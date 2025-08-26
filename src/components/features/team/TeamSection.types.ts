/**
 * Type definitions for TeamSection component
 */

export interface TeamSectionProps {
  title?: string
  subtitle?: string
  members?: TeamMember[]
  showSocial?: boolean
  showCTA?: boolean
  ctaText?: string
  ctaHref?: string
  className?: string
}

export interface TeamMember {
  name: string
  role: string
  imageUrl: string
  bio: string
  xUrl?: string
  linkedinUrl?: string
}