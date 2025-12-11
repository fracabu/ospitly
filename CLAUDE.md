# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Ospitly** is a React-based web application designed for hospitality hosts, providing tools and guides for managing accommodations. The platform focuses on tourist tax calculation, overbooking prevention, and compliance with Italian hospitality regulations.

## Technology Stack

- **Frontend**: React 19.1.0 with Vite 7.0.0
- **Styling**: Tailwind CSS 3.4.0 with custom design system (PostCSS integration)
- **UI Components**: Heroicons 2.2.0, Lucide React 0.525.0, Framer Motion 12.23.0
- **Routing**: React Router DOM 7.6.3 with BrowserRouter
- **Forms**: EmailJS Browser 4.4.1 for contact form integration
- **Build Tool**: Vite 7.0.0 with React plugin
- **Linting**: ESLint 9.29.0 with React hooks and refresh plugins, modern flat config
- **Deployment**: Vercel with automatic deploys from main branch

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

- **src/main.jsx**: Application entry point with HelmetProvider, ErrorBoundary, and BrowserRouter wrapper
- **src/App.jsx**: Main application component with routing, SEO management, and CIN form state
- **src/pages/HomePage.jsx**: Landing page with all main sections (hero, tools, guides, contact)
- **src/pages/GuidePage.jsx**: Dynamic guide page with URL-based routing (/guide/:slug)
- **src/pages/CalcolatoreTassa.jsx**: Dedicated page for tax calculator (legacy, may be unused)

### Component Architecture

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx          # Navigation with mobile menu
│   │   └── Footer.jsx          # Footer with enhanced UX
│   ├── sections/
│   │   ├── HeroSection.jsx         # Main hero section
│   │   ├── ToolsUnifiedSection.jsx # Unified tools display (calculator + anti-overbooking)
│   │   ├── LandingServiceSection.jsx # Website creation service
│   │   ├── GuidesSection.jsx       # Interactive guide browser with cards
│   │   └── ContactSection.jsx      # Contact form integration
│   ├── guides/
│   │   └── GuideViewer.jsx     # Full-screen guide reader (lazy loaded)
│   ├── forms/
│   │   └── ContactForm.jsx     # Contact form with EmailJS integration (lazy loaded)
│   ├── ui/
│   │   ├── OspitlyLogo.jsx     # Reusable logo component
│   │   ├── Toast.jsx           # Toast notification system with custom hook
│   │   ├── FadeInOnScroll.jsx  # Scroll-triggered animation components
│   │   └── SEO.jsx             # SEO meta tags with Open Graph and JSON-LD
│   └── ErrorBoundary.jsx       # Error boundary for crash protection
├── contexts/
│   └── ThemeContext.jsx        # Dark/light theme provider with localStorage persistence
├── data/
│   ├── guideContent.jsx        # Guide data and content (JSX format)
│   └── jsonLdSchemas.js        # Structured data schemas (WebApplication, Organization, FAQ)
└── pages/
    ├── HomePage.jsx            # Main landing page composition
    ├── GuidePage.jsx           # Dynamic guide viewer page with routing
    └── CalcolatoreTassa.jsx    # Legacy tax calculator page (may be unused)
```

### Key Components & Features

1. **Guide System**:
   - React Router-based navigation with dynamic URLs (`/guide/:slug`)
   - Guide cards on homepage link to dedicated guide pages
   - Full-screen guide viewer with lazy loading for performance
   - Real content available for `cin-2025`, `tassa-soggiorno-2025`, `checkin-normative-2025`, and `overbooking-guida`
   - SEO-optimized with dynamic meta tags and JSON-LD Article schema per guide

2. **Tools Integration**:
   - Tourist tax calculator (embedded iframe: `https://tassa-soggiorno-calculator.vercel.app`)
   - Anti-overbooking checker (embedded iframe: `https://overbooking-shield-tool.vercel.app/`)
   - Centralized in `ToolsUnifiedSection.jsx` component

3. **Service Sections**:
   - Landing page creation service for direct bookings
   - Future tools development (pricing analytics, competitor checking, multi-platform pricing)

4. **Contact & Forms**:
   - EmailJS integration for contact forms (@emailjs/browser 4.4.1)
   - Service ID: `service_kj88jdm`, Template ID: `template_wifuco4`
   - Toast notification system for user feedback
   - CIN support form with event-driven opening via custom window events

5. **Theme System**:
   - Dark/light mode toggle with ThemeContext provider
   - localStorage persistence for theme preferences (key: `ospitly-theme`)
   - System preference detection on first load using `prefers-color-scheme`
   - Tailwind dark mode classes integration (class-based strategy)

