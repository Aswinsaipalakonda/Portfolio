import { useState } from "react";
import { ExternalLink, Code2 } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  demoLink?: string;
  techStack: string[];
}

const techConfig: Record<string, { icon?: string; color: string }> = {
  "Next.js": { icon: "nextdotjs", color: "#FFFFFF" },
  "React": { icon: "react", color: "#61DAFB" },
  "Tailwind CSS": { icon: "tailwindcss", color: "#06B6D4" },
  "Supabase": { icon: "supabase", color: "#3ECF8E" },
  "Stripe": { icon: "stripe", color: "#008CDD" },
  "Framer Motion": { icon: "framer", color: "#00AAAA" },
  "TypeScript": { icon: "typescript", color: "#3178C6" },
  "Prisma": { icon: "prisma", color: "#5A67D8" },
  "PHP": { icon: "php", color: "#777BB4" },
  "MySQL": { icon: "mysql", color: "#4479A1" },
  "Node.js": { icon: "nodedotjs", color: "#339933" },
  "MongoDB": { icon: "mongodb", color: "#47A248" },
  "Express": { icon: "express", color: "#FFFFFF" },
  "WordPress": { icon: "wordpress", color: "#21759B" },
  "Elementor": { icon: "elementor", color: "#D11B55" },
  "SEO": { icon: "google", color: "#4285F4" },
  "LeadGen": { icon: "salesforce", color: "#00A1E0" },
  "Motion": { icon: "framer", color: "#00AAAA" },
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  date,
  demoLink,
  techStack,
}) => {
  const [isTapped, setIsTapped] = useState(false);

  return (
    <div 
      className="bg-[#151030] rounded-3xl overflow-hidden h-fit w-full border border-white/10 shadow-2xl flex flex-col md:flex-row-reverse group/card transition-all duration-500 hover:shadow-[#915EFF]/10 relative"
      onClick={() => setIsTapped(!isTapped)}
    >
      {/* Mobile-Only Tap Overlay Link on Image */}
      <div className="relative group shrink-0 w-full md:w-[60%] h-[240px] md:h-[480px] overflow-hidden bg-black/40">
        <div className="absolute inset-0 bg-linear-to-t from-[#151030] via-transparent to-transparent z-10 opacity-60 pointer-events-none md:hidden" />
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Mobile Tap-to-Reveal Link Overlay */}
        <div 
          className={`absolute inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-[2px] transition-all duration-300 md:hidden ${
            isTapped ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {demoLink && demoLink !== "#" && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-3 px-6 py-3 bg-[#915EFF] text-white rounded-full font-bold shadow-2xl animate-in zoom-in-75 duration-300"
            >
              <ExternalLink size={18} />
              <span className="text-sm">Visit Project</span>
            </a>
          )}
        </div>
        
        {/* Hint to tap (Visible when NOT tapped on mobile) */}
        {!isTapped && demoLink && demoLink !== "#" && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 md:hidden bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] text-gray-300 font-medium animate-pulse">
            Tap to view link
          </div>
        )}
      </div>

      <div className="p-6 md:p-8 lg:p-12 flex-1 flex flex-col justify-center relative overflow-hidden h-fit self-center">
        {/* Subtle Decorative Gradient */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#915EFF]/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col">
          <p className="text-[10px] text-[#915EFF] font-bold mb-1 tracking-widest uppercase">{date}</p>
          <h1 className="text-xl md:text-3xl font-extrabold text-white mb-2 leading-tight group-hover/card:text-[#915EFF] transition-colors duration-300">
            {title}
          </h1>
          <p className="text-gray-400 text-xs md:text-base line-clamp-2 md:line-clamp-3 mb-4 leading-relaxed font-medium">
            {description}
          </p>
          
          <div className="flex items-center gap-2.5 mt-4 sm:mt-6 pt-4 flex-wrap whitespace-nowrap">
            {/* Show link at bottom only on desktop */}
            {demoLink && demoLink !== "#" && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hidden md:flex items-center justify-center w-11 h-11 bg-white/5 border border-white/10 rounded-full hover:bg-[#915EFF] hover:border-[#915EFF] transition-all duration-300 text-gray-300 hover:text-white shrink-0 group/btn shadow-xl active:scale-90 backdrop-blur-sm"
                title="View Live Project"
              >
                <ExternalLink className="w-5 h-5 transition-transform group-hover/btn:scale-110" />
              </a>
            )}
            
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => {
                const config = techConfig[tech] || { color: "#FFFFFF" };
                return (
                  <span 
                    key={tech} 
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-[9px] md:text-[11px] font-bold text-white/90 border border-white/10 bg-white/5 transition-all duration-300 hover:border-[#915EFF]/50 hover:bg-white/10 shadow-lg backdrop-blur-sm"
                  >
                    {config.icon ? (
                      <img 
                        src={`https://cdn.simpleicons.org/${config.icon}/${config.color.replace('#', '')}`} 
                        alt={tech}
                        className="w-3 h-3 object-contain"
                      />
                    ) : (
                      <Code2 className="w-3 h-3 text-[#915EFF]" />
                    )}
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
