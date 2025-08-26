import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Referenzen & Erfolge | SONNTAG AG - M&A Beratung',
  description: 'Erfolgreiche Unternehmensverkäufe und Nachfolgeregelungen im Mittelstand. Über 300 abgeschlossene Transaktionen sprechen für sich.',
  keywords: [
    'M&A Referenzen',
    'Erfolgreiche Unternehmensverkäufe',
    'Nachfolgeregelung Erfolge',
    'Mittelstand Transaktionen',
    'Case Studies M&A',
    'Kundenstimmen'
  ]
}

const references = [
  {
    year: '2025',
    company: 'Becker GmbH CAD CAM Cast',
    industry: 'Technologie',
    description: 'Erfolgreiche Nachfolgeregelung im Bereich CAD/CAM Technologie',
    logo: '/assets/references/2025/becker-gmbh-cad-cam-cast.png'
  },
  {
    year: '2025',
    company: 'Lyra Pet',
    industry: 'Heimtierbedarf',
    description: 'Strategische Übernahme im Heimtiermarkt',
    logo: '/assets/references/2025/lyra-pet.png'
  },
  {
    year: '2025',
    company: 'Pirker Pfeiffer Ingenieure GmbH',
    industry: 'Ingenieurwesen',
    description: 'Generationswechsel in etabliertem Ingenieurbüro',
    logo: '/assets/references/2025/pirker-pfeiffer-ingenieure-gmbh.png'
  },
  {
    year: '2025',
    company: 'Wieland Schultz Kaiserslautern GmbH',
    industry: 'Industrie',
    description: 'Erfolgreiche Unternehmensnachfolge im industriellen Sektor',
    logo: '/assets/references/2025/wieland-schultz-kaiserslautern-gmbh.png'
  },
  {
    year: '2025',
    company: 'Windschiegl Maschinenbau GmbH',
    industry: 'Maschinenbau',
    description: 'Strategische Partnerschaft im Maschinenbau',
    logo: '/assets/references/2025/windschiegl-maschinenbau-gmbh.png'
  },
  {
    year: '2024',
    company: 'Boni Shop',
    industry: 'Einzelhandel',
    description: 'Erfolgreiche Übernahme im Einzelhandelsbereich',
    logo: '/assets/references/2024/boni-shop-scaled.jpg'
  },
  {
    year: '2024',
    company: 'Klossika Werkzeugbau GmbH',
    industry: 'Werkzeugbau',
    description: 'Nachfolgeregelung im spezialisierten Werkzeugbau',
    logo: '/assets/references/2024/klossika-werkzeugbau-gmbh-scaled.jpg'
  },
  {
    year: '2024',
    company: 'Schloss Quelle',
    industry: 'Getränkeindustrie',
    description: 'Strategische Akquisition in der Getränkebranche',
    logo: '/assets/references/2024/schloss-quelle-scaled.jpg'
  },
  {
    year: '2024',
    company: 'Vaas Großmechanik GmbH',
    industry: 'Großmechanik',
    description: 'Erfolgreiche Unternehmensnachfolge im Bereich Großmechanik',
    logo: '/assets/references/2024/vaas-grossmechanik-gmbh.jpg'
  }
]

const testimonials = [
  {
    quote: 'Die SONNTAG AG hat uns während des gesamten Verkaufsprozesses hervorragend betreut. Die diskrete und professionelle Abwicklung war beeindruckend.',
    author: 'Thomas Müller',
    role: 'Ehemaliger Geschäftsführer',
    company: 'Maschinenbau GmbH'
  },
  {
    quote: 'Durch das anonyme Bieterverfahren konnten wir einen deutlich höheren Verkaufspreis erzielen als ursprünglich erwartet.',
    author: 'Sandra Schmidt',
    role: 'Gesellschafterin',
    company: 'IT-Solutions AG'
  },
  {
    quote: 'Die Expertise der SONNTAG AG im Bereich Unternehmensnachfolge war für uns entscheidend. Wir haben den perfekten Nachfolger gefunden.',
    author: 'Dr. Klaus Weber',
    role: 'Inhaber',
    company: 'Ingenieurbüro Weber'
  }
]

const stats = [
  { value: '300+', label: 'Erfolgreiche Transaktionen' },
  { value: '€2.5 Mrd', label: 'Transaktionsvolumen' },
  { value: '98%', label: 'Erfolgsquote' },
  { value: '25+', label: 'Jahre Erfahrung' }
]

export default function ReferenzenPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Referenzen & Erfolge
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Über 300 erfolgreiche Unternehmensverkäufe und Nachfolgeregelungen sprechen für sich
            </p>
          </div>
          
          {/* Stats */}
          <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 text-center lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* References Grid */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Unsere Referenzen</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Erfolgreiche Transaktionen
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Eine Auswahl unserer erfolgreich abgeschlossenen Transaktionen
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-7xl gap-8 lg:grid-cols-3">
            {references.map((reference, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <div className="flex flex-1 flex-col justify-between p-8">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-blue-600">
                      {reference.year} • {reference.industry}
                    </p>
                    <div className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">{reference.company}</p>
                      <p className="mt-3 text-base text-gray-500">{reference.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Kundenstimmen</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Was unsere Kunden sagen
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <figure className="mt-6">
                    <blockquote className="text-gray-900">
                      <p>&ldquo;{testimonial.quote}&rdquo;</p>
                    </blockquote>
                    <figcaption className="mt-6">
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-gray-600">{testimonial.role}</div>
                      <div className="text-gray-500">{testimonial.company}</div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Werden Sie unsere nächste Erfolgsgeschichte
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Lassen Sie uns gemeinsam die beste Lösung für Ihre Unternehmensnachfolge finden
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <Link href="/kontakt" className="inline-flex items-center justify-center rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Kontakt aufnehmen <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link href="/leistungen" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Unsere Leistungen
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </section>
    </main>
  )
}