import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-white text-xl font-bold">
            Aswin
          </a>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
            <NavLink onClick={() => scrollToSection('skills')}>Skills</NavLink>
            <NavLink onClick={() => scrollToSection('languages')}>Languages</NavLink>
            <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
            <NavLink onClick={() => scrollToSection('certificates')}>Certificates</NavLink>
            <NavLink onClick={() => scrollToSection('education')}>Education</NavLink>
            
            <a 
              href="https://github.com/Aswinsaipalakonda" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#171717] text-purple-500 border border-purple-500 hover:bg-purple-500 hover:text-white transition-colors"
            >
              Github Profile
            </a>
          </div>
        </div>

        {/* Mobile navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-96 opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="pt-4 pb-3 space-y-3">
            <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
            <NavLink onClick={() => scrollToSection('skills')}>Skills</NavLink>
            <NavLink onClick={() => scrollToSection('languages')}>Languages</NavLink>
            <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
            <NavLink onClick={() => scrollToSection('education')}>Education</NavLink>
            
            <a 
              href="https://github.com/Aswinsaipalakonda" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-4 py-2 text-center rounded-full bg-[#171717] text-purple-500 border border-purple-500 hover:bg-purple-500 hover:text-white transition-colors"
            >
              Github Profile
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ 
  onClick, 
  children 
}: { 
  onClick: () => void; 
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className="block w-full md:w-auto text-left md:inline text-gray-300 hover:text-white transition-colors"
  >
    {children}
  </button>
);