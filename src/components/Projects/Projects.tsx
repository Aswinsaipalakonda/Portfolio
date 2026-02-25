import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import StackingCards, { StackingCardItem } from '../fancy/blocks/stacking-cards';

const projects = [
  {
    title: 'Rainbucks - Digital Product Marketplace',
    description: 'Developed a digital product marketplace offering Digital Courses with different packages. Implemented admin and client dashboards, purchase management, and product delivery automation.',
    image: '/assets/rainbucks.png',
    date: '2025',
    demoLink: 'https://rainbucks.org',
    githubLink: 'https://github.com/Aswinsaipalakonda'
  },
  {
    title: 'Clientura - Digital Marketing Agency',
    description: 'Built a portfolio and client management platform for a digital marketing agency. Included features for client onboarding, project showcases, testimonials, and contact automation.',
    image: '/assets/clientura.png',
    date: '2025',
    demoLink: 'https://clientura.org',
    githubLink: 'https://github.com/Aswinsaipalakonda'
  },
  {
    title: 'Overseas - Abroad Consultancy',
    description: 'Created a Next.js-based consultancy platform helping students connect with overseas universities. Integrated dynamic course listings, inquiry forms, and admin management systems.',
    image: '/assets/overseas.png',
    date: '2024',
    demoLink: 'http://infinitiglobals.com/',
    githubLink: 'https://github.com/Aswinsaipalakonda'
  },
  {
    title: 'Clientura EMS',
    description: 'Architected and deployed a custom, end-to-end Employee Management System using PHP and MySQL to centralize workforce data and streamline administrative workflows.',
    image: '/assets/clientura_ems.png',
    date: '2025',
    demoLink: 'https://ems.clientura.org',
    githubLink: 'https://github.com/Aswinsaipalakonda'
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

        <div className="w-full relative mx-auto pb-32">
          <StackingCards 
            totalCards={projects.length} 
            className="w-full relative"
          >
            {projects.map((project, index) => (
              <StackingCardItem key={project.title} index={index} className="h-screen sm:h-[800px] lg:h-[900px] flex items-center justify-center">
                <div className="w-[95%] lg:w-full max-w-6xl mx-auto h-[600px] sm:h-[450px] lg:h-[550px]">
                  <ProjectCard {...project} />
                </div>
              </StackingCardItem>
            ))}
          </StackingCards>
        </div>
      </div>
    </section>
  );
};