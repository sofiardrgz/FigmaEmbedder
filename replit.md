# Overview

This is a full-stack dashboard application built with React, Express, and PostgreSQL. The project showcases a modern web application architecture with a clean dashboard interface displaying KPI metrics, animated charts, and recent signup data. The application now includes three main dashboard views: Sales Dashboard, Messages Dashboard, and an Animated Demo Dashboard that automatically cycles through all features. The application uses a monorepo structure with shared schemas and follows modern development practices with TypeScript throughout.

## Recent Changes (August 29, 2025)
- Created comprehensive animated demo dashboard with auto-cycling through 8 sections
- Enhanced Sales Dashboard with revenue charts, conversion metrics, and leads pipeline table
- Expanded Messages Dashboard with 8 messages, unread indicators, and clean styling
- Enhanced Contacts Dashboard with 8 contacts, new contact notifications, and status badges
- Added detailed AI Copilot showing actual email creation with full preview
- Updated branding from "Mission Control" to "Smart Squatch"
- Implemented consistent green color scheme throughout all interfaces
- Fixed neon green background in Copilot section to gray for better appearance
- Created embeddable versions at /embed/demo and /embed/demo/no-frame routes
- Added individual embeddable dashboard components for separate embedding:
  - /embed/sales - Sales dashboard only
  - /embed/messages-only - Messages dashboard only  
  - /embed/contacts - Contacts dashboard only
  - /embed/calendar - Calendar dashboard only
  - /embed/copilot - AI Copilot dashboard only
  - /embed/marketing - Marketing analytics dashboard only
  - /embed/payments - Payments & invoices dashboard only
  - All routes support /no-frame variants for frameless embedding
- Added compact card components (220px x 300px) for website integration:
  - /card/sales - Compact sales card with animations
  - /card/messages - Compact messages card with conversations
  - /card/contacts - Compact contacts card with new contact notifications
  - /card/calendar - Compact calendar card with appointments
  - /card/copilot - Compact AI copilot card with email preview
  - /card/marketing - Compact marketing analytics card
  - /card/payments - Compact payments & invoices card
- Updated Netlify deployment configuration for all 14 embed routes
- Successfully built and optimized for production deployment (239.43 kB gzipped)

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