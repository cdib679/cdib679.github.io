# Opera Singer Website — GitHub Pages

A clean, elegant static site for an opera soprano. No build tools, no frameworks — pure HTML, CSS, and JS.

---

## Folder Structure

```
/                          ← root (GitHub Pages serves from here)
├── index.html             ← Home page
├── 404.html               ← 404 page
├── about/
│   └── index.html         ← /about
├── listen/
│   └── index.html         ← /listen
├── projects/
│   └── index.html         ← /projects
├── contact/
│   └── index.html         ← /contact
├── css/
│   └── style.css          ← All styles
├── js/
│   ├── layout.js          ← Injects shared header + footer into every page
│   └── main.js            ← Navbar scroll effect, mobile menu, contact form
└── images/                ← Create this folder and add your photos here
    ├── hero.jpg            ← Hero portrait (home page) — ~840×1120 px
    ├── about.jpg           ← About page photo — ~600×900 px
    ├── project-traviata.jpg
    ├── project-figaro.jpg
    ├── project-album.jpg
    ├── project-butterfly.jpg
    ├── project-recital.jpg
    └── project-boheme.jpg
```

---

## How to Edit Content

Every file has `<!-- EDIT: ... -->` comments marking exactly what to change. Here's a quick summary:

| What | Where |
|------|-------|
| Her name | `js/layout.js` (nav logo) + every `<title>` tag |
| Social links | `js/layout.js` (footer) |
| Hero photo + tagline | `index.html` |
| Upcoming performances | `index.html` (copy/paste the `<article>` blocks) |
| Bio paragraphs | `about/index.html` |
| Press quotes | `about/index.html` |
| Spotify / YouTube embed | `listen/index.html` (replace the `src` URL) |
| Track list | `listen/index.html` |
| Project cards + photos | `projects/index.html` |
| Contact email + details | `contact/index.html` |

---

## Clean URLs (no .html)

GitHub Pages automatically serves `/about/index.html` when you visit `/about` — no configuration needed. The subfolder-per-page structure handles this.

---

## Contact Form

The form is static by default. To make it actually send emails:

1. Sign up at [Formspree.io](https://formspree.io) (free tier works).
2. Create a form, copy your endpoint URL.
3. In `contact/index.html`, set `action="https://formspree.io/f/YOUR_ID"` on the `<form>` tag.
4. In `js/main.js`, **remove** the `contact-form` submit listener block (or the form will be intercepted before it submits).

---

## GitHub Pages Setup

1. Push this folder to your repository.
2. Go to **Settings → Pages**.
3. Set source to `main` branch, `/ (root)`.
4. Your site will be live at `https://yourusername.github.io/repo-name/`.

If the site lives in a subfolder (e.g. `/repo-name/`), open `js/layout.js` and set:
```js
const ROOT = '/repo-name/';
```
