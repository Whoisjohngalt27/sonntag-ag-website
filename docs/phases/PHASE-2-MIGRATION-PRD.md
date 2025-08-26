# Phase 2: Component Migration PRD
## Breaking Down Monoliths & Feature-Based Structure

**Duration**: Weeks 3-4 (10 business days)  
**Start Date**: TBD  
**End Date**: TBD  
**Status**: Not Started  
**Prerequisites**: Phase 1 Complete

---

## 📋 Executive Summary

Phase 2 focuses on migrating existing monolithic components to the new atomic design system, breaking down large files (especially the 729-line page.tsx), and implementing proper feature-based component structure. This phase emphasizes maintaining functionality while improving code organization and reusability.

---

## 🎯 Objectives

### Primary Goals
1. **Decompose Large Components**: Break down page.tsx and other monolithic files
2. **Migrate UI-Blocks**: Transform template components to atomic structure
3. **Implement Feature Components**: Create properly scoped feature modules
4. **Establish Composition Patterns**: Use component composition over inheritance

### Success Metrics
- [ ] No component exceeds 200 lines
- [ ] 100% of ui-blocks migrated to new structure
- [ ] Page load time maintained or improved
- [ ] Zero regression bugs introduced
- [ ] 50% reduction in code duplication

---

## 🏗️ Technical Requirements

### 1. Component Size Standards

```typescript
// ✅ GOOD - Small, focused component
// ServiceCard.tsx (< 100 lines)
export function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <Icon component={icon} className="w-12 h-12 mb-4" />
      <Heading level={3}>{title}</Heading>
      <Text className="mt-2 mb-4">{description}</Text>
      <Link href={href} variant="arrow">
        Learn More
      </Link>
    </Card>
  )
}

// ❌ BAD - Monolithic component
// page.tsx (729 lines - needs decomposition)
```

### 2. Feature-Based Organization

```
src/
├── components/
│   └── features/
│       ├── hero/
│       │   ├── HeroSection.tsx
│       │   ├── HeroSection.types.ts
│       │   ├── HeroBackground.tsx
│       │   ├── HeroCTA.tsx
│       │   └── index.ts
│       ├── services/
│       │   ├── ServicesGrid.tsx
│       │   ├── ServiceCard.tsx
│       │   ├── ServiceModal.tsx
│       │   └── index.ts
│       └── contact/
│           ├── ContactSection.tsx
│           ├── ContactForm.tsx
│           ├── ContactInfo.tsx
│           └── index.ts
```

### 3. Page Decomposition Strategy

```typescript
// Before: page.tsx (729 lines)
export default function HomePage() {
  // Everything in one file...
}

// After: page.tsx (< 50 lines)
import { HeroSection } from '@/components/features/hero'
import { ServicesSection } from '@/components/features/services'
import { StatsSection } from '@/components/features/stats'
import { TeamSection } from '@/components/features/team'
import { ContactSection } from '@/components/features/contact'

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <TeamSection />
      <ContactSection />
    </MainLayout>
  )
}
```

### 4. Data & Logic Separation

```typescript
// hooks/useHomePageData.ts
export function useHomePageData() {
  const stats = useStats()
  const services = useServices()
  const team = useTeamMembers()
  
  return { stats, services, team }
}

// utils/formatters.ts
export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
  }).format(amount)
}
```

---

## 📝 Detailed Task Breakdown

### Week 3: Monolith Decomposition

#### Day 11-12: Homepage Breakdown
- [ ] Analyze page.tsx structure and dependencies
- [ ] Create HeroSection feature component
- [ ] Extract ServicesSection with sub-components
- [ ] Move StatsSection to separate component
- [ ] Extract TeamSection and ContactSection

#### Day 13-14: Service Pages Migration
- [ ] Break down /leistungen page components
- [ ] Create MARKTWERT feature module
- [ ] Create MEHRWERT feature module
- [ ] Extract shared service components
- [ ] Implement service detail templates

#### Day 15: Emergency Pages Refactoring
- [ ] Create EmergencyBanner organism
- [ ] Extract EmergencyCTA component
- [ ] Create shared emergency page template
- [ ] Consolidate duplicate code across 4 pages

### Week 4: UI-Blocks Migration & Testing

#### Day 16-17: UI-Blocks to Atomic
- [ ] Map all ui-blocks to atomic components
- [ ] Migrate navigation components
- [ ] Transform marketing blocks to features
- [ ] Convert team blocks to organisms
- [ ] Update all import paths

#### Day 18-19: Composition Implementation
- [ ] Implement component composition patterns
- [ ] Create higher-order components where needed
- [ ] Build compound components for complex UI
- [ ] Establish render prop patterns
- [ ] Document composition guidelines

#### Day 20: Integration & Testing
- [ ] Update all page imports
- [ ] Fix any breaking changes
- [ ] Performance testing
- [ ] Visual regression testing
- [ ] Update documentation

---

## 🔄 Migration Checklist

### Priority 1: Large Files (> 400 lines)
| File | Current Lines | Target Lines | Components to Extract |
|------|---------------|--------------|----------------------|
| `app/page.tsx` | 729 | < 50 | Hero, Services, Stats, Team, Contact |
| `kontakt/page.tsx` | 302 | < 100 | Form, Map, Info, Hours |
| Emergency Pages (avg) | 437 | < 150 | Banner, Content, CTA, FAQ |

