# Learn React

> From first component to production-grade applications

A three-level curriculum for building React skills — from static UIs through data-driven apps to production systems you can ship, test, and deploy.

## Prerequisites

- Basic HTML & CSS (layout, selectors, responsive basics)
- JavaScript fundamentals (variables, functions, arrays, objects)
- Comfort using a terminal and a code editor

## Tools & Technologies

- Vite
- React
- React Router
- TanStack Query
- React Hook Form
- Zod
- Tailwind CSS
- Vitest
- React Testing Library
- Playwright
- Next.js
- TypeScript

---

## React Foundations — Beginner

**Goal:** Comfortable building simple, static-to-interactive UIs
**Duration:** 4–6 wks

### Web & JS Prerequisites

#### HTML/CSS refresher

- Semantic HTML, document structure, forms
- CSS layout with flexbox and grid
- Responsive design basics

#### ES6+ essentials

- let/const, arrow functions
- Destructuring, spread/rest operators
- Template literals and modern array methods (map, filter, reduce)

#### Async JavaScript

- JSON structure and parsing
- fetch basics for HTTP requests
- async/await introduction

### React Core Concepts

#### What is React & why

- Component-based UI architecture
- Virtual DOM and reconciliation
- When React fits (and when it does not)

#### Setting up a project

- Vite + React (recommended over Create React App)
- Project structure and dev server
- Hot module replacement basics

#### JSX syntax rules

- Expressions in curly braces
- Single root element and fragments
- className, htmlFor, and camelCase attributes

#### Components & props

- Function components
- Passing and destructuring props
- Composing small components into screens

#### Rendering lists & keys

- map() to render collections
- Stable key selection
- Avoiding index-as-key pitfalls

#### Conditional rendering

- if/else, ternary, and logical &&
- Early returns in components
- Showing empty and loading states

#### Basic styling

- CSS modules
- Inline styles and style objects
- Organizing component styles

### State & Events

#### useState hook

- Local component state
- State updates and re-renders
- Lifting state when siblings need to share data

#### Handling events

- onClick, onChange, onSubmit
- Synthetic events in React
- Passing arguments to event handlers

#### Controlled components & forms

- Controlled inputs (text, checkbox, select)
- Form submission and validation basics
- Managing multiple form fields

### Project Work

- Todo app with add, complete, and delete
- Simple calculator
- Product list with filtering
- Debug components with React DevTools

---

## Building Real Applications — Intermediate

**Goal:** Build multi-page, data-driven, connected applications
**Duration:** 6–8 wks

### Hooks Deep Dive

#### useEffect

- Data fetching on mount
- Cleanup functions (subscriptions, timers)
- Dependency arrays and stale closure pitfalls

#### useRef, useMemo, useCallback

- DOM refs and mutable values without re-renders
- Memoizing expensive calculations
- Stabilizing callbacks for child components

#### Custom hooks

- Extracting reusable stateful logic
- Naming conventions (use*)
- Sharing logic across components

### Routing & Navigation

#### React Router

- Routes, nested routes, and layouts
- URL params and query strings
- Programmatic navigation (useNavigate, Link)

### State Management

#### Beyond local state

- Context API for shared app state
- Lifting state up and prop drilling problems
- Intro to Zustand or Redux Toolkit

### Working with APIs

#### REST API integration

- fetch or axios for HTTP calls
- Loading, error, and empty states
- Environment variables for API URLs

#### TanStack Query intro

- Caching and background refetch
- Query keys and mutations
- Replacing manual fetch + useEffect patterns

### Forms & Validation

#### React Hook Form + validation

- Registering fields and handling submit
- Schema validation with Zod or Yup
- Error messages and accessible form UX

### Styling at Scale

#### Utility-first and component libraries

- Tailwind CSS or styled-components
- shadcn/ui or MUI for pre-built components
- Theming and design tokens

### Project Work

- Dashboard with charts and summary cards
- E-commerce catalog with cart and checkout flow
- Booking system with API integration
- M-Pesa STK push demo (fintech integration pattern)

---

## Production-Grade React — Expert

**Goal:** Architect, optimize, test, and ship scalable applications
**Duration:** 8–12 wks

### Advanced Patterns

#### Composition patterns

- Compound components
- Render props
- Higher-order components (HOCs)

#### Performance optimization

- React.memo and when to skip it
- Code-splitting and lazy loading (React.lazy, Suspense)
- List virtualization for large datasets

#### Resilience

- Error boundaries
- Suspense for data and code loading

### State & Data Architecture

#### Advanced state patterns

- Redux Toolkit or Zustand at scale
- Server state vs. client state separation
- Optimistic updates and caching strategies

### TypeScript with React

#### Typing React code

- Typing props, state, and event handlers
- Generic components and hooks
- Typing context and custom hooks

### Testing

#### Test pyramid for React

- Unit tests with Vitest or Jest
- Component tests with React Testing Library
- E2E tests with Playwright or Cypress

### Next.js / Full-Stack React

#### Rendering strategies

- SSR, SSG, and ISR concepts
- App Router and server components
- API routes and server actions

#### Authentication

- NextAuth, Clerk, or custom JWT flows
- Protected routes and session handling

### Architecture & DevOps

#### Project structure

- Scalable folder layouts
- Monorepos with Turborepo or Nx

#### Shipping & quality

- CI/CD basics and environment configs
- Accessibility (a11y) at scale
- Security: XSS, CSRF, secure API calls

### Project Work

- SACCO management portal
- ERP module with role-based access
- Fintech dashboard with M-Pesa integration
- Full auth, test coverage, and deployment (Vercel or VPS)

---

_Generated from Deptforge curriculum data. Visit the site for the latest version._