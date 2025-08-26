# SONNTAG AG Website - Project Intelligence Document

## 🎯 Project Overview
**Client**: SONNTAG AG  
**Type**: M&A Advisory Website  
**Stack**: Next.js 14, TypeScript, Tailwind CSS  
**Status**: Phase 2 Complete - Core Features Implemented  
**Last Updated**: January 26, 2025

---

## 📁 Project Structure

```
src/
├── app/                      # Next.js app directory
│   ├── api/                 # API routes (contact, valuation)
│   ├── blog/                # Blog system with articles
│   ├── kontakt/             # Contact page
│   ├── leistungen/          # Services page
│   ├── referenzen/          # References page
│   ├── team/                # Team page
│   └── [emergency-pages]/   # 7 emergency service pages
├── components/
│   ├── features/            # Feature-specific components
│   │   ├── blog/           # Blog components
│   │   ├── contact/        # Contact form & sections
│   │   ├── hero/           # Hero sections
│   │   ├── services/       # Service components
│   │   └── team/           # Team components
│   └── ui/                 # Design system
│       ├── atoms/          # Basic components
│       ├── molecules/      # Composite components
│       └── organisms/      # Complex components
└── lib/
    ├── analytics/          # GA4 tracking
    ├── data/              # Static data
    └── utils/             # Utilities
```

---

## ✅ Completed Features

### Phase 1: Foundation (Complete)
- ✅ Next.js 14 setup with TypeScript
- ✅ Tailwind CSS configuration
- ✅ Component architecture
- ✅ Basic routing structure

### Phase 2: Core Implementation (Complete)
- ✅ Homepage with all sections
- ✅ Navigation with mobile menu
- ✅ Contact page with enhanced form:
  - Service selection dropdown
  - Urgency levels
  - Preferred contact method
  - WhatsApp integration
- ✅ Services page (/leistungen)
- ✅ Team page with bios
- ✅ References page with testimonials
- ✅ Blog system:
  - Blog listing page
  - 3 full blog articles
  - Cross-linking between posts
- ✅ Company value calculator
- ✅ 7 emergency service pages
- ✅ API routes for contact and valuation

### Recent Improvements
- ✅ Fixed all build errors
- ✅ Enhanced contact form with service selection
- ✅ Added comprehensive FAQ section
- ✅ Implemented Google Maps integration
- ✅ Created professional blog content
- ✅ Fixed TypeScript issues

---

## 🚀 Immediate Next Steps

### Priority 1: Calculator Enhancement (2-3 days)
```typescript
// Enhanced calculator features to implement:
- Progress indicator for multi-step form
- Real-time calculation updates with charts
- PDF report generation
- Lead capture optimization
- Success stories integration
```

### Priority 2: Emergency Page Optimization (1-2 days)
```typescript
// Emergency page improvements:
- Floating emergency hotline button
- Urgency indicators with countdown timers
- Emergency-specific testimonials
- Quick contact forms (3 fields max)
- Trust badges and certifications
```

### Priority 3: Performance Optimization (2-3 days)
```typescript
// Performance improvements:
- Implement lazy loading for images
- Add loading skeletons
- Optimize bundle size with code splitting
- Implement service worker for offline support
- Add proper error boundaries
```

### Priority 4: SEO Implementation (1-2 days)
```typescript
// SEO enhancements:
- Add structured data (JSON-LD)
- Create XML sitemap
- Implement canonical URLs
- Add Open Graph tags
- Create robots.txt
- Optimize meta descriptions
```

---

## 📊 Key Metrics to Track

### Performance Targets
- **Lighthouse Score**: > 90 all categories
- **Core Web Vitals**:
  - LCP: < 2.5s
  - FID: < 100ms
  - CLS: < 0.1
- **Bundle Size**: < 200KB initial JS

### Business Metrics
- **Contact Form Submissions**: Track via GA4
- **Calculator Completions**: Measure drop-off rates
- **Blog Engagement**: Time on page, scroll depth
- **Emergency Page Conversions**: Click-to-call rate

---

## 🛠️ Development Commands

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run start           # Start production server

# Code Quality
npm run lint            # Run ESLint
npm run type-check      # TypeScript validation
npm run format          # Prettier formatting

