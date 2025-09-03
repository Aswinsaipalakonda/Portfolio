import React from 'react';
import { motion } from 'framer-motion';

const languages = [
  { 
    name: 'C', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png',
    proficiency: 90
  },
  { 
    name: 'C++', 
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
    proficiency: 85
  },
  { 
    name: 'Python', 
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    proficiency: 90
  },
  { 
    name: 'HTML', 
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
    proficiency: 100
  },
  { 
    name: 'CSS', 
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
    proficiency: 90
  },
  { 
    name: 'SQL', 
    icon: 'https://www.svgrepo.com/show/354099/mysql.svg',
    proficiency: 80
  },  // Added missing comma here
  { 
    name: 'Javascript', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png',
    proficiency: 85
  },
  { 
    name: 'React Js', 
    icon: 'https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg',
    proficiency: 85
  }
];

export const Languages: React.FC = () => {
  return (
    <section id="languages" className="min-h-screen py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Languages</h2>
          <p className="text-gray-400">
            Programming languages I've mastered over the years
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.map((language) => (
            <motion.div
              key={language.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#151030] p-6 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={language.icon} 
                  alt={language.name} 
                  className="w-10 h-10"
                />
                <h3 className="text-xl font-semibold text-white">{language.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};