import { useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';


const Navbar = ({ activeSection }) => {
  const [navBackground, setNavBackground] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const links = [
    { href: '#hero', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#skills', text: 'Skills' },
    { href: '#projects', text: 'Projects' },
    { href: '#contact', text: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setNavBackground(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = sectionId.substring(1);
    setMenuOpen(false);
    
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      
      <motion.nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 ${
          navBackground 
            ? 'bg-slate-900/80 backdrop-blur-lg border border-cyan-400/30 shadow-lg shadow-cyan-400/20' 
            : 'bg-transparent'
        } rounded-full px-6 py-3`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link, index) => (
              <motion.div key={link.href} className="relative">
                <motion.a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`interactive relative text-sm font-medium transition-all duration-300 px-4 py-2 rounded-full ${
                    activeSection === link.href.substring(1) 
                      ? 'text-cyan-300 bg-cyan-400/20' 
                      : 'text-gray-300 hover:text-cyan-300 hover:bg-cyan-400/10'
                  }`}
                >
                  {link.text}
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="interactive text-cyan-300 hover:text-cyan-200 focus:outline-none p-2 rounded-lg bg-slate-800/50 border border-cyan-400/30"
            >
              <motion.div
                animate={{ rotate: menuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {menuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 md:hidden bg-slate-900/95 backdrop-blur-lg border border-cyan-400/30 rounded-xl shadow-lg shadow-cyan-400/20 p-4"
          >
            <div className="flex flex-col gap-2">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className={`interactive text-center py-3 px-6 rounded-lg transition-all duration-300 ${
                    activeSection === link.href.substring(1) 
                      ? 'text-cyan-300 bg-cyan-400/20 border border-cyan-400/50' 
                      : 'text-gray-300 hover:text-cyan-300 hover:bg-cyan-400/10'
                  }`}
                >
                  {link.text}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;