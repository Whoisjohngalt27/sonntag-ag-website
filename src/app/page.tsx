import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRightIcon, PhoneIcon, ClockIcon, ShieldCheckIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline'
import { EyeSlashIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/20/solid'
import { ShaderAnimation } from '@/components/ui/shader-animation'
import { ShaderLinesAnimation } from '@/components/ui/shader-lines'
import { AnonymousBiddingAnimation } from '@/components/ui/anonymous-bidding-animation'
import TeamWithBioAdapted from '@/components/ui-blocks/adapted/team-with-bio-adapted'
import { leadershipTeam } from '@/lib/team-data'

export const metadata: Metadata = {
  title: 'SONNTAG AG - Unternehmensnachfolge & M&A Beratung Gießen',
  description: 'Führende M&A Beratung in Gießen. Wir sichern Lebenswerke durch anonyme Bieterverfahren und Wertoptimierung. 25+ Jahre Erfahrung in Unternehmensnachfolge.',
  keywords: [
    'M&A Beratung Gießen',
    'Unternehmensnachfolge',
    'Unternehmensverkauf',
    'Wertoptimierung',
    'Anonymes Bieterverfahren',
    'Mittelstand',
    'Hessen'
  ]
}

export default function HomePage() {
  const stats = [
    { label: 'Jahre Erfahrung', value: '25+' },
    { label: 'Erfolgreiche Verkäufe', value: '500+' },
    { label: 'Zufriedene Kunden', value: '98%' },
    { label: 'Durchschnittliche Wertsteigerung', value: '35%' },
  ];

  const bieterverfahrenFeatures = [
    {
      name: '100% Anonymität',
      description: 'Ihre Identität bleibt bis zum Vertragsabschluss vollständig geschützt. Kunden, Mitarbeiter und Wettbewerber erfahren nichts vom Verkaufsprozess.',
      icon: EyeSlashIcon,
    },
    {
      name: 'Mehrere Bieter gleichzeitig',
      description: 'Wettbewerb zwischen qualifizierten Käufern maximiert Ihren Verkaufspreis. Durchschnittlich 3-5 ernsthafte Interessenten pro Verfahren.',
      icon: UserGroupIcon,
    },
    {
      name: 'Echter Marktwert',
      description: 'Der tatsächliche Wert wird durch konkurrierende Gebote ermittelt – keine theoretischen Bewertungen, sondern reale Kaufangebote.',
      icon: ChartBarIcon,
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Die 5 häufigsten Fehler beim Unternehmensverkauf',
      href: '/blog/fehler-unternehmensverkauf',
      description:
        'Erfahren Sie, welche kritischen Fehler Unternehmer beim Verkauf ihrer Firma machen und wie Sie diese vermeiden können. Von falscher Bewertung bis zu emotionalen Entscheidungen.',
      date: '15. Aug 2024',
      datetime: '2024-08-15',
      category: { title: 'M&A Beratung', href: '#' },
      author: {
        name: 'Thomas Sonntag',
        role: 'Vorstand MARKTWERT',
        href: '/team#thomas-sonntag',
        initials: 'TS',
      },
    },
    {
      id: 2,
      title: 'Wertsteigerung vor dem Verkauf: Der MEHRWERT-Ansatz',
      href: '/blog/wertsteigerung-vor-verkauf',
      description: 'Wie Sie den Wert Ihres Unternehmens vor dem Verkauf um 20-40% steigern können. Praktische Tipps aus 14 Jahren Erfahrung.',
      date: '8. Aug 2024',
      datetime: '2024-08-08',
      category: { title: 'Wertsteigerung', href: '#' },
      author: {
        name: 'Prof. Dr. Bastian Heinemann',
        role: 'Vorstand MEHRWERT',
        href: '/team#bastian-heinemann',
        initials: 'BH',
      },
    },
    {
      id: 3,
      title: 'Anonymes Bieterverfahren: Revolution im Mittelstand',
      href: '/blog/anonymes-bieterverfahren',
      description:
        'Das anonyme Bieterverfahren hat den Unternehmensverkauf im deutschen Mittelstand revolutioniert. Erfahren Sie, warum Diskretion und Wettbewerb zu höheren Verkaufspreisen führen.',
      date: '1. Aug 2024',
      datetime: '2024-08-01',
      category: { title: 'Unternehmensnachfolge', href: '#' },
      author: {
        name: 'Thomas Sonntag',
        role: 'Vorstand MARKTWERT',
        href: '/team#thomas-sonntag',
        initials: 'TS',
      },
    },
  ];

  const services = [
    {
      name: 'MARKTWERT',
      description: 'Schneller Unternehmensverkauf durch anonymes Bieterverfahren',
      features: [
        'Anonyme Marktführung',
        'Multiple Interessenten',
        'Echte Marktwertermittlung',
        '4-8 Wochen bis zum Abschluss'
      ],
      link: '/notverkauf-unternehmen-giessen',
      icon: ClockIcon,
      urgent: true
    },
    {
      name: 'MEHRWERT',
      description: 'Wertsteigerung vor dem Verkauf für maximale Erlöse',
      features: [
        'Profitabilitätssteigerung',
        'Prozessoptimierung',
        'Digitalisierung',
        '20-40% Wertsteigerung'
      ],
      link: '/mehrwert-unternehmen-giessen',
      icon: ArrowTrendingUpIcon,
      urgent: false
    },
    {
      name: 'M&A BERATUNG',
      description: 'Umfassende Begleitung bei Unternehmensnachfolge',
      features: [
        'Strategische Planung',
        'Käufersuche & Due Diligence',
        'Verhandlungsführung',
        'Übergabebegleitung'
      ],
      link: '/m-a-beratung-giessen',
      icon: ShieldCheckIcon,
      urgent: false
    }
  ];

  const recentTransactions = [
    {
      date: 'Juni 2025',
      company: 'Wieland & Schultz Kaisersauern GmbH',
      buyer: 'Encevo Deutschland GmbH',
      timeframe: '6 Wochen'
    },
    {
      date: 'März 2025',
      company: 'Becker GmbH CAD-CAM-CAST',
      buyer: 'Windschiegl Maschinenbau GmbH',
      timeframe: '8 Wochen'
    },
    {
      date: 'Januar 2025',
      company: 'Mittelständisches Handelsunternehmen',
      buyer: 'Strategischer Investor',
      timeframe: '10 Wochen'
    }
  ];

  return (
    <main className="min-h-screen bg-white">


      {/* Hero Section with ShaderAnimation and Trust Signals */}
      <section className="relative min-h-screen overflow-hidden">
        {/* ShaderAnimation Background */}
        <div className="absolute inset-0">
          <ShaderAnimation />
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl drop-shadow-lg">
                Wir verkaufen keine Unternehmen.
                <span className="block text-white/90 mt-4">Wir sichern Lebenswerke.</span>
              </h1>
              <p className="mt-8 text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
                Mit über 500 erfolgreichen Unternehmensverkäufen und unserem einzigartigen 
                anonymen Bieterverfahren sind wir Ihr vertrauensvoller Partner für die 
                Unternehmensnachfolge im deutschen Mittelstand.
              </p>
              
              {/* CTA Buttons */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/notverkauf-unternehmen-giessen"
                  className="inline-flex items-center px-8 py-4 border border-transparent text-base sm:text-lg font-semibold rounded-lg text-black bg-white hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
                >
                  Dringend verkaufen?
                  <ChevronRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-base sm:text-lg font-semibold rounded-lg text-white bg-transparent hover:bg-white/10 transition-all duration-200 transform hover:-translate-y-0.5 backdrop-blur-sm"
                >
                  Kostenlose Erstberatung
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Vertrauen durch Erfahrung
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Zahlen, die für sich sprechen
              </p>
            </div>
            <dl className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col group">
                  <dt className="text-base leading-7 text-gray-500 transition-colors duration-200 group-hover:text-gray-700">{stat.label}</dt>
                  <dd className="mt-2 text-3xl font-bold leading-9 tracking-tight text-gray-900 sm:text-4xl transition-all duration-300 group-hover:scale-110 transform">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Anonymes Bieterverfahren Section */}
      <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">
            <div className="lg:pr-8">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Unser Erfolgsgeheimnis</h2>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                  Das anonyme Bieterverfahren
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  Unser revolutionäres MARKTWERT-Verfahren wurde speziell für den deutschen Mittelstand entwickelt 
                  und garantiert Ihnen den bestmöglichen Verkaufspreis bei vollständiger Diskretion.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                  {bieterverfahrenFeatures.map((feature) => (
                    <div key={feature.name} className="relative pl-9 transition-all duration-200 hover:translate-x-2">
                      <dt className="inline font-semibold text-black">
                        <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-gray-400 transition-colors duration-200 group-hover:text-gray-600" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-10">
                  <Link
                    href="/leistungen"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-black hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                  >
                    Mehr über das Verfahren erfahren
                    <ChevronRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                <video
                  autoPlay
                  muted
                  playsInline
                  loop
                  className="w-full h-auto object-contain rounded-lg"
                >
                  <source src="/Line-Chart-User-Acquisition.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wertmaximierung Section - Video Left */}
      <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">
            <div className="flex items-center justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-lg">
                <video
                  autoPlay
                  muted
                  playsInline
                  loop
                  className="w-full h-auto object-contain rounded-lg"
                >
                  <source src="/Animated-Donut-Chart-Black.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:pl-8">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Maximale Wertsteigerung</h2>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                  Ihr Unternehmenswert optimal gesteigert
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  Mit unserem MEHRWERT-Programm steigern wir systematisch den Wert Ihres Unternehmens 
                  vor dem Verkauf. Durchschnittlich erzielen unsere Kunden 35% höhere Verkaufspreise.
                </p>
                <div className="mt-10 space-y-8">
                  <div className="relative group transition-all duration-200 hover:translate-x-2">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black transition-all duration-200 group-hover:bg-gray-800 group-hover:scale-110">
                          <span className="text-white font-bold text-sm">1</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-base font-semibold text-black">Analyse & Potenzialermittlung</h3>
                        <p className="mt-2 text-sm text-gray-600">
                          Wir identifizieren versteckte Werttreiber und ungenutzte Potenziale in Ihrem Unternehmen.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative group transition-all duration-200 hover:translate-x-2">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black transition-all duration-200 group-hover:bg-gray-800 group-hover:scale-110">
                          <span className="text-white font-bold text-sm">2</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-base font-semibold text-black">Strategische Optimierung</h3>
                        <p className="mt-2 text-sm text-gray-600">
                          Prozesse digitalisieren, Kosten senken, Margen erhöhen – alles für den maximalen Verkaufspreis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative group transition-all duration-200 hover:translate-x-2">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black transition-all duration-200 group-hover:bg-gray-800 group-hover:scale-110">
                          <span className="text-white font-bold text-sm">3</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-base font-semibold text-black">Messbare Ergebnisse</h3>
                        <p className="mt-2 text-sm text-gray-600">
                          Im Durchschnitt 35% höhere Verkaufspreise durch gezielte Wertsteigerungsmaßnahmen.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <Link
                    href="/mehrwert-unternehmen-giessen"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-black hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                  >
                    MEHRWERT-Programm entdecken
                    <ChevronRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Services Section */}
      <section className="relative bg-gray-900 py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Shader Lines Background */}
        <div className="absolute inset-0">
          <ShaderLinesAnimation />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Unsere Expertise</h2>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Alles für Ihre erfolgreiche Unternehmensnachfolge
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4 lg:grid-rows-2">
            {/* MARKTWERT - Large left card spanning 2 rows */}
            <div className="relative lg:col-span-2 lg:row-span-2">
              <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-md" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-white/20 transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 hover:bg-white/15">
                <div className="px-6 pt-6 pb-3 sm:px-8 sm:pt-8 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                    Anonymes Bieterverfahren
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                    Maximaler Verkaufspreis durch echten Wettbewerb. 100% diskret, mehrere Bieter gleichzeitig.
                  </p>
                </div>
                <div className="relative flex flex-col w-full grow px-6 pb-6 sm:px-8 sm:pb-8">
                  {/* Anonymous Bidding Animation */}
                  <div className="mt-2">
                    <AnonymousBiddingAnimation />
                  </div>
                  
                  {/* Key Features List */}
                  <div className="mt-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <EyeSlashIcon className="h-4 w-4 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">100% Anonymität</p>
                        <p className="text-xs text-gray-400 mt-0.5">Ihre Identität bleibt bis zum Abschluss geschützt</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <UserGroupIcon className="h-4 w-4 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Echter Wettbewerb</p>
                        <p className="text-xs text-gray-400 mt-0.5">3-5 qualifizierte Käufer bieten gleichzeitig</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <ChartBarIcon className="h-4 w-4 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Maximaler Erlös</p>
                        <p className="text-xs text-gray-400 mt-0.5">Durchschnittlich 35% höhere Verkaufspreise</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="mt-6">
                    <Link
                      href="/leistungen"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-black hover:bg-gray-800 transition-all duration-200 transform hover:-translate-y-0.5"
                    >
                      MARKTWERT entdecken
                      <ChevronRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* MEHRWERT - Top right card */}
            <div className="relative lg:col-span-1">
              <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-md" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-white/20 transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 hover:bg-white/15">
                <div className="px-6 pt-6 sm:px-8 sm:pt-8">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                    Wertsteigerung
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                    Steigern Sie Ihren Unternehmenswert vor dem Verkauf um 20-40%.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-6 py-6 sm:px-8">
                  <div className="text-center">
                    <p className="text-5xl font-bold text-white">+35%</p>
                    <p className="mt-2 text-sm text-gray-300">Durchschnittliche Wertsteigerung</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Digitalisierung - Top right second card */}
            <div className="relative lg:col-span-1">
              <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-md" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-white/20 transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 hover:bg-white/15">
                <div className="px-6 pt-6 sm:px-8 sm:pt-8">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                    Digitalisierung
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                    Digitale Transformation für höhere Bewertungen.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-6 py-6 sm:px-8">
                  <div className="flex space-x-8">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-white">2x</p>
                      <p className="text-xs text-gray-300">Effizienzsteigerung</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-white">50%</p>
                      <p className="text-xs text-gray-300">Kostenreduktion</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* M&A Beratung - Bottom left card */}
            <div className="relative lg:col-span-1">
              <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-md" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-white/20 transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 hover:bg-white/15">
                <div className="px-6 pt-6 sm:px-8 sm:pt-8">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                    M&A Beratung
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                    Professionelle Begleitung von der Strategie bis zum Abschluss.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-6 py-6 sm:px-8">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white">500+</p>
                    <p className="mt-2 text-sm text-gray-300">Erfolgreiche Deals</p>
                    <p className="text-xs text-gray-400 mt-1">25+ Jahre Erfahrung</p>
                  </div>
                </div>
                <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                  <Link
                    href="/leistungen"
                    className="inline-flex items-center justify-center w-full px-4 py-2 border border-white/20 text-sm font-medium rounded-lg text-white bg-white/10 hover:bg-white/20 transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    Mehr erfahren
                    <ChevronRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Unternehmensbewertung - Bottom right card */}
            <div className="relative lg:col-span-1">
              <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-md" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-white/20 transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 hover:bg-white/15">
                <div className="px-6 pt-6 sm:px-8 sm:pt-8">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                    Unternehmensbewertung
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                    Professionelle Bewertung nach internationalen Standards.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-6 py-6 sm:px-8">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white">100%</p>
                    <p className="mt-2 text-sm text-gray-300">Transparenz</p>
                    <p className="text-xs text-gray-400 mt-1">IFRS & IDW konform</p>
                  </div>
                </div>
                <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                  <Link
                    href="/leistungen"
                    className="inline-flex items-center justify-center w-full px-4 py-2 border border-white/20 text-sm font-medium rounded-lg text-white bg-white/10 hover:bg-white/20 transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    Bewertung anfordern
                    <ChevronRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Recent Transactions */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Aktuelle Erfolge</h2>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Unsere jüngsten Transaktionen
            </p>
            <p className="text-lg text-gray-600">
              Diskret, schnell und erfolgreich – so arbeiten wir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentTransactions.map((transaction, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-gray-500">{transaction.date}</span>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    Erfolgreich
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  {transaction.company}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Käufer: {transaction.buyer}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  <span>Abschluss in {transaction.timeframe}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/transaktionen"
              className="inline-flex items-center text-base font-medium text-black hover:text-gray-700 transition-all duration-200 hover:translate-x-2"
            >
              Alle Transaktionen ansehen
              <ChevronRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white">
        <TeamWithBioAdapted 
          title="Doppelte Spitze für Ihren Erfolg"
          subtitle="Bei der Sonntag AG kombinieren wir 25 Jahre Erfahrung im Unternehmensverkauf mit 14 Jahren Expertise in der operativen Wertsteigerung."
          members={leadershipTeam}
          showSocial={false}
        />
        <div className="pb-16 sm:pb-20 lg:pb-24">
          <div className="text-center">
            <Link
              href="/team"
              className="inline-flex items-center text-base font-medium text-black hover:text-gray-700 transition-all duration-200 hover:translate-x-2"
            >
              Unser gesamtes Team kennenlernen
              <ChevronRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">
              Aus unserem Expertenblog
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">
              Einblicke, Tipps und Strategien für erfolgreiche Unternehmensnachfolge.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 border-t border-gray-200 pt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between transition-all duration-200 hover:transform hover:-translate-y-1">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-200 transition-colors duration-200"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative grow">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                  <div className="size-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-600">{post.author.initials}</span>
                  </div>
                  <div className="text-sm/6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-base font-medium text-black hover:text-gray-700 transition-all duration-200 hover:translate-x-2"
            >
              Alle Artikel ansehen
              <ChevronRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
