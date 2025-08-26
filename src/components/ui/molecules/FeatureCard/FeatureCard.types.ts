import { ComponentType, HTMLAttributes } from 'react'

export interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Feature name/title
   */
  name: string
  
  /**
   * Feature description
   */
  description: string
  
  /**
   * Icon component from Heroicons
   */
  icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
  
  /**
   * Enable hover animation
   * @default true
   */
  animated?: boolean
  
  /**
   * Layout variant
   * @default 'inline'
   */
  variant?: 'inline' | 'stacked' | 'card'
  
  /**
   * Additional CSS classes
   */
  className?: string
}