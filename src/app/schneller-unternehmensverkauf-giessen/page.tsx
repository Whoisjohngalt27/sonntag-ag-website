import type { Metadata } from 'next'
import { ClockIcon, BoltIcon } from '@heroicons/react/24/outline'
import { EmergencyPageTemplate } from '@/components/features/emergency'

export const metadata: Metadata = {
  title: 'Schneller Unternehmensverkauf Gießen | In 6-12 Wochen verkaufen | SONNTAG AG',
  description: 'Schneller Unternehmensverkauf in Gießen gesucht? SONNTAG AG verkauft Ihr Unternehmen in nur 6-12 Wochen. Diskret, professionell und zum Bestpreis. Kostenlose Erstberatung vereinbaren!',
  keywords: [
    'schneller unternehmensverkauf gießen',
    'firma schnell verkaufen gießen',
    'express unternehmensverkauf',
    'zeitnaher geschäftsverkauf',
    'unternehmensverkauf 6 wochen',
    'schneller mittelstand verkauf'
  ]
}

export default function SchnellerUnternehmensverkaufPage() {
  const challenges = [
    { icon: '⏰', title: 'Zeitdruck', description: 'Schnelle Entscheidung nötig' },
    { icon: '🎯', title: 'Neue Ziele', description: 'Berufliche Neuorientierung geplant' },
    { icon: '🌍', title: 'Umzug geplant', description: 'Standortwechsel oder Auswanderung' },
    { icon: '💼', title: 'Neue Chance', description: 'Andere Geschäftsmöglichkeit wartet' },
    { icon: '👨‍👩‍👧', title: 'Familie', description: 'Mehr Zeit für Privatleben gewünscht' },
    { icon: '📊', title: 'Marktchance', description: 'Optimaler Verkaufszeitpunkt jetzt' }
  ]

  const process = [
    { step: '1', title: 'Express-Analyse', time: '48h', description: 'Schnellbewertung Ihres Unternehmens', phase: 'ANALYSE' },
    { step: '2', title: 'Käufer-Pool', time: '1 Woche', description: 'Zugriff auf vorqualifizierte Käufer', phase: 'MATCHING' },
    { step: '3', title: 'Parallel-Verhandlung', time: '2-3 Wochen', description: 'Gleichzeitige Gespräche mit mehreren Interessenten', phase: 'VERHANDLUNG' },
    { step: '4', title: 'Due Diligence Express', time: '2 Wochen', description: 'Beschleunigte Prüfung mit vorbereiten Unterlagen', phase: 'PRÜFUNG' },
    { step: '5', title: 'Schnellabschluss', time: '6-12 Wochen gesamt', description: 'Notarieller Abschluss und Übergabe', phase: 'ABSCHLUSS' }
  ]

  return (
    <EmergencyPageTemplate
      banner={{
        icon: ClockIcon,
        label: 'EXPRESS-VERKAUF',
        phone: '+49 (0) 641 201 037 00',
        description: 'In 6-12 Wochen verkauft',
        bgColor: 'bg-blue-600'
      }}
      hero={{
        badge: {
          icon: BoltIcon,
          text: 'Express-Service',
          color: 'bg-blue-50'
        },
        title: (
          <>
            Schneller Unternehmensverkauf in{' '}
            <span className="text-blue-600">Gießen</span>
          </>
        ),
        subtitle: 'Sie möchten Ihr Unternehmen zügig und unkompliziert verkaufen? Mit unserem EXPRESS-SERVICE verkaufen wir Ihr Unternehmen in nur 6-12 Wochen - diskret, professionell und zum bestmöglichen Preis. Nutzen Sie unsere 25-jährige Erfahrung und unser Netzwerk.',
        phone: '+49 (0) 641 201 037 00',
        ctaText: 'Express-Beratung starten',
        ctaLink: '/kontakt'
      }}
      challenges={{
        title: 'Warum ein schneller Verkauf?',
        subtitle: 'Verschiedene Gründe erfordern zügiges Handeln',
        challenges
      }}
      process={{
        title: 'Der EXPRESS-Prozess',
        subtitle: 'Optimiert für maximale Geschwindigkeit bei vollem Erfolg',
        steps: process
      }}
      cta={{
        title: 'Starten Sie Ihren Express-Verkauf',
        subtitle: 'Je früher Sie beginnen, desto schneller erreichen Sie Ihr Ziel.',
        phone: '+49 (0) 641 201 037 00',
        email: 'express@sonnt-ag.com',
        features: [
          'Garantiert in 6-12 Wochen',
          'Vorqualifizierte Käufer-Datenbank',
          'Parallele Verhandlungsführung',
          'Express Due Diligence Verfahren'
        ]
      }}
    />
  )
}