/**
 * Type definitions for BlogSection component
 */

export interface BlogSectionProps {
  title?: string
  subtitle?: string
  posts?: BlogPost[]
  showViewAll?: boolean
  viewAllText?: string
  viewAllHref?: string
  className?: string
}

export interface BlogPost {
  id: number | string
  title: string
  href: string
  description: string
  date: string
  datetime: string
  category: {
    title: string
    href: string
  }
  author: {
    name: string
    role: string
    href: string
    initials: string
  }
}