# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **🚀 PHASE 2 UPDATE (August 26, 2025):** Component migration underway - Homepage reduced from 728 → 93 lines (87% reduction)!
> Extracted 9 feature components for maximum reusability. All pages moving to modular architecture.
> Focus on maintainability, performance, and developer experience.

## 🎯 Project Overview

SONNTAG AG website rebuild - A Next.js 14 application for a premier M&A advisory firm in Gießen, Germany, specializing in Mittelstand company succession with anonymous bidding processes and value optimization.

### Key Business Context
- **Company**: SONNTAG AG - M&A Advisory & Business Succession
- **Core Message**: "Wir verkaufen keine Unternehmen. Wir sichern Lebenswerke." (We don't sell companies. We secure life's work.)
- **Services**: MARKTWERT (anonymous bidding process) + MEHRWERT (value enhancement)
- **Target Market**: Gießen/Mittelhessen region, German Mittelstand companies
- **Revenue Goal**: €100,000+ in first year from emergency business succession cases

## 🚀 Common Development Commands

### Development
```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

### Testing
```bash
# Currently no test framework configured
# Consider adding: npm test (when tests are implemented)
```

## 🏗️ High-Level Architecture

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Language**: TypeScript for type safety
- **UI Components**: Custom component library based on Tailwind CSS Plus

### Project Structure
```
src/
├── app/                     # Next.js 14 App Router pages (93 lines homepage!)
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage (reduced from 728 → 93 lines)
│   ├── leistungen/         # Services page
│   ├── transaktionen/      # Transactions page
│   └── ueber-uns/          # About page
├── components/
│   ├── features/           # Feature-based components (NEW)
│   │   ├── hero/           # Hero section module
│   │   ├── stats/          # Statistics display
│   │   ├── services/       # Services grid
│   │   ├── bieterverfahren/ # Anonymous bidding showcase
│   │   ├── wertmaximierung/ # Value maximization section
│   │   ├── transactions/   # Recent deals display
│   │   ├── team/           # Team showcase
│   │   └── blog/           # Blog posts grid
│   ├── ui/                 # Atomic design components
│   │   ├── atoms/          # Button, Typography, Icon, Link, StatCard
│   │   ├── molecules/      # FeatureCard, SectionHeader
│   │   └── organisms/      # (ready for complex components)
│   └── ui-blocks/          # Legacy UI component library
│       ├── blocks/         # Downloaded Tailwind CSS Plus components
│       ├── adapted/        # SONNTAG AG adapted versions
│       └── navigation/     # Navigation components
├── lib/                    # Utilities and helpers
└── styles/                 # Global styles
```

### Component Architecture (Phase 2 - Modular)
The project uses a **modular feature-based architecture with atomic design**:
- **Feature Components**: Self-contained, reusable feature modules (hero, stats, services, etc.)
- **Atomic Components**: Small, reusable UI pieces (atoms → molecules → organisms)
- **Composition Over Inheritance**: Pages are pure composition of feature components
- **UI Blocks (Legacy)**: Pre-built components being migrated to new architecture
- **Design System**: Strict white/black/gray palette with minimal brand colors (blue/gold) for CTAs only

#### Component Size Standards
- **Pages**: < 100 lines (pure composition)
- **Feature Components**: < 200 lines (self-contained modules)
- **Atomic Components**: < 100 lines (single responsibility)

## 🎨 Design System Rules

### Color Palette (STRICT)
```typescript
// Primary colors for main components
white: '#FFFFFF'        // Primary backgrounds
black: '#000000'        // Primary text
gray: {                 // Hierarchy and depth
  50-800: Tailwind default gray scale
}

