import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { EducationCard } from './EducationCard';

const education = [
  {
    school: "MVGR College of Engineering",
    degree: "B.Tech",
    date: "2023 - 2027",
    grade: "82%",
    description: "Currently pursuing my B.Tech in Computer Science and Engineering at MVGR College of Engineering, where I am specializing in IOT, Cyber Security and Blockchain Technology.",
    logo: "https://mansasedu.org/images/mansas.jpg",
    isLeft: true
  },
  {
    school: "Sri Chaitanya College",
    degree: "Intermediate",
    date: "Apr 2022 - Apr 2023",
    grade: "93.2%",
    description: "Completed my class 12 education in Sri Chaitanya College at Srikakulam, where I studied Maths, Physics, Chemistry as the primary subjects.",
    logo: "https://www.pngkit.com/png/full/248-2487068_a-few-words-about-sri-chaitanya-sri-chaitanya.png",
    isLeft: false
  },
  {
    school: "Z.P.High School",
    degree: "10th Standard",
    date: "Apr 2020 - Apr 2021",
    grade: "93.5%",
    description: "Completed my class 10 education in Z.P.High School at Madapam, Srikakulam.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRxHnPbXM3eokyQCG6enIwGBGKN8UqUehPfQ&s",
    isLeft: true
  },
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="min-h-screen py-20 px-4 sm:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <p className="text-gray-400">
            My education has been a journey of self-discovery and growth. My educational details are as follows.
          </p>
        </motion.div>

        {/* Vertical line for web view */}
        <div className="hidden md:block absolute left-1/2 top-[10%] bottom-[40%] w-px bg-linear-to-b from-transparent via-[#915EFF] to-transparent" />

        <div className="space-y-12 mb-24 text-white">
          {education.map((edu) => (
            <EducationCard key={edu.school + edu.date} {...edu} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-20 relative z-10"
        >
          <div className="bg-[#151030]/50 backdrop-blur-sm border border-[#915EFF]/20 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to start your next project?
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed font-medium">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Let's build something amazing together!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-linear-to-r from-[#915EFF] to-purple-600 text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(145,94,255,0.5)] transition-all transform hover:scale-105 group"
            >
              Get In Touch
              <div className="bg-white rounded-full p-1 text-[#915EFF] group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
