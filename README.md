# School 24 website redesign

A responsive, front-end-only redesign concept for the Kherson Specialized School No. 24 website. It was created as a Human–Computer Interaction assignment focused on improving a visually outdated and information-dense interface.

## Design improvements

- prominent sticky header with a clear primary navigation;
- reduced and grouped sidebar navigation;
- archives organized as folding year/month lists;
- long homepage content replaced by summaries and focused subpages;
- responsive layout for desktop, tablet, and mobile;
- accessible labels, keyboard focus, semantic landmarks, and reduced-motion support;
- local copies of the original school emblem and building photographs.

## Run locally

No build step or dependencies are required. Open `index.html` directly or serve the folder with any static web server:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Structure

- `index.html` — all presentation views and semantic markup
- `styles.css` — responsive visual system
- `app.js` — hash navigation, mobile menu, search dialog, and demo filters
- `assets/` — original school imagery used by the concept

This is a visual prototype. Links and document actions are intentionally demonstrative and no backend is included.
