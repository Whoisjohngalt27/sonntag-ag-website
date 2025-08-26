import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen | SONNTAG AG',
  description: 'Allgemeine Geschäftsbedingungen der SONNTAG AG Corporate Finance für M&A-Beratung und Unternehmensnachfolge.',
  openGraph: {
    title: 'AGB | SONNTAG AG',
    description: 'Allgemeine Geschäftsbedingungen der SONNTAG AG Corporate Finance.',
    type: 'website',
  },
};

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Allgemeine Geschäftsbedingungen</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section className="bg-blue-50 p-6 rounded-lg">
            <p className="text-lg">
              Die nachfolgenden Allgemeinen Geschäftsbedingungen (AGB) regeln die Geschäftsbeziehung 
              zwischen der SONNTAG AG Corporate Finance (nachfolgend &quot;SONNTAG AG&quot; oder &quot;wir&quot;) und unseren 
              Kunden (nachfolgend &quot;Auftraggeber&quot; oder &quot;Sie&quot;) für alle von uns erbrachten Beratungsleistungen 
              im Bereich Mergers & Acquisitions und Unternehmensnachfolge.
            </p>
            <p className="text-sm mt-4">
              <strong>Stand:</strong> Januar 2025
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              § 1 Geltungsbereich
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                (1) Diese Allgemeinen Geschäftsbedingungen gelten für alle gegenwärtigen und zukünftigen 
                Geschäftsbeziehungen zwischen der SONNTAG AG und dem Auftraggeber.
              </p>
              <p className="mb-4">
                (2) Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des 
                Auftraggebers werden, selbst bei Kenntnis, nicht Vertragsbestandteil, es sei denn, ihrer 
                Geltung wird ausdrücklich schriftlich zugestimmt.
              </p>
              <p>
                (3) Diese AGB gelten nur gegenüber Unternehmern im Sinne des § 14 BGB, juristischen 
                Personen des öffentlichen Rechts und öffentlich-rechtlichen Sondervermögen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              § 2 Vertragsgegenstand und Leistungsumfang
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                (1) Die SONNTAG AG erbringt Beratungsleistungen in den Bereichen:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Mergers & Acquisitions (M&A)</li>
                <li>Unternehmensnachfolge</li>
                <li>Unternehmensverkauf und -kauf</li>
                <li>Unternehmensbewertung</li>
                <li>Due Diligence</li>
                <li>Strategische Unternehmensberatung</li>
              </ul>
              <p className="mb-4">
                (2) Art und Umfang der zu erbringenden Leistungen ergeben sich aus dem jeweiligen 
                Beratungsvertrag oder der Auftragsbestätigung.
              </p>
              <p className="mb-4">
                (3) Die SONNTAG AG erbringt ihre Leistungen nach den Grundsätzen ordnungsgemäßer 
                Berufsausübung mit der Sorgfalt eines ordentlichen Kaufmanns.
              </p>
              <p>
                (4) Die SONNTAG AG ist berechtigt, zur Erfüllung ihrer vertraglichen Pflichten Dritte 
                (Subunternehmer) einzusetzen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              § 3 Vertragsschluss
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                (1) Unsere Angebote sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich 
                als verbindlich gekennzeichnet sind oder eine bestimmte Annahmefrist enthalten.
              </p>
              <p className="mb-4">
                (2) Der Vertrag kommt durch Unterzeichnung des Beratungsvertrags durch beide Parteien 
                oder durch schriftliche Auftragsbestätigung der SONNTAG AG zustande.
              </p>
              <p>
                (3) Mündliche Nebenabreden bestehen nicht. Änderungen und Ergänzungen bedürfen der 
                Schriftform.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              § 4 Mitwirkungspflichten des Auftraggebers
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                (1) Der Auftraggeber ist verpflichtet, die SONNTAG AG bei der Erbringung ihrer Leistungen 
                angemessen zu unterstützen und alle zur ordnungsgemäßen Auftragsausführung notwendigen 
                Informationen und Unterlagen rechtzeitig, vollständig und kostenfrei zur Verfügung zu stellen.
              </p>
              <p className="mb-4">
                (2) Der Auftraggeber steht für die Richtigkeit und Vollständigkeit der von ihm zur 
                Verfügung gestellten Informationen und Unterlagen ein.
              </p>
              <p className="mb-4">
                (3) Der Auftraggeber wird die SONNTAG AG unverzüglich über alle Umstände informieren, 
                die für die Durchführung des Auftrags von Bedeutung sein können.
              </p>
              <p>
                (4) Verzögerungen oder Mehraufwand, die durch unzureichende Mitwirkung des Auftraggebers 
                entstehen, gehen zu dessen Lasten.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              § 5 Vergütung und Zahlungsbedingungen
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                (1) Die Vergütung der SONNTAG AG richtet sich nach der jeweiligen Vereinbarung im 
                Beratungsvertrag. Sofern keine Vereinbarung getroffen wurde, gelten unsere aktuellen 
                Stundensätze.
              </p>
              <p className="mb-4">
                (2) Erfolgsabhängige Vergütungen werden mit Eintritt des definierten Erfolgsfalls fällig.
              </p>
              <p className="mb-4">
                (3) Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer.
              </p>
              <p className="mb-4">
                (4) Reisekosten, Spesen und sonstige Auslagen werden nach Aufwand gesondert berechnet.
              </p>
              <p className="mb-4">
                (5) Rechnungen der SONNTAG AG sind innerhalb von 14 Tagen nach Rechnungsstellung ohne 
                Abzug zahlbar.
              </p>
              <p>
                (6) Bei Zahlungsverzug sind wir berechtigt, Verzugszinsen in Höhe von 9 Prozentpunkten 
                über dem Basiszinssatz zu verlangen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              § 6 Vertraulichkeit
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                (1) Die SONNTAG AG verpflichtet sich, alle im Rahmen der Geschäftsbeziehung erlangten 
                vertraulichen Informationen des Auftraggebers streng vertraulich zu behandeln und nur 
                für die Zwecke der Auftragserfüllung zu verwenden.
              </p>
              <p className="mb-4">
                (2) Die Vertraulichkeitsverpflichtung gilt nicht für Informationen, die:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>allgemein bekannt sind oder werden, ohne dass die SONNTAG AG dies zu vertreten hat</li>
                <li>der SONNTAG AG bereits bekannt waren</li>
                <li>von Dritten rechtmäßig mitgeteilt wurden</li>
                <li>aufgrund gesetzlicher Vorschriften oder behördlicher Anordnungen offengelegt werden müssen</li>
              </ul>
              <p>
                (3) Die Vertraulichkeitsverpflichtung besteht auch nach Beendigung des Vertragsverhältnisses 
                für einen Zeitraum von fünf Jahren fort.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              § 7 Haftung
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                (1) Die SONNTAG AG haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des 
                Körpers oder der Gesundheit sowie für Schäden, die auf Vorsatz oder grober Fahrlässigkeit 
                beruhen.
              </p>
              <p className="mb-4">
                (2) Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten ist die Haftung auf 
                den vorhersehbaren, vertragstypischen Schaden begrenzt.
              </p>
              <p className="mb-4">
                (3) Die Haftung für mittelbare Schäden und Folgeschäden, insbesondere entgangenen Gewinn, 
                ist ausgeschlossen, soweit nicht vorsätzliches oder grob fahrlässiges Handeln vorliegt.
              </p>
              <p className="mb-4">
                (4) Die Haftung der SONNTAG AG ist der Höhe nach auf die vereinbarte Vergütung, maximal 
                jedoch auf 1 Million Euro begrenzt, es sei denn, es liegt Vorsatz oder grobe Fahrlässigkeit vor.
              </p>
              <p>
                (5) Schadensersatzansprüche verjähren innerhalb eines Jahres ab Kenntnis des Schadens, 
                spätestens jedoch drei Jahre nach Erbringung der Leistung.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              § 8 Kündigung
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                (1) Beratungsverträge können von beiden Parteien mit einer Frist von drei Monaten zum 
                Monatsende ordentlich gekündigt werden.
              </p>
              <p className="mb-4">
                (2) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. 
                Ein wichtiger Grund liegt insbesondere vor bei:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>erheblicher Verletzung vertraglicher Pflichten</li>
                <li>Zahlungsverzug trotz Mahnung</li>
                <li>Eröffnung eines Insolvenzverfahrens</li>
              </ul>
              <p className="mb-4">
                (3) Jede Kündigung bedarf der Schriftform.
              </p>
              <p>
                (4) Bei Kündigung hat die SONNTAG AG Anspruch auf Vergütung der bis dahin erbrachten 
                Leistungen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              § 9 Referenznennung
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                (1) Die SONNTAG AG ist berechtigt, den Auftraggeber und die Art der erbrachten Leistung 
                als Referenz zu nennen, sofern der Auftraggeber dem nicht ausdrücklich widerspricht.
              </p>
              <p>
                (2) Details der Transaktion oder vertrauliche Informationen werden ohne ausdrückliche 
                Zustimmung des Auftraggebers nicht veröffentlicht.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              § 10 Datenschutz
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                (1) Die SONNTAG AG verarbeitet personenbezogene Daten des Auftraggebers gemäß den 
                Bestimmungen der EU-Datenschutzgrundverordnung (DSGVO) und des Bundesdatenschutzgesetzes 
                (BDSG).
              </p>
              <p>
                (2) Weitere Informationen zur Datenverarbeitung finden Sie in unserer Datenschutzerklärung 
                unter www.sonntag-ag.com/datenschutz.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              § 11 Compliance und Geldwäscheprävention
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                (1) Die SONNTAG AG verpflichtet sich zur Einhaltung aller anwendbaren gesetzlichen 
                Bestimmungen, insbesondere zur Geldwäscheprävention und Terrorismusfinanzierung.
              </p>
              <p className="mb-4">
                (2) Der Auftraggeber ist verpflichtet, die zur Erfüllung der gesetzlichen Pflichten 
                erforderlichen Informationen und Nachweise zur Verfügung zu stellen.
              </p>
              <p>
                (3) Bei Verdacht auf Geldwäsche oder Terrorismusfinanzierung ist die SONNTAG AG berechtigt, 
                die Geschäftsbeziehung mit sofortiger Wirkung zu beenden.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              § 12 Schlussbestimmungen
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                (1) Für diese AGB und alle Rechtsbeziehungen zwischen der SONNTAG AG und dem Auftraggeber 
                gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
              </p>
              <p className="mb-4">
                (2) Erfüllungsort für alle Leistungen ist Gießen.
              </p>
              <p className="mb-4">
                (3) Ausschließlicher Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit 
                diesem Vertrag ist Gießen, sofern der Auftraggeber Kaufmann, juristische Person des 
                öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
              </p>
              <p className="mb-4">
                (4) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so berührt dies 
                die Wirksamkeit der übrigen Bestimmungen nicht.
              </p>
              <p>
                (5) Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform. Dies gilt auch für 
                die Abbedingung des Schriftformerfordernisses.
              </p>
            </div>
          </section>

          <section className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Kontakt bei Fragen zu unseren AGB
            </h2>
            <p className="mb-2">
              Bei Fragen zu unseren Allgemeinen Geschäftsbedingungen wenden Sie sich bitte an:
            </p>
            <p className="mb-2">
              <strong>SONNTAG AG Corporate Finance</strong><br />
              Schützenstraße 10<br />
              35390 Gießen
            </p>
            <p>
              <strong>E-Mail:</strong> <a href="mailto:info@sonntag-ag.com" className="text-sonntagBlue hover:underline">info@sonntag-ag.com</a><br />
              <strong>Telefon:</strong> <a href="tel:+4964196998370" className="text-sonntagBlue hover:underline">+49 (0) 641 96 99 83 70</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}