import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { StatCardProps } from './StatCard.types'

/**
 * StatCard Component
 * 
 * @description Display statistic with label and value, extracted from homepage stats section.
 * Features hover animations and tabular number formatting.
 * 
 * @example
 * ```tsx
 * <StatCard label="Jahre Erfahrung" value="25+" />
 * ```
 */
export const StatCard = forwardRef<HTMLDivElement, StatCardProps>(
  (
    {
      label,
      value,
      size = 'default',
      align = 'left',
      animated = true,
      className,
      ...props
    },
    ref
  ) => {
    const sizes = {
      sm: {
        label: 'text-xs',
        value: 'text-2xl sm:text-3xl'
      },
      default: {
        label: 'text-sm',
        value: 'text-4xl sm:text-5xl'
      },
      lg: {
        label: 'text-base',
        value: 'text-5xl sm:text-6xl'
      }
    }
    
    const alignments = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right'
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col group',
          alignments[align],
          className
        )}
        {...props}
      >
        <dt className={cn(
          'font-medium uppercase tracking-wide text-gray-500 transition-colors duration-200',
          animated && 'group-hover:text-gray-700',
          sizes[size].label
        )}>
          {label}
        </dt>
        <dd className={cn(
          'mt-3 font-light leading-none tracking-tight text-gray-900 tabular-nums transition-all duration-300',
          animated && 'group-hover:scale-105 transform',
          sizes[size].value
        )}>
          {value}
        </dd>
      </div>
    )
  }
)

StatCard.displayName = 'StatCard'