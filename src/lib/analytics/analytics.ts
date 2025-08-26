declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'set',
      targetId: string,
      config?: Record<string, any>
    ) => void
    dataLayer?: any[]
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID!, {
      page_path: url,
    })
  }
}

interface EventParams {
  action: string
  category: string
  label?: string
  value?: number
  [key: string]: any
}

export const event = ({ action, category, label, value, ...otherParams }: EventParams) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      ...otherParams,
    })
  }
}

// Conversion tracking for contact form submissions
export const trackContactFormSubmission = (formData: {
  source?: string
  urgency?: string
  company?: string
  service?: string
}) => {
  event({
    action: 'generate_lead',
    category: 'Contact',
    label: formData.source || 'Unknown',
    value: formData.urgency === 'emergency' ? 100 : formData.urgency === 'urgent' ? 50 : 10,
    form_source: formData.source,
    urgency_level: formData.urgency,
    has_company: !!formData.company,
  })

  // Also track as a conversion event
  event({
    action: 'conversion',
    category: 'Contact Form',
    label: 'Form Submission',
    send_to: GA_MEASUREMENT_ID,
  })
}

// Track phone clicks
export const trackPhoneClick = (phoneNumber: string, location: string) => {
  event({
    action: 'click',
    category: 'Phone',
    label: location,
    phone_number: phoneNumber,
  })
}

// Track emergency page views (high-value pages)
export const trackEmergencyPageView = (pageName: string) => {
  event({
    action: 'page_view',
    category: 'Emergency Pages',
    label: pageName,
    value: 50, // High value for emergency pages
  })
}

// Track document downloads
export const trackDownload = (fileName: string, fileType: string) => {
  event({
    action: 'download',
    category: 'Resources',
    label: fileName,
    file_type: fileType,
  })
}

// Track CTA clicks
export const trackCTAClick = (ctaName: string, location: string) => {
  event({
    action: 'cta_click',
    category: 'Engagement',
    label: `${ctaName} - ${location}`,
  })
}

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  event({
    action: 'scroll',
    category: 'Engagement',
    label: `${percentage}%`,
    value: percentage,
  })
}

// Track time on page
export const trackTimeOnPage = (seconds: number, pageName: string) => {
  event({
    action: 'time_on_page',
    category: 'Engagement',
    label: pageName,
    value: seconds,
  })
}