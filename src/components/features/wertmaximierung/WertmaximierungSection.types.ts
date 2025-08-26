/**
 * Type definitions for WertmaximierungSection component
 */

import { ReactNode } from 'react'

export interface WertmaximierungSectionProps {
  title?: string
  subtitle?: string
  description?: string
  features?: WertmaximierungFeature[]
  ctaText?: string
  ctaHref?: string
  videoSrc?: string
  showVideo?: boolean
  videoPosition?: 'left' | 'right'
  className?: string
}

export interface WertmaximierungFeature {
  name: string
  description: string
  icon?: ReactNode
}