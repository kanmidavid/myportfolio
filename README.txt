# Kanmi David Portfolio

A static portfolio website for Kanmi David, a motion designer, AI video creator, and UGC/DTC editor working under Kavi Studios. The site showcases a mix of motion design work, AI-generated videos, creator-style edits, and product-led ad creatives.

## Overview

This project is a lightweight, no-build website designed to present creative work in a polished, editorial style. It is built with plain HTML, CSS, and JavaScript, and the portfolio content is driven from a single data file so updates are easy to manage.

## What the site includes

- Home landing page with hero section and service highlights
- Category pages for Motion Design, AI Videos, UGC Edits, and DTC Videos
- Video previews with autoplay, hover interactions, and modal playback
- Contact section with email and social links
- Simple content editing via one configuration file

## Tech stack

- HTML
- CSS
- JavaScript
- No framework
- No backend
- Static hosting friendly

## Project structure

- index.html — homepage
- motion.html — motion design category page
- ai.html — AI videos category page
- ugc.html — UGC edits category page
- dtc.html — DTC videos category page
- app.js — rendering logic and interactions
- data.js — all portfolio data and site configuration
- style.css — site styling and layout
- assets/images/ — profile and visual assets
- assets/posters/ — optional video thumbnails
- assets/videos/ — portfolio videos

## Run locally

Because this is a static site, you can preview it in any browser, but serving it through a local web server is recommended.

1. Open a terminal in the project folder.
2. Run:

   python -m http.server 8000

3. Open this in the browser:

   http://localhost:8000/

You can also open index.html directly in a browser, though local hosting helps ensure media loads more reliably.

## Update the portfolio content

All content is managed in data.js.

### Site settings

Edit the window.SITE object to change:

- name
- studio name
- email address
- social links
- tools list
- stats
- showreel file

### Categories

The window.CATS object controls the page labels and category blocks.

Supported categories:

- motion
- ai
- ugc
- dtc

### Projects

The window.PROJECTS array stores each project. Add a new project by copying one object and updating these fields:

- cat
- title
- client
- year
- role
- tools
- video
- poster
- brief

Example:

{
  cat: "motion",
  title: "Project Name",
  client: "Client Name",
  year: "2026",
  role: "Motion designer",
  tools: ["After Effects"],
  video: "assets/videos/project-name.mp4",
  poster: "",
  brief: "Short description of the project."
}

### Media requirements

For videos, place files in assets/videos/ and keep them optimized for web performance.

Suggested best practices:

- Use MP4 files
- Prefer H.264 encoding
- Keep files fairly lightweight for fast loading
- Use 720p to 1080p where appropriate
- Optional: add matching poster images in assets/posters/

Important: file names must match exactly in data.js.

## Deployment

This project is static and can be hosted easily on Netlify, Vercel, GitHub Pages, or any simple static hosting provider.

For Netlify:

- drag the project folder to the Netlify drop area, or
- connect the repo to a Netlify project and deploy the root folder

## Contact and social links

Set these in data.js under window.SITE.links:

- instagram
- linkedin
- x
- tiktok
- website

The footer will automatically generate buttons for any links that are populated.

## Notes

- This site is intentionally simple and easy to maintain.
- It does not require npm install, build steps, or a backend.
- It is ideal for personal branding, portfolio presentation, and creative showcase work.

## Credits

Built for Kanmi David / Kavi Studios.

"I make things move, sell, and stop thumbs."
