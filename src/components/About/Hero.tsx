import { motion } from 'framer-motion';
import { Linkedin, Instagram, ArrowDown } from 'lucide-react';

export const AboutHero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('education-about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-dvh bg-[#050505] overflow-hidden flex flex-col pt-40 md:pt-48 lg:pt-56">
      
      {/* 1. Background Content Layer (Perfect Image Blending) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#050505]">
        <div className="relative h-full w-auto">
          <motion.img 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            src="/assets/images/aswin-hero-creative.png" 
            alt="Aswinsai Palakonda" 
            className="h-full w-auto object-contain pointer-events-none"
          />
          {/* Edge Shadows to blend square image with background */}
          <div className="absolute inset-y-0 -left-1 w-20 md:w-50 bg-linear-to-r from-[#050505] to-transparent" />
          <div className="absolute inset-y-0 -right-1 w-20 md:w-50 bg-linear-to-l from-[#050505] to-transparent" />
          <div className="absolute inset-x-0 -top-1 h-20 md:h-50 bg-linear-to-b from-[#050505] to-transparent" />
          <div className="absolute inset-x-0 -bottom-1 h-32 md:h-64 bg-linear-to-t from-[#050505] to-transparent" />
        </div>
      </div>

      {/* 2. UI Elements Layer (Match Sultan Karimi layout strictly) */}
      <div className="relative z-10 w-full h-full flex flex-col p-8 md:p-14 lg:p-16 max-w-[1800px] mx-auto">
        
        {/* --- Top Row: Name & Tagline --- */}
        <div className="flex justify-between items-start w-full">
          
          {/* Top Left: Stacked Name */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col select-none"
          >
            <h2 className="text-[#c5a36b] font-serif text-3xl md:text-5xl lg:text-6xl tracking-tighter uppercase font-black leading-[0.8] drop-shadow-lg">
              Aswinsai <br />
              <span className="text-white">Palakonda</span>
            </h2>
            <div className="flex items-center gap-4 mt-8">
              <div className="h-px w-10 bg-[#c5a36b]/80" />
              <p className="text-white/40 text-[9px] tracking-[0.4em] uppercase font-light">
                Digital Architect
              </p>
            </div>
          </motion.div>

          {/* Top Right: Tagline */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-right select-none"
          >
            <p className="text-white/30 text-[10px] md:text-[11px] font-medium tracking-[0.2em] leading-relaxed uppercase">
              Design that speaks.<br />
              <span className="text-white/60">Visuals that convert.</span>
            </p>
          </motion.div>
        </div>

        {/* --- Bottom Row: Socials & Role --- */}
        <div className="mt-auto w-full flex flex-col md:flex-row justify-between items-end pb-8">
          
          {/* Bottom Left: Minimal Social Links */}
          <div className="flex flex-col gap-6">
            <motion.a 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              href="https://linkedin.com/in/aswinsaipalakonda/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group transition-all"
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 group-hover:bg-[#0077b5] transition-all transform group-hover:scale-110">
                <Linkedin className="w-4 h-4 text-white" />
              </div>
              <span className="text-[11px] tracking-[0.2em] text-white/50 group-hover:text-white uppercase font-bold transition-colors">LINKEDIN</span>
            </motion.a>
            <motion.a 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              href="https://www.instagram.com/__itz_aswin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group transition-all"
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 group-hover:bg-linear-to-tr group-hover:from-[#f09433] group-hover:via-[#dc2743] group-hover:to-[#bc1888] transition-all transform group-hover:scale-110">
                <Instagram className="w-4 h-4 text-white" />
              </div>
              <span className="text-[11px] tracking-[0.2em] text-white/50 group-hover:text-white uppercase font-bold transition-colors">INSTAGRAM</span>
            </motion.a>
          </div>

          {/* Bottom Right: Hero Role Title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-right flex flex-col items-end select-none"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-widest uppercase leading-[0.75] font-black drop-shadow-2xl">
              VISUAL <br />
              <span className="text-[#c5a36b]">DESIGNER</span>
            </h1>
          </motion.div>
        </div>

        {/* --- Bottom Center: Portfolio Content --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="w-full pt-8 flex justify-center border-t border-white/5"
        >
          <p className="text-white/30 text-[10px] md:text-[11px] font-light tracking-[0.2em] leading-relaxed uppercase max-w-4xl text-center">
            Architecting digital backends & shaping visual experiences.
          </p>
        </motion.div>
      </div>

      {/* Explore Indicator */}
      <motion.button
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 opacity-20 hover:opacity-100 transition-all group flex flex-col items-center gap-2 cursor-pointer"
      >
        <span className="text-[9px] tracking-[0.5em] text-white uppercase font-light">Explore</span>
        <ArrowDown className="w-5 h-5 text-[#c5a36b]" />
      </motion.button>

    </section>
  );
};
