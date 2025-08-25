# SONNTAG AG Website - Product Requirements Document (PRD)

## 📋 **Document Overview**
- **Project**: SONNTAG AG Website Rebuild
- **Version**: 1.0
- **Date**: December 19, 2024
- **Status**: Ready for Implementation
- **Priority**: High Revenue Impact (€100,000+ potential)

---

## 🎯 **Executive Summary**

### **Business Objective**
Rebuild SONNTAG AG's website to capture high-value emergency M&A opportunities in Gießen/Mittelhessen, focusing on urgent business succession scenarios with immediate revenue potential.

### **Success Metrics**
- **Revenue Target**: €100,000+ in first year
- **Implementation Timeline**: 12 weeks
- **ROI Focus**: Emergency services (€50,000-100,000 potential)
- **Market Position**: Establish local dominance in specialized M&A services

---

## 📊 **Current Status Analysis**

### **Files Status Summary**
Based on `sonntag-ag-website-files.csv`:

| Category | Total | Created | Template Needed | Priority |
|----------|-------|---------|-----------------|----------|
| **Main Pages** | 6 | 3 | 3 | High |
| **SEO - Emergency** | 5 | 1 | 4 | High |
| **SEO - Problems** | 5 | 0 | 5 | Medium |
| **SEO - Services** | 5 | 1 | 4 | Medium |
| **SEO - Locations** | 4 | 0 | 4 | Low |
| **SEO - Commercial** | 4 | 0 | 4 | Low |

**Total Files**: 29  
**Created**: 5 (17%)  
**Templates Needed**: 24 (83%)

---

## 🚀 **Implementation Roadmap**

### **Phase 1: Foundation & Emergency Services (Weeks 1-2)**
**Priority**: CRITICAL - Immediate Revenue Impact

#### **Week 1: Core Foundation**
- [ ] **Project Setup**
  - [ ] Initialize Next.js 14 project structure
  - [ ] Configure Tailwind CSS with SONNTAG design system
  - [ ] Set up TypeScript and ESLint
  - [ ] Configure SEO foundation (meta tags, structured data)

- [ ] **Core Pages (High Priority)**
  - [ ] `/leistungen` (Services) - Template needed
  - [ ] `/transaktionen` (Transactions) - Template needed  
  - [ ] `/kontakt` (Contact) - Template needed

#### **Week 2: Emergency Services (High Revenue)**
- [ ] **Emergency Service Pages**
  - [ ] `/notverkauf-unternehmen-giessen` ✅ Created
  - [ ] `/schneller-unternehmensverkauf-giessen` - Template needed
  - [ ] `/firma-sofort-verkaufen-giessen` - Template needed
  - [ ] `/dringend-nachfolger-gesucht-giessen` - Template needed
  - [ ] `/eiliger-geschaeftsverkauf-mittelhessen` - Template needed

**Expected Impact**: €50,000-100,000 revenue potential

---

### **Phase 2: Core Services & Problem Solutions (Weeks 3-4)**
**Priority**: HIGH - Core Business Services

#### **Week 3: Core Services**
- [ ] **Service Pages**
  - [ ] `/mehrwert-unternehmen-giessen` ✅ Created
  - [ ] `/m-a-beratung-giessen` ✅ Created
  - [ ] `/unternehmensbewertung-giessen` - Template needed
  - [ ] `/due-diligence-beratung-giessen` - Template needed
  - [ ] `/nachfolgeberatung-mittelstand-giessen` - Template needed

#### **Week 4: Problem-Based Solutions**
- [ ] **Problem Solution Pages**
  - [ ] `/unternehmensnachfolge-ohne-nachfolger-giessen` - Template needed
  - [ ] `/firma-verkaufen-ohne-gewinn-giessen` - Template needed
  - [ ] `/keine-nachkommen-unternehmensnachfolge-giessen` - Template needed
  - [ ] `/kranker-geschaeftsfuehrer-nachfolge-giessen` - Template needed
  - [ ] `/altersbedingte-geschaeftsaufgabe-giessen` - Template needed

