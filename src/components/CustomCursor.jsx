import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);
  const mousePosition = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    const updateCursorPosition = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mousePosition.current.x}px, ${mousePosition.current.y}px, 0)`;
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
      const isInteractive = 
        e.target.tagName === 'A' || 
        e.target.tagName === 'BUTTON' || 
        e.target.closest('a') || 
        e.target.closest('button') ||
        e.target.classList.contains('interactive');

      setCursorVariant(isInteractive ? 'hover' : 'default');
    };

    // Start animation loop
    rafId.current = requestAnimationFrame(updateCursorPosition);

    // Add event listeners with passive option for better performance
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
      height: 24,
      width: 24,
      backgroundColor: '#60a5fa',
      mixBlendMode: 'difference',
      opacity: isVisible ? 1 : 0,
    },
    hover: {
      height: 40,
      width: 40,
      backgroundColor: '#3b82f6',
      mixBlendMode: 'difference',
      opacity: isVisible ? 1 : 0,
    },
  };

  return (
    <motion.div
      ref={cursorRef}
      className="custom-cursor fixed top-0 left-0 rounded-full z-50 pointer-events-none"
      variants={variants}
      animate={cursorVariant}
      initial="default"
      style={{ 
        position: 'fixed',
        top: '-20px',
        left: '-20px',
        willChange: 'transform',
      }}
      transition={{ 
        type: 'spring',
        mass: 0.5,
        damping: 28,
        stiffness: 500,
        opacity: { duration: 0.2 }
      }}
    />
  );
};

export default CustomCursor;