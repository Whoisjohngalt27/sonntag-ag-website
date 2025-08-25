# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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
├── app/                     # Next.js 14 App Router pages
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── leistungen/         # Services page
│   ├── transaktionen/      # Transactions page
│   └── ueber-uns/          # About page
├── components/
│   └── ui-blocks/          # UI component library
│       ├── blocks/         # Downloaded Tailwind CSS Plus components
│       ├── adapted/        # SONNTAG AG adapted versions
│       └── navigation/     # Navigation components
├── lib/                    # Utilities and helpers
└── styles/                 # Global styles
```

### Component Architecture
The project uses a **feature-based organization with atomic design**:
- **UI Blocks**: Pre-built components from Tailwind CSS Plus, adapted to white/black theme
- **Adaptation Strategy**: Preserve original structure, only modify colors to match brand
- **Design System**: Strict white/black/gray palette with minimal brand colors (blue/gold) for CTAs only

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

### ✅ Completed (Latest Updates)
- **Homepage**: Fully enhanced with emergency banner, detailed service showcase, recent transactions, team section, and multiple CTAs
- **Footer Component**: Professional white/black design with contact info, trust signals (25+ years, 500+ sales), and emergency CTA section
- **Navigation**: Working navbar with links to all main pages
- **Basic Page Structure**: All main pages created (leistungen, transaktionen, ueber-uns, team, kontakt)
- **Icon Fix**: Resolved TrendingUpIcon import issue (now using ArrowTrendingUpIcon)
- **Contact Page**: Has form structure (needs backend implementation)

### 🚧 In Progress
- Content filling for existing pages (leistungen, ueber-uns, team, transaktionen)
- Contact form backend implementation
- Analytics setup

### 🔴 Critical - Not Started (High Revenue Impact)
**Emergency Service Pages** (€50-100K potential):
- `/notverkauf-unternehmen-giessen` - Emergency sale page
- `/schneller-unternehmensverkauf-giessen` - Fast sale page  
- `/firma-sofort-verkaufen-giessen` - Immediate sale page
- `/dringend-nachfolger-gesucht-giessen` - Urgent successor search

**Problem-Solution Pages** (€25-50K potential):
- `/unternehmensnachfolge-ohne-nachfolger-giessen`
- `/firma-verkaufen-ohne-gewinn-giessen`
- `/altersbedingte-geschaeftsaufgabe-giessen`

### 📊 Progress Metrics
- **Pages Created**: 7/30+ (23%)
- **Content Filled**: 2/7 pages (Homepage fully done, Contact partially)
- **Revenue Pages**: 0/4 emergency pages (0%)
- **Lead Capture**: Form exists but not functional

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

### Immediate Actions Required (Day 1-2)
1. **Create Emergency Service Pages** - €50-100K revenue potential
   - Use content from `assets/content/emergency-services.md`
   - Include 24h hotline prominently
   - Strong urgency messaging and CTAs

2. **Fix Contact Information Site-wide**
   - Correct phone: +49 (0) 641 201 037 00
   - Correct email: service@sonnt-ag.com
   - Correct address: Grünberger Str. 148, 35394 Gießen

3. **Fill Existing Pages with Content**
   - Services page: Use M&A content from assets
   - About page: Use brand positioning from docs
   - Team page: Use team profiles from assets
   - Transactions page: Add recent deals

4. **Contact Form Backend**
   - Implement form submission handler
   - Add email notifications
   - Include validation and spam protection

### Key Resources to Use
- **Content Assets**: `assets/content/` folder has all service content
- **Brand Messaging**: `docs/strategy/brand-positioning.md` 
- **Team Info**: `assets/team/team-overview.md`
- **Keywords**: `docs/seo/keywords-giessen.md`

### Success Metrics
- First lead within 48 hours of emergency pages going live
- 50+ leads per month target
- €10,000+ pipeline within first month
- Top 3 rankings for emergency keywords within 2 weeks

Remember: Focus on creating clean, SEO-optimized pages that convert emergency business succession inquiries into leads. The design should be professional, minimal, and trust-building using primarily white/black aesthetics.