# LOGIN Web HR Front (Next.js)

A feature-rich, high-performance employee portal and HR management interface built with Next.js. It provides a modern, responsive user experience for HR professionals and employees.

## Key Features

- **Modern Web Interface**: Clean, responsive design for all screen sizes.
- **Next.js Integration**: Leverages server-side rendering (SSR), static site generation (SSG), and API routes for optimal performance.
- **Complex State Management**: Uses Zustand for global state and React Hook Form for advanced multi-step form management.
- **Optimistic UI Updates**: Enhances the user experience by providing immediate feedback on permission changes and other actions.
- **Permission Syncing**: Implements a robust polling strategy with exponential backoff for enterprise-level permission management.
- **OData Integration**: Seamlessly fetches and queries data from the .NET backend using the OData protocol.

## Technology Stack

- **Framework**: Next.js
- **State Management**: Zustand
- **Form Management**: React Hook Form
- **Data Fetching**: React Query / TanStack Query
- **Styling**: Tailwind CSS (Assumed based on modern Next.js trends)

## Case Studies & Code Snippets

This frontend demonstrates advanced patterns for building enterprise-level applications:

- **[Enterprise Permission Synchronization System](../case-studies/01-permission-manager.md)**: A case study on optimistic updates and exponential backoff for permission management.
- **[Job Decision Form Case Study](../case-studies/02-job-decision-form.md)**: Details on managing complex multi-step forms with React Hook Form and Zustand.
- **[Optimistic Permission Update Snippet](../snippets/useOptimisticPermissionUpdate.ts)**: Implementation of optimistic UI updates using React Query.
- **[Permission Polling Snippet](../snippets/usePermissionSync.ts)**: Implementation of polling with exponential backoff.

## Architectural Decisions

1. **Next.js for Performance**: To ensure fast load times and a responsive user experience.
2. **Zustand for Simple State Management**: To provide a lightweight yet powerful way to manage global state without the boilerplate of Redux.
3. **React Hook Form for Complex Forms**: To handle intricate multi-step HR forms with performance-focused validation.
4. **Optimistic UI for Better UX**: To make the application feel faster and more responsive to user actions.