// Brand colors - CTAs ONLY
sonntagBlue: '#1e3a8a'  // Primary CTA buttons
sonntagGold: '#f59e0b'  // Secondary CTAs
```

### Component Adaptation Process
1. **Preserve**: Keep HTML structure and Tailwind classes exactly as downloaded
2. **Adapt**: Replace colors with white/black variants only
3. **Maintain**: Keep all spacing, typography, and interactions unchanged

## 📋 Current Implementation Status

### ✅ Completed (As of August 26, 2025)

#### Phase 2 Component Migration
- **Homepage Transformation**: 728 → 93 lines (87% reduction) ✅
- **Feature Components Extracted**: 9 modules (hero, stats, services, bieterverfahren, wertmaximierung, transactions, team, blog)
- **Atomic Components**: 7 components (Button, Typography, Icon, Link, StatCard, FeatureCard, SectionHeader)
- **TypeScript Coverage**: 100% with zero errors
- **Component Reusability**: All components fully configurable

#### Original Implementation
- **Homepage**: Now modular with 93 lines (was 728 lines monolithic)
- **All 4 Emergency Pages** (€50-100K revenue potential): ✅
  - `/notverkauf-unternehmen-giessen` - 412 lines with full content
  - `/schneller-unternehmensverkauf-giessen` - 425 lines with full content
  - `/firma-sofort-verkaufen-giessen` - 429 lines with full content
  - `/dringend-nachfolger-gesucht-giessen` - 482 lines with full content
- **Services Page**: Complete with 428 lines, MARKTWERT/MEHRWERT sections
- **Transactions Page**: Complete with 390 lines, recent deals showcase
- **About Us Page**: Complete with 230 lines, company story and values
- **Team Page**: Complete with 189 lines, executive profiles
- **Contact Page**: UI complete with 302 lines (backend pending)
- **Navigation System**: Fully functional navbar with all page links
- **Footer Component**: Professional design with trust signals
- **SEO Metadata**: Implemented on all 10 pages
- **Vercel Deployment**: Site is live and deployed

### 🚧 In Progress (Phase 2 Migration)
- **Services Page Migration**: Breaking down 428 lines → < 100 lines
- **Contact Page Migration**: Breaking down 435 lines → < 100 lines
- **Emergency Pages Template**: Creating shared template for 4 pages (1,800 total lines → < 200)
- **Compound Components**: Implementing Card.Header, Section.Content patterns

### 🔜 Backend Implementation (Pending)
- Contact form backend API implementation
- Email notification system (Resend/SendGrid integration)
- Google Analytics & conversion tracking setup

### 🔴 Not Started (Next Priorities)
**Problem-Solution Pages** (€25-50K potential):
- `/unternehmensnachfolge-ohne-nachfolger-giessen`
- `/firma-verkaufen-ohne-gewinn-giessen`
- `/altersbedingte-geschaeftsaufgabe-giessen`

**Technical Infrastructure**:
- CRM integration (HubSpot/Pipedrive)
- A/B testing framework
- Chat widget implementation
- Exit-intent popups
- Lead scoring system

### 📊 Progress Metrics

#### Phase 2 Migration Status
- **Homepage**: 728 → 93 lines (87% reduction) ✅
- **Services Page**: 428 lines (pending migration)
- **Contact Page**: 435 lines (pending migration)
- **Emergency Pages**: 4 × ~450 lines (pending template)
- **Component Extraction**: 9/20+ components complete

#### Overall Project
- **Pages Created**: 10/14+ (71%)
- **Content Filled**: 10/10 pages (100%)
- **Revenue Pages**: 4/4 emergency pages (100%) ✅
- **Total Lines of Code**: 4,015 → targeting < 1,000 after migration
- **Lead Capture**: Form UI complete, backend API pending
- **Deployment Status**: Live on Vercel

### SEO Strategy
- **Emergency Keywords**: High conversion, low competition (€50K-100K potential)
- **Problem-Based Keywords**: Medium commercial value
- **Local SEO**: Focus on Gießen/Mittelhessen region
- **Technical SEO**: Built-in Next.js optimization with proper meta tags

## 🚨 Important Conventions

### File Naming
- **Components**: PascalCase (e.g., `HeroSection.tsx`)
- **Directories**: kebab-case (e.g., `hero-sections/`)
- **Pages**: kebab-case URLs for SEO (e.g., `/ma-beratung-giessen`)

### TypeScript Requirements
- Always use proper TypeScript interfaces (no `any` types)
- Define props interfaces for all components
- Use strict typing for better IDE support

### Component Documentation
Every adapted component should include:
```typescript
/**
 * Component: [Name]
 * Source: Tailwind CSS Plus - [Category]
 * Adaptation: Colors only (white/black theme)
 * Structure: Preserved exactly as downloaded
 */
