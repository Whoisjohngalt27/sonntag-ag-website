export interface ContactMapProps {
  className?: string
}

export function ContactMap({ className = '' }: ContactMapProps) {
  return (
    <section className={`py-24 bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black sm:text-4xl">
            Unser Büro in Gießen
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Strategisch gelegen im Herzen Hessens
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2529.847!2d8.6821!3d50.5869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGr%C3%BCnberger%20Str.%20148%2C%2035394%20Gie%C3%9Fen!5e0!3m2!1sde!2sde!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SONNTAG AG Standort"
              className="w-full h-96"
            />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-black mb-4">Anfahrt & Parken</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">📍 Adresse</h4>
                <p className="text-gray-600">
                  Grünberger Str. 148<br />
                  35394 Gießen<br />
                  Deutschland
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">🚗 Mit dem Auto</h4>
                <p className="text-gray-600">
                  Über die A485, Ausfahrt Gießen-Ost<br />
                  Kostenlose Parkplätze direkt vor dem Gebäude
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">🚌 Öffentliche Verkehrsmittel</h4>
                <p className="text-gray-600">
                  Bushaltestelle &ldquo;Grünberger Straße&rdquo; (Linien 1, 5, 11)<br />
                  5 Minuten Fußweg vom Bahnhof Gießen
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">🕐 Öffnungszeiten</h4>
                <p className="text-gray-600">
                  Montag - Freitag: 9:00 - 18:00 Uhr<br />
                  Samstag: Nach Vereinbarung<br />
                  <span className="text-red-600 font-semibold">24/7 Notfall-Hotline</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}