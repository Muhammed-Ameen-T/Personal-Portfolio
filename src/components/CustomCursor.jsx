import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);
  const mousePosition = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    const updateCursorPosition = () => {
      if (cursorRef.current && trailRef.current) {
        cursorRef.current.style.transform = `translate3d(${mousePosition.current.x}px, ${mousePosition.current.y}px, 0)`;
        trailRef.current.style.transform = `translate3d(${mousePosition.current.x}px, ${mousePosition.current.y}px, 0)`;
      }
      rafId.current = requestAnimationFrame(updateCursorPosition);
    };

    const handleMouseMove = (e) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY
      };
      
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleInteractiveElements = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('interactive');

      setCursorVariant(isInteractive ? 'hover' : 'default');
    };

    // Start animation loop
    rafId.current = requestAnimationFrame(updateCursorPosition);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleInteractiveElements, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleInteractiveElements);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  const variants = {
    default: {
      height: 20,
      width: 20,
      backgroundColor: '#00ffff',
      opacity: isVisible ? 0.8 : 0,
      mixBlendMode: 'screen',
    },
    hover: {
      height: 40,
      width: 40,
      backgroundColor: '#ff00ff',
      opacity: isVisible ? 0.9 : 0,
      mixBlendMode: 'screen',
    },
  };

  const trailVariants = {
    default: {
      height: 40,
      width: 40,
      backgroundColor: '#00ffff',
      opacity: isVisible ? 0.2 : 0,
    },
    hover: {
      height: 60,
      width: 60,
      backgroundColor: '#ff00ff',
      opacity: isVisible ? 0.3 : 0,
    },
  };

  return (
    <>
      <motion.div
        ref={trailRef}
        className="custom-cursor-trail fixed top-0 left-0 rounded-full z-50 pointer-events-none border border-cyan-400"
        variants={trailVariants}
        animate={cursorVariant}
        initial="default"
        style={{ 
          position: 'fixed',
          top: '-30px',
          left: '-30px',
          willChange: 'transform',
        }}
        transition={{ 
          type: 'spring',
          mass: 0.8,
          damping: 30,
          stiffness: 400,
          opacity: { duration: 0.2 }
        }}
      />
      <motion.div
        ref={cursorRef}
        className="custom-cursor fixed top-0 left-0 rounded-full z-50 pointer-events-none"
        variants={variants}
        animate={cursorVariant}
        initial="default"
        style={{ 
          position: 'fixed',
          top: '-10px',
          left: '-10px',
          willChange: 'transform',
          boxShadow: '0 0 20px currentColor'
        }}
        transition={{ 
          type: 'spring',
          mass: 0.3,
          damping: 28,
          stiffness: 600,
          opacity: { duration: 0.2 }
        }}
      />
    </>
  );
};

export default CustomCursor;