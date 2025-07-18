import { motion } from 'framer-motion';
import { useRef, useState } from 'react';


const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="interactive card-3d bg-gradient-to-br from-slate-800/90 via-slate-900/80 to-slate-800/90 backdrop-blur-sm rounded-2xl overflow-hidden
                 border border-cyan-400/20 shadow-xl group project-card transition-all duration-500
                 hover:border-cyan-400/60 hover:shadow-cyan-400/20 transform-gpu"
    >
      <div className="relative overflow-hidden h-56">
        <motion.img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
          animate={{ 
            scale: hovered ? 1.1 : 1 
          }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Overlay gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"
          animate={{ 
            opacity: hovered ? 0.9 : 0.7 
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Category badge */}
        <motion.div 
          className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500/80 to-purple-500/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-cyan-400/50"
          initial={{ opacity: 0, y: -10 }}
          animate={{ 
            opacity: hovered ? 1 : 0.8,
            y: hovered ? 0 : -5
          }}
          transition={{ duration: 0.3 }}
        >
          {project.category.toUpperCase()}
        </motion.div>

        {/* Holographic effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: '200% 200%'
          }}
        />
      </div>
      
      <div className="content-3d p-6 relative">
        {/* Animated border */}
        <motion.div 
          className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-300 -z-10"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          style={{
            backgroundSize: '200% 200%'
          }}
        />

        <motion.h3 
          className="text-xl font-bold text-cyan-300 mb-3 group-hover:text-cyan-200 transition-colors"
          animate={hovered ? { 
            textShadow: "0 0 10px rgba(0, 255, 255, 0.5)"
          } : {}}
        >
          {project.title}
        </motion.h3>
        
        <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <motion.span 
              key={techIndex} 
              className="text-xs bg-gradient-to-r from-slate-700/50 to-slate-800/50 text-cyan-300 px-3 py-1 rounded-full border border-cyan-400/30 hover:border-cyan-400/60 transition-colors"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(59, 130, 246, 0.2)",
                color: "#fff"
              }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + (techIndex * 0.05) }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <motion.a 
            href={project.demoLink} 
            className="interactive flex-1 text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium transition-all duration-300 hover:from-cyan-400 hover:to-purple-400 border border-cyan-400/30"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 255, 255, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </div>
          </motion.a>
          
          <motion.a 
            href={project.codeLink} 
            className="interactive flex-1 text-center px-4 py-3 border-2 border-purple-500 text-purple-300 rounded-lg font-medium transition-all duration-300 hover:bg-purple-500/20 hover:border-purple-400 hover:text-purple-200"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Code
            </div>
          </motion.a>
        </div>

        {/* Floating particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-60 ${
              i === 0 ? 'top-2 right-2' : i === 1 ? 'bottom-8 left-2' : 'top-1/2 right-1'
            }`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              y: [0, -10, 0]
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;