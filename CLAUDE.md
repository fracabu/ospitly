# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Ospitly** is a React-based web application designed for hospitality hosts, providing tools and guides for managing accommodations. The platform focuses on tourist tax calculation, overbooking prevention, and compliance with Italian hospitality regulations.

## Technology Stack

- **Frontend**: React 19.1.0 with Vite 7.0.0
- **Styling**: Tailwind CSS 3.4.0 with custom design system (PostCSS integration)
- **UI Components**: Heroicons 2.2.0, Lucide React 0.525.0, Framer Motion 12.23.0
- **Routing**: React Router DOM 7.6.3 with BrowserRouter
- **Build Tool**: Vite 7.0.0 with React plugin
- **Linting**: ESLint 9.29.0 with React hooks and refresh plugins, modern flat config

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Project Architecture

### Core Application Structure

- **src/App.jsx**: Main application component with guide viewer state management (36 lines)
- **src/main.jsx**: Application entry point with React Router setup and BrowserRouter wrapper
- **src/pages/CalcolatoreTassa.jsx**: Dedicated page for tax calculator (uses react-helmet-async)

### Component Architecture (Refactored)

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx          # Navigation with mobile menu
│   │   └── Footer.jsx          # Footer with enhanced UX
│   ├── sections/
│   │   ├── HeroSection.jsx         # Main hero section
│   │   ├── AppsSection.jsx         # Calculator + Anti-overbooking tools
│   │   ├── GuidesSection.jsx       # Interactive guide browser
│   │   ├── FeaturesSection.jsx     # Benefits with animations
│   │   ├── OtherToolsSection.jsx   # Future tools with early access
│   │   └── LandingServiceSection.jsx # Website creation service
│   ├── guides/
│   │   └── GuideViewer.jsx     # Full-screen guide reader
│   └── ui/
│       └── OspitlyLogo.jsx     # Reusable logo component
├── data/
│   └── guideContent.jsx        # Guide data and content (JSX format)
└── pages/
    └── CalcolatoreTassa.jsx    # Separate tax calculator page
```

### Key Components & Features

1. **Guide System**: 
   - Dynamic guide viewer with complete content for CIN compliance, tourist tax, and overbooking prevention
   - Categorized guides (taxes, calendars, overbooking, pricing, regulations)
   - Real content available for `cin-2025`, `tassa-soggiorno-2025`, and `overbooking-guida`

2. **Tools Integration**:
   - Tourist tax calculator (embedded iframe: `https://tassa-soggiorno-calculator.vercel.app`)
   - Anti-overbooking checker (embedded iframe: `https://ospitly-anti-overbooking.vercel.app/`)
   - Centralized in `AppsSection.jsx` component

3. **Service Sections**:
   - Landing page creation service for direct bookings
   - Future tools development (pricing analytics, competitor checking, multi-platform pricing)

### Styling & Design System

**Tailwind Configuration**:
- Primary color: `#EF7E23` (orange)
- Secondary color: `#22D212` (green)
- Custom font: Inter with sans-serif fallback
- Content paths: `./index.html`, `./src/**/*.{js,jsx,ts,tsx}`
- PostCSS integration through Vite config for optimized builds

**Design Patterns**:
- Gradient backgrounds for hero sections
- Card-based layouts with hover effects
- Responsive grid systems (md:grid-cols-2, lg:grid-cols-3)
- Color-coded difficulty levels (green/yellow/red for easy/intermediate/advanced)

### Italian Hospitality Domain Knowledge

The application contains detailed, current information about:

- **CIN (Codice Identificativo Nazionale)**: Mandatory from January 1, 2025, with penalties €800-8,000
- **Tourist Tax Rates 2025**: Milan €7 (4-5 stars), Rome €7.50, Naples €6
- **Overbooking Prevention**: 83% of hosts experience overbooking, costing €200-500 per incident
- **Calendar Synchronization**: .ics file management across platforms (Airbnb, Booking.com, Expedia)

## UX/UI Improvements Implemented

### Enhanced User Experience
- **Smooth animations**: Hover effects, scale transforms, and slide transitions
- **Visual hierarchy**: Better spacing, gradients, and color-coded sections
- **Mobile-first design**: Improved responsive navigation and layouts
- **Interactive elements**: Enhanced buttons, cards, and form components
- **Loading optimization**: Lazy loading for iframes and images

### State Management Pattern
- **Guide Navigation**: Simple React state in `App.jsx` using `useState` for current guide
- **Conditional Rendering**: Toggle between main landing page and full-screen guide viewer
- **Props Flow**: Guide selection passed down via `onGuideClick` prop to `GuidesSection`
- **Navigation**: Back navigation handled via `onBack` callback in `GuideViewer`

### Component-Based Architecture Benefits
- **Maintainability**: Each section is now a separate, focused component  
- **Reusability**: UI components like `OspitlyLogo` can be reused
- **Testability**: Individual components can be tested in isolation
- **Developer Experience**: Easier to understand and modify specific features

## Development Guidelines

### Component Architecture
- Use functional components with hooks
- Implement responsive design with Tailwind breakpoints
- Follow the established color scheme (primary/secondary) with gradients
- Include hover states, transforms, and smooth transitions for interactive elements
- Organize components by function (layout, sections, guides, ui)

### Content Management
- Guide content is stored in `src/data/guideContent.jsx` (centralized)
- Real guides use JSX content with structured sections
- Sources are provided for credibility and compliance
- Email links use pre-filled subject/body for better UX

### Performance Considerations
- Lazy load embedded iframes
- Use Framer Motion for smooth animations
- Implement proper image optimization (logo assets in /public)
- Maintain fast build times with Vite

### SEO & Accessibility
- React Helmet Async for meta tags management
- Semantic HTML structure
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for images and meaningful link text

## Code Quality Standards

- **ESLint**: Modern flat config with JSX support and browser globals
- **Lint rules**: Uppercase constants allowed (varsIgnorePattern: '^[A-Z_]'), no unused variables
- **React**: Hooks and refresh plugins enabled for optimal development experience
- **JavaScript**: ECMAScript 2020+ features, module-based imports/exports
- **Configuration files**: All use ES modules (.js with `type: "module"` in package.json)

## External Integrations

- Email service: `info@ospitly.it` for contact forms and support
- Calculator iframe: Hosted separately on Vercel
- Anti-overbooking tool: In development phase
- Future tools: Dashboard analytics, competitor pricing, multi-platform optimization

## Business Context

The application serves Italian hospitality hosts dealing with:
- Complex tax calculations across different cities
- Platform management (Airbnb, Booking.com, Expedia)
- Regulatory compliance (CIN, tourist tax, guest registration)
- Revenue optimization through direct bookings

Target users are accommodation hosts who need reliable tools and current regulatory information to manage their properties effectively.