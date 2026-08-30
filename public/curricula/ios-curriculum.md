# Learn iOS

> From first SwiftUI view to App Store-ready production apps

A three-level curriculum for building iOS apps with Swift and SwiftUI — from static UIs through data-driven apps to production systems you can ship, test, and submit to the App Store.

## Prerequisites

- Programming fundamentals in any language (variables, functions, collections)
- A Mac capable of running a current Xcode
- Willingness to use Simulator and, ideally, a physical iPhone

## Tools & Technologies

- Xcode
- Swift
- SwiftUI
- Swift Package Manager
- NavigationStack
- URLSession
- Swift Concurrency
- Codable
- SwiftData
- UserDefaults
- XCTest
- Swift Testing
- XCUITest
- Fastlane
- Xcode Cloud
- TestFlight

---

## Swift & SwiftUI Foundations — Beginner

**Goal:** Comfortable building simple, static-to-interactive iOS UIs
**Duration:** 4–6 wks

### Swift & Xcode Prerequisites

#### Swift essentials

- let/var, functions, and closures
- Optionals and safe unwrapping
- Structs vs classes, and collections

#### Xcode & Swift Package Manager

- Xcode setup and project templates
- Project structure, targets, and schemes
- Swift Package Manager basics

#### iOS app lifecycle

- App and Scene lifecycle concepts
- What replaced AppDelegate for new SwiftUI apps
- Running on Simulator vs. a physical device

### SwiftUI Core Concepts

#### What is SwiftUI & why

- Declarative UI vs. UIKit
- View trees and identity
- When UIKit still shows up (UIViewRepresentable)

#### Setting up a SwiftUI project

- App protocol and WindowGroup
- Preview canvas in Xcode
- Assets catalog basics

#### Views & the View protocol

- body as a computed view tree
- Extracting subviews
- Passing data into views

#### Modifiers

- padding, frame, background, and clipShape
- Modifier order matters
- Reusable ViewModifier types

#### Layouts

- VStack, HStack, and ZStack
- Spacer, alignment, and frames
- ScrollView and safe area

#### Lists & identifiable items

- List and ForEach
- Identifiable and stable IDs
- Navigation from a row

#### Conditional UI

- if/switch inside ViewBuilder
- Empty, loading, and error placeholders
- @ViewBuilder helpers

#### Basic styling

- Colors, fonts, and SF Symbols
- System vs custom fonts
- Light/dark appearance

### State & Events

#### @State and @Binding

- Local view state
- Passing bindings to children
- When state should live higher in the tree

#### Handling events

- Button taps and gestures
- TextField and text input
- Passing actions as closures

#### Controlled inputs & simple forms

- TextField, Toggle, and Picker
- Form submit and basic validation
- Managing multiple fields on one screen

### Project Work

- Todo app with add, complete, and delete
- Simple calculator
- Product list with filtering
- Debug with Xcode previews, breakpoints, and the console

---

## Building Real Apps — Intermediate

**Goal:** Build multi-screen, data-driven, connected apps
**Duration:** 6–8 wks

### State Management Deep Dive

#### Object-based state

- @StateObject, @ObservedObject, and @EnvironmentObject
- ObservableObject vs the @Observable macro
- Observation framework and fine-grained updates

#### Unidirectional data flow

- MVVM in SwiftUI
- Events in, state out
- Keeping views thin

### Navigation

#### NavigationStack

- NavigationLink and value-based navigation
- Passing data between screens
- Programmatic navigation with path

#### Tab-based navigation

- TabView and tab items
- Per-tab navigation stacks
- Deep links at a high level

### Working with APIs

#### URLSession

- REST GET/POST with URLSession
- HTTP status handling
- Environment-based base URLs

#### Swift Concurrency

- async/await and Task
- MainActor for UI updates
- Cancellation and error handling

#### UI states & JSON

- Loading, error, empty, and success states
- Codable for JSON parsing
- Mapping DTOs to domain models

### Local Data & Forms

#### SwiftData (or Core Data)

- Models, ModelContainer, and queries
- Simple persistence on device
- When Core Data still appears

#### Forms & validation

- Form, TextField, and focused fields
- Validation patterns and error messages
- Accessible form UX

#### UserDefaults

- Simple preferences and flags
- AppStorage vs UserDefaults
- What not to store in defaults

### Dependency Management Basics

#### Environment-based DI

- Injecting services via Environment
- Protocol-based dependencies for tests
- Swift Package boundaries

### Styling at Scale

#### Design system basics

- Custom ViewModifiers and reusable styles
- Typography, spacing, and color assets
- Semantic colors for light/dark

### Project Work

- Dashboard with summary cards and lists
- E-commerce catalog with cart flow
- Booking app with REST API integration
- M-Pesa via API (fintech integration pattern)

---

## Production-Grade iOS — Expert

**Goal:** Architect, optimize, test, and ship scalable apps
**Duration:** 8–12 wks

### Advanced SwiftUI Patterns

#### Custom layouts

- Layout protocol
- Custom ViewModifiers at scale
- PreferenceKey for child-to-parent data

#### Performance

- View identity and equatable views
- Avoiding unnecessary re-renders
- @Observable fine-grained updates

#### Animations & transitions

- Implicit vs explicit animations
- Matched geometry effects
- When animation hurts performance

### Architecture at Scale

#### Architecture options

- Clean Architecture overview
- MVVM-C and TCA (The Composable Architecture)
- Repository pattern and use cases

#### Multi-module projects

- Swift Package feature modules
- App target vs library targets
- Avoiding circular dependencies

### Advanced State & Data

#### Async pipelines

- Combine or AsyncStream pipelines
- Mapping multiple sources into UI state
- Error and retry strategies

#### Offline-first

- SwiftData/Core Data + remote sync
- Caching and conflict handling
- Pagination for large lists

### Testing

#### Test pyramid for iOS

- Unit tests with XCTest and Swift Testing
- SwiftUI UI tests with XCUITest
- Snapshot testing basics

### Authentication & Security

#### Auth flows

- Sign in with Apple, OAuth, or custom JWT
- Token refresh and session expiry
- Protected screens after login

#### Secure storage & hardening

- Keychain for secrets
- App Transport Security
- Code obfuscation basics

### Build, CI/CD & Distribution

#### Signing & configs

- Build configurations and schemes
- Signing and provisioning profiles
- Versioning and build numbers

#### Shipping

- CI/CD with Xcode Cloud or Fastlane
- App Store submission and TestFlight
- Accessibility: VoiceOver and Dynamic Type

### Project Work

- SACCO management app
- ERP mobile module with role-based access
- Fintech app with M-Pesa integration
- Full auth, offline support, tests, and an App Store-ready build

---

_Generated from Deptforge curriculum data. Visit the site for the latest version._