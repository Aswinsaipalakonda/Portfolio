import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";

const testimonials = [
  {
    id: 1,
    name: "Rainbucks",
    role: "Digital Course Marketplace",
    content: "The digital marketplace Aswinsai built for us is seamless. The automated delivery system and intuitive dashboards have transformed how we handle our digital courses. What surprised us most was how quickly our team adapted to it. Minimal learning curve, excellent technical architecture, and powerful features make it a must-have for our growing business.",
    image: "/assets/rainbuck.jpeg",
    platform: "E-Commerce",
  },
  {
    id: 2,
    name: "Clientura",
    role: "Digital Marketing Agency",
    content: "As our CTO, Aswinsai's technical vision for Clientura has been instrumental. He delivered a robust onboarding system that our clients love. Our productivity has nearly doubled since onboarding the custom dashboards. He removed repetitive tasks, allowing our team to focus on building instead of managing operations.",
    image: "/assets/clientur.jpeg",
    platform: "Agency",
  },
  {
    id: 3,
    name: "Infinity Globals",
    role: "Abroad Consultancy",
    content: "Our consultancy platform is now a powerhouse for student engagement thanks to Aswinsai's work on dynamic course listings and lead management. We evaluated multiple solutions, but this custom build stood out immediately. It's fast, scalable, and thoughtfully designed for growing teams that need stability without added complexity.",
    image: "/assets/infinit.jpeg",
    platform: "Education",
  },
  {
    id: 4,
    name: "Homessy Platform",
    role: "Multi-Service Delivery",
    content: "The scalability of the Homessy platform exceeded our expectations. The integration of grocery and home services is flawless. The technical architecture handles concurrent users and service bookings effortlessly. It's rare to find developers who understand both high-level business goals and complex system integration so well.",
    image: "/assets/homess.jpeg",
    platform: "SaaS",
  }
];

const firstRow = [...testimonials, ...testimonials];
const secondRow = [...testimonials, ...testimonials].reverse();
const thirdRow = [...testimonials, ...testimonials];

const TestimonialCard = ({
  name,
  role,
  content,
  image,
  platform,
}: {
  name: string;
  role: string;
  content: string;
  image: string;
  platform: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-[90vw] max-w-[400px] md:w-full md:max-w-none cursor-pointer overflow-hidden rounded-xl border p-6",
        "border-zinc-50/10 bg-muted/10 hover:bg-muted/20 backdrop-blur-md transition-colors",
        "bg-white/5 border-white/10 text-white"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-full object-cover w-12 h-12 border border-[#915EFF]/30 shadow-sm" width="48" height="48" alt={name} src={image} />
        <div className="flex flex-col flex-1">
          <figcaption className="text-sm font-semibold tracking-tight text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-400">{role}</p>
        </div>
        
        {/* Placeholder for platform icon badge */}
        <div className="flex h-6 w-auto items-center justify-center rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold tracking-widest text-[#915EFF] uppercase shadow-sm">
           {platform}
        </div>
      </div>
      
      <div className="mt-4 border-t border-white/10 pt-4">
        <blockquote className="text-sm leading-6 tracking-wide text-gray-300">
           "{content}"
        </blockquote>
      </div>
    </figure>
  );
};

export const AboutTestimonials = () => {
  return (
    <section className="py-24 px-4 sm:px-8 w-full">
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-gray-300 tracking-wider uppercase backdrop-blur-md">
          Testimonials
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Real <span className="text-[#915EFF]">Stories.</span></h2>
        <p className="text-gray-400 text-sm md:text-base">
          Real experiences, genuine feedback—discover how custom technical solutions and platforms have impacted these growing businesses.
        </p>
      </div>

      <div className="relative flex h-[400px] md:h-[500px] w-full max-w-6xl mx-auto flex-col items-center justify-center overflow-hidden bg-transparent md:flex-row [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
        
        {/* First Column - Scrolls Up */}
        <Marquee pauseOnHover vertical className="[--duration:35s]" repeat={4}>
          {firstRow.map((review, i) => (
            <TestimonialCard key={`first-${i}`} {...review} />
          ))}
        </Marquee>

        {/* Second Column - Scrolls Down (hidden on mobile, shown on md and above) */}
        <Marquee reverse pauseOnHover vertical className="hidden md:flex [--duration:45s]" repeat={4}>
          {secondRow.map((review, i) => (
            <TestimonialCard key={`second-${i}`} {...review} />
          ))}
        </Marquee>

        {/* Third Column - Scrolls Up (hidden on smaller screens) */}
        <Marquee pauseOnHover vertical className="hidden lg:flex [--duration:40s]" repeat={4}>
          {thirdRow.map((review, i) => (
            <TestimonialCard key={`third-${i}`} {...review} />
          ))}
        </Marquee>
        
        {/* Left/Right fading edges are not strictly necessary for vertical marquee, but top/bottom is handled via mask-image */}
      </div>
    </section>
  );
};
