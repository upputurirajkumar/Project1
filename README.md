# No-Churn Telecom V2
## From Churn Prediction to Retention Intelligence

A premium, production-quality portfolio showcase website for **No-Churn Telecom V2**, an end-to-end Machine Learning decision system. This website communicates the transformation of customer telemetry into calibrated churn risk, retention priorities, and capacity-constrained campaign decisions.

---

## 1. Project Overview

No-Churn Telecom V2 reframes telecommunication customer churn from a simple offline binary classification task into an enterprise **decision-intelligence problem**. 

Rather than treating all churn risks identically, the system unifies three critical operational dimensions:
1. **Calibrated Churn Risk (50% weight):** Empirical probability output from a tuned Random Forest ensemble, calibrated via Sigmoid Platt scaling (Brier Score: 0.1600).
2. **Monthly Charges / Financial Exposure (30% weight):** Normalized billing magnitude ($20 to $120) prioritizing high-MRR multi-line and fiber optic accounts.
3. **Contract Urgency (20% weight):** Structural fragility index prioritizing month-to-month subscribers approaching immediate attrition windows.

This portfolio website delivers an executive, recruiter, and engineer-ready presentation of the project's empirical findings, methodology, and interactive decision tools.

---

## 2. Project Purpose

- **Demonstrate Applied ML Engineering:** Showcase end-to-end capabilities from exploratory analysis on 243,553 records to multi-model benchmarking, probability calibration, and operational prioritization.
- **Address Real Enterprise Constraints:** Illustrate capacity-constrained campaign routing, demonstrating how scarce customer contact bandwidth (e.g., call centers, VIP retention desks) can be allocated to maximize preserved Monthly Recurring Revenue (MRR).
- **Zero-Dependency Static Delivery:** Implemented using pure **HTML5, CSS3, and Vanilla JavaScript** for maximum portability, instant browser load times, and native compatibility with GitHub Pages.

---

## 3. Technology Stack

### Portfolio Website (This Repository)
- **HTML5:** Semantic architecture, accessible landmarks, WCAG AA heading hierarchy, ARIA attributes.
- **CSS3:** Custom properties (CSS variables), layered glassmorphism, responsive grid & flexbox layouts, SVG animations, CSS perspective depth, dark enterprise aesthetic.
- **Vanilla JavaScript:** Zero external dependencies or build steps. Implements IntersectionObserver counters, smooth navigation scrolling, an interactive retention priority calculator, a customer risk universe scatter explorer, and a capacity-constrained campaign simulator.

### Broader Project Architecture (Displayed as Informational Cards)
- **Python / Pandas / NumPy:** Core exploratory data analysis, matrix transformations, and feature engineering.
- **Scikit-learn:** Pipeline assembly, stratified splitting, Random Forest classification, and Platt calibration.
- **React / TypeScript / Vite / Tailwind CSS / Recharts / Motion / Three.js:** Production decision dashboard interface.

---

## 4. Key Portfolio Features

1. **Cinematic Hero Network Visualization:** Pure SVG/CSS interactive topology showing the progression from raw data through features, modeling, calibration, and retention decisions.
2. **Verified Project Snapshot:** Animated counters presenting verified project data (243,553 records, 14 raw columns, 82 transformed features, 20.0478% baseline churn, 4 telecom partners, 28 states).
3. **Business Problem Breakdown:** High-density split layout comparing the business vulnerability cascade against the machine learning response.
4. **Interactive Data & ML Pipelines:** Expandable interactive cards detailing the 6 data preprocessing phases and 7 machine learning pipeline stages.
5. **Documented Model Benchmark:** Clean comparison highlighting the champion Random Forest configuration without fabricating unverified metrics for baselines.
6. **Model Observatory:** Radial arc diagnostic gauges displaying all 7 verified champion metrics (PR-AUC: 0.2023 ± 0.0012, ROC-AUC: 0.5052 ± 0.0014, F1: 0.1841 ± 0.0023, Recall: 0.1692 ± 0.0041, Precision: 0.2031 ± 0.0034, Accuracy: 0.7012, Brier Score: 0.1600).
7. **Probability Calibration Section:** Reliability diagram comparing predicted probabilities against empirical churn frequencies, explaining Sigmoid / Platt scaling on the 24,356 holdout set.
8. **Retention Priority Interactive Calculator:** Real-time formula explorer implementing the exact 50% / 30% / 20% weighting scheme with dynamic tier assignment.
9. **Capacity-Constrained Campaign Simulator:** Interactive allocation tool demonstrating how retention campaigns prioritize high-risk, high-value accounts under fixed contact quotas.
10. **Customer Risk Universe:** Interactive SVG scatter plot allowing users to inspect synthetic customer profiles across different segments, billing tiers, and risk levels.
11. **Application Previews & Demo Placeholder:** Six structured application preview frames and a responsive demo video showcase.
12. **Project Journey & Documentation Hub:** Animated timeline chronicling project execution alongside cards linking to technical documentation.

