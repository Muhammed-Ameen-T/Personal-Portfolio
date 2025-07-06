// src/components/Footer.jsx
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-950 border-t border-blue-900/50 py-10">
      <div className="container mx-auto px-4 justify-center">
        <div className="border-t border-blue-900/30 mt-10 text-center pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm text-center w-full flex justify-center items-center">
        Made with ❤️ By Ameen. © {currentYear}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;