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
        rotateY: 10,
        boxShadow: "0 20px 40px -10px rgba(0, 255, 255, 0.3)",
        zIndex: 10
      }}
      className="interactive bg-gradient-to-br from-slate-800/90 via-slate-900/80 to-slate-800/90 backdrop-blur-sm rounded-xl overflow-hidden 
                 border border-cyan-400/20 group transition-all duration-500 flex flex-col items-center justify-center 
                 hover:border-cyan-400/60 transform-gpu relative h-32"
    >
      {/* Holographic background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Animated border */}
      <motion.div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ff00)',
          backgroundSize: '400% 400%',
          padding: '2px'
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full bg-slate-800/95 rounded-xl"></div>
      </motion.div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
        <motion.div
          initial={{ y: 0, rotateY: 0 }}
          whileHover={{ y: -5, rotateY: 10 }}
          className="relative mb-3"
        >
          <motion.img 
            src={skill.icon} 
            alt={skill.name} 
            className="h-12 w-12 object-contain filter drop-shadow-lg group-hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] transition-all duration-500"
            animate={{ 
              rotateY: [0, 5, 0, -5, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              repeatType: "mirror", 
              ease: "easeInOut" 
            }}
          />
          
          {/* Glow effect behind icon */}
          <motion.div 
            className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        
        <motion.p 
          className="text-cyan-300 font-medium text-sm text-center group-hover:text-cyan-100 transition-colors duration-300 relative"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {skill.name}
          
          {/* Text glow effect */}
          <motion.span
            className="absolute inset-0 text-cyan-300 opacity-0 group-hover:opacity-50 transition-opacity duration-300"
            style={{
              textShadow: '0 0 10px #00ffff'
            }}
          >
            {skill.name}
          </motion.span>
        </motion.p>
      </div>
      
      {/* Floating particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-60 ${
            i === 0 ? 'top-2 right-2' : i === 1 ? 'bottom-2 left-2' : 'top-1/2 right-1'
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
    </motion.div>
  );
};

export default SkillCard;