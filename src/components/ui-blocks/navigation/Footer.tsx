'use client';

import Link from 'next/link';

/**
 * Footer Component for SONNTAG AG
 * 
 * Clean, professional footer with contact info, quick links, and trust signals.
 * Uses white/black theme following design system guidelines.
 * Structure based on Tailwind CSS patterns, adapted for SONNTAG AG.
 */

const navigation = {
  services: [
    { name: 'Notverkauf Unternehmen', href: '/notverkauf-unternehmen-giessen' },
    { name: 'M&A Beratung', href: '/m-a-beratung-giessen' },
    { name: 'Wertsteigerung (MEHRWERT)', href: '/mehrwert-unternehmen-giessen' },
    { name: 'Unternehmensbewertung', href: '/unternehmensbewertung-giessen' },
  ],
  company: [
    { name: 'Über uns', href: '/ueber-uns' },
    { name: 'Team', href: '/team' },
    { name: 'Transaktionen', href: '/transaktionen' },
    { name: 'Kontakt', href: '/kontakt' },
  ],
  legal: [
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
    { name: 'AGB', href: '/agb' },
    { name: 'Cookie-Einstellungen', href: '#' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company Info Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black">SONNTAG AG</h3>
              <p className="mt-2 text-sm text-gray-600">
                Wir verkaufen keine Unternehmen. Wir sichern Lebenswerke.
              </p>
            </div>
            
            {/* Trust Signals */}
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-black">25+</span>
                <span className="ml-2 text-sm text-gray-600">Jahre Erfahrung</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-black">500+</span>
                <span className="ml-2 text-sm text-gray-600">Erfolgreiche Verkäufe</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-black">100%</span>
                <span className="ml-2 text-sm text-gray-600">Diskret & Anonym</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-black">Kontakt</p>
              <div className="text-sm text-gray-600">
                <p>Grünberger Str. 148</p>
                <p>35394 Gießen</p>
                <p className="mt-2">
                  <a href="tel:+4964120103700" className="hover:text-black transition-colors">
                    +49 (0) 641 201 037 00
                  </a>
                </p>
                <p>
                  <a href="mailto:service@sonnt-ag.com" className="hover:text-black transition-colors">
                    service@sonnt-ag.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-black">Leistungen</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-black">Unternehmen</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-black">Rechtliches</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-black transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Emergency CTA Section */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="rounded-lg bg-gray-50 p-6 text-center">
            <h3 className="text-lg font-semibold text-black">
              Dringend Unternehmen verkaufen?
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              24h Notfall-Hotline für eilige Unternehmensverkäufe
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+4964120103700"
                className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
              >
                Jetzt anrufen
              </a>
              <Link
                href="/notverkauf-unternehmen-giessen"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-200 pt-8 sm:mt-16 lg:mt-20">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">
              &copy; {currentYear} SONNTAG AG. Alle Rechte vorbehalten.
            </p>
            <p className="mt-2 sm:mt-0 text-xs text-gray-500">
              Marktführer für Unternehmensnachfolge im deutschen Mittelstand
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
