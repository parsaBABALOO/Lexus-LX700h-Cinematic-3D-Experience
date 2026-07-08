<div align="center">

# 🏎️ Lexus LX 700h: Cinematic 3D Web Experience

Where unyielding hybrid power blends seamlessly with elite web engineering.

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)]()
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)]()
[![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)]()

<p align="center">
  <img src="public/images/footer-bg.jpg" alt="Lexus 3D Showcase Preview" width="100%" style="border-radius: 4px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
</p>

An ultra-premium, immersive landing page built to showcase the true essence of the Lexus LX 700h. This project breaks the boundaries of traditional web design by merging real-time WebGL 3D rendering with scroll-driven cinematic visuals, delivering a luxury brand experience directly in the browser.

</div>

---

## ✨ The Experience (Features)

* Interactive 3D Canvas: Real-time 3D rendering of the Lexus LX 700h using React Three Fiber, complete with premium studio lighting and dynamic orbit controls.
* Cinematic Scroll Mechanics: Smart implementation of the IntersectionObserver API to seamlessly play, pause, and control background video muting based on viewport proximity.
* Master Craftsmanship Typography: Custom-built typewriter reveal effects (TypewriterText) that trigger precisely when elements enter the screen, mimicking high-end video production.
* Absolute Minimalist UI/UX: A dark-mode-exclusive interface inspired by elite automotive design, featuring custom luxury loading spinners and elegant serif typography.
* Smart Asset Caching: A custom XHR preloader for massive media assets ensures buttery-smooth playback and transitions before the user even begins their journey.

---

## 🏗️ Project Architecture

To maintain a clean and scalable codebase, the project is structured by separating the 3D WebGL environment from the DOM overlay elements.

```text
lexus-3d-experience/
├── app/
│   ├── layout.js            # Root layout and metadata configuration
│   ├── page.js              # Main entry point; handles preloading and layers canvas/dom
│   └── globals.css          # Global resets, natural scrolling, and luxury spinner animations
├── components/
│   ├── canvas/              # WebGL / 3D related components
│   │   ├── Scene.jsx        # The 3D stage: Camera setup, studio lighting, and OrbitControls
│   │   ├── Lexus.jsx        # Loads and renders the .glb 3D model of the vehicle
│   │   └── Lights.jsx       # Custom lighting setup for metallic paint reflections
│   └── dom/                 # HTML/CSS UI components layered over the 3D canvas
│       ├── Overlay.jsx      # Scrollable sections: Typography, Video logic, and Typewriter effects
│       └── Loader.jsx       # The luxury pre-loader screen shown while 3D assets download
├── public/                  # Static assets and media files
│   ├── models/
│   │   └── lx700h.glb       # The 3D car model file
│   ├── images/
│   │   ├── interior.jpg     # Takumi craftsmanship section image
│   │   ├── wheel.jpg        # Exterior details section image
│   │   └── footer-bg.jpg    # Final dramatic cinematic background
│   └── lexus-video.mp4      # High-octane background video
├── jsconfig.json            # Path alias configuration (e.g., @/)
└── package.json             # Project dependencies and npm scripts
```

---

## 🚀 Getting Started
​Follow these steps to run the luxury experience on your local machine.

## 1.Clone the repository

```bash
git clone [https://github.com/parsaBABALOO/Lexus-LX700h-Cinematic-3D-Experience.git](https://github.com/parsaBABALOO/Lexus-LX700h-Cinematic-3D-Experience.git)
cd Lexus-LX700h-Cinematic-3D-Experience
```

## 2.Install Dependencies
This project uses modern web tools. Install the required package via npm or yarn:

```bash
npm install
# or
yarn install
```
## 3.Ignite the Engine
Start the Next.js development server:

```bash
npm run dev
# or
yarn dev
```
Navigate to http://localhost:3000 in your browser to view the masterpiece.

---

## 🧠 Technical Highlights
​The Canvas/DOM Separation: By fixing the <Canvas> to the background and allowing the HTML <Overlay> to scroll naturally on top with pointer-events: none/auto, we achieve a flawless interaction where mouse scrolls bypass the DOM to rotate the 3D car only where intended.
​Intersection Observers: Videos and heavy animations are not triggered until they are exactly within the user's viewport, saving massive amounts of memory and ensuring smooth framerates (60FPS).

---

## 📄 License & Disclaimer
​This software is released under the MIT License.
​Disclaimer: This project is a non-commercial, educational portfolio piece showcasing advanced frontend development skills. All 3D models, images, videos, and brand names (Lexus) are the intellectual property of Toyota Motor Corporation and are used solely for conceptual demonstration. This project is not affiliated with or endorsed by Lexus.

---
