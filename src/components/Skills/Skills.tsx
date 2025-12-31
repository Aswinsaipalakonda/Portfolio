
import { motion } from 'framer-motion';
import { SkillCard } from './SkillCard';
import { SoftSkills } from './SoftSkills';

const technicalSkills = {
  Frontend: [
    { name: 'React.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
    { name: 'HTML', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
    { name: 'Bootstrap', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png' },
    { name: 'Three.js', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUyPLMCrdBvL7byu5KkMnOssbQigrkiRxZw&s' },
    { name: 'Flutter', icon: 'https://storage.googleapis.com/cms-storage-bucket/4fd0db61df0567c0f352.png' }
  ],
  Backend: [
    { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
    { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg' },
    { name: 'PHP', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg' },
    { name: 'Firebase', icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
    { name: 'Supabase', icon: 'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg' }
  ],
  DevOps: [
    { name: 'AWS', icon: 'https://www.logo.wine/a/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg' },
    { name: 'Google Colab', icon: 'https://w7.pngwing.com/pngs/968/991/png-transparent-google-colab-logo-tech-companies.png' },
    { name: 'Cloud', icon: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg' }
  ],
  Others: [
    { name: 'GitHub', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6DXuvit57V1DmjnlLcwst4O-sTL5D37gIQ&s' },
    { name: 'VS Code', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg' },
    { name: 'Figma', icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
    { name: 'Framer', icon: 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg' },
    { name: 'Wix', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968770.png' },
    { name: 'Canva', icon: 'https://www.vectorlogo.zone/logos/canva/canva-icon.svg' },
    { name: 'WordPress', icon: 'https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg' },
    { name: 'Netlify', icon: 'https://www.svgrepo.com/show/376339/netlify.svg' },
    { name: 'Vercel', icon: 'https://camo.githubusercontent.com/4e7f5b49af742238dd00ce8d2376716e2919162945cda776c8cd33ea8e8822a4/68747470733a2f2f7374617469632e77696b69612e6e6f636f6f6b69652e6e65742f6c6f676f70656469612f696d616765732f612f61372f56657263656c5f66617669636f6e2e7376672f7265766973696f6e2f6c61746573743f63623d3230323231303236313535383231' },
    { name: 'Webflow', icon: 'https://www.vectorlogo.zone/logos/webflow/webflow-icon.svg'},
    { name: 'FlutterFlow', icon: 'https://docs.flutterflow.io/logos/logoMark_outlinePrimary_transparent.svg'},
    { name: 'Adalo', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnAw71DBcX3N0AnwvHgAsr-HIIDsfgR2JpKw&s' }
  ]
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="min-h-screen py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
          <p className="text-gray-400">
            Here are some of my skills on which I have been working on for the past years.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {Object.entries(technicalSkills).map(([category, skills]) => (
            <SkillCard key={category} title={category} skills={skills} />
          ))}
        </div>

        <SoftSkills />
      </div>
    </section>
  );
};