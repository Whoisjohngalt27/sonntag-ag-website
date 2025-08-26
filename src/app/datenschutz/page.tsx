import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | SONNTAG AG',
  description: 'Datenschutzerklärung der SONNTAG AG Corporate Finance gemäß DSGVO. Informationen zum Schutz Ihrer persönlichen Daten.',
  openGraph: {
    title: 'Datenschutzerklärung | SONNTAG AG',
    description: 'Datenschutzerklärung der SONNTAG AG Corporate Finance gemäß DSGVO.',
    type: 'website',
  },
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section className="bg-blue-50 p-6 rounded-lg">
            <p className="text-lg">
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre 
              Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). 
              In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der 
              Datenverarbeitung im Rahmen unserer Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Verantwortlicher
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-2">
                <strong>Verantwortlich für die Datenverarbeitung:</strong>
              </p>
              <p className="mb-2">
                SONNTAG AG Corporate Finance<br />
                Schützenstraße 10<br />
                35390 Gießen<br />
                Deutschland
              </p>
              <p className="mb-2">
                <strong>Telefon:</strong> +49 (0) 641 96 99 83 70<br />
                <strong>E-Mail:</strong> datenschutz@sonntag-ag.com<br />
                <strong>Website:</strong> www.sonntag-ag.com
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Datenschutzbeauftragter
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-2">
                Bei Fragen zum Datenschutz können Sie sich jederzeit an unseren Datenschutzbeauftragten wenden:
              </p>
              <p className="mb-2">
                <strong>E-Mail:</strong> datenschutz@sonntag-ag.com<br />
                <strong>Telefon:</strong> +49 (0) 641 96 99 83 70
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Datenerfassung auf unserer Website
            </h2>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
              <h3 className="text-xl font-semibold mb-3">3.1 Server-Log-Dateien</h3>
              <p className="mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
                Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="mb-2">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen)
              </p>
              <p>
                <strong>Zweck:</strong> Gewährleistung eines reibungslosen Verbindungsaufbaus der Website, 
                Gewährleistung einer komfortablen Nutzung unserer Website, Auswertung der Systemsicherheit 
                und -stabilität sowie zu weiteren administrativen Zwecken.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
              <h3 className="text-xl font-semibold mb-3">3.2 Cookies</h3>
              <p className="mb-4">
                Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die mit 
                Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an.
              </p>
              <p className="mb-4">
                Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies 
                bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, 
                Ihren Browser beim nächsten Besuch wiederzuerkennen.
              </p>
              <p className="mb-4">
                <strong>Cookie-Kategorien:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Notwendige Cookies:</strong> Diese Cookies sind erforderlich, damit die Website ordnungsgemäß funktioniert.</li>
                <li><strong>Funktionale Cookies:</strong> Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung.</li>
                <li><strong>Analyse-Cookies:</strong> Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.</li>
                <li><strong>Marketing-Cookies:</strong> Diese Cookies werden verwendet, um Besuchern relevante Werbung zu zeigen.</li>
              </ul>
              <p className="mb-2">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
              </p>
              <p>
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert 
                werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte 
                Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen 
                des Browsers aktivieren.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
              <h3 className="text-xl font-semibold mb-3">3.3 Kontaktformular</h3>
              <p className="mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
              <p className="mb-4">
                <strong>Verarbeitete Daten:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Name und Vorname</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer (optional)</li>
                <li>Firma (optional)</li>
                <li>Nachrichteninhalt</li>
                <li>Zeitpunkt der Übermittlung</li>
              </ul>
              <p className="mb-2">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) oder 
                Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen)
              </p>
              <p className="mb-2">
                <strong>Speicherdauer:</strong> Die Daten werden gelöscht, sobald sie für die Erreichung 
                des Zweckes ihrer Erhebung nicht mehr erforderlich sind, spätestens jedoch nach 6 Monaten.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">3.4 Newsletter</h3>
              <p className="mb-4">
                Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von 
                Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, 
                dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des 
                Newsletters einverstanden sind.
              </p>
              <p className="mb-4">
                <strong>Double-Opt-In-Verfahren:</strong> Nach Ihrer Anmeldung erhalten Sie eine 
                Bestätigungs-E-Mail, in der Sie Ihre Anmeldung bestätigen müssen.
              </p>
              <p className="mb-2">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
              </p>
              <p className="mb-2">
                <strong>Widerruf:</strong> Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie 
                den Newsletter abbestellen. Hierfür findet sich in jedem Newsletter ein entsprechender Link.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Analyse-Tools
            </h2>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">4.1 Google Analytics</h3>
              <p className="mb-4">
                Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited 
                (&quot;Google&quot;). Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website 
                durch Sie ermöglichen.
              </p>
              <p className="mb-4">
                <strong>IP-Anonymisierung:</strong> Wir haben auf dieser Website die Funktion 
                IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von 
                Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens 
                über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt.
              </p>
              <p className="mb-2">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
              </p>
              <p className="mb-2">
                <strong>Opt-Out:</strong> Sie können die Speicherung der Cookies durch eine entsprechende 
                Einstellung Ihrer Browser-Software verhindern. Sie können darüber hinaus die Erfassung 
                der durch den Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten an Google 
                sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das 
                <a href="https://tools.google.com/dlpage/gaoptout?hl=de" className="text-sonntagBlue hover:underline" target="_blank" rel="noopener noreferrer">
                  {" "}Browser-Add-On{" "}
                </a>
                herunterladen und installieren.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Soziale Medien
            </h2>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">5.1 LinkedIn</h3>
              <p className="mb-4">
                Auf unserer Website sind Funktionen des Dienstes LinkedIn eingebunden. Diese Funktionen 
                werden angeboten durch die LinkedIn Ireland Unlimited Company, Wilton Plaza, Wilton Place, 
                Dublin 2, Irland.
              </p>
              <p className="mb-2">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen)
              </p>
              <p>
                Weitere Informationen zum Datenschutz bei LinkedIn finden Sie unter:
                <a href="https://www.linkedin.com/legal/privacy-policy" className="text-sonntagBlue hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                  LinkedIn Datenschutzerklärung
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Ihre Rechte
            </h2>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                Ihnen stehen grundsätzlich folgende Rechte zu:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-4">
                <li>
                  <strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das Recht, Auskunft über 
                  Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen.
                </li>
                <li>
                  <strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Sie haben das Recht, unverzüglich 
                  die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten 
                  personenbezogenen Daten zu verlangen.
                </li>
                <li>
                  <strong>Löschungsrecht (Art. 17 DSGVO):</strong> Sie haben das Recht, die Löschung 
                  Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen.
                </li>
                <li>
                  <strong>Einschränkungsrecht (Art. 18 DSGVO):</strong> Sie haben das Recht, die 
                  Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                </li>
                <li>
                  <strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre 
                  personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format 
                  zu erhalten.
                </li>
                <li>
                  <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, aus Gründen, 
                  die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie 
                  betreffender personenbezogener Daten Widerspruch einzulegen.
                </li>
                <li>
                  <strong>Widerrufsrecht (Art. 7 Abs. 3 DSGVO):</strong> Sie haben das Recht, Ihre 
                  einmal erteilte Einwilligung jederzeit zu widerrufen.
                </li>
              </ul>
              <p>
                Zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte unter datenschutz@sonntag-ag.com.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Beschwerderecht
            </h2>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die 
                DSGVO verstößt, haben Sie das Recht, Beschwerde bei einer Aufsichtsbehörde einzulegen.
              </p>
              <p className="mb-4">
                <strong>Zuständige Aufsichtsbehörde für Hessen:</strong>
              </p>
              <p className="mb-2">
                Der Hessische Beauftragte für Datenschutz und Informationsfreiheit<br />
                Gustav-Stresemann-Ring 1<br />
                65189 Wiesbaden<br />
                Deutschland
              </p>
              <p>
                <strong>Telefon:</strong> +49 611 1408 - 0<br />
                <strong>E-Mail:</strong> poststelle@datenschutz.hessen.de<br />
                <strong>Website:</strong> 
                <a href="https://datenschutz.hessen.de" className="text-sonntagBlue hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                  datenschutz.hessen.de
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Datensicherheit
            </h2>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket 
                Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser 
                unterstützt wird. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile 
                des Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem Schloss-Symbol in Ihrer 
                Browserzeile.
              </p>
              <p>
                Wir bedienen uns geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um 
                Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen 
                Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen. Unsere 
                Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Aktualität und Änderung dieser Datenschutzerklärung
            </h2>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2025.
              </p>
              <p>
                Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter 
                gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese 
                Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit 
                auf der Website unter www.sonntag-ag.com/datenschutz von Ihnen abgerufen und ausgedruckt 
                werden.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}