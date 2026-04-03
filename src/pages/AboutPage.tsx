import { SEOHead } from '../components/Shared/SEOHead';
import { Footer } from '../components/layout/Footer';
import { AboutHero } from '../components/About/Hero';
import { Education } from '../components/Education/Education';
import { TechStack } from '../components/About/TechStack';
import { AboutTestimonials } from '../components/About/Testimonials';
import { CallToAction } from '../components/Shared/CallToAction';

export const AboutPage = () => {
  const aboutSchemas = [
    // BreadcrumbList
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aswinsai.tech" },
        { "@type": "ListItem", "position": 2, "name": "About", "item": "https://aswinsai.tech/about" }
      ]
    },
    // AboutPage schema
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Aswinsai Palakonda",
      "description": "Discover the journey, education, tech stack, and testimonials of Aswinsai Palakonda — Full Stack Developer, CTO at Clientura, and AI Enthusiast.",
      "url": "https://aswinsai.tech/about",
      "isPartOf": { "@id": "https://aswinsai.tech/#website" },
      "mainEntity": { "@id": "https://aswinsai.tech/#person" },
      "inLanguage": "en-US",
      "dateModified": "2026-04-03"
    }
  ];

  return (
    <div className="relative z-10 min-h-screen pt-12 flex flex-col overflow-x-hidden">
      <SEOHead
        title="About Aswinsai Palakonda | Full Stack Developer, Education & Skills"
        description="Discover the journey, education, tech stack, and professional experience of Aswinsai Palakonda — Full Stack Developer, Co-founder & CTO at Clientura, and AI Enthusiast."
        canonical="https://aswinsai.tech/about"
        keywords="About Aswinsai Palakonda, Full Stack Developer journey, education, tech stack, skills, Clientura CTO, software developer India, developer biography"
        schema={aboutSchemas}
      />
      
      <main className="grow">
        {/* Dedicated Hero Section for About Page */}
        <AboutHero />

        {/* Education Section */}
        <section id="education-about" className="bg-[#050505]" aria-label="Education">
           <Education />
        </section>

        {/* Tech Stack (Relocated from Home) */}
        <section aria-label="Technology Stack">
          <TechStack />
        </section>

        {/* Testimonials Section - Unique 3D Interaction */}
        <section id="testimonials-about" className="bg-[#050505]" aria-label="Client Testimonials">
          <AboutTestimonials />
        </section>

        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};
