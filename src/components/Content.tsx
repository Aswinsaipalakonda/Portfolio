import React from 'react';
import { About } from './About';
import { Skills } from './Skills/Skills';
import { Languages } from './Languages';
import { Projects } from './Projects/Projects';
import { Certificates } from './Certificates/Certificates';
import { Education } from './Education/Education';
import { Contact } from './Contact/Contact';

export const Content = () => {
  return (
    <main className="relative z-10">
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