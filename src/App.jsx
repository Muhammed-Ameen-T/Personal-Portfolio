import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Resume from './components/Resume.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Simulate loading to show animation (reduced to 1.5s for better UX)
    setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Intersection Observer for sections
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-blue-950">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1, 1.2, 1],
            opacity: [0, 1]
          }}
          transition={{ 
            duration: 1.5, 
            ease: "easeInOut",
            times: [0, 0.6, 0.8, 1]
          }}
          className="text-5xl text-blue-300 font-bold relative"
        >
          <span>Welcome to My Portfolio</span>
          <motion.div 
            className="absolute -inset-8 border-2 rounded-full opacity-0"
            animate={{ 
              scale: [1, 1.5],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeOut",
              times: [0, 1]
            }}
          />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-blue-950 text-gray-100 min-h-screen overflow-x-hidden">
      <CustomCursor />
      <Navbar activeSection={activeSection} />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <Hero key="hero" />
          <About key="about" />
          <Skills key="skills" />
          
          <Projects key="projects" />
          <Contact key="contact" />
          {/* <Resume key="resume" /> */}
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;