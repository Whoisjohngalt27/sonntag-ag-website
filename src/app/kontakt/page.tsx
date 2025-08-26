import type { Metadata } from 'next'
import {
  ContactHeroSection,
  ContactSection,
  ContactMap,
  ContactFAQ
} from '@/components/features/contact'

export const metadata: Metadata = {
  title: 'Kontakt | SONNTAG AG - M&A Beratung Gießen',
  description: 'Vereinbaren Sie eine kostenlose Erstberatung. Wir sind für Sie da und helfen Ihnen bei Ihrer Unternehmensnachfolge.',
  keywords: [
    'Kontakt SONNTAG AG',
    'M&A Beratung Gießen',
    'Erstberatung',
    'Unternehmensnachfolge Kontakt'
  ]
}

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactHeroSection />
      <ContactSection />
      <ContactMap />
      <ContactFAQ />
    </main>
  )
}