6. **Toast Notification System**:
   - Custom `useToast` hook in `src/components/ui/Toast.jsx`
   - Returns `{ showToast, ToastContainer }` for easy integration
   - Auto-dismiss with progress bar animation (configurable duration)
   - Four types: `success`, `error`, `warning`, `info`
   - Toast state passed down via props from App.jsx to child components

### Styling & Design System

**Tailwind Configuration**:
- Primary color: `#EF7E23` (orange)
- Secondary color: `#22D212` (green)
- Custom font: Inter with sans-serif fallback
- Content paths: `./index.html`, `./src/**/*.{js,jsx,ts,tsx}`
- PostCSS integration through Vite config for optimized builds
- Dark mode: class-based strategy (`darkMode: 'class'`) for theme toggling
- Extra small breakpoint: `xs: 480px`

**Design Patterns**:
- Gradient backgrounds for hero sections
- Card-based layouts with hover effects (hover:-translate-y-1, hover:scale-105)
- Responsive grid systems (md:grid-cols-2, lg:grid-cols-3)
- Color-coded difficulty levels (green/yellow/red for easy/intermediate/advanced)

### Italian Hospitality Domain Knowledge

The application contains detailed, current information about:

- **CIN (Codice Identificativo Nazionale)**: Mandatory from January 1, 2025, with penalties €800-8,000
- **Tourist Tax Rates 2025**: Milan €7 (4-5 stars), Rome €7.50, Naples €6
- **Overbooking Prevention**: 83% of hosts experience overbooking, costing €200-500 per incident
- **Calendar Synchronization**: .ics file management across platforms (Airbnb, Booking.com, Expedia)

## Routing & Navigation

### React Router Setup
- **Router Type**: BrowserRouter (configured in `main.jsx`)
- **Routes**:
  - `/` - HomePage with all landing sections
  - `/guide/:slug` - GuidePage with dynamic guide content
- **Navigation**: Guide cards use `<Link to={/guide/${guide.id}>` for SPA navigation
- **404 Handling**: GuidePage shows custom NotFound component for invalid slugs

### State Management Pattern

**Simple React State Architecture** - No Redux, just built-in hooks:
- **CIN Form State**: Managed in `App.jsx` with custom window events (`openCinForm`)
- **Toast Notifications**: Custom `useToast` hook provides `showToast` function passed via props
- **Theme Management**: Context-based `ThemeProvider` with `useTheme` hook
- **Guide Selection**: URL-based via React Router params (`useParams` in GuidePage)

### Data Flow Example
```
main.jsx (HelmetProvider → ErrorBoundary → BrowserRouter)
  └─> App.jsx (Routes, SEO, isCinFormOpen state, showToast)
      ├─> HomePage (showToast prop)
      │   ├─> HeroSection
      │   ├─> ToolsUnifiedSection (showToast)
      │   ├─> LandingServiceSection (showToast)
      │   ├─> GuidesSection (Links to /guide/:slug)
      │   └─> ContactSection (showToast)
      └─> GuidePage (useParams for slug)
          └─> GuideViewer (lazy loaded, guide from GUIDE_CONTENT[slug])
```

## Development Guidelines

