# My Portfolio Website

A high-performance, responsive portfolio website built with React and Vite, featuring a "Fintech-inspired" aesthetic, dynamic video backgrounds, and glassmorphism UI elements.

![Project Preview](public/screenshot.jpeg)

## 🔗 Live Demo
**[View Live Website](https://sahmed0.github.io)**

## ✨ Key Features

* **Modern "Fintech" Aesthetic:** Clean typography, vibrant gradients, and a "Jeton-style" minimalist layout.
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

---
## 📄 License
Copyright © 2026 Sajid Ahmed. All Rights Reserved.

This repository is intended solely for portfolio review and recruitment purposes. By accessing this repository, you acknowledge the following terms:
- View Only: Permission is granted to view the source code for the purpose of evaluating my professional skills and experience.
- No Unauthorised Use: No permission is granted to copy, modify, distribute, or use this code for any personal, commercial, or educational project.
- No AI Training: Use of this source code for the purpose of training machine learning models or generative AI is strictly prohibited.
