import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button visual variant
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'ghost'
  
  /**
   * Button size
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'
  
  /**
   * Button content
   */
  children: ReactNode
  
  /**
   * Loading state
   * @default false
   */
  loading?: boolean
  
  /**
   * Full width button
   * @default false
   */
  fullWidth?: boolean
  
  /**
   * Additional CSS classes
   */
  className?: string
  
  /**
   * Icon to display after text
   */
  rightIcon?: ReactNode
  
  /**
   * Icon to display before text
   */
  leftIcon?: ReactNode
}