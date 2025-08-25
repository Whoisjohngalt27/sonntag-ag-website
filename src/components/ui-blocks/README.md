# UI Blocks System

This directory contains UI blocks downloaded from Tailwind CSS Plus, organized by category for easy use in the SONNTAG AG website project.

## 📁 **Directory Structure**

```
ui-blocks/
├── README.md              # This file
├── manifest.json          # Index of all available blocks
└── blocks/                # Organized by category
    ├── marketing/         # Marketing-specific components
    ├── components/        # Reusable UI components
    ├── forms/             # Form components
    ├── navigation/        # Navigation components
    └── layouts/           # Page layout components
```

## 🚀 **Getting Started**

### 1. **Download UI Blocks**

Use the MCP Playwright tools to download blocks from Tailwind CSS Plus:

```bash
# Follow the workflow in src/scripts/mcp-workflow.md
# This will guide you through using Playwright MCP tools
```

### 2. **Generate Manifest**

After downloading blocks, generate the manifest:

```bash
npm run manifest
```

### 3. **Search for Blocks**

Find specific blocks by searching:

```bash
npm run manifest search "hero"
npm run manifest search "form"
npm run manifest search "navigation"
```

### 4. **List Blocks by Category**

View all blocks in a specific category:

```bash
npm run manifest list marketing
npm run manifest list components
npm run manifest list forms
```

## 🔧 **Using UI Blocks**

### **In React Components**

```tsx
import { HeroSection } from '@/components/ui-blocks/blocks/marketing/hero-section';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      {/* Other content */}
    </div>
  );
}
```

### **In HTML Pages**

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="blocks/marketing/hero-section/styles.css">
</head>
<body>
  <!-- Include the HTML content -->
  <div class="hero-section">
    <!-- Hero section content -->
  </div>
  
  <script src="blocks/marketing/hero-section/script.js"></script>
</body>
</html>
```

## 📋 **Block Structure**

Each block contains:

- **`index.html`** - HTML markup
- **`styles.css`** - CSS styles (Tailwind classes)
- **`script.js`** - JavaScript functionality (if applicable)
- **`metadata.json`** - Block information and tags

## 🎯 **Recommended Categories**

### **Marketing Blocks**
- Hero sections
- Feature grids
- Testimonials
- Call-to-action sections
- Pricing tables

### **Component Blocks**
- Buttons
- Cards
- Modals
- Alerts
- Badges

### **Form Blocks**
- Contact forms
- Newsletter signup
- Search bars
- Multi-step forms

### **Navigation Blocks**
- Main navigation
- Footer navigation
- Breadcrumbs
- Sidebar navigation

### **Layout Blocks**
- Page layouts
- Grid systems
- Container layouts
- Sidebar layouts

## 🔍 **Finding the Right Block**

### **By Function**
```bash
npm run manifest search "button"
npm run manifest search "form"
npm run manifest search "card"
```

### **By Category**
```bash
npm run manifest list marketing
npm run manifest list components
```

### **By Tags**
Blocks are tagged with relevant keywords. Search for:
- `responsive` - Mobile-friendly blocks
- `dark-mode` - Dark theme support
- `animated` - CSS animations
- `accessible` - Accessibility features

## 🛠️ **Customization**

### **Modifying Blocks**
1. Locate the block in the appropriate category folder
2. Edit the HTML, CSS, or JavaScript files
3. Update the `metadata.json` if needed
4. Regenerate the manifest: `npm run manifest`

### **Adding New Blocks**
```bash
npm run manifest add marketing "Custom Hero" "<div>...</div>" ".custom-hero { ... }" "console.log('...')" "Custom hero section" "hero,custom,responsive"
```

## 📱 **Responsive Design**

All blocks are designed to be mobile-first and responsive. They use Tailwind CSS classes for:
- Responsive breakpoints
- Mobile navigation
- Touch-friendly interactions
- Flexible layouts

## ♿ **Accessibility**

Blocks include:
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance

## 🚀 **Performance**

- Optimized CSS with Tailwind
- Minimal JavaScript
- Efficient HTML structure
- Lazy loading support
- Image optimization ready

## 🔗 **Integration with SONNTAG AG**

These blocks are specifically chosen to support:
- Professional business appearance
- German market preferences
- M&A industry requirements
- Trust and credibility building
- Lead generation optimization

## 📞 **Support**

For questions about UI blocks:
1. Check the manifest: `npm run manifest`
2. Search for specific functionality
3. Review the MCP workflow guide
4. Consult the Tailwind CSS Plus documentation

## 📝 **Notes**

- All blocks are tested for compatibility
- Blocks use Tailwind CSS v3+ features
- JavaScript is optional and progressive enhancement
- Blocks are designed to work together
- Regular updates from Tailwind CSS Plus

---

**Last Updated:** December 2024  
**Total Blocks:** See manifest.json  
**Categories:** marketing, components, forms, navigation, layouts