### Component Architecture
- **Use functional components with hooks** - No class components
- **Lazy load heavy components** - Use `React.lazy()` and `<Suspense>` for GuideViewer, ContactForm, etc.
- **Wrap critical sections with ErrorBoundary** - Prevent full app crashes
- **Responsive design** - Mobile-first approach with Tailwind breakpoints (xs, sm, md, lg, xl)
- **Color scheme** - Always use `primary` (#EF7E23) and `secondary` (#22D212) from Tailwind config
- **Gradients** - Hero sections use `bg-gradient-to-br from-primary/10 to-secondary/5`
- **Interactive elements** - Include hover states, transforms (`hover:-translate-y-1`), and smooth transitions
- **Dark mode** - Use `dark:` Tailwind classes for all color/background declarations
- **Component organization** - Place by function: layout/, sections/, guides/, ui/, forms/, contexts/
- **Theme awareness** - Access theme via `useTheme()` hook from `ThemeContext`

### Content & Routing Patterns
- **Guide content** - Centralized in `src/data/guideContent.jsx` as an object keyed by slug
- **Guide structure** - Each guide has: `title`, `description`, `difficulty`, `category`, `readTime`, `content` (JSX), `sources`
- **Navigation** - Use `<Link to="/guide/slug">` from react-router-dom, NOT `<a href>`
- **Route parameters** - Access with `const { slug } = useParams()` in page components
- **Programmatic navigation** - Use `const navigate = useNavigate(); navigate('/')`
- **404 handling** - Check if guide exists: `const guide = GUIDE_CONTENT[slug]; if (!guide) return <NotFound />`
- **Email links** - Use pre-filled subject/body: `mailto:info@ospitly.it?subject=...&body=...`
- **Sources** - Always provide credible sources for guides (government sites, official docs)

### Performance Considerations
- Lazy load embedded iframes
- Use Framer Motion for smooth animations with intersection observer patterns
- FadeInOnScroll components use `useInView` hook with `-100px` margin for early triggering
- Animation components support direction (up/down/left/right), stagger delays, and custom durations
- Implement proper image optimization (logo assets in /public)
- Maintain fast build times with Vite

### SEO Implementation
- **React Helmet Async**: HelmetProvider wrapper in `main.jsx`
- **Dynamic SEO Component**: `src/components/ui/SEO.jsx` handles meta tags for all pages
- **Route-based SEO**: App.jsx detects current route and provides appropriate SEO data
- **JSON-LD Schemas**: Structured data in `src/data/jsonLdSchemas.js`
  - WebApplication schema (homepage)
  - Organization schema (site-wide)
  - Article schema (per-guide pages)
- **Open Graph**: Full OG meta tags for social sharing (Facebook, LinkedIn)
- **Twitter Cards**: Summary cards with images
- **Canonical URLs**: Dynamic based on route

### Accessibility
- Semantic HTML structure with proper heading hierarchy (h1 → h2 → h3)
- Alt text for images and meaningful link text
- Dark mode with proper contrast ratios
- Error boundaries prevent complete app crashes

## Code Quality Standards

- **ESLint**: Modern flat config with JSX support and browser globals
- **Lint rules**: Uppercase constants allowed (varsIgnorePattern: '^[A-Z_]'), no unused variables
- **React**: Hooks and refresh plugins enabled for optimal development experience
- **JavaScript**: ECMAScript 2020+ features, module-based imports/exports
- **Configuration files**: All use ES modules (.js with `type: "module"` in package.json)

## External Integrations

- **EmailJS**: Used for contact forms (@emailjs/browser 4.4.1). Configuration in `src/components/sections/ToolsUnifiedSection.jsx` and `src/components/forms/ContactForm.jsx`
- Contact email: `info@ospitly.it`

### External Tools
- Calculator iframe: `https://tassa-soggiorno-calculator.vercel.app`
- Anti-overbooking tool: `https://overbooking-shield-tool.vercel.app/`
- Future tools: Dashboard analytics, competitor pricing, multi-platform optimization

## Business Context

The application serves Italian hospitality hosts dealing with:
- Complex tax calculations across different cities
- Platform management (Airbnb, Booking.com, Expedia)
- Regulatory compliance (CIN, tourist tax, guest registration)
- Revenue optimization through direct bookings

Target users are accommodation hosts who need reliable tools and current regulatory information to manage their properties effectively.

## Animation System

The project uses a custom animation wrapper built on Framer Motion:

- **FadeInOnScroll**: Main component for scroll-triggered fade animations
  - Props: `direction` (up/down/left/right/none), `delay`, `duration`, `once`
  - Uses intersection observer with `-100px` margin for early triggering
  - Custom easing: `[0.25, 0.4, 0.25, 1]`

- **FadeInStagger**: Container for staggered children animations
  - Props: `staggerDelay` (default 0.1s between children)
  - Automatically coordinates child animation timing

- **FadeInStaggerItem**: Individual items within staggered animations
  - Used as children of `FadeInStagger`
  - Supports `direction` prop for animation direction

Usage pattern in sections:
```jsx
<FadeInOnScroll direction="up" delay={0.3}>
  <h2>Title</h2>
</FadeInOnScroll>

<FadeInStagger staggerDelay={0.2}>
  {items.map(item => (
    <FadeInStaggerItem key={item.id}>
      <Card {...item} />
    </FadeInStaggerItem>
  ))}
</FadeInStagger>
```

## Development Roadmap

See **TODO.md** for the complete prioritized task list with detailed implementation examples.

**Recently Completed**:
- ✅ Toast System Bug Fix (inline `<style jsx>` moved to index.css)
- ✅ Error Boundaries (ErrorBoundary component wrapping critical sections)
- ✅ Form Validation (custom validation with error feedback in ContactForm)
- ✅ SEO Meta Tags (SEO component with Open Graph, Twitter Cards, JSON-LD schemas)
- ✅ Code Splitting (GuideViewer and ContactForm are lazy loaded)
- ✅ React Router Migration (from conditional rendering to proper routing)

**Future Priorities** (see TODO.md for details):
- Testing setup (Vitest + React Testing Library)
- EmailJS rate limiting (prevent spam)
- Scroll Behavior optimization (refactor nested setTimeout in Header)
- Accessibility improvements (ARIA, focus management)
- Image optimization (WebP format, lazy loading)

Refer to **TODO.md** for time estimates and detailed code examples for each task.
