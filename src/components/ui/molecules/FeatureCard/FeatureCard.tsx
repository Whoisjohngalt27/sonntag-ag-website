import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { Icon } from '../../atoms/Icon'
import { Heading, Text } from '../../atoms/Typography'
import { FeatureCardProps } from './FeatureCard.types'

/**
 * FeatureCard Component
 * 
 * @description Feature presentation card extracted from homepage bieterverfahren section.
 * Combines icon, title, and description with hover animations.
 * 
 * @example
 * ```tsx
 * <FeatureCard
 *   name="100% Anonymität"
 *   description="Ihre Identität bleibt vollständig geschützt"
 *   icon={EyeSlashIcon}
 * />
 * ```
 */
export const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  (
    {
      name,
      description,
      icon,
      animated = true,
      variant = 'inline',
      className,
      ...props
    },
    ref
  ) => {
    if (variant === 'inline') {
      return (
        <div
          ref={ref}
          className={cn(
            'relative pl-9 transition-all duration-200',
            animated && 'hover:translate-x-2',
            className
          )}
          {...props}
        >
          <dt className="inline font-medium text-gray-900">
            <Icon 
              icon={icon} 
              className="absolute top-1 left-1" 
              size="md" 
              color={animated ? 'gray-400' : 'gray-600'}
            />
            {name}
          </dt>{' '}
          <dd className="inline text-gray-600">{description}</dd>
        </div>
      )
    }
    
    if (variant === 'stacked') {
      return (
        <div
          ref={ref}
          className={cn(
            'group transition-all duration-200',
            animated && 'hover:translate-y-1',
            className
          )}
          {...props}
        >
          <div className="flex items-center mb-3">
            <Icon 
              icon={icon} 
              size="lg" 
              color="gray-400"
              className={animated ? 'group-hover:text-gray-600 transition-colors' : ''}
            />
          </div>
          <Heading as="h3" size="lg" className="mb-2">
            {name}
          </Heading>
          <Text color="gray-600">
            {description}
          </Text>
        </div>
      )
    }
    
    // Card variant
    return (
      <div
        ref={ref}
        className={cn(
          'group p-6 bg-white rounded-lg border border-gray-200 transition-all duration-200',
          animated && 'hover:shadow-lg hover:-translate-y-1',
          className
        )}
        {...props}
      >
        <div className="flex items-center mb-4">
          <Icon 
            icon={icon} 
            size="lg" 
            color="gray-400"
            className={animated ? 'group-hover:text-gray-600 transition-colors' : ''}
          />
        </div>
        <Heading as="h3" size="lg" className="mb-2">
          {name}
        </Heading>
        <Text color="gray-600">
          {description}
        </Text>
      </div>
    )
  }
)

FeatureCard.displayName = 'FeatureCard'