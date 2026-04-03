import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const allSkills = [
  { name: 'React.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg'},
  { name: 'TypeScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'},
  { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'},
  { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
  { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', icon: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg'},
  { name: 'AWS', icon: 'https://www.logo.wine/a/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg' },
  { name: 'Firebase', icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
  { name: 'Figma', icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
  { name: 'GitHub', icon: 'https://www.vectorlogo.zone/logos/github/github-icon.svg' },
  { name: 'Framer', icon: 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg' },
  { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
];

export const AboutSkills = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden flex flex-col items-center justify-center min-h-[900px]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#915EFF]/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 blur-[150px] rounded-full animate-pulse delay-1000" />
      </div>

      <div className="text-center mb-20 z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[#915EFF] text-sm font-black uppercase tracking-[0.4em] mb-4"
        >
          Technology Infrastructure
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter"
        >
          The <span className="text-transparent bg-clip-text bg-linear-to-r from-[#915EFF] to-blue-500">Tech Core</span>
        </motion.h2>
      </div>

      {/* 3D Container */}
      <div className="relative w-full max-w-4xl h-[600px] flex items-center justify-center perspective-[2000px]">
        {/* Central Pulsing Sphere */}
        <motion.div 
           animate={{ 
             scale: [1, 1.1, 1],
             boxShadow: [
               "0 0 40px rgba(145, 94, 255, 0.2)",
               "0 0 100px rgba(145, 94, 255, 0.4)",
               "0 0 40px rgba(145, 94, 255, 0.2)"
             ]
           }}
           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
           className="relative z-30 w-40 h-40 md:w-56 md:h-56 rounded-full border border-white/20 bg-linear-to-br from-[#1a1443] to-black flex items-center justify-center backdrop-blur-3xl overflow-hidden"
        >
          {/* Internal Wireframe/Glow effect */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#915EFF] via-transparent to-transparent animate-pulse" />
          <div className="absolute inset-4 rounded-full border border-dashed border-[#915EFF]/30 animate-[spin_12s_linear_infinite]" />
          <div className="absolute inset-8 rounded-full border border-dotted border-[#915EFF]/50 animate-[spin_8s_linear_infinite_reverse]" />
          
          <div className="relative z-10 text-center">
            <span className="text-white font-black text-2xl md:text-3xl tracking-widest uppercase">CORE</span>
            <div className="h-1 w-12 bg-[#915EFF] mx-auto mt-2" />
          </div>
        </motion.div>

        {/* Orbiting Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {allSkills.map((skill, index) => {
            const count = allSkills.length;
            const angle = (index / count) * 2 * Math.PI;
            const radiusX = 250 + (index % 3) * 40; // Variable orbits
            const radiusY = 120 + (index % 2) * 50;
            const duration = 15 + (index % 5) * 5; // Differing speeds
            
            return (
              <motion.div
                key={skill.name}
                animate={{
                  rotate: 360,
                  transition: { duration, repeat: Infinity, ease: "linear" }
                }}
                className="absolute top-1/2 left-1/2 w-0 h-0"
                style={{ 
                   transformOrigin: "center center",
                }}
              >
                <motion.div
                   animate={{
                      rotate: -360,
                      transition: { duration, repeat: Infinity, ease: "linear" }
                   }}
                   className="pointer-events-auto"
                   style={{
                     transform: `translate(${radiusX}px, ${radiusY}px)`,
                   }}
                >
                  <motion.div 
                    whileHover={{ scale: 1.5, z: 50, filter: "brightness(1.5)" }}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-black/60 border border-white/10 shadow-2xl backdrop-blur-xl group hover:border-[#915EFF]/50 transition-all cursor-pointer"
                  >
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-8 h-8 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_15px_#915EFF]" 
                    />
                    <span className="text-white text-[10px] font-black uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {skill.name}
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Connecting Lines (Visual Fake) */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-dashed border-[#915EFF]/20 rounded-full animate-[spin_20s_linear_infinite]" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] border border-dashed border-[#915EFF]/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
        </div>
      </div>

      <div className="mt-12 flex items-center gap-8 z-10">
         <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
               <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-900 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-linear-to-br from-[#915EFF] to-transparent opacity-50" />
               </div>
            ))}
         </div>
         <p className="text-gray-400 text-sm font-bold tracking-widest uppercase">Multi-Stack Expertise <span className="text-white ml-2">2024</span></p>
      </div>

      <style>{`
        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
};
