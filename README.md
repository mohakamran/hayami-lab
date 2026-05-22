# Professor Takehito Hayami Laboratory Portfolio Website
### Biomechanics & Sensory Systems • The University of Kitakyushu
#### 国際環境工学部 情報システム工学科 速水武人研究室 ポータルサイト

---

## 🔬 Academic Overview
This repository contains the high-fidelity, dual-language (English and Japanese) academic landing portal for the **Takehito Hayami Laboratory** inside the **Department of Information Systems Engineering at The University of Kitakyushu**. 

Our research focuses on the intersection of **Biomedical Engineering**, **Human Information Processing**, and **Sensory Replacement Technologies**. By measuring neural responses, muscular biometrics, and gaze pupillary coords, we develop assistive systems that support elder care, ocular coordination restoration, and natural touch-feedback mobility interfaces.

---

## ✨ Features & Visual Craftsmanship

- **🎨 High-Contrast Professional Aesthetic**: Implemented with a pristine light layout using a deep blue (`#1E3A8A`) and slate color scale, prioritizing typography focus, healthy negative space, and eye-friendly elements from header to footer.
- **🌐 Seamless Dual-Language Gateway (EN ⇄ JP)**: Equipped with a unified React context manager that translates all structural elements, labels, and research papers dynamically with zero page flickering.
- **🧬 Real-Time Simulated Biosignals Widget**: An interactive visualization dashboard tracking simulated **EEG Alpha Oscillations** and **Pupillary Coordinates** to emulate sensory device diagnostics with CSS-interpolated animations.
- **📂 Interactive Peer-Reviewed Publications Filter**: A high-efficiency search and filtering deck separating papers by sub-discipline (Biomedical Engineering, Ophthalmology, Human Interfaces, Medical Tech, Psychophysiology) with active numeric counts.
- **📸 High-Fidelity Prototype Lightbox**: A visual laboratory gallery that renders high-resolution prototypes and campus testing configurations inside responsive React dialog frames.
- **✉️ Secure Client-Side Inquiry Despatcher**: Complete with strict real-time field validation, error guidelines, success animations, and full physical office directions integrated with responsive Google Maps views.
- **⚡ Supercharged Transitions**: Powered by modern physics-backed animation loops from `motion/react` (staggered cards, sliding navigation bars, and spring layout indexes).

---

## 🛠️ Technology Stack & Architecture

- **Runtime**: Node.js with Vite + TypeScript compiler.
- **Visuals & Layout**: Tailwind CSS utility directives.
- **Type Safety**: Strictly typed custom interfaces for gallery items, publication logs, and locale parameters under `/src/types.ts`.
- **Motion Patterns**: Fluid entering transitions and spring dynamics imported from `motion/react`.
- **Typography**: Paired display fonts (**Poppins** for display elements and high-clarity **Inter** + **Noto Sans JP** for structural texts) configured in custom CSS layers.
- **Iconography**: Streamlined, descriptive, lightweight vector shapes imported exclusively from `lucide-react`.

---

## 🚀 Directory Structure

```bash
├── index.html           # Primary HTML document with embedded custom branding & SVG favicon
├── metadata.json        # Application parameters, permissions (Camera/Microphone/Geolocation), & SEO
├── package.json         # Node dependencies, build scripts (Vite, TypeScript, Tailwind)
├── src/
│   ├── App.tsx          # Master framework assembler rendering clean layouts
│   ├── AppContext.tsx   # React global context managing language settings (EN/JP) and helpers
│   ├── data.ts          # Consolidated database containing biographies, 8 research areas, and publications
│   ├── types.ts         # Centralized TypeScript definitions and item bounds
│   └── components/
│       ├── Navbar.tsx   # Glassmorphic responsive scrolling header with language switches
│       ├── Hero.tsx     # Eye-tracking visualizer & typewriter intro banner
│       ├── About.tsx    # Academic milestones & professor history
│       ├── ResearchAreas.tsx    # 8 bento-style core research cards & interactive study topics
│       ├── ResearchVision.tsx   # Mission quote & vector sine-wave animations
│       ├── Stats.tsx    # Count-up milestone figures using IntersectionObserver
│       ├── Publications.tsx     # Fuzzy search & category taxonomy filter logs
│       ├── Gallery.tsx  # Dynamic photo grid with zoomable ethics-disclosed lightboxes
│       ├── Contact.tsx  # Validated inquiry mail form & location maps
│       └── Footer.tsx   # Copyright, affiliations, and sticky back-to-top buttons
```

---

## 💻 Development & Deployment

First, initialize dependencies using:
```bash
npm install
```

Start the application in local development mode:
```bash
npm run dev
```

Build the application for production deployment (generates optimized, statically compressed client files inside the `dist/` directory):
```bash
npm run build
```

---

## 📜 License
The code inside this repository is licensed under the Apache-2.0 License. All rights reserved by The University of Kitakyushu Takehito Hayami Laboratory © 2026.
