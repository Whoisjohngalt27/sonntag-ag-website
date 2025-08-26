import { HTMLAttributes } from 'react'

export interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Stat label (e.g., "Jahre Erfahrung")
   */
  label: string
  
  /**
   * Stat value (e.g., "25+")
   */
  value: string | number
  
  /**
   * Size variant
   * @default 'default'
   */
  size?: 'sm' | 'default' | 'lg'
  
  /**
   * Text alignment
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right'
  
  /**
   * Enable hover animation
   * @default true
   */
  animated?: boolean
  
  /**
   * Additional CSS classes
   */
  className?: string
}