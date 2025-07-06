import { useState } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile1.png';
import resumePdf from '../assets/resume.pdf'; // Add your resume PDF to assets folder
import ResumeModal from './ResumeModal';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);

  // Text animation for the typing effect
  const titleText = "Hello, I'm Ameen";
  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground id="hero-particles" />
      
      {/* Background Gradient Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full blur-xl"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-40 right-20 w-64 h-64 bg-indigo-500 rounded-full blur-xl"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute top-1/2 left-1/3 w-48 h-48 bg-purple-500 rounded-full blur-xl"
        />
      </div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10 z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-blue-300 flex items-center"
          >
            {titleText.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.04), duration: 0.5 }}
                className={char === ' ' ? 'text-white ml-2' : (index >= 8 ? 'text-white' : '')}
              >
                {char}
              </motion.span>
            ))}
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, delay: 0.8 + (titleText.length * 0.04) }}
              className="blinking-cursor ml-1"
            >
              |
            </motion.span>
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-3xl text-gray-300 mb-6"
          >
            Full Stack Developer
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg text-gray-400 mb-10 max-w-lg"
          >
            Building scalable, user-centric web applications with precision and passion, leveraging deep expertise in the MERN stack to create seamless, high-performance digital experiences.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex gap-4"
          >
            <motion.button
              onClick={() => setShowResumeModal(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-blue-600/30 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Resume
            </motion.button>
            
            <a 
              href="#contact" 
              className="px-6 py-3 border border-blue-600 text-blue-300 rounded-lg hover:bg-blue-600/20 transform hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-blue-600/10"
            >
              Contact Me
            </a>
          </motion.div>
          
          <div className="flex gap-4 mt-8">
            <motion.a 
              whileHover={{ y: -5, backgroundColor: '#1a56db', color: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/muhammed-ameen-t/" 
              className="bg-blue-800/50 p-3 rounded-lg text-blue-300 hover:bg-blue-700 hover:text-white transition-colors shadow-lg shadow-blue-900/20"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
                <path d="M100.28 448H7.4V154.72H100.28zm-46.44-326.8C24.5 121.2 0 96.6 0 63.56S24.5 6 54.28 6s54.28 24.6 54.28 57.56-24.5 57.64-54.28 57.64zM447.8 448h-92.88V315.52c0-31.64-.64-72.24-44-72.24-43.96 0-50.7 34.4-50.7 69.92V448H166.28V154.72H255v40.2h1.16c12.36-23.4 42.48-48 87.32-48 93.4 0 103.24 61.4 103.24 141.24z"/>
              </svg>
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, backgroundColor: '#1a56db', color: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Muhammed-Ameen-T" 
              className="bg-blue-800/50 p-3 rounded-lg text-blue-300 hover:bg-blue-700 hover:text-white transition-colors shadow-lg shadow-blue-900/20"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, backgroundColor: '#1a56db', color: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
              href="https://instagram.com/ameen.t___" 
              className="bg-blue-800/50 p-3 rounded-lg text-blue-300 hover:bg-blue-700 hover:text-white transition-colors shadow-lg shadow-blue-900/20"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, backgroundColor: '#1a56db', color: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
              href="https://x.com/muhammed_ameent" 
              className="bg-blue-800/50 p-3 rounded-lg text-blue-300 hover:bg-blue-700 hover:text-white transition-colors shadow-lg shadow-blue-900/20"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 1200 1227">
                <path d="M1010 4H829L490 469 191 4H4L420 618 4 1223H183L536 711l312 512h186L621 605 1010 4Z"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, rotateZ: 10 }}
              animate={{ opacity: 1, rotateZ: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-full overflow-hidden border-4 border-blue-300 shadow-2xl shadow-blue-500/50"
            >
              <motion.img 
                src={profileImage} 
                alt="Your profile" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            {/* Animated rings */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ delay: 0.8, duration: 1, repeat: Infinity, repeatType: "reverse" }}
              className="absolute -inset-4 border-2 border-blue-400 rounded-full"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.4, scale: 1.1 }}
              transition={{ delay: 1, duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              className="absolute -inset-8 border-2 border-blue-300 rounded-full"
            />
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center text-blue-300 hover:text-blue-200 transition-colors">
          <span className="mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </a>
      </motion.div>

      {/* Resume Modal */}
      <ResumeModal 
        isOpen={showResumeModal} 
        onClose={() => setShowResumeModal(false)}
        pdfPath={resumePdf}
      />
    </section>
  );
};

export default Hero;