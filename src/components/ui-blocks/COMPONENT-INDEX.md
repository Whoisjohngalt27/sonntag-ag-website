# SONNTAG AG Website - UI Components Index

## 📋 **Component Overview**
- **Total Components**: 12
- **Categories**: 8
- **Last Updated**: December 19, 2024

---

## 🚀 **Implementation Priority Order**

### 1. **Landing Page** (Priority: 1)
- **Component**: `landing-page`
- **Location**: `blocks/marketing/landing-page/landing-page`
- **Format**: TSX
- **Source**: Manual
- **Description**: Complete landing page layout with multiple sections
- **Usage**: Main landing page for SONNTAG AG services

---

### 2. **Hero Sections** (Priority: 2-3)

#### 2.1 Simple Centered Hero
- **Component**: `simple-centered`
- **Location**: `blocks/marketing/hero-sections/simple-centered/`
- **Formats**: HTML + TSX
- **Source**: Tailwind CSS Plus
- **Description**: Clean hero section with centered content and navigation
- **Usage**: Main hero section for homepage and key pages

#### 2.2 Alternative Hero Section
- **Component**: `hero-section`
- **Location**: `blocks/marketing/hero-section/index.html`
- **Format**: HTML
- **Source**: Manual
- **Description**: Alternative hero section layout
- **Usage**: Alternative hero section option

---

### 3. **Header Sections** (Priority: 4)

#### 3.1 Header with Stats
- **Component**: `with-stats`
- **Location**: `blocks/marketing/header-sections/with-stats/`
- **Formats**: HTML + TSX
- **Source**: Tailwind CSS Plus
- **Description**: Header section with company statistics and navigation
- **Usage**: Header section with company statistics

---

### 4. **Feature Sections** (Priority: 5)

#### 4.1 Feature with Product Screenshot
- **Component**: `with-product-screenshot`
- **Location**: `blocks/marketing/feature-sections/with-product-screenshot/`
- **Formats**: HTML + TSX
- **Source**: Tailwind CSS Plus
- **Description**: Feature section with product image and feature list
- **Usage**: Feature showcase for services and benefits

---

### 5. **CTA Sections** (Priority: 6)

#### 5.1 Dark Panel CTA with App Screenshot
- **Component**: `dark-panel-with-app-screenshot`
- **Location**: `blocks/marketing/cta-sections/dark-panel-with-app-screenshot/`
- **Formats**: HTML + TSX
- **Source**: Tailwind CSS Plus
- **Description**: Call-to-action section with dark background and app screenshot
- **Usage**: Call-to-action sections for conversions

---

### 6. **Pricing Sections** (Priority: 7)

#### 6.1 Two Tiers with Emphasized Right
- **Component**: `two-tiers-emphasized-right`
- **Location**: `blocks/marketing/pricing-sections/two-tiers-emphasized-right/`
- **Formats**: HTML + TSX
- **Source**: Tailwind CSS Plus
- **Description**: Pricing section with two tiers, emphasizing the right option
- **Usage**: Service pricing and comparison sections

---

### 7. **About Section** (Priority: 8)

#### 7.1 About Section
- **Component**: `about`
- **Location**: `blocks/about/about.tsx`
- **Format**: TSX
- **Source**: Manual
- **Description**: Comprehensive about section for company information
- **Usage**: About page and company information sections

---

### 8. **Team Section** (Priority: 9)

#### 8.1 Team Section
- **Component**: `team-section`
- **Location**: `blocks/team/team-section.tsx`
- **Format**: TSX
- **Source**: Manual
- **Description**: Team member showcase and introduction section
- **Usage**: Team member introductions and profiles

---

## 📁 **File Structure**

```
src/components/ui-blocks/
├── manifest.json                    # Complete component index
├── COMPONENT-INDEX.md              # This file
├── README.md                       # Usage instructions
└── blocks/
    ├── marketing/
    │   ├── landing-page/
    │   │   └── landing-page
    │   ├── hero-sections/
    │   │   └── simple-centered/
    │   │       ├── index.html
    │   │       └── index.tsx
    │   ├── hero-section/
    │   │   └── index.html
    │   ├── header-sections/
    │   │   └── with-stats/
    │   │       ├── index.html
    │   │       └── index.tsx
    │   ├── feature-sections/
    │   │   └── with-product-screenshot/
    │   │       ├── index.html
    │   │       └── index.tsx
    │   ├── cta-sections/
    │   │   └── dark-panel-with-app-screenshot/
    │   │       ├── index.html
    │   │       └── index.tsx
    │   └── pricing-sections/
    │       └── two-tiers-emphasized-right/
    │           ├── index.html
    │           └── index.tsx
    ├── about/
    │   └── about.tsx
    └── team/
        └── team-section.tsx
```

---

## 🎯 **Quick Start Guide**

### **For Developers:**
1. **Start with Priority 1**: Landing page layout
2. **Build hero sections**: Use `simple-centered` for main pages
3. **Add headers**: Implement `with-stats` for company information
4. **Showcase features**: Use `with-product-screenshot` for services
5. **Drive conversions**: Implement CTA sections where needed
6. **Display pricing**: Use pricing sections for service tiers
7. **Company info**: Add about and team sections

### **For Content Managers:**
- **HTML versions**: Use for static content or quick prototypes
- **TSX versions**: Use for React-based development
- **Priority order**: Follow the numbered order for implementation
- **Source tracking**: Check manifest.json for component origins

---

## 📊 **Component Statistics**

| Category | Count | Priority Range | Source |
|----------|-------|----------------|---------|
| Landing Page | 1 | 1 | Manual |
| Hero Sections | 2 | 2-3 | Mixed |
| Header Sections | 1 | 4 | Tailwind CSS Plus |
| Feature Sections | 1 | 5 | Tailwind CSS Plus |
| CTA Sections | 1 | 6 | Tailwind CSS Plus |
| Pricing Sections | 1 | 7 | Tailwind CSS Plus |
| About | 1 | 8 | Manual |
| Team | 1 | 9 | Manual |

---

## 🔄 **Updates & Maintenance**

- **Manifest**: `manifest.json` - Complete technical index
- **This Index**: `COMPONENT-INDEX.md` - Human-readable overview
- **Last Updated**: Check manifest.json for latest timestamp
- **New Components**: Add to both files when adding new components

---

*This index provides a clear roadmap for implementing the SONNTAG AG website using the available UI components in the correct order.*
