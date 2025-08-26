import type { Metadata } from 'next'
import { UserGroupIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { EmergencyPageTemplate } from '@/components/features/emergency'

export const metadata: Metadata = {
  title: 'Unternehmensnachfolge ohne Nachfolger | SONNTAG AG Gießen',
  description: 'Professionelle Lösungen für Unternehmensnachfolge ohne familieninternen Nachfolger in Gießen. SONNTAG AG findet den optimalen Käufer für Ihr Lebenswerk.',
  keywords: [
    'Unternehmensnachfolge ohne Nachfolger',
    'Nachfolgeregelung Gießen',
    'Externer Nachfolger',
    'Management Buy-Out',
    'Management Buy-In',
    'Strategischer Käufer',
    'Familienunternehmen Nachfolge',
    'Mittelstand Nachfolge Hessen'
  ]
}

export default function UnternehmensnachfolgeOhneNachfolgerPage() {
  const challenges = [
    { icon: '👨‍👩‍👧', title: 'Keine Familiennachfolge', description: 'Kinder haben andere Karrierewege eingeschlagen' },
    { icon: '🎓', title: 'Fehlende Qualifikation', description: 'Niemand im Umfeld hat die nötige Expertise' },
    { icon: '🌍', title: 'Generationswechsel', description: 'Andere Lebenspläne der nächsten Generation' },
    { icon: '💼', title: 'Kein interner Kandidat', description: 'Mitarbeiter nicht für Übernahme geeignet' },
    { icon: '⚖️', title: 'Komplexe Struktur', description: 'Unternehmen erfordert spezielles Know-how' },
    { icon: '🎯', title: 'Zeitdruck', description: 'Nachfolge muss zeitnah geregelt werden' }
  ]

  const process = [
    { step: '1', title: 'Nachfolge-Analyse', time: '1 Woche', description: 'Anforderungsprofil und Nachfolger-Typ definieren', phase: 'ANALYSE' },
    { step: '2', title: 'Diskrete Suche', time: '2-3 Wochen', description: 'Anonyme Ansprache qualifizierter Kandidaten', phase: 'SUCHE' },
    { step: '3', title: 'Kandidaten-Prüfung', time: '2 Wochen', description: 'Qualifikation und Eignung bewerten', phase: 'PRÜFUNG' },
    { step: '4', title: 'Matching-Prozess', time: '3-4 Wochen', description: 'Persönliches Kennenlernen und Vertrauen aufbauen', phase: 'MATCHING' },
    { step: '5', title: 'Strukturierte Übergabe', time: '8-12 Wochen', description: 'Einarbeitung und Know-how-Transfer', phase: 'ÜBERGABE' }
  ]

  return (
    <EmergencyPageTemplate
      banner={{
        icon: UserGroupIcon,
        label: 'NACHFOLGE-BERATUNG',
        phone: '+49 (0) 641 201 037 00',
        description: 'Externe Nachfolgelösung',
        bgColor: 'bg-amber-600'
      }}
      hero={{
        badge: {
          icon: ExclamationTriangleIcon,
          text: 'Nachfolge-Lösung',
          color: 'bg-amber-50'
        },
        title: (
          <>
            Unternehmensnachfolge ohne Nachfolger in{' '}
            <span className="text-amber-600">Gießen</span>
          </>
        ),
        subtitle: 'Kein Familienmitglied will oder kann Ihr Unternehmen übernehmen? Mit unserer Expertise finden wir den optimalen externen Nachfolger, der Ihr Lebenswerk würdig fortsetzt und Ihre Werte bewahrt.',
        phone: '+49 (0) 641 201 037 00',
        ctaText: 'Nachfolger-Suche starten',
        ctaLink: '/kontakt'
      }}
      challenges={{
        title: 'Typische Nachfolge-Herausforderungen',
        subtitle: 'Wenn Familie und interne Lösung nicht möglich sind',
        challenges
      }}
      process={{
        title: 'Der Weg zum passenden Nachfolger',
        subtitle: 'Strukturiert und diskret zum optimalen Match',
        steps: process
      }}
      cta={{
        title: 'Sichern Sie Ihr Lebenswerk',
        subtitle: 'Wir finden den richtigen Nachfolger, der Ihre Vision weiterführt.',
        phone: '+49 (0) 641 201 037 00',
        email: 'nachfolge@sonnt-ag.com',
        features: [
          'Diskrete Nachfolgersuche',
          'Umfassende Kandidatenprüfung',
          'Persönliches Matching',
          'Begleitete Übergabe'
        ]
      }}
    />
  )
}