---

## 5. Folder Structure

```text
no-churn-telecom-portfolio/
│
├── index.html           # Main semantic single-page portfolio
├── style.css            # Complete design system & responsive styling
├── script.js            # Pure Vanilla JS interactive engine
├── README.md            # Comprehensive project documentation & guide
└── assets/              # (Optional) Place screenshots and video assets here
    ├── og-preview.png
    ├── demo.mp4
    └── screenshots/
        ├── observatory.png
        ├── prediction-engine.png
        ├── retention-priority.png
        ├── campaign-sim.png
        ├── model-governance.png
        └── mlops.png
```

---

## 6. How to Run Locally

Because this project uses standard HTML, CSS, and Vanilla JavaScript with relative paths, you can run it using any of the methods below:

### Option A: Direct Browser Opening (Fastest)
1. Navigate to the project directory on your computer.
2. Double-click `index.html` (or right-click &rarr; **Open With** &rarr; your favorite browser: Chrome, Safari, Firefox, Edge).
3. The portfolio will run immediately with full interactivity.

### Option B: Python Local Server
If you have Python installed, open your terminal in the project directory:

```bash
# Python 3.x
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

### Option C: Node.js / NPX Serve
If you have Node.js installed:

```bash
npx serve .
```

---

## 7. How to Deploy to GitHub Pages

1. Initialize a Git repository (if not already done) and commit the files:
   ```bash
   git init
   git add .
   git commit -m "Deploy No-Churn Telecom V2 Portfolio"
   ```
2. Create a new repository on GitHub (e.g. `no-churn-telecom-portfolio`).
3. Link your remote repository and push to `main`:
   ```bash
   git remote add origin https://github.com/your-username/no-churn-telecom-portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. In your GitHub repository:
   - Click **Settings** &rarr; **Pages** (left sidebar under "Code and automation").
   - Under **Build and deployment** &rarr; **Branch**, select `main` and folder `/ (root)`.
   - Click **Save**.
5. Within 1–2 minutes, your portfolio will be live at:
   `https://your-username.github.io/no-churn-telecom-portfolio/`

---

## 8. Exact Placeholder Replacement Checklist

Every placeholder in this project is marked with an explicit HTML comment. Use this checklist to insert your project-specific links and media:

