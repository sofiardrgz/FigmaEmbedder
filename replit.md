# Overview

This is a full-stack dashboard application built with React, Express, and PostgreSQL. The project showcases a modern web application architecture with a clean dashboard interface displaying KPI metrics, animated charts, and recent signup data. The application uses a monorepo structure with shared schemas and follows modern development practices with TypeScript throughout.

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