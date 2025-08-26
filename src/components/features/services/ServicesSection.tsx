/**
 * Component: ServicesSection
 * Feature: Homepage services grid with MARKTWERT, MEHRWERT, etc.
 * Extracted from: app/page.tsx (lines 395-583)
 */

import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { EyeSlashIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/20/solid'
import { AnonymousBiddingAnimation } from '@/components/ui/atoms/animations'
import { ShaderLinesAnimation } from '@/components/ui/atoms/animations'
import { ServicesSectionProps } from './ServicesSection.types'

export function ServicesSection(props: ServicesSectionProps = {}) {
  const {
    title = 'Alles für Ihre erfolgreiche Unternehmensnachfolge',
    subtitle = 'Unsere Expertise',
    className = ''
  } = props

  return (
    <section className={`py-16 sm:py-20 lg:py-24 bg-black ${className}`}>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Background Effect */}
        <div className="absolute inset-0 -z-10">
          <ShaderLinesAnimation />
        </div>

        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            {subtitle}
          </h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.1]">
            {title}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 lg:grid-cols-4 lg:grid-rows-2">
          
          {/* MARKTWERT - Large left card spanning 2 rows */}
          <div className="relative lg:col-span-2 lg:row-span-2">
            <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-md" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-white/20 transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 hover:bg-white/15">
              <div className="px-6 pt-6 pb-3 sm:px-8 sm:pt-8 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                  Anonymes Bieterverfahren
                </p>
                <p className="mt-2 max-w-lg text-sm text-gray-300 max-lg:text-center leading-relaxed">
                  Maximaler Verkaufspreis durch echten Wettbewerb. 100% diskret, mehrere Bieter gleichzeitig.
                </p>
              </div>
              <div className="relative flex flex-col w-full grow px-6 pb-6 sm:px-8 sm:pb-8">
                {/* Anonymous Bidding Animation */}
                <div className="mt-2">
                  <AnonymousBiddingAnimation />
                </div>
                
                {/* Key Features List */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <EyeSlashIcon className="h-4 w-4 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">100% Anonymität</p>
                      <p className="text-xs text-gray-400 mt-0.5 font-light">
                        Ihre Identität bleibt bis zum Abschluss geschützt
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <UserGroupIcon className="h-4 w-4 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Echter Wettbewerb</p>
                      <p className="text-xs text-gray-400 mt-0.5 font-light">
                        3-5 qualifizierte Käufer bieten gleichzeitig
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <ChartBarIcon className="h-4 w-4 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Maximaler Erlös</p>
                      <p className="text-xs text-gray-400 mt-0.5 font-light">
                        Durchschnittlich 35% höhere Verkaufspreise
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="mt-6">
                  <Link
                    href="/leistungen"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-black hover:bg-gray-800 transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    MARKTWERT entdecken
                    <ChevronRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* MEHRWERT - Top right card */}
          <div className="relative lg:col-span-1">
            <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-md" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-white/20 transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 hover:bg-white/15">
              <div className="px-6 pt-6 sm:px-8 sm:pt-8">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                  Wertsteigerung
                </p>
                <p className="mt-2 max-w-lg text-sm text-gray-300 max-lg:text-center leading-relaxed">
                  Steigern Sie Ihren Unternehmenswert vor dem Verkauf um 20-40%.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-6 py-6 sm:px-8">
                <div className="text-center">
                  <p className="text-5xl font-light text-white tabular-nums">+35%</p>
                  <p className="mt-2 text-sm text-gray-300 font-light">
                    Durchschnittliche Wertsteigerung
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Digitalisierung - Top right second card */}
          <div className="relative lg:col-span-1">
            <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-md" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-white/20 transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 hover:bg-white/15">
              <div className="px-6 pt-6 sm:px-8 sm:pt-8">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                  Digitalisierung
                </p>
                <p className="mt-2 max-w-lg text-sm text-gray-300 max-lg:text-center leading-relaxed">
                  Digitale Transformation für höhere Bewertungen.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-6 py-6 sm:px-8">
                <div className="flex space-x-8">
                  <div className="text-center">
                    <p className="text-2xl font-light text-white tabular-nums">2x</p>
                    <p className="text-xs text-gray-300 font-light">Effizienzsteigerung</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-light text-white tabular-nums">50%</p>
                    <p className="text-xs text-gray-300 font-light">Kostenreduktion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* M&A Beratung - Bottom left card */}
          <div className="relative lg:col-span-1">
            <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-md" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-white/20 transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 hover:bg-white/15">
              <div className="px-6 pt-6 sm:px-8 sm:pt-8">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                  M&A Beratung
                </p>
                <p className="mt-2 max-w-lg text-sm text-gray-300 max-lg:text-center leading-relaxed">
                  Professionelle Begleitung von der Strategie bis zum Abschluss.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-6 py-6 sm:px-8">
                <div className="text-center">
                  <p className="text-3xl font-light text-white tabular-nums">500+</p>
                  <p className="mt-2 text-sm text-gray-300 font-light">Erfolgreiche Deals</p>
                  <p className="text-xs text-gray-400 mt-1 font-light">25+ Jahre Erfahrung</p>
                </div>
              </div>
              <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                <Link
                  href="/leistungen"
                  className="inline-flex items-center justify-center w-full px-4 py-2 border border-white/20 text-sm font-medium rounded-lg text-white bg-white/10 hover:bg-white/20 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  Mehr erfahren
                  <ChevronRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Unternehmensbewertung - Bottom right card */}
          <div className="relative lg:col-span-1">
            <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-md" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-white/20 transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 hover:bg-white/15">
              <div className="px-6 pt-6 sm:px-8 sm:pt-8">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                  Unternehmensbewertung
                </p>
                <p className="mt-2 max-w-lg text-sm text-gray-300 max-lg:text-center leading-relaxed">
                  Professionelle Bewertung nach internationalen Standards.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-6 py-6 sm:px-8">
                <div className="text-center">
                  <p className="text-3xl font-light text-white tabular-nums">100%</p>
                  <p className="mt-2 text-sm text-gray-300 font-light">Transparenz</p>
                  <p className="text-xs text-gray-400 mt-1 font-light">IFRS & IDW konform</p>
                </div>
              </div>
              <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                <Link
                  href="/leistungen"
                  className="inline-flex items-center justify-center w-full px-4 py-2 border border-white/20 text-sm font-medium rounded-lg text-white bg-white/10 hover:bg-white/20 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  Bewertung anfordern
                  <ChevronRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}