import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    title: "Freelancing",
    company: "Independent Developer",
    date: "2024",
    description: "Designed and built multiple scalable web applications and digital platforms for diverse clients, mastering modern frontend and backend technologies.",
  },
  {
    id: 2,
    title: "Chief Operating Officer",
    company: "Homessy",
    date: "2024 - 2025",
    description: "Led cross-functional teams to streamline operational workflows and oversaw the strategic execution of business development alongside technical delivery.",
  },
  {
    id: 3,
    title: "Web Developer Intern",
    company: "BetweenBreaks",
    date: "2025",
    description: "Contributed to core software projects, gaining hands-on experience in agile development, code optimization, and modern software architectures.",
  },
  {
    id: 4,
    title: "Co-founder & CTO",
    company: "Clientura",
    date: "2025 - Present",
    description: "Architecting robust digital solutions, driving the technical vision, and managing end-to-end product development for a fast-growing digital marketing agency.",
  },
  {
    id: 5,
    title: "Paytm Campus Ambassador",
    company: "Paytm",
    date: "2026 - Present",
    description: "Acted as a liaison between Paytm and the campus community, driving brand awareness and user engagement through strategic marketing initiatives and events.",
  },
];

export const AboutExperience = () => {
  return (
    <section className="py-20 px-4 sm:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Professional <span className="text-[#915EFF]">Journey</span></h2>
        <p className="text-gray-400">A timeline of my growth and contributions</p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Central Vertical Line */}
        <div className="absolute top-0 bottom-0 left-[18px] md:left-1/2 md:-ml-px w-0.5 bg-gradient-to-b from-transparent via-[#915EFF]/50 to-transparent" />

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex flex-col md:flex-row items-center justify-between w-full group ${
                  isLeft ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Space on empty side */}
                <div className="hidden md:block w-5/12" />

                {/* Timeline Dot */}
                <div className="absolute left-[13px] md:left-1/2 transform md:-translate-x-1/2 w-[12px] h-[12px] rounded-full bg-[#915EFF] shadow-[0_0_15px_rgba(145,94,255,0.8)] z-10 border-2 border-black" />

                {/* Content Card */}
                <div className={`w-full ml-12 md:ml-0 md:w-5/12 ${isLeft ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                  <div className="p-6 rounded-2xl bg-[#1d1836]/40 backdrop-blur-md border border-white/5 hover:border-[#915EFF]/50 hover:bg-[#1d1836]/60 transition-all shadow-xl group-hover:-translate-y-1 duration-300">
                    <span className="text-xs font-bold text-[#915EFF] tracking-widest uppercase mb-2 block">{exp.date}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#c29af5] transition-colors">{exp.title}</h3>
                    <h4 className="text-sm text-gray-400 mb-4">{exp.company}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
