# Sonntag AG Technical SEO Requirements

## 🔧 **Current Technical Status Assessment**

### **✅ Strengths**
- **Framework:** Astro 4.0 (excellent for SEO and performance)
- **Styling:** Tailwind CSS (optimized CSS delivery)
- **Structure:** Clean, semantic HTML structure
- **Performance:** Fast loading times with Astro's static generation

### **❌ Critical Gaps**
- **Meta Tags:** Missing title, description, and Open Graph tags
- **Structured Data:** No schema markup for local business
- **Sitemap:** Missing XML sitemap for search engines
- **Robots.txt:** No search engine crawling instructions
- **Internal Linking:** Limited strategic page connections
- **Image Optimization:** No alt tags or lazy loading

## 🎯 **Technical SEO Implementation Requirements**

### **1. Meta Tags & Open Graph (Critical Priority)**

#### **Required Meta Tags for Each Page:**
```html
<!-- Primary Meta Tags -->
<title>Primary Keyword + Location | Sonntag AG</title>
<meta name="description" content="Compelling description with primary keyword and call-to-action">
<meta name="keywords" content="keyword1, keyword2, keyword3">

<!-- Open Graph Tags -->
<meta property="og:title" content="Primary Keyword + Location | Sonntag AG">
<meta property="og:description" content="Compelling description with primary keyword">
<meta property="og:image" content="https://sonntag-ag.com/og-image.jpg">
<meta property="og:url" content="https://sonntag-ag.com/page-url">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Sonntag AG">

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Primary Keyword + Location | Sonntag AG">
<meta name="twitter:description" content="Compelling description with primary keyword">
<meta name="twitter:image" content="https://sonntag-ag.com/twitter-image.jpg">
```

#### **Page-Specific Meta Tag Examples:**

**Emergency Services Page:**
```html
<title>Notverkauf Unternehmen Gießen | Schneller Unternehmensverkauf | Sonntag AG</title>
<meta name="description" content="Dringend Unternehmen verkaufen in Gießen? Sonntag AG - Ihr Experte für schnellen Unternehmensverkauf in Mittelhessen. 25 Jahre Erfahrung. Jetzt kostenlos beraten lassen!">
```

**Value Optimization Page:**
```html
<title>Mehrwert Unternehmen Gießen | Wertsteigerung vor Verkauf | Sonntag AG</title>
<meta name="description" content="Unternehmenswert steigern vor dem Verkauf in Gießen? Sonntag AG begleitet Sie bei der Wertoptimierung. 14 Jahre Expertise. Kostenlose Erstberatung!">
```

### **2. Structured Data & Schema Markup (Critical Priority)**

#### **Organization Schema (Homepage):**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sonntag AG",
  "alternateName": "Sonntag Aktiengesellschaft",
  "url": "https://sonntag-ag.com",
  "logo": "https://sonntag-ag.com/logo.png",
  "description": "Marktführer für Unternehmensnachfolge und Wertsteigerung im deutschen Mittelstand",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Grünberger Str. 148",
    "addressLocality": "Gießen",
    "postalCode": "35394",
    "addressCountry": "DE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+49-641-201-037-00",
    "contactType": "customer service",
    "email": "service@sonnt-ag.com"
  },
  "sameAs": [
    "https://www.linkedin.com/company/sonntag-ag",
    "https://www.xing.com/companies/sonntag-ag"
  ]
}
```

#### **Local Business Schema (All Service Pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Sonntag AG",
  "image": "https://sonntag-ag.com/office.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Grünberger Str. 148",
    "addressLocality": "Gießen",
    "postalCode": "35394",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "50.5853",
    "longitude": "8.6755"
  },
  "url": "https://sonntag-ag.com",
  "telephone": "+49-641-201-037-00",
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "€€€",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "50.5853",
      "longitude": "8.6755"
    },
    "geoRadius": "50000"
  }
}
```

#### **Service Schema (Service Pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Unternehmensnachfolge Beratung",
  "description": "Professionelle Beratung bei der Unternehmensnachfolge in Gießen und Mittelhessen",
  "provider": {
    "@type": "Organization",
    "name": "Sonntag AG"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Gießen, Mittelhessen, Hessen"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "M&A Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "MARKTWERT - Anonymes Bieterverfahren"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "MEHRWERT - Wertsteigerung vor Verkauf"
        }
      }
    ]
  }
}
```

### **3. Sitemap & Robots.txt (High Priority)**

#### **XML Sitemap (`/public/sitemap.xml`):**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://sonntag-ag.com/</loc>
    <lastmod>2024-12-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://sonntag-ag.com/notverkauf-unternehmen-giessen</loc>
    <lastmod>2024-12-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://sonntag-ag.com/mehrwert-unternehmen-giessen</loc>
    <lastmod>2024-12-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://sonntag-ag.com/m-a-beratung-giessen</loc>
    <lastmod>2024-12-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://sonntag-ag.com/unternehmensnachfolge-giessen</loc>
    <lastmod>2024-12-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://sonntag-ag.com/preise-beratung</loc>
    <lastmod>2024-12-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://sonntag-ag.com/referenzen-projekte</loc>
    <lastmod>2024-12-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://sonntag-ag.com/team-expertise</loc>
    <lastmod>2024-12-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://sonntag-ag.com/about</loc>
    <lastmod>2024-12-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://sonntag-ag.com/contact</loc>
    <lastmod>2024-12-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
```

