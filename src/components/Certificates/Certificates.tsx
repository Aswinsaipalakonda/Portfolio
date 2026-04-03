import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { certificatesData } from '../../data/certificates';

export const Certificates: React.FC = () => {
  // Split data into two rows for the marquee
  const halfLength = Math.ceil(certificatesData.length / 2);
  const topRow = certificatesData.slice(0, halfLength);
  const bottomRow = certificatesData.slice(halfLength);

  return (
    <section id="certificates" className="min-h-[80vh] py-20 px-4 sm:px-8 relative overflow-hidden flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Certificates & Achievements</h2>
          <p className="text-gray-400">
            Professional certifications and technical achievements.
          </p>
        </motion.div>
      </div>

      <div className="w-full relative flex flex-col gap-6 overflow-hidden">
        {/* Top Row Marquee (Scrolling Left) */}
        <motion.div 
          className="flex w-fit"
          animate={{ x: [0, "-33.333333%"] }}
          transition={{ repeat: Infinity, duration: 65, ease: "linear" }}
        >
          {[...topRow, ...topRow, ...topRow].map((cert, index) => (
            <div key={`m1-${index}`} className="w-64 h-48 md:w-80 md:h-56 shrink-0 mx-3 rounded-2xl overflow-hidden border border-white/10 shadow-lg relative group">
              <img 
                src={cert.imageUrl} 
                alt={cert.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                loading="lazy" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                 <p className="text-white text-sm font-medium leading-tight">{cert.title}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Row Marquee (Scrolling Right) */}
        <motion.div 
          className="flex w-fit relative"
          animate={{ x: ["-33.333333%", "0%"] }}
          transition={{ repeat: Infinity, duration: 65, ease: "linear" }}
        >
          {[...bottomRow, ...bottomRow, ...bottomRow].map((cert, index) => (
            <div key={`m2-${index}`} className="w-64 h-48 md:w-80 md:h-56 shrink-0 mx-3 rounded-2xl overflow-hidden border border-white/10 shadow-lg relative group">
              <img 
                src={cert.imageUrl} 
                alt={cert.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                loading="lazy" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                 <p className="text-white text-sm font-medium leading-tight">{cert.title}</p>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Fade Out Edges */}
        <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-linear-to-r from-black to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-linear-to-l from-black to-transparent pointer-events-none z-10"></div>
      </div>

      <div className="mt-16 flex justify-center">
        <Link 
          to="/certificates"
          className="inline-flex items-center gap-2 bg-[#915EFF] text-white px-8 py-4 rounded-full font-medium shadow-lg shadow-[#915EFF]/30 hover:shadow-[#915EFF]/50 hover:bg-[#804dee] transition-all duration-300 active:scale-95"
        >
          View All Certificates
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
};