### Priority 2: UI-Blocks Migration
| Current Location | New Location | Type |
|------------------|--------------|------|
| `ui-blocks/navigation/*` | `ui/organisms/Header` | Organism |
| `ui-blocks/hero/*` | `features/hero/*` | Feature |
| `ui-blocks/marketing/*` | `features/services/*` | Feature |
| `ui-blocks/team/*` | `features/team/*` | Feature |
| `ui-blocks/about/*` | `features/about/*` | Feature |

### Priority 3: Shared Components
- [ ] Extract common CTA patterns
- [ ] Create shared Section wrapper
- [ ] Build reusable Card variants
- [ ] Standardize form components
- [ ] Consolidate animation components

---

## 🚨 Risk Management

### Critical Risks
1. **Breaking Production Pages**
   - Mitigation: Feature flags for gradual rollout
   - Testing: Comprehensive E2E tests before deployment

2. **Performance Degradation**
   - Mitigation: Bundle analysis before/after
   - Monitoring: Core Web Vitals tracking

3. **SEO Impact**
   - Mitigation: Maintain exact HTML structure
   - Validation: Search Console monitoring

4. **Development Velocity Impact**
   - Mitigation: Clear migration guides
   - Support: Pair programming sessions

### Rollback Strategy
```bash
# Quick rollback if issues detected
git checkout main
git branch -D feature/component-migration
npm run build && npm run deploy
```

---

## ✅ Acceptance Criteria

### Must Have (P0)
- [ ] All components < 200 lines
- [ ] Zero functional regression
- [ ] Maintain or improve performance
- [ ] All tests passing

### Should Have (P1)
- [ ] 90% code coverage
- [ ] Component documentation updated
- [ ] Storybook stories for new components
- [ ] Migration guide completed

### Nice to Have (P2)
- [ ] Performance improvements (>10%)
- [ ] Accessibility improvements
- [ ] Animation enhancements
- [ ] Component playground

---

## 📊 Performance Targets

### Before Migration Baseline
```javascript
// Current metrics (from Lighthouse)
{
  FCP: 1.8s,
  LCP: 2.9s,
  TBT: 340ms,
  CLS: 0.05,
  SI: 3.2s
}
```

### After Migration Targets
```javascript
// Target metrics
{
  FCP: < 1.5s,  // -17% improvement
  LCP: < 2.5s,  // -14% improvement
  TBT: < 300ms, // -12% improvement
  CLS: < 0.05,  // Maintain
  SI: < 3.0s    // -6% improvement
}
```

---

## 🔧 Technical Patterns

### Component Composition Example
```typescript
// Compound Component Pattern
const Card = ({ children, className }: CardProps) => {
  return <div className={cn("bg-white rounded-lg", className)}>{children}</div>
}

Card.Header = ({ children }: { children: ReactNode }) => {
  return <div className="border-b px-6 py-4">{children}</div>
}

Card.Body = ({ children }: { children: ReactNode }) => {
  return <div className="px-6 py-4">{children}</div>
}

Card.Footer = ({ children }: { children: ReactNode }) => {
  return <div className="border-t px-6 py-4">{children}</div>
}

// Usage
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer>Actions</Card.Footer>
</Card>
```

### Custom Hooks Pattern
```typescript
// Feature-specific hooks
export function useServiceData(serviceId: string) {
  const [service, setService] = useState<Service | null>(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetchService(serviceId).then(setService).finally(() => setLoading(false))
  }, [serviceId])
  
  return { service, loading }
}
```

---

## 📅 Daily Standup Topics

### Week 3 Focus
- Day 11: "Starting homepage decomposition"
- Day 12: "Extracted 5 feature components from homepage"
- Day 13: "Migrating service pages structure"
- Day 14: "Service modules complete, starting emergency pages"
- Day 15: "Emergency page templates consolidated"

### Week 4 Focus
- Day 16: "UI-blocks migration 40% complete"
- Day 17: "All navigation components migrated"
- Day 18: "Implementing composition patterns"
- Day 19: "Final component migrations"
- Day 20: "Integration testing and documentation"

---

## 👥 Resource Requirements

### Team Allocation
- **Lead Developer**: 80% allocation
- **Frontend Developer**: 100% allocation
- **QA Engineer**: 30% allocation
- **DevOps**: 10% allocation (monitoring)

### Skill Requirements
- Advanced React patterns
- TypeScript expertise
- Performance optimization
- Testing frameworks
- Git workflow proficiency

---

## 🔗 Dependencies

### Technical Dependencies
- Phase 1 completion (atomic components ready)
- Testing framework setup
- CI/CD pipeline configured
- Staging environment available

### Business Dependencies
- No major feature launches during migration
- Stakeholder approval for gradual rollout
- Marketing team notified of potential changes

---

## 📝 Documentation Requirements

### Developer Documentation
- [ ] Migration guide with examples
- [ ] Component API documentation
- [ ] Best practices guide
- [ ] Troubleshooting guide

### Business Documentation
- [ ] Impact assessment report
- [ ] Performance improvement summary
- [ ] ROI calculation
- [ ] Risk mitigation plan

---

## 🎉 Success Celebration

### Completion Criteria
- All monolithic components decomposed ✓
- UI-blocks fully migrated ✓
- Performance targets met ✓
- Zero production incidents ✓

### Team Recognition
- Migration completion announcement
- Performance metrics showcase
- Best practices sharing session
- Technical blog post opportunity

---

*Last Updated: [Date]*  
*Status: Planning Phase*  
*Owner: Development Team*  
*Predecessor: Phase 1 - Foundation*