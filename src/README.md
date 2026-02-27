## 📁 Project Structure

```
advolve-landing/
├── index.html       
├── LandingPage.jsx   
└── README.md
```

---

### Using Vite + React

```bash
# 1. Create a new Vite project
npm create vite@latest advolve-landing -- --template react
cd advolve-landing

# 2. Install dependencies
npm install

# 3. Replace the default App component
cp LandingPage.jsx src/App.jsx

# 4. Remove the default CSS import in src/main.jsx
#    Delete or comment out: import './index.css'

# 5. Start the dev server
npm run dev
```

### Using Next.js

```bash
# 1. Create a new Next.js app
npx create-next-app@latest advolve-landing
cd advolve-landing

# 2. Copy the component
cp LandingPage.jsx app/page.jsx

# 3. Add "use client" directive at the very top of app/page.jsx
#    → "use client";

# 4. Run the dev server
npm run dev
```

---

## 🌐 Deployment

### Vercel (recommended — ~30 seconds)

```bash
# Install Vercel CLI if you haven't
npm i -g vercel

# Deploy from project root
vercel --prod
```

### Netlify Drop (zero CLI)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop the project folder
3. Your live URL is ready instantly

### GitHub Pages

```bash
# 1. Initialise git and push to GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/advolve-landing.git
git push -u origin main

# 2. Enable GitHub Pages
#    Go to: Repository → Settings → Pages
#    Source: Deploy from branch → main → / (root)
#    Save — your site will be live at:
#    https://YOUR_USERNAME.github.io/advolve-landing/
```

---

## ✅ Features

| Feature | Details |
|---|---|
| Pixel-accurate layout | Matches provided Figma design section by section |
| Fully responsive | Mobile < 480px · Tablet 768px · Desktop 1100px+ |
| Sticky navbar | Scroll shadow + mobile hamburger menu |
| Hero section | Animated floating dashboard cards |
| Features grid | 4 cards with live mini charts, progress bars, toggles |
| Accelerate section | Dark theme, tab switcher, bar chart |
| Testimonials | 3-column grid with hover lift effect |
| CTA section | Dark gradient card with action buttons |
| Footer | 4-column responsive grid |
| Hover states | All buttons, cards, and nav links |
| CSS animations | fadeInUp on load, float on cards, scroll-triggered reveals |

---

## 🎨 Tech Stack

- **HTML5 / CSS3 / Vanilla JS** — zero runtime dependencies
- **Fonts** — [Sora](https://fonts.google.com/specimen/Sora) (headings) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) (body) via Google Fonts
- **React version** — functional component with hooks, CSS-in-JS via `<style>` tag for portability
- **Animations** — pure CSS keyframes + Intersection Observer API

---

## 🔧 Customisation

All colours are defined as CSS custom properties at the top of the stylesheet — easy to retheme:

```css# Collectedge — Landing Page

A pixel-perfect React implementation of the **Collectedge** landing page, built from Figma designs using custom CSS (no Tailwind). Collectedge is a unified platform for Late-Stage DPD Resolution targeting lenders and collection agencies.

---

## 🚀 Tech Stack

- **React 18** — UI library
- **Custom CSS** — BEM methodology, CSS custom properties (no Tailwind / no CSS-in-JS)
- **Create React App** — Project scaffolding

---

## 📁 Project Structure

```
collectedge-app/
├── public/
│   └── index.html              # Google Fonts (Inter) loaded here
├── src/
│   ├── index.js                # React DOM entry point
│   ├── App.jsx                 # Root component — assembles all sections
│   ├── styles/
│   │   └── global.css          # CSS variables, resets, shared utilities
│   ├── assets/
│   │   ├── health-card.png     # Operational Health widget image
│   │   ├── chart-card.png      # Interactions chart image
│   │   ├── cheyenne-card.png   # Agent contact card image
│   │   └── afl-card.png        # AFL Services card image
│   └── components/
│       ├── Navbar.jsx / .css         # Fixed pill navbar with scroll blur
│       ├── Hero.jsx / .css           # Hero with 4 floating asset cards
│       ├── LogoStrip.jsx / .css      # Auto-scrolling company logo marquee
│       ├── ForLenders.jsx / .css     # 2×2 feature grid section
│       ├── ForAgencies.jsx / .css    # Tabbed section with gauge chart
│       ├── Testimonials.jsx / .css   # 3-card testimonial carousel
│       ├── ContactSection.jsx / .css # CTA section with animated dots
│       └── Footer.jsx / .css         # 3-column footer
```

---

## ⚙️ Setup & Installation

### Prerequisites
- **Node.js** v16 or higher
- **npm** v8 or higher

Check your versions:
```bash
node --version
npm --version
```

### Steps

**1. Extract the project zip**
```bash
unzip collectedge-final.zip
cd collectedge-app
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the development server**
```bash
npm start
```

The app will open automatically at **http://localhost:3000**

### Production Build
```bash
npm run build
```
Output is generated in the `/build` folder, ready to deploy on any static host (Netlify, Vercel, GitHub Pages).

---

## 🎨 Design System

All design tokens are defined as CSS custom properties in `src/styles/global.css`. To update the entire theme, change values in `:root`:

```css
:root {
  --color-primary:      #2563EB;   /* Main brand blue */
  --color-primary-dark: #1D4ED8;   /* Hover state */
  --color-text-primary: #0F172A;   /* Headings */
  --color-text-secondary: #475569; /* Body text */
  --radius-xl:          24px;      /* Card border radius */
  --shadow-card:        0 2px 20px rgba(37, 99, 235, 0.08);
}
```

---

## 🧩 Key Features

| Feature | Implementation |
|---|---|
| Glassmorphism cards | `backdrop-filter: blur()` + semi-transparent `rgba` background |
| Floating hero animations | CSS `@keyframes` with staggered `animation-delay` |
| Logo marquee | Duplicated list + `translateX` CSS animation |
| Gauge chart | SVG `stroke-dasharray` for the half-circle arc |
| Testimonial carousel | React `useState` with index-based rotation |
| Tabbed content | Controlled component with `useState` |
| Scroll-aware navbar | `useEffect` + `window.addEventListener('scroll', ...)` |

---

## 📦 Available Scripts

| Script | Description |
|---|---|
| `npm start` | Runs the app in development mode at localhost:3000 |
| `npm run build` | Builds the app for production into `/build` |
| `npm test` | Launches the test runner |

---

## 📝 Notes

- All CSS follows **BEM naming** (`block__element--modifier`) for clarity and zero class collisions.
- The standalone `collectedge.html` file in the zip is a **self-contained preview** with all assets base64-embedded — open it directly in any browser without any install.
- Images in `/src/assets` are the original Figma exports provided with the assignment.

---

*Built with React 18 · Custom CSS · No external UI libraries*
:root {
  --blue:      #1a6ff5;   /* Primary brand colour */
  --blue-dark: #0d47c8;   /* Hover states */
  --navy:      #0a1628;   /* Dark sections / headings */
  --green:     #10b981;   /* Positive indicators */
  --yellow:    #f59e0b;   /* Star ratings */
}
```

---

## 📄 License

MIT — free to use and modify.
