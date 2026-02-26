import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Freelancing",
    company: "Independent Developer",
    date: "2024",
    description: "Designed and built multiple scalable web applications and digital platforms for diverse clients, mastering modern frontend and backend technologies.",
    image: "/experience/freelancing.png"
  },
  {
    id: 2,
    title: "Chief Operating Officer",
    company: "Homessy",
    date: "2024 - 2025",
    description: "Led cross-functional teams to streamline operational workflows and oversaw the strategic execution of business development alongside technical delivery.",
    image: "/experience/homessy.png"
  },
  {
    id: 3,
    title: "Web Developer Intern",
    company: "BetweenBreaks",
    date: "2025",
    description: "Contributed to core software projects, gaining hands-on experience in agile development, code optimization, and modern software architectures.",
    image: "/experience/bb.webp"
  },
  {
    id: 4,
    title: "Co-founder & CTO",
    company: "Clientura",
    date: "2025 - Present",
    description: "Architecting robust digital solutions, driving the technical vision, and managing end-to-end product development for a fast-growing digital marketing agency.",
    image: "/experience/clientura.png"
  }
];

export const Experience = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  // Custom Cursor Floating Image State
  const [hoveredExp, setHoveredExp] = useState<{ id: number, image: string } | null>(null);
  
  const cursorX = useMotionValue(-500);
  const cursorY = useMotionValue(-500);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Offset by half of the 300px image to naturally center it on the mouse
      cursorX.set(e.clientX - 150);
      cursorY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-black">
      
      {/* Global Custom Cursor (Visible on Desktop) */}
      <motion.div
        className="fixed top-0 left-0 w-[300px] aspect-4/3 rounded-[2rem] overflow-hidden pointer-events-none z-999 shadow-[0_40px_80px_rgba(0,0,0,0.8),0_0_50px_rgba(59,130,246,0.3)] border border-white/20 hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: hoveredExp ? 1 : 0, 
          scale: hoveredExp ? 1 : 0.8 
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {hoveredExp && (
          <div className="w-full h-full bg-black relative">
            <img 
              src={hoveredExp.image} 
              alt="Experience Preview" 
              className="w-full h-full object-cover" 
            />
          </div>
        )}
      </motion.div>

      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Section Title */}
        <div className="absolute top-8 md:top-16 left-0 w-full z-20 pointer-events-none px-6 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">Experience</h2>
              <p className="text-gray-400 text-base md:text-lg">My journey and roles over the years</p>
            </motion.div>
          </div>
        </div>

        {/* Horizontal Scrolling Track - Modified alignment to give space from title */}
        <motion.div style={{ x }} className="flex w-[400vw] items-center pt-28 md:pt-12">
          
          {/* Connecting Line Backdrop */}
          <div className="absolute left-0 tracking-widest right-0 top-1/2 h-[2px] bg-linear-to-r from-transparent via-blue-900/50 to-transparent -translate-y-1/2 z-0 hidden md:block" />

          {experiences.map((exp) => (
            <div key={exp.id} className="w-screen flex items-center justify-center p-6 sm:p-20 relative z-10 shrink-0">
              
              <motion.div 
                onMouseEnter={() => setHoveredExp({ id: exp.id, image: exp.image })}
                onMouseLeave={() => setHoveredExp(null)}
                // Responsive spacing and padding adjustments, decreased max width
                className="relative flex flex-col items-center bg-gray-900/30 backdrop-blur-xl px-5 py-10 md:px-10 md:py-14 rounded-[2.5rem] border border-gray-800/60 shadow-2xl max-w-lg md:max-w-xl w-full group transition-all duration-500 hover:border-blue-500/30 hover:bg-gray-900/40"
              >
                {/* Timeline Dot */}
                <div className="absolute -top-6 md:top-1/2 md:-left-5 md:-translate-y-1/2 md:translate-x-0 left-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black border border-gray-800 flex items-center justify-center shadow-xl z-20 transition-transform duration-500 group-hover:scale-125 group-hover:border-blue-500/50">
                    <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
                </div>

                <div className="flex flex-col items-center text-center w-full relative z-10 transition-transform duration-500 ease-out group-hover:-translate-y-2">
                  
                  {/* Inline Image for Mobile (hidden on Desktop) */}
                  <div className="md:hidden w-28 h-28 mb-6 rounded-full overflow-hidden border border-gray-800 shadow-xl opacity-100 bg-black shrink-0">
                     <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold text-xs md:text-sm mb-5 tracking-widest transition-colors duration-500 group-hover:bg-blue-500/20 group-hover:border-blue-400/40">
                    {exp.date}
                  </div>
                  
                  {/* Title and Gap Adjustment */}
                  <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-3 tracking-tight drop-shadow-lg">{exp.title}</h3>
                  <h4 className="text-lg md:text-xl text-gray-400 font-bold mb-5 tracking-widest uppercase transition-colors duration-500 group-hover:text-blue-300">{exp.company}</h4>
                  
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg font-medium mt-1">
                    {exp.description}
                  </p>

                </div>

              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
