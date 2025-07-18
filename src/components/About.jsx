import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

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
    <section id="about" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-16 rounded-full"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-2 flex justify-center"
            >
              <div className="relative">
                {/* Holographic frame effect */}
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl blur-xl"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                <motion.div 
                  className="relative w-80 h-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-cyan-400/30 shadow-2xl"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 40px rgba(0, 255, 255, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/src/assets/profile2.jpg" 
                    alt="About Ameen" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  
                  {/* Animated border */}
                  <motion.div 
                    className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-2xl"
                    style={{
                      background: 'linear-gradient(45deg, transparent, transparent), linear-gradient(45deg, #00ffff, #ff00ff, #ffff00)',
                      backgroundClip: 'padding-box, border-box',
                      backgroundOrigin: 'border-box'
                    }}
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>

                {/* Floating elements */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-3 h-3 bg-cyan-400 rounded-full ${
                      i === 0 ? '-top-2 -right-2' : i === 1 ? '-bottom-2 -left-2' : 'top-1/2 -left-4'
                    }`}
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 2 + i, 
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                  />
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-3 space-y-6"
            >
              <motion.h3 
                variants={itemVariants}
                className="text-3xl font-bold text-cyan-300 mb-6"
              >
                Who I Am
              </motion.h3>
              
              <motion.div variants={itemVariants} className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  I'm a passionate <span className="text-cyan-400 font-semibold">MERN Stack full-stack developer</span>, focused on building scalable, efficient, and user-friendly applications. Though a fresher, I have <span className="text-purple-400 font-semibold">1 year of hands-on experience</span> developing real-world projects using MongoDB, Express.js, React.js, and Node.js.
                </p>

                <p className="text-lg">
                  My coding journey started in <span className="text-pink-400 font-semibold">10th grade</span>, fueling my passion for development. Since then, I've committed to continuous learning and practical project-building, always staying on the cutting edge of technology.
                </p>

                <p className="text-lg">
                  Beyond coding, I keep up with industry trends, explore new technologies, and analyze their impact on development. I also enjoy <span className="text-green-400 font-semibold">gaming</span>, which sharpens my problem-solving and strategic thinking skills.
                </p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
              >
                {[
                  { icon: "🌍", text: "Based in Kochi, Kerala, India", color: "from-blue-400 to-cyan-400" },
                  { icon: "💼", text: "Available for Work", color: "from-green-400 to-emerald-400" },
                  { icon: "🎓", text: "Computer Commerce Student", color: "from-purple-400 to-pink-400" },
                  { icon: "🚀", text: "Always Learning", color: "from-orange-400 to-red-400" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(0, 255, 255, 0.2)"
                    }}
                    className={`flex items-center gap-3 bg-gradient-to-r ${item.color} bg-opacity-10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-200 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Skills preview */}
              <motion.div 
                variants={itemVariants}
                className="mt-8 p-6 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-xl border border-cyan-400/20"
              >
                <h4 className="text-xl font-semibold text-cyan-300 mb-4">Core Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'Express.js'].map((tech, index) => (
                    <motion.span 
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index, duration: 0.3 }}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-400/30 hover:border-cyan-400/60 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;