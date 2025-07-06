import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  
  const links = [
    { href: '#hero', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#skills', text: 'Skills' },
    { href: '#projects', text: 'Projects' },
    { href: '#contact', text: 'Contact' },
  ];

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setNavBackground(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const sections = links.map(link => link.href.substring(1));
    
    const handleScrollForActiveSection = () => {
      const scrollPosition = window.scrollY + 150; // Offset to trigger section change earlier
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScrollForActiveSection);
    handleScrollForActiveSection(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScrollForActiveSection);
  }, [links]);

  // Handle click on navigation links
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = sectionId.substring(1);
    setActiveSection(section);
    setMenuOpen(false);
    
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const navbarClass = navBackground
    ? 'fixed top-2 left-1/2 transform -translate-x-1/2 w-2/5 shadow-lg backdrop-blur-lg z-50 rounded-lg transition-all duration-300 py-2 md:py-3'
    : 'fixed top-2 left-1/2 transform -translate-x-1/2 w-2/5 bg-transparent z-50 transition-all duration-300 py-2 md:py-3';

  return (
    <motion.nav
      className={navbarClass}
      style={{ opacity: scrollYProgress.get() > 0 ? 1 : 1 }}
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-center">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-300 hover:text-blue-200 focus:outline-none"
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
          </button>
        </div>
        
        {/* Centered Desktop Links */}
        <div className="hidden md:flex md:items-center md:justify-center md:gap-8">
          {links.map((link, index) => (
            <motion.div key={link.href} className="relative">
              <motion.a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative text-lg transition-colors ${
                  activeSection === link.href.substring(1) ? 'text-blue-300 font-bold' : 'text-gray-300 hover:text-blue-200'
                }`}
              >
                {link.text}
              </motion.a>
              
              {/* Active Indicator */}
              {activeSection === link.href.substring(1) && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-blue-400 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Centered Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0, width: '100%' }}
          animate={{ opacity: 1, height: 'auto', width: '100%' }}
          exit={{ opacity: 0, height: 0, width: '40%' }}
          className="md:hidden backdrop-blur-lg text-center mt-2 rounded-md shadow-md w-2/5 mx-auto"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col items-center justify-center gap-4">
            {links.map((link) => (
              <motion.div key={link.href} className="relative w-full">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block text-lg py-2 ${
                    activeSection === link.href.substring(1) ? 'text-blue-300 font-bold' : 'text-gray-300'
                  }`}
                >
                  {link.text}
                </a>
                
                {/* Mobile Active Indicator */}
                {/* {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="mobileActiveIndicator" 
                    className="absolute left-0 right-0 h-full bg-blue-900 bg-opacity-20 rounded-md -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )} */}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;