
import { Canvas } from '@react-three/fiber';
import { ContactForm } from './ContactForm';
import { RotatingGlobe } from './RotatingGlobe';
import { Footer } from './Footer';

export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="h-40 w-40 mx-auto mb-8">
            <Canvas>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <RotatingGlobe />
            </Canvas>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Contact</h2>
          <p className="text-gray-400">
            Feel free to reach out to me for any questions or opportunities!
          </p>
        </div>

        <ContactForm />
        <Footer />
      </div>
    </section>
  );
};