import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { ContactForm } from '../components/Contact/ContactForm';
import { RotatingGlobe } from '../components/Contact/RotatingGlobe';
import { Footer } from '../components/Contact/Footer';

export const ContactPage = () => {
  return (
    <div className="relative z-10 min-h-screen pt-20">
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="h-40 w-40 mx-auto mb-8">
              <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <RotatingGlobe />
              </Canvas>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
            <p className="text-gray-400">
              Feel free to reach out to me for any questions or opportunities!
            </p>
          </motion.div>

          <ContactForm />
          <Footer />
        </div>
      </section>
    </div>
  );
};
