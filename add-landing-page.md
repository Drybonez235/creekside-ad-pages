# Git Subtree Landing Pages Workflow Guide

This guide details the complete setup and daily operational workflow for managing multiple client landing pages inside a primary repository (`creekside-ad-pages`) while maintaining two-way synchronization with individual standalone client repositories using Git Subtrees.

---

## Core Mental Model

1. **Single Repository Root**: `creekside-ad-pages` contains only **ONE** `.git` folder located at its root directory.
2. **Normal Directories**: Client folders (e.g., `canvas-homes-landing-page/`, `acme-homes/`) are standard folders—**never** run `git clone` directly inside `creekside-ad-pages`.
3. **Dynamic Filtering**: `git subtree` inspects the main repository's commit history, extracts commits corresponding to a specific subfolder, and syncs those commits with an external standalone repository.

---

## Step 1: Adding a New Client Landing Page

When starting a new client project using a template or starting fresh, follow this safe initialization sequence:

### A. Create the Standalone Repository
1. Log into GitHub and create the new standalone repository (e.g., `https://github.com/your-username/acme-homes.git`).
2. If using a template repo on GitHub, select **"Use this template"** during creation.

### B. Customize the Project (Outside the Main Repo)
1. Clone `acme-homes` to a temporary directory **outside** of `creekside-ad-pages` (e.g., your Desktop):
   ```bash
   git clone https://github.com/your-username/acme-homes.git ~/Desktop/acme-homes
   ```
2. Navigate into the temporary folder, customize the files, commit, and push back to GitHub:
   ```bash
   cd ~/Desktop/acme-homes
   git add .
   git commit -m "Initial setup for Acme Homes"
   git push origin main
   ```
3. Delete or clean up the temporary workspace folder once pushed.

### C. Import into `creekside-ad-pages` via Subtree
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
   ```

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

---

## Key Safety Rules

* ❌ **DO NOT** run `git clone` inside `creekside-ad-pages`.
* ❌ **DO NOT** create cross-folder imports/references between different client directories.
* ✅ **DO** verify that no nested `.git` folders exist inside subdirectories (`find . -mindepth 2 -name ".git"`).
* ✅ **DO** commit all local changes in `creekside-ad-pages` before running `git subtree push` or `git subtree pull`.
