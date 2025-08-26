'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function NavbarWithDropdown() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [leistungenOpen, setLeistungenOpen] = useState(false)
  const [unternehmenOpen, setUnternehmenOpen] = useState(false)

  const leistungen = [
    { name: 'MARKTWERT', href: '/leistungen#marktwert' },
    { name: 'MEHRWERT', href: '/leistungen#mehrwert' },
    { name: 'M&A Beratung', href: '/m-a-beratung-giessen' },
    { name: 'Notverkauf', href: '/notverkauf-unternehmen-giessen' },
    { name: 'Prozess', href: '/prozess' },
    { name: 'FAQ', href: '/faq' },
  ]

  const unternehmen = [
    { name: 'Über uns', href: '/ueber-uns' },
    { name: 'Team', href: '/team' },
    { name: 'Blog', href: '/blog' },
    { name: 'Referenzen', href: '/referenzen' },
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">SONNTAG AG</span>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">S</span>
              </div>
              <span className="text-xl font-bold text-black">SONNTAG AG</span>
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Hauptmenü öffnen</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className="text-sm font-semibold text-gray-700 hover:text-black transition-colors">
            Home
          </Link>
          
          {/* Leistungen Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-x-1 text-sm font-semibold text-gray-700 hover:text-black transition-colors"
              onMouseEnter={() => setLeistungenOpen(true)}
              onMouseLeave={() => setLeistungenOpen(false)}
            >
              Leistungen
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </button>

            {leistungenOpen && (
              <div
                className="absolute left-0 z-10 mt-3 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                onMouseEnter={() => setLeistungenOpen(true)}
                onMouseLeave={() => setLeistungenOpen(false)}
              >
                <div className="py-1">
                  {leistungen.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/transaktionen" className="text-sm font-semibold text-gray-700 hover:text-black transition-colors">
            Transaktionen
          </Link>

          <Link href="/unternehmensbewertung-rechner" className="text-sm font-semibold text-gray-700 hover:text-black transition-colors">
            Firmenwert-Rechner
          </Link>

          {/* Unternehmen Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-x-1 text-sm font-semibold text-gray-700 hover:text-black transition-colors"
              onMouseEnter={() => setUnternehmenOpen(true)}
              onMouseLeave={() => setUnternehmenOpen(false)}
            >
              Unternehmen
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </button>

            {unternehmenOpen && (
              <div
                className="absolute left-0 z-10 mt-3 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                onMouseEnter={() => setUnternehmenOpen(true)}
                onMouseLeave={() => setUnternehmenOpen(false)}
              >
                <div className="py-1">
                  {unternehmen.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/kontakt" className="text-sm font-semibold text-gray-700 hover:text-black transition-colors">
            Kontakt
          </Link>
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link 
            href="/kontakt" 
            className="text-sm font-semibold text-white bg-black hover:bg-gray-800 px-4 py-2 rounded-md transition-colors"
          >
            Beratung anfragen
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">SONNTAG AG</span>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">S</span>
                </div>
                <span className="text-xl font-bold text-black">SONNTAG AG</span>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Menü schließen</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                
                <div className="-mx-3">
                  <div className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base font-semibold text-gray-900">
                    Leistungen
                  </div>
                  <div className="mt-2 space-y-2">
                    {leistungen.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/transaktionen"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Transaktionen
                </Link>

                <Link
                  href="/unternehmensbewertung-rechner"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Firmenwert-Rechner
                </Link>

                <div className="-mx-3">
                  <div className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base font-semibold text-gray-900">
                    Unternehmen
                  </div>
                  <div className="mt-2 space-y-2">
                    {unternehmen.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/kontakt"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kontakt
                </Link>
              </div>
              
              <div className="py-6">
                <Link
                  href="/kontakt"
                  className="block rounded-lg bg-black px-3 py-2.5 text-center text-base font-semibold text-white hover:bg-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Beratung anfragen
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}