import { HTMLAttributes, ReactNode } from 'react'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * Heading level
   * @default 'h2'
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  
  /**
   * Visual size variant
   * @default 'default'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
  
  /**
   * Text alignment
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right'
  
  /**
   * Font weight
   * @default 'semibold'
   */
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
  
  /**
   * Text color
   * @default 'gray-900'
   */
  color?: 'gray-900' | 'gray-700' | 'gray-600' | 'gray-500' | 'white'
  
  /**
   * Content
   */
  children: ReactNode
  
  /**
   * Additional CSS classes
   */
  className?: string
}

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * Text size
   * @default 'base'
   */
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
  
  /**
   * Text alignment
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right' | 'justify'
  
  /**
   * Font weight
   * @default 'normal'
   */
  weight?: 'light' | 'normal' | 'medium' | 'semibold'
  
  /**
   * Text color
   * @default 'gray-600'
   */
  color?: 'gray-900' | 'gray-700' | 'gray-600' | 'gray-500' | 'gray-400' | 'white'
  
  /**
   * Line height variant
   * @default 'normal'
   */
  leading?: 'tight' | 'normal' | 'relaxed'
  
  /**
   * Content
   */
  children: ReactNode
  
  /**
   * Additional CSS classes
   */
  className?: string
}

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  /**
   * Label size
   * @default 'sm'
   */
  size?: 'xs' | 'sm' | 'base'
  
  /**
   * Text transform
   * @default 'none'
   */
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize'
  
  /**
   * Text color
   * @default 'gray-700'
   */
  color?: 'gray-900' | 'gray-700' | 'gray-600' | 'gray-500'
  
  /**
   * Font weight
   * @default 'medium'
   */
  weight?: 'normal' | 'medium' | 'semibold'
  
  /**
   * Required field indicator
   * @default false
   */
  required?: boolean
  
  /**
   * Content
   */
  children: ReactNode
  
  /**
   * Additional CSS classes
   */
  className?: string
  
  /**
   * HTML for attribute
   */
  htmlFor?: string
}