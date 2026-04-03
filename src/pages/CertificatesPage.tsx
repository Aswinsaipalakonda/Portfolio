import { useState } from 'react';
import { motion } from 'framer-motion';
import { certificatesData } from '../data/certificates';
import { CertificateCard } from '../components/Certificates/CertificateCard';
import { CertificateModal } from '../components/Certificates/CertificateModal';
import { SEOHead } from '../components/SEOHead';
import { Footer } from '../components/Contact/Footer';
import { CallToAction } from '../components/Shared/CallToAction';

export const CertificatesPage = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aswinsai.tech" },
      { "@type": "ListItem", "position": 2, "name": "Certificates", "item": "https://aswinsai.tech/certificates" }
    ]
  };

  return (
    <div className="relative z-10 min-h-screen pt-20 flex flex-col justify-between">
      <SEOHead
        title="Valid Certificates | Aswinsai Palakonda"
        description="A complete gallery showcasing Aswinsai Palakonda's academic credentials, professional certifications, and technical achievements."
        canonical="https://aswinsai.tech/certificates"
        schema={breadcrumbSchema}
      />
      
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto w-full flex-grow:1">
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
            A comprehensive overview of my professional certifications, continuous learning journeys, and technical upskilling achievements.
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
