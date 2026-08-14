### 2. `CLAUDE.md`

```markdown
# AI Assistant Guidelines for Landing Pages Monorepo

## Workspace Architecture
- **Architecture**: Monorepo containing independent landing page sites per directory.
- **Subtree Management**: Directories (such as `canvasHomes/`) are regularly split and pushed to standalone repositories via `git subtree`.

## Critical Code Rules
1. **Directory Isolation**: All assets, components, dependencies, and configuration files for a landing page MUST reside inside its specific project directory. Never create imports that reference sibling directories (e.g., do NOT import from `../company-a/` inside `canvasHomes/`).
2. **Path References**: Use relative paths local to the project directory for static assets and components so they work seamlessly when exported as a repository root.
3. **No Cross-Pollination**: Do not introduce global workspace dependencies unless explicitly requested.

## Common Operations
- **Deploy/Sync Subtree**: 
  `git subtree push --prefix=<folder-name> <remote-repo-url> main`
- **Import Subtree Updates**: 
  `git subtree pull --prefix=<folder-name> <remote-repo-url> main --squash`

## Technical Stack Guidelines
- Cloudflare Workers / Cloudflare Pages compatible deployments.
- Standard HTML/CSS/JS or framework builds localized inside each project folder.
