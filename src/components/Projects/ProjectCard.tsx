import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  demoLink: string;
  githubLink: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  date,
  demoLink,
  githubLink
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#151030] rounded-2xl overflow-hidden"
    >
      <div className="relative group">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a 
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#915EFF] rounded-full hover:bg-[#7f4fff] transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
          <a 
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#915EFF] rounded-full hover:bg-[#7f4fff] transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-sm text-gray-400 mb-2">{date}</p>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};