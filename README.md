

## 📁 Project Structure

```
collectedge-app/
├── public/
│   └── index.html              
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

**1. clone the project*
```bash

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


---

## 🎨 Design System

All design tokens are defined as CSS custom properties in `src/styles/global.css`. To update the entire theme, change values in `:root`:

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
- The standalone `collectedge.html` file is a **self-contained preview** with all assets base64-embedded — open it directly in any browser without any install.
- Images in `/src/assets` are the original Figma exports provided with the assignment.

---
