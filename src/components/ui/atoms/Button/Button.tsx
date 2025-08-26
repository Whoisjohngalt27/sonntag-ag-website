'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { ButtonProps } from './Button.types'

/**
 * Button Component
 * 
 * @description Primary action button extracted from homepage design patterns.
 * Uses black/white/gray color scheme with hover animations.
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="lg" rightIcon={<ChevronRightIcon />}>
 *   Get Started
 * </Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      fullWidth = false,
      children,
      className,
      disabled,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0'
    
    const variants = {
      primary: 'bg-black text-white hover:bg-gray-800 shadow-sm hover:shadow-md',
      secondary: 'bg-transparent text-black border-2 border-black hover:bg-black/5 backdrop-blur-sm',
      ghost: 'bg-transparent text-gray-700 hover:bg-gray-100'
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-base'
    }
    
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    )
  }
)

Button.displayName = 'Button'