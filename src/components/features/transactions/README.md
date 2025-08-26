# Transaction Components

This module provides enhanced transaction display components with sector-specific background images and modern card designs.

## Components

### TransactionCard

A single transaction card component that displays transaction information with a sector-specific background image.

**Features:**
- Sector-specific background images from Unsplash
- Status badges with color coding
- Responsive design with proper image optimization
- Gradient overlays for better text readability
- Ring effects for modern aesthetics

**Props:**
```typescript
interface TransactionCardProps {
  transaction: Transaction
  className?: string
}
```

**Usage:**
```tsx
import { TransactionCard } from '@/components/features/transactions'

<TransactionCard 
  transaction={transactionData} 
  className="h-full"
/>
```

### TransactionsGrid

A grid layout component for displaying multiple transaction cards.

**Features:**
- Responsive grid layouts (1-6 columns)
- Automatic responsive breakpoints
- Consistent spacing and alignment
- Flexible column configuration

**Props:**
```typescript
interface TransactionsGridProps {
  transactions: Transaction[]
  className?: string
  columns?: 1 | 2 | 3 | 4 | 5 | 6
}
```

**Usage:**
```tsx
import { TransactionsGrid } from '@/components/features/transactions'

<TransactionsGrid 
  transactions={transactionsList} 
  columns={3}
  className="gap-8"
/>
```

### TransactionsSection

A complete section component that includes header, grid, and optional "view all" link.

**Features:**
- Configurable title, subtitle, and description
- Built-in grid layout
- Optional "view all" functionality
- Dark theme design
- Responsive layout

**Props:**
```typescript
interface TransactionsSectionProps {
  title?: string
  subtitle?: string
  description?: string
  transactions?: Transaction[]
  showViewAll?: boolean
  viewAllText?: string
  viewAllHref?: string
  className?: string
  columns?: 1 | 2 | 3 | 4 | 5 | 6
}
```

**Usage:**
```tsx
import { TransactionsSection } from '@/components/features/transactions'

<TransactionsSection 
  title="Unsere Transaktionen"
  subtitle="Erfolgreiche Verkäufe"
  description="Diskret, schnell und erfolgreich – so arbeiten wir."
  transactions={transactionsData}
  columns={3}
  showViewAll={true}
  viewAllHref="/transaktionen"
/>
```

## Transaction Data Structure

```typescript
interface Transaction {
  id?: string | number
  date: string
  company: string
  buyer: string
  timeframe: string
  sector: string
  status?: 'successful' | 'pending' | 'completed'
  value?: string
  description?: string
  location?: string
  industry?: string
  dealSize?: string
}
```

## Supported Sectors

The component automatically selects appropriate background images for these sectors:

- **manufacturing** - Industrial/manufacturing scenes
- **technology** - Tech office environments
- **healthcare** - Medical facilities
- **retail** - Retail store environments
- **construction** - Construction sites
- **automotive** - Automotive industry
- **food** - Food production/restaurants
- **logistics** - Warehouses/logistics
- **finance** - Financial office environments
- **education** - Educational facilities
- **default** - Generic business environment

## Styling

### Color Schemes
- **Status Badges:**
  - `successful`: Green theme
  - `pending`: Yellow theme
  - `completed`: Blue theme

### Responsive Breakpoints
- Mobile: 1 column
- Tablet: 2 columns (md:)
- Desktop: 3+ columns (lg:)

### Dark Theme
The components use a dark theme with:
- Dark backgrounds (`bg-gray-900`)
- White text for headers
- Gray text for descriptions
- Proper contrast ratios

## Demo

Visit `/transactions-demo` to see all components in action with various configurations.

## Examples

### Basic Usage
```tsx
import { TransactionCard } from '@/components/features/transactions'

const transaction = {
  date: 'Juni 2025',
  company: 'Example GmbH',
  buyer: 'Investor AG',
  timeframe: '8 Wochen',
  sector: 'technology',
  status: 'successful',
  value: '€2.5M'
}

<TransactionCard transaction={transaction} />
```

### Grid Layout
```tsx
import { TransactionsGrid } from '@/components/features/transactions'

<TransactionsGrid 
  transactions={transactions} 
  columns={4}
  className="gap-8"
/>
```

### Complete Section
```tsx
import { TransactionsSection } from '@/components/features/transactions'

<TransactionsSection 
  title="Unsere Erfolge"
  transactions={transactions}
  columns={3}
  showViewAll={true}
/>
```

## Performance Notes

- Images are optimized using Next.js Image component
- Proper `sizes` attribute for responsive images
- Lazy loading for better performance
- Sector images are cached from Unsplash CDN
