import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum | SONNTAG AG',
  description: 'Rechtliche Informationen und Angaben gemäß § 5 TMG zur SONNTAG AG Corporate Finance.',
  openGraph: {
    title: 'Impressum | SONNTAG AG',
    description: 'Rechtliche Informationen und Angaben gemäß § 5 TMG zur SONNTAG AG Corporate Finance.',
    type: 'website',
  },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-2">
                <strong>SONNTAG AG Corporate Finance</strong>
              </p>
              <p className="mb-2">
                Schützenstraße 10<br />
                35390 Gießen<br />
                Deutschland
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Kontakt
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-2">
                <strong>Telefon:</strong> <a href="tel:+4964196998370" className="text-sonntagBlue hover:underline">+49 (0) 641 96 99 83 70</a>
              </p>
              <p className="mb-2">
                <strong>E-Mail:</strong> <a href="mailto:info@sonntag-ag.com" className="text-sonntagBlue hover:underline">info@sonntag-ag.com</a>
              </p>
              <p className="mb-2">
                <strong>Internet:</strong> <a href="https://www.sonntag-ag.com" className="text-sonntagBlue hover:underline">www.sonntag-ag.com</a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Vertretungsberechtigter Vorstand
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-2">
                <strong>Thomas Sonntag</strong> (Vorstandsvorsitzender)
              </p>
              <p className="mb-2">
                <strong>Bastian Heinemann</strong> (Vorstand)
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Registereintrag
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-2">
                <strong>Eintragung im Handelsregister</strong>
              </p>
              <p className="mb-2">
                Registergericht: Amtsgericht Gießen<br />
                Registernummer: HRB 10957
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-2">
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                <strong>DE 334 958 211</strong>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Aufsichtsbehörde
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-2">
                <strong>Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin)</strong>
              </p>
              <p className="mb-2">
                Graurheindorfer Straße 108<br />
                53117 Bonn<br />
                Deutschland
              </p>
              <p className="mb-2">
                Marie-Curie-Straße 24-28<br />
                60439 Frankfurt am Main<br />
                Deutschland
              </p>
              <p className="mb-2">
                <strong>BaFin-Registernummer:</strong> 10139170
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Berufshaftpflichtversicherung
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-2">
                <strong>Name und Sitz des Versicherers:</strong>
              </p>
              <p className="mb-2">
                Allianz Versicherungs-AG<br />
                Königinstraße 28<br />
                80802 München<br />
                Deutschland
              </p>
              <p className="mb-2">
                <strong>Geltungsbereich:</strong> Deutschland, Europa
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Berufsrechtliche Regelungen
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                Die berufsrechtlichen Regelungen, die für die SONNTAG AG gelten, sind:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gewerbeordnung (GewO)</li>
                <li>Gesetz über die Vermittlung von Versicherungsverträgen (VersVermG)</li>
                <li>Versicherungsvermittlungsverordnung (VersVermV)</li>
                <li>Wertpapierhandelsgesetz (WpHG)</li>
                <li>Kreditwesengesetz (KWG)</li>
              </ul>
              <p className="mt-4">
                Diese Regelungen können eingesehen werden unter:<br />
                <a href="https://www.gesetze-im-internet.de" className="text-sonntagBlue hover:underline" target="_blank" rel="noopener noreferrer">
                  www.gesetze-im-internet.de
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Streitschlichtung
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              </p>
              <p className="mb-4">
                <a href="https://ec.europa.eu/consumers/odr/" className="text-sonntagBlue hover:underline" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mb-4">
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              <p className="mb-4">
                <strong>Verbraucherstreitbeilegung/Universalschlichtungsstelle:</strong>
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Haftung für Inhalte
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
                erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend 
                entfernen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Haftung für Links
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf 
                mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung 
                nicht erkennbar.
              </p>
              <p>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete 
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen 
                werden wir derartige Links umgehend entfernen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Urheberrecht
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
                nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="mb-4">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die 
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche 
                gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, 
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen 
                werden wir derartige Inhalte umgehend entfernen.
              </p>
              <p>
                <strong>Stand:</strong> Januar 2025
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}