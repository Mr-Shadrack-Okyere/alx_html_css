# Smile School - CSS Advanced Project

## Overview

This project is part of the ALX HTML & CSS curriculum, focusing on advanced CSS styling and responsive design.  
The goal was to build a modern, flexible, and visually appealing website using advanced CSS techniques, primarily CSS Flexbox, based on a provided HTML structure and a detailed Figma design.

The project represents a “Smile School” website — a fictional educational platform specializing in smile tutorials — designed with a clean user interface and responsive layout to work across devices.

---

## Project Structure & Files

- `index.html` — The main webpage, structured with semantic HTML5 elements (`header`, `main`, `section`, `footer`) and includes navigation, multiple content sections, testimonials, FAQs, and footer with social media icons.
- `base.css` — Provided base stylesheet with global reset and base styles.
- `styles.css` — Custom CSS written to implement layout and styling per the Figma design.
- `images/` — Folder containing all image assets referenced in the HTML.
- `README.md` — This documentation file.

---

## Key Steps Taken

### 1. Setup & Initial HTML

- Started from the provided “HTML advanced” codebase.
- Structured content semantically using modern HTML5 tags.
- Included FontAwesome for scalable icons (social media, stars).
- Added image placeholders and paths to the downloaded images folder.

### 2. Applied CSS Flexbox for Layout

- Used `display: flex` on `<body>` and `<main>` containers.
- Configured `flex-direction` appropriately:
  - `<body>` as a vertical column to stack header, main, footer.
  - `<main>` as a horizontal row to place sections side-by-side when needed.
- Used flex-grow properties (`flex: auto`, `flex: 2`, `flex: 1`) to allocate space proportionally to content and sidebar areas.
- Enabled vertical scrolling within scrollable content areas with `overflow-y: auto`.

### 3. Responsive Design Enhancements

- Added the viewport meta tag to control scaling on mobile devices.
- Added `class="works_on_smartphone"` on `<body>` to enable the responsive layout rules in the base CSS.
- Ensured the layout gracefully degrades to a column layout on smaller screens to improve usability on smartphones.

### 4. Custom Styling and Branding

- Styled navigation menu with horizontal layout and hover effects.
- Applied custom fonts from Source Sans Pro and Spin Cycle OT for branding consistency.
- Styled buttons, tables, and text content within `<article>` sections for readability and visual appeal.
- Incorporated a logo image and social media icons in header and footer for professional branding.
- Enhanced typography with consistent margins, line-height, and color palette derived from Figma.

---

## New Features and Improvements Added

- Responsive navigation menu aligned with Figma design.
- Styled multi-section layout including testimonial and FAQ sections.
- Added accessible alt attributes on all images.
- Included FontAwesome icons for star ratings and social links.
- Added smooth hover transitions on links and buttons.
- Optimized layout flex properties for fluid resizing without breaking design.
- Added semantic grouping of content for better SEO and accessibility.

---

## How to Use

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR_USERNAME/alx_html_css.git
