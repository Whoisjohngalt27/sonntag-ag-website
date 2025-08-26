import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { LabelProps } from './Typography.types'

/**
 * Label Component
 * 
 * @description Typography component for form labels and section labels.
 * Extracted from homepage uppercase tracking-wider pattern.
 * 
 * @example
 * ```tsx
 * <Label transform="uppercase" color="gray-500">
 *   Unsere Bilanz
 * </Label>
 * ```
 */
export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      size = 'sm',
      transform = 'none',
      color = 'gray-700',
      weight = 'medium',
      required = false,
      children,
      className,
      htmlFor,
      ...props
    },
    ref
  ) => {
    const sizes = {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base'
    }
    
    const transforms = {
      none: '',
      uppercase: 'uppercase tracking-wider',
      lowercase: 'lowercase',
      capitalize: 'capitalize'
    }
    
    const colors = {
      'gray-900': 'text-gray-900',
      'gray-700': 'text-gray-700',
      'gray-600': 'text-gray-600',
      'gray-500': 'text-gray-500'
    }
    
    const weights = {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold'
    }
    
    return (
      <label
        ref={ref}
        htmlFor={htmlFor}
        className={cn(
          'block',
          sizes[size],
          transforms[transform],
          colors[color],
          weights[weight],
          className
        )}
        {...props}
      >
        {children}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
    )
  }
)

Label.displayName = 'Label'