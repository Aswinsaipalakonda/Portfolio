import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { useLenisContext } from '../providers/LenisProvider';
import { 
  Home, 
  User, 
  Code2, 
  Briefcase, 
  Mail, 
  Menu, 
  X,
  Award
} from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const { lenis } = useLenisContext();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ScrollSpy Logic
  useEffect(() => {
    if (location.pathname !== '/') return;

    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    const sections = ['hero', 'about', 'experience', 'projects', 'certificates'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  // Scroll-mapped values for butter-smooth transition (0 to 150px)
  const scrollRange = [0, 150];
  const springConfig = { stiffness: 100, damping: 30, mass: 1 };
  
  const headerPadding = useTransform(scrollY, scrollRange, ['16px', '8px']);
  const navMaxWidthTransition = useTransform(scrollY, scrollRange, ['1000px', '780px']);
  
  const navBg = useTransform(scrollY, scrollRange, [
    isMobile ? 'rgba(10, 10, 10, 0.95)' : 'rgba(10, 10, 10, 0)', 
    'rgba(10, 10, 10, 0.85)'
  ]);
  const navBorder = useTransform(scrollY, scrollRange, [
    isMobile ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0)', 
    'rgba(255, 255, 255, 0.15)'
  ]);
  const navBlur = useTransform(scrollY, scrollRange, ['blur(10px)', 'blur(20px)']);
  const navShadow = useTransform(scrollY, scrollRange, ['none', '0 25px 50px -12px rgba(0, 0, 0, 0.5)']);
  const navPaddingX = useTransform(scrollY, scrollRange, ['40px', '32px']);
  const navPaddingY = useTransform(scrollY, scrollRange, ['24px', '12px']);

  const smoothHeaderPadding = useSpring(headerPadding, springConfig);
  const smoothNavMaxWidth = useSpring(navMaxWidthTransition as any, springConfig);
  const smoothNavPaddingX = useSpring(navPaddingX, springConfig);
  const smoothNavPaddingY = useSpring(navPaddingY, springConfig);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home className="w-4 h-4" /> },
    { name: 'About', path: '/about', icon: <User className="w-4 h-4" /> },
    { name: 'Experience', path: 'experience', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Projects', path: 'projects', icon: <Code2 className="w-4 h-4" /> },
    { name: 'Certificates', path: '/certificates', icon: <Award className="w-4 h-4" /> },
  ];

  const handleLinkClick = (path: string) => {
    setIsMenuOpen(false);

    // Handle dedicated pages
    if (path.startsWith('/')) {
      navigate(path);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/#' + path);
      return;
    }

    const element = document.getElementById(path);
    if (element) {
      if (lenis) {
        lenis.scrollTo(element, { offset: -100, duration: 1.5 });
      } else {
        const top = element.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.header 
      style={{
        paddingTop: smoothHeaderPadding,
      }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
    >
      <motion.nav
        layout
        className="pointer-events-auto"
        style={{
          width: '95%',
          maxWidth: smoothNavMaxWidth,
          backgroundColor: isMobile ? 'transparent' : navBg,
          borderColor: isMobile ? 'transparent' : navBorder,
          backdropFilter: isMobile ? 'none' : navBlur,
          boxShadow: isMobile ? 'none' : navShadow,
          borderRadius: '100px',
          paddingLeft: isMobile ? '0px' : smoothNavPaddingX,
          paddingRight: isMobile ? '0px' : smoothNavPaddingX,
          paddingTop: isMobile ? '0px' : smoothNavPaddingY,
          paddingBottom: isMobile ? '0px' : smoothNavPaddingY,
          borderWidth: isMobile ? '0px' : '1px',
        }}
      >
        <div className="md:hidden flex items-center justify-between w-full h-14 bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 rounded-full px-5 shadow-2xl">
          <Link 
            to="/" 
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('hero');
            }}
            className="text-white text-base font-extrabold tracking-tight"
          >
            Aswinsai<span className="text-[#915EFF]">.</span>
          </Link>

          <button
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white transition-all active:scale-90"
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(true);
            }}
            aria-label="Toggle menu"
          >
            <Menu size={20} />
          </button>
        </div>

        <div className="hidden md:flex items-center justify-between w-full gap-4">
          <Link 
            to="/" 
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('hero');
            }}
            className="text-white text-xl font-bold tracking-tighter hover:text-[#915EFF] transition-colors shrink-0"
          >
            Aswinsai<span className="text-[#915EFF]">.</span>
          </Link>
          
          <div className="flex items-center gap-4">
            {navLinks.map((link) => {
              const isActive = (location.pathname === link.path) || (activeSection === link.path && location.pathname === '/');
              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.path)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap relative ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                  {link.name}
                </button>
              );
            })}
          </div>

          <div className="block">
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all shadow-xl whitespace-nowrap active:scale-95 ${
                location.pathname === '/contact'
                  ? 'bg-white text-black'
                  : 'bg-[#915EFF] hover:bg-[#804dee] text-white shadow-purple-500/25 hover:scale-105'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 md:hidden"
              />
              
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-[#050505] border-r border-white/5 p-8 z-60 md:hidden flex flex-col"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-white text-lg font-black tracking-tight">
                    Aswinsai<span className="text-[#915EFF]">.</span>
                  </span>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white active:bg-white/10 transition-all"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex flex-col space-y-3">
                  {navLinks.map((link, idx) => {
                    const isActive = (location.pathname === link.path) || (activeSection === link.path && location.pathname === '/');
                    return (
                      <motion.button
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        onClick={() => handleLinkClick(link.path)}
                        className={`flex items-center gap-5 py-2 transition-all group ${
                          isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        <div className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all shadow-lg ${
                          isActive 
                            ? 'bg-[#915EFF]/20 border-[#915EFF]/30 text-[#915EFF]' 
                            : 'bg-white/5 border-white/10 text-gray-400 group-hover:bg-[#915EFF]/10 group-hover:border-[#915EFF]/20'
                        }`}>
                          {link.name === 'Home' && <Home size={18} />}
                          {link.name === 'About' && <User size={18} />}
                          {link.name === 'Projects' && <Code2 size={18} />}
                          {link.name === 'Experience' && <Briefcase size={18} />}
                          {link.name === 'Certificates' && <Award size={18} />}
                        </div>
                        <span className="font-bold text-xl tracking-tight">{link.name}</span>
                      </motion.button>
                    );
                  })}
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="pt-8 mt-6 border-t border-white/5"
                  >
                    <Link
                      to="/contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full px-6 py-4 bg-[#915EFF] text-white rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-purple-900/30 active:scale-95 transition-all"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Contact Me</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  );
};