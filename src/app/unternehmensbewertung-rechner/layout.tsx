import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Unternehmensbewertung Rechner | SONNTAG AG - Kostenlose Firmenbewertung',
  description: 'Ermitteln Sie kostenlos den Wert Ihres Unternehmens mit unserem professionellen Bewertungsrechner. Basierend auf 500+ M&A Transaktionen im deutschen Mittelstand.',
  keywords: [
    'Unternehmensbewertung Rechner',
    'Firmenwert berechnen',
    'Unternehmenswert ermitteln',
    'Kostenlose Firmenbewertung',
    'EBITDA Multiple Rechner',
    'M&A Bewertung',
    'Mittelstand Bewertung',
    'Unternehmensbewertung online',
    'Firmenwert Rechner kostenlos',
    'Business Valuation Calculator'
  ],
  openGraph: {
    title: 'Kostenloser Unternehmensbewertung Rechner | SONNTAG AG',
    description: 'Berechnen Sie den Marktwert Ihres Unternehmens in nur 4 Schritten. Professionelle Bewertung basierend auf aktuellen Marktdaten.',
    type: 'website',
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}