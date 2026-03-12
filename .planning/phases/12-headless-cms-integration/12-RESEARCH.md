# Phase 12 Research: Headless CMS Integration

**Phase:** 12 - Headless CMS Integration
**Date:** 2026-03-12
**Status:** Ready for planning

## Objective

Integrate Decap CMS (a Git-based Headless CMS) to provide a user-friendly dashboard for non-technical team members to manage site content independently. Crucially, the CMS must output structured JSON to preserve the complex React/Tailwind layouts built in previous phases.

Satisfies: `OPS-03`

## Key Conclusion

A Git-based CMS like Decap is the perfect choice for a Vite/React static site. It avoids the need for a database or API, keeping hosting costs near zero and security extremely high. To preserve the "Bento Box" layouts, we must meticulously map our existing Javascript data structures (e.g., `src/content/home.js`) directly into Decap's `config.yml` fields, outputting to JSON files that React can import and render.

## Architecture Patterns

### 1. CMS Installation & Routing
- Create a `public/admin` directory containing an `index.html` and `config.yml` to host the Decap CMS application.
- Decap CMS runs entirely in the browser, authenticating with GitHub via OAuth (often handled seamlessly if hosted on Netlify, or requiring a lightweight OAuth proxy if hosted elsewhere. For development, we can use the local backend feature).

### 2. The JSON Content Pipeline
- **Current State:** Content is hardcoded in `src/content/*.js` (e.g., `export const homePage = { ... }`).
- **New State:**
  - Decap CMS will write to `src/content/*.json` files (e.g., `src/content/home.json`).
  - The React components will import these JSON files directly (`import homeData from '../content/home.json'`).
- **Migration Task:** Convert all current `.js` exports into static `.json` files as the new source of truth.

### 3. CMS Configuration (`config.yml`)
- **Backend:** `name: git-gateway` (or `github` depending on deployment).
- **Media:** `media_folder: "public/images/gallery"`, `public_folder: "/images/gallery"`.
- **Collections:** We need a collection for "Pages" (Home, About, Donate, Staff, Registration).
  - Each page will have specific, nested fields matching the JSON structure.
  - *Example:* The Homepage `heroGallery` will be a `list` widget containing `image` and `string` (alt text) fields.
- **Lists/Arrays:** We will need collections for "FAQ Items" and "Contact Directory" so they can easily add/remove list items without editing massive JSON blobs.

## Validation Architecture

- **Automated:** Vitest rendering checks. The existing tests should pass if the JSON schema perfectly matches the old JS schema.
- **Manual:** Run the CMS locally using `npx decap-server`. Open `localhost:8080/admin`, make an edit, save it, and ensure the UI updates correctly without breaking the layout.

## Recommended Plan Shape

1. **Data Migration:** Convert all `src/content/*.js` files to `src/content/*.json` files and update React imports.
2. **CMS Configuration:** Create the `admin/config.yml` defining the exact field mappings for every page and list.
3. **Validation:** Verify the local CMS server writes correctly and the UI remains perfectly styled.