**Expected Impact**: €25,000-50,000 revenue potential

---

### **Phase 3: Market Expansion & Locations (Weeks 5-8)**
**Priority**: MEDIUM - Market Coverage

#### **Week 5-6: Location Expansion**
- [ ] **Location-Specific Pages**
  - [ ] `/ma-beratung-giessen-marburg` - Template needed
  - [ ] `/unternehmensnachfolge-wetzlar-giessen` - Template needed
  - [ ] `/unternehmensverkauf-lahn-dill-kreis` - Template needed
  - [ ] `/nachfolgeberatung-mittelhessen` - Template needed

#### **Week 7-8: Commercial & Pricing**
- [ ] **Commercial Intent Pages**
  - [ ] `/unternehmensverkauf-preis-giessen` - Template needed
  - [ ] `/ma-berater-kosten-giessen` - Template needed
  - [ ] `/nachfolgeberatung-honorar-giessen` - Template needed
  - [ ] `/kostenlose-erstberatung-ma-giessen` - Template needed

**Expected Impact**: €15,000-30,000 revenue potential

---

### **Phase 4: Optimization & Niche Targeting (Weeks 9-12)**
**Priority**: LOWER - Long-term Growth

#### **Week 9-10: Advanced Services**
- [ ] **Specialized Services**
  - [ ] `/anonymes-bieterverfahren-giessen` - Template needed
  - [ ] Industry-specific service pages
  - [ ] Case study showcases

#### **Week 11-12: Conversion Optimization**
- [ ] **Performance & Conversion**
  - [ ] A/B testing implementation
  - [ ] Conversion funnel optimization
  - [ ] Performance monitoring setup
  - [ ] SEO performance analysis

**Expected Impact**: €10,000-25,000 revenue potential

---

## 🏗️ **Technical Architecture**

### **Component Structure**
```
src/
├── app/                     # Next.js 14 App Router
│   ├── (main)/             # Main page group
│   │   ├── page.tsx        # Homepage
│   │   ├── leistungen/     # Services
│   │   ├── transaktionen/  # Transactions
│   │   ├── ueber-uns/      # About Us
│   │   ├── team/           # Team
│   │   └── kontakt/        # Contact
│   ├── notverkauf-unternehmen-giessen/  # Emergency service
│   ├── seo-pages/          # SEO landing pages
│   │   ├── emergency/      # High-priority emergency pages
│   │   ├── problems/       # Problem-solution pages
│   │   ├── services/       # Service-specific pages
│   │   ├── locations/      # Location-based pages
│   │   └── commercial/     # Commercial intent pages
│   └── layout.tsx          # Root layout
├── components/              # UI components
│   ├── ui/                 # Atomic design components
│   ├── features/           # Feature-based components
│   └── layouts/            # Page layouts
└── lib/                    # Utilities and helpers
```

### **Page Template Structure**
Each SEO page should follow this structure:
```typescript
// Template structure for all SEO pages
interface SEOPageTemplate {
  // SEO metadata
  title: string
  description: string
  keywords: string[]
  
  // Content sections
  hero: HeroSection
  problem: ProblemSection
  solution: SolutionSection
  services: ServicesSection
  cta: CTASection
  
  // Local SEO
  location: string
  service: string
  urgency: 'emergency' | 'problem' | 'service'
}
```

---

## 🎨 **Design System Requirements**

### **Color Palette (Strict)**
```typescript
const SONNTAG_DESIGN_SYSTEM = {
  // Primary colors (main components)
  white: '#FFFFFF',        // Primary backgrounds
  black: '#000000',        // Primary text
  
  // Gray scale (depth and hierarchy)
  gray: {
    50: '#F8F9FA',        // Subtle backgrounds
    100: '#E9ECEF',       // Light borders
    200: '#DEE2E6',       // Medium borders
    300: '#CED4DA',       // Dark borders
    400: '#ADB5BD',       // Secondary text
    500: '#6C757D',       // Muted text
    600: '#495057',       // Strong text
    700: '#343A40',       // Headings
    800: '#212529',       // Dark text
  },
  
  // Brand accents (CTAs only)
  sonntagBlue: '#1e3a8a',  // Primary CTA buttons
  sonntagGold: '#f59e0b',  // Secondary CTAs
}
```

