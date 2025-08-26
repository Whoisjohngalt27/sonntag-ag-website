/**
 * Component: TeamSection
 * Feature: Homepage team display
 * Extracted from: app/page.tsx (lines 642-658)
 */

import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import TeamWithBioAdapted from '@/components/ui-blocks/adapted/team-with-bio-adapted'
import { TeamSectionProps } from './TeamSection.types'
import { leadershipTeam } from '@/lib/team-data'

const defaultProps: TeamSectionProps = {
  title: 'Doppelte Spitze für Ihren Erfolg',
  subtitle: 'Bei der Sonntag AG kombinieren wir 25 Jahre Erfahrung im Unternehmensverkauf mit 14 Jahren Expertise in der operativen Wertsteigerung.',
  members: leadershipTeam,
  showSocial: false,
  showCTA: true,
  ctaText: 'Gesamtes Team kennenlernen',
  ctaHref: '/team'
}

export function TeamSection(props: TeamSectionProps = {}) {
  const {
    title = defaultProps.title,
    subtitle = defaultProps.subtitle,
    members = defaultProps.members,
    showSocial = defaultProps.showSocial,
    showCTA = defaultProps.showCTA,
    ctaText = defaultProps.ctaText,
    ctaHref = defaultProps.ctaHref,
    className = ''
  } = props

  return (
    <section className={`bg-white ${className}`}>
      <TeamWithBioAdapted 
        title={title}
        subtitle={subtitle}
        members={members || []}
        showSocial={showSocial}
      />
      {showCTA && (
        <div className="pb-16 sm:pb-20 lg:pb-24">
          <div className="text-center">
            <Link
              href={ctaHref || '/team'}
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              {ctaText}
              <ChevronRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}