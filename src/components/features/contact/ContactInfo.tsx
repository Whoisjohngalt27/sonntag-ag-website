export interface ContactInfoProps {
  className?: string
}

export function ContactInfo({ className = '' }: ContactInfoProps) {
  return (
    <div className={`space-y-8 ${className}`}>
      <div>
        <h2 className="text-2xl font-bold text-black mb-6">
          Sprechen Sie mit uns
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Wir sind für Sie da und freuen uns darauf, von Ihnen zu hören. 
          Vereinbaren Sie ein unverbindliches Gespräch.
        </p>
      </div>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black mb-1">Adresse</h3>
            <p className="text-gray-600">
              SONNTAG AG<br />
              M&A Beratung<br />
              Grünberger Str. 148<br />
              35394 Gießen<br />
              Deutschland
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black mb-1">Telefon</h3>
            <p className="text-gray-600">
              <a href="tel:+4964120103700" className="hover:text-black transition-colors">
                +49 (0) 641 201 037 00
              </a><br />
              Mo-Fr: 9:00 - 18:00 Uhr<br />
              <span className="text-sm text-red-600 font-semibold">24/7 Notfall-Hotline verfügbar</span>
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black mb-1">E-Mail</h3>
            <p className="text-gray-600">
              <a href="mailto:service@sonntag-ag.com" className="hover:text-black transition-colors">
                service@sonntag-ag.com
              </a><br />
              <a href="mailto:beratung@sonntag-ag.com" className="hover:text-black transition-colors">
                beratung@sonntag-ag.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black mb-1">WhatsApp Business</h3>
            <p className="text-gray-600">
              <a href="https://wa.me/4964120103700" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
                +49 (0) 641 201 037 00
              </a><br />
              <span className="text-sm">Schnelle Kommunikation per Chat</span>
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-black mb-3">
          Warum eine Erstberatung?
        </h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• Kostenlose und unverbindliche Analyse</li>
          <li>• Einschätzung Ihrer aktuellen Situation</li>
          <li>• Erste Handlungsempfehlungen</li>
          <li>• Kennenlernen unseres Teams</li>
          <li>• Klarheit über nächste Schritte</li>
        </ul>
      </div>
    </div>
  )
}