# AI Rules for Jabbud Creations Application

This document outlines the core technologies and best practices for developing the Jabbud Creations web application.

## Tech Stack Overview

*   **Frontend Framework:** React (with Vite for development)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS for utility-first styling.
*   **UI Components:** shadcn/ui, built on Radix UI primitives, for accessible and customizable components.
*   **Routing:** React Router DOM for client-side navigation.
*   **Data Management:** React Query for efficient server state management and data fetching.
*   **Backend & Database:** Supabase for database, authentication, and file storage.
*   **Form Handling:** React Hook Form for robust form management, paired with Zod for schema validation.
*   **Carousels:** Embla Carousel React for responsive and performant carousels, including autoplay functionality.
*   **Icons:** Lucide React for a comprehensive set of SVG icons.
*   **Notifications:** Sonner for modern and accessible toast notifications.

## Library Usage Guidelines

To maintain consistency and leverage the strengths of our chosen libraries, please adhere to the following rules:

*   **UI Components:**
    *   **Always** prioritize using components from `shadcn/ui`.
    *   If a specific `shadcn/ui` component doesn't exist or requires significant modification, create a new component that wraps or extends `shadcn/ui` primitives (e.g., `Button`, `Card`) rather than directly editing `shadcn/ui` files.
*   **Styling:**
    *   **Exclusively** use Tailwind CSS classes for all styling. Avoid inline styles or separate CSS files (except for `src/index.css` for global styles).
    *   Ensure designs are responsive by utilizing Tailwind's responsive utility classes.
*   **Routing:**
    *   Use `react-router-dom` for all client-side routing. Define routes within `src/App.tsx`.
*   **Data Fetching & Server State:**
    *   Manage all server-side data fetching and caching using `@tanstack/react-query`.
*   **Forms & Validation:**
    *   Implement form logic using `react-hook-form`.
    *   Use `zod` for defining and validating form schemas.
*   **Icons:**
    *   All icons should be imported and used from the `lucide-react` library.
*   **Carousels:**
    *   For carousels, use `embla-carousel-react` along with the `embla-carousel-autoplay` plugin.
*   **Notifications:**
    *   Use `sonner` for displaying toast notifications to the user.
*   **Backend Interactions:**
    *   All database and storage interactions should be performed using the Supabase client (`@supabase/supabase-js`) as configured in `src/lib/supabase.ts`.
*   **Utility Functions:**
    *   For combining CSS classes, use `clsx` and `tailwind-merge` via the `cn` utility function in `src/lib/utils.ts`.