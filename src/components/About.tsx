import React from 'react';
import { motion } from 'framer-motion';
import { TypeWriter } from './TypeWriter';

export const About = () => {
  const roles = [
    'Full Stack Developer',
    'No-Code Developer',
    'Tech Enthusiast'
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen pt-28 md:pt-32 flex items-center justify-center px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Hi, I am
            <br />
            Aswin Sai
          </h1>
          
          <h2 className="text-2xl">
            I am a <TypeWriter words={roles} />
          </h2>
          
          <p className="text-gray-400 max-w-xl">
            I am a motivated and versatile individual, always eager to take on new challenges. 
            With a passion for learning I am dedicated to delivering high-quality results. 
            With a positive attitude and a growth mindset, I am ready to make a meaningful 
            contribution and achieve great things.
          </p>

          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-[#915EFF] text-white font-medium hover:bg-[#7f4fff] transition-colors"
          >
            Hire Me
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#915EFF]">
            <img
              src="/assets/images/aswin.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-[#915EFF] animate-pulse"></div>
        </motion.div>
      </div>
    </section>
  );
};