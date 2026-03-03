import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FlipWords } from "@/components/ui/flip-words";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export const About = () => {
  const roles = [
    'Full Stack Developer',
    'No-Code Developer',
    'AI Enthusiast'
  ];

  return (
    <section id="about" className="min-h-screen pt-24 sm:pt-28 md:pt-32 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-4 sm:space-y-6 text-center md:text-left order-2 md:order-1"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I am
            <br />
            <span className="bg-linear-to-r from-[#915EFF] via-purple-400 to-[#915EFF] bg-clip-text text-transparent">
              Aswinsai Palakonda
            </span>
          </motion.h1>
          
          <div className="h-[4vh] sm:h-[6vh]">
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl text-gray-200 mt-2 whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I am a
              <FlipWords 
                words={roles}
                className="text-[#915EFF] font-bold"
              />
            </motion.h2>
          </div>
          
          <TextGenerateEffect
            words="I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things."
            className="text-gray-400 max-w-xl text-sm sm:text-base mx-auto md:mx-0 font-normal"
            duration={0.8}
            filter={true}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full bg-linear-to-r from-[#915EFF] to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-center"
            >
              Hire Me
            </Link>
            <motion.a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full border-2 border-[#915EFF] text-[#915EFF] font-medium hover:bg-[#915EFF]/10 transition-all duration-300 flex items-center justify-center text-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Resume
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative order-1 md:order-2"
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Animated glow effect */}
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-[#915EFF] via-purple-500 to-[#915EFF] opacity-75 blur-2xl animate-pulse"></div>
            
            {/* Main image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#915EFF] shadow-2xl shadow-purple-500/30">
              <img
                src="/assets/images/aswin.jpg"
                alt="Aswinsai Palakonda - Full Stack Developer"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            
            {/* Rotating border effect */}
            <div className="absolute -inset-2 rounded-full border-2 border-dashed border-[#915EFF]/50 animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute -inset-4 rounded-full border border-[#915EFF]/30 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};