import { forwardRef } from 'react'
import NextLink from 'next/link'
import { cn } from '@/lib/utils'
import { LinkProps } from './Link.types'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

/**
 * Link Component
 * 
 * @description Next.js optimized link component with consistent styling.
 * Automatically detects external links and handles them appropriately.
 * 
 * @example
 * ```tsx
 * <Link href="/leistungen" variant="arrow">
 *   Mehr erfahren
 * </Link>
 * ```
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      href,
      variant = 'default',
      color = 'gray-700',
      children,
      rightIcon,
      external = false,
      className,
      ...props
    },
    ref
  ) => {
    const isExternal = external || href.startsWith('http') || href.startsWith('//')
    
    const baseStyles = 'inline-flex items-center transition-all duration-200'
    
    const variants = {
      default: 'hover:opacity-80',
      underline: 'underline underline-offset-4 hover:underline-offset-2',
      arrow: 'group hover:translate-x-1',
      button: 'px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-black hover:bg-gray-800 shadow-sm hover:shadow-md transform hover:-translate-y-0.5'
    }
    
    const colors = {
      'gray-700': 'text-gray-700',
      'gray-600': 'text-gray-600',
      'gray-500': 'text-gray-500',
      'white': 'text-white',
      'current': 'text-current'
    }
    
    const linkClassName = cn(
      baseStyles,
      variants[variant],
      variant !== 'button' && colors[color],
      className
    )
    
    const content = (
      <>
        {children}
        {rightIcon || (variant === 'arrow' && (
          <ChevronRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        ))}
      </>
    )
    
    if (isExternal) {
      return (
        <a
          ref={ref}
          href={href}
          className={linkClassName}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {content}
        </a>
      )
    }
    
    return (
      <NextLink
        ref={ref}
        href={href}
        className={linkClassName}
        {...props}
      >
        {content}
      </NextLink>
    )
  }
)

Link.displayName = 'Link'