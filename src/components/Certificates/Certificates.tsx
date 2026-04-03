import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CertificateCard } from './CertificateCard';
import { CertificateModal } from './CertificateModal';

const certificates = [
  {
    title: "IEEE Sustainable Solutions for Humanity",
    issuer: "IEEE Region 10",
    date: "Sept 2024",
    imageUrl: "/assets/images/IEE.jpeg"
  },
  {
    title: "E-Summit25 Ideastrom",
    issuer: "IIT Roorkee",
    date: "Mar 2025",
    imageUrl: "/assets/images/Ideastro.jpeg"
  },
  {
    title: "E-Summit25 Productathon",
    issuer: "IIT Roorkee",
    date: "Mar 2025",
    imageUrl: "/assets/images/Productatho.jpeg"
  },
  {
    title: "Start-up Expo",
    issuer: "Codeiam Club AU",
    date: "Mar 2025",
    imageUrl: "/assets/images/A.jpeg"
  },
  {
    title: "Internship in Netmaxin",
    issuer: "Netmaxin",
    date: "Feb 2024",
    imageUrl: "/assets/images/Netmaxi.jpeg"
  },
  {
    title: "Introduction to Marketing",
    issuer: "University of Edinburgh",
    date: "Nov 2024",
    imageUrl: "/assets/images/IntroToDm_page-0001.jpg"
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
    imageUrl: "/assets/images/DMStrategy_page-0001.jpg"
  },
  {
    title: "GDG Dev Fest",
    issuer: "GDG",
    date: "2024",
    imageUrl: "/assets/images/GDGDevFest.jpg"
  },
  {
    title: "ImperialX ALFM003",
    issuer: "edX",
    date: "2024",
    imageUrl: "/assets/images/ImperialXALFM003Certificate_edX_page-0001.jpg"
  },
  {
    title: "Introduction to MCP",
    issuer: "Microsoft",
    date: "2024",
    imageUrl: "/assets/images/Intro-MCP.jpg"
  },
  {
    title: "Advanced MCP",
    issuer: "Microsoft",
    date: "2024",
    imageUrl: "/assets/images/MCP-Advance.jpeg"
  },
  {
    title: "Cybersecurity Analyst",
    issuer: "Cyberthrey",
    date: "2024",
    imageUrl: "/assets/images/Cyberthrey.jpeg"
  },
  {
    title: "Salesforce Developer",
    issuer: "Salesforce",
    date: "2024",
    imageUrl: "/assets/images/Salesforc.jpeg"
  },
  {
    title: "Accenture Certification",
    issuer: "Accenture",
    date: "2024",
    imageUrl: "/assets/images/accentur.jpeg"
  },
  {
    title: "Cisco Networking",
    issuer: "Cisco",
    date: "2024",
    imageUrl: "/assets/images/cisco.jpg"
  },
  {
    title: "Data Analytics",
    issuer: "Data Analytics",
    date: "2024",
    imageUrl: "/assets/images/data_analys.jpeg"
  },
  {
    title: "Data Science Hackathon",
    issuer: "Hackathon",
    date: "2024",
    imageUrl: "/assets/images/ds_hac.jpeg"
  },
  {
    title: "FlutterFlow Certification",
    issuer: "FlutterFlow",
    date: "2024",
    imageUrl: "/assets/images/flutterflow.jpg"
  },
  {
    title: "NASSCOM Certification",
    issuer: "NASSCOM",
    date: "2024",
    imageUrl: "/assets/images/nassco.jpeg"
  },
  {
    title: "AI for Business",
    issuer: "AI",
    date: "2024",
    imageUrl: "/assets/images/Ai_for_cb.jpeg"
  },
  {
    title: "Quantum Computing",
    issuer: "Quantum",
    date: "2024",
    imageUrl: "/assets/images/Quantu.jpeg"
  },
  {
    title: "Outskill Certification",
    issuer: "Outskill",
    date: "2024",
    imageUrl: "/assets/images/outskil.jpeg"
  },
  {
    title: "Sankalp Hackathon",
    issuer: "Sankalp",
    date: "2024",
    imageUrl: "/assets/images/sankal.jpeg"
  },
  {
    title: "Swayam NPTEL",
    issuer: "Swayam",
    date: "2024",
    imageUrl: "/assets/images/swaya.jpeg"
  },
  {
    title: "TCS Certification",
    issuer: "TCS",
    date: "2024",
    imageUrl: "/assets/images/tc.jpeg"
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
          altText={certificates.find(c => c.imageUrl === selectedCertificate)?.title || 'Certificate'}
        />
      </div>
    </section>
  );
};