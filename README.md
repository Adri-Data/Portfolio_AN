<div align="center">

# 🤖 Adrián Navarro — AI Engineer Portfolio

**Production-grade Generative AI · RAG Systems · Agentic Workflows · KDD24 Researcher**

[![Deploy](https://img.shields.io/badge/Live%20Portfolio-4285F4?style=for-the-badge&logo=github-pages&logoColor=white)](https://adri-data.github.io/Portfolio_AN/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/adrian-ai-datascience)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Adri-Data)

</div>

---

## 📋 Overview

Personal portfolio of **Adrián Navarro**, AI & NLP Engineer at Minsait (Indra Group). Built with React 19, Vite 6, and Tailwind CSS v4. Fully bilingual (EN/ES), optimized for Core Web Vitals, and AI-discoverable through `llms.txt`.

This portfolio showcases:
- **Enterprise RAG Systems** — pipelines with Elasticsearch/Pinecone, 80% latency reduction, 0.9+ Ragas faithfulness scores.
- **GRPO Fine-Tuning** — reasoning model for complex integral resolution, 94% accuracy improvement.
- **KDD24 Research** — published paper on "Summarization of Large Text Volumes Using LLMs".
- **Cloud AI Architectures** — AWS CDK, Azure, GitHub Actions CI/CD, zero-downtime deployments.

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | React 19, TypeScript, Vite 6 |
| **Styling** | Tailwind CSS v4, Custom CSS animations |
| **Icons** | Lucide React |
| **Email** | EmailJS |
| **Images** | WebP (converted from PNG/JPEG with sharp) |
| **Fonts** | Outfit (self-hosted, variable font, WOFF2) |
| **Deployment** | GitHub Pages |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- A `.env.local` file (see below)

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Create environment file
cp .env.local.example .env.local
# Then add your GEMINI_API_KEY to .env.local

# 3. Start development server
npm run dev

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

---

## 📁 Project Structure

```
Portfolio_AN/
├── public/
│   ├── about_cards/        # About section card images (WebP)
│   ├── logos/              # Company logos (WebP)
│   ├── projects/           # Project cover images (WebP)
│   ├── fonts/              # Self-hosted Outfit font (WOFF2)
│   ├── foto.webp           # Hero profile photo
│   ├── favicon.ico
│   ├── llms.txt            # AI/LLM crawler summary
│   ├── llms-full.txt       # Full AI-readable CV (Markdown)
│   └── robots.txt          # Search + AI bot permissions
├── components/
│   ├── Navbar.tsx          # Responsive navigation with glass morphism
│   └── NeuralBackground.tsx # Interactive canvas particle animation
├── App.tsx                 # Main application component
├── constants.tsx           # All content, translations (EN/ES), project data
├── types.ts                # TypeScript type definitions
├── tech_links.ts           # Tech badge hyperlinks
├── index.html              # HTML entry — SEO meta, JSON-LD, Open Graph
├── index.css               # Global styles + Tailwind theme
└── vite.config.ts          # Vite + Tailwind plugin config
```

---

## 🔍 SEO & AI-Discoverability Features

This portfolio includes a full SEO and AI discoverability stack:

| Feature | Implementation |
|---|---|
| **LLM SEO** | `llms.txt` + `llms-full.txt` for AI crawlers |
| **AI Bots** | `robots.txt` allows GPTBot, ClaudeBot, PerplexityBot |
| **Structured Data** | JSON-LD `Person` + `FAQPage` schemas (Schema.org) |
| **Open Graph** | Full OG + Twitter Card tags with WebP image |
| **Core Web Vitals** | LCP hero image preloaded + `fetchpriority="high"` |
| **INP Optimization** | `NeuralBackground` lazy-loaded via `React.lazy` |
| **Image Format** | All images converted to WebP (avg. 70% size reduction) |
| **Font Loading** | Self-hosted WOFF2 + `font-display: swap` + preload |
| **Semantic HTML** | ARIA landmarks, `aria-labelledby`, icon `aria-label`s |

---

## ✨ Key Features

- 🌙 **Dark / Light mode** — respects system preference, toggle available.
- 🌍 **Bilingual** — full English and Spanish translations via a single `TRANSLATIONS` constant.
- 🧠 **Neural Background** — interactive canvas particle animation, physics-based, lazy-loaded.
- 📬 **Contact Form** — integrated with EmailJS, no backend required.
- 🔗 **Share API** — native Web Share API with clipboard fallback.
- 📊 **Case Study Modals** — detailed project breakdowns with metrics and links.
- 🔎 **FAQ Section** — SEO-driven Q&A targeting recruiter search intents.

---

## 📄 License

Personal portfolio — all rights reserved. Content and design by Adrián Navarro.  
Code structure may be used as reference with attribution.

---

<div align="center">

Made with ⚡ by Adrián Navarro · Barcelona, Spain & Remote  
[Portfolio](https://adri-data.github.io/Portfolio_AN/) · [LinkedIn](https://linkedin.com/in/adrian-ai-datascience) · [GitHub](https://github.com/Adri-Data)

</div>
