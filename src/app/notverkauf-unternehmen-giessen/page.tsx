import type { Metadata } from 'next'
import { ExclamationTriangleIcon, BoltIcon } from '@heroicons/react/24/outline'
import { EmergencyPageTemplate } from '@/components/features/emergency'

export const metadata: Metadata = {
  title: 'Notverkauf Unternehmen Gießen | Schneller Unternehmensverkauf | SONNTAG AG',
  description: 'Dringend Unternehmen verkaufen in Gießen? SONNTAG AG - Ihr Experte für schnellen Unternehmensverkauf in Mittelhessen. 25 Jahre Erfahrung, 4-8 Wochen bis zum Abschluss. Jetzt kostenlos beraten lassen!',
  keywords: [
    'notverkauf unternehmen gießen',
    'schneller unternehmensverkauf gießen', 
    'firma sofort verkaufen gießen',
    'dringend nachfolger gesucht gießen',
    'eiliger geschäftsverkauf mittelhessen',
    'unternehmen schnell verkaufen',
    'notverkauf mittelstand'
  ]
}

export default function NotverkaufPage() {
  const emergencyReasons = [
    { icon: '🏥', title: 'Gesundheitliche Gründe', description: 'Krankheit oder Unfall erfordern schnelles Handeln' },
    { icon: '👥', title: 'Fehlende Nachfolge', description: 'Keine geeigneten Nachfolger in Familie oder Unternehmen' },
    { icon: '💰', title: 'Finanzielle Engpässe', description: 'Liquiditätsprobleme oder Finanzierungsschwierigkeiten' },
    { icon: '📉', title: 'Marktveränderungen', description: 'Branchenumbruch oder neue Wettbewerber' },
    { icon: '⚖️', title: 'Gesellschafterkonflikt', description: 'Unüberbrückbare Differenzen zwischen Partnern' },
    { icon: '🎯', title: 'Strategische Neuausrichtung', description: 'Fokus auf andere Geschäftsbereiche' }
  ]

  const processSteps = [
    { step: '1', title: 'Sofortkontakt', time: 'Heute', description: 'Rufen Sie uns jetzt an oder nutzen Sie unser Kontaktformular', phase: 'START' },
    { step: '2', title: 'Analyse', time: '24h', description: 'Wir analysieren Ihre Situation und entwickeln eine Strategie', phase: 'ANALYSE' },
    { step: '3', title: 'Marktführung', time: '1 Woche', description: 'Anonyme Ansprache qualifizierter Kaufinteressenten', phase: 'MARKETING' },
    { step: '4', title: 'Verhandlung', time: '2-4 Wochen', description: 'Professionelle Verhandlungsführung mit mehreren Bietern', phase: 'VERHANDLUNG' },
    { step: '5', title: 'Abschluss', time: '4-8 Wochen', description: 'Erfolgreicher Verkauf mit optimalem Ergebnis', phase: 'ABSCHLUSS' }
  ]

  return (
    <EmergencyPageTemplate
      banner={{
        icon: ExclamationTriangleIcon,
        label: 'NOTFALL-HOTLINE',
        phone: '+49 (0) 641 201 037 00',
        description: '24h Rückruf-Garantie',
        bgColor: 'bg-black'
      }}
      hero={{
        badge: {
          icon: BoltIcon,
          text: 'Dringender Unternehmensverkauf',
          color: 'bg-black/5'
        },
        title: (
          <>
            Notverkauf Ihres Unternehmens in{' '}
            <span className="text-black">Gießen</span>
          </>
        ),
        subtitle: 'Wenn schnelles Handeln erforderlich ist: Wir verkaufen Ihr Unternehmen diskret und professionell innerhalb von 4-8 Wochen. Mit über 25 Jahren Erfahrung und einem bewährten Netzwerk qualifizierter Käufer sichern wir Ihnen den bestmöglichen Preis - auch unter Zeitdruck.',
        phone: '+49 (0) 641 201 037 00',
        ctaText: 'Kostenlose Erstberatung',
        ctaLink: '/kontakt'
      }}
      challenges={{
        title: 'Gründe für einen Notverkauf',
        subtitle: 'Wir verstehen Ihre Situation und handeln sofort',
        challenges: emergencyReasons
      }}
      process={{
        title: 'Ihr Weg zum schnellen Verkauf',
        subtitle: 'Bewährter Prozess für maximale Effizienz',
        steps: processSteps
      }}
      cta={{
        title: 'Jetzt handeln - Zeit ist entscheidend',
        subtitle: 'Jeder Tag zählt. Kontaktieren Sie uns noch heute für eine kostenlose Erstberatung.',
        phone: '+49 (0) 641 201 037 00',
        email: 'notfall@sonnt-ag.com',
        features: [
          '24h Rückruf-Garantie',
          '100% diskrete Abwicklung',
          '4-8 Wochen bis zum Abschluss',
          'Über 500 erfolgreiche Verkäufe'
        ]
      }}
    />
  )
}