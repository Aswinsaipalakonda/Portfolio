import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'Nexas Digi Solutions',
    description: 'A digital marketing project focused on providing comprehensive solutions, including portfolio creation, landing pages, SEO optimization, and graphic design.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGlnaXRhbCUyMG1hcmtldGlpbmd8ZW58MHx8MHx8fDA%3D',
    date: 'Feb 2025',
    demoLink: 'https://nexas-landing.vercel.app/',
    githubLink: 'https://github.com/Aswinsaipalakonda/landing-page'
  },
  {
    title: 'MVGR Club Portfolio',
    description: 'A dynamic portfolio website for MVGR college clubs featuring event showcases, member profiles, and activity timelines.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=400',
    date: 'Nov 2024',
    demoLink: 'https://aswinsaipalakonda.github.io/club-page/',
    githubLink: 'https://github.com/Aswinsaipalakonda/club-page'
  },
  {
    title: 'Tic Tac Toe Game',
    description: 'A modern implementation of the classic Tic Tac Toe game with beautiful UI animations and multiplayer support.',
    image: 'https://images.unsplash.com/photo-1667745116154-58101de62e17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8WCUyME8lMjBYJTIwJTIwZ2FtZXxlbnwwfHwwfHx8MA%3D%3D',
    date: 'Oct 2024',
    demoLink: 'https://aswinsaipalakonda.github.io/Tic-Tac-Toe/',
    githubLink: 'https://github.com/Aswinsaipalakonda/Tic-Tac-Toe'
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <p className="text-gray-400">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};