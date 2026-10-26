# Walking Files — Desktop Software Studio Website

[![React](https://img.shields.io/badge/React-19-blue.svg?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-purple.svg?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Oxlint](https://img.shields.io/badge/Linter-Oxlint-orange.svg)](https://oxc-project.github.io/)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-F38020.svg?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> **Thoughtfully made tools. Ready for your everyday.**  
> An independent software studio crafting private, offline-first desktop utilities for macOS.

This repository contains the official website for **Walking Files** ([`chandrakiranmalkapuram/Walking-files`](https://github.com/chandrakiranmalkapuram/Walking-files)), showcasing our software catalogue, studio manifesto, and our flagship macOS application, **ORBIT**.

---

## 🏛️ Design Identity & Studio Principles

- **Visual Palette**: Midnight Indigo (`#070A12`), Deep Ink (`#0D1424`), Warm Ivory / Parchment (`#FAF8F5`), and Antique Gold (`#D4AF37`) accents.
- **Architectural Motif**: Subtle Indian geometric linework, *Jaali* latticework, and step-well symmetry unified with clean modern software typography.
- **Offline & Local-First**: Every utility runs directly on your machine. No accounts, no cloud sync lock-in, and zero network dependencies for core workflows.
- **Respectful Interfaces**: Unobtrusive utilities designed to stay out of your peripheral vision until invoked.
- **Privacy First**: Zero third-party trackers, zero advertising SDKs, zero invasive telemetry.

---

## 🚀 Applications in Catalogue

All software metadata, feature lists, and releases are managed centrally in [`src/data/appsData.ts`](src/data/appsData.ts).

### 1. **ORBIT** (`/orbit`) — *Flagship Desktop Utility*
- **Stack**: Tauri v2 + Rust + React
- **Repository**: [`chandrakiranmalkapuram/orbit`](https://github.com/chandrakiranmalkapuram/orbit)
- **Status**: Active Development (`v0.1.0`)
- **Key Capabilities**:
  - **Image Format Conversion**: Fast one-click batch conversions between PNG, JPEG, and WebP.
  - **Geometric Transforms**: Rotate 90° CW/CCW, horizontal/vertical flip, square crop, and monochrome filtering.
  - **EXIF Stripping**: One-drop metadata cleaner removing GPS tags, device fingerprints, and timestamps.
  - **Multi-Page PDF Synthesis**: Combine multiple images into an ordered, high-res PDF.
  - **PDF Page Extraction & Splitter**: Split document pages or extract OCR text locally.
  - **Safe Archive Peek & Unpack**: Inspect ZIP archives safely before uncompressing without file overwriting.

### 2. **FOLIO** — *Upcoming Concept*
- **Category**: Productivity & Writing
- **Status**: In Conception
- **Concept**: A distraction-free markdown workspace and local document reader built around a folder-as-a-library paradigm.

---

## 🧭 Website Architecture & Pages

- **Home (`/`)**: Studio introduction, featured highlight for ORBIT, design philosophy, and quick catalogue preview.
- **Applications (`/apps`)**: Complete listing of released, in-development, and conceptual tools with filterable badges.
- **ORBIT Product Page (`/orbit`)**: In-depth product presentation including interactive desktop mockup preview, system requirements, and privacy pledge.
- **About (`/about`)**: Studio narrative, core development principles, and founder information.
- **404 Page**: Custom fallback with seamless navigation back to safety.

---

## 🛠️ Tech Stack & Implementation

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite 8](https://vitejs.dev/)
- **Linter**: [Oxlint](https://oxc-project.github.io/)
- **Icons**: [Lucide React](https://lucide.dev/) + handcrafted inline SVG architectural motifs
- **Styling**: Pure Vanilla CSS design tokens (`src/styles/designTokens.css` and `src/styles/global.css`) without heavy external utility CSS frameworks.
- **Deployment & Routing**: [Cloudflare Pages](https://pages.cloudflare.com/) with SPA redirect rules (`public/_redirects`).

---

## 💻 Local Development

### Prerequisites
- **Node.js**: `v18+` (Tested on Node `v22+`)
- **npm**: `v9+`

### 1. Clone & Install
```bash
git clone https://github.com/chandrakiranmalkapuram/Walking-files.git
cd Walking-files
npm install
```

### 2. Start Local Dev Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Code Quality & Linting
```bash
npm run lint
```

### 4. Build for Production
```bash
npm run build
```
The compiled, optimized static bundle is output to `dist/`.

### 5. Preview Production Build
```bash
npm run preview
```

---

## ☁️ Cloudflare Pages Deployment

This site is optimized for zero-cost, high-speed static deployment on Cloudflare Pages:

1. **Connect GitHub Repository**:
   - In the [Cloudflare Dashboard](https://dash.cloudflare.com/), navigate to **Compute (Workers & Pages)** > **Create application** > **Pages** > **Connect to Git**.
   - Select the repository: `chandrakiranmalkapuram/Walking-files`.
2. **Configure Build Settings**:
   - **Framework Preset**: `Vite` (or `None`)
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
   - **Root Directory**: `/`
3. **Deploy**:
   - Click **Save and Deploy**.
   - Cloudflare will build the site and deploy it to a `*.pages.dev` subdomain.
4. **Custom Domain**:
   - Attach your custom domain in the Cloudflare Pages project settings at any time with automatic free SSL.

> **Client-Side Routing Note**: The file [`public/_redirects`](public/_redirects) (`/* /index.html 200`) ensures client-side deep links (`/orbit`, `/apps`, `/about`) resolve without 404 errors.

---

## 📁 Project Structure

```text
Walking-files/
├── public/
│   ├── _redirects              # Cloudflare Pages SPA rewrite rule
│   ├── favicon.svg             # Studio favicon
│   ├── orbit-icon.svg          # ORBIT vector app icon
│   ├── robots.txt              # Search engine directives
│   └── sitemap.xml             # Search engine sitemap
├── src/
│   ├── assets/                 # Studio graphic assets
│   ├── components/             # Reusable UI components
│   │   ├── AppCard.tsx         # Catalogue card with release status
│   │   ├── Footer.tsx          # Studio footer with links & credits
│   │   ├── GithubIcon.tsx      # SVG GitHub brand icon
│   │   ├── JaaliMotif.tsx      # Heritage geometric accent motifs
│   │   ├── Navbar.tsx          # Responsive navigation header
│   │   ├── OrbitPreview.tsx    # Interactive mockup of the ORBIT utility
│   │   └── ReleaseBadge.tsx    # Semantic status badges
│   ├── data/
│   │   └── appsData.ts         # Central catalogue data & studio metadata
│   ├── pages/
│   │   ├── AboutPage.tsx       # Studio principles & story
│   │   ├── AppsPage.tsx        # Application index
│   │   ├── HomePage.tsx        # Studio landing showcase
│   │   ├── NotFoundPage.tsx    # 404 fallback page
│   │   └── OrbitProductPage.tsx# Deep-dive product page for ORBIT
│   ├── styles/
│   │   ├── designTokens.css    # Colors, elevation, typography tokens
│   │   └── global.css          # Core layouts, resets, animations
│   ├── App.tsx                 # Client-side router & layout frame
│   └── main.tsx                # React application entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 👨‍💻 Author & Attribution

- **Founder & Engineer**: Chandra Kiran Malkapuram
- **Portfolio**: [chandrakiran.dev](https://chandrakiran.dev)
- **GitHub**: [@chandrakiranmalkapuram](https://github.com/chandrakiranmalkapuram)

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
