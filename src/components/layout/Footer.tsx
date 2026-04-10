import { Linkedin, Instagram, Github, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-20 pb-10 border-t border-white/5 pt-10" role="contentinfo" aria-label="Site footer">
      {/* Social Links */}
      <div className="flex justify-center gap-8 mb-8">
        <a 
          href="https://github.com/Aswinsaipalakonda" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit Aswinsai Palakonda's GitHub profile"
          title="GitHub — Aswinsai Palakonda"
          className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-[#915EFF] hover:bg-white/10 transition-all transform hover:scale-110"
        >
          <Github className="w-6 h-6" />
        </a>
        <a 
          href="https://linkedin.com/in/aswinsaipalakonda/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Connect with Aswinsai Palakonda on LinkedIn"
          title="LinkedIn — Aswinsai Palakonda"
          className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-[#915EFF] hover:bg-white/10 transition-all transform hover:scale-110"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a 
          href="https://www.instagram.com/__itz_aswin" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Follow Aswinsai Palakonda on Instagram"
          title="Instagram — Aswinsai Palakonda"
          className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-[#915EFF] hover:bg-white/10 transition-all transform hover:scale-110"
        >
          <Instagram className="w-6 h-6" />
        </a>
        <a 
          href="mailto:aswinsaipalakonda@gmail.com" 
          aria-label="Email Aswinsai Palakonda"
          title="Email — aswinsaipalakonda@gmail.com"
          className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-[#915EFF] hover:bg-white/10 transition-all transform hover:scale-110"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>

      {/* Internal Navigation Links (strong internal linking for SEO) */}
      <nav className="mb-8" aria-label="Footer navigation">
        <ul className="flex justify-center flex-wrap gap-x-8 gap-y-4 text-gray-400 font-medium">
          <li>
            <Link to="/" className="hover:text-white transition-colors" title="Aswinsai Palakonda — Home">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-white transition-colors" title="About Aswinsai Palakonda">About</Link>
          </li>
          <li>
            <Link to="/certificates" className="hover:text-white transition-colors" title="Professional Certificates — Aswinsai Palakonda">Certificates</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-white transition-colors" title="Contact Aswinsai Palakonda">Contact</Link>
          </li>
          <li>
            <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1" title="Resume — Aswinsai Palakonda">
              Resume <ExternalLink className="w-3 h-3" />
            </a>
          </li>
        </ul>
      </nav>

      {/* External Links (authority signals) */}
      <nav className="mb-8" aria-label="External profiles">
        <ul className="flex justify-center flex-wrap gap-x-6 gap-y-3 text-gray-500 text-sm">
          <li>
            <a href="https://clientura.org" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors" title="Clientura — Digital Marketing Agency">Clientura</a>
          </li>
          <li>
            <a href="https://github.com/Aswinsaipalakonda" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors" title="GitHub Profile">GitHub</a>
          </li>
          <li>
            <a href="https://linkedin.com/in/aswinsaipalakonda" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors" title="LinkedIn Profile">LinkedIn</a>
          </li>
        </ul>
      </nav>
      
      {/* Copyright */}
      <p className="text-gray-500 text-sm text-center">
        © {currentYear} Aswinsai Palakonda ❤️. All rights reserved.
      </p>
    </footer>
  );
};