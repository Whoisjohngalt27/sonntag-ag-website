import { ContactForm } from './ContactForm'
import { ContactInfo } from './ContactInfo'

export interface ContactSectionProps {
  className?: string
}

export function ContactSection({ className = '' }: ContactSectionProps) {
  return (
    <section className={`py-24 bg-gray-50 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  )
}