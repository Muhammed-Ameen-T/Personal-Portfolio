import { motion } from 'framer-motion';
import { useRef } from 'react';

const SkillCard = ({ skill, index, categoryIndex }) => {
  const cardRef = useRef(null);
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05 + categoryIndex * 0.1,
        type: "spring",
        stiffness: 100 
      }}
      whileHover={{
        scale: 1.05,
        rotate: 2,
        boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
        zIndex: 10
      }}
      className="bg-gray-800/80 backdrop-blur-sm rounded-lg overflow-hidden border border-blue-800/50 
                 group transition-all duration-300 flex flex-col items-center justify-center 
                 hover:border-blue-500 transform-gpu relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-800/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 w-full p-5 flex items-center justify-center h-24 relative group-hover:from-gray-800/80 group-hover:to-blue-900/20 transition-all duration-500">
        <motion.div
          initial={{ y: 0 }}
          whileHover={{ y: -5 }}
          className="relative z-10"
        >
          <motion.img 
            src={skill.icon} 
            alt={skill.name} 
            className="h-12 w-12 object-contain filter drop-shadow-glow group-hover:drop-shadow-glow transition-all duration-500"
            animate={{ rotateY: [0, 10, 0, -10, 0] }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              repeatType: "mirror", 
              ease: "easeInOut" 
            }}
          />
        </motion.div>
        
        <motion.div 
          className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
          initial={{ scale: 0.8, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
        />
      </div>
      
      <motion.div 
        className="p-3 text-center w-full bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border-t border-blue-900/30 relative z-10"
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-blue-300 font-medium text-sm text-center group-hover:text-blue-200 transition-colors duration-300">
          {skill.name}
        </p>
      </motion.div>
      
      <motion.div 
        className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-300"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
    </motion.div>
  );
};

export default SkillCard;