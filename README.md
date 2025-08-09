# wareweDesign

A modern front-end project scaffolding using **TypeScript**, **Tailwind CSS**, and **Vite**, built for streamlined development.

##  Project Structure

```
├── client/                 # Front-end application source code
├── public/                 # Static assets served by Vite
├── .env                    # Environment variable definitions
├── components.json         # Metadata for UI components or tooling
├── index.html              # Main HTML entry point
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── postcss.config.js       # PostCSS plugins and settings
├── tailwind.config.ts      # Tailwind CSS configuration
├── vite.config.ts          # Vite build config
└── vite.config.server.ts   # Vite server-specific settings
```

##  Features

- **TypeScript** for strict typing and scalable code
- **Tailwind CSS** for utility-first styling
- **Vite** for fast dev server and optimized builds
- Structured configuration for seamless development

##  Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or Yarn as your package manager

### Installation

```bash
git clone https://github.com/krthik777/wareweDesign.git
cd wareweDesign
npm install
```

### Development

```bash
npm run dev
```

This starts a live development server—open the provided URL to view your app.

### Building for Production

```bash
npm run build
```

Generates optimized production assets in the `dist/` folder (if configured).

### Preview Production Build

```bash
npm run preview
```


##  Configuration

- **Tailwind:** Customize styles in `tailwind.config.ts` and `postcss.config.js`.
- **Vite:** Adjust build and server behavior in `vite.config.ts` and `vite.config.server.ts`.

