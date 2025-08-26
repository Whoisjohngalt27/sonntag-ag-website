import type { Metadata } from 'next'
import { ExclamationCircleIcon, HeartIcon } from '@heroicons/react/24/outline'
import { EmergencyPageTemplate } from '@/components/features/emergency'

export const metadata: Metadata = {
  title: 'Firma sofort verkaufen Gießen | Aus gesundheitlichen Gründen | SONNTAG AG',
  description: 'Firma aus gesundheitlichen Gründen sofort verkaufen in Gießen? SONNTAG AG - Ihr einfühlsamer Partner für den schnellen Unternehmensverkauf. Diskret, fair und mit maximaler Unterstützung.',
  keywords: [
    'firma sofort verkaufen gießen',
    'unternehmensverkauf gesundheit',
    'notverkauf krankheit gießen',
    'geschäftsverkauf gesundheitliche gründe',
    'sofortiger unternehmensverkauf',
    'dringender verkauf mittelhessen'
  ]
}

export default function FirmaSofortVerkaufenPage() {
  const healthReasons = [
    { icon: '🏥', title: 'Plötzliche Erkrankung', description: 'Unerwartete Diagnose erfordert sofortiges Handeln' },
    { icon: '💔', title: 'Burnout/Erschöpfung', description: 'Die Belastung ist zu groß geworden' },
    { icon: '🦽', title: 'Unfall/Verletzung', description: 'Physische Einschränkungen verhindern Weiterführung' },
    { icon: '👨‍⚕️', title: 'Ärztlicher Rat', description: 'Medizinisch notwendige Entlastung' },
    { icon: '🧠', title: 'Psychische Belastung', description: 'Stress und Druck werden übermächtig' },
    { icon: '👥', title: 'Familiäre Pflege', description: 'Angehörige benötigen Ihre volle Aufmerksamkeit' }
  ]

  const supportProcess = [
    { step: '1', title: 'Vertrauensvolles Gespräch', time: 'Sofort', description: 'Wir hören zu und verstehen Ihre Situation', phase: 'KONTAKT' },
    { step: '2', title: 'Schnelle Bewertung', time: '24-48h', description: 'Faire Einschätzung des Unternehmenswertes', phase: 'BEWERTUNG' },
    { step: '3', title: 'Diskrete Käufersuche', time: '1-2 Wochen', description: 'Anonyme Ansprache vertrauenswürdiger Käufer', phase: 'SUCHE' },
    { step: '4', title: 'Entlastende Verhandlung', time: '2-3 Wochen', description: 'Wir übernehmen alle Verhandlungen für Sie', phase: 'VERHANDLUNG' },
    { step: '5', title: 'Sorgenfreier Abschluss', time: '4-6 Wochen', description: 'Reibungslose Übergabe ohne zusätzlichen Stress', phase: 'ÜBERGABE' }
  ]

  return (
    <EmergencyPageTemplate
      banner={{
        icon: HeartIcon,
        label: 'GESUNDHEITS-HOTLINE',
        phone: '+49 (0) 641 201 037 00',
        description: 'Einfühlsame Beratung',
        bgColor: 'bg-green-600'
      }}
      hero={{
        badge: {
          icon: ExclamationCircleIcon,
          text: 'Gesundheitlicher Notfall',
          color: 'bg-green-50'
        },
        title: (
          <>
            Firma sofort verkaufen in{' '}
            <span className="text-green-600">Gießen</span>
          </>
        ),
        subtitle: 'Ihre Gesundheit steht an erster Stelle. Wenn gesundheitliche Gründe einen sofortigen Unternehmensverkauf erfordern, sind wir mit Verständnis und Expertise für Sie da. Wir übernehmen die gesamte Abwicklung und sorgen für einen fairen, schnellen Verkauf.',
        phone: '+49 (0) 641 201 037 00',
        ctaText: 'Vertrauliches Gespräch',
        ctaLink: '/kontakt'
      }}
      challenges={{
        title: 'Gesundheitliche Herausforderungen',
        subtitle: 'Wir verstehen Ihre schwierige Situation',
        challenges: healthReasons
      }}
      process={{
        title: 'Unser einfühlsamer Unterstützungsprozess',
        subtitle: 'Maximale Entlastung in schwieriger Zeit',
        steps: supportProcess
      }}
      cta={{
        title: 'Ihre Gesundheit hat Priorität',
        subtitle: 'Lassen Sie uns die Last von Ihren Schultern nehmen. Wir kümmern uns um alles.',
        phone: '+49 (0) 641 201 037 00',
        email: 'gesundheit@sonnt-ag.com',
        features: [
          'Einfühlsame Beratung',
          'Komplette Entlastung',
          'Faire Bewertung garantiert',
          'Absolute Diskretion'
        ]
      }}
    />
  )
}