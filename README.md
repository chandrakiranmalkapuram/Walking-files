# Walking Files — Desktop Software Studio Website

> **Thoughtfully made tools. Ready for your everyday.**  
> An independent software brand building useful, private macOS applications.

This repository contains the official website for **Walking Files**, showcasing our desktop utilities including our flagship macOS application, **ORBIT**.

---

## 🏛️ Design Identity

- **Visual Palette**: Midnight Indigo (`#070A12`), Deep Ink (`#0D1424`), Warm Ivory / Parchment (`#FAF8F5`), and Antique Gold (`#D4AF37`) accents.
- **Architectural Motif**: Subtle Indian geometric linework, jaali latticework, and stone step-well symmetry combined with clean modern software typography.
- **Privacy & Quality First**: Zero trackers, zero cookies, zero external telemetry SDKs.

---

## 🚀 Applications Featured

1. **ORBIT** (`/orbit`):
   - A floating macOS desktop file utility built with **Tauri v2** and **Rust**.
   - Offline drag-and-drop file transformations (Image format conversion, multi-page PDF synthesis, safe ZIP unpack, and EXIF metadata stripping).
   - Currently in active development (v0.1.0); open-source on GitHub at [`chandrakiranmalkapuram/orbit`](https://github.com/chandrakiranmalkapuram/orbit).
2. **FOLIO** (Upcoming Concept):
   - Minimal markdown journal and distraction-free document reader.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/) + custom Indian-inspired architectural SVGs
- **Styling**: Vanilla CSS Design System with custom tokens (`src/styles/designTokens.css` and `src/styles/global.css`)
- **Hosting Target**: [Cloudflare Pages](https://pages.cloudflare.com/) (Static, 100% free tier)

---

## 💻 Local Development

### 1. Prerequisites
- Node.js `v18+` (tested on Node v22)
- npm `v9+`

### 2. Setup & Run
```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 3. Production Build & Preview
```bash
# Compile TypeScript & bundle static assets
npm run build

# Preview the production build locally
npm run preview
```
Output directory: `dist/`

---

## ☁️ Cloudflare Pages Deployment

Walking Files is optimized for static hosting on Cloudflare Pages:

1. Create a new repository on GitHub (suggested: `walking-files-website`).
2. Push this project to your new repository:
   ```bash
   git add .
   git commit -m "Initial commit of Walking Files website"
   git remote add origin https://github.com/<your-username>/walking-files-website.git
   git push -u origin main
   ```
3. In the [Cloudflare Dashboard](https://dash.cloudflare.com/):
   - Go to **Compute (Workers & Pages)** > **Create application** > **Pages** > **Connect to Git**.
   - Select the `walking-files-website` repository.
   - Set **Build command**: `npm run build`
   - Set **Build output directory**: `dist`
   - Framework preset: `Vite` (or `None`)
4. Click **Save and Deploy**. Your site will be published at `https://walking-files.pages.dev` (or your assigned Pages subdomain).
5. (Optional) Connect a custom domain at any time in Cloudflare Pages settings.

> **Note on Client-Side Routing**: The `public/_redirects` file is pre-configured (`/* /index.html 200`) so all deep routes (`/orbit`, `/apps`, `/about`) load directly without 404 errors.

---

## 📦 Updating the Application Catalogue

All application metadata, versions, and release links are centrally managed in:
`src/data/appsData.ts`

### Release Management Rules:
- **`in-development`**: Shows a restrained `"macOS release coming soon"` badge and points to the GitHub repository.
- **`available`**: When a public DMG/ZIP asset is released and verified on GitHub Releases, configure `downloadUrl` with the exact URL:
  ```ts
  downloadUrl: 'https://github.com/chandrakiranmalkapuram/orbit/releases/download/v0.1.0/ORBIT_0.1.0_aarch64.dmg'
  ```
  The UI will automatically render a functional download button.
- **`upcoming`**: For future studio concepts. Never claims to be downloadable.

---

## 👨‍💻 Developer & Attribution

- **Founder & Engineer**: Chandra Kiran Malkapuram
- **Personal Portfolio**: [chandrakiran.dev](https://chandrakiran.dev)
- **GitHub**: [@chandrakiranmalkapuram](https://github.com/chandrakiranmalkapuram)
- **License**: MIT
