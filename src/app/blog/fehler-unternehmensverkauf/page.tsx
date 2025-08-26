import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Die 5 häufigsten Fehler beim Unternehmensverkauf | SONNTAG AG Blog',
  description: 'Erfahren Sie, welche kritischen Fehler Unternehmer beim Verkauf ihrer Firma machen und wie Sie diese vermeiden können.',
  keywords: [
    'Unternehmensverkauf Fehler',
    'Firmenverkauf Tipps',
    'M&A Beratung',
    'Unternehmensbewertung',
    'Due Diligence'
  ]
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <article className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-black transition-colors">
              <ChevronLeftIcon className="mr-2 h-4 w-4" />
              Zurück zum Blog
            </Link>
          </div>
          
          <header className="mb-12">
            <div className="flex items-center gap-x-4 text-sm mb-6">
              <time dateTime="2024-08-15" className="text-gray-500">
                15. August 2024
              </time>
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                M&A Beratung
              </span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Die 5 häufigsten Fehler beim Unternehmensverkauf
            </h1>
            
            <p className="text-xl text-gray-600 leading-8">
              Erfahren Sie, welche kritischen Fehler Unternehmer beim Verkauf ihrer Firma machen und wie Sie diese vermeiden können. Von falscher Bewertung bis zu emotionalen Entscheidungen.
            </p>
            
            <div className="mt-8 flex items-center gap-x-4">
              <div className="size-12 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-sm font-bold text-gray-600">TS</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Thomas Sonntag</p>
                <p className="text-sm text-gray-600">Vorstand MARKTWERT</p>
              </div>
            </div>
          </header>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead">
              Nach über 300 begleiteten Unternehmensverkäufen haben wir bei der SONNTAG AG ein klares Bild davon, welche Fehler Unternehmer immer wieder machen. Diese Fehler können Sie nicht nur viel Geld kosten, sondern im schlimmsten Fall den gesamten Verkaufsprozess zum Scheitern bringen.
            </p>
            
            <h2>1. Falsche oder fehlende Unternehmensbewertung</h2>
            <p>
              Der häufigste und kostspieligste Fehler ist eine unrealistische Preisvorstellung. Viele Unternehmer bewerten ihr Lebenswerk emotional statt objektiv. Sie berücksichtigen die jahrelange harte Arbeit und persönliche Opfer – Faktoren, die für Käufer irrelevant sind.
            </p>
            <blockquote>
              <p>
                &ldquo;Eine professionelle Unternehmensbewertung ist keine Ausgabe, sondern eine Investition. Im Durchschnitt erzielen unsere Kunden durch unser anonymes Bieterverfahren 35% höhere Verkaufspreise.&rdquo;
              </p>
            </blockquote>
            <p>
              <strong>Die Lösung:</strong> Lassen Sie eine objektive Bewertung nach internationalen Standards (IFRS, IDW S1) durchführen. Diese berücksichtigt alle relevanten Faktoren: Ertragskraft, Marktposition, Zukunftspotenzial und Branchenvergleiche.
            </p>
            
            <h2>2. Mangelnde Vorbereitung der Due Diligence</h2>
            <p>
              Viele Verkäufer unterschätzen den Umfang und die Bedeutung der Due Diligence. Fehlende oder unvollständige Unterlagen führen zu Verzögerungen, Preisabschlägen oder sogar zum Abbruch der Verhandlungen.
            </p>
            <ul>
              <li>Jahresabschlüsse der letzten 3-5 Jahre</li>
              <li>Aktuelle BWA und Liquiditätsplanung</li>
              <li>Verträge mit Kunden und Lieferanten</li>
              <li>Arbeitsverträge und Pensionszusagen</li>
              <li>Patente, Markenrechte und Lizenzen</li>
              <li>Immobilien- und Leasingverträge</li>
            </ul>
            <p>
              <strong>Die Lösung:</strong> Beginnen Sie mindestens 6-12 Monate vor dem geplanten Verkauf mit der Vorbereitung. Erstellen Sie einen virtuellen Datenraum mit allen relevanten Dokumenten. Dies beschleunigt den Prozess und schafft Vertrauen beim Käufer.
            </p>
            
            <h2>3. Vernachlässigung der operativen Performance</h2>
            <p>
              Ein fataler Fehler ist es, das operative Geschäft während des Verkaufsprozesses zu vernachlässigen. Rückläufige Zahlen während der Verhandlungen sind ein rotes Tuch für jeden Käufer und führen zu drastischen Preisreduktionen.
            </p>
            <p>
              <strong>Die Lösung:</strong> Der beste Zeitpunkt für einen Verkauf ist, wenn das Unternehmen gut läuft. Nutzen Sie unseren MEHRWERT-Ansatz zur operativen Wertsteigerung vor dem Verkauf. Digitalisierung, Prozessoptimierung und Effizienzsteigerung können den Unternehmenswert um 20-40% steigern.
            </p>
            
            <h2>4. Fehlende Diskretion und Vertraulichkeit</h2>
            <p>
              Werden Verkaufsabsichten zu früh bekannt, kann dies verheerende Folgen haben: Mitarbeiter kündigen, Kunden wechseln zur Konkurrenz, Lieferanten werden nervös. Der Unternehmenswert kann innerhalb weniger Wochen drastisch sinken.
            </p>
            <blockquote>
              <p>
                &ldquo;Unser anonymes Bieterverfahren garantiert 100% Diskretion. Ihre Identität wird erst nach Unterzeichnung einer Vertraulichkeitsvereinbarung und Ihrer ausdrücklichen Zustimmung preisgegeben.&rdquo;
              </p>
            </blockquote>
            <p>
              <strong>Die Lösung:</strong> Arbeiten Sie mit erfahrenen M&A-Beratern, die diskrete Prozesse etabliert haben. Informieren Sie Mitarbeiter und andere Stakeholder erst, wenn der Verkauf sicher ist.
            </p>
            
            <h2>5. Emotionale statt strategische Entscheidungen</h2>
            <p>
              Der Verkauf des eigenen Unternehmens ist emotional. Viele Unternehmer treffen Entscheidungen aus dem Bauch heraus: Sie wählen den sympathischsten statt den besten Käufer oder lehnen gute Angebote ab, weil der Abschied schwerfällt.
            </p>
            <p>
              <strong>Die Lösung:</strong> Definieren Sie klare Ziele und Kriterien für den Verkauf. Was ist Ihnen wichtiger: Maximaler Preis? Erhalt der Arbeitsplätze? Fortführung der Unternehmenskultur? Ein erfahrener Berater hilft Ihnen, objektive Entscheidungen zu treffen.
            </p>
            
            <h2>Fazit: Professionelle Begleitung zahlt sich aus</h2>
            <p>
              Ein Unternehmensverkauf ist komplex und fehleranfällig. Die gute Nachricht: Alle diese Fehler sind vermeidbar. Mit der richtigen Vorbereitung, professioneller Begleitung und einem strukturierten Prozess maximieren Sie nicht nur den Verkaufspreis, sondern minimieren auch Risiken und Stress.
            </p>
            <p>
              Bei der SONNTAG AG haben wir in über 25 Jahren mehr als 300 Unternehmensverkäufe erfolgreich begleitet. Unser bewährtes System aus anonymem Bieterverfahren (MARKTWERT) und operativer Wertsteigerung (MEHRWERT) garantiert optimale Ergebnisse.
            </p>
            
            <div className="mt-12 rounded-lg bg-gray-50 p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Bereit für den nächsten Schritt?</h3>
              <p className="text-gray-600 mb-6">
                Vereinbaren Sie ein kostenloses Erstgespräch und erfahren Sie, wie wir den Wert Ihres Unternehmens maximieren können.
              </p>
              <Link href="/kontakt" className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                Kostenloses Erstgespräch vereinbaren
              </Link>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Weitere Artikel</h3>
            <div className="grid gap-8 sm:grid-cols-2">
              <Link href="/blog/wertsteigerung-vor-verkauf" className="group">
                <article className="flex flex-col">
                  <p className="text-sm text-gray-500 mb-2">8. August 2024</p>
                  <h4 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 mb-2">
                    Wertsteigerung vor dem Verkauf: Der MEHRWERT-Ansatz
                  </h4>
                  <p className="text-sm text-gray-600">
                    Wie Sie den Wert Ihres Unternehmens vor dem Verkauf um 20-40% steigern können.
                  </p>
                </article>
              </Link>
              
              <Link href="/blog/anonymes-bieterverfahren" className="group">
                <article className="flex flex-col">
                  <p className="text-sm text-gray-500 mb-2">1. August 2024</p>
                  <h4 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 mb-2">
                    Anonymes Bieterverfahren: Revolution im Mittelstand
                  </h4>
                  <p className="text-sm text-gray-600">
                    Erfahren Sie, warum Diskretion und Wettbewerb zu höheren Verkaufspreisen führen.
                  </p>
                </article>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}