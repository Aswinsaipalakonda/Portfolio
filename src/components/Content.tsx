
import { About } from './About';
import { Skills } from './Skills/Skills';
import { Languages } from './Languages';
import { Projects } from './Projects/Projects';
import { Certificates } from './Certificates/Certificates';
import { Education } from './Education/Education';
import { Contact } from './Contact/Contact';

export const Content = () => {
  return (
    <main className="relative z-10 w-full max-w-full overflow-x-hidden">
      <About />
      <Skills />
      <Languages />
      <Projects />
      <Certificates />
      <Education />
      <Contact />
    </main>
  );
};