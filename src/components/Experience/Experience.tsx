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
  },
  {
    id: 5,
    title: "Paytm Campus Ambassador",
    company: "Paytm",
    date: "2026 - Present",
    description: "Acted as a liaison between Paytm and the campus community, driving brand awareness and user engagement through strategic marketing initiatives and events.",
    image: "/experience/paytm_logo.png"
  },
];

export const Experience = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Simplified transformation for 5 cards:
  // We complete the move to the 5th card by the time the sticky duration ends.
  const x = useTransform(scrollYProgress, [0, 0.8], ["0%", "-80%"]);

  // Custom Cursor Floating Image (Desktop Only)
  const [hoveredExp, setHoveredExp] = useState<{ id: number, image: string } | null>(null);
  
  const cursorX = useMotionValue(-500);
  const cursorY = useMotionValue(-500);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 350 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 150);
      cursorY.set(e.clientY - 150);

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const rX = (e.clientY - centerY) / 20;
      const rY = (e.clientX - centerX) / -20;
      
      rotateX.set(rX);
      rotateY.set(rY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY, rotateX, rotateY]);

  return (
    <section id="experience" ref={targetRef} className="relative h-[500vh] bg-black">
      
      {/* Custom Cursor Preview */}
      <motion.div
        className="fixed top-0 left-0 w-[300px] aspect-4/3 rounded-3xl overflow-hidden pointer-events-none z-999 shadow-2xl border border-white/10 hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          perspective: 1000,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: hoveredExp ? 1 : 0, 
          scale: hoveredExp ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      >
        {hoveredExp && (
          <div className="w-full h-full bg-black relative">
            <div className="absolute inset-0 bg-blue-500/10 z-10" />
            <img 
              src={hoveredExp.image} 
              alt="Preview" 
              className="w-full h-full object-cover" 
            />
          </div>
        )}
      </motion.div>

      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Simple Section Title */}
        <div className="max-w-7xl mx-auto w-full px-6 flex flex-col gap-2 z-20 pointer-events-none absolute top-12 md:top-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Experience</h2>
            <p className="text-gray-400 text-sm md:text-lg">My professional journey so far</p>
          </motion.div>
        </div>

        {/* Horizontal Track */}
        <motion.div style={{ x }} className="flex w-[500vw] items-center pt-28 md:pt-12">
          
          {/* Subtle Connecting Line */}
          <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white/5 -translate-y-1/2 z-0 hidden md:block" />

          {experiences.map((exp) => (
            <div key={exp.id} className="w-screen flex items-center justify-center p-6 md:p-20 shrink-0 relative z-10">
              
              <motion.div 
                onMouseEnter={() => setHoveredExp({ id: exp.id, image: exp.image })}
                onMouseLeave={() => setHoveredExp(null)}
                className="relative flex flex-col items-center bg-gray-900/40 backdrop-blur-xl px-8 py-10 md:px-12 md:py-16 rounded-[2.5rem] border border-gray-800 shadow-2xl max-w-lg md:max-w-2xl w-full group transition-all duration-300 hover:border-blue-500/30"
              >
                {/* Timeline Dot */}
                <div className="absolute -top-5 md:top-1/2 md:-left-5 md:-translate-y-1/2 md:translate-x-0 left-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black border border-gray-800 flex items-center justify-center shadow-xl z-20 group-hover:border-blue-500/50 transition-colors">
                    <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
                </div>

                <div className="flex flex-col items-center text-center w-full relative z-10">
                  
                  {/* Mobile Preview (Inline) - Moved to top for attraction */}
                  <div className="md:hidden w-24 h-24 mb-6 rounded-2xl overflow-hidden border border-gray-800 shadow-xl bg-black">
                     <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
                  </div>

                  {/* Date Badge */}
                  <div className="px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-[10px] md:text-xs mb-4 tracking-widest uppercase">
                    {exp.date}
                  </div>
                  
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">{exp.title}</h3>
                  <h4 className="text-xs md:text-lg text-gray-400 font-bold mb-6 tracking-widest uppercase">{exp.company}</h4>
                  
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg">
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
