import type { Metadata } from 'next'
import { MagnifyingGlassIcon, HeartIcon } from '@heroicons/react/24/outline'
import { EmergencyPageTemplate } from '@/components/features/emergency'

export const metadata: Metadata = {
  title: 'Dringend Nachfolger gesucht Gießen | Unternehmensnachfolge schnell finden | SONNTAG AG',
  description: 'Dringend Nachfolger für Ihr Unternehmen in Gießen gesucht? SONNTAG AG findet schnell den idealen Nachfolger für Ihr Lebenswerk. Diskret, kompetent, erfolgreich. Jetzt Nachfolgesuche starten!',
  keywords: [
    'dringend nachfolger gesucht gießen',
    'unternehmensnachfolge gießen', 
    'nachfolger finden gießen',
    'geschäftsnachfolge mittelhessen',
    'lebenswerk übergeben',
    'betriebsnachfolge gießen',
    'nachfolgesuche experte'
  ]
}

export default function DringendNachfolgerGesuchtPage() {
  const challenges = [
    { icon: '👨‍👩‍👧‍👦', title: 'Kein Nachfolger in der Familie', description: 'Kinder sind nicht interessiert oder geeignet' },
    { icon: '⏰', title: 'Zeitdruck durch Alter', description: 'Gesundheit oder Renteneintritt drängen' },
    { icon: '💎', title: 'Lebenswerk bewahren', description: 'Tradition und Werte sollen erhalten bleiben' },
    { icon: '👥', title: 'Mitarbeiter absichern', description: 'Arbeitsplätze langfristig sichern' },
    { icon: '🏆', title: 'Würdiger Nachfolger', description: 'Jemand, der das Unternehmen versteht' },
    { icon: '🔄', title: 'Reibungslose Übergabe', description: 'Kontinuität für Kunden gewährleisten' }
  ]

  const process = [
    { step: '1', title: 'Nachfolge-Analyse', time: '1 Tag', description: 'Unternehmensprofil und idealer Nachfolger-Typ', phase: 'VORBEREITUNG' },
    { step: '2', title: 'Kandidaten-Screening', time: '1 Woche', description: 'Systematische Suche im gesamten DACH-Raum', phase: 'SUCHE' },
    { step: '3', title: 'Diskrete Ansprache', time: '2 Wochen', description: 'Persönliche Kontaktaufnahme mit Top-Kandidaten', phase: 'KONTAKT' },
    { step: '4', title: 'Kennenlernen & Match', time: '3-4 Wochen', description: 'Intensive Gespräche und Unternehmensbesichtigungen', phase: 'MATCHING' },
    { step: '5', title: 'Übergabe-Planung', time: '6-8 Wochen', description: 'Detaillierte Übergabe- und Einarbeitungsplanung', phase: 'ÜBERGABE' }
  ]

  return (
    <EmergencyPageTemplate
      banner={{
        icon: MagnifyingGlassIcon,
        label: 'NACHFOLGER-HOTLINE',
        phone: '+49 (0) 641 201 037 00',
        description: 'Diskrete Nachfolgersuche',
        bgColor: 'bg-blue-600'
      }}
      hero={{
        badge: {
          icon: HeartIcon,
          text: 'Lebenswerk-Nachfolge',
          color: 'bg-blue-50'
        },
        title: (
          <>
            Dringend Nachfolger gesucht in{' '}
            <span className="text-blue-600">Gießen</span>
          </>
        ),
        subtitle: 'Sie suchen einen würdigen Nachfolger für Ihr Lebenswerk? Mit unserem bewährten NACHFOLGE-MARKTWERT-Verfahren finden wir den idealen Kandidaten, der Ihre Tradition ehrt und Ihr Unternehmen erfolgreich weiterführt.',
        phone: '+49 (0) 641 201 037 00',
        ctaText: 'Nachfolgesuche starten',
        ctaLink: '/kontakt'
      }}
      challenges={{
        title: 'Ihre Herausforderungen bei der Nachfolge',
        subtitle: 'Wir verstehen Ihre Situation und haben die Lösung',
        challenges
      }}
      process={{
        title: 'Unser bewährter Nachfolge-Prozess',
        subtitle: 'Strukturierte Suche und professionelle Übergabe für Ihren Seelenfrieden',
        steps: process
      }}
      cta={{
        title: 'Finden Sie jetzt Ihren Nachfolger',
        subtitle: 'Sichern Sie die Zukunft Ihres Lebenswerks. Wir helfen Ihnen dabei.',
        phone: '+49 (0) 641 201 037 00',
        email: 'nachfolge@sonnt-ag.com',
        features: [
          'Kostenlose Erstberatung',
          '100% diskrete Nachfolgersuche',
          '25+ Jahre Erfahrung',
          'Über 500 erfolgreiche Übergaben'
        ]
      }}
    />
  )
}