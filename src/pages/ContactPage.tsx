import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { ContactForm } from '../components/Contact/ContactForm';
import { RotatingGlobe } from '../components/Contact/RotatingGlobe';
import { Footer } from '../components/layout/Footer';
import { SEOHead } from '../components/Shared/SEOHead';

export const ContactPage = () => {
  const contactSchemas = [
    // BreadcrumbList
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aswinsai.tech" },
        { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://aswinsai.tech/contact" }
      ]
    },
    // ContactPage schema
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Aswinsai Palakonda",
      "description": "Get in touch with Aswinsai Palakonda for freelance projects, collaborations, full-time opportunities, and technical consulting.",
      "url": "https://aswinsai.tech/contact",
      "isPartOf": { "@id": "https://aswinsai.tech/#website" },
      "mainEntity": {
        "@type": "Person",
        "@id": "https://aswinsai.tech/#person",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "aswinsaipalakonda@gmail.com",
          "contactType": "customer service",
          "availableLanguage": ["English", "Hindi", "Telugu"]
        }
      },
      "inLanguage": "en-US"
    }
  ];

  return (
    <div className="relative z-10 min-h-screen pt-20">
      <SEOHead
        title="Contact Aswinsai Palakonda | Hire Full Stack Developer"
        description="Get in touch with Aswinsai Palakonda — available for freelance projects, full-time opportunities, technical consulting, and web development collaborations. React, Next.js, TypeScript expert."
        canonical="https://aswinsai.tech/contact"
        keywords="Contact Aswinsai, Hire Full Stack Developer, Freelance Web Developer India, React Developer for hire, Web Development Services, Technical Consulting"
        schema={contactSchemas}
      />
      <section className="py-20 px-4 sm:px-8" aria-label="Contact Form">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="h-40 w-40 mx-auto mb-8" aria-hidden="true">
              <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <RotatingGlobe />
              </Canvas>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Contact Me</h1>
            <p className="text-gray-400">
              Feel free to reach out to me for any questions, freelance opportunities, or collaborations!
            </p>
          </motion.div>

          <ContactForm />
          <Footer />
        </div>
      </section>
    </div>
  );
};
