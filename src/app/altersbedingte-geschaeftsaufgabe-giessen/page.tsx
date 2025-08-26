import type { Metadata } from 'next'
import { HeartIcon, CalendarIcon } from '@heroicons/react/24/outline'
import { EmergencyPageTemplate } from '@/components/features/emergency'

export const metadata: Metadata = {
  title: 'Altersbedingte Geschäftsaufgabe | SONNTAG AG Gießen',
  description: 'Professionelle Begleitung bei altersbedingter Geschäftsaufgabe in Gießen. SONNTAG AG sichert Ihr Lebenswerk und maximiert den Verkaufserlös für Ihren Ruhestand.',
  keywords: [
    'Altersbedingte Geschäftsaufgabe',
    'Ruhestand Unternehmensverkauf',
    'Altersvorsorge Firmenverkauf',
    'Betriebsaufgabe Alter',
    'Seniorunternehmer Nachfolge',
    'Lebenswerk sichern',
    'Rente durch Unternehmensverkauf',
    'Nachfolge Gießen'
  ]
}

export default function AltersbedingteGeschaeftsaufgabePage() {
  const challenges = [
    { icon: '⏳', title: 'Lebensphase Ruhestand', description: 'Der wohlverdiente Ruhestand naht' },
    { icon: '💎', title: 'Lebenswerk bewahren', description: 'Jahrzehntelange Aufbauarbeit würdigen' },
    { icon: '👥', title: 'Mitarbeiter schützen', description: 'Arbeitsplätze langfristig sichern' },
    { icon: '💰', title: 'Altersvorsorge sichern', description: 'Maximaler Erlös für den Ruhestand' },
    { icon: '🤝', title: 'Würdige Übergabe', description: 'An vertrauenswürdigen Nachfolger' },
    { icon: '🏖️', title: 'Neue Freiheit', description: 'Zeit für Familie und Hobbys' }
  ]

  const process = [
    { step: '1', title: 'Ruhestandsplanung', time: '1-2 Wochen', description: 'Zeitrahmen und persönliche Ziele definieren', phase: 'PLANUNG' },
    { step: '2', title: 'Wertoptimierung', time: '4-8 Wochen', description: 'Unternehmenswert für Ruhestand maximieren', phase: 'OPTIMIERUNG' },
    { step: '3', title: 'Nachfolgersuche', time: '4-6 Wochen', description: 'Würdigen Nachfolger identifizieren', phase: 'SUCHE' },
    { step: '4', title: 'Übergangsgestaltung', time: '6-8 Wochen', description: 'Schrittweise und geordnete Übergabe', phase: 'ÜBERGANG' },
    { step: '5', title: 'Ruhestandsbeginn', time: '3-6 Monate gesamt', description: 'Sorgenfrei in den neuen Lebensabschnitt', phase: 'ABSCHLUSS' }
  ]

  return (
    <EmergencyPageTemplate
      banner={{
        icon: CalendarIcon,
        label: 'RUHESTAND-BERATUNG',
        phone: '+49 (0) 641 201 037 00',
        description: 'Würdevolle Übergabe',
        bgColor: 'bg-indigo-600'
      }}
      hero={{
        badge: {
          icon: HeartIcon,
          text: 'Lebenswerk-Übergabe',
          color: 'bg-indigo-50'
        },
        title: (
          <>
            Altersbedingte Geschäftsaufgabe in{' '}
            <span className="text-indigo-600">Gießen</span>
          </>
        ),
        subtitle: 'Nach Jahrzehnten erfolgreicher Unternehmensführung ist es Zeit für den wohlverdienten Ruhestand. Wir begleiten Sie bei der würdevollen Übergabe Ihres Lebenswerks und sichern Ihnen den maximalen Erlös für einen sorgenfreien Ruhestand.',
        phone: '+49 (0) 641 201 037 00',
        ctaText: 'Vertrauliches Erstgespräch',
        ctaLink: '/kontakt'
      }}
      challenges={{
        title: 'Der richtige Zeitpunkt für den Ruhestand',
        subtitle: 'Ihr Lebenswerk in die richtigen Hände geben',
        challenges
      }}
      process={{
        title: 'Ihr Weg in den wohlverdienten Ruhestand',
        subtitle: 'Strukturiert und würdevoll zum Abschluss',
        steps: process
      }}
      cta={{
        title: 'Genießen Sie Ihren Ruhestand sorgenfrei',
        subtitle: 'Wir kümmern uns um die perfekte Übergabe Ihres Lebenswerks.',
        phone: '+49 (0) 641 201 037 00',
        email: 'ruhestand@sonnt-ag.com',
        features: [
          'Würdevolle Übergabe',
          'Maximaler Verkaufserlös',
          'Schutz der Mitarbeiter',
          'Bewahrung Ihrer Werte'
        ]
      }}
    />
  )
}