| Placeholder Type | Location in `index.html` | Replacement Action |
| :--- | :--- | :--- |
| **Canonical URL** | Lines 16 & 23 | Replace `https://username.github.io/no-churn-telecom-portfolio/` with your live domain or GitHub Pages URL. |
| **OpenGraph Image** | Line 17 | Add your preview card image to `./assets/og-preview.png`. |
| **GitHub Repository Link** | Lines 68, 107, 142, 608, 642 | Replace `https://github.com/your-username/no-churn-telecom-v2` with your actual repository URL. |
| **Dashboard URL** | Lines 76, 105, 138, 605, 644 | Replace `#preview` with the live URL of your deployed application or dashboard. |
| **App Screenshot 1** | Line 489 | Replace the placeholder card with `<img src="./assets/screenshots/observatory.png" alt="System Observatory Screenshot">`. |
| **App Screenshot 2** | Line 502 | Replace the placeholder card with `<img src="./assets/screenshots/prediction-engine.png" alt="Prediction Engine Screenshot">`. |
| **App Screenshot 3** | Line 515 | Replace the placeholder card with `<img src="./assets/screenshots/retention-priority.png" alt="Retention Priority Screenshot">`. |
| **App Screenshot 4** | Line 528 | Replace the placeholder card with `<img src="./assets/screenshots/campaign-sim.png" alt="Campaign Simulator Screenshot">`. |
| **App Screenshot 5** | Line 541 | Replace the placeholder card with `<img src="./assets/screenshots/model-governance.png" alt="Model Governance Screenshot">`. |
| **App Screenshot 6** | Line 554 | Replace the placeholder card with `<img src="./assets/screenshots/mlops.png" alt="MLOps Observability Screenshot">`. |
| **Demo Video** | Line 581 | Replace the placeholder inner box with `<video src="./assets/demo.mp4" controls poster="./assets/video-poster.png" style="width:100%;height:100%;border-radius:16px;"></video>` or an embedded `<iframe>` (e.g. YouTube/Loom). |
| **Doc 1: Project Overview** | Line 648 | Replace `href="#"` with link to your documentation file (e.g. `href="./docs/overview.md"`). |
| **Doc 2: Methodology** | Line 656 | Replace `href="#"` with link to your documentation file (e.g. `href="./docs/methodology.md"`). |
| **Doc 3: ML Pipeline** | Line 664 | Replace `href="#"` with link to your documentation file (e.g. `href="./docs/pipeline.md"`). |
| **Doc 4: Decision Framework**| Line 672 | Replace `href="#"` with link to your documentation file (e.g. `href="./docs/decision-framework.md"`). |
| **Doc 5: MLOps & Governance**| Line 680 | Replace `href="#"` with link to your documentation file (e.g. `href="./docs/governance.md"`). |
| **Doc 6: Interview Guide** | Line 688 | Replace `href="#"` with link to your documentation file (e.g. `href="./docs/interview.md"`). |
| **Doc 7: Portfolio Showcase**| Line 696 | Replace `href="#"` with link to your documentation file (e.g. `href="./docs/showcase.md"`). |

---

## 9. Accessibility Notes

- **Keyboard Navigation:** All interactive elements (pipeline cards, range sliders, risk universe nodes, back-to-top button) are fully reachable and activatable via `Tab`, `Enter`, and `Space`.
- **Screen Reader Support:** Accessible landmarks (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`), ARIA attributes (`aria-label`, `aria-expanded`, `aria-controls`), and a hidden `.skip-to-content` link that appears upon initial tab focus.
- **Contrast & Color Blindness:** All text meets WCAG AA standards (4.5:1 minimum contrast). Semantic indicators pair color with distinct icons or explicit text labels so information is never conveyed by color alone.
- **Reduced Motion:** Respects the `prefers-reduced-motion: reduce` operating system setting. CSS transitions and infinite SVG keyframes are disabled or simplified when active.

---

## 10. Performance Notes

- **Zero Bloat:** Zero third-party JavaScript libraries or heavy CSS bundles. Total footprint is under 60KB uncompressed.
- **Efficient DOM Interactions:** Uses `IntersectionObserver` for animated counters and scroll-triggered animations to prevent scroll jank and keep CPU utilization low.
- **Instant Paint:** Uses system font stacks and inline SVG graphics to prevent layout shifts (CLS: 0.0) and eliminate external font loading latency.

---

## 11. Browser Compatibility

Compatible with all modern browsers:
- Google Chrome & Chromium-based browsers (Edge, Brave, Opera) &bull; version 90+
- Mozilla Firefox &bull; version 88+
- Apple Safari (macOS & iOS) &bull; version 14+

---

## 12. License & Attribution

This portfolio showcase is built as an open portfolio representation of the **No-Churn Telecom V2** machine learning project. Free to customize, deploy, and showcase on GitHub Pages, LinkedIn, and personal portfolios.
