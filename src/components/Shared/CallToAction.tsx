import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const CallToAction = () => {
  return (
    <section className="relative w-full py-16 overflow-hidden bg-transparent border-t border-white/5">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Main Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-tight max-w-4xl text-white"
          >
            Let's Build Something <br className="hidden md:block" />
            <span className="text-[#915EFF]">Remarkable</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="mt-8 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Whether you're looking to build a scalable digital product, an interactive platform, or need technical leadership, I'm ready to bring your vision to life.
          </motion.p>

          {/* Animated Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-12 flex flex-col sm:flex-row items-center gap-6"
          >
            {/* Primary Action Button (CTA-05 Style) */}
            <Link to="/contact">
              <button className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-[#915EFF] p-1 ps-10 pe-20 text-lg font-black uppercase tracking-widest text-white transition-all duration-500 hover:ps-20 hover:pe-10 hover:bg-[#804dee] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 shadow-[0_0_40px_rgba(145,94,255,0.3)] hover:shadow-[0_0_60px_rgba(145,94,255,0.5)] active:scale-95">
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute right-1 top-1 flex h-14 w-14 items-center justify-center rounded-full bg-black/90 text-white transition-all duration-500 group-hover:right-[calc(100%-58px)]">
                  <ArrowUpRight className="h-6 w-6 group-hover:rotate-45 transition-transform duration-500" />
                </div>
              </button>
            </Link>

            {/* Secondary Action Link */}
            <a
              href="mailto:aswinsaipalakonda@gmail.com"
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-all font-bold text-lg px-8 py-5 group"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Email Me</span>
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#915EFF]/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};
