# BHE UNI Website Redesign UI

A premium, responsive redesign of the BHE UNI website. This project contains a high-fidelity mockup featuring a modern dark mode style footer, rich glassmorphic elements, HSL custom color palettes, custom fonts (Kanit), and micro-animations.

It is structured as a static multi-page project, bundled and served using **Vite**.

## Project Features

*   **Become an Agent Landing Page (`index.html`)**: Features clean step trackers, direct university portal integrations, commission stats count-ups, and a compliance-first onboarding form.
*   **About Us / Who We Are Page (`about.html`)**: Details team profiles, leadership members, key statistics, interactive Google maps integrations for offices, and a clean Q&A accordion.
*   **Responsive Megamenu**: Seamlessly collapses into a CSS/JS details-accordion for mobile screens.
*   **Vite Integration**: Instant hot module reloading (HMR) and production builds.

## Directory Layout

```
├── public/
│   └── assets/          # Static images, flags, logo, team photos
├── src/
│   ├── styles.css       # Custom styling overlay on Bootstrap 5
│   ├── app.js           # Become an Agent page interactions
│   └── about.js         # About Us page interactions and location map logic
├── index.html           # Main landing page (Become an Agent)
├── about.html           # About page (Who We Are)
├── package.json         # Package configuration
├── vite.config.js       # Vite multi-page configuration
└── README.md            # Documentation
```

## Getting Started

To run the project locally:

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start development server**:
    ```bash
    npm run dev
    ```
    This will launch a local server (typically at `http://localhost:5173`) with Hot Module Replacement.

3.  **Build for production**:
    ```bash
    npm run build
    ```
    This creates an optimized, minified bundle in the `dist/` directory, ready to be hosted on any static provider (GitHub Pages, Netlify, Vercel, etc.).
