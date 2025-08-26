import { EmergencyBanner, type EmergencyBannerProps } from './EmergencyBanner'
import { EmergencyHero, type EmergencyHeroProps } from './EmergencyHero'
import { EmergencyChallenges, type EmergencyChallengesProps } from './EmergencyChallenges'
import { EmergencyProcess, type EmergencyProcessProps } from './EmergencyProcess'
import { EmergencyCTA, type EmergencyCTAProps } from './EmergencyCTA'

export interface EmergencyPageTemplateProps {
  banner?: EmergencyBannerProps
  hero: EmergencyHeroProps
  challenges?: EmergencyChallengesProps
  process?: EmergencyProcessProps
  cta?: EmergencyCTAProps
  children?: React.ReactNode
}

export function EmergencyPageTemplate({
  banner,
  hero,
  challenges,
  process,
  cta,
  children
}: EmergencyPageTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      {banner && <EmergencyBanner {...banner} />}
      <EmergencyHero {...hero} />
      {challenges && <EmergencyChallenges {...challenges} />}
      {children}
      {process && <EmergencyProcess {...process} />}
      {cta && <EmergencyCTA {...cta} />}
    </div>
  )
}