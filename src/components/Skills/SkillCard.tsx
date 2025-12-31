
import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  skills: Array<{
    name: string;
    icon: string;
  }>;
}

export const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#151030] p-4 sm:p-6 rounded-2xl"
    >
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#1d1836] rounded-full flex items-center gap-2 text-sm transform hover:scale-105 transition-transform"
          >
            <img src={skill.icon} alt={skill.name} className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-gray-300">{skill.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};