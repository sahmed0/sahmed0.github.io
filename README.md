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
## Licence & Usage

Copyright (c) 2026 Sajid Ahmed. **All Rights Reserved.**

This repository is strictly for **portfolio review and recruitment purposes**.

### Use Constraints:
* **No Unauthorised Distribution:** You may not redistribute, sublicense, or sell any part of this source code.
* **No Commercial Use:** This software may not be used for any commercial or production purposes.
* **AI & Machine Learning Restriction:** Use of this source code, in whole or in part, for the purpose of training, fine-tuning, or validating machine learning or artificial intelligence models (including but not limited to LLMs and generative AI) is **strictly prohibited** without express written permission from the author.
* **Viewing & Forking:** Permission is granted to view the source code and fork the repository on GitHub for the purpose of personal review only.

The software is provided **" as is "**, without warranty of any kind.

*See the [LICENSE](LICENSE) file for the full legal text.*


