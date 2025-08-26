import type { Metadata } from 'next'
import {
  ServiceHeroSection,
  MarktwertSection,
  MehrwertSection,
  MABeratungSection,
  ServiceComparisonSection,
  ExpertTeamSection,
  SuccessStoriesSection,
  EmergencyServicesSection,
  ServiceCTASection
} from '@/components/features/leistungen'

export const metadata: Metadata = {
  title: 'Unsere Leistungen | SONNTAG AG - M&A Beratung Gießen',
  description: 'Entdecken Sie unsere Kernleistungen: MARKTWERT (anonymes Bieterverfahren), MEHRWERT (Wertoptimierung) und strategische Nachfolgeberatung für den Mittelstand.',
  keywords: [
    'M&A Beratung Gießen',
    'Unternehmensnachfolge',
    'Anonymes Bieterverfahren',
    'Wertoptimierung',
    'Nachfolgeberatung',
    'Mittelstand'
  ]
}

export default function LeistungenPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServiceHeroSection />
      <MarktwertSection />
      <MehrwertSection />
      <MABeratungSection />
      <ServiceComparisonSection />
      <ExpertTeamSection />
      <SuccessStoriesSection />
      <EmergencyServicesSection />
      <ServiceCTASection />
    </main>
  )
}