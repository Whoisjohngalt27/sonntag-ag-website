/**
 * Component: HeroSection
 * Feature: Homepage Hero with ShaderAnimation background
 * Extracted from: app/page.tsx (lines 169-209)
 */

import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { ShaderAnimation } from '@/components/ui/shader-animation'
import { HeroSectionProps } from './HeroSection.types'

const defaultProps: HeroSectionProps = {
  title: 'Wir verkaufen keine Unternehmen.',
  subtitle: 'Wir sichern Lebenswerke.',
  description: 'Mit über 500 erfolgreichen Unternehmensverkäufen und unserem einzigartigen anonymen Bieterverfahren sind wir Ihr vertrauensvoller Partner für die Unternehmensnachfolge im deutschen Mittelstand.',
  primaryCTA: {
    text: 'Dringend verkaufen?',
    href: '/notverkauf-unternehmen-giessen',
    variant: 'primary'
  },
  secondaryCTA: {
    text: 'Kostenlose Erstberatung',
    href: '/kontakt',
    variant: 'outline'
  },
  showBackground: true
}

export function HeroSection(props: HeroSectionProps = {}) {
  const { 
    title = defaultProps.title,
    subtitle = defaultProps.subtitle,
    description = defaultProps.description,
    primaryCTA = defaultProps.primaryCTA,
    secondaryCTA = defaultProps.secondaryCTA,
    showBackground = defaultProps.showBackground,
    className = ''
  } = props

  return (
    <section className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* ShaderAnimation Background */}
      {showBackground && (
        <div className="absolute inset-0">
          <ShaderAnimation />
        </div>
      )}
      
      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.1] drop-shadow-lg">
              {title}
              {subtitle && (
                <span className="block text-white/95 mt-4 font-light">{subtitle}</span>
              )}
            </h1>
            {description && (
              <p className="mt-10 text-lg sm:text-xl text-white/85 max-w-3xl mx-auto leading-[1.7] font-light drop-shadow-md">
                {description}
              </p>
            )}
            
            {/* CTA Buttons */}
            {(primaryCTA || secondaryCTA) && (
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                {primaryCTA && (
                  <Link
                    href={primaryCTA.href}
                    className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-black bg-white hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
                  >
                    {primaryCTA.text}
                    <ChevronRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                )}
                {secondaryCTA && (
                  <Link
                    href={secondaryCTA.href}
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-base font-medium rounded-lg text-white bg-transparent hover:bg-white/10 transition-all duration-200 transform hover:-translate-y-0.5 backdrop-blur-sm"
                  >
                    {secondaryCTA.text}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}