```

## 💡 Backend Implementation Guide

### Contact Form API Requirements
```typescript
// /src/app/api/contact/route.ts
interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  urgency?: 'normal' | 'urgent' | 'emergency'
  source?: string // Which page the form was submitted from
}
```

### Email Service Setup (Resend Example)
```bash
npm install resend react-email @react-email/components
```

### Environment Variables Needed
```env
# Email Service
RESEND_API_KEY=re_xxxxx
NOTIFICATION_EMAIL=service@sonnt-ag.com

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# CRM (Future)
HUBSPOT_API_KEY=xxxxx
```

### API Route Template
```typescript
// Basic structure for contact form handler
export async function POST(request: Request) {
  // 1. Parse and validate form data
  // 2. Send notification email to team
  // 3. Send confirmation email to user
  // 4. Store lead in database/CRM
  // 5. Track conversion in Analytics
  // 6. Return success/error response
}
```

## 🔧 Development Guidelines

### ⚠️ CRITICAL: Component Selection Process
**ALWAYS follow this order when implementing any UI element:**

1. **FIRST - Check Existing Blocks**: 
   - Search in `components/ui-blocks/blocks/` for existing Tailwind CSS Plus components
   - Look for similar patterns in already adapted components
   - Check the team-section, hero sections, feature sections, etc.

2. **SECOND - Find Tailwind CSS Templates**:
   - Search Tailwind CSS Plus library for matching components
   - Look for official Tailwind UI components
   - Check for community Tailwind templates

3. **THIRD - Adapt Existing Components**:
   - Use the closest matching component as a base
   - Adapt colors to white/black theme
   - Preserve all structural elements

4. **LAST RESORT - Custom Creation**:
   - Only create custom components if no suitable template exists
   - Must follow established Tailwind utility patterns
   - Document why no existing template was suitable

### When Creating New Pages
1. **Always check** `components/ui-blocks/blocks/` for existing sections first
2. Use existing page templates as reference
3. Include proper SEO metadata in page files
4. Follow the established URL structure (kebab-case, German keywords)
5. Maintain consistent component usage

### When Adapting Components
1. Save original to `components/ui-blocks/blocks/`
2. Create adapted version in `components/ui-blocks/adapted/`
3. Only change colors, preserve all other properties
4. Document source and changes

### Performance Considerations
- Use Next.js Image component for optimization
- Implement lazy loading for non-critical components
- Keep bundle size minimal
- Target Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1

## 📝 Related Documentation

Key files to reference:
- `.cursorrules` - Main development standards
- `.cursorrules-ui-blocks` - UI component adaptation rules
- `PRD-SONNTAG-AG-WEBSITE.md` - Product requirements and roadmap
- `README.md` - Project overview and setup

## 🎯 Current Priorities

### 🚀 Phase 2 Migration (In Progress - Day 13-15)
1. **Complete Homepage Extraction** ✅
   - Extracted 9 feature components
   - Reduced homepage from 728 → 93 lines (87%)
   
2. **Services & Contact Pages** (Day 13-14)
   - Break down `/leistungen` (428 → < 100 lines)
   - Break down `/kontakt` (435 → < 100 lines)
   - Extract form, map, and info components

3. **Emergency Pages Template** (Day 15)
   - Create shared emergency template
   - Extract EmergencyHero, EmergencyBanner, EmergencyCTA
   - Reduce each page from ~450 → < 50 lines
   - Total reduction: 1,800 → < 200 lines

### 🔧 Backend Implementation (Next Priority)
1. **Contact Form Backend** - Critical for lead capture
   - Create API route at `/api/contact`
   - Integrate email service (Resend/SendGrid)
   - Add form validation and error handling
   - Set up auto-responder emails

2. **Analytics & Conversion Tracking**
   - Install Google Analytics 4
   - Set up conversion goals
   - Add Google Tag Manager
   - Implement phone call tracking

### 📈 Week 1 - Post-Migration
1. **Lead Capture Enhancement**
   - Add exit-intent popup for emergency pages
   - Implement chat widget (Intercom/Crisp)
   - Create downloadable M&A guide as lead magnet
   - A/B test CTA button colors and text

2. **Create Problem-Solution Pages** (€25-50K potential)
   - `/unternehmensnachfolge-ohne-nachfolger-giessen`
   - `/firma-verkaufen-ohne-gewinn-giessen`
   - `/altersbedingte-geschaeftsaufgabe-giessen`

3. **Trust Building Elements**
   - Add client testimonials section
   - Create case study pages for major deals
   - Add trust badges and certifications
   - Implement social proof notifications

### 🔧 Technical Infrastructure (Week 2)
1. **Backend Services**
   - CRM integration (HubSpot/Pipedrive)
   - Email automation setup
   - Lead scoring implementation
   - Webhook notifications

2. **SEO & Content**
   - Create sitemap.xml
   - Add robots.txt
   - Implement schema markup
   - Start blog for thought leadership

### Success Metrics (Phase 2)
- **Code Reduction**: 85% reduction across all pages (target < 1,000 total lines)
- **Component Reusability**: 100% of sections extractable and configurable
- **Performance**: Maintain or improve Core Web Vitals
- **Developer Experience**: < 100 line pages, clear component boundaries
- **Type Safety**: Zero TypeScript errors, full coverage

### Business Metrics (Post-Launch)
- **Immediate**: First lead within 24 hours of backend going live
- **Week 1**: 10+ qualified leads captured
- **Month 1**: 50+ leads, €50,000+ pipeline
- **Month 2**: Top 3 rankings for all emergency keywords
- **Quarter 1**: €100,000+ in closed deals from emergency services

Remember: Focus on creating modular, maintainable components that enable rapid iteration. The architecture should support A/B testing, easy updates, and new page creation through component composition.