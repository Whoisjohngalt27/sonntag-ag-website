import type { Metadata } from 'next'
import { BlogSection } from '@/components/features/blog'

export const metadata: Metadata = {
  title: 'Blog & Insights | SONNTAG AG - M&A Beratung',
  description: 'Aktuelle Einblicke, Fachartikel und Expertenwissen rund um M&A, Unternehmensnachfolge und Unternehmensverkauf im Mittelstand.',
  keywords: [
    'M&A Blog',
    'Unternehmensnachfolge Artikel',
    'Unternehmensverkauf Tipps',
    'Mittelstand M&A',
    'Nachfolgeplanung',
    'Due Diligence'
  ]
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Blog & Insights
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Aktuelle Einblicke und Expertenwissen aus der Welt der Unternehmensnachfolge und M&A-Beratung
            </p>
          </div>
        </div>
      </div>
      
      <BlogSection />
      
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Newsletter</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Bleiben Sie informiert
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Erhalten Sie regelmäßig Updates zu aktuellen M&A-Themen und Marktentwicklungen
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-md">
            <form className="flex gap-x-4">
              <input
                type="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                placeholder="Ihre E-Mail-Adresse"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Anmelden
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}