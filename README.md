# Adrian N. Raymundo — Portfolio

Personal portfolio of Adrian N. Raymundo, 3rd-year BS Computer Science student at Gordon College, Olongapo City. Built for a course project on responsive design and UI/UX.

**Live site:** https://adrian-portfolio-v2.vercel.app

## Sections

- **Home** — introduction and links
- **About & Skills** — background and technical skills
- **Projects** — UPahan, AquaSafe, OMPC loan system
- **Case Study** — UPahan: overview, understanding the user, design, takeaways
- **Contact**

## UI/UX principles applied

- Clear navigation with a sticky menu that highlights the current section
- Readable type and high-contrast colors
- Consistent card design, spacing and colors across sections
- Responsive layout for phones and desktops
- Accessibility: skip link, visible focus states, alt text on every image, keyboard-friendly image viewer, reduced-motion support

## Tech stack

- HTML5, CSS3, vanilla JavaScript (no frameworks or build step)
- Google Fonts: DM Sans, Plus Jakarta Sans, Space Mono
- Sticky stacking cards use CSS scroll-driven animations, with a JavaScript fallback for older browsers

## Project structure

```
.
├── index.html        page markup
├── css/
│   └── style.css     all styles
├── js/
│   └── main.js       card stacking, active menu, image viewer
└── assets/           photo, UPahan screenshots, favicon
```

## Run locally

1. Download or clone the repository:
   ```
   git clone https://github.com/AdRay-11/adrian-portfolio-v2.git
   cd adrian-portfolio-v2
   ```
2. Open `index.html` in a browser, or serve the folder:
   ```
   python -m http.server 8000
   ```
   Then visit http://localhost:8000

## Deployment

Hosted on Vercel. Every push to `main` redeploys automatically.

## Notes

UPahan screenshots have sensitive details blurred.

## Contact

Adrian N. Raymundo — https://github.com/AdRay-11
