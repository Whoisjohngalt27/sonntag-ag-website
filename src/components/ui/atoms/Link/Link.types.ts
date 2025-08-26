import { AnchorHTMLAttributes, ReactNode } from 'react'
import { LinkProps as NextLinkProps } from 'next/link'

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>, Omit<NextLinkProps, 'href' | 'as' | 'passHref' | 'legacyBehavior'> {
  /**
   * Link destination
   */
  href: string
  
  /**
   * Visual variant
   * @default 'default'
   */
  variant?: 'default' | 'underline' | 'arrow' | 'button'
  
  /**
   * Text color
   * @default 'gray-700'
   */
  color?: 'gray-700' | 'gray-600' | 'gray-500' | 'white' | 'current'
  
  /**
   * Link content
   */
  children: ReactNode
  
  /**
   * Icon to display after text (typically ChevronRightIcon)
   */
  rightIcon?: ReactNode
  
  /**
   * External link (opens in new tab)
   * @default false
   */
  external?: boolean
  
  /**
   * Additional CSS classes
   */
  className?: string
}