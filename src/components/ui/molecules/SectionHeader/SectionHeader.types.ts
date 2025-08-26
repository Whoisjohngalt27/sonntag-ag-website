import { ReactNode } from 'react'

export interface SectionHeaderProps {
  /**
   * Small uppercase label above the title
   */
  label?: string
  
  /**
   * Main section title
   */
  title: string | ReactNode
  
  /**
   * Optional subtitle/description
   */
  subtitle?: string | ReactNode
  
  /**
   * Text alignment
   * @default 'center'
   */
  align?: 'left' | 'center' | 'right'
  
  /**
   * Size variant
   * @default 'default'
   */
  size?: 'sm' | 'default' | 'lg'
  
  /**
   * Color scheme
   * @default 'dark'
   */
  theme?: 'dark' | 'light'
  
  /**
   * Additional CSS classes
   */
  className?: string
  
  /**
   * Additional HTML attributes
   */
  id?: string
  style?: React.CSSProperties
}