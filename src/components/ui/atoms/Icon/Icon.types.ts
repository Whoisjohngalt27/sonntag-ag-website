import { ComponentType, HTMLAttributes } from 'react'

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Icon component from Heroicons or any React component
   */
  icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
  
  /**
   * Icon size
   * @default 'md'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  
  /**
   * Icon color
   * @default 'gray-400'
   */
  color?: 'gray-400' | 'gray-500' | 'gray-600' | 'gray-700' | 'gray-900' | 'white' | 'current'
  
  /**
   * Additional CSS classes
   */
  className?: string
  
  /**
   * Aria label for accessibility
   */
  ariaLabel?: string
}