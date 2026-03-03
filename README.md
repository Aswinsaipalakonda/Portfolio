<p align="center">
  <img src="public/assets/icons/android-chrome-512x512.png" alt="Aswinsai Logo" width="100" />
</p>

<h1 align="center">🚀 Aswinsai Palakonda — Portfolio</h1>

<p align="center">
  <b>Full Stack Developer • No-Code Developer • AI Enthusiast</b>
</p>

<p align="center">
  <a href="https://aswinsai.tech" target="_blank">
    <img src="https://img.shields.io/badge/🌐_Live_Site-aswinsai.tech-915EFF?style=for-the-badge" alt="Live Site" />
  </a>
  <a href="https://github.com/Aswinsaipalakonda" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://www.linkedin.com/in/aswinsaipalakonda" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://www.instagram.com/__itz_aswin" target="_blank">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/Aswinsaipalakonda/Portfolio?style=social" alt="Stars" />
  <img src="https://img.shields.io/github/forks/Aswinsaipalakonda/Portfolio?style=social" alt="Forks" />
  <img src="https://img.shields.io/github/last-commit/Aswinsaipalakonda/Portfolio?color=purple" alt="Last Commit" />
  <img src="https://img.shields.io/github/repo-size/Aswinsaipalakonda/Portfolio?color=blueviolet" alt="Repo Size" />
</p>

---

## ✨ Overview

A **modern, immersive** personal portfolio website built with cutting-edge web technologies. Features a cinematic **liquid splash screen**, an interactive **3D space background**, **smooth Lenis scrolling**, **Framer Motion animations**, a dedicated **Contact page** with a 3D globe, and a downloadable **Resume** — all designed to leave a lasting impression.

<p align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" alt="divider" />
</p>

## 🎬 Highlights

| Feature                     | Description                                                                 |
| --------------------------- | --------------------------------------------------------------------------- |
| 🌊 **Liquid Splash Screen** | SVG-masked text fill animation with animated waves and a percentage counter |
| 🌌 **3D Space Background**  | Interactive starfield rendered with React Three Fiber & Three.js            |
| 🧈 **Lenis Smooth Scroll**  | Buttery smooth scrolling with spring-based easing curves                    |
| 🎞️ **Framer Motion**        | Page transitions, scroll-triggered reveals, and micro-interactions          |
| 📱 **Fully Responsive**     | Pixel-perfect on mobile, tablet, and desktop                                |
| 📬 **Contact Page**         | Dedicated contact page with email form powered by EmailJS                   |
| 🌍 **3D Globe**             | Rotating globe in the Contact section                                       |
| ⌨️ **Flip Words Effect**    | Dynamic role cycling in the hero section                                    |
| 📄 **Resume Download**      | One-click resume view in a new tab                                          |
| 🔍 **SEO Optimized**        | Structured data, sitemap, robots.txt, and Open Graph meta tags              |

---

## 🛠️ Tech Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,ts,vite,tailwind,threejs&theme=dark" alt="Tech Stack" />
</p>

