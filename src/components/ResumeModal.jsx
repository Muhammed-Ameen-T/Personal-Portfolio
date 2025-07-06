import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set up the worker for PDF.js with the correct worker path
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const ResumeModal = ({ isOpen, onClose, pdfPath }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setError(null); // Reset error when modal opens
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
    setLoading(false);
    setError(null);
  }

  function onDocumentLoadError(error) {
    console.error('Error loading PDF:', error);
    setLoading(false);
    setError('Failed to load PDF. Please try again later.');
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => Math.max(1, Math.min(numPages, prevPageNumber + offset)));
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  function zoomIn() {
    setScale(prevScale => Math.min(2, prevScale + 0.1));
  }

  function zoomOut() {
    setScale(prevScale => Math.max(0.5, prevScale - 0.1));
  }

  function resetZoom() {
    setScale(1);
  }

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-950/80 backdrop-blur-sm"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          onClick={onClose}
        >
          <motion.div 
            className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
            variants={contentVariants}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-blue-800/50 px-6 py-4 flex justify-between items-center border-b border-blue-700/50">
              <h3 className="text-xl font-bold text-blue-100">Resume</h3>
              <div className="flex gap-2">
                <button 
                  onClick={zoomOut}
                  className="p-2 bg-blue-700/50 hover:bg-blue-700 rounded-lg text-white transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button 
                  onClick={resetZoom}
                  className="p-2 bg-blue-700/50 hover:bg-blue-700 rounded-lg text-white transition-colors"
                >
                  <span className="text-sm font-medium">{Math.round(scale * 100)}%</span>
                </button>
                <button 
                  onClick={zoomIn}
                  className="p-2 bg-blue-700/50 hover:bg-blue-700 rounded-lg text-white transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button 
                  onClick={onClose}
                  className="p-2 bg-red-500/50 hover:bg-red-500 rounded-lg text-white transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-gray-800">
              {loading && (
                <div className="flex items-center justify-center h-64">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              )}
              {error ? (
                <div className="text-red-400 text-center p-4">
                  <svg className="w-12 h-12 mx-auto mb-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p>{error}</p>
                  <button 
                    onClick={() => setError(null)}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <Document
                  file={pdfPath}
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={onDocumentLoadError}
                  loading={
                    <div className="flex items-center justify-center h-64">
                      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                  }
                  className="flex justify-center items-center shadow-2xl"
                >
                  <Page 
                    pageNumber={pageNumber} 
                    scale={scale}
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                    className="shadow-xl"
                  />
                </Document>
              )}
            </div>
            
            <div className="bg-blue-800/50 px-6 py-3 flex justify-between items-center border-t border-blue-700/50">
              <div className="flex gap-2">
                <button 
                  onClick={previousPage} 
                  disabled={pageNumber <= 1}
                  className={`px-4 py-2 rounded-lg ${pageNumber <= 1 ? 'bg-gray-600 text-gray-400 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-600 text-white'} transition-colors`}
                >
                  Previous
                </button>
                <button 
                  onClick={nextPage} 
                  disabled={pageNumber >= numPages}
                  className={`px-4 py-2 rounded-lg ${pageNumber >= numPages ? 'bg-gray-600 text-gray-400 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-600 text-white'} transition-colors`}
                >
                  Next
                </button>
              </div>
              <p className="text-white">
                Page {pageNumber} of {numPages || '--'}
              </p>
              <a 
                href={pdfPath} 
                download="ameen_resume.pdf"
                className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg text-white transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15L12 3M12 15L8 11M12 15L16 11M21 15V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
