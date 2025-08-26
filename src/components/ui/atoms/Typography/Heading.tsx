import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { HeadingProps } from './Typography.types'

/**
 * Heading Component
 * 
 * @description Typography component for headings, extracted from homepage patterns.
 * Uses scale typography system with consistent spacing and weights.
 * 
 * @example
 * ```tsx
 * <Heading as="h1" size="5xl" align="center">
 *   Wir verkaufen keine Unternehmen
 * </Heading>
 * ```
 */
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      as: Component = 'h2',
      size = 'default',
      align = 'left',
      weight = 'semibold',
      color = 'gray-900',
      children,
      className,
      ...props
    },
    ref
  ) => {
    const sizeMap = {
      'default': {
        h1: 'text-5xl',
        h2: 'text-4xl',
        h3: 'text-3xl',
        h4: 'text-2xl',
        h5: 'text-xl',
        h6: 'text-lg'
      }[Component] || 'text-3xl'
    }
    
    const sizes = {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl sm:text-4xl',
      '4xl': 'text-3xl sm:text-4xl lg:text-5xl',
      '5xl': 'text-4xl sm:text-5xl lg:text-6xl'
    }
    
    const weights = {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold'
    }
    
    const colors = {
      'gray-900': 'text-gray-900',
      'gray-700': 'text-gray-700',
      'gray-600': 'text-gray-600',
      'gray-500': 'text-gray-500',
      'white': 'text-white'
    }
    
    const alignments = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right'
    }
    
    return (
      <Component
        ref={ref as any}
        className={cn(
          'tracking-tight leading-[1.1]',
          size === 'default' ? sizeMap : sizes[size as keyof typeof sizes],
          weights[weight],
          colors[color],
          alignments[align],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Heading.displayName = 'Heading'