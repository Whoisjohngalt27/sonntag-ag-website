import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { Heading, Text, Label } from '../../atoms/Typography'
import { SectionHeaderProps } from './SectionHeader.types'

/**
 * SectionHeader Component
 * 
 * @description Section header pattern extracted from homepage sections.
 * Combines label, title, and subtitle in a consistent layout.
 * 
 * @example
 * ```tsx
 * <SectionHeader
 *   label="Unsere Bilanz"
 *   title="Vertrauen durch Erfahrung"
 *   subtitle="Zahlen, die für sich sprechen"
 * />
 * ```
 */
export const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  (
    {
      label,
      title,
      subtitle,
      align = 'center',
      size = 'default',
      theme = 'dark',
      className,
      id,
      style
    },
    ref
  ) => {
    const alignments = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right'
    }
    
    const sizes = {
      sm: {
        title: '3xl',
        subtitle: 'base'
      },
      default: {
        title: '4xl',
        subtitle: 'lg'
      },
      lg: {
        title: '5xl',
        subtitle: 'xl'
      }
    }
    
    const isDark = theme === 'dark'
    
    return (
      <div
        ref={ref}
        id={id}
        style={style}
        className={cn(
          alignments[align],
          className
        )}
      >
        {label && (
          <Label
            size="xs"
            transform="uppercase"
            color={isDark ? 'gray-500' : 'gray-500'}
            weight="semibold"
            className={cn("mb-3", !isDark && "text-white")}
          >
            {label}
          </Label>
        )}
        
        <Heading
          as="h2"
          size={sizes[size].title as any}
          color={isDark ? 'gray-900' : 'white'}
          align={align}
        >
          {title}
        </Heading>
        
        {subtitle && (
          <Text
            size={sizes[size].subtitle as any}
            color={isDark ? 'gray-600' : 'white'}
            weight="light"
            align={align}
            className="mt-4"
          >
            {subtitle}
          </Text>
        )}
      </div>
    )
  }
)

SectionHeader.displayName = 'SectionHeader'