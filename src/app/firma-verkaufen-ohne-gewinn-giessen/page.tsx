import type { Metadata } from 'next'
import { ChartBarIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { EmergencyPageTemplate } from '@/components/features/emergency'

export const metadata: Metadata = {
  title: 'Firma verkaufen ohne Gewinn | SONNTAG AG Gießen',
  description: 'Unternehmen ohne Gewinn verkaufen? SONNTAG AG zeigt Wege zur erfolgreichen Veräußerung durch Wertsteigerung und strategische Positionierung in Gießen.',
  keywords: [
    'Firma verkaufen ohne Gewinn',
    'Unternehmen ohne Profit verkaufen',
    'Verlustunternehmen verkaufen',
    'Sanierungsfall verkaufen',
    'Asset Deal Gießen',
    'Turnaround Verkauf',
    'Restrukturierung vor Verkauf',
    'Notverkauf vermeiden'
  ]
}

export default function FirmaVerkaufenOhneGewinnPage() {
  const challenges = [
    { icon: '📉', title: 'Aktuelle Verluste', description: 'Negative Zahlen schrecken Käufer ab' },
    { icon: '🏭', title: 'Versteckte Werte', description: 'Assets und Know-how werden unterschätzt' },
    { icon: '🎯', title: 'Strategische Potenziale', description: 'Synergien für den richtigen Käufer' },
    { icon: '💡', title: 'Turnaround möglich', description: 'Mit richtiger Führung profitabel' },
    { icon: '🔧', title: 'Restrukturierung nötig', description: 'Operative Verbesserungen erforderlich' },
    { icon: '⏰', title: 'Zeitdruck', description: 'Liquidität wird knapp' }
  ]

  const process = [
    { step: '1', title: 'Wertanalyse', time: '1 Woche', description: 'Assets, Know-how und strategische Werte identifizieren', phase: 'ANALYSE' },
    { step: '2', title: 'Strategische Positionierung', time: '2 Wochen', description: 'Stärken herausarbeiten und Story entwickeln', phase: 'STRATEGIE' },
    { step: '3', title: 'Käufer-Targeting', time: '2-3 Wochen', description: 'Strategische Käufer mit Synergien identifizieren', phase: 'TARGETING' },
    { step: '4', title: 'Value Selling', time: '3-4 Wochen', description: 'Potenziale statt Probleme präsentieren', phase: 'VERKAUF' },
    { step: '5', title: 'Deal-Strukturierung', time: '4-6 Wochen', description: 'Asset Deal oder alternative Strukturen', phase: 'ABSCHLUSS' }
  ]

  return (
    <EmergencyPageTemplate
      banner={{
        icon: ChartBarIcon,
        label: 'STRATEGISCHER VERKAUF',
        phone: '+49 (0) 641 201 037 00',
        description: 'Wert trotz Verlusten',
        bgColor: 'bg-orange-600'
      }}
      hero={{
        badge: {
          icon: ExclamationTriangleIcon,
          text: 'Herausfordernde Situation',
          color: 'bg-orange-50'
        },
        title: (
          <>
            Firma verkaufen ohne Gewinn in{' '}
            <span className="text-orange-600">Gießen</span>
          </>
        ),
        subtitle: 'Auch Unternehmen ohne aktuelle Gewinne haben Wert. Mit der richtigen Strategie identifizieren wir versteckte Potenziale und finden strategische Käufer, die den wahren Wert Ihres Unternehmens erkennen.',
        phone: '+49 (0) 641 201 037 00',
        ctaText: 'Kostenlose Wertanalyse',
        ctaLink: '/kontakt'
      }}
      challenges={{
        title: 'Verkauf trotz schwieriger Zahlen',
        subtitle: 'Herausforderungen als Chancen nutzen',
        challenges
      }}
      process={{
        title: 'Strategischer Verkaufsprozess',
        subtitle: 'Von der Analyse bis zum erfolgreichen Deal',
        steps: process
      }}
      cta={{
        title: 'Ihr Unternehmen hat mehr Wert als Sie denken',
        subtitle: 'Lassen Sie uns gemeinsam die versteckten Potenziale heben.',
        phone: '+49 (0) 641 201 037 00',
        email: 'strategie@sonnt-ag.com',
        features: [
          'Kostenlose Wertanalyse',
          'Strategische Käufersuche',
          'Alternative Deal-Strukturen',
          'Maximaler Erlös trotz Verlusten'
        ]
      }}
    />
  )
}