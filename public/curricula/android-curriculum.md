# Learn Android

> From first composable to production-grade Kotlin apps

A three-level curriculum for building Android apps with Kotlin and Jetpack Compose — from static UIs through data-driven apps to production systems you can ship, test, and publish on the Play Store.

## Prerequisites

- Programming fundamentals in any language (variables, functions, collections)
- Comfort using a computer and installing developer tools
- Willingness to use Android Studio and an emulator or physical device

## Tools & Technologies

- Android Studio
- Kotlin
- Jetpack Compose
- Material 3
- ViewModel
- Navigation Compose
- Retrofit
- OkHttp
- Coroutines
- Kotlin Serialization
- Room
- DataStore
- Hilt
- Paging 3
- JUnit
- MockK
- Compose UI testing
- Fastlane

---

## Kotlin & Compose Foundations — Beginner

**Goal:** Comfortable building simple, static-to-interactive Android UIs
**Duration:** 4–6 wks

### Kotlin & Android Prerequisites

#### Kotlin essentials

- val/var, functions, and expression bodies
- Null safety, data classes, and lambdas
- Collections and common higher-order functions

#### Android Studio & Gradle

- Android Studio setup and SDK manager
- Project structure (app module, manifests, resources)
- Gradle basics: modules, dependencies, and sync

#### Android app lifecycle

- Activity basics and process lifecycle
- Configuration changes and recreation
- Running on emulator vs. a physical device

### Jetpack Compose Core Concepts

#### What is Compose & why

- Declarative UI vs. the old XML/View system
- Recomposition as the rendering model
- When Compose fits (and when Views still appear)

#### Setting up a Compose project

- Empty Compose Activity template
- Build.gradle Compose flags and BOM
- Preview annotations in Android Studio

#### Composable functions

- @Composable rules and naming
- Passing parameters into composables
- Composing small UI into screens

#### Modifiers

- padding, size, background, and clickable
- Modifier order matters
- Chaining modifiers for layout and style

#### Layouts

- Column, Row, and Box
- Arrangement, alignment, and weight
- Scaffold, TopAppBar, and FAB basics

#### Lists & keys

- LazyColumn and LazyRow
- Stable keys for list items
- Avoiding index-as-key pitfalls

#### Conditional UI

- if/when inside composables
- Empty, loading, and error placeholders
- Early returns from composable functions

#### Basic styling

- Material 3 theming basics
- Colors, typography, and shapes
- Light/dark theme awareness

### State & Events

#### remember and mutableStateOf

- Local UI state that survives recomposition
- State updates and what triggers a redraw
- When state should live higher in the tree

#### Handling events

- Clicks with Modifier.clickable and Button onClick
- TextField value and onValueChange
- Passing lambdas down as event handlers

#### Controlled inputs & simple forms

- Controlled TextField, Switch, and Checkbox
- Simple form submit and validation
- Managing multiple fields in one screen

### Project Work

- Todo app with add, complete, and delete
- Simple calculator
- Product list with filtering
- Debug layouts with Layout Inspector and Logcat

---

## Building Real Apps — Intermediate

**Goal:** Build multi-screen, data-driven, connected apps
**Duration:** 6–8 wks

### State Management Deep Dive

#### remember vs rememberSaveable

- Surviving configuration changes
- What belongs in saved instance state
- When remember is enough

#### State hoisting

- Lifting state to the caller
- Stateless composables and event callbacks
- Avoiding duplicated source of truth

#### ViewModel + StateFlow

- ViewModel as screen state owner
- StateFlow vs LiveData for Compose
- collectAsStateWithLifecycle

#### Unidirectional data flow

- UDF: events in, state out
- Single screen UiState data classes
- Reducing side effects in composables

### Navigation

#### Navigation Compose

- NavHost, NavController, and destinations
- Passing typed args between screens
- Nested graphs and back stack
- Bottom navigation with multiple back stacks

### Working with APIs

#### Retrofit + OkHttp

- Defining REST interfaces
- Interceptors, logging, and timeouts
- Environment-based base URLs

#### Coroutines

- suspend functions and Dispatchers
- viewModelScope and structured concurrency
- Cancellation and error handling

#### UI states & JSON

- Loading, error, empty, and success states
- Kotlin Serialization, Gson, or Moshi
- Mapping DTOs to domain models

### Local Data & Forms

#### Room database

- Entities, DAOs, and the database class
- Simple persistence and Flow queries
- Migrations at a high level

#### Forms in Compose

- Validation patterns and error messages
- Keyboard, focus, and IME actions
- Accessible form UX

#### DataStore

- Preferences DataStore vs SharedPreferences
- Typed proto DataStore intro
- User settings that survive process death

### Dependency Injection Basics

#### Hilt (or manual DI first)

- Constructor injection for ViewModels
- Modules, @Provides, and @Singleton
- Why DI helps testing and swapping implementations

### Styling at Scale

#### Material 3 theming

- Custom color schemes, typography, and shapes
- Reusable composables as an in-app component library
- Dynamic color and brand constraints

### Project Work

- Dashboard with summary cards and lists
- E-commerce catalog with cart flow
- Booking app with REST API integration
- M-Pesa STK push demo via API (fintech integration pattern)

---

## Production-Grade Android — Expert

**Goal:** Architect, optimize, test, and ship scalable apps
**Duration:** 8–12 wks

### Advanced Compose Patterns

#### Custom layouts & modifiers

- Custom Layout composables
- Modifier.Node and custom modifiers
- Reusable slot APIs

#### Performance

- Controlling recomposition
- derivedStateOf and stability annotations
- LazyColumn performance (keys, item types, prefetch)

#### Animations

- Compose Animation APIs
- Shared element transitions
- When animation hurts performance

### Architecture at Scale

#### Clean Architecture / MVI

- Layers: UI, domain, data
- MVI in Compose apps
- Repository pattern and use cases/interactors

#### Multi-module projects

- Feature and core modules
- Gradle convention plugins at a high level
- Avoiding circular dependencies

### Advanced State & Data

#### Flows at scale

- Complex StateFlow and SharedFlow pipelines
- Combining sources and mapping to UiState
- Error and retry strategies

#### Offline-first

- Room + remote sync
- Caching strategies and conflict handling
- Paging 3 for large lists

### Testing

#### Test pyramid for Android

- Unit tests with JUnit and MockK
- Compose UI tests with ComposeTestRule
- Instrumented/E2E with Espresso and UI Automator

### Authentication & Security

#### Auth flows

- Firebase Auth, OAuth, or custom JWT
- Token refresh and session expiry
- Protected screens after login

#### Secure storage & hardening

- EncryptedSharedPreferences and Android Keystore
- Network security config
- ProGuard/R8 shrinking and obfuscation

### Build, CI/CD & Distribution

#### Build variants

- Product flavors and build types
- Signing configs and keystore hygiene
- App Bundles and versioning

#### Shipping

- CI/CD with GitHub Actions or Fastlane
- Play Store publishing and internal testing tracks
- Accessibility: TalkBack and content descriptions

### Project Work

- SACCO management app
- ERP mobile module with role-based access
- Fintech app with M-Pesa integration
- Full auth, offline support, tests, and a Play Store-ready build

---

_Generated from Deptforge curriculum data. Visit the site for the latest version._