### **Component Adaptation Rules**
1. **Preserve Original Structure**: Keep Tailwind CSS Plus components exactly as downloaded
2. **Color Substitution Only**: Replace colors with white/black variants
3. **Typography**: Maintain original font weights and sizes
4. **Spacing**: Keep original layout proportions
5. **Interactions**: Preserve all hover states and animations

---

## 📱 **Responsive Design Requirements**

### **Breakpoint Strategy**
```typescript
// Mobile-first approach
const BREAKPOINTS = {
  mobile: '320px',      // Base mobile
  sm: '640px',          // Small tablets
  md: '768px',          // Tablets
  lg: '1024px',         // Desktop
  xl: '1280px',         // Large desktop
  '2xl': '1536px',      // Extra large
}
```

### **Component Responsiveness**
- All components must be mobile-first
- Progressive enhancement for larger screens
- Touch-friendly interactions on mobile
- Optimized images for all screen sizes

---

## ♿ **Accessibility Requirements**

### **WCAG 2.1 AA Compliance**
- **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **ARIA Labels**: Comprehensive accessibility markup
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader**: Optimized for assistive technologies

### **Localization Requirements**
- **Language**: German primary, English secondary
- **Content**: Culturally appropriate for German business context
- **Addresses**: German postal format and regional references

---

## 🔍 **SEO Requirements**

### **Technical SEO**
- **Meta Tags**: Optimized titles and descriptions for each page
- **Structured Data**: JSON-LD markup for local business and services
- **Internal Linking**: Strategic internal link structure
- **Performance**: Core Web Vitals optimization
- **Mobile**: Mobile-first indexing compliance

### **Local SEO (Gießen/Mittelhessen)**
- **Google My Business**: Optimized local listings
- **Local Keywords**: Region-specific keyword targeting
- **Local Content**: Gießen-specific business references
- **Regional Authority**: Establish local market dominance

### **Keyword Strategy**
```typescript
const KEYWORD_PRIORITIES = {
  emergency: {
    priority: 'HIGH',
    volume: 'High',
    competition: 'Low',
    revenue: '€50,000-100,000',
    examples: [
      'notverkauf unternehmen giessen',
      'schneller unternehmensverkauf',
      'firma sofort verkaufen'
    ]
  },
  problems: {
    priority: 'MEDIUM',
    volume: 'Medium',
    competition: 'Medium',
    revenue: '€25,000-50,000',
    examples: [
      'unternehmensnachfolge ohne nachfolger',
      'firma verkaufen ohne gewinn'
    ]
  },
  services: {
    priority: 'MEDIUM',
    volume: 'Medium',
    competition: 'Medium',
    revenue: '€15,000-30,000',
    examples: [
      'ma berater giessen',
      'unternehmensbewertung giessen'
    ]
  }
}
```

---

## 📊 **Performance Requirements**

### **Core Web Vitals Targets**
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### **Page Load Performance**
- **Homepage**: < 3s on 3G connection
- **Service Pages**: < 4s on 3G connection
- **SEO Landing Pages**: < 3s on 3G connection

### **Image Optimization**
- **Format**: WebP with fallback to JPEG
- **Sizing**: Responsive images for all breakpoints
- **Lazy Loading**: Implement for all non-critical images
- **CDN**: Optimize delivery for German market

---

## 🧪 **Testing Requirements**

### **Component Testing**
- **Unit Tests**: All components must have unit tests
- **Integration Tests**: Page-level integration testing
- **Visual Regression**: Maintain design consistency
- **Accessibility Testing**: Automated a11y compliance

