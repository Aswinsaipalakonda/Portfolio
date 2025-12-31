
import { motion } from 'framer-motion';

const softSkills = [
  'Leadership',
  'Fast Learner',
  'Team Management',
  'Communication',
  'Problem Solving',
  'Time Management',
  'Adaptability',
  'Critical Thinking',
  'Emotional Intelligence'
];

export const SoftSkills: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-6 sm:mt-8"
    >
      <h3 className="text-xl font-semibold text-white mb-4">Soft Skills</h3>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {softSkills.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#1d1836] text-[#915EFF] rounded-full text-sm border border-[#915EFF]/30 hover:bg-[#915EFF]/10 transition-colors"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};