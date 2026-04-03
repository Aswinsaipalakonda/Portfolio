import { useState } from 'react';
import { motion } from 'framer-motion';
import { certificatesData } from '../data/certificates';
import { CertificateCard } from '../components/Certificates/CertificateCard';
import { CertificateModal } from '../components/Certificates/CertificateModal';
import { SEOHead } from '../components/Shared/SEOHead';
import { Footer } from '../components/layout/Footer';
import { CallToAction } from '../components/Shared/CallToAction';

export const CertificatesPage = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const certificateSchemas = [
    // BreadcrumbList
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aswinsai.tech" },
        { "@type": "ListItem", "position": 2, "name": "Certificates", "item": "https://aswinsai.tech/certificates" }
      ]
    },
    // CollectionPage for certificates (triggers rich results)
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Professional Certificates & Credentials — Aswinsai Palakonda",
      "description": "A comprehensive gallery of professional certifications, academic credentials, hackathon achievements, and technical certificates earned by Aswinsai Palakonda.",
      "url": "https://aswinsai.tech/certificates",
      "isPartOf": { "@id": "https://aswinsai.tech/#website" },
      "about": { "@id": "https://aswinsai.tech/#person" },
      "inLanguage": "en-US",
      "numberOfItems": certificatesData.length
    },
    // ItemList of all certificates (rich result)
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Aswinsai Palakonda Certificates",
      "numberOfItems": certificatesData.length,
      "itemListElement": certificatesData.map((cert, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "EducationalOccupationalCredential",
          "name": cert.title,
          "credentialCategory": "Certificate",
          "recognizedBy": {
            "@type": "Organization",
            "name": cert.issuer
          },
          "dateCreated": cert.date,
          "image": `https://aswinsai.tech${cert.imageUrl}`
        }
      }))
    }
  ];

  return (
    <div className="relative z-10 min-h-screen pt-20 flex flex-col justify-between">
      <SEOHead
        title="Certificates & Credentials | Aswinsai Palakonda — Professional Achievements"
        description="Browse all professional certifications, academic credentials, hackathon achievements, and technical certificates of Aswinsai Palakonda — from IEEE, IIT Roorkee, Anthropic, Cisco, Salesforce, TCS, and more."
        canonical="https://aswinsai.tech/certificates"
        keywords="Aswinsai Palakonda Certificates, Developer Certifications, IEEE Certificate, IIT Roorkee Hackathon, MCP Anthropic, Cisco Networking, Salesforce Developer, Professional Credentials, Tech Certificates India"
        schema={certificateSchemas}
      />
      
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto w-full flex-grow:1" aria-label="All Certificates">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            All <span className="text-[#915EFF]">Certificates</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my professional certifications from leading institutions like IEEE, IIT Roorkee, Anthropic, Cisco, and Salesforce — showcasing continuous learning and technical upskilling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificatesData.map((cert, index) => (
            <motion.div 
              key={cert.title + index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <CertificateCard
                {...cert}
                onClick={() => setSelectedCertificate(cert.imageUrl)}
              />
            </motion.div>
          ))}
        </div>

        <CertificateModal
          isOpen={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
          imageUrl={selectedCertificate || ''}
          altText={certificatesData.find(c => c.imageUrl === selectedCertificate)?.title || 'Certificate'}
        />
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
};
