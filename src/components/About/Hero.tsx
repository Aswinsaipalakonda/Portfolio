import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const AboutHero = () => {
  const scrollToNext = () => {
    document.getElementById('education-about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-[130dvh] bg-[#050505]">
      {/* Wrapper to hold the cinematic image full bleed */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full h-full relative overflow-hidden"
      >
        {/* Subtle vignette and bottom dark fade so it transitions nicely into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.5)_100%)] z-10 pointer-events-none" />
        
        {/* The Magical Generated Image */}
        <img 
          src="/assets/images/about-magical-hero-v4.png" 
          alt="Aswinsai in a cinematic magical cosmic environment" 
          className="relative block w-full h-full object-cover object-center filter contrast-110 saturate-[1.1] transform scale-[1.01]"
        />

        {/* Scroll CTA inside the image container, nestled at the bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <button 
            onClick={scrollToNext}
            className="flex flex-col items-center justify-center gap-3 group/btn cursor-pointer pb-2"
            aria-label="Scroll down"
          >
            <div className="w-12 h-12 rounded-full border border-white/10 bg-black/20 backdrop-blur-xl flex items-center justify-center group-hover/btn:bg-white/10 group-hover/btn:border-white/30 transition-all shadow-2xl">
              <ArrowDown className="w-5 h-5 text-white/50 group-hover/btn:text-white animate-bounce transition-colors" />
            </div>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};
