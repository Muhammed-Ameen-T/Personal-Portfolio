// src/components/About.jsx
import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import profileImage2 from '../assets/profile2.jpg'

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-10 text-center text-blue-300"
          >
            About Me
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            <motion.div 
              variants={itemVariants}
              className="md:col-span-2 flex justify-center"
            >
              <div className="card-3d w-64 h-64 bg-gradient-to-br from-blue-800 to-indigo-900 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={profileImage2} 
                  alt="Profile" 
                  className="w-full h-full object-cover content-3d"
                />
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="md:col-span-3"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-200">Who I Am</h3>
              <p className="text-gray-300 mb-3 leading-relaxed">
                I'm a passionate MERN Stack full-stack developer, focused on building scalable, efficient, and user-friendly applications. Though a fresher, I have 1 year of hands-on experience developing real-world projects using MongoDB, Express.js, React.js, and Node.js.
              </p>

              <p className="text-gray-300 mb-3 leading-relaxed">
                My coding journey started in 10th grade, fueling my passion for development. Since then, I've committed to continuous learning and practical project-building.
              </p>

              <p className="text-gray-300 mb-0 leading-relaxed">
                Beyond coding, I keep up with industry trends, explore new technologies, and analyze their impact on development. I also enjoy gaming, which sharpens my problem-solving and strategic thinking skills.
              </p>


              
              <div className="flex flex-wrap gap-4 mt-6">
                <motion.div 
                  variants={itemVariants}
                  className="flex items-center gap-2 bg-blue-900/50 px-4 py-2 rounded-lg"
                >
                  <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                  </svg>
                  <span>Based in Kochi, Kerala, India</span>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="flex items-center gap-2 bg-blue-900/50 px-4 py-2 rounded-lg"
                >
                  <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Available for Work</span>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="flex items-center gap-2 bg-blue-900/50 px-4 py-2 rounded-lg"
                >
                  <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>Computer Commerce Student</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;