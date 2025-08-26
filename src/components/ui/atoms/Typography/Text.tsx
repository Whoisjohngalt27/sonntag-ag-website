import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { TextProps } from './Typography.types'

/**
 * Text Component
 * 
 * @description Typography component for body text, extracted from homepage patterns.
 * Supports various sizes, weights, and line heights.
 * 
 * @example
 * ```tsx
 * <Text size="lg" color="gray-600" leading="relaxed">
 *   Unser revolutionäres MARKTWERT-Verfahren wurde speziell entwickelt
 * </Text>
 * ```
 */
export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      size = 'base',
      align = 'left',
      weight = 'normal',
      color = 'gray-600',
      leading = 'normal',
      children,
      className,
      ...props
    },
    ref
  ) => {
    const sizes = {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl'
    }
    
    const weights = {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold'
    }
    
    const colors = {
      'gray-900': 'text-gray-900',
      'gray-700': 'text-gray-700',
      'gray-600': 'text-gray-600',
      'gray-500': 'text-gray-500',
      'gray-400': 'text-gray-400',
      'white': 'text-white'
    }
    
    const alignments = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify'
    }
    
    const leadings = {
      tight: 'leading-tight',
      normal: 'leading-normal',
      relaxed: 'leading-[1.7]'
    }
    
    return (
      <p
        ref={ref}
        className={cn(
          sizes[size],
          weights[weight],
          colors[color],
          alignments[align],
          leadings[leading],
          className
        )}
        {...props}
      >
        {children}
      </p>
    )
  }
)

Text.displayName = 'Text'