import React from 'react';
import { motion } from 'framer-motion';

interface EducationCardProps {
  school: string;
  degree: string;
  date: string;
  grade: string;
  description: string;
  logo: string;
  isLeft?: boolean;
}

export const EducationCard: React.FC<EducationCardProps> = ({
  school,
  degree,
  date,
  grade,
  description,
  logo,
  isLeft = true
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      className={`flex items-start gap-4 md:gap-6 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
        <div className="bg-[#151030] p-6 rounded-2xl">
          <div className={`flex items-center gap-4 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
            <img src={logo} alt={school} className="w-12 h-12 object-contain" />
            <div>
              <h3 className="text-xl font-semibold text-white">{school}</h3>
              <p className="text-gray-400">{degree}</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-2">{date}</p>
          <p className="text-[#915EFF] font-semibold mb-2">Grade: {grade}</p>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
      <div className="hidden md:block w-1/2" />
    </motion.div>
  );
};