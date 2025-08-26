import type { Metadata } from 'next'
import { HeroSection } from '@/components/features/hero'
import { StatsSection } from '@/components/features/stats'
import { BieterverfahrenSection } from '@/components/features/bieterverfahren'
import { WertmaximierungSection } from '@/components/features/wertmaximierung'
import { ServicesSection } from '@/components/features/services'
import { TransactionsSection } from '@/components/features/transactions'
import { TeamSection } from '@/components/features/team'
import { BlogSection } from '@/components/features/blog'
import { FullscreenStatement } from '@/components/features/hero'

// Import icons for features
import { EyeSlashIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/20/solid'

export const metadata: Metadata = {
  title: 'SONNTAG AG - Unternehmensnachfolge & M&A Beratung Gießen',
  description: 'Führende M&A Beratung in Gießen. Wir sichern Lebenswerke durch anonyme Bieterverfahren und Wertoptimierung. 25+ Jahre Erfahrung in Unternehmensnachfolge.',
  keywords: [
    'M&A Beratung Gießen',
    'Unternehmensnachfolge',
    'Unternehmensverkauf',
    'Wertoptimierung',
    'Anonymes Bieterverfahren',
    'Mittelstand',
    'Hessen'
  ]
}

export default function HomePage() {
  const bieterverfahrenFeatures = [
    {
      name: '100% Anonymität',
      description: 'Ihre Identität bleibt bis zum Vertragsabschluss vollständig geschützt. Kunden, Mitarbeiter und Wettbewerber erfahren nichts vom Verkaufsprozess.',
      icon: EyeSlashIcon,
    },
    {
      name: 'Mehrere Bieter gleichzeitig',
      description: 'Wettbewerb zwischen qualifizierten Käufern maximiert Ihren Verkaufspreis. Durchschnittlich 3-5 ernsthafte Interessenten pro Verfahren.',
      icon: UserGroupIcon,
    },
    {
      name: 'Echter Marktwert',
      description: 'Der tatsächliche Wert wird durch konkurrierende Gebote ermittelt – keine theoretischen Bewertungen, sondern reale Kaufangebote.',
      icon: ChartBarIcon,
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Anonymes Bieterverfahren Section */}
      <BieterverfahrenSection features={bieterverfahrenFeatures} />

      {/* Wertmaximierung Section */}
      <WertmaximierungSection />

      {/* Fullscreen Statement 1 */}
      <FullscreenStatement
        headline="Anonymität ist kein Feature. Es ist Ihr Schutzschild."
        subtext="Verkaufen Sie erst, wenn alles perfekt ist."
        videoSrc="/animated-bg-blue-gold.mp4"
        darkOverlay={false}
        textColor="black"
      />

      {/* Services Section */}
      <ServicesSection />

      {/* Recent Transactions */}
      <TransactionsSection />

      {/* Fullscreen Statement 2: Human Connection */}
      <FullscreenStatement
        headline="Hinter jedem Verkauf steht eine persönliche Geschichte."
        subtext="Wir schreiben sie mit Ihnen zu Ende."
        videoSrc="/giessen-construction-aerial.mp4"
        darkOverlay={true}
        textColor="white"
      />

      {/* Team Section */}
      <TeamSection />

      {/* Blog Section */}
      <BlogSection />

    </main>
  )
}