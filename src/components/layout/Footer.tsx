import { Linkedin, Instagram, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="mt-20 pb-10 text-center border-t border-white/5 pt-10">
      <div className="flex justify-center gap-8 mb-8">
        <a 
          href="https://github.com/Aswinsaipalakonda" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-[#915EFF] hover:bg-white/10 transition-all transform hover:scale-110"
        >
          <Github className="w-6 h-6" />
        </a>
        <a 
          href="https://linkedin.com/in/aswinsaipalakonda/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-[#915EFF] hover:bg-white/10 transition-all transform hover:scale-110"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a 
          href="https://www.instagram.com/__itz_aswin" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-[#915EFF] hover:bg-white/10 transition-all transform hover:scale-110"
        >
          <Instagram className="w-6 h-6" />
        </a>
      </div>

      <nav className="mb-8">
        <ul className="flex justify-center flex-wrap gap-x-8 gap-y-4 text-gray-400 font-medium">
          <li>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </li>
          <li>
            <a href="https://github.com/Aswinsaipalakonda" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Github</a>
          </li>
        </ul>
      </nav>
      
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Aswinsai Palakonda. All rights reserved.
      </p>
    </footer>
  );
};