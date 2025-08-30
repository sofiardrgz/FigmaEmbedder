# Overview

This is a full-stack dashboard application built with React, Express, and PostgreSQL. The project showcases a modern web application architecture with a clean dashboard interface displaying KPI metrics, animated charts, and recent signup data. The application now includes three main dashboard views: Sales Dashboard, Messages Dashboard, and an Animated Demo Dashboard that automatically cycles through all features. The application uses a monorepo structure with shared schemas and follows modern development practices with TypeScript throughout.

## Recent Changes (August 30, 2025)
- **Major Card Animation Redesign**: Completely rebuilt all 7 card components with meaningful looping animations
- **Improved Readability**: Increased font sizes across all cards - main numbers now `text-lg` (18px), labels `text-xs-sm` (12-14px)
- **Enhanced Animations**: Each card now features specific 5-second looping animations:
  - **Sales Card**: Chart bars grow/shrink smoothly, KPI numbers pulse with scale effects
  - **Messages Card**: New message slides in, gets highlighted, then opens realistically
  - **Contacts Card**: "New Lead - Robert Miller" notification with pulsing alert banner
  - **Calendar Card**: "Appointment Booked" notifications, removed small unreadable text
  - **AI Copilot Card**: Full chat interface showing "Call lead" → AI response → actual calling animation
  - **Marketing Card**: Growing engagement numbers, animated thumbs up icons, platform cycling
  - **Payments Card**: "Invoice Paid" notifications, removed yellow colors, cleaner layout
- **Card Specifications Updated**: All cards now 260px × 300px (increased from 220px width)
- **Removed Elements**: Eliminated card titles, yellow color scheme, and small unreadable text
- **Current Deployment**: Live at https://68b27347a18a570008f31b1d--dazzling-parfait-e94c2f.netlify.app/
- **All Embed Routes Active**: 14 different embedding options available with updated animations

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **UI Library**: Comprehensive component system using Radix UI primitives with shadcn/ui styling
- **Styling**: Tailwind CSS with custom CSS variables for theming and dark mode support
- **State Management**: TanStack React Query for server state management with custom query client configuration
- **Routing**: Wouter for lightweight client-side routing
- **Charts**: Recharts library for data visualization with custom animated chart components

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure with centralized route registration
- **Data Access**: Abstract storage interface pattern with in-memory implementation for development
- **Development**: Vite integration for hot module replacement in development mode

## Database & ORM
- **Database**: PostgreSQL with connection via environment variables
- **ORM**: Drizzle ORM with type-safe schema definitions
- **Schema Management**: Centralized schema definitions in shared directory with Zod validation
- **Migrations**: Drizzle Kit for database migrations and schema management

## Data Models
- **Users**: Basic user authentication with username/password
- **Dashboard Metrics**: KPI tracking with JSON data storage for chart information
- **Signups**: User registration tracking with device and status information

## Dashboard Features
- **Sales Dashboard** (`/`): Main dashboard with KPI cards, charts, and recent signups table
- **Messages Dashboard** (`/messages`): Real-time messaging interface with conversation management
- **Demo Dashboard** (`/demo`): Animated showcase that automatically cycles through all features:
  - Messages with real-time notifications
  - Contacts management with status tracking
  - Calendar with appointment notifications
  - Automations workflow tracking
  - AI Copilot with chat interface
  - Marketing analytics for social media
  - Payments and invoices management

## Design System
- **Color Scheme**: Dark theme with #0d0d0d primary background, #1a1a1a for cards
- **Hover Effects**: Dark green (#16a34a) throughout all interactive elements
- **Typography**: Inter font family with consistent sizing and spacing
- **Animations**: Framer Motion for smooth transitions and micro-interactions
- **Layout**: 900px fixed width, 100vh height for iframe embedding
- **Icons**: Lucide React icons with uniform 16px sizing

## Development Setup
- **Build System**: Vite for frontend bundling and esbuild for backend compilation
- **Type Safety**: Strict TypeScript configuration across client, server, and shared code
- **Code Organization**: Monorepo structure with clear separation between client, server, and shared code
- **Development Experience**: Hot reload, error overlays, and development banners for optimal developer experience

## External Dependencies

- **@neondatabase/serverless**: PostgreSQL database connectivity
- **@radix-ui/***: Comprehensive UI component primitives for accessibility and functionality
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm & drizzle-kit**: Type-safe database ORM and migration tools
- **recharts**: Charting library for data visualization
- **tailwindcss**: Utility-first CSS framework for styling
- **wouter**: Lightweight routing library for React
- **zod**: Runtime type validation and schema definition
- **vite**: Build tool and development server
- **express**: Node.js web framework for API endpoints