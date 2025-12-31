
import { motion } from 'framer-motion';
import { EducationCard } from './EducationCard';

const education = [
  {
    school: "Z.P.High School",
    degree: "10th Standard",
    date: "Apr 2020 - Apr 2021",
    grade: "93.5%",
    description: "Completed my class 10 education in Z.P.High School at Madapam, Srikakulam.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRxHnPbXM3eokyQCG6enIwGBGKN8UqUehPfQ&s",
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
  }
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="min-h-screen py-20 px-4 sm:px-8 relative">
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
        <div className="hidden md:block absolute left-1/2 top-[20%] bottom-[20%] w-px bg-gradient-to-b from-transparent via-[#915EFF] to-transparent" />

        <div className="space-y-12">
          {education.map((edu) => (
            <EducationCard key={edu.school + edu.date} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
};