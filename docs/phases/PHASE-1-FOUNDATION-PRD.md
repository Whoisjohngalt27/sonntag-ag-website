# Phase 1: Foundation PRD
## Component Architecture & Standards Implementation

**Duration**: Weeks 1-2 (10 business days)  
**Start Date**: TBD  
**End Date**: TBD  
**Status**: Not Started

---

## 📋 Executive Summary

Phase 1 establishes the foundational component architecture for the SONNTAG AG website, implementing atomic design principles, standardizing naming conventions, and creating reusable base components. This phase runs parallel to revenue-critical activities and focuses on non-breaking improvements.

---

## 🎯 Objectives

### Primary Goals
1. **Establish Component Architecture**: Implement atomic design pattern without breaking existing functionality
2. **Standardize Naming Conventions**: Create consistent file and component naming rules
3. **Create Base UI Components**: Build foundational atoms and molecules
4. **Implement TypeScript Interfaces**: Add comprehensive type safety

### Success Metrics
- [ ] 100% of new components follow atomic design
- [ ] Zero breaking changes to existing pages
- [ ] TypeScript coverage for all new components
- [ ] Component documentation completed
- [ ] Development velocity improved by 20%

---

## 🏗️ Technical Requirements

### 1. Directory Structure Implementation

```
src/components/
├── ui/                    # Atomic design components
│   ├── atoms/            # Basic building blocks
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.types.ts
│   │   │   ├── Button.test.tsx
│   │   │   └── index.ts
│   │   ├── Input/
│   │   ├── Icon/
│   │   └── Typography/
│   ├── molecules/        # Simple combinations
│   │   ├── FormField/
│   │   ├── Card/
│   │   └── SearchBar/
│   └── organisms/        # Complex sections
│       ├── Header/
│       ├── Footer/
│       └── ContactForm/
├── features/              # Feature-based components
│   ├── hero/
│   ├── services/
│   └── team/
└── layouts/               # Page layouts
    └── MainLayout/
```

### 2. Naming Convention Standards

#### Files & Directories
- **Components**: PascalCase (`Button.tsx`, `ContactForm.tsx`)
- **Directories**: kebab-case (`contact-form/`, `hero-section/`)
- **Types**: PascalCase with `.types.ts` suffix
- **Tests**: PascalCase with `.test.tsx` suffix
- **Utilities**: camelCase (`formatDate.ts`, `validateEmail.ts`)

#### Component Exports
```typescript
// ✅ Correct
export { Button } from './Button'
export type { ButtonProps } from './Button.types'

// ❌ Incorrect
export default Button
```

### 3. TypeScript Interface Standards

```typescript
// Button.types.ts
export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline'
  size: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
  'aria-label'?: string
}

// Component implementation
export function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  loading = false,
  className,
  type = 'button',
  'aria-label': ariaLabel,
}: ButtonProps) {
  // Implementation
}
```

### 4. Component Documentation Template

```typescript
/**
 * Button Component
 * 
 * @description Primary action button with multiple variants and states
 * @category Atoms
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="lg" onClick={handleClick}>
 *   Get Started
 * </Button>
 * ```
 * 
 * @see {@link ButtonProps} for available props
 */
