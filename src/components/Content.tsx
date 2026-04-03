import { About } from './About';
import { Skills } from './Skills/Skills';
import { Experience } from './Experience/Experience';
import { Projects } from './Projects/Projects';
import { Certificates } from './Certificates/Certificates';
import { CallToAction } from './Shared/CallToAction';

import { Github, Linkedin, Mail } from 'lucide-react';
import { SEOHead } from './SEOHead';

export const Content = () => {
  return (
    <main className="relative z-10 w-full max-w-full overflow-x-clip pt-4">
      <SEOHead
        title="Aswinsai Palakonda | Co-founder & CTO at Clientura"
        description="Aswinsai Palakonda — Full Stack Developer & AI Enthusiast building high-performance web apps and scalable digital platforms."
      />
      <section id="hero" className="relative">
        <About />
      </section>
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <CallToAction />

      
      <footer className="w-full py-12 px-6 border-t border-white/5 bg-black/20 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-black text-white mb-2">
              Aswinsai<span className="text-[#915EFF]">.</span>
            </span>
            <p className="text-gray-500 text-sm font-medium">© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/aswinsaipalakonda" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/aswinsaipalakonda" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:aswinsaipalakonda@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Status</p>
            <div className="flex items-center justify-center md:justify-end gap-2 text-white text-sm font-bold">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for new projects
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};