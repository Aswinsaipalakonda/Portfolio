import { HomeHero } from '../components/Home/Hero';
import { Skills } from '../components/Skills/Skills';
import { Experience } from '../components/Experience/Experience';
import { Projects } from '../components/Projects/Projects';
import { Certificates } from '../components/Certificates/Certificates';
import { CallToAction } from '../components/Shared/CallToAction';
import { SEOHead } from '../components/Shared/SEOHead';
import { Footer } from '../components/layout/Footer';

export const HomePage = () => {
  return (
    <main className="relative z-10 w-full max-w-full overflow-x-clip pt-4">
      <SEOHead
        title="Aswinsai Palakonda | Co-founder & CTO at Clientura"
        description="Aswinsai Palakonda — Full Stack Developer & AI Enthusiast building high-performance web apps and scalable digital platforms."
      />
      <section id="hero" className="relative">
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