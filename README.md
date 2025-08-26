# SONNTAG AG Website

A modern, clean website for SONNTAG AG - leading M&A advisory and business succession services in Gießen, Germany.

## 🏗️ Project Structure

### **Component Architecture: Feature-Based with Atomic Design**

```
src/
├── app/                    # Next.js 14 App Router
│   ├── [pages]/           # Dynamic routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── ui/                # Atomic design components
│   │   ├── atoms/         # Basic building blocks
│   │   │   ├── Button/    # Button component
│   │   │   ├── Icon/      # Icon component
│   │   │   ├── Link/      # Link component
│   │   │   ├── Typography/# Text components
│   │   │   └── animations/# Animation components
│   │   ├── molecules/     # Simple combinations
│   │   │   ├── FeatureCard/# Feature cards
│   │   │   └── SectionHeader/# Section headers
│   │   └── organisms/     # Complex sections
│   │       └── navigation/# Navigation components
│   ├── features/          # Feature-based organization
│   │   ├── hero/          # Hero sections
│   │   ├── services/      # Service showcases
│   │   ├── team/          # Team sections
│   │   ├── contact/       # Contact forms
│   │   └── [other]/       # Other feature areas
│   ├── layouts/           # Page layouts
│   └── footer.tsx         # Footer component
├── lib/                   # Utility libraries
│   ├── analytics/         # Analytics functions
│   ├── data/              # Data sources
│   └── utils/             # Utility functions
└── styles/
    └── globals.css        # Global styles
```

### **Key Features**

- **Clean Design**: White backgrounds with black text for optimal readability
- **Responsive**: Mobile-first design with Tailwind CSS
- **Performance**: Optimized with Next.js 14 and modern React patterns
- **SEO**: Built-in SEO optimization and metadata
- **Accessibility**: WCAG compliant with proper ARIA labels

### **Technology Stack**

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **UI Components**: Atomic design system
- **Animations**: Framer Motion + Custom shaders
- **Analytics**: Google Analytics integration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 🎨 Design System

### **Color Palette**

- **Primary**: White (#FFFFFF) backgrounds, Black (#000000) text
- **Accents**: SONNTAG Blue (#1e3a8a), SONNTAG Gold (#f59e0b)
- **Grays**: 50-800 scale for subtle variations

### **Typography**

- **Font**: Inter (Google Fonts)
- **Weights**: Regular, Medium, Semibold, Bold
- **Hierarchy**: Clear heading levels (h1-h6)

### **Components**

All components follow the atomic design principle:
- **Atoms**: Basic building blocks (buttons, inputs, icons)
- **Molecules**: Simple combinations (form fields, cards)
- **Organisms**: Complex sections (headers, footers, forms)
- **Features**: Business logic components (hero, services, team)

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid system**: CSS Grid and Flexbox for layouts
- **Touch-friendly**: Proper touch targets and interactions

## ♿ Accessibility

- **WCAG 2.1 AA** compliance
- **Semantic HTML** structure
- **ARIA labels** and roles
- **Keyboard navigation** support
- **Screen reader** compatibility
- **Color contrast** ratios (4.5:1 minimum)

## 🔧 Configuration

### **Environment Variables**

Create a `.env.local` file:

```env
NEXT_PUBLIC_GA_ID=your-google-analytics-id
RESEND_API_KEY=your-resend-api-key
```

### **Tailwind Configuration**

Custom Tailwind config with:
- Extended color palette
- Custom animations
- Component-specific utilities

## 📊 Analytics

- **Google Analytics 4** integration
- **Event tracking** for user interactions
- **Form submissions** tracking
- **Page view** analytics

## 🚀 Deployment

### **Vercel (Recommended)**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### **Other Platforms**

- **Netlify**: Compatible with Next.js
- **Railway**: Full-stack deployment
- **Docker**: Containerized deployment

## 📚 Documentation

- **Component API**: Each component has TypeScript interfaces
- **Storybook**: Component documentation (planned)
- **Code examples**: Usage examples in component files

## 🤝 Contributing

1. Follow the atomic design principles
2. Use TypeScript for all components
3. Follow the established naming conventions
4. Test on multiple devices and browsers
5. Ensure accessibility compliance

## 📄 License

This project is proprietary to SONNTAG AG.

---

**Built with ❤️ by the SONNTAG AG development team**


