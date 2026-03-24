# Ashim Dhor — Academic Website

A clean, minimal academic website built with pure HTML/CSS. No build tools, no frameworks — just upload to GitHub Pages and go.

## Quick Start

1. **Fork or clone** this repo
2. **Rename** to `<your-github-username>.github.io`
3. **Enable GitHub Pages**: Settings → Pages → Source: `main` branch, `/ (root)`
4. Your site will be live at `https://<your-github-username>.github.io`

## What to Customize

### 1. Your Photo
Replace `assets/img/profile.jpg` with your photo (square, ~400×400px works well).

### 2. Your CV
Place your CV PDF at `assets/pdf/Ashim_CV.pdf` (or update the link in the navbar of all 3 HTML files).

### 3. Links
Search for `href="#"` across all HTML files — these are placeholder links for:
- Google Scholar profile
- GitHub profile
- LinkedIn profile
- Paper links (arXiv, project pages, code repos)

### 4. Content
All content is in plain HTML — easy to edit:
- `index.html` — About page (bio, news)
- `publications.html` — Papers list
- `experience.html` — Research, industry, awards, service

### 5. Colors (Optional)
Edit CSS variables in `assets/css/style.css`:
```css
--c-accent: #2d5a3d;       /* Main accent (green) */
--c-accent-light: #3a7a52;  /* Hover state */
--c-bg: #faf9f7;            /* Background */
```

## File Structure
```
├── index.html              # About page
├── publications.html       # Publications
├── experience.html         # Experience, awards, service
├── assets/
│   ├── css/
│   │   └── style.css       # All styles
│   ├── img/
│   │   └── profile.jpg     # YOUR PHOTO HERE
│   └── pdf/
│       └── Ashim_CV.pdf    # YOUR CV HERE
└── README.md
```

## Adding a New Publication

Copy this block into `publications.html` under the appropriate year:

```html
<div class="pub-card fade-up">
  <div class="pub-title">Your Paper Title</div>
  <div class="pub-authors"><span class="me">Ashim Dhor</span>, Co-Author Name</div>
  <div class="pub-venue">Conference/Journal Name, Year</div>
  <div class="pub-links">
    <a href="PAPER_URL">Paper</a>
    <a href="CODE_URL">Code</a>
  </div>
</div>
```

## Adding a News Item

Add this to `index.html` inside `.news-list`:

```html
<li class="news-item">
  <span class="news-date">Month Year</span>
  <span class="news-content">Your news here with <strong>bold highlights</strong>.</span>
</li>
```

## License
Feel free to use this template for your own academic website.
