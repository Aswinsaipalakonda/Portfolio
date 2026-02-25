import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  demoLink?: string;
  githubLink?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  date,
  demoLink,
  githubLink,
}) => {
  return (
    <div
      className="bg-[#151030] rounded-3xl overflow-hidden h-full w-full border border-white/10 shadow-2xl flex flex-col md:flex-row-reverse group/card"
    >
      <div className="relative group shrink-0 w-full md:w-[60%] h-1/2 md:h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6 md:p-8 lg:p-12 flex-1 flex flex-col justify-center">
        <p className="text-sm text-[#915EFF] font-medium mb-2">{date}</p>
        <h3 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4">{title}</h3>
        <p className="text-gray-400 text-sm md:text-base line-clamp-4 md:line-clamp-6 leading-relaxed mb-6 md:mb-8">{description}</p>
        <div className="flex items-center gap-4 mt-auto md:mt-0">
          {demoLink && demoLink !== "#" && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 bg-white/5 border border-white/10 rounded-full hover:bg-[#915EFF] hover:border-[#915EFF] transition-all text-gray-300 hover:text-white"
              title="Live Demo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          {githubLink && githubLink !== "#" && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 bg-white/5 border border-white/10 rounded-full hover:bg-[#915EFF] hover:border-[#915EFF] transition-all text-gray-300 hover:text-white"
              title="View Source on GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