```

---

## 📝 Detailed Task Breakdown

### Week 1: Setup & Base Components

#### Day 1-2: Architecture Setup
- [ ] Create new directory structure under `src/components/ui/`
- [ ] Set up atoms, molecules, organisms folders
- [ ] Create index.ts barrel exports for each level
- [ ] Document folder structure in README

#### Day 3-4: Atom Components
- [ ] Button component with all variants
- [ ] Input component with validation states
- [ ] Typography component (Heading, Text, Label)
- [ ] Icon wrapper component
- [ ] Link component with Next.js integration

#### Day 5: Molecule Components
- [ ] FormField (Label + Input + Error)
- [ ] Card component with variants
- [ ] ButtonGroup component
- [ ] SearchBar component
- [ ] Badge component

### Week 2: Complex Components & Migration Prep

#### Day 6-7: Organism Components
- [ ] Header organism (using existing navbar as base)
- [ ] Footer organism (refactor existing footer)
- [ ] ContactForm organism
- [ ] HeroSection template
- [ ] ServiceCard organism

#### Day 8-9: TypeScript & Documentation
- [ ] Create comprehensive type definitions
- [ ] Add JSDoc comments to all components
- [ ] Create component usage examples
- [ ] Set up Storybook (optional, if time permits)

#### Day 10: Testing & Integration
- [ ] Ensure all new components work with existing pages
- [ ] Update import paths where needed
- [ ] Create migration guide for Phase 2
- [ ] Performance baseline measurements

---

## 🚨 Risk Management

### Identified Risks
1. **Breaking Existing Pages**: Mitigation - All changes are additive, no deletions
2. **Conflicting with Revenue Work**: Mitigation - Parallel track, no interference
3. **Developer Adoption**: Mitigation - Clear documentation and examples
4. **Time Overrun**: Mitigation - Core components first, nice-to-have last

### Dependencies
- No blocking dependencies on other work
- Can proceed parallel to contact form backend implementation
- Must coordinate with team on new component usage

---

## ✅ Acceptance Criteria

### Must Have (P0)
- [ ] Atomic design structure implemented
- [ ] 10+ base components created
- [ ] TypeScript interfaces for all components
- [ ] Zero breaking changes to production

### Should Have (P1)
- [ ] Component documentation complete
- [ ] Usage examples for each component
- [ ] Migration guide for existing components
- [ ] Team training materials

### Nice to Have (P2)
- [ ] Storybook setup
- [ ] Unit tests for components
- [ ] Visual regression tests
- [ ] Component playground

---

## 📊 Success Metrics & KPIs

### Quantitative Metrics
- **Component Reusability**: 80% of new UI uses base components
- **Type Coverage**: 100% TypeScript coverage for new code
- **Build Time**: No increase in build time
- **Bundle Size**: < 5% increase from new components

### Qualitative Metrics
- **Developer Satisfaction**: Improved DX reported by team
- **Code Consistency**: Reduced PR review comments
- **Onboarding Time**: New developers productive in < 2 days
- **Maintenance Effort**: 30% reduction in bug fixes

---

## 🔄 Migration Strategy

### Gradual Adoption Plan
1. **New Features First**: All new features use atomic components
2. **Refactor on Touch**: Update components when modified
3. **No Big Bang**: Avoid massive refactoring sprints
4. **Backward Compatible**: Old and new can coexist

### Component Mapping
| Current Component | New Atomic Component | Priority |
|-------------------|---------------------|----------|
| `ui-blocks/button` | `ui/atoms/Button` | High |
| `ui-blocks/navigation` | `ui/organisms/Header` | Medium |
| `footer.tsx` | `ui/organisms/Footer` | Medium |
| Inline forms | `ui/organisms/ContactForm` | High |

---

## 👥 Team & Resources

### Required Skills
- React/Next.js expertise
- TypeScript proficiency
- Tailwind CSS knowledge
- Component design experience

### Time Allocation
- **Senior Developer**: 60% (6 days)
- **Junior Developer**: 100% (10 days)
- **Review & QA**: 20% (2 days)

---

## 📅 Timeline & Milestones

### Week 1 Milestones
- **Day 2**: Directory structure complete ✓
- **Day 4**: All atoms implemented ✓
- **Day 5**: All molecules implemented ✓

### Week 2 Milestones
- **Day 7**: All organisms implemented ✓
- **Day 9**: Documentation complete ✓
- **Day 10**: Phase 1 complete ✓

---

## 🔗 Related Documents

- [PROJECT-STRUCTURE-ANALYSIS.md](../../PROJECT-STRUCTURE-ANALYSIS.md)
- [CLAUDE.md](../../CLAUDE.md)
- [Phase 2 PRD](./PHASE-2-MIGRATION-PRD.md)

---

## 📝 Notes & Considerations

### Important Reminders
1. **Revenue First**: This work should not block contact form or analytics implementation
2. **No Breaking Changes**: All changes must be backward compatible
3. **Incremental Progress**: Better to ship 5 perfect components than 20 rushed ones
4. **Documentation**: Every component needs clear usage examples

### Future Considerations
- Consider design system documentation site
- Evaluate component library publishing (npm package)
- Plan for design tokens implementation
- Consider accessibility audit tools

---

*Last Updated: [Date]*  
*Status: Planning Phase*  
*Owner: Development Team*