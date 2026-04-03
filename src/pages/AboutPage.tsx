import { SEOHead } from '../components/SEOHead';
import { Footer } from '../components/Contact/Footer';
import { AboutHero } from '../components/About/AboutHero';
import { Education } from '../components/Education/Education';
import { AboutSkills } from '../components/About/AboutSkills';
import { AboutTestimonials } from '../components/About/AboutTestimonials';
import { CallToAction } from '../components/Shared/CallToAction';

export const AboutPage = () => {
  return (
    <div className="relative z-10 min-h-screen pt-12 flex flex-col overflow-x-hidden">
      <SEOHead
        title="About Me | Aswinsai Palakonda"
        description="Discover the journey, skills, and professional experience of Aswinsai Palakonda, Full Stack Developer and AI Enthusiast."
        canonical="https://aswinsai.tech/about"
      />
      
      <main className="grow">
        {/* Dedicated Hero Section for About Page */}
        <AboutHero />

        {/* Education Section */}
        <div id="education-about" className="bg-[#050505]">
           <Education />
        </div>

        {/* Skills Section - Unique Bento Grid */}
        <div id="skills-about" className="bg-[#050505]">
          <AboutSkills />
        </div>

        {/* Testimonials Section - Unique 3D Interaction */}
        <div id="testimonials-about" className="bg-[#050505]">
          <AboutTestimonials />
        </div>

        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};
