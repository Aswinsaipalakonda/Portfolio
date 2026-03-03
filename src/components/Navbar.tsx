import { useState } from 'react';
import { Menu, X, Github, Linkedin, Instagram, Home, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home className="w-4 h-4" /> },
    { name: 'LinkedIn', path: 'https://linkedin.com/in/aswinsaipalakonda', isExternal: true, icon: <Linkedin className="w-4 h-4" /> },
    { name: 'Github', path: 'https://github.com/Aswinsaipalakonda', isExternal: true, icon: <Github className="w-4 h-4" /> },
    { name: 'Instagram', path: 'https://www.instagram.com/__itz_aswin', isExternal: true, icon: <Instagram className="w-4 h-4" /> },
    { name: 'Contact', path: '/contact', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white text-2xl font-bold tracking-tighter hover:text-[#915EFF] transition-colors">
            Aswinsai
          </Link>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              link.isExternal ? (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-[#915EFF] hover:bg-white/5 rounded-full transition-all duration-300 font-medium"
                >
                  {link.icon}
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-medium ${
                    location.pathname === link.path
                      ? 'text-[#915EFF] bg-[#915EFF]/10'
                      : 'text-gray-400 hover:text-[#915EFF] hover:bg-white/5'
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              )
            ))}
          </div>
        </div>

        {/* Mobile navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? 'max-h-[500px] opacity-100 mt-4'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-[#151030]/90 backdrop-blur-xl rounded-2xl p-4 border border-[#915EFF]/20 space-y-1">
            {navLinks.map((link) => (
              link.isExternal ? (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-[#915EFF] hover:bg-white/5 rounded-xl transition-all"
                >
                  {link.icon}
                  <span className="font-medium">{link.name}</span>
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    location.pathname === link.path
                      ? 'text-[#915EFF] bg-[#915EFF]/10'
                      : 'text-gray-300 hover:text-[#915EFF] hover:bg-white/5'
                  }`}
                >
                  {link.icon}
                  <span className="font-medium">{link.name}</span>
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};