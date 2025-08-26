/**
 * Component: BlogSection
 * Feature: Homepage blog posts display
 * Extracted from: app/page.tsx (lines 663-724)
 */

import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { BlogSectionProps } from './BlogSection.types'

const defaultBlogPosts = [
  {
    id: 1,
    title: 'Die 5 häufigsten Fehler beim Unternehmensverkauf',
    href: '/blog/fehler-unternehmensverkauf',
    description:
      'Erfahren Sie, welche kritischen Fehler Unternehmer beim Verkauf ihrer Firma machen und wie Sie diese vermeiden können. Von falscher Bewertung bis zu emotionalen Entscheidungen.',
    date: '15. Aug 2024',
    datetime: '2024-08-15',
    category: { title: 'M&A Beratung', href: '#' },
    author: {
      name: 'Thomas Sonntag',
      role: 'Vorstand MARKTWERT',
      href: '/team#thomas-sonntag',
      initials: 'TS',
    },
  },
  {
    id: 2,
    title: 'Wertsteigerung vor dem Verkauf: Der MEHRWERT-Ansatz',
    href: '/blog/wertsteigerung-vor-verkauf',
    description: 'Wie Sie den Wert Ihres Unternehmens vor dem Verkauf um 20-40% steigern können. Praktische Tipps aus 14 Jahren Erfahrung.',
    date: '8. Aug 2024',
    datetime: '2024-08-08',
    category: { title: 'Wertsteigerung', href: '#' },
    author: {
      name: 'Prof. Dr. Bastian Heinemann',
      role: 'Vorstand MEHRWERT',
      href: '/team#bastian-heinemann',
      initials: 'BH',
    },
  },
  {
    id: 3,
    title: 'Anonymes Bieterverfahren: Revolution im Mittelstand',
    href: '/blog/anonymes-bieterverfahren',
    description:
      'Das anonyme Bieterverfahren hat den Unternehmensverkauf im deutschen Mittelstand revolutioniert. Erfahren Sie, warum Diskretion und Wettbewerb zu höheren Verkaufspreisen führen.',
    date: '1. Aug 2024',
    datetime: '2024-08-01',
    category: { title: 'Unternehmensnachfolge', href: '#' },
    author: {
      name: 'Thomas Sonntag',
      role: 'Vorstand MARKTWERT',
      href: '/team#thomas-sonntag',
      initials: 'TS',
    },
  },
]

export function BlogSection(props: BlogSectionProps = {}) {
  const {
    title = 'Aus unserem Expertenblog',
    subtitle = 'Einblicke, Tipps und Strategien für erfolgreiche Unternehmensnachfolge.',
    posts = defaultBlogPosts,
    showViewAll = true,
    viewAllText = 'Alle Artikel ansehen',
    viewAllHref = '/blog',
    className = ''
  } = props

  return (
    <section className={`bg-white py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
            {title}
          </h2>
          <p className="mt-3 text-lg text-gray-600 font-light">
            {subtitle}
          </p>
        </div>
        
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 border-t border-gray-200 pt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between transition-all duration-200 hover:transform hover:-translate-y-1">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-200 transition-colors duration-200"
                >
                  {post.category.title}
                </a>
              </div>
              
              <div className="group relative grow">
                <h3 className="mt-3 text-lg font-medium text-gray-900 group-hover:text-gray-600 leading-snug">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm text-gray-600 leading-relaxed">
                  {post.description}
                </p>
              </div>
              
              <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                <div className="size-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-600">{post.author.initials}</span>
                </div>
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {showViewAll && (
          <div className="mt-12 text-center">
            <Link
              href={viewAllHref}
              className="inline-flex items-center text-base font-medium text-black hover:text-gray-700 transition-all duration-200 hover:translate-x-2"
            >
              {viewAllText}
              <ChevronRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}