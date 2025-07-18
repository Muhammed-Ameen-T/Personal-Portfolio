import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ResumeModal = ({ isOpen, onClose, pdfPath }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setLoading(true);
      // Simulate loading time
      const timer = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.9 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          onClick={onClose}
        >
          <motion.div 
            className="bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col border border-cyan-400/30"
            variants={contentVariants}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 px-6 py-4 flex justify-between items-center border-b border-cyan-400/30">
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Resume Preview
              </h3>
              <div className="flex gap-2">
                <motion.a 
                  href={pdfPath} 
                  download="Ameen_Resume.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="interactive px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 rounded-lg text-white transition-all duration-300 flex items-center gap-2 text-sm font-medium"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15L12 3M12 15L8 11M12 15L16 11M21 15V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Download PDF
                </motion.a>
                <motion.button 
                  onClick={onClose}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="interactive p-2 bg-red-500/20 hover:bg-red-500/40 rounded-lg text-red-400 hover:text-red-300 transition-colors border border-red-500/30"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.button>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-auto p-6 bg-gradient-to-br from-slate-800/50 to-purple-800/20">
              {loading ? (
                <div className="flex items-center justify-center h-full min-h-[400px]">
                  <div className="text-center">
                    <motion.div
                      className="w-16 h-16 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full mx-auto mb-4"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <p className="text-cyan-400 font-medium">Loading Resume...</p>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full min-h-[600px] bg-white rounded-lg shadow-xl overflow-hidden">
                  <iframe
                    src={`${pdfPath}#view=FitH`}
                    className="w-full h-full min-h-[600px] border-none"
                    title="Resume PDF"
                    onLoad={() => setLoading(false)}
                  />
                </div>
              )}
            </div>
            
            {/* Footer */}
            <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 px-6 py-3 flex justify-between items-center border-t border-cyan-400/30">
              <div className="text-sm text-gray-300">
                <span className="font-medium text-cyan-400">Tip:</span> Right-click to save or print
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.print()}
                  className="interactive px-4 py-2 bg-blue-500/20 hover:bg-blue-500/40 rounded-lg text-blue-400 hover:text-blue-300 transition-colors border border-blue-500/30 text-sm font-medium"
                >
                  Print
                </motion.button>
                <motion.a 
                  href={pdfPath} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="interactive px-4 py-2 bg-purple-500/20 hover:bg-purple-500/40 rounded-lg text-purple-400 hover:text-purple-300 transition-colors border border-purple-500/30 text-sm font-medium"
                >
                  Open in New Tab
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;