| Technology                                                                                                           | Purpose                                     |
| :------------------------------------------------------------------------------------------------------------------- | :------------------------------------------ |
| ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)                    | UI library for component-based architecture |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)      | Type-safe development                       |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)                        | Lightning-fast build tool & dev server      |
| ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)  | Utility-first CSS framework                 |
| ![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=threedotjs&logoColor=white)          | 3D graphics & space background              |
| ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)    | Animations & page transitions               |
| ![Lenis](https://img.shields.io/badge/Lenis-000000?style=flat-square&logoColor=white)                                | Smooth scrolling engine                     |
| ![EmailJS](https://img.shields.io/badge/EmailJS-FC0?style=flat-square&logoColor=black)                               | Client-side email service                   |
| ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white) | Client-side routing & navigation            |

---

## 📂 Project Structure

```
Portfolio/
├── public/
│   ├── assets/
│   │   ├── icons/                 # Favicons & PWA icons
│   │   └── images/                # Profile photo, certificates, logos
│   ├── experience/                # Experience-related assets
│   ├── Resume.pdf                 # Downloadable resume
│   ├── resume.html                # Resume viewer page
│   ├── sitemap.xml                # SEO sitemap
│   └── robots.txt                 # Search engine crawl rules
├── src/
│   ├── components/
│   │   ├── About.tsx              # Hero section with photo & flip words
│   │   ├── Navbar.tsx             # Fixed navigation with mobile menu
│   │   ├── Content.tsx            # Section orchestrator
│   │   ├── SplashScreen.tsx       # 🌊 Liquid fill splash animation
│   │   ├── Space.tsx              # 🌌 Three.js starfield background
│   │   ├── TypeWriter.tsx         # ⌨️ Typing animation component
│   │   ├── ScrollToTop.tsx        # Scroll restoration on route change
│   │   ├── Languages.tsx          # Programming languages section
│   │   ├── Skills/
│   │   │   ├── Skills.tsx         # Technical skills grid
│   │   │   ├── SkillCard.tsx      # Individual skill card
│   │   │   └── SoftSkills.tsx     # Soft skills display
│   │   ├── Projects/
│   │   │   ├── Projects.tsx       # Projects showcase
│   │   │   └── ProjectCard.tsx    # Project card with links
│   │   ├── Certificates/
│   │   │   ├── Certificates.tsx   # Certificates gallery
│   │   │   ├── CertificateCard.tsx # Certificate card component
│   │   │   └── CertificateModal.tsx # Full-view modal
│   │   ├── Education/
│   │   │   ├── Education.tsx      # Timeline education section
│   │   │   └── EducationCard.tsx  # Education card component
│   │   ├── Experience/            # Work experience section
│   │   ├── Contact/
│   │   │   ├── Contact.tsx        # Contact section wrapper
│   │   │   ├── ContactForm.tsx    # Email form with validation
│   │   │   ├── RotatingGlobe.tsx  # 3D rotating globe
│   │   │   ├── Footer.tsx         # Social links & copyright
│   │   │   └── Toast.tsx          # Notification component
│   │   ├── ui/                    # Reusable UI primitives
│   │   └── fancy/                 # Fancy animation components
│   ├── pages/
│   │   └── ContactPage.tsx        # Dedicated contact route page
│   ├── providers/
│   │   └── LenisProvider.tsx      # 🧈 Smooth scroll provider
│   ├── lib/                       # Utility functions
│   ├── App.tsx                    # Root app with routing & splash screen
│   ├── main.tsx                   # Entry point with providers
│   └── index.css                  # Global styles & Lenis config
├── index.html                     # HTML entry with SEO structured data
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Aswinsaipalakonda/Portfolio.git

# 2️⃣ Navigate to the project
cd Portfolio

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the dev server
npm run dev
```

The app will be running at **`http://localhost:5173`** 🎉

### Build for Production

```bash
npm run build
npm run preview   # Preview the production build
```

---

## 📸 Sections

|  #  | Section           | Description                                                      |
| :-: | ----------------- | ---------------------------------------------------------------- |
| 🌊  | **Splash Screen** | Cinematic liquid-fill name animation with wave effects           |
| 👤  | **About**         | Hero with profile photo, gradient name, and flip word roles      |
| 🛠️  | **Skills**        | Categorized technical skills (Frontend, Backend, DevOps, Others) |
| 💻  | **Languages**     | Programming languages proficiency                                |
|  �  | **Experience**    | Professional work experience                                     |
| �📁 | **Projects**      | Showcased projects with live demo & GitHub links                 |
| 🏅  | **Certificates**  | Achievements gallery with full-view modal                        |
| 🎓  | **Education**     | Academic timeline with school details & CTA                      |
| 📬  | **Contact**       | Dedicated page with email form + 3D globe + social links         |

---

## 🔍 SEO & Performance

- **Structured Data**: JSON-LD for Person, WebSite, SiteNavigationElement, and BreadcrumbList
- **Sitemap**: Includes main site, LinkedIn, GitHub, Instagram, and Contact page
- **Open Graph & Twitter Cards**: Rich previews for social sharing
- **Google Analytics**: Traffic tracking via Google Tag Manager
- **Google Search Console**: Verified and indexed
- **Optimized Sitelinks**: Structured data hints for Google sub-links (Home, LinkedIn, GitHub, Instagram, Contact)

---

## 🎨 Design Philosophy

- **Dark Theme** with `#915EFF` purple accent color
- **Glassmorphism** effects on navigation
- **Gradient text** for headings and brand name
- **Scroll-triggered animations** using Framer Motion `whileInView`
- **3D elements** for depth and immersion
- **Inter font** for clean, modern typography
- **Custom purple scrollbar** for attention to detail

---

## 🤝 Connect with Me

<p align="center">
  <a href="https://github.com/Aswinsaipalakonda" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-171515?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
  </a>
  <a href="https://linkedin.com/in/aswinsaipalakonda" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
  </a>
  <a href="https://www.instagram.com/__itz_aswin" target="_blank">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"/>
  </a>
  <a href="mailto:aswinsaipalakonda@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/>
  </a>
</p>

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  <b>⭐ If you like this portfolio, give it a star!</b>
</p>

<p align="center">
  Made with 💜 by <a href="https://github.com/Aswinsaipalakonda"><b>Aswinsai Palakonda</b></a>
</p>
