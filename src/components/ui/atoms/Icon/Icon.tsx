import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { IconProps } from './Icon.types'

/**
 * Icon Component
 * 
 * @description Wrapper for consistent icon usage throughout the application.
 * Primarily designed for Heroicons but works with any React component.
 * 
 * @example
 * ```tsx
 * import { ChevronRightIcon } from '@heroicons/react/24/outline'
 * 
 * <Icon icon={ChevronRightIcon} size="md" color="gray-600" />
 * ```
 */
export const Icon = forwardRef<HTMLDivElement, IconProps>(
  (
    {
      icon: IconComponent,
      size = 'md',
      color = 'gray-400',
      className,
      ariaLabel,
      ...props
    },
    ref
  ) => {
    const sizes = {
      xs: 'size-3',
      sm: 'size-4',
      md: 'size-5',
      lg: 'size-6',
      xl: 'size-8'
    }
    
    const colors = {
      'gray-400': 'text-gray-400',
      'gray-500': 'text-gray-500',
      'gray-600': 'text-gray-600',
      'gray-700': 'text-gray-700',
      'gray-900': 'text-gray-900',
      'white': 'text-white',
      'current': 'text-current'
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center transition-colors duration-200',
          className
        )}
        {...props}
      >
        <IconComponent
          className={cn(
            sizes[size],
            colors[color]
          )}
          aria-hidden={!ariaLabel}
          aria-label={ariaLabel}
        />
      </div>
    )
  }
)

Icon.displayName = 'Icon'