### **Performance Testing**
- **Lighthouse**: Regular performance audits
- **Real User Monitoring**: Track actual user performance
- **Load Testing**: Ensure stability under traffic
- **SEO Testing**: Regular SEO performance checks

---

## 📅 **Implementation Timeline**

### **Detailed Week-by-Week Schedule**

| Week | Phase | Focus | Deliverables | Revenue Impact |
|------|-------|-------|--------------|----------------|
| **1** | Foundation | Core pages, project setup | 3 main pages, project structure | Foundation |
| **2** | Emergency | Emergency service pages | 5 emergency pages | €50K-100K |
| **3** | Core Services | Service pages | 5 service pages | €25K-50K |
| **4** | Problems | Problem-solution pages | 5 problem pages | €25K-50K |
| **5-6** | Locations | Location expansion | 4 location pages | €15K-30K |
| **7-8** | Commercial | Pricing and commercial | 4 commercial pages | €15K-30K |
| **9-10** | Advanced | Specialized services | Advanced features | €10K-25K |
| **11-12** | Optimization | Performance and conversion | Optimization and testing | €10K-25K |

**Total Timeline**: 12 weeks  
**Total Revenue Potential**: €100,000+  
**ROI Focus**: Emergency services (Weeks 1-2)

---

## 🎯 **Success Criteria**

### **Phase 1 Success (Weeks 1-2)**
- [ ] All emergency service pages live
- [ ] Core technical SEO foundation established
- [ ] Mobile-responsive design implemented
- [ ] Local SEO optimization for Gießen

### **Phase 2 Success (Weeks 3-4)**
- [ ] All core service pages live
- [ ] Problem-solution content published
- [ ] Internal linking structure established
- [ ] Conversion tracking implemented

### **Phase 3 Success (Weeks 5-8)**
- [ ] Location expansion complete
- [ ] Commercial content published
- [ ] Performance optimization achieved
- [ ] Local market dominance established

### **Phase 4 Success (Weeks 9-12)**
- [ ] Advanced features implemented
- [ ] Conversion optimization complete
- [ ] Performance monitoring active
- [ ] SEO performance optimized

---

## 🚨 **Risk Mitigation**

### **Technical Risks**
- **Risk**: Component adaptation complexity
- **Mitigation**: Follow established Cursor rules and component adaptation process
- **Risk**: Performance degradation
- **Mitigation**: Regular performance audits and optimization

### **Business Risks**
- **Risk**: Delayed implementation
- **Mitigation**: Focus on emergency services first (highest revenue impact)
- **Risk**: SEO competition
- **Mitigation**: First-mover advantage in local market

---

## 📋 **Next Steps**

### **Immediate Actions (This Week)**
1. **Review and approve this PRD**
2. **Set up development environment**
3. **Begin Phase 1 implementation**
4. **Establish weekly review cadence**

### **Week 1 Deliverables**
- [ ] Project structure setup
- [ ] Core pages implementation
- [ ] SEO foundation configuration
- [ ] Component library setup

### **Success Metrics Tracking**
- **Weekly**: Development progress and page completion
- **Bi-weekly**: SEO performance and traffic metrics
- **Monthly**: Revenue impact and conversion rates
- **Quarterly**: Full project ROI assessment

---

## 🔗 **Related Documents**

- **Cursor Rules**: `.cursorrules` - Main development standards
- **UI Blocks Rules**: `.cursorrules-ui-blocks` - Component adaptation
- **Component Manifest**: `src/components/ui-blocks/manifest.json`
- **Component Index**: `src/components/ui-blocks/COMPONENT-INDEX.md`
- **Project README**: `README.md` - Project overview

---

*This PRD provides a comprehensive roadmap for building the SONNTAG AG website with clear priorities, timelines, and success criteria. The focus on emergency services in Phase 1 maximizes immediate revenue potential while establishing the foundation for long-term growth.*
