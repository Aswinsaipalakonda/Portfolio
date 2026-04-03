import { HomeHero } from '../components/Home/Hero';
import { Skills } from '../components/Skills/Skills';
import { Experience } from '../components/Experience/Experience';
import { Projects } from '../components/Projects/Projects';
import { Certificates } from '../components/Certificates/Certificates';
import { CallToAction } from '../components/Shared/CallToAction';
import { SEOHead } from '../components/Shared/SEOHead';
import { Footer } from '../components/layout/Footer';

export const HomePage = () => {
  const homeSchemas = [
    // BreadcrumbList for homepage
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aswinsai.tech" }
      ]
    },
    // WebPage schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Aswinsai Palakonda — Full Stack Developer Portfolio",
      "description": "Explore the portfolio of Aswinsai Palakonda, a Full Stack Developer and Co-founder & CTO at Clientura. View projects, experience, certifications, and more.",
      "url": "https://aswinsai.tech",
      "isPartOf": { "@id": "https://aswinsai.tech/#website" },
      "about": { "@id": "https://aswinsai.tech/#person" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://aswinsai.tech/assets/images/aswin.jpg"
      },
      "inLanguage": "en-US",
      "datePublished": "2024-01-01",
      "dateModified": "2026-04-03"
    }
  ];

  return (
    <main className="relative z-10 w-full max-w-full overflow-x-clip pt-4">
      <SEOHead
        title="Aswinsai Palakonda | Co-founder & CTO at Clientura | Full Stack Developer"
        description="Aswinsai Palakonda — Full Stack Developer & AI Enthusiast building high-performance web apps and scalable digital platforms. Explore projects, skills, and get in touch."
        canonical="https://aswinsai.tech"
        keywords="Aswinsai Palakonda, Full Stack Developer, CTO Clientura, React Developer, TypeScript, Node.js, AI Enthusiast, Portfolio, Web Developer India, Freelance Developer"
        schema={homeSchemas}
      />
      <section id="hero" className="relative" aria-label="Introduction">
        <HomeHero />
      </section>
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <CallToAction />
      <Footer />
    </main>
  );
};