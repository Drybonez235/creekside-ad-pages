# Astro + Tailwind CSS + Cloudflare Workers Template

A high-performance, developer-friendly starter template for building ultra-fast **static landing pages** using [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and [Cloudflare Workers](https://workers.cloudflare.com/) (Assets).

---

## 📋 Prerequisites

Before getting started, make sure you have:
* **Node.js** (v18.0.0 or higher) installed
* A **Cloudflare Account**
* **Git** installed on your system

---

## ⚡ Quick Start Guide

### 1. Initialize Your Repository
Create a new repository using this template on GitHub, then clone it locally:

```bash
git clone <YOUR_REPOSITORY_URL>
cd <YOUR_REPOSITORY_NAME>
```

### 2. Install Dependencies
Install all required Node modules:

```bash
npm install
```

### 3. Update Project Name in `wrangler.json`
Open `wrangler.json` in the root folder and update the `"name"` field to match your project or domain name. This name determines your default Cloudflare deployment worker name (`<project-name>.<your-subdomain>.workers.dev`).

```json
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "your-project-name",
  "compatibility_date": "2026-01-01",
  "assets": {
    "directory": "./dist"
  }
}
```

### 4. Start Local Development
Run the local dev server with full hot-reloading for Astro and Tailwind:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser to view your landing page.

---

## 🚀 Build & Deployment

### Step 1: Authenticate with Cloudflare
If you haven't already, log into your Cloudflare account using the Wrangler CLI:

```bash
npx wrangler login
```

### Step 2: Test Production Build Locally
Compile your static site to the `dist/` directory and test it locally inside Cloudflare's preview environment:

```bash
npm run build
npx wrangler dev
```

### Step 3: Deploy to Cloudflare Workers
Deploy your compiled static assets directly to Cloudflare's global edge network:

```bash
npm run deploy
```

> **Note:** The `npm run deploy` script executes `astro build && wrangler deploy` behind the scenes.

---

## ⚙️ Configuration Overview

### `astro.config.mjs`
Configured for pure static site generation (`output: 'static'`) with Vite Tailwind integration:

```javascript
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
```

### `wrangler.json`
Configured for Cloudflare Workers Static Assets serving directly from `./dist`:

```json
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "your-project-name",
  "compatibility_date": "2026-01-01",
  "assets": {
    "directory": "./dist"
  }
}
```

---

## 📁 Project Structure

```text
├── public/          # Static assets (favicons, og-images, icons)
├── src/
│   ├── components/  # Reusable UI components (Hero, Features, Footer)
│   ├── layouts/     # Base HTML layout structure
│   └── pages/       # Astro page routes (index.astro, etc.)
├── astro.config.mjs # Astro configuration & Tailwind plugin
├── wrangler.json    # Cloudflare Workers deployment settings
├── package.json     # Scripts and dependencies
└── README.md
```

---

## 🛠️ Helpful Commands

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Builds static HTML/CSS/JS into `./dist` |
| `npm run preview` | Previews the build output locally |
| `npx wrangler dev` | Previews static assets in local Cloudflare worker environment |
| `npm run deploy` | Builds static site & deploys to Cloudflare Workers |


### C. TO Import into `creekside-ad-pages` via Subtree
1. Navigate to your `creekside-ad-pages` repository root in your terminal:
   ```bash
   cd /path/to/creekside-ad-pages
   ```
2. Add the standalone repository as a subfolder using `git subtree add`:
   ```bash
   git subtree add --prefix=acme-homes https://github.com/your-username/acme-homes.git main --squash
   ```
3. Push the newly added folder to your main workspace remote:
   ```bash
   git push origin main


---

## Step 2: Daily Workflow & File Editing

Editing files inside a subtree folder follows standard local Git commands.

1. Edit files inside `creekside-ad-pages/acme-homes/`.
2. Stage and commit changes to the main workspace:
   ```bash
   git add acme-homes/
   git commit -m "Update hero section for Acme Homes"
   ```
3. Push your changes to `creekside-ad-pages`:
   ```bash
   git push origin main
   ```

---

## Step 3: Syncing with Standalone Repositories

### A. Exporting Local Changes to the Standalone Repo
To send updates from `creekside-ad-pages/acme-homes/` to its standalone repository on GitHub:

```bash
git subtree push --prefix=acme-homes https://github.com/your-username/acme-homes.git main
```

### B. Importing External Edits into `creekside-ad-pages`
If changes were committed directly inside the standalone repository, pull them into your main workspace subfolder:

```bash
git subtree pull --prefix=acme-homes https://github.com/your-username/acme-homes.git main --squash
```

---

## Quick Reference Summary

| Task | Command |
| :--- | :--- |
| **Add New Subtree** | `git subtree add --prefix=FOLDER_NAME REPO_URL main --squash` |
| **Normal Local Commit** | `git add .`<br>`git commit -m "Message"`<br>`git push origin main` |
| **Push Subfolder to Standalone** | `git subtree push --prefix=FOLDER_NAME REPO_URL main` |
| **Pull Standalone to Subfolder** | `git subtree pull --prefix=FOLDER_NAME REPO_URL main --squash` |