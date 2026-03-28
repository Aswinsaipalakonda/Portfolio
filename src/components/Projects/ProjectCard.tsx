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
  return (
    <div className="bg-[#151030] rounded-3xl overflow-hidden h-full w-full border border-white/10 shadow-2xl flex flex-col md:flex-row-reverse group/card transition-all duration-500 hover:shadow-[#915EFF]/10">
      <div className="relative group shrink-0 w-full md:w-[60%] h-1/2 md:h-full overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-[#151030] via-transparent to-transparent z-10 opacity-60 pointer-events-none md:hidden" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-6 md:p-8 lg:p-12 flex-1 flex flex-col justify-center relative overflow-hidden">
        {/* Subtle Decorative Gradient */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#915EFF]/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <p className="text-sm text-[#915EFF] font-bold mb-2 tracking-widest">{date}</p>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-tight group-hover/card:text-[#915EFF] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-400 text-sm md:text-base line-clamp-4 md:line-clamp-6 leading-relaxed mb-8 font-medium">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-auto">
            {demoLink && demoLink !== "#" && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#915EFF] hover:border-[#915EFF] transition-all duration-300 text-gray-300 hover:text-white shrink-0 group/btn shadow-xl"
                title="View Live Project"
              >
                <ExternalLink className="w-5 h-5 transition-transform group-hover/btn:scale-110" />
              </a>
            )}
            
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => {
                const config = techConfig[tech] || { color: "#FFFFFF" };
                return (
                  <span 
                    key={tech} 
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10px] md:text-xs font-bold text-white/90 border border-white/5 bg-white/5 transition-all duration-300 hover:border-[#915EFF]/50 hover:bg-white/10 hover:-translate-y-1 shadow-lg backdrop-blur-sm"
                  >
                    {config.icon ? (
                      <img 
                        src={`https://cdn.simpleicons.org/${config.icon}/${config.color.replace('#', '')}`} 
                        alt={tech}
                        className="w-3.5 h-3.5 object-contain"
                      />
                    ) : (
                      <Code2 className="w-3.5 h-3.5 text-[#915EFF]" />
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
