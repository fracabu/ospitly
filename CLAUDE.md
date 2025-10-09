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

- **src/App.jsx**: Main application component with guide viewer state management (83 lines)
- **src/main.jsx**: Application entry point with React Router setup and BrowserRouter wrapper (14 lines)
- **src/pages/CalcolatoreTassa.jsx**: Dedicated page for tax calculator (uses react-helmet-async)

### Component Architecture

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
│   │   ├── LandingServiceSection.jsx # Website creation service
│   │   ├── ContactSection.jsx      # Contact form integration
│   │   └── ToolsUnifiedSection.jsx # Unified tools display
│   ├── guides/
│   │   └── GuideViewer.jsx     # Full-screen guide reader
│   ├── forms/
│   │   └── ContactForm.jsx     # Contact form with EmailJS integration
│   └── ui/
│       ├── OspitlyLogo.jsx     # Reusable logo component
│       ├── Toast.jsx           # Toast notification system
│       └── FadeInOnScroll.jsx  # Scroll-triggered animation components
├── contexts/
│   └── ThemeContext.jsx        # Dark/light theme provider with localStorage persistence
├── data/
│   └── guideContent.jsx        # Guide data and content (JSX format)
└── pages/
    └── CalcolatoreTassa.jsx    # Separate tax calculator page
```

### Key Components & Features

1. **Guide System**:
   - Dynamic guide viewer with complete content for CIN compliance, tourist tax, and overbooking prevention
   - Categorized guides (taxes, calendars, overbooking, pricing, regulations)
   - Real content available for `cin-2025`, `tassa-soggiorno-2025`, `checkin-normative-2025`, and `overbooking-guida`

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

## State Management Pattern

### Simple React State Architecture
- **Guide Navigation**: React state in `App.jsx` using `useState` for current guide
- **Conditional Rendering**: Toggle between main landing page and full-screen guide viewer
- **Props Flow**: Guide selection passed down via `onGuideClick` prop to `GuidesSection`
- **Navigation**: Back navigation handled via `onBack` callback in `GuideViewer`
- **Event System**: Custom window events for CIN form opening (`openCinForm` event)
- **Theme Management**: Context-based theme provider with `useTheme` hook

### Data Flow Example
```
App.jsx (state: currentGuide, isCinFormOpen)
  ├─> GuidesSection (onGuideClick callback)
  ├─> GuideViewer (guide prop, onBack callback)
  └─> ContactForm (isOpen, onClose, showToast props)
```

## Development Guidelines

### Component Architecture
- Use functional components with hooks
- Implement responsive design with Tailwind breakpoints
- Follow the established color scheme (primary/secondary) with gradients
- Include hover states, transforms, and smooth transitions for interactive elements
- Organize components by function (layout, sections, guides, ui, forms, contexts)
- Wrap theme-dependent components with ThemeProvider from `ThemeContext`

### Content Management
- Guide content is stored in `src/data/guideContent.jsx` (centralized)
- Real guides use JSX content with structured sections
- Sources are provided for credibility and compliance
- Email links use pre-filled subject/body for better UX

### Performance Considerations
- Lazy load embedded iframes
- Use Framer Motion for smooth animations with intersection observer patterns
- FadeInOnScroll components use `useInView` hook with `-100px` margin for early triggering
- Animation components support direction (up/down/left/right), stagger delays, and custom durations
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

See **TODO.md** for the complete prioritized task list. Key items include:

### High Priority (🔴)
1. ~~**Toast System Bug**~~ - ✅ Fixed: Moved animation from inline `<style jsx>` to index.css
2. **Error Boundaries** - Add error handling to prevent full app crashes
3. **Form Validation** - Improve ContactForm with custom validation and error messages

### Medium Priority (🟡)
4. **SEO Meta Tags** - Complete Open Graph, Twitter Cards, and JSON-LD schemas
5. **Scroll Behavior** - Refactor nested setTimeout calls to use refs/async-await
6. **Lazy Loading** - Implement code splitting for GuideViewer and ContactForm

### Low Priority (🔵)
7. **Testing Setup** - Add Vitest + React Testing Library
8. **Rate Limiting** - Prevent EmailJS spam with cooldown (localStorage)
9. **Accessibility** - ARIA labels, focus trap, screen reader support
10. **Image Optimization** - WebP format, lazy loading, preload critical assets

Total estimated time: ~7h 45min