#### **Robots.txt (`/public/robots.txt`):**
```txt
User-agent: *
Allow: /

# Sitemap
Sitemap: https://sonntag-ag.com/sitemap.xml

# Disallow admin or private areas (if any)
Disallow: /admin/
Disallow: /private/

# Allow all search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /
```

### **4. Internal Linking Strategy (Medium Priority)**

#### **Navigation Structure:**
```html
<!-- Primary Navigation -->
<nav>
  <ul>
    <li><a href="/">Startseite</a></li>
    <li><a href="/notverkauf-unternehmen-giessen">Notverkauf</a></li>
    <li><a href="/mehrwert-unternehmen-giessen">Mehrwert</a></li>
    <li><a href="/m-a-beratung-giessen">M&A Beratung</a></li>
    <li><a href="/referenzen-projekte">Referenzen</a></li>
    <li><a href="/contact">Kontakt</a></li>
  </ul>
</nav>
```

#### **Cross-Page Linking:**
- **Emergency Services → Value Optimization:** "Vor dem Verkauf: Wertsteigerung mit MEHRWERT"
- **Value Optimization → M&A Services:** "Nächster Schritt: Professionelle M&A Beratung"
- **All Service Pages → Case Studies:** "Erfolgsgeschichten unserer Kunden"
- **All Pages → Contact:** "Kostenlose Erstberatung anfordern"

### **5. Image Optimization (Medium Priority)**

#### **Alt Tag Requirements:**
```html
<!-- Logo Images -->
<img src="/marktwert-logo.png" alt="MARKTWERT Logo - Anonymes Bieterverfahren für Unternehmensverkauf in Gießen" />

<!-- Team Photos -->
<img src="/bastian-heinemann.jpg" alt="Prof. Dr. Bastian Heinemann - Vorstand Sonntag AG, Experte für Wertsteigerung und M&A Beratung in Gießen" />

<!-- Service Images -->
<img src="/service-process.jpg" alt="Unternehmensverkauf Prozess - Von der Bewertung bis zum erfolgreichen Abschluss in Gießen" />
```

#### **Lazy Loading Implementation:**
```html
<img src="/image.jpg" alt="Description" loading="lazy" />
```

### **6. Performance Optimization (Medium Priority)**

#### **Critical CSS Inlining:**
```html
<style>
  /* Critical above-the-fold CSS */
  .hero-section { /* styles */ }
  .primary-cta { /* styles */ }
</style>
```

#### **Resource Preloading:**
```html
<!-- Preload critical resources -->
<link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/hero-image.jpg" as="image">

<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

## 🚀 **Implementation Priority & Timeline**

### **Week 1: Critical Technical Foundation**
- [ ] Implement meta tags for all existing pages
- [ ] Add structured data (Organization + Local Business)
- [ ] Create sitemap.xml and robots.txt
- [ ] Set up Google Search Console

### **Week 2: Enhanced Technical SEO**
- [ ] Add service-specific structured data
- [ ] Implement internal linking strategy
- [ ] Optimize image alt tags
- [ ] Add Open Graph and Twitter Card tags

### **Week 3-4: Performance & Advanced SEO**
- [ ] Implement lazy loading for images
- [ ] Add resource preloading
- [ ] Optimize critical CSS delivery
- [ ] Monitor Core Web Vitals

## 📊 **Technical SEO Success Metrics**

### **Immediate Goals (Week 1-2):**
- **Meta Tags:** 100% coverage across all pages
- **Structured Data:** Valid schema markup for all pages
- **Sitemap:** Proper XML sitemap with all URLs
- **Search Console:** Proper indexing and crawling

### **Short-term Goals (Week 3-4):**
- **Internal Linking:** Strategic connections between all pages
- **Image Optimization:** 100% alt tag coverage
- **Performance:** Core Web Vitals in green
- **Mobile Optimization:** Perfect mobile experience

### **Long-term Goals (Month 2-3):**
- **Search Visibility:** Improved search result appearance
- **Click-through Rates:** Enhanced SERP click-through
- **Technical Errors:** Zero technical SEO issues
- **Performance:** Sub-2 second loading times

## 🔍 **Technical SEO Monitoring**

### **Required Tools:**
- **Google Search Console:** Indexing and performance monitoring
- **Google PageSpeed Insights:** Performance optimization
- **Schema.org Validator:** Structured data validation
- **Mobile-Friendly Test:** Mobile optimization
- **Rich Results Test:** Rich snippet testing

### **Weekly Monitoring Tasks:**
- Check Search Console for indexing issues
- Monitor Core Web Vitals performance
- Validate structured data markup
- Test page loading speeds
- Review internal linking effectiveness

---

**Document Version:** 1.0  
**Last Updated:** December 2024  
**Technical Implementation Start:** Week 1  
**Next Review:** Weekly during implementation
