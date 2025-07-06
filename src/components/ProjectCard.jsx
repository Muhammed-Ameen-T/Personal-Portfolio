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
      className="card-3d bg-blue-900/30 backdrop-blur-sm rounded-xl overflow-hidden
                 border border-blue-800 shadow-lg group project-card transition-all duration-500
                 hover:border-blue-600 hover:shadow-blue-700/20 transform-gpu"
    >
      <div className="relative overflow-hidden h-48">
        <motion.img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
          animate={{ 
            scale: hovered ? 1.1 : 1 
          }}
          transition={{ duration: 0.5 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"
          animate={{ 
            opacity: hovered ? 0.8 : 0.6 
          }}
          transition={{ duration: 0.3 }}
        />
        
        <motion.div 
          className="absolute top-4 right-4 bg-blue-600/80 text-white text-xs font-bold px-2 py-1 rounded-full"
          initial={{ opacity: 0, y: -10 }}
          animate={{ 
            opacity: hovered ? 1 : 0,
            y: hovered ? 0 : -10
          }}
          transition={{ duration: 0.3 }}
        >
          {project.category}
        </motion.div>
      </div>
      
      <div className="content-3d p-6 relative">
        <h3 className="text-xl font-bold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <motion.span 
              key={techIndex} 
              className="text-xs bg-blue-800/50 text-blue-300 px-2 py-1 rounded"
              whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.5)", color: "#fff" }}
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
            className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Live Demo
          </motion.a>
          <motion.a 
            href={project.codeLink} 
            className="flex-1 text-center px-4 py-2 border border-blue-600 text-blue-300 rounded hover:bg-blue-600/20 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Code
          </motion.a>
        </div>
        
        {/* Animated border */}
        <motion.div 
          className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-300 -z-10"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;