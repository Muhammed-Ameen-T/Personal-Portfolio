import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-slate-900 via-slate-800/50 to-transparent border-t border-cyan-400/20 py-12">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"
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
          className="absolute top-0 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Logo/Name */}
          <motion.div 
            className="mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AMEEN
            </h3>
            <p className="text-gray-400 mt-2">Full Stack Developer</p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { href: "https://www.linkedin.com/in/muhammed-ameen-t/", icon: "M100.28 448H7.4V154.72H100.28zm-46.44-326.8C24.5 121.2 0 96.6 0 63.56S24.5 6 54.28 6s54.28 24.6 54.28 57.56-24.5 57.64-54.28 57.64zM447.8 448h-92.88V315.52c0-31.64-.64-72.24-44-72.24-43.96 0-50.7 34.4-50.7 69.92V448H166.28V154.72H255v40.2h1.16c12.36-23.4 42.48-48 87.32-48 93.4 0 103.24 61.4 103.24 141.24z", viewBox: "0 0 448 512", name: "LinkedIn" },
              { href: "https://github.com/Muhammed-Ameen-T", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", viewBox: "0 0 24 24", name: "GitHub" },
              { href: "https://instagram.com/ameen.t___", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z", viewBox: "0 0 24 24", name: "Instagram" },
              { href: "https://x.com/muhammed_ameent", icon: "M1010 4H829L490 469 191 4H4L420 618 4 1223H183L536 711l312 512h186L621 605 1010 4Z", viewBox: "0 0 1200 1227", name: "X" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="interactive bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-3 rounded-lg text-cyan-400 hover:text-cyan-300 transition-all duration-300 border border-slate-700/50 hover:border-cyan-400/50 group"
                title={social.name}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox={social.viewBox}>
                  <path d={social.icon}/>
                </svg>
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div 
            className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-400"
          >
            <p className="text-center flex items-center gap-2">
              <span>Made with</span>
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                  color: ["#ef4444", "#ec4899", "#8b5cf6", "#3b82f6", "#ef4444"]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-red-500"
              >
                ❤️
              </motion.span>
              <span>by</span>
              <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ameen
              </span>
            </p>
            <span className="hidden md:block text-gray-600">•</span>
            <p className="text-center">
              © {currentYear} All rights reserved
            </p>
          </motion.div>

          {/* Floating elements */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30 ${
                i === 0 ? 'top-4 left-1/4' :
                i === 1 ? 'top-8 right-1/3' :
                i === 2 ? 'bottom-8 left-1/3' :
                i === 3 ? 'bottom-4 right-1/4' :
                'top-1/2 left-1/2'
              }`}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
                y: [0, -10, 0]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5
              }}
            />
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;