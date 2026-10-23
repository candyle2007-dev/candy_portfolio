# Candy Lim — Portfolio

A React portfolio site, styled after a dark, minimal engineer portfolio.

## Quick look (no install)

Double-click `preview.html` (needs an internet connection for React and fonts).

After editing anything in `src/`, rebuild it with:

```bash
python3 build_preview.py
```

## Run as a real React project

1. Install Node.js (LTS) from https://nodejs.org
2. In this folder:

```bash
npm install
npm run dev      # local dev server with hot reload
npm run build    # production build in dist/ (ready for Vercel/Netlify)
```

## Editing content

All text lives in `src/data.js`: profile, projects, experience, education, skills.

- Add your GitHub and LinkedIn URLs under `profile.social` (they're hidden while empty).
- Projects marked `sample: true` are placeholders. Replace them with your own work.
- Your résumé is served from `public/resume.pdf`.