# Testing (to be implemented)
npm run test            # Run tests
npm run test:coverage   # Coverage report
npm run test:e2e        # E2E tests
```

---

## 📝 Important Business Logic

### Contact Form Flow
1. User fills form with service selection
2. Form validates client-side
3. POST to `/api/contact`
4. Email sent via Resend (when API key configured)
5. GA4 tracking event fired
6. Success message displayed

### Calculator Logic
- Industry multipliers: 4-8x EBITDA
- Confidence levels based on data completeness
- Results stored in session for follow-up
- Triggers lead capture at completion

### Emergency Pages Strategy
- SEO-optimized for crisis keywords
- Direct phone CTAs above fold
- Simplified forms for urgent cases
- 24/7 hotline prominently displayed

---

## 🔐 Environment Variables

```env
# Required for production
NEXT_PUBLIC_GA_ID=          # Google Analytics
RESEND_API_KEY=             # Email service
NEXT_PUBLIC_SITE_URL=       # Base URL

# Optional
HUBSPOT_API_KEY=            # CRM integration
SLACK_WEBHOOK_URL=          # Notifications
```

---

## 🚨 Known Issues & TODOs

### High Priority
- [ ] Calculator needs PDF generation
- [ ] Email sending not configured (needs Resend API key)
- [ ] Mobile menu animation glitchy on iOS
- [ ] Form validation messages need German translation

### Medium Priority
- [ ] Add loading states to all async operations
- [ ] Implement proper error boundaries
- [ ] Add breadcrumbs to blog posts
- [ ] Create 404 and 500 error pages

### Low Priority
- [ ] Add animations to sections
- [ ] Implement dark mode
- [ ] Add cookie consent banner
- [ ] Create style guide documentation

---

## 📚 Phase 3 & 4 Planning

### Phase 3: Advanced Features (Next Sprint)
- Admin dashboard for content management
- Advanced analytics dashboard
- A/B testing framework
- Email automation sequences
- CRM integration (HubSpot/Salesforce)

### Phase 4: Quality Assurance
- Comprehensive test suite (90% coverage)
- E2E tests with Playwright
- Accessibility audit (WCAG 2.1 AA)
- Performance monitoring (Sentry)
- Complete technical documentation

---

## 🎨 Design System

### Colors
```typescript
const colors = {
  sonntagBlue: '#003A70',    // Primary brand
  sonntagGray: '#4A5568',    // Text
  sonntagLight: '#F7FAFC',   // Backgrounds
  emergency: '#DC2626',      // Urgent CTAs
  success: '#10B981'         // Positive actions
}
```

### Typography
- **Headings**: Inter (sans-serif)
- **Body**: Inter (sans-serif)
- **Sizes**: Based on Tailwind scale

### Components
- Atomic design pattern
- TypeScript interfaces for all props
- Consistent naming convention
- Documented with comments

---

## 🔄 Git Workflow

### Branch Strategy
```bash
main                # Production
├── develop         # Integration
    ├── feature/*   # New features
    ├── fix/*       # Bug fixes
    └── hotfix/*    # Emergency fixes
```

### Commit Convention
```
feat: Add new feature
fix: Fix bug
docs: Update documentation
style: Format code
refactor: Refactor code
test: Add tests
chore: Update dependencies
```

---

## 📞 Support & Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Project Contacts
- **Technical Issues**: Create GitHub issue
- **Feature Requests**: Document in PRD format
- **Urgent Support**: Check emergency procedures

---

## 🎯 Quick Reference

### Most Edited Files
1. `/src/app/page.tsx` - Homepage
2. `/src/components/features/contact/ContactForm.tsx` - Contact form
3. `/src/app/unternehmensbewertung-rechner/page.tsx` - Calculator
4. `/src/lib/analytics/analytics.ts` - Tracking

### Key API Endpoints
- `POST /api/contact` - Contact form submission
- `POST /api/valuation` - Calculator results

### Testing Checklist
- [ ] All pages load without errors
- [ ] Contact form submits successfully
- [ ] Calculator completes calculation
- [ ] Mobile navigation works
- [ ] Blog posts render correctly
- [ ] Emergency pages have working CTAs

---

*This document is the source of truth for AI assistants working on this project. Keep it updated with significant changes.*