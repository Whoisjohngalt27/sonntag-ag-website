// Import TeamMember type from the component
import { TeamMember } from '@/components/features/team/team-with-bio-adapted'

export const teamMembers: TeamMember[] = [
  {
    name: 'Thomas Sonntag',
    role: 'Geschäftsführer MARKTWERT',
    imageUrl: '/team/thomas-sonntag-main.jpg',
    bio: 'Thomas Sonntag ist der Gründer und Geschäftsführer der Sonntag AG. Mit über 25 Jahren Erfahrung im Bereich der Unternehmensnachfolge hat er sich als Experte für den deutschen Mittelstand etabliert. Sein anonymes Bieterverfahren ermöglicht es Unternehmen, den tatsächlichen Marktwert zu ermitteln und hochdiskret an den Markt zu gehen.',
    linkedinUrl: '#',
  },
  {
    name: 'Bastian Heinemann',
    role: 'Geschäftsführer MEHRWERT',
    imageUrl: '/team/bastian-heinemann-main.png',
    bio: 'Bastian Heinemann leitet den Geschäftsbereich MEHRWERT und bringt 14 Jahre Erfahrung in der operativen Wertsteigerung von Unternehmen mit. Nach dem Unternehmensverkauf war er über viele Jahre im Auftrag der neuen Eigentümer erfolgreich tätig und stellt diese Expertise jetzt Unternehmern vor dem Verkauf zur Verfügung.',
    linkedinUrl: '#',
  },
  {
    name: 'Hannes Sauter',
    role: 'Senior M&A Berater',
    imageUrl: '/team/hannes-sauter.png',
    bio: 'Experte für komplexe Unternehmensverkäufe und strategische Beratung. Spezialisiert auf mittelständische Transaktionen mit Fokus auf nachhaltige Lösungen.',
  },
  {
    name: 'Lars Michels',
    role: 'Wertsteigerungsspezialist',
    imageUrl: '/team/lars-michels.png',
    bio: 'Fokus auf operative Verbesserungen und Prozessoptimierung. Unterstützt Unternehmen bei der Wertsteigerung vor dem Verkauf.',
  },
  {
    name: 'Matthias Ranft',
    role: 'Marktanalyst',
    imageUrl: '/team/matthias-ranft.png',
    bio: 'Spezialist für Marktbewertung und strategische Positionierung. Analysiert Markttrends und identifiziert optimale Verkaufszeitpunkte.',
  },
  {
    name: 'Quirin Eder',
    role: 'Rechtsberater',
    imageUrl: '/team/quirin-eder.png',
    bio: 'Experte für rechtliche Aspekte der Unternehmensnachfolge. Gewährleistet rechtssichere Verträge und Transaktionsabwicklung.',
  },
  {
    name: 'Denis Ceylan',
    role: 'Finanzanalyst',
    imageUrl: '/team/denis-ceylan.jpg',
    bio: 'Spezialist für Finanzbewertung und Due Diligence. Entwickelt Bewertungsmodelle und analysiert Finanzstrukturen.',
  },
  {
    name: 'Masoume Bron',
    role: 'Projektmanagerin',
    imageUrl: '/team/masoume-bron.jpeg',
    bio: 'Verantwortlich für die Koordination komplexer Transaktionen. Sorgt für reibungslose Abläufe und termingerechte Umsetzung.',
  },
  {
    name: 'Seline Meyer',
    role: 'Kundenbetreuung',
    imageUrl: '/team/seline-meyer.png',
    bio: 'Ihre erste Ansprechpartnerin für alle Fragen. Sorgt für exzellenten Kundenservice und koordiniert Termine.',
  },
  {
    name: 'Michael Zenner',
    role: 'Technischer Berater',
    imageUrl: '/team/michael-zenner.jpg',
    bio: 'Experte für IT-Integration und digitale Transformation. Unterstützt bei technischen Due Diligence Prozessen.',
  },
]

// Get only leadership team members
export const leadershipTeam = teamMembers.slice(0, 2)

// Get all team members except leadership
export const teamWithoutLeadership = teamMembers.slice(2)