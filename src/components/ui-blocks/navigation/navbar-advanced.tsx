'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, ArrowTrendingUpIcon, ClockIcon, ShieldCheckIcon, ChartBarIcon } from '@heroicons/react/20/solid'

const leistungen = [
  { 
    name: 'MARKTWERT', 
    description: 'Anonymes Bieterverfahren für maximalen Verkaufspreis', 
    href: '/leistungen#marktwert', 
    icon: ChartBarIcon 
  },
  { 
    name: 'MEHRWERT', 
    description: 'Wertsteigerung vor dem Verkauf', 
    href: '/leistungen#mehrwert', 
    icon: ArrowTrendingUpIcon 
  },
  { 
    name: 'M&A Beratung', 
    description: 'Professionelle Begleitung von A bis Z', 
    href: '/m-a-beratung-giessen', 
    icon: ShieldCheckIcon 
  },
  { 
    name: 'Notverkauf', 
    description: 'Schnelle Lösung in dringenden Fällen', 
    href: '/notverkauf-unternehmen-giessen', 
    icon: ClockIcon 
  },
]

const callsToAction = [
  { name: 'Kostenlose Erstberatung', href: '/kontakt', icon: PhoneIcon },
]

const unternehmen = [
  { name: 'Über uns', href: '/ueber-uns' },
  { name: 'Team', href: '/team' },
  { name: 'Transaktionen', href: '/transaktionen' },
  { name: 'Blog', href: '/blog' },
  { name: 'Referenzen', href: '/referenzen' },
]

export default function NavbarAdvanced() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
        
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className="text-sm font-semibold text-gray-700 hover:text-black transition-colors">
            Home
          </Link>
          
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-gray-700 hover:text-black transition-colors">
              Leistungen
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {leistungen.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-black" />
                    </div>
                    <div className="flex-auto">
                      <Link href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50">
                {callsToAction.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link href="/transaktionen" className="text-sm font-semibold text-gray-700 hover:text-black transition-colors">
            Transaktionen
          </Link>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-gray-700 hover:text-black transition-colors">
              Unternehmen
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-56 -translate-x-1/2 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              {unternehmen.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
            </PopoverPanel>
          </Popover>

          <Link href="/kontakt" className="text-sm font-semibold text-gray-700 hover:text-black transition-colors">
            Kontakt
          </Link>
        </PopoverGroup>
        
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
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base font-semibold text-gray-900 hover:bg-gray-50">
                    Leistungen
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
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
                  </DisclosurePanel>
                </Disclosure>

                <Link
                  href="/transaktionen"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Transaktionen
                </Link>

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base font-semibold text-gray-900 hover:bg-gray-50">
                    Unternehmen
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
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
                  </DisclosurePanel>
                </Disclosure>

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
        </DialogPanel>
      </Dialog>
    </header>
  )
}