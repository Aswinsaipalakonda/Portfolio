import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useState } from 'react';

const technicalSkills = {
  Frontend: [
    { name: 'React.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg' },
    { name: 'TypeScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
  ],
  Backend: [
    { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
    { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', icon: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg' },
    { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
  ],
  DevOps: [
    { name: 'AWS', icon: 'https://www.logo.wine/a/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg' },
    { name: 'Vercel', icon: 'https://favicons.statusgator.com/vercel.png' },
    { name: 'GitHub', icon: 'https://www.vectorlogo.zone/logos/github/github-icon.svg' },
  ],
  Others: [
    { name: 'Figma', icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
    { name: 'Framer', icon: 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg' },
    { name: 'WordPress', icon: 'https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg' },
  ]
};

const SkillCard = ({ title, skills, color, className }: { title: string, skills: any[], color: string, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-[2.5rem] p-8 border border-white/10 bg-black/40 backdrop-blur-3xl overflow-hidden group shadow-2xl ${className}`}
    >
      <div 
        className="absolute inset-x-0 bottom-0 h-1 z-20 transition-all duration-500 group-hover:h-full opacity-20 pointer-events-none"
        style={{ backgroundColor: color }}
      />
      
      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div style={{ transform: "translateZ(50px)" }} className="relative z-30">
        <h3 className="text-3xl font-black text-white mb-8 tracking-tighter uppercase">{title}</h3>
        
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex items-center gap-3 p-3 px-5 rounded-2xl bg-white/5 border border-white/10 shadow-lg"
            >
              <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain" />
              <span className="text-gray-200 text-sm font-bold">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Sparkles/Particles effect (CSS only) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-10 group-hover:opacity-40 transition-opacity">
        <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-white animate-pulse" />
        <div className="absolute bottom-20 right-10 w-1 h-1 rounded-full bg-white animate-ping" />
        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 rounded-full bg-white animate-bounce" />
      </div>
    </motion.div>
  );
};

export const AboutSkills = () => {
  return (
    <section className="py-32 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="max-w-2xl"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
            Digital <br />
            <span className="text-[#915EFF]">Craftsmanship</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
            I don't just write code; I architect experiences. My stack is a curated collection of industry-leading technologies optimized for performance and beauty.
          </p>
        </motion.div>
        
        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="flex gap-4 pb-2"
        >
          <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-xl animate-bounce">
            <div className="h-2 w-2 rounded-full bg-[#915EFF]" />
          </div>
          <span className="text-white text-sm font-black uppercase tracking-[0.2em] mt-4">Tools of Choice</span>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[minmax(300px,auto)]">
        {/* Frontend - Wide Impact */}
        <div className="md:col-span-8">
          <SkillCard 
            title="Frontend Engineering" 
            skills={technicalSkills.Frontend} 
            color="#915EFF"
            className="h-full border-[#915EFF]/20"
          />
        </div>

        {/* DevOps - Compact Square */}
        <div className="md:col-span-4">
          <SkillCard 
            title="Infrastructure" 
            skills={technicalSkills.DevOps} 
            color="#10b981"
            className="h-full border-green-500/20"
          />
        </div>

        {/* Backend - Tall Sidebar Style */}
        <div className="md:col-span-5">
           <SkillCard 
            title="Performance Systems" 
            skills={technicalSkills.Backend} 
            color="#3b82f6"
            className="h-full border-blue-500/20"
          />
        </div>

        {/* Others - Wide Bottom */}
        <div className="md:col-span-7">
          <SkillCard 
            title="Creative Utilities" 
            skills={technicalSkills.Others} 
            color="#f43f5e"
            className="h-full border-rose-500/20"
          />
        </div>
      </div>

      {/* Background Decorative Gradient */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-[#915EFF]/5 blur-[200px] rounded-full -z-10 pointer-events-none" />
    </section>
  );
};
