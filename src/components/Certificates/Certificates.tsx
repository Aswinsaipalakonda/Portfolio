import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CertificateCard } from './CertificateCard';
import { CertificateModal } from './CertificateModal';

const certificates = [
  {
    title: "IEEE Sustainable Solutions for Humanity",
    issuer: "IEEE Region 10",
    date: "Sept 2024",
    imageUrl: "/assets/images/IEEE.png"
  },
  {
    title: "E-Summit25 Ideastrom",
    issuer: "IIT Roorkee",
    date: "Mar 2025",
    imageUrl: "/assets/images/Ideastrom.png"
  },
  {
    title: "E-Summit25 Productathon",
    issuer: "IIT Roorkee",
    date: "Mar 2025",
    imageUrl: "/assets/images/Productathon.png"
  },
  {
    title: "Start-up Expo ",
    issuer: "Codeiam Club AU",
    date: "Mar 2025",
    imageUrl: "/assets/images/Au.png"
  },
  {
    title: "Internship in Netmaxin",
    issuer: "Netmaxin",
    date: "Feb 2024",
    imageUrl: "/assets/images/Netmaxin.png"
  },
  {
    title: "Introduction to Marketing",
    issuer: "University of Edinburgh",
    date: "Nov 2024",
    imageUrl: "/assets/images/Intro To Dm_page-0001.jpg"
  },
  {
    title: "Python Programming",
    issuer: "Udemy",
    date: "Dec 2024",
    imageUrl: "/assets/images/Python_Udemy.jpg"
  },
  {
    title: "Google Developer Group",
    issuer: "GDG",
    date: "Dec 2024",
    imageUrl: "/assets/images/GDG.jpg"
  },
  {
    title: "Digital Marketing Strategy",
    issuer: "University of Edinburgh",
    date: "Nov 2024",
    imageUrl: "/assets/images/DM Strategy_page-0001.jpg"
  }
];

export const Certificates: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  return (
    <section id="certificates" className="min-h-screen py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Certificates</h2>
          <p className="text-gray-400">
            Professional certifications and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <CertificateCard
              key={cert.title}
              {...cert}
              onClick={() => setSelectedCertificate(cert.imageUrl)}
            />
          ))}
        </div>

        <CertificateModal
          isOpen={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
          imageUrl={selectedCertificate || ''}
        />
      </div>
    </section>
  );
};