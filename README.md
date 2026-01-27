# 🚀 Modern React Portfolio

> A high-performance, responsive portfolio website built with React and Vite, featuring a "Fintech-inspired" aesthetic, dynamic video backgrounds, and glassmorphism UI elements.

![Project Preview](public/hero-bg.webp)
## 🔗 Live Demo
**[View Live Website](https://sahmed0.github.io)**

## ✨ Key Features

* **Modern "Fintech" Aesthetic:** Clean typography (`Space Grotesk` + `Inter`), vibrant gradients, and a "Jeton-style" minimalist layout.
* **Dynamic Island Navigation:** A custom-built floating navigation bar with glassmorphism effects (`backdrop-filter`) that adapts to mobile screens.
* **Performance Optimised:**
    * Uses **Vite** for lightning-fast HMR and bundling.
    * **WebP & MP4** optimization for media assets.
    * Lazy-loading principles applied to heavy components.
* **Responsive & Mobile-First:**
    * Complex CSS Grid/Flexbox layouts that stack gracefully on mobile.
    * Touch-optimised navigation and "Poster fallback" for video backgrounds on iOS Low Power Mode.
* **Video Hero Section:** Implements HTML5 Video with `playsInline` support for seamless mobile playback without blocking the main thread.

## 🛠️ Tech Stack

* **Core:** [React 18](https://reactjs.org/), [Vite](https://vitejs.dev/)
* **Styling:** CSS3 (Variables, Flexbox, Grid, Animations), FontAwesome
* **Deployment:** GitHub Pages (Manual & CI/CD workflows)
* **Version Control:** Git, GitHub

## ⚡ How to Run Locally

If you want to view the source code or run this project on your machine:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/sahmed0/sahmed0.github.io.git
    cd sahmed0.github.io
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Start Local Server**
    ```bash
    npm run dev
    ```
    *Open `http://localhost:5173` in your browser.*

## 📂 Project Structure

```text
/public          # Static assets (Favicons, Video Loops, Images)
/src
├── components   # Reusable UI components (ProjectCard, etc.)
├── App.jsx      # Main application logic & layout structure
├── App.css      # Global styles, variables, and responsive media queries
├── data.js      # Centralised content management (Text/Links)
└── main.jsx     # React entry point
```

🚀 Deployment
This project is deployed to GitHub Pages.

Build Command:
```bash
npm run build
```
(Generates a production-ready dist folder)

Deploy Command:
```bash
npm run deploy
```
(Pushes the build artefacts to the gh-pages branch)
