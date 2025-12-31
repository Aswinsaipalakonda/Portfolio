
import { Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="mt-20 pb-8 text-center">
      <nav className="mb-6">
        <ul className="flex justify-center gap-8 text-gray-400">
          <li>
            <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">
              About
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('skills')} className="hover:text-white transition-colors">
              Skills
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('projects')} className="hover:text-white transition-colors">
              Projects
            </button>
          </li>
        </ul>
      </nav>
      
      <div className="flex justify-center gap-6 mb-6">
      <a href="https://www.instagram.com/__itz_aswin" className="text-gray-400 hover:text-white transition-colors">
          <Instagram className="w-8 h-8" />
        </a>
        <a href="https://www.linkedin.com/in/aswinsaipalakonda/" className="text-gray-400 hover:text-white transition-colors">
          <Linkedin className="w-8 h-8" />
        </a>
      </div>
      
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Aswin Sai💖. All rights reserved.
      </p>
    </footer>
  );
};